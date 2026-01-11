/**
 * Act 2: Library Thread
 * Miriam the translator
 */

import { STATE } from '../state.js';

export const ACT2_LIBRARY_CONTENT = {

"A2-LIBRARY": {
    title: "The Translation Rooms",
    act: 2,
    thread: "library",
    prose: `<p>You move deeper into the Library, past the grand reading rooms and the public halls. Here the corridors narrow. The light changes—fewer windows, more oil lamps. The smell of ink and papyrus grows stronger.</p>

<p>This is where the real work happens. Copyists bent over desks, their pens scratching in steady rhythm. Translators with three texts spread before them, moving between languages. The industry beneath the scholarship.</p>

<p>Theron mentioned a translator. "Miriam. Jewish. She has her own network—older than ours, in some ways larger. If anyone understands what we're trying to do, she does. Find her in the translation rooms. She keeps to herself."</p>

<p>You ask a passing scribe. He points to a smaller chamber off the main corridor. "The Hebrew translator. She's always there."</p>`,
    choices: [
        { text: "Enter the chamber.", next: "A2-LIBRARY-ENCOUNTER" }
    ]
},

"A2-LIBRARY-ENCOUNTER": {
    title: "First Encounter",
    act: 2,
    thread: "library",
    prose: `<p>The room is small—barely larger than a storage closet. Three texts spread on the desk: Greek, Hebrew, something older. A woman sits with her back to the door, pen moving between them.</p>

<p>She doesn't turn when you enter. "I heard you coming. The corridor echoes."</p>

<p>She sets down her pen, turns. Forty years old, perhaps. Dark eyes that assess you quickly, thoroughly. She's been underestimated before—you can see it in the way she waits to see if you'll do the same.</p>

<p>"You're not a scribe. Not a scholar—not the Library kind." She tilts her head. "One of Theron's people. He mentioned you might come."</p>

<p>She gestures to a stool. "Sit. Tell me what you want. I'll tell you what I think."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"We want to save the Library. Theron says you can help.\"", next: "A2-LIBRARY-SAVE" },
        { text: "\"Theron says you have your own network. Your own preservation effort.\"", next: "A2-LIBRARY-NETWORK" },
        { text: "\"I'm trying to understand what's worth saving. What matters most.\"", next: "A2-LIBRARY-WORTH" }
    ]
},

"A2-LIBRARY-SAVE": {
    title: "Which Library",
    act: 2,
    thread: "library",
    prose: `<p>"You want to save the Library." She repeats it, turning the words over. "Which library?"</p>

<p>You start to answer, but she continues.</p>

<p>"This building holds half a million scrolls. Texts from Egypt, Greece, Babylon, Persia, India. My people's scriptures, translated into Greek so Greeks could read them. Aristotle's letters, Euclid's proofs, plays that haven't been performed in two hundred years."</p>

<p>She picks up one of the scrolls on her desk. "Half a million. How many have you read? How many has anyone read in the last decade? The last century?"</p>

<p>She sets it down. "You want to save the Library. Is that the building? The collection? The institution? Or something else—something you haven't named yet?"</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"The knowledge. What's inside.\"", next: "A2-LIBRARY-KNOWLEDGE" },
        { text: "\"What do you think is worth saving?\"", next: "A2-LIBRARY-HER-PRIORITIES" },
        { text: "\"What's the difference? Why does it matter?\"", next: "A2-LIBRARY-DIFFERENCE" }
    ]
},

