/**
 * Act 1: The Alexandria Dilemma
 * Establishing the crisis, meeting Theron and Hypatia
 */

import { STATE } from '../state.js';

export const ACT1_CONTENT = {

"A1-01": {
    title: "Arrival",
    act: 1,
    prose: `<p>The message reached you at the third hour of night—a strip of papyrus pressed into your hand by a face you almost recognized, gone before you could speak. Three words in the College's cipher: <em>Chamber. Now. Crisis.</em></p>

<p>You've received such summons before. Damascus. Pergamum. The extraction from Antioch when the governor's men were already at the gates. But something in the hand that passed the message—the tremor, or the haste—tells you this is different.</p>

<p>The streets of Alexandria are never truly dark. Even now, oil lamps flicker in upper windows, and the harbor quarter hums with the work that never stops. You pass through it all like a shadow, taking the routes Theron taught you—the ones the city's officials don't watch.</p>

<p>The Pharos light sweeps across the water in its slow rotation. Tonight it feels like a warning.</p>

<p>The hidden entrance is where it has always been: behind a wine merchant's shop, through a courtyard, down a passage so narrow your shoulders brush both walls.</p>

<p>The stairs descend into darkness. From below, you catch the murmur of voices—two, you think. One measured and low. One sharper, clipped with urgency.</p>

<p>Theron and Hypatia. Both summoned. Both already here.</p>`,
    prompt: "How do you enter?",
    choices: [
        { text: "Descend and enter the Chamber.", next: "A1-02" },
        { text: "Move quickly—they've been waiting.", next: "A1-02-quick" },
        { text: "Pause to listen before showing yourself.", next: "A1-02-listen" }
    ]
},

"A1-02-quick": {
    title: "The Gathering",
    act: 1,
    prose: `<p>You take the stairs two at a time. Whatever this is, delay won't help.</p>

<p>Theron is already turning toward the sound of your footsteps when you enter. He moves the way he always moves: economical, restless, a man who counts exits even in rooms he knows.</p>

<p>"Good. You're here." Something in his face shifts—not relief exactly, but recognition. One variable settled. "Hypatia's checking something. She'll be back."</p>

<p>He gestures at the wooden chairs around the central table. A map of the city is spread across it.</p>

<p>You've barely sat down when Hypatia arrives—footsteps on the stairs, deliberate, unhurried. A scroll case under her arm, ink staining her fingers.</p>

<p>"Nikos." She acknowledges you with a nod, then turns to Theron. "You've told them?"</p>

<p>"I was waiting for you."</p>

<p>"Then tell us both."</p>

<p>Theron looks at you, then at her. Deciding where to begin.</p>

<p>"How much do you know," he says, "about what's happening in the harbor?"</p>`,
    prompt: "What do you know?",
    choices: [
        { text: "\"I saw the ships. Military transports.\"", next: "A1-03" },
        { text: "\"I've heard rumors. Nothing solid.\"", next: "A1-03" },
        { text: "\"Assume I know nothing. Start from the beginning.\"", next: "A1-03" }
    ]
},

"A1-02-listen": {
    title: "The Gathering",
    act: 1,
    prose: `<p>You pause at the top of the stairs. Old habit—Theron taught you that one too. <em>Know what you're walking into.</em></p>

<p>The voices drift up, distorted by stone but clear enough.</p>

<p>"—can't just abandon three centuries of work because you're <em>nervous</em>—"</p>

<p>"I'm not nervous. I'm informed. There's a difference."</p>

<p>"Informed by a Roman who won't even commit his warnings to writing—"</p>

<p>"Because he's afraid. And Lucius doesn't frighten easily."</p>

<p>A pause. Then Hypatia's voice, quieter: "How bad?"</p>

<p>"Bad enough that I've already started counting ships."</p>

<p>You've heard enough. You descend.</p>

<p>Theron turns at the sound of your footsteps. His eyes flick to the stairs behind you—checking, always checking—then back to your face.</p>

<p>"How much of that did you hear?"</p>

<p>"Enough to know this isn't a routine extraction."</p>

<p>He almost smiles. Almost. "No. It isn't."</p>

<p>Hypatia sets down her scroll case. "Then let's not waste time repeating ourselves. Theron—the harbor. From the beginning."</p>`,
    prompt: "You listen.",
    choices: [
        { text: "Continue", next: "A1-03" }
    ]
},

"A1-02": {
    title: "The Gathering",
    act: 1,
    prose: `<p>The Chamber is smaller than you remember—or perhaps it only feels that way with Theron pacing its length. He moves the way he always moves: economical, restless, a man who counts exits even in rooms he knows.</p>

<p>He stops when he sees you. "Good. Sit, if you want. Stand if you'd rather." He gestures at the wooden chairs around the central table. A map of the city is spread across it.</p>

<p>Hypatia arrives moments later, a scroll case under her arm, ink staining her fingers.</p>

<p>"Nikos." She acknowledges you with a nod, then turns to Theron. "You've told them?"</p>

<p>"I was waiting for you."</p>

<p>"Then tell us both."</p>

<p>Theron looks at you, then at her. Deciding where to begin.</p>

<p>"How much do you know," he says, "about what's happening in the harbor?"</p>`,
    prompt: "What do you know?",
    choices: [
        { text: "\"I saw the ships. Military transports.\"", next: "A1-03" },
        { text: "\"I've heard rumors. Nothing solid.\"", next: "A1-03" },
        { text: "\"Assume I know nothing. Start from the beginning.\"", next: "A1-03" }
    ]
},

"A1-03": {
    title: "Theron's Intelligence",
    act: 1,
    prose: `<p>Theron moves to the map. His finger finds the harbor without looking.</p>

<p>"Three days ago, a Roman transport arrived from Cyprus. Routine, supposedly. Except it didn't leave." He traces a line across the eastern basin. "Two more came yesterday. Military configuration. Room for a lot of men."</p>

<p>He produces a folded paper. "This morning, Lucius got word to me. He's nervous—more nervous than I've seen him. The message was short: <em>'Prepare for instability. Timeframe uncertain. Cannot say more.'</em>"</p>

<p>"Lucius is careful," he continues. "If he says prepare, I prepare. If he says he cannot say more, it means he's afraid to commit it to writing."</p>

<p>Hypatia speaks: "What does 'instability' mean? A coup? Riots?"</p>

<p>"I don't know." The admission costs him. "The threat isn't a plan, it's a possibility. When soldiers get orders in a city that isn't theirs—fire, confusion, collateral damage."</p>

<p>He looks at you both. "The harbor. Watch the harbor. When the merchant ships start running—that's when we're out of time."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"I need numbers. Ships, men, timeframe.\"", next: "A1-03-numbers" },
        { text: "\"You've already started planning. Tell us.\"", next: "A1-03-plan" },
        { text: "Wait for Hypatia to respond.", next: "A1-04" }
    ]
},

"A1-03-numbers": {
    title: "The Count",
    act: 1,
    prose: `<p>Theron nods—a sharp, approving motion. You speak his language.</p>

<p>"Three transports confirmed. Capacity for perhaps two thousand men total. The garrison here is another eight hundred. Ptolemy's forces—harder to count. Could be ten thousand if he calls them in."</p>

<p>He taps the map. "Timeline: three days, maybe four, before whatever's coming arrives. Maybe less if something triggers it early."</p>

<p>"Ships out: eleven merchant vessels that could carry cargo. Six loading to leave within the week. The others depend on how nervous the captains get."</p>

<p>Hypatia has been listening. Now she speaks.</p>`,
    choices: null,
    next: "A1-04"
},

"A1-03-plan": {
    title: "Theron's Plan",
    act: 1,
    prose: `<p>Theron's jaw tightens. "I've been thinking about it since the message came. Yes."</p>

<p>"If we move fast—tonight, tomorrow—we can activate the network. Every copyist we trust, working in shifts. Prioritize the unique copies, the original manuscripts, the proofs that haven't been copied elsewhere."</p>

<p>He traces routes on the map. "Ships to Pergamum, Athens, Cyprus. Scatter everything we can before whatever's coming arrives."</p>

<p>"That's your plan," Hypatia says quietly. "Evacuation. Dispersal. Assume the worst and run."</p>

<p>"Assume the worst and <em>prepare</em>," Theron corrects. "If I'm wrong, we've made extra copies. If I'm right—"</p>

<p>"If you're right, we've abandoned three centuries of work because of rumors."</p>

<p>The argument is about to begin. But Hypatia continues before it can.</p>`,
    choices: null,
    next: "A1-04"
},

"A1-04": {
    title: "Hypatia's Response",
    act: 1,
    prose: `<p>Hypatia releases a breath. She moves to the map, standing across from Theron.</p>

<p>"Ships in the harbor. A nervous Roman. Rumors." She looks up. "Theron, I don't doubt your sources. But we've seen this before. The succession crisis. The riots under Ptolemy Auletes. The Library has stood through all of it. Three hundred years."</p>

<p>She taps the Bruchion. "We're woven into this city. The courts use our legal scholars. The temples use our astronomers. The physicians trained here treat families in every quarter."</p>

<p>"That's not armor," Theron says.</p>

<p>"No. It's relationship. When the mob came during the succession crisis, scholars standing in the doorway stopped them. Teachers. The rioters saw their own tutors and turned away."</p>

<p>"I'm not saying we do nothing," she continues. "I'm saying we don't panic. We don't scatter the collection to a hundred cities. We assess. We prepare. We use the relationships we've built."</p>

<p>She turns to you. "Theron sees ships and thinks evacuation. I see ships and think: who do we know? Who owes us? Who might protect us?"</p>

<p>Theron hasn't moved. His eyes are patient, waiting.</p>

<p>"You're not wrong," he says quietly. "But you're not right either."</p>`,
    prompt: "Do you weigh in?",
    choices: [
        { text: "\"If Hypatia's relationships fail, what then?\"", next: "A1-04-challenge-hypatia", effects: { askedHypatia: true } },
        { text: "\"If Theron's evacuation succeeds, what do we lose?\"", next: "A1-04-challenge-theron", effects: { askedTheron: true } },
        { text: "Let them continue. This has been building for years.", next: "A1-05" }
    ]
},

"A1-04-challenge-hypatia": {
    title: "The Challenge",
    act: 1,
    prose: `<p>Hypatia turns to face you fully. She doesn't flinch.</p>

<p>"Then we lose. Everything." She says it plainly, without drama. "The building burns. The collection becomes ash. Three centuries of accumulated knowledge—gone."</p>

<p>"But I've seen the alternative," she continues. "Scattered fragments in a dozen cities, separated from each other, separated from the scholars who understand them. Copies without context. That's not preservation—that's a slow death instead of a fast one."</p>

<p>Theron stirs. "A slow death leaves time to—"</p>

<p>"To what? To hope someone reassembles what we've scattered? To trust that the conversation across centuries will somehow continue when the speakers are a thousand miles apart?"</p>

<p>She looks back at you. "You asked what happens if I'm wrong. I die in the Library, probably. I've made my peace with that." Her voice is steady. "What happens if Theron's wrong? We survive into a world where the thing we were trying to save no longer exists in any meaningful form. And we have to live with that."</p>

<p>Theron is quiet. This is old ground between them, but your question has sharpened it.</p>`,
    prompt: "Do you have another question?",
    dynamic: true,
    getProseAndChoices: function() {
        let choices = [];
        if (!STATE.askedTheron) {
            choices.push({ text: "\"And if Theron's evacuation succeeds, what do we lose?\"", next: "A1-04-challenge-theron", effects: { askedTheron: true } });
        }
        choices.push({ text: "Let them continue.", next: "A1-05" });
        return { choices: choices };
    }
},

"A1-04-challenge-theron": {
    title: "The Challenge",
    act: 1,
    prose: `<p>Theron stops pacing. He looks at you—really looks, as if recalculating something.</p>

<p>"Everything that makes it more than a warehouse," he says finally. "The organization. The cross-references. The scholars who know which texts speak to which other texts."</p>

<p>He moves to the map, touches the Library's location. "A scroll of Babylonian star charts in Damascus is cargo. The same scroll here, next to the Greek astronomical observations it corresponds to, next to the Egyptian calendar texts that show how both traditions evolved—that's knowledge. Scatter them, and you have three pieces of cargo in three cities. The conversation between them is over."</p>

<p>"But the conversation can start again," Hypatia says quietly. "If the scholars survive. If the copies survive. It can be rebuilt."</p>

<p>"Can it?" Theron's voice is flat. "How long did it take to build what we have? Three centuries. How many of those connections exist only in the minds of people who will die when this place burns?"</p>

<p>He looks at you. "You asked what we lose. We lose the whole. We save the pieces and hope—<em>hope</em>—that someone, someday, figures out how to put them back together." He pauses. "I'm not saying it's a good answer. I'm saying it might be the only answer."</p>

<p>Hypatia is watching him now, something shifting in her expression.</p>`,
    prompt: "Do you have another question?",
    dynamic: true,
    getProseAndChoices: function() {
        let choices = [];
        if (!STATE.askedHypatia) {
            choices.push({ text: "\"And if Hypatia's relationships fail, what then?\"", next: "A1-04-challenge-hypatia", effects: { askedHypatia: true } });
        }
        choices.push({ text: "Let them continue.", next: "A1-05" });
        return { choices: choices };
    }
},

"A1-05": {
    title: "The Argument",
    act: 1,
    prose: `<p>Theron moves first. "You've granted that dispersal has value. Copies in Pergamum, Damascus, Athens. If the building burns, the texts survive."</p>

<p>"I have. I've always understood the logic."</p>

<p>"Then we agree."</p>

<p>"We don't." She steps closer. "You're describing a library as if it were a warehouse."</p>

<p>"The Babylonian star charts—you want to send them to Damascus with Demetrios who can read them. Fine. What about the Greek observations they correspond to? Those go to Pergamum. And the Egyptian calendar texts—Memphis, I assume."</p>

<p>"In fifty years, there will be a scholar in Damascus who wants to understand how Babylonian observations influenced Greek models. She'll have the Babylonian texts. Maybe she can get the Greek ones from Pergamum. But she won't have the Egyptian material." Hypatia's hand moves across the map. "The conversation those texts were having—you can only see it when they're side by side. Separate them, and that conversation is over."</p>

<p>Theron is quiet. "And if the building burns with all three inside?"</p>

<p>"Yes. That's the risk."</p>

<p>"Then why—"</p>

<p>"Because your way <em>guarantees</em> the loss. Mine only <em>risks</em> it."</p>

<p>Silence. They've reached the place they always reach. Neither will move the other. Not with words alone.</p>`,
    choices: null,
    next: "A1-06"
},

"A1-06": {
    title: "Your Position",
    act: 1,
    prose: `<p>They're both watching you now. The argument has run its course—this iteration of it. What remains is what you bring.</p>

<p>Theron wants to move. Every hour spent debating is an hour not spent getting things out.</p>

<p>Hypatia wants to hold. Scattering is its own kind of destruction, slower but just as final.</p>

<p>And you—</p>`,
    prompt: "Where do you stand?",
    choices: [
        {
            text: "\"Seventy thousand in a hundred cities. If the worst happens, something survives.\"",
            next: "A1-06-side-theron",
            effects: { dispersal: 1, act1Alignment: "theron" }
        },
        {
            text: "\"Fragments without context are just fragments. Scattering loses what makes it matter.\"",
            next: "A1-06-side-hypatia",
            effects: { defense: 1, act1Alignment: "hypatia" }
        },
        {
            text: "\"You've been having this argument for years. What would change your mind?\"",
            next: "A1-06-challenge-both",
            effects: { act1Alignment: "both" }
        },
        {
            text: "\"I don't know yet. I need to see more.\"",
            next: "A1-07",
            effects: { act1Alignment: "neither" }
        }
    ]
},

"A1-06-side-theron": {
    title: "Your Position",
    act: 1,
    prose: `<p>Theron's chin lifts slightly. Not triumph—acknowledgment. Someone else sees what he sees.</p>

<p>"Seventy thousand," he repeats. "Maybe more, if we're fast. Seeds. The soil they land in won't be as rich as this one, but seeds can wait for better seasons."</p>

<p>Hypatia is very still. When she speaks, her voice is careful.</p>

<p>"I understand the mathematics. I do." She looks at you directly. "But you should know what you're choosing. Those seventy thousand will be copies—hasty copies, some of them. Without the scholars who understand them. Without each other." She pauses. "You're not saving the Library. You're saving cargo and hoping someone else builds a new library around it."</p>

<p>"Yes," Theron says quietly. "That's exactly what I'm proposing."</p>

<p>The silence stretches. Hypatia doesn't argue further—but she doesn't agree, either.</p>`,
    choices: null,
    next: "A1-07"
},

"A1-06-side-hypatia": {
    title: "Your Position",
    act: 1,
    prose: `<p>Something in Hypatia's shoulders eases—just slightly. She's not alone in this.</p>

<p>"Context," she says. "That's the word. A text without its context is a voice without a conversation. It can still speak, but no one knows what it's answering."</p>

<p>Theron's expression doesn't change, but you can see him recalculating. He looks at you for a long moment.</p>

<p>"I've buried colleagues who believed what you believe," he says. Not angry—tired. "Good people. Brave people. They stood their ground and the ground burned beneath them."</p>

<p>"I know," Hypatia says quietly.</p>

<p>"Do you? Do you really?" He turns away, toward the map. "Because when the fire comes, it doesn't care about context. It doesn't care about conversations across centuries. It just burns."</p>

<p>He doesn't say anything else. But he doesn't leave, either.</p>`,
    choices: null,
    next: "A1-07"
},

"A1-06-challenge-both": {
    title: "Your Position",
    act: 1,
    prose: `<p>They both stop. The question hangs in the air.</p>

<p>Theron answers first. "Evidence. Show me that standing and fighting has ever saved a library. Show me one time when the scholars who stayed behind didn't end up ash alongside the scrolls they were protecting."</p>

<p>"Show me that scattering has ever preserved a tradition," Hypatia counters. "Not just texts—a living tradition. Scrolls that people read and argue about and build on. Show me the scattered fragments that became something more than curiosities in foreign collections."</p>

<p>They're both looking at you now. Waiting.</p>

<p>"You're asking the wrong person," you say. "I don't have those answers. Neither do you."</p>

<p>"No," Theron admits.</p>

<p>"No," Hypatia agrees.</p>

<p>For a moment, there's something almost like peace between them. The shared acknowledgment of uncertainty.</p>

<p>"Then we find out," you say. "We gather information. We stop arguing about what might happen and learn what's actually possible."</p>`,
    choices: null,
    next: "A1-07"
},

"A1-07": {
    title: "Impasse",
    act: 1,
    prose: `<p>The lamp has burned lower. You've been here longer than you realized.</p>

<p>Theron moves to the map. "We're missing too much. The threat is real, but I don't know its shape."</p>

<p>"The city itself," Hypatia adds. "There are people we've never thought to ask. The ones who built this place. The ones who see us from the outside."</p>

<p>Theron nods. "The Serapeum—Khaemwaset has resources we don't. Vaults, connections. He'd want something in return, but he might deal."</p>

<p>"And the network's harbor contacts. I should check what's actually possible—ships, capacity, routes."</p>

<p>They're not arguing anymore. They're identifying gaps.</p>

<p>Theron looks at you. "We can't both leave. Someone needs to be here. That means we need someone out there."</p>

<p>Hypatia's eyes meet yours. "You know us both. You know what we're asking."</p>`,
    choices: null,
    next: "A1-08"
},

"A1-08": {
    title: "Dispatch",
    act: 1,
    prose: `<p>Theron pulls a small leather pouch from his coat. "Here's what we need."</p>

<p>He spreads the contents on the table: tokens stamped with the College's cipher, a worn scroll case, a folded map.</p>

<p>"First: intelligence. We're arguing in the dark. Someone needs to find out what's actually happening—what the threat looks like, what resources exist, what options we have." He looks at you. "That someone is you. We can't both leave the Chamber, and you can move through the city faster than either of us."</p>

<p>Hypatia picks up the scroll case. "Second: allies. We've been so focused on the debate between us that we've forgotten other people exist. The temple has vaults and its own networks. The people who built this place know things we don't. Even within the Library, there are scholars with their own resources." She hands you the case. "This gets you into the restricted sections. Use it."</p>

<p>Theron taps the map. "Four possibilities. The harbor—my contact Nephthys works the customs house. She knows which ships are leaving and which are staying. The Serapeum—Khaemwaset, high priest. He's been positioning the temple as an alternative to the Library for years. He'll want something in return, but he has resources we don't."</p>

<p>Hypatia adds: "The Library itself—there's a translator named Miriam. Hebrew and Greek. She has her own networks, her own priorities. And the city—the workers, the guilds. The people who see us from outside."</p>

<p>Theron pauses, something flickering across his face.</p>

<p>"One more thing. There's a young scholar—Cypriot, works in the copying rooms. He came to me last night, asked if there was anything he could do." He glances at Hypatia. "Reminded me of myself at that age. Too much hope, not enough experience. But he knows the Library's layout, knows some of the staff, and he's willing to take risks."</p>

<p>"Find him before you do anything else. Eastern colonnade, near the astronomical texts. His name is Kyros."</p>

<p>"Find out what you can," Theron says. "Then come back here. We'll still be arguing—" a glance at Hypatia, almost a smile "—but at least we'll have something to argue about."</p>

<p>"Choose where to start," Hypatia says. "You can visit more than one, but time matters. The harbor will tell us how much time we have."</p>`,
    prompt: "Where do you go first?",
    choices: [
        { text: "Find Kyros first. The eastern colonnade.", next: "A2-KYROS-PICKUP", effects: { threadsStarted: ["kyros"] } },
        { text: "The harbor. Find Nephthys.", next: "A2-NETWORK", effects: { threadsStarted: ["network"] } },
        { text: "The Library. Find Miriam.", next: "A2-LIBRARY", effects: { threadsStarted: ["library"] } },
        { text: "The Serapeum. Find Khaemwaset.", next: "A2-TEMPLE", effects: { threadsStarted: ["temple"] } },
        { text: "The city. Find the workers.", next: "A2-CITY", effects: { threadsStarted: ["city"] } }
    ]
}

};
