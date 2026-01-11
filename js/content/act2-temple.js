/**
 * Act 2: Temple Thread
 * Khaemwaset at the Serapeum
 */

export const ACT2_TEMPLE_CONTENT = {

"A2-TEMPLE": {
    title: "The Approach",
    act: 2,
    thread: "temple",
    prose: `<p>The Serapeum rises on its hill above the old Egyptian quarter—a hundred steps climbing from the street to the colonnade. You've seen it from a distance a thousand times. The lighthouse marks the harbor; the Serapeum marks the city's other heart.</p>

<p>The climb is longer than it looks. Pilgrims pass you going both directions—a woman with an offering basket, an old man leaning on his grandson. This is a living temple, not an archive. People come here to pray, to heal, to ask questions of the god.</p>

<p>The Daughter Library is housed in the stoa—the covered walkway surrounding the main temple. You can see scholars moving between the columns, but they're not the dominant presence here. The dominant presence is Serapis himself, somewhere in the sanctuary beyond.</p>

<p>A young priest intercepts you at the top of the steps. "You're expected," he says. "This way."</p>`,
    choices: [
        { text: "Follow him.", next: "A2-TEMPLE-ENCOUNTER" }
    ]
},

"A2-TEMPLE-ENCOUNTER": {
    title: "First Encounter",
    act: 2,
    thread: "temple",
    prose: `<p>Khaemwaset receives you in a small courtyard behind the main temple. He sits on a stone bench, still as the statues in the sanctuary. He doesn't rise when you enter.</p>

<p>"I wondered when someone would come." His voice is measured, unhurried. "You are from the Library. Or adjacent to it. You have the look—the particular anxiety of people who believe knowledge lives in buildings."</p>

<p>He gestures to a seat across from him. Waits until you take it.</p>

<p>"I am going to save us both some time. You want to know if the temple can help. The answer is yes. You want to know what it will cost. The answer is: more than you want to pay, but less than you fear." He pauses, letting the silence work. "Tell me what you want. I will tell you what it costs. We can both decide if the exchange is fair."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What can you offer?\"", next: "A2-TEMPLE-OFFER" },
        { text: "\"Why would you help us?\"", next: "A2-TEMPLE-MOTIVES" },
        { text: "\"What's your price?\"", next: "A2-TEMPLE-PRICE" }
    ]
},

"A2-TEMPLE-OFFER": {
    title: "His Offer",
    act: 2,
    thread: "temple",
    prose: `<p>"Twenty thousand scrolls in our vaults. The protection of the god—which is not nothing. Mobs that would burn a library hesitate at a temple." He speaks without emphasis, stating facts. "Brothers in Memphis, Thebes, even Babylon who will shelter what we send. A network older than your Invisible College, with deeper roots."</p>

<p>He reaches for a cup of water, drinks slowly, sets it down precisely.</p>

<p>"The Daughter Library has been here for two centuries. It has survived because it serves the temple, and the temple serves the city. Need outlasts prestige." He looks at you directly. "The Great Library collects knowledge. We use it. That is why we will still be here when your building is ash."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"And your price for this protection?\"", next: "A2-TEMPLE-PRICE" },
        { text: "\"You sound very certain the Library will fall.\"", next: "A2-TEMPLE-CERTAINTY" },
        { text: "\"Need outlasts prestige. Explain that.\"", next: "A2-TEMPLE-THEORY" }
    ]
},