"A2-LIBRARY-NETWORK": {
    title: "Her Network",
    act: 2,
    thread: "library",
    prose: `<p>Something shifts in her expression. Not suspicion—assessment. She's deciding how much to tell you.</p>

<p>"I have a network. Yes." She folds her hands on the desk. "Synagogues around the Middle Sea. My brother in Antioch. My cousin in Cyrene. My teacher's daughter in Rome. We've been doing this longer than the Greeks have had letters."</p>

<p>She lets that settle.</p>

<p>"When the Temple fell—the first time, six hundred years ago—our scholars wrote down what had been spoken. They made a temple out of words. One that could travel. One that couldn't be burned because it lived in the people who carried it."</p>

<p>She gestures at the walls around her. "Theron has his network. Hidden, clever, dispersed. I have mine. Older. Less hidden. More practiced at this particular work."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"You've already started. The preservation work.\"", next: "A2-LIBRARY-ALREADY-STARTED" },
        { text: "\"What have you been preserving?\"", next: "A2-LIBRARY-HER-PRIORITIES" },
        { text: "\"How is your network different from Theron's?\"", next: "A2-LIBRARY-MODEL" }
    ]
},

"A2-LIBRARY-WORTH": {
    title: "What's Worth Saving",
    act: 2,
    thread: "library",
    prose: `<p>She studies you for a long moment. Then she nods—once, precisely.</p>

<p>"That's a better question than most people ask." She turns back to her desk, gestures at the three texts spread before her. "Let me show you something."</p>

<p>She points to each scroll in turn. "Greek. Hebrew. Aramaic. The same text—or what passes for the same text. A psalm. A prayer. Words my people have been saying for five hundred years."</p>

<p>"In Hebrew, one word means 'breath' and 'spirit' and 'wind.' The same word for all three. When God breathes life into Adam, when the spirit moves over the waters, when the wind blows from the east—same word."</p>

<p>She touches the Greek scroll. "In Greek, you have to choose. The translator picks one, and the others disappear."</p>

<p>She looks at you. "So what's worth saving? The Greek translation that a million people can read? Or the Hebrew that holds meanings the Greek can never capture?"</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Both. If we can.\"", next: "A2-LIBRARY-BOTH" },
        { text: "\"What would you choose?\"", next: "A2-LIBRARY-HER-PRIORITIES" },
        { text: "\"Tell me more about what's lost in translation.\"", next: "A2-LIBRARY-TRANSLATION" }
    ]
},

"A2-LIBRARY-KNOWLEDGE": {
    title: "The Knowledge",
    act: 2,
    thread: "library",
    prose: `<p>"The knowledge." She says it back to you. "What's inside."</p>

<p>She stands, moves to a shelf along the wall. Pulls down a scroll, holds it up.</p>

<p>"This is a commentary on a commentary on a text that no longer exists. The original was lost two centuries ago. The first commentary was lost fifty years later. This—" she taps it "—is three generations removed from the thought it's trying to preserve."</p>

<p>She sets it down. "Is this knowledge? Or is it the ghost of knowledge? The echo of an echo?"</p>

<p>She returns to her seat. "Your Library has half a million scrolls. How many of them does anyone teach? How many does anyone live by? A scroll that sits on a shelf, unread, untaught, unused—is that knowledge? Or just... storage?"</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Even storage has value. Potential. Someone might read it someday.\"", next: "A2-LIBRARY-POTENTIAL" },
        { text: "\"What's the alternative? What survives better than scrolls?\"", next: "A2-LIBRARY-MODEL" },
        { text: "\"What do you think is actually worth saving?\"", next: "A2-LIBRARY-HER-PRIORITIES" }
    ]
},

"A2-LIBRARY-DIFFERENCE": {
    title: "The Difference",
    act: 2,
    thread: "library",
    prose: `<p>"The difference." She leans back. "Why it matters."</p>

<p>"The building can burn and the knowledge survive. We've seen it happen. The knowledge can be lost while the building stands. We've seen that too."</p>

<p>She gestures at the walls. "This institution has stood for three hundred years. In that time, it has collected, cataloged, stored. Half a million scrolls. A monument to accumulation."</p>

<p>"In that same time, my people lost our Temple—twice. Lost our homeland. Were scattered across the Mediterranean. And we preserved more of what mattered than this Library ever will. Because we didn't preserve scrolls. We preserved practice. Teaching. Living tradition."</p>

<p>She meets your eyes. "That's the difference. The building is a container. The institution is a habit. The knowledge is what people carry in their heads and pass to their children. Only one of those survives fire."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Tell me about your people's way. How it works.\"", next: "A2-LIBRARY-MODEL" },
        { text: "\"But scrolls preserve things that memory can't. Details. Precision.\"", next: "A2-LIBRARY-SCROLLS-VALUE" },
        { text: "\"What are you preserving, then? What's still at risk?\"", next: "A2-LIBRARY-HER-PRIORITIES" }
    ]
},

