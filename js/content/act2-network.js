/**
 * Act 2: Network/Harbor Thread
 * The harbor contact Nephthys
 */

export const ACT2_NETWORK_CONTENT = {

"A2-NETWORK": {
    title: "The Harbor Contact",
    act: 2,
    thread: "network",
    prose: `<p>Nephthys works the customs house second shift—a small woman with quick eyes who doesn't stop counting cargo as she talks to you.</p>

<p>"The harbor is wrong," she says. "Merchant ships are leaving early, before their holds are full. Military transports are sitting, not unloading. Like they're waiting for something."</p>

<p>Three ships might work for evacuation: the <em>Ibis</em>, leaving in two days for Pergamum. The <em>Crocodile</em>, whose captain would charge triple but wouldn't ask questions. A small Cypriot vessel, flexible but limited.</p>

<p>"Who decides what's irreplaceable?" she asks. "That's your real problem. You can move cargo. Moving choices—that's harder."</p>

<p>The military transports are the wild card. If they start unloading troops, the harbor could close within hours.</p>

<p>"Watch for when they start moving. That's your signal."</p>`,
    prompt: "What do you do?",
    choices: [
        { text: "Return to the Chamber with this intelligence.", next: "A3-01", effects: { threadsCompleted: ["network"], intel: 1 } },
        { text: "Continue into the city. There's more to learn.", next: "A2-HUB", effects: { threadsCompleted: ["network"], intel: 1 } }
    ]
}

};
