/**
 * Game Engine
 * Handles rendering, navigation, and game flow
 */

import { STATE, applyEffects, checkCondition } from './state.js';
import { CONTENT } from './content/index.js';
import { saveGame, hasSavedGame, loadGame, getSaveInfo, resetState, deleteSave } from './save.js';

/**
 * Initialize the game
 */
export function initGame() {
    updateLoadButton();

    // Check for saved game
    if (hasSavedGame()) {
        showContinuePrompt();
    } else {
        showUnit("INTRO");
    }
}

/**
 * Show a specific unit/scene
 * @param {string} unitId - The ID of the unit to show
 */
export function showUnit(unitId) {
    const unit = CONTENT[unitId];
    if (!unit) {
        console.error("Unit not found:", unitId);
        return;
    }

    STATE.currentUnit = unitId;
    if (unit.act) STATE.act = unit.act;

    updateStatusBar();
    renderUnit(unit);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Render a unit to the DOM
 * @param {Object} unit - The unit object to render
 */
export function renderUnit(unit) {
    const container = document.getElementById('story-container');

    let prose, choices, prompt, next;

    // Handle dynamic content
    if (unit.dynamic && unit.getProseAndChoices) {
        const dynamic = unit.getProseAndChoices();
        prose = dynamic.prose || unit.prose;
        choices = dynamic.choices || unit.choices;
        prompt = dynamic.prompt || unit.prompt;
        next = dynamic.next || unit.next;
    } else {
        prose = unit.prose;
        choices = unit.choices;
        prompt = unit.prompt;
        next = unit.next;
    }

    let html = '';

    // Title
    if (unit.title && !unit.isIntro) {
        html += `<h2 class="unit-title">${unit.title}</h2>`;
    }

    // Prose
    html += `<div class="prose fade-in">${prose}</div>`;

    // Choices
    if (choices && choices.length > 0) {
        html += '<div class="choices-container fade-in">';
        if (prompt) {
            html += `<p class="choices-prompt">${prompt}</p>`;
        }

        // Filter choices by condition, but preserve original indices
        choices.forEach((choice, originalIndex) => {
            if (choice.condition && !checkCondition(choice.condition)) {
                return; // Skip this choice
            }
            html += `<button class="choice-button" data-index="${originalIndex}">${choice.text}</button>`;
        });

        html += '</div>';
    } else if (next) {
        html += '<div class="choices-container fade-in">';
        html += `<button class="continue-button" id="continue-btn">Continue</button>`;
        html += '</div>';
    }

    container.innerHTML = html;

    // Attach event listeners
    container.querySelectorAll('.choice-button').forEach(btn => {
        btn.addEventListener('click', () => selectChoiceByData(btn));
    });

    const continueBtn = container.querySelector('#continue-btn');
    if (continueBtn) {
        continueBtn.addEventListener('click', continueStory);
    }
}

/**
 * Handle choice selection from button data attribute
 * @param {HTMLElement} button - The clicked button
 */
function selectChoiceByData(button) {
    const index = parseInt(button.getAttribute('data-index'));
    selectChoice(index);
}

/**
 * Select a choice by index
 * @param {number} index - The choice index
 */
export function selectChoice(index) {
    const unit = CONTENT[STATE.currentUnit];

    let choices;
    if (unit.dynamic && unit.getProseAndChoices) {
        choices = unit.getProseAndChoices().choices;
    } else {
        choices = unit.choices;
    }

    const choice = choices[index];
    if (!choice) return;

    if (choice.effects) {
        applyEffects(choice.effects);
    }

    STATE.choices.push({
        unit: STATE.currentUnit,
        choice: index,
        text: choice.text
    });

    showUnit(choice.next);

    // Auto-save after each choice (silent)
    saveGame(true);
}

/**
 * Continue to the next unit (for units without choices)
 */
export function continueStory() {
    const unit = CONTENT[STATE.currentUnit];
    let next;
    if (unit.dynamic && unit.getProseAndChoices) {
        next = unit.getProseAndChoices().next;
    } else {
        next = unit.next;
    }
    if (next) {
        showUnit(next);
        saveGame(true);
    }
}

/**
 * Update the status bar display
 */
export function updateStatusBar() {
    document.getElementById('current-act').textContent = STATE.act;

    const threadStatus = document.getElementById('thread-status');
    if (STATE.threadsCompleted.length > 0) {
        threadStatus.innerHTML = `Threads: <strong>${STATE.threadsCompleted.length}/4</strong>`;
    } else {
        threadStatus.textContent = '';
    }

    const harborLabels = ['Quiet', 'Tense', 'Closing', 'Critical', 'Crisis'];
    document.getElementById('harbor-status').textContent = harborLabels[Math.min(STATE.harborStage, 4)];
}

/**
 * Update the metrics display panel
 */
export function updateMetrics() {
    document.getElementById('metric-dispersal').textContent = STATE.dispersal;
    document.getElementById('metric-dispersal').className = 'metric-value' + (STATE.dispersal > 0 ? ' active' : '');

    document.getElementById('metric-defense').textContent = STATE.defense;
    document.getElementById('metric-defense').className = 'metric-value' + (STATE.defense > 0 ? ' active' : '');

    document.getElementById('metric-intel').textContent = STATE.intel;
    document.getElementById('metric-intel').className = 'metric-value' + (STATE.intel > 0 ? ' active' : '');

    const alliances = [];
    if (STATE.temple) alliances.push('Temple');
    if (STATE.city) alliances.push('City');
    if (STATE.community) alliances.push('Community');
    document.getElementById('metric-alliances').textContent = alliances.length > 0 ? alliances.join(', ') : 'None';
}

/**
 * Toggle the metrics panel visibility
 */
export function toggleMetrics() {
    const panel = document.getElementById('metrics-panel');
    const toggle = document.querySelector('.debug-toggle');
    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        toggle.textContent = 'Hide Stats';
    } else {
        panel.classList.add('hidden');
        toggle.textContent = 'Show Stats';
    }
}

