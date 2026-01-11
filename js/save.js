/**
 * Save/Load System
 * Handles game persistence via localStorage
 */

import { STATE, DEFAULT_STATE } from './state.js';

const SAVE_KEY = 'alexandria-dilemma-save';

/**
 * Save the current game state
 * @param {boolean} silent - If true, don't show notification
 */
export function saveGame(silent = false) {
    const saveData = {
        state: { ...STATE },
        timestamp: Date.now(),
        version: 1
    };

    try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
        if (!silent) {
            // Import dynamically to avoid circular dependency
            import('./engine.js').then(engine => {
                engine.showNotification('Game saved');
                engine.updateLoadButton();
            });
        } else {
            import('./engine.js').then(engine => {
                engine.updateLoadButton();
            });
        }
    } catch (e) {
        if (!silent) {
            import('./engine.js').then(engine => {
                engine.showNotification('Save failed');
            });
        }
        console.error('Save failed:', e);
    }
}

/**
 * Load the saved game state
 */
export function loadGame() {
    try {
        const saveData = JSON.parse(localStorage.getItem(SAVE_KEY));
        if (saveData && saveData.state) {
            Object.assign(STATE, saveData.state);
            import('./engine.js').then(engine => {
                engine.updateStatusBar();
                engine.updateMetrics();
                engine.showNotification('Game loaded');
            });
        }
    } catch (e) {
        import('./engine.js').then(engine => {
            engine.showNotification('Load failed');
        });
        console.error('Load failed:', e);
    }
}

/**
 * Check if a saved game exists
 * @returns {boolean}
 */
export function hasSavedGame() {
    try {
        const saveData = localStorage.getItem(SAVE_KEY);
        return saveData !== null;
    } catch (e) {
        return false;
    }
}

/**
 * Get information about the saved game
 * @returns {Object|null} Save info or null if no save exists
 */
export function getSaveInfo() {
    try {
        const saveData = JSON.parse(localStorage.getItem(SAVE_KEY));
        if (saveData) {
            const date = new Date(saveData.timestamp);
            const act = saveData.state.act || 1;
            const unit = saveData.state.currentUnit || 'INTRO';
            return {
                date: date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
                act: act,
                unit: unit
            };
        }
    } catch (e) {
        return null;
    }
    return null;
}

/**
 * Delete the saved game
 */
export function deleteSave() {
    try {
        localStorage.removeItem(SAVE_KEY);
        import('./engine.js').then(engine => {
            engine.updateLoadButton();
        });
    } catch (e) {
        console.error('Delete save failed:', e);
    }
}

/**
 * Reset the game state to defaults
 */
export function resetState() {
    Object.keys(DEFAULT_STATE).forEach(key => {
        if (Array.isArray(DEFAULT_STATE[key])) {
            STATE[key] = [...DEFAULT_STATE[key]];
        } else {
            STATE[key] = DEFAULT_STATE[key];
        }
    });
}