"A2-TEMPLE-MOTIVES": {
    title: "His Motives",
    act: 2,
    thread: "temple",
    prose: `<p>Something shifts in his face. Not anger—you are not important enough to anger him. Something closer to weariness.</p>

<p>"Why would I help you." He repeats it, tasting the words. "Because I have spent fifty years building something that survives. Because I watched the oldest words in the world turn to dust when I was seven years old, and I learned what preservation actually means."</p>

<p>He leans forward slightly—a small movement that feels significant from someone so still.</p>

<p>"I will tell you something that will make you uncomfortable. The temple will benefit if the Library falls. We will become the center of knowledge in Alexandria. Our prestige will rise. Our endowments will grow." He pauses. "You have noticed this. Good. Now ask yourself: does that make my offer less valuable? Does the knowledge care who preserves it?"</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"So you admit you're an opportunist.\"", next: "A2-TEMPLE-CHALLENGE" },
        { text: "\"What would preservation cost us?\"", next: "A2-TEMPLE-PRICE" },
        { text: "\"Tell me about watching those words turn to dust.\"", next: "A2-TEMPLE-VULNERABILITY" }
    ]
},

"A2-TEMPLE-THEORY": {
    title: "His Theory",
    act: 2,
    thread: "temple",
    prose: `<p>"A farmer needs to know when to plant. When to harvest. How to treat a sick ox." Khaemwaset's voice takes on a teaching rhythm—patient, precise. "He comes to the temple. We tell him. He comes back next year. His son comes. His grandson. The knowledge survives because it is needed."</p>

<p>He gestures toward the Library's distant outline. "Your scholars debate whether Aristotle's <em>Categories</em> should be read before his <em>Physics</em>. Fascinating. Essential, perhaps, to understanding the nature of being." A pause. "How many farmers care? How many soldiers? How many mothers trying to keep their children alive through fever season?"</p>

<p>"Texts that people use survive. Texts that people admire gather dust until the dust becomes them. The temple provides services—healing, prophecy, agricultural guidance, funeral rites. That is why we persist. That is why we will still be here in three hundred years, when the Great Library is a memory."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"So you'd reduce all knowledge to what's useful?\"", next: "A2-TEMPLE-CHALLENGE-UTILITY" },
        { text: "\"What would you want from us?\"", next: "A2-TEMPLE-PRICE" },
        { text: "\"You've thought about this a long time.\"", next: "A2-TEMPLE-VULNERABILITY" }
    ]
},

"A2-TEMPLE-CERTAINTY": {
    title: "His Certainty",
    act: 2,
    thread: "temple",
    prose: `<p>"I am certain of nothing." He says it simply. "But I have watched four changes of Ptolemaic leadership. I have seen what survives and what burns. Buildings burn. Institutions attached to rulers rise and fall with those rulers. Institutions attached to gods..."</p>

<p>He looks toward the sanctuary, where the great statue of Serapis sits in shadow.</p>

<p>"Gods change slowly. Rulers change quickly. The temple has served Persians, Pharaohs, Ptolemies. It will serve Rome if Rome comes. This is not corruption. This is how you build something that outlasts a single lifetime."</p>

<p>He turns back to you. "Your Library depends on royal patronage. What happens when the patron changes? What happens when the new ruler decides Greek knowledge is less important than Egyptian loyalty, or Roman order?"</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"You'd serve anyone. That's not preservation—it's survival.\"", next: "A2-TEMPLE-CHALLENGE" },
        { text: "\"What would you need from us?\"", next: "A2-TEMPLE-PRICE" },
        { text: "\"How did you learn to think this way?\"", next: "A2-TEMPLE-VULNERABILITY" }
    ]
},

"A2-TEMPLE-CHALLENGE": {
    title: "The Challenge",
    act: 2,
    thread: "temple",
    prose: `<p>"Yes."</p>

<p>The single word hangs in the air. He doesn't elaborate, doesn't defend. Just waits.</p>

<p>"Yes, I am an opportunist. Yes, the temple will benefit. Yes, I would serve Rome as I have served Ptolemies, as my predecessors served Persians." He folds his hands. "Do not pretend that purity has ever preserved anything. Your Library has survived by pleasing rulers, by making itself useful to power, by compromising a thousand times in ways you do not discuss in your reading rooms."</p>

<p>He leans back. "I am honest about what I am. I am offering you something real—vaults, networks, the protection of an institution that has outlasted empires. You can refuse because my motives are impure. The knowledge will not care. It will simply cease to exist."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What exactly do you want?\"", next: "A2-TEMPLE-PRICE" },
        { text: "\"Why do you care about preservation at all?\"", next: "A2-TEMPLE-VULNERABILITY" },
        { text: "\"I've heard enough. What are your terms?\"", next: "A2-TEMPLE-TERMS" }
    ]
},

