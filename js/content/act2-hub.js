/**
 * Act 2: Hub Scene
 * Dynamic navigation based on player progress
 */

import { STATE } from '../state.js';

export const ACT2_HUB_CONTENT = {

"A2-HUB": {
    title: "The City at Night",
    act: 2,
    dynamic: true,
    getProseAndChoices: function() {
        let visitedCount = STATE.threadsVisited.length;
        let completedCount = STATE.threadsCompleted.length;
        let totalProgress = Math.max(completedCount, visitedCount);
        let prose;

        // Harbor stage reflects alliances made (time committed)
        let harborText;
        if (STATE.harborStage === 0) {
            harborText = `<p>The harbor is quiet—for now. You have time.</p>`;
        } else if (STATE.harborStage === 1) {
            harborText = `<p>The harbor has changed since you last looked. More soldiers on the docks. A merchant ship pulling out early, half-loaded. Time is passing.</p>`;
        } else if (STATE.harborStage === 2) {
            harborText = `<p>The harbor is tense. Military transports are unloading now—soldiers forming up on the docks. Fewer merchant ships than before. The window is narrowing.</p>`;
        } else {
            harborText = `<p>The harbor is closing. Checkpoints on the main roads. The last merchant ships are fleeing or being turned back. Whatever you're going to do, it needs to be soon.</p>`;
        }

        if (totalProgress === 0) {
            prose = `<p>The streets of Alexandria stretch before you. Somewhere in this city are the answers Theron and Hypatia need.</p>`;
        } else if (totalProgress === 1) {
            prose = `<p>One conversation. One perspective you hadn't considered before. But there's more to learn.</p>` + harborText;
        } else if (totalProgress === 2) {
            prose = `<p>Two conversations. Two different ways of seeing the Library and its crisis.</p>` + harborText;
        } else {
            prose = `<p>Three conversations. Three perspectives that don't quite fit together. You've learned a lot—maybe enough.</p>` + harborText;
        }

        // Add Kyros companion text if he's with the player
        if (STATE.kyrosJoined) {
            // Check if we've actually done threads together
            let threadsDoneTogether = STATE.threadsVisited.length > 0 || STATE.threadsCompleted.length > 0;
            // But only count threads done AFTER pickup (early pickup means all threads are together)
            let didEarlyPickup = STATE.kyrosPickupTiming === "early";

            if (didEarlyPickup && threadsDoneTogether) {
                prose += `<p>Kyros walks beside you, the scroll case with his Sappho fragment never far from his side. He's watching the city with new eyes—seeing it differently after everything you've witnessed together.</p>`;
            } else if (!didEarlyPickup && threadsDoneTogether) {
                // Late pickup - he missed some things
                prose += `<p>Kyros walks beside you, the scroll case with his Sappho fragment never far from his side. He's still catching up—piecing together what you've already learned.</p>`;
            } else {
                // Just recruited, haven't done threads yet
                prose += `<p>Kyros walks beside you, the scroll case with his Sappho fragment never far from his side. His eyes scan the streets of Alexandria—a city he's only seen from inside the Library walls.</p>`;
            }
        } else if (STATE.threadsStarted.includes("kyros") && !STATE.kyrosJoined) {
            // Reminder if player started but didn't finish Kyros pickup
            prose += `<p><em>Theron mentioned a young scholar—Kyros, in the eastern colonnade. He's probably still waiting.</em></p>`;
        } else if (!STATE.kyrosJoined && totalProgress > 0) {
            // Gentle reminder if player has done other threads but not picked up Kyros
            prose += `<p><em>You remember Theron's mention of a young Cypriot scholar. He might still be in the eastern colonnade.</em></p>`;
        }

        // Build available choices
        let choices = [];

        // At harbor stage 3, force return to chamber
        if (STATE.harborStage >= 3) {
            prose += `<p><strong>You need to return to the Chamber. Now.</strong></p>`;
            choices.push({ text: "Return to the Chamber. There's no more time.", next: "A3-01" });
            return { prose: prose, choices: choices, prompt: "What do you do?" };
        }

        // Kyros: show if not joined yet
        if (!STATE.kyrosJoined) {
            choices.push({ text: "The eastern colonnade. Find Kyros.", next: "A2-KYROS-PICKUP" });
        }

        // Network: no return needed, just intel
        if (!STATE.threadsCompleted.includes("network")) {
            choices.push({ text: "The harbor. Check Nephthys's information.", next: "A2-NETWORK" });
        }

        // Miriam: show if not visited, OR if visited but no alliance
        if (!STATE.threadsVisited.includes("library")) {
            choices.push({ text: "The Library. Find Miriam.", next: "A2-LIBRARY" });
        } else if (STATE.community === 0 && !STATE.threadsCompleted.includes("library")) {
            choices.push({ text: "The Library. Return to Miriam.", next: "A2-LIBRARY-RETURN" });
        }

        // Temple: show if not visited, OR if visited but no alliance
        if (!STATE.threadsVisited.includes("temple")) {
            choices.push({ text: "The Serapeum. Hear Khaemwaset's offer.", next: "A2-TEMPLE" });
        } else if (STATE.temple === 0 && !STATE.threadsCompleted.includes("temple")) {
            choices.push({ text: "The Serapeum. Return to Khaemwaset.", next: "A2-TEMPLE-RETURN" });
        }

        // City: show if not visited, OR if visited but no alliance AND not dismissed
        if (!STATE.threadsVisited.includes("city")) {
            choices.push({ text: "The city. Find the workers.", next: "A2-CITY" });
        } else if (STATE.city === 0 && !STATE.threadsCompleted.includes("city") && !STATE.cityDismissed) {
            choices.push({ text: "The city. Return to Demetria.", next: "A2-CITY-RETURN" });
        }

        choices.push({ text: "Return to the Chamber. Time to decide.", next: "A3-01" });

        return { prose: prose, choices: choices, prompt: "What do you do?" };
    }
}

};
