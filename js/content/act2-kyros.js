/**
 * Act 2: Kyros Companion Thread
 * The young Cypriot scholar who joins the player
 */

import { STATE } from '../state.js';

export const ACT2_KYROS_CONTENT = {

// ============================================================================
// PICKUP SCENES
// ============================================================================

"A2-KYROS-PICKUP": {
    title: "The Eastern Colonnade",
    act: 2,
    thread: "kyros",
    dynamic: true,
    getProseAndChoices: function() {
        // Check if this is early or late pickup
        let isLate = STATE.threadsVisited.length > 0 || STATE.threadsCompleted.length > 0;

        let prose;
        if (isLate) {
            prose = `<p>You find him where Theron said—still waiting in the eastern colonnade. His posture is different now. Less eager, more uncertain.</p>

<p>"You came." He stands quickly, but there's something guarded in his expression. "I thought maybe—when you didn't come first—"</p>

<p>He stops himself.</p>

<p>"No. It doesn't matter. You're here now. What do you need?"</p>

<p>He's young—twenty-three, perhaps. His hands are calloused in ways that don't match his scholar's robes. On the desk beside an astronomical scroll, you notice a small leather case—worn, personal. The kind used for documents that matter.</p>`;
        } else {
            prose = `<p>The eastern colonnade is quieter than you expected. Most of the scholars have retreated to their chambers or the reading rooms; only a few copyists remain at their stations, scratching away by lamplight.</p>

<p>You find him near the astronomical texts—a young man bent over a scroll, not copying but reading. His concentration is fierce, almost hungry. When your shadow falls across his work, he looks up with the startled expression of someone caught doing something private.</p>

<p>"You're—" He stands quickly, knocking his stool. Catches it. His Greek is fluent but carries a faint accent—Cypriot, as Theron said. "Theron sent you? He said someone might come. I wasn't sure if—"</p>

<p>He stops himself. Takes a breath. Starts again, more controlled.</p>

<p>"I'm Kyros. I work in the copying rooms—mostly astronomical tables, some medical texts. I heard about the crisis. I want to help."</p>

<p>His hands are calloused in ways that don't match his current work. A tradesman's hands. And on the desk beside the astronomical scroll, you notice a smaller case—leather, worn, the kind used for personal documents.</p>`;
        }

        let choices = [
            { text: "\"What's in the case?\"", next: "A2-KYROS-FRAGMENT" },
            { text: "\"How do you know the Library's layout?\"", next: "A2-KYROS-LAYOUT" },
            { text: "\"We should move. I'll explain on the way.\"", next: "A2-KYROS-JOIN-QUICK" }
        ];

        return { prose: prose, choices: choices, prompt: "How do you respond?" };
    }
},

"A2-KYROS-FRAGMENT": {
    title: "The Fragment",
    act: 2,
    thread: "kyros",
    prose: `<p>His hand moves instinctively toward the case, then stops.</p>

<p>"It's... nothing valuable. Not to anyone but me."</p>

<p>But he opens it anyway. Inside, a small scrap of papyrus—fragile, worn at the edges. The handwriting is old, the Greek antiquated.</p>

<p>"Sappho. A fragment. I found it in Kition—in my father's shipping office, of all places. Someone had used it to wrap a package, probably centuries ago. Nobody knew what it was. Nobody cared."</p>

<p>He handles the papyrus with extraordinary care.</p>

<p>"'Moon has set, and the Pleiades. Middle of the night. Time passes. And I lie alone.'" He doesn't look at the text—he knows it by heart. "That's when I decided. If these words could survive a thousand years and still mean something... that mattered. That was worth crossing the sea for."</p>

<p>He closes the case.</p>

<p>"So yes. I want to help. Whatever you need."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"That's why you're here. Because of a fragment.\"", next: "A2-KYROS-IDEALISM", effects: { kyrosPoetryDiscussed: true } },
        { text: "\"Why did you leave? What about your family?\"", next: "A2-KYROS-FAMILY", effects: { kyrosFamilyDiscussed: true } },
        { text: "\"Come with me. We have work to do.\"", next: "A2-KYROS-JOIN", effects: { kyrosPoetryDiscussed: true } }
    ]
},

"A2-KYROS-LAYOUT": {
    title: "His Knowledge",
    act: 2,
    thread: "kyros",
    prose: `<p>"Two years in the copying rooms." He gestures around them. "You learn the building when you're running scrolls between sections at all hours. The main collections, the restricted areas, the staff passages..."</p>

<p>He pauses, something flickering in his expression.</p>

<p>"And before that—I grew up around ships. My father's a shipwright in Kition. I know how to move cargo, how to work in tight spaces, how to read a crisis." He spreads his calloused hands. "These didn't come from copying texts."</p>

<p>"The junior staff trust me. The senior scholars mostly don't notice me. That's useful, in its way."</p>

<p>He meets your eyes. "I know I'm new to this—to whatever it is you and Theron do. But I can carry things. I can copy quickly. I can talk to people who won't talk to the masters."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What's in that case? The leather one.\"", next: "A2-KYROS-FRAGMENT" },
        { text: "\"Why did you leave Cyprus? Leave your father's trade?\"", next: "A2-KYROS-FAMILY", effects: { kyrosFamilyDiscussed: true } },
        { text: "\"Good. You're coming with me.\"", next: "A2-KYROS-JOIN" }
    ]
},

