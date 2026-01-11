/**
 * Game State Management
 * Handles all game state, including metrics, choices, and thread progress
 */

// Default state template
export const DEFAULT_STATE = {
    currentUnit: "INTRO",
    act: 1,
    dispersal: 0,
    defense: 0,
    intel: 0,
    temple: 0,
    city: 0,
    community: 0,
    threadsCompleted: [],
    threadsVisited: [],
    threadsStarted: [],
    harborStage: 0,
    act1Alignment: null,
    askedHypatia: false,
    askedTheron: false,
    cityDismissed: false,
    choices: [],
    // Kyros companion state
    kyrosJoined: false,
    kyrosPickupTiming: null, // "early" | "late" | "never"
    kyrosRelationship: "neutral", // "positive" | "neutral" | "guarded"
    kyrosConfidence: "high", // "high" | "medium" | "low"
    kyrosSilencedCount: 0,
    kyrosPoetryDiscussed: false,
    kyrosFamilyDiscussed: false,
    kyrosDemetriaEngaged: false,
    kyrosDemetriaSilenced: false,
    kyrosSapphoDefense: false,
    kyrosMiriamConnection: false
};

// Current game state (mutable)
export const STATE = { ...DEFAULT_STATE };

/**
 * Reset state to defaults
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

/**
 * Apply effects from a choice to the game state
 * @param {Object} effects - The effects object from a choice
 */
export function applyEffects(effects) {
    if (effects.dispersal) STATE.dispersal += effects.dispersal;
    if (effects.defense) STATE.defense += effects.defense;
    if (effects.intel) STATE.intel += effects.intel;
    if (effects.temple) STATE.temple = effects.temple;
    if (effects.city) STATE.city = effects.city;
    if (effects.community) STATE.community = effects.community;
    if (effects.act1Alignment) STATE.act1Alignment = effects.act1Alignment;
    if (effects.finalChoice) STATE.finalChoice = effects.finalChoice;
    if (effects.askedHypatia) STATE.askedHypatia = true;
    if (effects.askedTheron) STATE.askedTheron = true;
    if (effects.harborAdvance) STATE.harborStage += effects.harborAdvance;
    if (effects.cityDismissed) STATE.cityDismissed = true;

    // Kyros companion effects
    if (effects.kyrosJoined) STATE.kyrosJoined = true;
    if (effects.kyrosPickupTiming) STATE.kyrosPickupTiming = effects.kyrosPickupTiming;
    if (effects.kyrosRelationship) STATE.kyrosRelationship = effects.kyrosRelationship;
    if (effects.kyrosConfidence) STATE.kyrosConfidence = effects.kyrosConfidence;
    if (effects.kyrosSilencedCount) STATE.kyrosSilencedCount += effects.kyrosSilencedCount;
    if (effects.kyrosPoetryDiscussed) STATE.kyrosPoetryDiscussed = true;
    if (effects.kyrosFamilyDiscussed) STATE.kyrosFamilyDiscussed = true;
    if (effects.kyrosDemetriaEngaged) STATE.kyrosDemetriaEngaged = true;
    if (effects.kyrosDemetriaSilenced) STATE.kyrosDemetriaSilenced = true;
    if (effects.kyrosSapphoDefense) STATE.kyrosSapphoDefense = true;
    if (effects.kyrosMiriamConnection) STATE.kyrosMiriamConnection = true;

    if (effects.threadsStarted) {
        effects.threadsStarted.forEach(t => {
            if (!STATE.threadsStarted.includes(t)) STATE.threadsStarted.push(t);
        });
    }

    if (effects.threadsVisited) {
        effects.threadsVisited.forEach(t => {
            if (!STATE.threadsVisited.includes(t)) STATE.threadsVisited.push(t);
        });
    }

    if (effects.threadsCompleted) {
        effects.threadsCompleted.forEach(t => {
            if (!STATE.threadsCompleted.includes(t)) STATE.threadsCompleted.push(t);
        });
    }
}

/**
 * Check if a condition is met based on current state
 * @param {Object} condition - The condition to check
 * @returns {boolean} Whether the condition is met
 */
export function checkCondition(condition) {
    if (condition.notCompleted) {
        if (STATE.threadsCompleted.includes(condition.notCompleted)) {
            return false;
        }
    }
    if (condition.temple !== undefined && STATE.temple < condition.temple) return false;
    if (condition.city !== undefined && STATE.city < condition.city) return false;
    if (condition.community !== undefined && STATE.community < condition.community) return false;
    if (condition.kyrosJoined !== undefined && STATE.kyrosJoined !== condition.kyrosJoined) return false;
    if (condition.kyrosConfidence !== undefined && STATE.kyrosConfidence !== condition.kyrosConfidence) return false;
    return true;
}

/**
 * Load state from an object (used by save system)
 * @param {Object} savedState - State object to load
 */
export function loadState(savedState) {
    Object.assign(STATE, savedState);
}

/**
 * Get a copy of current state (for saving)
 * @returns {Object} Copy of current state
 */
export function getStateCopy() {
    return { ...STATE };
}