"A2-TEMPLE-CHALLENGE-UTILITY": {
    title: "The Challenge",
    act: 2,
    thread: "temple",
    prose: `<p>"Reduce?" He considers the word. "No. But I would be honest about what survives and why."</p>

<p>"Your Library has Sappho's poems. Beautiful. Essential to understanding the human heart. How many copies exist? How many people read them each year? How many would notice if they vanished?" He pauses. "Now consider the medical texts. The agricultural calendars. The astronomical tables that tell sailors when to travel. How many copies? How many readers? How many would die if they vanished?"</p>

<p>"I am not saying Sappho does not matter. I am saying that Sappho's survival depends on someone choosing to copy her, again and again, for reasons that have nothing to do with her beauty. Need creates copies. Admiration creates single precious objects that burn."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"So what would you preserve?\"", next: "A2-TEMPLE-PRICE" },
        { text: "\"You've watched things burn before.\"", next: "A2-TEMPLE-VULNERABILITY" },
        { text: "\"Give me your terms.\"", next: "A2-TEMPLE-TERMS" }
    ]
},

"A2-TEMPLE-VULNERABILITY": {
    title: "The Memory",
    act: 2,
    thread: "temple",
    prose: `<p>For the first time, Khaemwaset looks away—toward the window, toward memory.</p>

<p>"I was seven years old. My father was a priest in a small temple, upriver. There was a chamber that had been sealed for three hundred years. The priests decided to open it—there were records inside, they believed, from before Alexander."</p>

<p>His voice softens, but remains precise.</p>

<p>"There were scrolls. Papyrus so old it crumbled when the air touched it. My father held one up to the light, trying to read it, and it fell apart in his hands. Just... dissolved. Three hundred years of protection, and the moment we tried to use what we had protected, it died."</p>

<p>He turns back to you. "That is when I learned what preservation means. Not keeping things. Making them unnecessary. Copying, teaching, spreading—until the original can die and nothing is lost. The words live because they are in a hundred places, not because they are locked in one."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"That's why you want our scholars. To spread what they know.\"", next: "A2-TEMPLE-SCHOLARS-INSIGHT" },
        { text: "\"What would you need from us?\"", next: "A2-TEMPLE-PRICE" }
    ]
},

"A2-TEMPLE-SCHOLARS-INSIGHT": {
    title: "The Insight",
    act: 2,
    thread: "temple",
    prose: `<p>Khaemwaset's eyes sharpen. For a moment, something like respect flickers across his face.</p>

<p>"Yes." He says it simply, without elaboration. Then: "You understand faster than most."</p>

<p>He leans forward slightly. "Demetrios knows things about Babylonian astronomy that exist nowhere else—not in scrolls, but in his head. The connections he makes, the patterns he sees. If he dies, that dies with him. But if he teaches here for five years..." He spreads his hands. "Twenty students. Twenty copies of what he knows, walking out into the world."</p>

<p>"The scrolls are cargo. The scholars are seeds." He settles back. "That is why I want them. Not to own them. To plant them."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What else would you need?\"", next: "A2-TEMPLE-PRICE" },
        { text: "\"Give me your full terms.\"", next: "A2-TEMPLE-TERMS" }
    ]
},

"A2-TEMPLE-PRICE": {
    title: "His Price",
    act: 2,
    thread: "temple",
    prose: `<p>"Three things." He holds up fingers as he counts. "First: the Egyptian materials. The temple records, the hieratic texts, the sacred calendars that your Library has... collected... over the centuries. They were ours. I want them returned."</p>

<p>"Second: scholars. I want Demetrios, who reads the old Babylonian. I want young Ptolemaios, who has done more work on the sacred calendars than anyone in the city. I want them to work from the Serapeum for five years." He sees your expression. "I am not asking to own them. I am asking that they teach here, copy here, make what they know available here."</p>

<p>"Third: acknowledgment. When this is over, however it ends, the world knows that the temple sheltered Alexandria's knowledge. That the god preserved what would otherwise have been lost."</p>

<p>He folds his hands. "That is my price. You may find it too high. I will not haggle."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Why do you want acknowledgment?\"", next: "A2-TEMPLE-ACKNOWLEDGMENT" },
        { text: "\"I need to understand why this matters to you.\"", next: "A2-TEMPLE-VULNERABILITY" },
        { text: "\"Let me think about your terms.\"", next: "A2-TEMPLE-TERMS" }
    ]
},