"A2-LIBRARY-ALREADY-STARTED": {
    title: "Already Started",
    act: 2,
    thread: "library",
    prose: `<p>"Six months ago." She says it without pride—stating fact. "When the political situation began to shift. I didn't wait for a crisis. I started moving things."</p>

<p>"The Septuagint—our scriptures in Greek—is already in three cities. Antioch, Cyrene, Rome. My brother has copies. My cousin has copies. If Alexandria burns tonight, that text survives."</p>

<p>She pauses. "But that's the easy part. The Septuagint is famous. Many copies exist. What I'm worried about now is what no one else thinks to save."</p>

<p>She touches one of the scrolls on her desk. "Aristobulus. A Jewish philosopher who wrote in Greek, two centuries ago. One copy exists. This one. If it burns, he's gone forever—not just his words, but the proof that my people thought philosophically, engaged with Greek ideas, built something here."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What else is at risk? What else is there only one copy of?\"", next: "A2-LIBRARY-HER-PRIORITIES" },
        { text: "\"Why does it matter—the proof that your people built something?\"", next: "A2-LIBRARY-PROOF" },
        { text: "\"How can we help? What do you need?\"", next: "A2-LIBRARY-TERMS" }
    ]
},

"A2-LIBRARY-MODEL": {
    title: "Her People's Way",
    act: 2,
    thread: "library",
    prose: `<p>"Our way." She settles back, and warmth enters her voice. This is her ground—the place where she's expert and unguarded.</p>

<p>"When the Babylonians destroyed the first Temple, six hundred years ago, our scholars faced a choice. The rituals required the Temple. The sacrifices required the altar. Everything was built around a building that no longer existed."</p>

<p>"So they built a new temple. Out of words. Out of practice. Out of teaching."</p>

<p>She gestures outward. "Every synagogue around the Middle Sea is the same temple. The same words, the same rhythms, the same teachings. A child in Alexandria learns the same prayers as a child in Babylon. When the building burns, the temple travels."</p>

<p>She looks at you. "Your Library preserves scrolls. My people preserve teaching. Scrolls can burn. Teaching lives in every student who learns it."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"But teaching changes over time. Drifts. Scrolls are fixed.\"", next: "A2-LIBRARY-SCROLLS-VALUE" },
        { text: "\"What's still at risk for you? What hasn't been... distributed?\"", next: "A2-LIBRARY-HER-PRIORITIES" },
        { text: "\"Could that model work for the Library? For Greek knowledge?\"", next: "A2-LIBRARY-APPLY" }
    ]
},