/**
 * Show notification message
 * @param {string} message - The message to display
 */
export function showNotification(message) {
    const notification = document.getElementById('save-notification');
    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

/**
 * Update the load button state
 */
export function updateLoadButton() {
    const loadBtn = document.getElementById('load-btn');
    if (loadBtn) {
        loadBtn.disabled = !hasSavedGame();
    }
}

/**
 * Show the continue/new game prompt
 */
export function showContinuePrompt() {
    const container = document.getElementById('story-container');
    const saveInfo = getSaveInfo();

    let infoText = '';
    if (saveInfo) {
        infoText = `<p class="save-info">Saved: ${saveInfo.date}<br>Act ${saveInfo.act}</p>`;
    }

    container.innerHTML = `
        <div class="continue-prompt fade-in">
            <h2>Welcome Back</h2>
            <p>You have a saved game in progress.</p>
            ${infoText}
            <div class="continue-buttons">
                <button class="btn-continue" id="btn-continue">Continue</button>
                <button class="btn-new" id="btn-new">New Game</button>
            </div>
        </div>
    `;

    document.getElementById('btn-continue').addEventListener('click', () => {
        loadGame();
        showUnit(STATE.currentUnit);
    });

    document.getElementById('btn-new').addEventListener('click', startNewGame);
}

/**
 * Start a new game
 */
export function startNewGame() {
    resetState();
    deleteSave();
    updateStatusBar();
    updateMetrics();
    showUnit('INTRO');
}

/**
 * Confirm and restart the game
 */
export function confirmRestart() {
    if (STATE.currentUnit === 'INTRO') {
        showNotification('Already at start');
        return;
    }

    if (confirm('Start a new game? Your current progress will be lost unless you save first.')) {
        resetState();
        updateStatusBar();
        updateMetrics();
        showUnit('INTRO');
        showNotification('New game started');
    }
}