"A2-TEMPLE-ACKNOWLEDGMENT": {
    title: "Acknowledgment",
    act: 2,
    thread: "temple",
    prose: `<p>"Because institutions survive on reputation." He says it simply. "Because the next time there is a crisis, people will remember that the temple helped. Because acknowledgment creates obligation, and obligation creates relationship, and relationship is what keeps things alive across centuries."</p>

<p>He pauses. "And because it is true. If I shelter your knowledge, I want the world to know I sheltered it. I am not ashamed of wanting credit for what I do. Your Library has spent three centuries claiming credit for preserving civilization. I would like some of that credit—earned, for something I actually did."</p>

<p>His eyes are steady. "Is that so difficult to understand?"</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"No. It's honest.\"", next: "A2-TEMPLE-TERMS" },
        { text: "\"I need to think.\"", next: "A2-TEMPLE-TERMS" }
    ]
},

"A2-TEMPLE-TERMS": {
    title: "The Terms",
    act: 2,
    thread: "temple",
    prose: `<p>Khaemwaset waits. The courtyard is quiet—distant sounds of temple activity, but here, stillness.</p>

<p>"Twenty thousand scrolls in our vaults. The network of temples across Egypt and beyond. The protection of the god." He states it plainly. "In exchange: the Egyptian materials returned, two scholars for five years, and acknowledgment."</p>

<p>"The offer will not improve with time. But it will not withdraw either. The temple has patience."</p>

<p>He rises—slowly, deliberately. The conversation is reaching its end.</p>

<p>"Tell me what you want. I will tell you if we have an agreement."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Your terms are harsh but honest. Done.\"", next: "A2-TEMPLE-ACCEPT", effects: { threadsVisited: ["temple"], threadsCompleted: ["temple"], temple: 1, harborAdvance: 1 } },
        { text: "\"I need to take this back to the others.\"", next: "A2-TEMPLE-DEFER", effects: { threadsVisited: ["temple"] } },
        { text: "\"I can't agree to this. The price is too high.\"", next: "A2-TEMPLE-REFUSE", effects: { threadsVisited: ["temple"], threadsCompleted: ["temple"] } }
    ]
},

"A2-TEMPLE-ACCEPT": {
    title: "Agreement",
    act: 2,
    thread: "temple",
    prose: `<p>Khaemwaset inclines his head—a small gesture that carries weight.</p>

<p>"Then we have an agreement. The vaults will be ready. The network will be informed." He moves toward the inner temple, then pauses. "I will pray for your Library. I do not think prayer will save it. But I will pray nonetheless."</p>

<p>He looks back at you. "You have made a practical choice. Do not be ashamed of it. The knowledge does not care about your feelings. It only cares whether it survives."</p>

<p>The young priest appears to escort you out. Behind you, Khaemwaset disappears into the shadows of the sanctuary.</p>

<p>The deal is struck. The temple will help—at its price.</p>`,
    choices: [
        { text: "Return to the city.", next: "A2-HUB" }
    ]
},