"A2-LIBRARY-POTENTIAL": {
    title: "Potential",
    act: 2,
    thread: "library",
    prose: `<p>"Potential." She considers the word. "Someone might read it someday."</p>

<p>"Someday is a long time. And fire doesn't wait."</p>

<p>She gestures at her desk. "I've worked in these rooms for fifteen years. I've watched scholars come and go. Do you know what most of them study? The same texts. Aristotle. Plato. Euclid. Homer. The famous works, the established canon."</p>

<p>"Half a million scrolls, and most scholars read the same hundred. The rest is... potential. Waiting for a someday that may never come."</p>

<p>She leans forward. "I'm not saying it's worthless. I'm saying: when the fire comes, and you can only carry so much, what do you choose? The scroll that might matter someday? Or the knowledge that someone is actually using, teaching, living by?"</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What are you using? Teaching? Living by?\"", next: "A2-LIBRARY-HER-PRIORITIES" },
        { text: "\"How do you make that choice? What's your method?\"", next: "A2-LIBRARY-MODEL" },
        { text: "\"Let's talk about what you need. Your terms.\"", next: "A2-LIBRARY-TERMS" }
    ]
},

"A2-LIBRARY-SCROLLS-VALUE": {
    title: "The Value of Scrolls",
    act: 2,
    thread: "library",
    prose: `<p>"You're right." She says it simply. "Teaching drifts. Memory fails. Scrolls preserve what the human mind cannot."</p>

<p>She picks up one of the texts on her desk. "This is why I'm here. Fifteen years in a Greek institution, translating between languages. Because scrolls matter. Details matter. Precision matters."</p>

<p>"But scrolls also distort. Every copy introduces errors. Every translation makes choices. The scroll you're reading is not the thought that was written down—it's a series of approximations, filtered through scribes and translators and time."</p>

<p>She sets it down. "I don't think scrolls are worthless. I think they're tools. And like any tool, they work best when someone knows how to use them."</p>

<p>"A scroll on a shelf is potential. A scroll in the hands of someone who teaches from it is knowledge. Both matter. But when the fire comes, I know which one survives."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What scrolls are you trying to save? What's still at risk?\"", next: "A2-LIBRARY-HER-PRIORITIES" },
        { text: "\"Tell me about the translation problem. What gets lost.\"", next: "A2-LIBRARY-TRANSLATION" },
        { text: "\"What do you need from us? What are your terms?\"", next: "A2-LIBRARY-TERMS" }
    ]
},

"A2-LIBRARY-BOTH": {
    title: "Both",
    act: 2,
    thread: "library",
    prose: `<p>"Both." She nods slowly. "If you can."</p>

<p>"That's what I've been doing for fifteen years. Holding both. The Greek text that spreads the meaning wider. The Hebrew text that holds the meaning deeper. Every translation is a loss. Every translation is also a gain."</p>

<p>She looks at you with something like respect. "Most people want a simple answer. Save this, abandon that. But the truth is always both. The scroll and the teaching. The building and the community. The text and the context."</p>

<p>"The question isn't which one matters. The question is what you do when you can't carry everything."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What would you carry? What's your priority?\"", next: "A2-LIBRARY-HER-PRIORITIES" },
        { text: "\"Tell me about the context. What's at risk beyond the texts?\"", next: "A2-LIBRARY-CONTEXT" },
        { text: "\"What do you need? What are your terms?\"", next: "A2-LIBRARY-TERMS" }
    ]
},

"A2-LIBRARY-PROOF": {
    title: "The Proof",
    act: 2,
    thread: "library",
    prose: `<p>"Why does it matter." She's quiet for a moment. When she speaks, something has shifted—the professional distance easing.</p>

<p>"I could tell you it matters for scholarship. For history. For understanding how ideas moved between cultures. That would be true."</p>

<p>She looks at the scroll on her desk. "But the real reason is simpler. My people have been here for three hundred years. We built synagogues. We raised children. We argued philosophy and wrote poetry and translated texts that Greeks couldn't read otherwise."</p>

<p>"When Alexandria burns—and it will burn, someday—what survives? If Aristobulus is gone, if the letters between our scholars and Jerusalem are gone, if the marginalia disappear... then we were never here. Just a population. Not a community that thought and built."</p>

<p>She meets your eyes. "The proof matters because without it, we're erased. Not killed—erased. As if we never existed at all."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"I understand. What else needs saving? What else is at risk?\"", next: "A2-LIBRARY-HER-PRIORITIES" },
        { text: "\"What do you need from us? How can we help?\"", next: "A2-LIBRARY-TERMS" }
    ]
},

