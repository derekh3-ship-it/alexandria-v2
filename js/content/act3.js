/**
 * Act 3: Decision Scenes
 * Return to the Chamber and make the final choice
 */

import { STATE } from '../state.js';

export const ACT3_CONTENT = {

"A3-01": {
    title: "Return to the Chamber",
    act: 3,
    dynamic: true,
    getProseAndChoices: function() {
        let prose = `<p>The hidden chamber feels different now. Smaller, maybe. Or just more urgent. Theron and Hypatia are waiting—they've been waiting since you left.</p>`;

        // Add Kyros if he joined
        if (STATE.kyrosJoined) {
            prose += `<p>Kyros enters behind you, his scholar's robes dusty from the night's travels. Theron nods at him—recognition, perhaps approval. Hypatia studies him for a moment, then turns her attention back to you.</p>`;
        }

        prose += `<p>"What did you find?" Theron asks.</p>`;

        // Build the report based on what player actually did
        let reportSections = [];

        if (STATE.threadsCompleted.includes("network") || STATE.intel > 0) {
            reportSections.push(`<p>You tell them about Nephthys and the harbor. The ships that might work for evacuation—the <em>Ibis</em>, the <em>Crocodile</em>, the Cypriot vessel. The military transports sitting in the eastern basin, waiting.</p>
<p>"Limited options," Theron says. "But real ones. That's something."</p>`);
        }

        if (STATE.community) {
            reportSections.push(`<p>You tell them about Miriam. Her network—older and larger than the College's. The Septuagint already secured, but Aristobulus still at risk. Her terms accepted.</p>
<p>Hypatia is quiet for a moment. "She's been working in the translation rooms for fifteen years. I didn't know she had—" She stops. "I should have known."</p>
<p>"Her network complements ours," Theron says. "This helps."</p>`);
        } else if (STATE.threadsVisited.includes("library")) {
            reportSections.push(`<p>You tell them about Miriam. Her network, her priorities, her terms.</p>
<p>"And?" Theron asks.</p>
<p>"I didn't commit. Not yet."</p>
<p>Hypatia looks troubled. "Miriam has been working in the translation rooms for fifteen years. I didn't realize she had her own... operation."</p>`);
        }

        if (STATE.temple) {
            reportSections.push(`<p>You tell them about Khaemwaset. The temple's vaults, the network of priests across Egypt, the protection of the god. The price: Egyptian materials returned, scholars for five years, acknowledgment.</p>
<p>"You accepted," Hypatia says. Not a question.</p>
<p>"I accepted."</p>
<p>She's quiet. Theron watches her. "It's not what I would have chosen," she says finally. "But it's something. Twenty thousand scrolls in vaults that have survived centuries."</p>`);
        } else if (STATE.threadsVisited.includes("temple")) {
            reportSections.push(`<p>You tell them about Khaemwaset. His offer, his theory of preservation, his price.</p>
<p>"Need outlasts prestige," Theron says slowly. "He's not wrong about that."</p>
<p>"He's asking us to subordinate the Library to the temple," Hypatia says.</p>
<p>"He's asking us to survive," Theron replies.</p>`);
        }

        if (STATE.city) {
            reportSections.push(`<p>You tell them about Demetria. Her father who built the western wall. Her daughter and the midwife. The guild's knowledge of the city—fire routes, service entrances, infrastructure. Passage for fifty in exchange for help.</p>
<p>Hypatia is very still. "Three hundred years. And we never—" She stops.</p>
<p>"Her people will help," you say. "First time the Library ever gave them a reason to."</p>`);
        } else if (STATE.threadsVisited.includes("city") && !STATE.cityDismissed) {
            reportSections.push(`<p>You tell them about Demetria. The mason whose father built part of this building. What she said about the Library—three hundred years of invisibility to the people who constructed it.</p>
<p>Hypatia's expression changes. "She asked what the Library has ever done for the people who built it."</p>
<p>"Yes."</p>
<p>"And what did you tell her?"</p>
<p>"I didn't have an answer."</p>
<p>The silence is heavy. "Neither do I," Hypatia says quietly.</p>`);
        } else if (STATE.cityDismissed) {
            reportSections.push(`<p>You tell them about Demetria. What she offered. What you refused.</p>
<p>Hypatia doesn't say anything. Theron looks at you for a long moment, then away.</p>`);
        }

        // If player learned very little
        if (reportSections.length === 0) {
            reportSections.push(`<p>"Not much," you admit. "The city is tense. People are scared. But I didn't find anyone who could—"</p>
<p>"You didn't talk to anyone," Theron finishes.</p>
<p>"I came back."</p>
<p>The silence is uncomfortable. Hypatia looks at Theron. Theron looks at the map.</p>`);
        }

        prose += reportSections.join("\n");

        // Add note about Kyros if he never joined
        if (!STATE.kyrosJoined) {
            prose += `<p>Theron glances at the door. "The young Cypriot I mentioned—Kyros. Did you find him?"</p>
<p>You shake your head. "There wasn't time."</p>
<p>"No one saw him after the first night," Theron says quietly. "He might have made it onto a ship. He might not have."</p>`;
        }

        // Harbor status determines whether player can go back out
        if (STATE.harborStage >= 3) {
            prose += `

<p>Before anyone can respond, there's a knock at the chamber door. A messenger—one of Theron's people, breathing hard.</p>
<p>"The harbor's closing. Checkpoints on all the main roads. Whatever's coming—it's coming now."</p>
<p>Theron and Hypatia exchange a look. The time for gathering information is over.</p>
<p>"We have to decide," Hypatia says. "Now."</p>`;

            return { prose: prose, choices: null, next: "A3-02" };
        } else {
            // Not forced - player can choose to continue or decide
            let harborWarning = "";
            if (STATE.harborStage === 0) {
                harborWarning = `

<p>"The harbor is still open," Theron says. "For now. You could learn more—if you think it's worth the time."</p>`;
            } else if (STATE.harborStage === 1) {
                harborWarning = `

<p>"The harbor is changing," Theron says. "More soldiers. Fewer merchant ships. The window is narrowing, but it's not closed yet."</p>`;
            } else if (STATE.harborStage === 2) {
                harborWarning = `

<p>"The harbor is nearly closed," Theron says. His voice is tight. "Military transports are unloading. If you want to learn more, you'll have to be quick."</p>`;
            }

            prose += harborWarning;
            prose += `
<p>Hypatia looks at you. "Is there more you need to know? Or are you ready to decide?"</p>`;

            let choices = [
                { text: "\"I'm ready. Let's decide what we're going to do.\"", next: "A3-02" }
            ];

            // Add options to go back out if threads remain
            if (!STATE.threadsCompleted.includes("network") && !STATE.intel) {
                choices.push({ text: "\"I should check the harbor situation myself.\"", next: "A2-NETWORK" });
            }

            if (!STATE.threadsVisited.includes("library")) {
                choices.push({ text: "\"There's someone in the Library I should talk to. Miriam.\"", next: "A2-LIBRARY" });
            } else if (STATE.community === 0 && !STATE.threadsCompleted.includes("library")) {
                choices.push({ text: "\"I should go back to Miriam. Reconsider her offer.\"", next: "A2-LIBRARY-RETURN" });
            }

            if (!STATE.threadsVisited.includes("temple")) {
                choices.push({ text: "\"I haven't heard the temple's offer yet.\"", next: "A2-TEMPLE" });
            } else if (STATE.temple === 0 && !STATE.threadsCompleted.includes("temple")) {
                choices.push({ text: "\"I should go back to Khaemwaset. Reconsider his terms.\"", next: "A2-TEMPLE-RETURN" });
            }

            if (!STATE.threadsVisited.includes("city")) {
                choices.push({ text: "\"I need to understand how the city sees us.\"", next: "A2-CITY" });
            } else if (STATE.city === 0 && !STATE.threadsCompleted.includes("city") && !STATE.cityDismissed) {
                choices.push({ text: "\"I should go back to Demetria. Reconsider her offer.\"", next: "A2-CITY-RETURN" });
            }

            return { prose: prose, choices: choices, prompt: "What do you do?" };
        }
    }
},

"A3-02": {
    title: "Revised Positions",
    act: 3,
    dynamic: true,
    getProseAndChoices: function() {
        let prose = `<p>The silence stretches. Theron moves to the map, then away, then back.</p>`;

        // Only mention dispersal/Miriam if player actually has community alliance or visited library
        let mentionedDispersal = false;
        let mentionedDefense = false;

        if (STATE.community) {
            prose += `<p>"You were right about dispersal," Hypatia says finally. "If Miriam's network is already moving, if there are ships... fragments might be better than nothing."</p>
<p>Theron looks at her. Something passes between them.</p>`;
            mentionedDispersal = true;
        } else if (STATE.threadsVisited.includes("library")) {
            prose += `<p>"Miriam's network," Hypatia says quietly. "She's already moving her materials. With or without us."</p>
<p>"That's dispersal happening whether we choose it or not," Theron says.</p>`;
            mentionedDispersal = true;
        } else if (STATE.threadsCompleted.includes("network")) {
            prose += `<p>"The ships," Theron says. "We have options. Limited, but real."</p>`;
            mentionedDispersal = true;
        }

        if (STATE.city) {
            if (mentionedDispersal) {
                prose += `<p>"You were right about connection," Theron says. "Demetria's people. If the city saw the Library as theirs... that changes things."</p>`;
            } else {
                prose += `<p>"Demetria's offer," Theron says. "If her people help defend... that's something we never had before."</p>`;
            }
            mentionedDefense = true;
        } else if (STATE.threadsCompleted.includes("city")) {
            prose += `<p>"The mason," Hypatia says. "She asked what the Library has ever done for the people who built it." A pause. "I didn't have an answer."</p>`;
            mentionedDefense = true;
        }

        if (STATE.temple) {
            prose += `<p>"And the temple," Hypatia adds, her voice careful. "Khaemwaset's vaults. It's not what I would have chosen. But it's something."</p>`;
        } else if (STATE.threadsCompleted.includes("temple")) {
            prose += `<p>"Khaemwaset's offer is still there," Theron says. "If we want it."</p>`;
        }

        // If they learned very little
        if (!mentionedDispersal && !mentionedDefense && STATE.threadsCompleted.length <= 1) {
            prose += `<p>"We still don't know enough," Hypatia says. "But we're out of time to learn more."</p>
<p>"Then we decide with what we have," Theron replies.</p>`;
        } else {
            prose += `<p>They're not arguing anymore. For the first time, they're looking at the same problem from different angles.</p>`;
        }

        prose += `<p>She looks at you.</p>
<p>"What do you think we should do?"</p>`;

        return { prose: prose, choices: null, next: "A3-03" };
    }
},

"A3-03": {
    title: "The Options",
    act: 3,
    dynamic: true,
    getProseAndChoices: function() {
        let prose = `<p>Theron moves to the map. "Let me lay out what we actually have."</p>

<p><strong>Evacuation:</strong> Three ships. Six days of copying. Seventy thousand scrolls, if we're ruthless. The poetry waits. We save the foundations.</p>

<p><strong>Defense:</strong> Rally the scholars, the guards who owe us. Fortify. Make it costly to attack. Hold as long as we can.</p>`;

        if (STATE.temple) {
            prose += `<p><strong>The Temple:</strong> You've struck a deal with Khaemwaset. Twenty thousand scrolls to his vaults. Three centuries of independence traded for survival.</p>`;
        }

        // Hybrid requires support on BOTH sides - at least 1 dispersal AND 1 defense, plus at least one alliance
        let hasDispersalSupport = STATE.dispersal >= 1 || STATE.community;
        let hasDefenseSupport = STATE.defense >= 1 || STATE.city;
        let canHybrid = hasDispersalSupport && hasDefenseSupport && (STATE.community || STATE.city);
        if (canHybrid) {
            prose += `<p><strong>Hybrid:</strong> Defense buys time, evacuation uses it. Every hour we hold is another cartload to the ships. Difficult, but potentially more saved than either alone.</p>`;
        }

        prose += `<p>There's one more option. The one no one wants to name.</p>

<p><strong>Nothing:</strong> Step back. Let it happen. Every path is loss—why choose which loss?</p>

<p>"Someone has to choose," Theron says. "The decision belongs to the person with the most context. That's you."</p>`;

        // Add Kyros's input if he joined
        if (STATE.kyrosJoined) {
            if (STATE.kyrosSilencedCount >= 2) {
                // Repeatedly silenced - withdrawn
                prose += `<p>Kyros stands apart. He's learned not to speak unless spoken to.</p>

<p>When you look at him, he shakes his head slightly.</p>

<p>"You don't want my opinion. You've made that clear." There's no bitterness in it—or if there is, it's buried deep. "I'll do what you tell me. That's what I'm here for."</p>`;
            } else if (STATE.kyrosConfidence === "low" || STATE.kyrosDemetriaSilenced) {
                // Shaken but present
                prose += `<p>Kyros is quiet. The night has changed him—you can see it in the set of his shoulders, the way he holds the scroll case.</p>

<p>"I had an opinion when this started," he says finally. "I was sure. Now I'm not sure of anything, except that people are going to lose something tonight, no matter what we choose."</p>

<p>He looks at you. "But you're the one who has to decide. I'll follow wherever you lead."</p>`;
            } else if (STATE.kyrosMiriamConnection) {
                // Connected with Miriam - favors carrying
                prose += `<p>Kyros speaks up. "Miriam said the crossing is worth it, even with what's lost." He touches the scroll case at his side. "Carrying is better than keeping. Even if carrying means losing."</p>

<p>He pauses. "I think that's true for more than translation. Scatter the seeds. Let them find new soil."</p>`;
            } else if (STATE.kyrosDemetriaEngaged) {
                // Engaged with Demetria - more conflicted
                prose += `<p>"Evacuation saves the most. Defense saves the symbol. The temple saves by surrendering." Kyros counts the options on his fingers. "I don't know which is right. I know which one lets me live with myself."</p>

<p>"Which?"</p>

<p>"The one where I can say I tried. Even if I failed. Even if it was stupid." He almost smiles. "The one where the poetry doesn't wait."</p>`;
            } else {
                // Default - hopeful but uncertain
                prose += `<p>Kyros looks at the map, then at you. "I came here because I believed words could survive anything. Could reach anyone." He touches his scroll case. "Tonight will tell me if I was right."</p>

<p>"Whatever you choose—I'm with you. I just want to help save something."</p>`;
            }
        }

        // Build choices dynamically
        let choices = [
            { text: "\"We evacuate. Save what we can. Scatter the seeds.\"", next: "A4-EVACUATE", effects: { finalChoice: "evacuate" } },
            { text: "\"We defend. Hold the line. Make them see us.\"", next: "A4-DEFEND", effects: { finalChoice: "defend" } }
        ];

        if (STATE.temple) {
            choices.push({ text: "\"We go to the temple. Survival at any cost.\"", next: "A4-TEMPLE", effects: { finalChoice: "temple" } });
        }

        if (canHybrid) {
            choices.push({ text: "\"We do both. Defense buys time, evacuation uses it.\"", next: "A4-HYBRID", effects: { finalChoice: "hybrid" } });
        }

        choices.push({ text: "\"I don't choose. Every path is loss.\"", next: "A4-INACTION", effects: { finalChoice: "inaction" } });

        return { prose: prose, choices: choices, prompt: "What do you choose?" };
    }
}

};