"A2-KYROS-IDEALISM": {
    title: "His Idealism",
    act: 2,
    thread: "kyros",
    prose: `<p>"Because of a fragment." He says it back, testing the words. "That sounds foolish when you put it that way."</p>

<p>But he doesn't look ashamed. He looks defiant.</p>

<p>"Do you know how many people in Kition have read Sappho? None. None of them know she existed. And that's—" He gestures at the walls around him. "That's what I don't understand about this place. You have all of it. Everything humanity has ever thought or felt or discovered. And you keep it locked up like treasure instead of spreading it like seed."</p>

<p>He catches himself. Lowers his voice.</p>

<p>"I'm not criticizing. I know how important preservation is. But if the crisis comes—if the fire comes—what have we really saved if only scholars can read it? If the people who need it most never even know it's here?"</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"You're right. That's exactly the question.\"", next: "A2-KYROS-JOIN", effects: { kyrosRelationship: "positive" } },
        { text: "\"Why did you leave your family for this?\"", next: "A2-KYROS-FAMILY", effects: { kyrosFamilyDiscussed: true } },
        { text: "\"Enough philosophy. Come with me.\"", next: "A2-KYROS-JOIN" }
    ]
},

"A2-KYROS-FAMILY": {
    title: "His Family",
    act: 2,
    thread: "kyros",
    prose: `<p>Something shifts in his expression. Not quite pain—more like a question he hasn't finished answering.</p>

<p>"My father builds ships. Built them. Still builds them, I suppose. His father did too, and his father's father. I was supposed to—" He spreads his calloused hands. "You can see what I was supposed to do."</p>

<p>He touches the scroll case at his side.</p>

<p>"He didn't understand. Why I needed to come here. Why I couldn't just... stay." A pause. "I don't think I explained it well. I'm not sure I could have. How do you tell someone that words on a page matter more than—"</p>

<p>He stops.</p>

<p>"They don't matter more. They matter differently. But that's harder to explain."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"I understand. Let's go.\"", next: "A2-KYROS-JOIN", effects: { kyrosRelationship: "positive" } },
        { text: "\"You can still go back. After tonight.\"", next: "A2-KYROS-MAYBE-BACK" },
        { text: "\"Show me the fragment. The Sappho.\"", next: "A2-KYROS-FRAGMENT", effects: { kyrosPoetryDiscussed: true } }
    ]
},

"A2-KYROS-MAYBE-BACK": {
    title: "Going Back",
    act: 2,
    thread: "kyros",
    prose: `<p>He's quiet for a moment. Then he shakes his head.</p>

<p>"Maybe. I think about it sometimes. My father's hands—they're getting slower. He could use help."</p>

<p>"But if I go back now, before I've done anything, before I've—" He struggles for the words. "I left for a reason. If I go back without accomplishing that reason, what was the point? What did I give up everything for?"</p>

<p>He picks up the scroll case, settles it against his side.</p>

<p>"Maybe after tonight. Maybe if we save something that matters. Then I could go home and say—" He stops. "I don't know what I'd say. But at least I'd have something to say."</p>`,
    choices: [
        { text: "\"Then let's give you something to say. Come with me.\"", next: "A2-KYROS-JOIN" }
    ]
},