"A2-LIBRARY-APPLY": {
    title: "Could It Work",
    act: 2,
    thread: "library",
    prose: `<p>She considers the question seriously. "Could it work for Greek knowledge?"</p>

<p>"Parts of it. Euclid is already taught—mathematicians pass it student to student. Hippocrates. The core medical texts. Philosophy, to some degree. Anything that's actually used, actually taught, already survives the way my people's knowledge survives."</p>

<p>"But much of what's here..." She gestures at the walls. "It's not taught. It's stored. Histories no one reads. Poetry in dead languages. Commentaries on texts that were already obscure when they were written."</p>

<p>"For that to survive our way, someone would have to care about it enough to teach it. To carry it. To make it part of a living tradition." She shrugs. "The Library's model assumes you can preserve without caring. Store it and wait. Our model requires someone to love it enough to pass it on."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What do you love enough to pass on?\"", next: "A2-LIBRARY-HER-PRIORITIES" },
        { text: "\"What do you need from us? Your terms.\"", next: "A2-LIBRARY-TERMS" }
    ]
},

"A2-LIBRARY-TRANSLATION": {
    title: "The Translation Problem",
    act: 2,
    thread: "library",
    prose: `<p>Real warmth enters her voice. This is her expertise—the place where she's most fully herself.</p>

<p>"Translation." She pulls one of the scrolls closer. "Let me show you something."</p>

<p>"This word—ruach." She traces it with her finger. "In Hebrew, it means 'breath' and 'spirit' and 'wind.' The same word for all three. When God breathes life into Adam, when the spirit moves over the waters, when the wind blows from the east—same word."</p>

<p>"In Greek, you have three different words. Pneuma. Psyche. Anemos. The translator picks one, and the others disappear."</p>

<p>She looks up. "A Greek reading the text will never know that breath and spirit were once the same thing. That when my people say God's spirit moved, we also mean God's breath, God's wind—something physical, something you could feel on your face."</p>

<p>She sets down the scroll. "Every translation is a choice. Every choice is a loss. I spend my life trying to carry as much as possible across the gap. But something always falls."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Is the crossing worth it? Even with what's lost?\"", next: "A2-LIBRARY-CROSSING" },
        { text: "\"What are you trying to preserve? Your priorities?\"", next: "A2-LIBRARY-HER-PRIORITIES" },
        { text: "\"What do you need from us?\"", next: "A2-LIBRARY-TERMS" }
    ]
},

"A2-LIBRARY-CONTEXT": {
    title: "The Context",
    act: 2,
    thread: "library",
    prose: `<p>"The context." She nods. "That's what keeps me up at night."</p>

<p>"The Septuagint—our scriptures in Greek—is safe. Copies in three cities. Famous enough that others have copies too. The text survives."</p>

<p>"But the letters between the scholars here and the scholars in Jerusalem, before—"</p>

<p>She stops. The 'before' doesn't need finishing. You both know what happened to Jerusalem.</p>

<p>"The marginalia. The notes in the margins, where translators argued about word choices. The variant readings. The proof that we didn't just translate—we thought about it, debated it, cared about getting it right."</p>

<p>"Without the context, the text is... orphaned. You can read the words, but you can't hear the conversation that shaped them."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What would it take to save the context?\"", next: "A2-LIBRARY-TERMS" },
        { text: "\"What else is at risk?\"", next: "A2-LIBRARY-HER-PRIORITIES" }
    ]
},

"A2-LIBRARY-CROSSING": {
    title: "Is It Worth It",
    act: 2,
    thread: "library",
    prose: `<p>She's quiet for a long moment. When she speaks, the professional distance is gone.</p>

<p>"I ask myself that. Sometimes."</p>

<p>"Every time I translate, I lose something. The breath becomes spirit. The spirit becomes wind. The word that held all three becomes three words that hold one each."</p>

<p>"But then I think about what happens if we don't translate. The knowledge stays locked in Hebrew, and the Greeks never read it. It stays locked in Greek, and the Persians never learn it. It stays locked in one community, and when that community falls..."</p>

<p>She spreads her hands. "Translation is loss. But isolation is death. I choose loss."</p>

<p>She looks at you. "That's what I know about preservation. Sometimes you have to accept damage to achieve survival. The question is how much damage, and what survives."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What's your priority? What must survive?\"", next: "A2-LIBRARY-HER-PRIORITIES" },
        { text: "\"What do you need from us?\"", next: "A2-LIBRARY-TERMS" }
    ]
},