"A2-TEMPLE-DEFER": {
    title: "Deferred",
    act: 2,
    thread: "temple",
    prose: `<p>"Of course." Khaemwaset settles back onto the bench. "Take it to your colleagues. Debate it in your hidden chambers. I understand the need for consultation."</p>

<p>He gestures toward the city below. "But understand: the harbor is changing. I can see it from here. Ships leaving early. Soldiers arriving. Whatever is coming, it will not wait for your deliberations."</p>

<p>He folds his hands. "The offer stands. The temple has patience. But the crisis does not."</p>

<p>The young priest appears to escort you out. You've learned what you came to learn. The decision remains unmade.</p>`,
    choices: [
        { text: "Return to the city.", next: "A2-HUB" }
    ]
},

"A2-TEMPLE-REFUSE": {
    title: "Refused",
    act: 2,
    thread: "temple",
    prose: `<p>Khaemwaset's expression doesn't change. He simply nods.</p>

<p>"The price is what it is. I do not haggle." He rises, moves toward the inner temple. "I hope your other options prove more palatable. I suspect they will not, but I have been wrong before."</p>

<p>He pauses at the threshold. "The vaults will be here when the fire comes. If your way fails, some of what you carry may still find its way to us. We have been receiving refugees for a very long time."</p>

<p>He disappears into the shadows. The conversation is over.</p>`,
    choices: [
        { text: "Return to the city.", next: "A2-HUB" }
    ]
},

"A2-TEMPLE-RETURN": {
    title: "Return to the Temple",
    act: 2,
    thread: "temple",
    prose: `<p>The hundred steps feel shorter this time. The young priest recognizes you, leads you directly to the courtyard.</p>

<p>Khaemwaset is where you left him—or perhaps he never moved. The stillness, the patient eyes that miss nothing.</p>

<p>"You've returned." He gestures to the seat across from him. "I wondered if you would."</p>

<p>He doesn't repeat his offer. He doesn't need to.</p>

<p>"The harbor is changing. I can see it from the temple hill. Ships leaving. Soldiers arriving." A pause. "My offer will not improve with time. But it will not withdraw either. The temple has patience."</p>

<p>His terms remain: the Egyptian materials, the scholars, the acknowledgment. Twenty thousand scrolls in vaults that have held sacred things for centuries.</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Done. The temple's patience has been rewarded.\"", next: "A2-TEMPLE-RETURN-ACCEPT", effects: { threadsCompleted: ["temple"], temple: 1, harborAdvance: 1 } },
        { text: "\"I can't. The price is too high.\"", next: "A2-TEMPLE-FINAL", effects: { threadsCompleted: ["temple"] } }
    ]
},

"A2-TEMPLE-RETURN-ACCEPT": {
    title: "Agreement",
    act: 2,
    thread: "temple",
    prose: `<p>"Patience is what we have." He inclines his head. "The vaults will be ready. The network has already been informed—I anticipated the possibility."</p>

<p>He rises slowly. "You took time to think. That is not weakness. Some decisions should not be made quickly." He moves toward the sanctuary. "The god will receive what you send. And when this is over, the world will know who sheltered it."</p>

<p>The young priest escorts you out. The city spreads below, tense and waiting.</p>

<p>The deal is struck. The temple will help—at its price.</p>`,
    choices: [
        { text: "Return to the city.", next: "A2-HUB" }
    ]
},

"A2-TEMPLE-FINAL": {
    title: "Final Refusal",
    act: 2,
    thread: "temple",
    prose: `<p>Khaemwaset inclines his head—not agreement, but acknowledgment.</p>

<p>"The price is what it is. I do not haggle." He rises and moves toward the inner temple. "The vaults will be here when the fire comes. If your way fails, some of what you carry may still find its way to us. We have been receiving refugees for a very long time."</p>

<p>He pauses at the doorway. "I hope your way works. I do not think it will. But I have been wrong before."</p>

<p>He disappears into the shadows. The conversation is over.</p>`,
    choices: [
        { text: "Return to the city.", next: "A2-HUB" }
    ]
}

};
