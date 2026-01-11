/**
 * Main Entry Point
 * Initializes the game and sets up global event handlers
 */

import { initGame, toggleMetrics, confirmRestart, showNotification, updateLoadButton } from './engine.js';
import { saveGame, loadGame } from './save.js';

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initGame();

    // Set up toolbar button handlers
    document.getElementById('save-btn').addEventListener('click', () => saveGame(false));
    document.getElementById('load-btn').addEventListener('click', loadGame);
    document.getElementById('restart-btn').addEventListener('click', confirmRestart);

    // Set up metrics toggle
    document.querySelector('.debug-toggle').addEventListener('click', toggleMetrics);

    // Update load button state
    updateLoadButton();
});