"A2-LIBRARY-HER-PRIORITIES": {
    title: "Her Priorities",
    act: 2,
    thread: "library",
    prose: `<p>"My priorities." She counts on her fingers.</p>

<p>"First: Aristobulus. One copy exists. Jewish philosophy in Greek—the proof that my people engaged with Greek thought, contributed to it. If he burns, that proof is gone."</p>

<p>"Second: the letters. Correspondence between Alexandrian scholars and Jerusalem, from before—" She pauses. "From when Jerusalem still had scholars to write to. The proof of a conversation that no longer exists."</p>

<p>"Third: the marginalia. Notes in the translation scrolls. Where my predecessors argued about word choices, preserved variant readings, recorded the debates that shaped the texts we use today."</p>

<p>She lowers her hand. "These aren't the famous texts. They're not what your Theron would prioritize. But they're what my people will lose forever if no one carries them out."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What do you need? What are your terms?\"", next: "A2-LIBRARY-TERMS" },
        { text: "\"Why hasn't this already been copied? Distributed?\"", next: "A2-LIBRARY-WHY-NOT" }
    ]
},

"A2-LIBRARY-WHY-NOT": {
    title: "Why Not Already",
    act: 2,
    thread: "library",
    prose: `<p>"Why hasn't it been copied?" She almost laughs. "Because no one cares."</p>

<p>"The Septuagint is famous. Greeks read it. Christians use it. It matters to people who aren't Jewish, so it gets copied, distributed, preserved."</p>

<p>"Aristobulus? He wrote in Greek, but he was Jewish. Too Jewish for the Greeks, too Greek for the Jews. He fell between categories. So no one copied him. No one thought he was worth the papyrus."</p>

<p>She shrugs. "The letters, the marginalia—these matter to scholars. To translators. To people who care about how texts are made, not just what they say. A small community. Not enough to generate copies."</p>

<p>"I've been trying to change that. Six months of slow work. But time ran out faster than I expected."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What do you need? What are your terms?\"", next: "A2-LIBRARY-TERMS" }
    ]
},

"A2-LIBRARY-TERMS": {
    title: "Her Terms",
    act: 2,
    thread: "library",
    prose: `<p>She sits back. The negotiation begins.</p>

<p>"Three things. Non-negotiable."</p>

<p>"First: my materials go with any shipment. Aristobulus, the letters, the marginalia. They don't get left behind because someone decides they're less important than Euclid."</p>

<p>"Second: my brother's people in Antioch handle receiving for what I send. Not your network—mine. I trust them. I don't know yours."</p>

<p>"Third: you tell Hypatia what I'm doing." She pauses. "She gave me a place here when others wouldn't. She deserves to know I've been building my own escape route. I won't lie to her."</p>

<p>She folds her hands. "Those are my terms. In exchange, you get my network. Routes you don't have. Contacts you don't know. A thousand years of practice at carrying what matters through catastrophe."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Done. All three. Your network complements ours.\"", next: "A2-LIBRARY-ACCEPT", effects: { threadsVisited: ["library"], threadsCompleted: ["library"], community: 1, dispersal: 1, harborAdvance: 1 } },
        { text: "\"I need to think about it. The College has its own protocols.\"", next: "A2-LIBRARY-DEFER", effects: { threadsVisited: ["library"] } },
        { text: "\"Why should I tell Hypatia? She doesn't need to know.\"", next: "A2-LIBRARY-CHALLENGE-HYPATIA" }
    ]
},

"A2-LIBRARY-CHALLENGE-HYPATIA": {
    title: "Why Hypatia",
    act: 2,
    thread: "library",
    prose: `<p>Her expression cools. "You're asking me to betray someone who trusted me?"</p>

<p>"Hypatia gave me a place in this institution when I had nowhere else to go. She's defended my work against scholars who thought a Jewish translator had no business with Greek texts. She believes in the Library the way my grandmother believed in the Temple—completely, without reservation."</p>

<p>She stands, moves to the window. "She's going to stay. I know her. When the fire comes, she'll stay. And if I've been building an escape route without telling her... if I've been preparing to abandon the ship while she goes down with it..."</p>

<p>She turns back. "I can live with leaving. I can't live with lying to her about it. That's my price. If you want my network, you tell her the truth."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Fine. I'll tell her. All three terms accepted.\"", next: "A2-LIBRARY-ACCEPT", effects: { threadsVisited: ["library"], threadsCompleted: ["library"], community: 1, dispersal: 1, harborAdvance: 1 } },
        { text: "\"I need time to think.\"", next: "A2-LIBRARY-DEFER", effects: { threadsVisited: ["library"] } }
    ]
},