"A2-KYROS-JOIN-QUICK": {
    title: "Joining Quickly",
    act: 2,
    thread: "kyros",
    prose: `<p>He gathers his things quickly—the scroll case, a small bag, a wax tablet for notes. His movements are efficient; whatever else he is, he's used to work.</p>

<p>"Where do we start?" He falls into step beside you. "Theron said you'd know what to do."</p>

<p>He looks at the colonnade around him—the shelves rising into shadow, the smell of papyrus and lamp oil.</p>

<p>"Just tell me what you need. I'm ready."</p>

<p>Kyros walks beside you through the colonnade, his scholar's robes slightly too fine, his hands slightly too rough. Between two worlds—the one he left and the one that hasn't fully accepted him.</p>

<p>The Library stretches before you. The crisis waits.</p>`,
    choices: [
        {
            text: "Continue into the city.",
            next: "A2-HUB",
            effects: {
                kyrosJoined: true,
                kyrosPickupTiming: "late",
                kyrosRelationship: "neutral"
            }
        }
    ]
},

"A2-KYROS-JOIN": {
    title: "Joining",
    act: 2,
    thread: "kyros",
    dynamic: true,
    getProseAndChoices: function() {
        let isLate = STATE.threadsVisited.length > 0 || STATE.threadsCompleted.length > 0;

        let prose = `<p>He gathers his things quickly—the scroll case, a small bag, a wax tablet for notes. His movements are efficient; whatever else he is, he's used to work.</p>

<p>"Where do we start?" He falls into step beside you. "Theron said you'd know what to do. He said—" A brief pause. "He said you were someone who understood what was at stake."</p>

<p>He looks at the colonnade around him—the shelves rising into shadow, the smell of papyrus and lamp oil, the weight of centuries.</p>

<p>"I know I'm new here. I know I don't have experience with... whatever this is. Crises. Evacuations. Politics." His voice is steady. "But I can carry things. I can copy quickly. I can talk to the junior staff—they don't trust the senior scholars, but they might trust me."</p>

<p>He meets your eyes.</p>

<p>"Use me. However you need to. I just want to help save something."</p>

<p>Kyros walks beside you through the colonnade, his scholar's robes slightly too fine, his hands slightly too rough. Between two worlds—the one he left and the one that hasn't fully accepted him.</p>

<p>The Library stretches before you. The crisis waits.</p>`;

        let timing = isLate ? "late" : "early";
        let relationship = STATE.kyrosPoetryDiscussed || STATE.kyrosFamilyDiscussed ? "positive" : "neutral";

        // Add reminder about Theron's mention if early pickup
        if (!isLate) {
            prose += `<p>"Theron mentioned others," Kyros says. "People we should talk to. The harbor. The temple. The city." He glances at you. "Where do we go first?"</p>`;
        }

        return {
            prose: prose,
            choices: [
                {
                    text: "Continue into the city.",
                    next: "A2-HUB",
                    effects: {
                        kyrosJoined: true,
                        kyrosPickupTiming: timing,
                        kyrosRelationship: relationship
                    }
                }
            ]
        };
    }
},

// ============================================================================
// KYROS REACTIVE MOMENTS - DEMETRIA
// ============================================================================

"A2-KYROS-DEMETRIA-ARRIVAL": {
    title: "Approaching the Construction Site",
    act: 2,
    thread: "kyros-reaction",
    prose: `<p>Kyros slows as you approach the construction site. His eyes move across the work in progress—the foundation stones, the careful alignment, the rhythm of labor.</p>

<p>"I know this," he says quietly. Not to you—to himself. "My father's sites looked like this."</p>

<p>He's standing differently. His shoulders have shifted, his hands have moved. For a moment, he doesn't look like a junior scholar. He looks like a tradesman's son who wandered into the wrong story.</p>`,
    choices: null,
    next: "A2-CITY-ENCOUNTER"
},

"A2-KYROS-DEMETRIA-MIDWIFE": {
    title: "The Midwife Story",
    act: 2,
    thread: "kyros-reaction",
    dynamic: true,
    getProseAndChoices: function() {
        // This is inserted during Demetria's midwife story
        let prose = `<p>Kyros stirs beside you. You can see it in his face—he wants to speak. This touches something in him.</p>`;

        return {
            prose: prose,
            prompt: "Do you let him speak?",
            choices: [
                {
                    text: "Nod to Kyros. Let him respond.",
                    next: "A2-KYROS-DEMETRIA-SPEAKS",
                    effects: { kyrosDemetriaEngaged: true }
                },
                {
                    text: "Catch Kyros's eye. A slight shake of your head.",
                    next: "A2-KYROS-DEMETRIA-SILENCED",
                    effects: { kyrosDemetriaSilenced: true, kyrosSilencedCount: 1 }
                }
            ]
        };
    }
},

