#!/usr/bin/env node
/**
 * Playthrough Generator for The Alexandria Dilemma
 *
 * A utility for Claude Code to generate full game playthroughs saved as text files.
 *
 * Usage:
 *   node tools/playthrough-generator.mjs [options]
 *
 * Options:
 *   --path <name>       Use a predefined path (evacuate, defend, temple, hybrid, inaction)
 *   --choices <list>    Comma-separated choice indices (e.g., "0,1,0,2,0")
 *   --interactive       Show choices and prompt for input
 *   --output <file>     Output file path (default: playthroughs/<path>-<timestamp>.txt)
 *   --list-paths        List all predefined paths
 *   --verbose           Show state changes during playthrough
 *
 * Examples:
 *   node tools/playthrough-generator.mjs --path evacuate
 *   node tools/playthrough-generator.mjs --path defend --verbose
 *   node tools/playthrough-generator.mjs --choices "0,0,0,1,2,0,0"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

// ============================================================================
// STATE MANAGEMENT (adapted from js/state.js)
// ============================================================================

const DEFAULT_STATE = {
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
    kyrosJoined: false,
    kyrosPickupTiming: null,
    kyrosRelationship: "neutral",
    kyrosConfidence: "high",
    kyrosSilencedCount: 0,
    kyrosPoetryDiscussed: false,
    kyrosFamilyDiscussed: false,
    kyrosDemetriaEngaged: false,
    kyrosDemetriaSilenced: false,
    kyrosSapphoDefense: false,
    kyrosMiriamConnection: false
};

let STATE = { ...DEFAULT_STATE };

function resetState() {
    Object.keys(DEFAULT_STATE).forEach(key => {
        if (Array.isArray(DEFAULT_STATE[key])) {
            STATE[key] = [...DEFAULT_STATE[key]];
        } else {
            STATE[key] = DEFAULT_STATE[key];
        }
    });
}

function applyEffects(effects) {
    if (!effects) return;
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

function checkCondition(condition) {
    if (!condition) return true;
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

// ============================================================================
// CONTENT LOADING (dynamically import all content)
// ============================================================================

async function loadContent() {
    // We need to dynamically import the content files
    // First, let's read them and evaluate them in our context
    const contentFiles = [
        'intro.js',
        'act1.js',
        'act2-network.js',
        'act2-library.js',
        'act2-temple.js',
        'act2-city.js',
        'act2-kyros.js',
        'act2-hub.js',
        'act3.js',
        'act4.js'
    ];

    let CONTENT = {};

    for (const file of contentFiles) {
        const filePath = path.join(PROJECT_ROOT, 'js', 'content', file);
        let code = fs.readFileSync(filePath, 'utf-8');

        // Remove import statements and export keywords for eval
        code = code.replace(/import\s*{[^}]*}\s*from\s*['"][^'"]*['"];?/g, '');
        code = code.replace(/export\s+const\s+/g, 'const ');

        // Create a function that returns the content object
        // We need to provide STATE to dynamic functions
        const wrappedCode = `
            (function(STATE) {
                ${code}
                // Return the content object (find the variable name)
                return ${file.replace('.js', '').replace(/-/g, '_').toUpperCase()}_CONTENT;
            })
        `;

        try {
            const contentFn = eval(wrappedCode);
            const content = contentFn(STATE);
            Object.assign(CONTENT, content);
        } catch (e) {
            console.error(`Error loading ${file}:`, e.message);
        }
    }

    return CONTENT;
}

// ============================================================================
// HTML TO TEXT CONVERSION
// ============================================================================

function htmlToText(html) {
    if (!html) return '';

    return html
        // Convert line breaks
        .replace(/<br\s*\/?>/gi, '\n')
        // Convert paragraphs to double newlines
        .replace(/<\/p>\s*<p>/gi, '\n\n')
        .replace(/<p[^>]*>/gi, '')
        .replace(/<\/p>/gi, '\n\n')
        // Convert emphasis
        .replace(/<em>/gi, '_')
        .replace(/<\/em>/gi, '_')
        .replace(/<strong>/gi, '*')
        .replace(/<\/strong>/gi, '*')
        .replace(/<i>/gi, '_')
        .replace(/<\/i>/gi, '_')
        .replace(/<b>/gi, '*')
        .replace(/<\/b>/gi, '*')
        // Convert blockquotes
        .replace(/<blockquote[^>]*>/gi, '\n> ')
        .replace(/<\/blockquote>/gi, '\n')
        // Remove other HTML tags
        .replace(/<[^>]+>/g, '')
        // Decode HTML entities
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&mdash;/g, '—')
        .replace(/&ndash;/g, '–')
        .replace(/&hellip;/g, '...')
        // Clean up whitespace
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

// ============================================================================
// PREDEFINED PATHS
// ============================================================================

const PREDEFINED_PATHS = {
    // Evacuate ending - side with Theron, gather intel, ally with Miriam
    evacuate: {
        description: "Side with Theron's evacuation plan. Gather intelligence and ally with Miriam.",
        choices: [
            { match: "Begin" },
            { match: "Descend and enter" },
            { match: "saw the ships" },
            { match: "Wait for Hypatia", fallback: -1 },  // A1-03: skip questioning
            { match: "Let them continue" },  // A1-04: skip challenges
            { match: "Seventy thousand" },  // A1-06: alignment choice
            { match: "Find Kyros first" },  // A1-08: start Kyros thread
            { match: "in the case" },  // Kyros pickup
            { match: "That's why you're here" },
            { match: "exactly the question" },
            { match: "Continue into the city" },
            { match: "harbor" },  // A2-HUB: go to harbor
            { match: "Return to the Chamber" },  // After harbor
            { match: "Library. Find Miriam" },  // A3-01: go to library
            { match: "knowledge itself" },
            { match: "worth preserving" },
            { match: "ally" },
            { match: "Return", fallback: 0 },
            { match: "ready" },  // A3-01: ready to decide
            { match: "evacuate" }  // A3-03: final choice
        ]
    },

    // Defend ending - side with Hypatia, get city alliance
    defend: {
        description: "Side with Hypatia's defense plan. Build relationships with the city workers.",
        choices: [
            { match: "Begin" },
            { match: "Descend and enter" },
            { match: "rumors" },
            { match: "Wait for Hypatia", fallback: -1 },  // A1-03
            { match: "Let them continue" },  // A1-04
            { match: "Fragments without context" },  // A1-06: side with Hypatia
            { match: "Find Kyros first" },  // A1-08
            { match: "in the case" },  // Kyros pickup
            { match: "That's why you're here" },
            { match: "exactly the question" },
            { match: "Continue into the city" },
            { match: "city. Find the workers" },  // A2-HUB: go to city
            { match: "Find the construction site" },  // A2-CITY
            { match: "understand how the city sees" },  // A2-CITY-ENCOUNTER
            { match: "happened to your father" },  // A2-CITY-UNDERSTAND
            { match: "sorry" },  // A2-CITY-FATHER
            { match: "daughter", fallback: 0 },  // A2-CITY-SORRY -> daughter
            { match: "failed you", fallback: 0 },  // A2-CITY-DAUGHTER
            { match: "What would it take", fallback: 0 },  // A2-CITY-NO-ANSWER
            { match: "Tell me what you know", fallback: 0 },  // A2-CITY-WHAT-WOULD-IT-TAKE
            { match: "Passage for fifty", fallback: 0 },  // A2-CITY-FIRE or similar
            { match: "Fifty people. Done" },  // Accept Demetria's offer
            { match: "Return", fallback: 0 },  // A2-CITY-ACCEPT
            { match: "harbor" },  // A2-HUB: go to harbor for intel
            { match: "Return to the Chamber" },  // After harbor
            { match: "ready" },  // A3-01
            { match: "defend" }  // A3-03: defend choice
        ]
    },

    // Temple ending - ally with Khaemwaset
    temple: {
        description: "Make a deal with Khaemwaset to store texts in the Serapeum.",
        choices: [
            { match: "Begin" },
            { match: "Descend and enter" },
            { match: "nothing. Start from the beginning" },
            { match: "Wait for Hypatia", fallback: -1 },  // A1-03
            { match: "Let them continue" },  // A1-04
            { match: "don't know yet" },  // A1-06: neutral
            { match: "Serapeum. Find Khaemwaset" },  // A1-08: go to temple first
            { match: "Follow", fallback: 0 },  // A2-TEMPLE
            { match: "What can you offer" },  // A2-TEMPLE-ENCOUNTER
            { match: "And your price" },  // A2-TEMPLE-OFFER
            { match: "Why do you want" },  // A2-TEMPLE-PRICE
            { match: "No. It's honest" },  // A2-TEMPLE-ACKNOWLEDGMENT
            { match: "Done" },  // A2-TEMPLE-TERMS: accept
            { match: "Return to the city", fallback: 0 },  // A2-TEMPLE-ACCEPT
            { match: "Kyros", fallback: 0 },  // A2-HUB: pick up Kyros
            { match: "in the case" },  // A2-KYROS-PICKUP
            { match: "That's why you're here" },  // A2-KYROS-FRAGMENT
            { match: "exactly the question" },  // A2-KYROS-IDEALISM
            { match: "Continue into the city" },  // A2-KYROS-JOIN
            { match: "Return to the Chamber" },  // A2-HUB
            { match: "ready" },  // A3-01
            { match: "temple" }  // A3-03: temple choice
        ]
    },

    // Hybrid ending - coordinate both plans (requires city + dispersal support)
    hybrid: {
        description: "Attempt to coordinate both evacuation and defense.",
        choices: [
            { match: "Begin" },
            { match: "Descend and enter" },
            { match: "saw the ships" },
            { match: "Wait for Hypatia", fallback: -1 },  // A1-03
            { match: "Let them continue" },  // A1-04
            { match: "been having this argument" },  // A1-06: challenge both
            { match: "Find Kyros first" },
            { match: "in the case" },
            { match: "That's why you're here" },
            { match: "exactly the question" },
            { match: "Continue into the city" },
            { match: "harbor" },  // Get intel first (for dispersal support)
            { match: "Return to the Chamber" },
            { match: "city. Find the workers" },  // Then city (for defense support)
            { match: "Find the construction site" },
            { match: "understand how the city sees" },
            { match: "happened to your father" },
            { match: "sorry" },
            { match: "What would make it right" },
            { match: "Fifty people. Done" },  // City alliance
            { match: "Return", fallback: 0 },
            { match: "Return to the Chamber" },
            { match: "ready" },
            { match: "do both" }  // A3-03: hybrid choice
        ]
    },

    // Inaction ending - refuse to choose
    inaction: {
        description: "Refuse to make a choice, letting events unfold without direction.",
        choices: [
            { match: "Begin" },
            { match: "Descend and enter" },
            { match: "nothing. Start from the beginning" },
            { match: "Wait for Hypatia", fallback: -1 },  // A1-03
            { match: "Let them continue" },  // A1-04
            { match: "don't know yet" },  // A1-06
            { match: "harbor", fallback: 1 },  // A1-08: go to harbor only
            { match: "Return to the Chamber" },
            { match: "ready" },
            { match: "don't choose" }  // A3-03: refuse
        ]
    },

    // Quick playthrough - minimal choices to reach an ending fast
    quick: {
        description: "Fastest path to an ending (evacuation route).",
        choices: [
            { match: "Begin" },
            { match: "Move quickly" },
            { match: "saw the ships" },
            { match: "Wait for Hypatia", fallback: -1 },  // A1-03
            { match: "Let them continue" },  // A1-04
            { match: "Seventy thousand" },  // A1-06
            { match: "Find Kyros first" },
            { match: "in the case" },
            { match: "That's why you're here" },
            { match: "exactly the question" },
            { match: "Continue into the city" },
            { match: "harbor" },
            { match: "Return to the Chamber" },
            { match: "ready" },
            { match: "evacuate" }
        ]
    },

    // Full exploration - visit all threads with Kyros before deciding (hybrid ending)
    full: {
        description: "Visit all four threads with Kyros before deciding (hybrid ending).",
        choices: [
            { match: "Begin" },
            { match: "Pause to listen" },
            { match: "Continue" },
            { match: "Hypatia's relationships fail" },
            { match: "Theron's evacuation succeeds" },
            { match: "Let them continue" },
            { match: "Seventy thousand" },  // Side with dispersal initially (A1-06)
            { match: "Find Kyros first" },  // A1-08
            { match: "in the case" },
            { match: "That's why you're here" },
            { match: "exactly the question" },
            { match: "Continue into the city" },
            // Harbor thread - intel
            { match: "harbor" },
            { match: "Return to the Chamber" },
            // Library thread - Miriam (community alliance)
            { match: "Library. Find Miriam" },
            { match: "knowledge itself" },
            { match: "worth preserving" },
            { match: "ally" },
            { match: "Return", fallback: 0 },
            // Temple thread - Khaemwaset
            { match: "Serapeum" },
            { match: "Continue", fallback: 0 },
            { match: "interested" },
            { match: "Continue", fallback: 0 },
            { match: "accept" },
            { match: "Return", fallback: 0 },
            // City thread - Demetria (city alliance)
            { match: "city" },
            { match: "Find the construction site" },
            { match: "understand how the city sees" },
            { match: "happened to your father" },
            { match: "sorry" },
            { match: "What would make it right" },
            { match: "Fifty people. Done" },
            { match: "Return", fallback: 0 },
            // Final decision
            { match: "Return to the Chamber" },
            { match: "ready" },
            { match: "do both" }  // Hybrid ending
        ]
    }
};

// ============================================================================
// PLAYTHROUGH ENGINE
// ============================================================================

class PlaythroughEngine {
    constructor(options = {}) {
        this.verbose = options.verbose || false;
        this.debug = options.debug || false;
        this.transcript = [];
        this.choiceLog = [];
        this.CONTENT = null;
    }

    async initialize() {
        resetState();
        this.CONTENT = await loadContent();
        this.transcript = [];
        this.choiceLog = [];
    }

    getUnit(unitId) {
        // Reload content for dynamic units (they depend on STATE)
        if (this.CONTENT[unitId]?.dynamic) {
            // Re-evaluate the content file to get fresh STATE references
            const unit = this.CONTENT[unitId];
            if (unit.getProseAndChoices) {
                const dynamic = unit.getProseAndChoices();
                return {
                    ...unit,
                    prose: dynamic.prose || unit.prose,
                    choices: dynamic.choices !== undefined ? dynamic.choices : unit.choices,
                    prompt: dynamic.prompt || unit.prompt,
                    next: dynamic.next || unit.next
                };
            }
        }
        return this.CONTENT[unitId];
    }

    getAvailableChoices(unit) {
        if (!unit.choices) return [];
        return unit.choices.filter(c => checkCondition(c.condition));
    }

    addToTranscript(text, type = 'prose') {
        const cleanText = htmlToText(text);
        if (cleanText) {
            this.transcript.push({ type, text: cleanText });
        }
    }

    logState(label) {
        if (this.verbose) {
            console.log(`\n[STATE after ${label}]`);
            console.log(`  Act: ${STATE.act}, Harbor: ${STATE.harborStage}`);
            console.log(`  Metrics: dispersal=${STATE.dispersal}, defense=${STATE.defense}, intel=${STATE.intel}`);
            console.log(`  Alliances: temple=${STATE.temple}, city=${STATE.city}, community=${STATE.community}`);
            console.log(`  Threads: started=${STATE.threadsStarted.join(',')}, visited=${STATE.threadsVisited.join(',')}, completed=${STATE.threadsCompleted.join(',')}`);
            console.log(`  Kyros: joined=${STATE.kyrosJoined}, timing=${STATE.kyrosPickupTiming}, relationship=${STATE.kyrosRelationship}`);
        }
    }

    findMatchingChoice(choices, matcher) {
        if (typeof matcher === 'number') {
            return matcher >= 0 && matcher < choices.length ? matcher : 0;
        }

        if (typeof matcher === 'object' && matcher.match) {
            const pattern = matcher.match.toLowerCase();
            for (let i = 0; i < choices.length; i++) {
                if (choices[i].text.toLowerCase().includes(pattern)) {
                    return i;
                }
            }
            // Fallback
            if (matcher.fallback !== undefined) {
                if (matcher.fallback === -1) return choices.length - 1;
                return matcher.fallback;
            }
            return 0;
        }

        // String match
        const pattern = String(matcher).toLowerCase();
        for (let i = 0; i < choices.length; i++) {
            if (choices[i].text.toLowerCase().includes(pattern)) {
                return i;
            }
        }
        return 0;
    }

    async runPlaythrough(choiceMatchers) {
        await this.initialize();

        let currentUnitId = 'INTRO';
        let choiceIndex = 0;
        let iterations = 0;
        const maxIterations = 500; // Safety limit

        while (iterations < maxIterations) {
            iterations++;

            const unit = this.getUnit(currentUnitId);
            if (!unit) {
                console.error(`Unit not found: ${currentUnitId}`);
                break;
            }

            // Update act in state
            if (unit.act) STATE.act = unit.act;

            // Add scene header
            if (unit.title) {
                this.addToTranscript(`\n${'='.repeat(60)}\n${unit.title.toUpperCase()}\n${'='.repeat(60)}`, 'header');
            }

            // Add prose
            if (unit.prose) {
                this.addToTranscript(unit.prose);
            }

            // Check if this is an ending
            if (unit.ending) {
                this.logState('ending');
                break;
            }

            // Handle auto-continue (no choices)
            if (unit.next && !unit.choices) {
                currentUnitId = unit.next;
                continue;
            }

            // Get available choices
            const choices = this.getAvailableChoices(unit);

            if (!choices || choices.length === 0) {
                if (unit.next) {
                    currentUnitId = unit.next;
                    continue;
                }
                console.error(`No choices available at ${currentUnitId}`);
                break;
            }

            // Add prompt if present
            if (unit.prompt) {
                this.addToTranscript(`\n_${unit.prompt}_`, 'prompt');
            }

            // Determine which choice to make
            let selectedIndex = 0;
            let matcherUsed = null;
            if (choiceMatchers && choiceIndex < choiceMatchers.length) {
                matcherUsed = choiceMatchers[choiceIndex];
                selectedIndex = this.findMatchingChoice(choices, matcherUsed);
                choiceIndex++;
            }

            // Clamp to valid range
            selectedIndex = Math.max(0, Math.min(selectedIndex, choices.length - 1));

            const selectedChoice = choices[selectedIndex];

            // Debug output
            if (this.debug) {
                console.log(`\n[DEBUG] Unit: ${currentUnitId}`);
                console.log(`  Matcher: ${JSON.stringify(matcherUsed)}`);
                console.log(`  Available choices:`);
                choices.forEach((c, i) => console.log(`    ${i}: "${c.text.substring(0, 60)}..."`));
                console.log(`  Selected: ${selectedIndex} -> "${selectedChoice.text.substring(0, 50)}..."`);
            }

            // Log the choice
            this.addToTranscript(`\n> ${selectedChoice.text}`, 'choice');
            this.choiceLog.push({
                unit: currentUnitId,
                choiceIndex: selectedIndex,
                choiceText: selectedChoice.text,
                availableChoices: choices.map(c => c.text)
            });

            // Apply effects
            if (selectedChoice.effects) {
                applyEffects(selectedChoice.effects);
                this.logState(selectedChoice.text.substring(0, 30));
            }

            // Move to next unit
            if (selectedChoice.next) {
                currentUnitId = selectedChoice.next;
            } else {
                console.error(`No next unit specified for choice at ${currentUnitId}`);
                break;
            }
        }

        if (iterations >= maxIterations) {
            console.error('Max iterations reached - possible infinite loop');
        }

        return this.generateOutput();
    }

    generateOutput() {
        const lines = [];

        // Header
        lines.push('THE ALEXANDRIA DILEMMA');
        lines.push('A Playthrough');
        lines.push(`Generated: ${new Date().toISOString()}`);
        lines.push('');

        // Transcript
        for (const entry of this.transcript) {
            lines.push(entry.text);
        }

        // Summary
        lines.push('\n' + '='.repeat(60));
        lines.push('PLAYTHROUGH SUMMARY');
        lines.push('='.repeat(60));
        lines.push('');
        lines.push(`Final Alignment: ${STATE.act1Alignment || 'unknown'}`);
        lines.push(`Final Choice: ${STATE.finalChoice || 'unknown'}`);
        lines.push('');
        lines.push('Metrics:');
        lines.push(`  Dispersal: ${STATE.dispersal}`);
        lines.push(`  Defense: ${STATE.defense}`);
        lines.push(`  Intel: ${STATE.intel}`);
        lines.push('');
        lines.push('Alliances:');
        lines.push(`  Temple: ${STATE.temple ? 'Yes' : 'No'}`);
        lines.push(`  City: ${STATE.city ? 'Yes' : 'No'}`);
        lines.push(`  Community: ${STATE.community ? 'Yes' : 'No'}`);
        lines.push('');
        lines.push('Threads Completed: ' + (STATE.threadsCompleted.join(', ') || 'none'));
        lines.push('');
        if (STATE.kyrosJoined) {
            lines.push('Kyros:');
            lines.push(`  Joined: Yes (${STATE.kyrosPickupTiming} timing)`);
            lines.push(`  Relationship: ${STATE.kyrosRelationship}`);
            lines.push(`  Confidence: ${STATE.kyrosConfidence}`);
        } else {
            lines.push('Kyros: Did not join');
        }
        lines.push('');
        lines.push(`Total Choices Made: ${this.choiceLog.length}`);

        return {
            text: lines.join('\n'),
            state: { ...STATE },
            choiceLog: this.choiceLog
        };
    }
}

// ============================================================================
// CLI INTERFACE
// ============================================================================

function printUsage() {
    console.log(`
Playthrough Generator for The Alexandria Dilemma

Usage:
  node tools/playthrough-generator.mjs [options]

Options:
  --path <name>       Use a predefined path (see --list-paths)
  --choices <list>    Comma-separated choice indices (e.g., "0,1,0,2,0")
  --output <file>     Output file path (default: playthroughs/<path>-<timestamp>.txt)
  --list-paths        List all predefined paths
  --verbose           Show state changes during playthrough
  --help              Show this help message

Examples:
  node tools/playthrough-generator.mjs --path evacuate
  node tools/playthrough-generator.mjs --path defend --verbose
  node tools/playthrough-generator.mjs --path full --output my-playthrough.txt
`);
}

function listPaths() {
    console.log('\nAvailable predefined paths:\n');
    for (const [name, config] of Object.entries(PREDEFINED_PATHS)) {
        console.log(`  ${name.padEnd(12)} - ${config.description}`);
    }
    console.log('');
}

async function main() {
    const args = process.argv.slice(2);

    // Parse arguments
    let pathName = null;
    let outputFile = null;
    let verbose = false;
    let debug = false;
    let choiceList = null;

    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case '--help':
            case '-h':
                printUsage();
                process.exit(0);
            case '--list-paths':
                listPaths();
                process.exit(0);
            case '--path':
                pathName = args[++i];
                break;
            case '--output':
                outputFile = args[++i];
                break;
            case '--verbose':
            case '-v':
                verbose = true;
                break;
            case '--debug':
            case '-d':
                debug = true;
                break;
            case '--choices':
                choiceList = args[++i];
                break;
        }
    }

    // Default to 'quick' path if nothing specified
    if (!pathName && !choiceList) {
        pathName = 'quick';
        console.log('No path specified, using "quick" path. Use --list-paths to see options.\n');
    }

    // Get choice matchers
    let choiceMatchers;
    if (pathName) {
        if (!PREDEFINED_PATHS[pathName]) {
            console.error(`Unknown path: ${pathName}`);
            console.error('Use --list-paths to see available paths.');
            process.exit(1);
        }
        choiceMatchers = PREDEFINED_PATHS[pathName].choices;
        console.log(`Using predefined path: ${pathName}`);
        console.log(`Description: ${PREDEFINED_PATHS[pathName].description}\n`);
    } else if (choiceList) {
        choiceMatchers = choiceList.split(',').map(s => parseInt(s.trim(), 10));
    }

    // Create output directory
    const playthroughsDir = path.join(PROJECT_ROOT, 'playthroughs');
    if (!fs.existsSync(playthroughsDir)) {
        fs.mkdirSync(playthroughsDir, { recursive: true });
    }

    // Generate default output filename
    if (!outputFile) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
        const prefix = pathName || 'custom';
        outputFile = path.join(playthroughsDir, `${prefix}-${timestamp}.txt`);
    } else if (!path.isAbsolute(outputFile)) {
        outputFile = path.join(PROJECT_ROOT, outputFile);
    }

    // Run playthrough
    const engine = new PlaythroughEngine({ verbose, debug });

    console.log('Running playthrough...\n');
    const result = await engine.runPlaythrough(choiceMatchers);

    // Write output
    fs.writeFileSync(outputFile, result.text);
    console.log(`\nPlaythrough saved to: ${outputFile}`);

    // Print summary
    console.log('\n--- Summary ---');
    console.log(`Ending: ${result.state.finalChoice || 'unknown'}`);
    console.log(`Choices made: ${result.choiceLog.length}`);
    console.log(`Alliances: temple=${result.state.temple}, city=${result.state.city}, community=${result.state.community}`);
    if (result.state.kyrosJoined) {
        console.log(`Kyros: joined (${result.state.kyrosPickupTiming}), ${result.state.kyrosRelationship} relationship`);
    }
}

// Run if called directly
main().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});
