/**
 * Act 2: Network/Harbor Thread
 * The harbor contact Nephthys
 */

import { STATE } from '../state.js';

export const ACT2_NETWORK_CONTENT = {

"A2-NETWORK": {
    title: "The Harbor Contact",
    act: 2,
    thread: "network",
    dynamic: true,
    getProseAndChoices: function() {
        let prose = `<p>Nephthys works the customs house second shift—a small woman with quick eyes who doesn't stop counting cargo as she talks to you.</p>

<p>"The harbor is wrong," she says. "Merchant ships are leaving early, before their holds are full. Military transports are sitting, not unloading. Like they're waiting for something."</p>`;

        // Add Kyros reaction to the harbor if he's present
        if (STATE.kyrosJoined) {
            prose += `

<p>Kyros stares at the harbor, watching the ships. His father was a shipwright in Cyprus—he knows vessels, knows what normal harbor activity looks like. His expression says this isn't it.</p>`;
        }

        prose += `

<p>Three ships might work for evacuation: the <em>Ibis</em>, leaving in two days for Pergamum. The <em>Crocodile</em>, whose captain would charge triple but wouldn't ask questions. A small Cypriot vessel, flexible but limited.</p>`;

        // Kyros reacts to the Cypriot vessel
        if (STATE.kyrosJoined) {
            prose += `

<p>Kyros's head turns at "Cypriot vessel." For a moment something crosses his face—homesickness, maybe, or the memory of a life he left behind.</p>`;
        }

        prose += `

<p>"Who decides what's irreplaceable?" she asks. "That's your real problem. You can move cargo. Moving choices—that's harder."</p>`;

        // Kyros has strong feelings about what's irreplaceable
        if (STATE.kyrosJoined) {
            prose += `

<p>Kyros's hand moves to the scroll case at his side. He doesn't speak, but you can see him thinking: <em>I know what's irreplaceable. I carry it with me.</em></p>`;
        }

        prose += `

<p>The military transports are the wild card. If they start unloading troops, the harbor could close within hours.</p>

<p>"Watch for when they start moving. That's your signal."</p>`;

        // Kyros processing as you prepare to leave
        if (STATE.kyrosJoined) {
            prose += `

<p>As you turn to leave, Kyros lingers a moment longer, watching the ships. "My father built vessels like those," he says quietly. "He'd know exactly how much each one could carry, how fast they could move." A pause. "I wish I'd paid more attention when he tried to teach me."</p>`;
        }

        return {
            prose: prose,
            prompt: "What do you do?",
            choices: [
                { text: "Return to the Chamber with this intelligence.", next: "A3-01", effects: { threadsCompleted: ["network"], intel: 1 } },
                { text: "Continue into the city. There's more to learn.", next: "A2-HUB", effects: { threadsCompleted: ["network"], intel: 1 } }
            ]
        };
    }
}

};