"A2-KYROS-DEMETRIA-SPEAKS": {
    title: "Kyros Speaks",
    act: 2,
    thread: "kyros-reaction",
    prose: `<p>"That's what I mean—that's exactly what I mean." Kyros steps forward before you can stop him. "The midwife learned from her mother. Knowledge passed down, used, lived. Why can't the Library be like that?"</p>

<p>Demetria looks at him. Really looks—seeing the calloused hands, the Cypriot accent, the clothes that are too fine for where he came from and too plain for where he is.</p>

<p>"You're not from here," she says.</p>

<p>"Kition. My father builds—built—" He catches himself. "Ships."</p>

<p>"And you left." It's not a question.</p>

<p>"I—" He falters. "Yes."</p>

<p>Demetria picks up her trowel. Stone, mortar, press. "You left your father to come here. To copy scrolls that no one in Kition will ever read." Stone, mortar, press. "And now you want to tell me what the Library should be."</p>

<p>"That's not—" But he doesn't finish. He doesn't have an answer.</p>`,
    choices: null,
    next: "A2-CITY-MIDWIFE-CONTINUE"
},

"A2-KYROS-DEMETRIA-SILENCED": {
    title: "Kyros Silenced",
    act: 2,
    thread: "kyros-reaction",
    prose: `<p>You catch Kyros's eye before he can speak. A slight shake of your head.</p>

<p>He stops. His mouth closes. He steps back.</p>

<p>For the rest of the conversation, he's silent. Watching. His hands have curled into fists at his sides.</p>`,
    choices: null,
    next: "A2-CITY-MIDWIFE-CONTINUE"
},

"A2-KYROS-DEMETRIA-AFTER": {
    title: "After Demetria",
    act: 2,
    thread: "kyros-reaction",
    dynamic: true,
    getProseAndChoices: function() {
        let prose;

        if (STATE.kyrosDemetriaEngaged) {
            prose = `<p>"She didn't hate me." Kyros says it quietly, once you're out of earshot. "That would have been easier. She just... didn't need anything I had to offer."</p>

<p>He touches the scroll case at his side.</p>

<p>"My father would have understood her. They would have—" He stops. "I don't know what I'm trying to say."</p>

<p>He's quiet for a moment. Then, softer: "She's right that I left. She's right that the scrolls won't reach Kition. But that doesn't mean they don't matter. It can't mean that."</p>`;
        } else if (STATE.kyrosDemetriaSilenced) {
            prose = `<p>Kyros doesn't speak until you're well away from the construction site. When he does, his voice is flat.</p>

<p>"You made me stand there." He's not looking at you. "You made me listen to her say none of it matters, and I couldn't—"</p>

<p>He doesn't finish.</p>

<p>"Was that strategy? Diplomacy?" He finally meets your eyes. "Or did you just not want to hear what I had to say?"</p>`;
        } else {
            prose = `<p>Kyros is quiet as you leave the construction site. His expression is unreadable.</p>

<p>"She sees the Library differently than I do," he says finally. "From outside. Three hundred years of invisibility." He shakes his head. "I never thought about it that way."</p>`;
        }

        return {
            prose: prose,
            choices: [
                { text: "Continue.", next: "A2-HUB" }
            ]
        };
    }
},

// ============================================================================
// KYROS REACTIVE MOMENTS - KHAEMWASET
// ============================================================================

"A2-KYROS-TEMPLE-ARRIVAL": {
    title: "At the Temple",
    act: 2,
    thread: "kyros-reaction",
    prose: `<p>Kyros is uncomfortable here. The Serapeum isn't the Library—it's older, stranger, more explicitly religious. He stays close to you, watching the shadows with wary fascination.</p>

<p>"I've never been inside," he admits. "The scholars talk about Khaemwaset. They say he's been positioning the temple as an alternative to the Library for years."</p>

<p>He glances at you. "What does he want from us?"</p>`,
    choices: null,
    next: "A2-TEMPLE-ENCOUNTER"
},