"A2-LIBRARY-ACCEPT": {
    title: "Alliance Formed",
    act: 2,
    thread: "library",
    prose: `<p>She studies you for a long moment. Then she nods—once, precisely.</p>

<p>"Done." She stands, moves to a shelf, pulls down a scroll. "This is my network. Contacts in Antioch, Cyrene, Rome, Caesarea. Who to approach, what to say, where to find them. Memorize it or copy it—but don't let it fall into the wrong hands."</p>

<p>She hands it to you. "Moving what matters. Carrying what can't be replaced. My people know how to survive catastrophe."</p>

<p>She pauses at the door. "Tell Hypatia. And tell Theron—his network and mine, working together. We might save more than either could alone."</p>

<p>She almost smiles. "A temple of words that can travel. Built together, this time."</p>`,
    choices: [
        { text: "Return to the Library.", next: "A2-HUB" }
    ]
},

"A2-LIBRARY-DEFER": {
    title: "Deferred",
    act: 2,
    thread: "library",
    prose: `<p>She nods. Goes back to her texts.</p>

<p>"Think about it. I'll be here." She picks up her pen. "I've been preparing for six months. A few more hours won't change what I'm doing."</p>

<p>She looks up. "But don't wait too long. The harbor is changing. My brother's ships won't wait forever, and neither will Theron's."</p>

<p>She returns to her work. The conversation isn't over—but the decision is yours to make.</p>`,
    choices: [
        { text: "Return to the Library.", next: "A2-HUB" }
    ]
},

"A2-LIBRARY-RETURN": {
    title: "Return to Miriam",
    act: 2,
    thread: "library",
    prose: `<p>Miriam is where you left her—same texts, same room, same patient focus. She looks up when you enter.</p>

<p>"You came back." Not surprise—assessment. She sets down her pen. "Have you reconsidered?"</p>

<p>Her terms haven't changed. Her materials with any shipment. Her brother's people receiving. Hypatia told.</p>

<p>"I don't need you to believe what I believe," she says. "I need you to see that our work helps yours. My network reaches places yours doesn't. My people have been carrying knowledge through catastrophe for a thousand years." She pauses. "You can use that. Or you can walk away again."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Done. Your network complements ours.\"", next: "A2-LIBRARY-RETURN-ACCEPT", effects: { threadsCompleted: ["library"], community: 1, dispersal: 1, harborAdvance: 1 } },
        { text: "\"I can't. I'm sorry.\"", next: "A2-LIBRARY-FINAL", effects: { threadsCompleted: ["library"] } }
    ]
},

"A2-LIBRARY-RETURN-ACCEPT": {
    title: "Alliance Formed",
    act: 2,
    thread: "library",
    prose: `<p>She nods—once, precisely. "Good."</p>

<p>She stands, pulls a scroll from the shelf. "My network. Contacts, routes, receiving points. Memorize it or copy it."</p>

<p>She hands it to you. "You came back. That matters. Most people, when they hesitate, they're already gone."</p>

<p>Something almost like warmth enters her expression. "Tell Hypatia. Tell Theron. And when the fire comes—we carry what we can, together."</p>`,
    choices: [
        { text: "Return to the Library.", next: "A2-HUB" }
    ]
},

"A2-LIBRARY-FINAL": {
    title: "Final Refusal",
    act: 2,
    thread: "library",
    prose: `<p>She watches you for a moment. Then she nods—once, precisely—and picks up her pen.</p>

<p>"Then we do what we were already doing. Separately." She returns to her text. "I hope your way works. I hope mine does too. We'll find out."</p>

<p>She doesn't look up again. The conversation is over.</p>`,
    choices: [
        { text: "Leave.", next: "A2-HUB" }
    ]
}

};