"A2-KYROS-TEMPLE-NEED": {
    title: "Need Outlasts Prestige",
    act: 2,
    thread: "kyros-reaction",
    dynamic: true,
    getProseAndChoices: function() {
        // This is inserted when Khaemwaset discusses his philosophy
        let prose = `<p>Kyros stirs. You can see him processing—this argument sounds almost like his own, but twisted into something that doesn't feel right.</p>

<p>"That's—" He catches himself. Looks at you, uncertain whether to speak.</p>`;

        return {
            prose: prose,
            prompt: "Do you let him speak?",
            choices: [
                {
                    text: "Nod. \"Go ahead.\"",
                    next: "A2-KYROS-TEMPLE-SPEAKS",
                    effects: { kyrosSapphoDefense: true }
                },
                {
                    text: "Keep the focus on Khaemwaset.",
                    next: "A2-KYROS-TEMPLE-SILENT"
                }
            ]
        };
    }
},

"A2-KYROS-TEMPLE-SPEAKS": {
    title: "Kyros Defends Poetry",
    act: 2,
    thread: "kyros-reaction",
    prose: `<p>"That's what I believe too," Kyros says. "That knowledge should be useful, should reach people. But—"</p>

<p>He turns to Khaemwaset.</p>

<p>"You're talking about utility like it only means practical things. Medicine. Agriculture. Calendars." He touches the scroll case at his side. "What about poetry? What about the texts that don't help you plant crops or cure fevers, but help you understand what you feel? Is that need too?"</p>

<p>Khaemwaset's expression doesn't change. "A farmer burying his son needs comfort. That is utility. A farmer's wife crying in the night needs words for her grief. That is also utility." He pauses. "But the poetry that only scholars read, that only scholars care about—that is prestige. That dies first."</p>

<p>Kyros has no answer. The argument is harder than he expected.</p>`,
    choices: null,
    next: "A2-TEMPLE-OFFER"
},

"A2-KYROS-TEMPLE-SILENT": {
    title: "Kyros Silent",
    act: 2,
    thread: "kyros-reaction",
    prose: `<p>Kyros stays silent, but you can see the tension in his shoulders. Something in Khaemwaset's words has unsettled him—not because they're wrong, but because they're almost right.</p>`,
    choices: null,
    next: "A2-TEMPLE-OFFER"
},

"A2-KYROS-TEMPLE-AFTER": {
    title: "After Khaemwaset",
    act: 2,
    thread: "kyros-reaction",
    dynamic: true,
    getProseAndChoices: function() {
        let prose;

        if (STATE.kyrosSapphoDefense) {
            prose = `<p>"He's not wrong about need outlasting prestige. But he made it sound like poetry is the opposite of need. It isn't. It isn't."</p>

<p>Kyros is gripping the scroll case.</p>

<p>"Sappho wasn't prestige in Kition. She was—" He stops. "She was what I needed. That has to count for something."</p>

<p>He's quiet for a moment. "But I couldn't argue with him. Not really. He had an answer for everything I said."</p>`;
        } else {
            prose = `<p>"Need outlasts prestige," Kyros repeats quietly. "He's not wrong. The medical texts matter more than the poetry, if you're counting lives saved."</p>

<p>He touches the scroll case. "But Sappho saved something too. Saved me, in a way. Does that count?"</p>

<p>He doesn't seem to expect an answer.</p>`;
        }

        return {
            prose: prose,
            choices: [
                { text: "Continue.", next: "A2-HUB" }
            ]
        };
    }
},

// ============================================================================
// KYROS REACTIVE MOMENTS - MIRIAM
// ============================================================================

"A2-KYROS-LIBRARY-ARRIVAL": {
    title: "In the Translation Rooms",
    act: 2,
    thread: "kyros-reaction",
    prose: `<p>Kyros is more comfortable here. The translation rooms are where the work happens—the space between the grand reading rooms and the copying stations. He knows people here, or at least knows the kind of people here.</p>

<p>"I've seen her," he says quietly as you approach Miriam's chamber. "The Hebrew translator. She keeps to herself, but the other copyists respect her. They say she's been here fifteen years."</p>`,
    choices: null,
    next: "A2-LIBRARY-ENCOUNTER"
},

"A2-KYROS-MIRIAM-NETWORK": {
    title: "Kyros and Miriam's Network",
    act: 2,
    thread: "kyros-reaction",
    prose: `<p>"Synagogues around the Middle Sea." Kyros repeats it softly, almost to himself. "Her brother in Antioch. Her cousin in Cyrene."</p>

<p>He looks at Miriam with something like hunger.</p>

<p>"You have people who care about what you carry." It's not a question. "A whole community that values what you value."</p>

<p>Miriam meets his eyes. Studies him.</p>

<p>"You don't."</p>

<p>"No." He touches the scroll case. "I have this. And whatever I can convince people to listen to."</p>

<p>Miriam is quiet for a moment. Then: "That's lonely."</p>

<p>"Yes."</p>

<p>"But you're still here."</p>

<p>"Yes."</p>

<p>Something passes between them. Recognition. Maybe respect.</p>`,
    choices: null,
    next: "A2-LIBRARY-HER-PRIORITIES",
    effects: { kyrosMiriamConnection: true }
},

"A2-KYROS-MIRIAM-TRANSLATION": {
    title: "Kyros on Translation Loss",
    act: 2,
    thread: "kyros-reaction",
    prose: `<p>"Every translation is a choice. Every choice is a loss." Kyros is listening intently. "The breath becomes spirit. The spirit becomes wind. The word that held all three becomes three words that hold one each."</p>

<p>He touches his scroll case.</p>

<p>"The fragment I have—it's been copied, translated, maybe misremembered. How much of Sappho is left in it?" He looks at Miriam. "How do you bear it? Knowing that every time you carry something across, something falls?"</p>

<p>"I bear it because the alternative is worse," Miriam says simply. "Knowledge locked in one language, one community, one place—that dies when the place dies. Knowledge carried across, even imperfectly... that can live."</p>

<p>Kyros is quiet. Something is shifting in his expression.</p>

<p>"Carrying is better than keeping," he says slowly. "Even if carrying means losing."</p>

<p>"Yes." Miriam almost smiles. "You understand faster than most."</p>`,
    choices: null,
    next: "A2-LIBRARY-TERMS",
    effects: { kyrosMiriamConnection: true }
},

"A2-KYROS-MIRIAM-AFTER": {
    title: "After Miriam",
    act: 2,
    thread: "kyros-reaction",
    dynamic: true,
    getProseAndChoices: function() {
        let prose;

        if (STATE.kyrosMiriamConnection) {
            prose = `<p>"She has what I don't. A community that carries what it carries." Kyros's voice is thoughtful, not bitter. "I just have—" He gestures vaguely at himself. "This. Whatever this is."</p>

<p>A pause.</p>

<p>"But maybe that's enough. Maybe one person carrying something is still better than nothing." He sounds almost convinced. "She said the crossing is worth it, even with what's lost. I want to believe that's true."</p>`;
        } else {
            prose = `<p>"Her network is older than the Library," Kyros says quietly. "A thousand years of practice at carrying what matters."</p>

<p>He looks at the scroll case. "I wonder if I could build something like that. Not for my people—I don't have a people, not the way she does. But maybe for the poetry. For Sappho."</p>

<p>He shakes his head. "Probably foolish."</p>`;
        }

        return {
            prose: prose,
            choices: [
                { text: "Continue.", next: "A2-HUB" }
            ]
        };
    }
},

// ============================================================================
// KYROS REACTIVE MOMENTS - HARBOR
// ============================================================================

"A2-KYROS-HARBOR-ARRIVAL": {
    title: "At the Harbor",
    act: 2,
    thread: "kyros-reaction",
    prose: `<p>Kyros moves differently at the harbor—more confident, more at ease. The smells, the sounds, the rhythm of loading and unloading. He knows this world.</p>

<p>"I could help with the ship captains," he offers. "I know how they think. What matters to them. My father dealt with merchants all his life."</p>

<p>He scans the waterfront with practiced eyes. "Those transports in the eastern basin—military. The merchants are in the western half. That's where we'd find ships willing to carry cargo quietly."</p>`,
    choices: null,
    next: "A2-NETWORK-ENCOUNTER"
},

"A2-KYROS-HARBOR-AFTER": {
    title: "After Nephthys",
    act: 2,
    thread: "kyros-reaction",
    prose: `<p>"Three ships. Six days of copying. Seventy thousand scrolls, if we're lucky." Kyros is doing the math. "That's... not enough. That's not close to enough."</p>

<p>He looks at the military transports in the eastern basin.</p>

<p>"My father always said you can read a harbor like a text. The story it's telling right now..." He doesn't finish. He doesn't need to.</p>

<p>"We need more time. Or more ships. Or—" He shakes his head. "Something."</p>`,
    choices: [
        { text: "Continue.", next: "A2-HUB" }
    ]
}

};
