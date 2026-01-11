/**
 * Act 2: City Thread
 * Demetria the mason
 */

export const ACT2_CITY_CONTENT = {

"A2-CITY": {
    title: "Into the City",
    act: 2,
    thread: "city",
    prose: `<p>You leave the Library district and descend into working Alexandria. The streets narrow. The air changes—smoke from cook-fires, the smell of tanning leather, the sounds of hammers and saws and voices haggling over prices.</p>

<p>This is the city that built the Library. The masons, the carpenters, the laborers who hauled stone and mixed mortar. Three hundred years of work, and most of them have never been inside.</p>

<p>Theron mentioned a mason—Demetria. "She knows the building's infrastructure. Service routes, weak points, things the scholars never think about. Find her at the guild hall or one of the construction sites in the western quarter."</p>

<p>You ask around. A carpenter points you toward a site near the old wall. "She's been working foundations there. Look for the woman who doesn't stop."</p>`,
    choices: [
        { text: "Find the construction site.", next: "A2-CITY-ENCOUNTER" }
    ]
},

"A2-CITY-ENCOUNTER": {
    title: "First Encounter",
    act: 2,
    thread: "city",
    prose: `<p>You find her in a trench—alone, working mortar into foundation stones. The rhythm is steady: stone, mortar, press. Stone, mortar, press. She doesn't look up when your shadow falls across her work.</p>

<p>"You're from the Library."</p>

<p>It's not a question. She keeps working.</p>

<p>"The repair's done. Signed off yesterday. If there's a problem with the drainage, talk to Kosmas—he handled that section."</p>

<p>Stone, mortar, press.</p>

<p>"That's not why I'm here," you say.</p>

<p>She pauses. Looks up at you for the first time. Forty-one years old, sun-darkened skin, hands that have never been soft. She studies you the way she might study a crack in a foundation—assessing, not judging.</p>

<p>"Then why are you here?"</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"The Library may be in danger. We need help.\"", next: "A2-CITY-DANGER" },
        { text: "\"I want to understand how the city sees the Library.\"", next: "A2-CITY-UNDERSTAND" },
        { text: "\"You know things about the building that we don't.\"", next: "A2-CITY-KNOWLEDGE" }
    ]
},

"A2-CITY-DANGER": {
    title: "The Danger",
    act: 2,
    thread: "city",
    prose: `<p>She looks at you for a long moment. Then she goes back to work.</p>

<p>"The Library may be in danger." She repeats it, flat. Stone, mortar, press. "And you want help. From us."</p>

<p>"We won't." She doesn't look up. "My street won't. The docks won't. The weavers, the potters, the men who unload grain ships—they won't."</p>

<p>Stone, mortar, press.</p>

<p>"You want to know why, or do you already know?"</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Tell me why.\"", next: "A2-CITY-FATHER" },
        { text: "\"The Library benefits everyone. Knowledge is—\"", next: "A2-CITY-CHALLENGE-KNOWLEDGE" },
        { text: "\"What would it take to change that?\"", next: "A2-CITY-WHAT-WOULD-IT-TAKE" }
    ]
},

"A2-CITY-UNDERSTAND": {
    title: "Understanding",
    act: 2,
    thread: "city",
    prose: `<p>She stops working. Sets down her trowel. Looks at you with something that might be curiosity, or might be suspicion.</p>

<p>"How the city sees the Library." She says it slowly, tasting the words. "You want to know that."</p>

<p>She climbs out of the trench, sits on the edge, wipes her hands on her tunic. For the first time, you have her full attention.</p>

<p>"My father built part of that Library. Western wall, near the gardens. Took him two years. He used to say it was the best work he ever did—the way the stones fit, the way the light came through." She pauses. "He was proud."</p>

<p>"You want to know how the city sees it? We built it. And then we were done."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What happened to your father?\"", next: "A2-CITY-FATHER" },
        { text: "\"But the knowledge inside benefits everyone.\"", next: "A2-CITY-CHALLENGE-KNOWLEDGE" },
        { text: "\"That sounds like there's more to the story.\"", next: "A2-CITY-FATHER" }
    ]
},

"A2-CITY-KNOWLEDGE": {
    title: "Her Knowledge",
    act: 2,
    thread: "city",
    prose: `<p>She stops. Looks at you differently now—still assessing, but with a flicker of interest.</p>

<p>"Things you don't know." She climbs out of the trench, sits on the edge. "Like what?"</p>

<p>"Like how fire spreads through this city. Like which routes the soldiers block and which they forget. Like where the service entrances are—the ones I helped build, the ones your scholars walk past without seeing."</p>

<p>She studies you. "You actually want to know this? Or is this the part where you pretend to listen, then go back to your scrolls?"</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"I actually want to know. Tell me about the fire routes.\"", next: "A2-CITY-FIRE" },
        { text: "\"Why would you share this with me?\"", next: "A2-CITY-WHY-SHARE" },
        { text: "\"First tell me why you'd help at all.\"", next: "A2-CITY-FATHER" }
    ]
},

"A2-CITY-FATHER": {
    title: "Her Father",
    act: 2,
    thread: "city",
    prose: `<p>"My father." She says it without emotion—stating a fact. "He built the western wall. Best work he ever did. Three years later, he fell from a scaffold on a different job. Different building, nothing to do with the Library. Broke his back."</p>

<p>Stone, mortar, press. She's picked up the trowel again, but the rhythm is slower now.</p>

<p>"You know who paid for his care? The guild. You know who brought food? The neighbors. You know who came from that beautiful building he spent two years constructing?"</p>

<p>She looks up at you.</p>

<p>"No one. Not once. Not a single person from the Library ever came to see the man who built their wall."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"That's... I'm sorry. That's not right.\"", next: "A2-CITY-SORRY" },
        { text: "\"But the Library serves all of Alexandria—\"", next: "A2-CITY-CHALLENGE-KNOWLEDGE" },
        { text: "\"What would make it right now?\"", next: "A2-CITY-WHAT-WOULD-IT-TAKE" }
    ]
},

"A2-CITY-SORRY": {
    title: "Sorry",
    act: 2,
    thread: "city",
    prose: `<p>She watches you for a moment. Something shifts in her expression—not softening, exactly, but a kind of acknowledgment.</p>

<p>"No. It's not right." She goes back to work, but she keeps talking. "My mother died the next year. Fever. The Library has physicians—I've heard about them. Trained scholars who study the old texts, who know things the street healers don't."</p>

<p>Stone, mortar, press.</p>

<p>"None of them came to our street. Why would they? We're not scholars. We're not patrons. We're the people who built their walls and then went home."</p>

<p>She's not angry. That's what makes it worse. She's just... stating what happened.</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What about your daughter? Theron mentioned—\"", next: "A2-CITY-DAUGHTER" },
        { text: "\"What would it take for the Library to matter to your street?\"", next: "A2-CITY-WHAT-WOULD-IT-TAKE" },
        { text: "\"You know things about this city that could help us.\"", next: "A2-CITY-FIRE" }
    ]
},

"A2-CITY-CHALLENGE-KNOWLEDGE": {
    title: "The Challenge",
    act: 2,
    thread: "city",
    prose: `<p>She stops working. Sets down her trowel. When she speaks, her voice is flat.</p>

<p>"The Library benefits everyone. Knowledge is—" She waits. "Go on. Finish the sentence. I want to hear you say it."</p>

<p>You hesitate.</p>

<p>"My daughter was born with a twisted foot. The physicians at the Library—the ones who study the ancient texts—they looked at her and said there was nothing to be done. 'A deformity of the bones,' they said. 'She'll never walk properly.'"</p>

<p>She picks up her trowel again. Stone, mortar, press.</p>

<p>"The midwife came the next week. Old woman from the delta. No scrolls. No training at your Library. She looked at the foot, felt the bones, and started wrapping it. Every day for a year. Tight wraps, changed every morning. She learned it from her mother, who learned it from hers."</p>

<p>She looks up at you.</p>

<p>"My daughter runs now. Not well, but she runs. The scroll didn't come to my house. The midwife did."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"I... don't have an answer for that.\"", next: "A2-CITY-NO-ANSWER" },
        { text: "\"What would change your mind about helping?\"", next: "A2-CITY-WHAT-WOULD-IT-TAKE" },
        { text: "\"You know things that could help save what's inside.\"", next: "A2-CITY-FIRE" }
    ]
},

"A2-CITY-DAUGHTER": {
    title: "Her Daughter",
    act: 2,
    thread: "city",
    prose: `<p>She pauses. For the first time, something moves behind her eyes.</p>

<p>"My daughter. Born with a twisted foot. The physicians at the Library—the ones who study the ancient texts—they said there was nothing to be done."</p>

<p>She sets down her trowel.</p>

<p>"The midwife came the next week. Old woman from the delta. No scrolls. Never been inside your Library. She looked at the foot, felt the bones, and started wrapping it. Every day for a year. Tight wraps, changed every morning."</p>

<p>She looks at you directly. "My daughter runs now. Not well, but she runs. She's twelve. She wants to be a mason like me."</p>

<p>A pause. "The scroll didn't come to my house. The midwife did. You understand what I'm telling you?"</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"The Library failed you. I understand.\"", next: "A2-CITY-NO-ANSWER" },
        { text: "\"What would it take for us to do better?\"", next: "A2-CITY-WHAT-WOULD-IT-TAKE" },
        { text: "\"You know things about this city we need. Fire routes, infrastructure.\"", next: "A2-CITY-FIRE" }
    ]
},

"A2-CITY-NO-ANSWER": {
    title: "No Answer",
    act: 2,
    thread: "city",
    prose: `<p>She watches you. The silence stretches.</p>

<p>"You don't have an answer." She says it without triumph. "That's... more honest than most."</p>

<p>She picks up her trowel, but she doesn't go back to work. Instead, she sits on the edge of the trench, looking at you.</p>

<p>"Three hundred years. Your Library has been there for three hundred years. My father built part of it. My grandfather hauled the stone. And in all that time, no one from inside those walls has ever asked what we think. What we need. What we know."</p>

<p>She shrugs. "You're asking now. I don't know if it matters. But you're asking."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What would it take to matter?\"", next: "A2-CITY-WHAT-WOULD-IT-TAKE" },
        { text: "\"Tell me what you know. About the city, about fire, about infrastructure.\"", next: "A2-CITY-FIRE" }
    ]
},

"A2-CITY-WHY-SHARE": {
    title: "Why Share",
    act: 2,
    thread: "city",
    prose: `<p>She considers the question. Really considers it.</p>

<p>"I don't know yet." She climbs out of the trench, sits on the edge. "Maybe because you're the first one who asked. Maybe because my father would have wanted me to—he was proud of that wall, even if no one ever thanked him for it."</p>

<p>She looks toward the Library's distant outline.</p>

<p>"Or maybe because if it burns, my daughter will ask me what I did. And I'd like to have an answer that isn't 'nothing.'"</p>

<p>She turns back to you. "But I'm not doing it for free. Not for the Library. Not for the scrolls. For my people."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What do you want for your people?\"", next: "A2-CITY-WHAT-WOULD-IT-TAKE" },
        { text: "\"Tell me what you know first. Then we'll talk about terms.\"", next: "A2-CITY-FIRE" }
    ]
},

"A2-CITY-WHAT-WOULD-IT-TAKE": {
    title: "What Would It Take",
    act: 2,
    thread: "city",
    prose: `<p>She's quiet for a moment. When she speaks, her voice is different—harder, but also clearer. This is the negotiation.</p>

<p>"Passage for fifty. Guild members and their families. If whatever's coming is bad enough that you're asking us for help, it's bad enough that my people need a way out."</p>

<p>She holds up a hand before you can respond.</p>

<p>"I know what you're thinking. Fifty is a lot. Ships are limited. Scrolls are more important." She shrugs. "Maybe they are. But those are my terms. You want what I know? You want me to talk to my quarter, spread the word that the Library finally remembered who built it? Fifty people. That's the price."</p>

<p>"If your scrolls are worth saving, so are my people."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Tell me what you know first.\"", next: "A2-CITY-FIRE" },
        { text: "\"Fifty people. What else?\"", next: "A2-CITY-TERMS" },
        { text: "\"That's a lot. I don't know if we can—\"", next: "A2-CITY-HESITATION" }
    ]
},

"A2-CITY-FIRE": {
    title: "What She Knows",
    act: 2,
    thread: "city",
    prose: `<p>She nods slowly. Stands, wipes her hands, and looks out over the city.</p>

<p>"Fire spreads east in summer. The wind off the harbor. If something starts near the docks, it'll move toward the Jewish quarter first, then bend south toward the Egyptian district. The streets there are narrow—buildings touch at the second story. A fire can jump block to block without touching the ground."</p>

<p>She points. "The Library sits in the royal quarter. Wide streets, stone buildings. Harder to burn. But the approaches—" She traces lines in the air. "Three main routes in. Soldiers will block them first. But there are service entrances. Delivery routes for food, for supplies. I helped build two of them."</p>

<p>She looks at you. "Your scholars walk past them every day without seeing. But I could get fifty people through without anyone noticing."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Fifty people out—or fifty people in?\"", next: "A2-CITY-IN-OR-OUT" },
        { text: "\"What else do you know about how mobs move?\"", next: "A2-CITY-MOBS" },
        { text: "\"What would it take for your quarter to help defend the Library?\"", next: "A2-CITY-TERMS" }
    ]
},

"A2-CITY-IN-OR-OUT": {
    title: "In or Out",
    act: 2,
    thread: "city",
    prose: `<p>She almost smiles. Almost.</p>

<p>"Both. That's the thing about knowing how a building works. You know how to get out of it. But you also know how to get into it. How to defend it. Where the weak points are."</p>

<p>She sits back down on the edge of the trench. "Forty-three guild members in Alexandria right now. Masons, carpenters, laborers. Two hundred dependents—families, mostly. We know every building in this city because we built them."</p>

<p>She looks at you. "You want defenders? We're not soldiers. But we know how walls work. We know where they're strong and where they're weak. We know how to build barricades that hold and where to put them."</p>

<p>"The question is why we would."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Passage for fifty. That's why.\"", next: "A2-CITY-TERMS" },
        { text: "\"What would it take?\"", next: "A2-CITY-TERMS" }
    ]
},

"A2-CITY-MOBS": {
    title: "How Mobs Move",
    act: 2,
    thread: "city",
    prose: `<p>"Mobs." She says the word like she's tasted it before. "I was twelve during the riots under Ptolemy Auletes. My mother kept us inside, but I watched from the roof."</p>

<p>She traces patterns in the dust.</p>

<p>"They follow the wide streets first. Easier to move, easier to see each other. They avoid the narrow quarters—too easy to get trapped, too hard to run. They go where they feel powerful."</p>

<p>She looks up. "The royal quarter has wide streets. That's where the Library is. If a mob forms, that's where it'll go—unless something turns it. Something it fears more than it wants."</p>

<p>"Soldiers turn mobs. But so do neighbors. People who know them. Teachers. The rioters during the succession crisis—they stopped at the Library because they saw their own tutors in the doorway." She shrugs. "No one from my quarter was in that mob. But if they had been... would they have seen anyone they knew?"</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"What would it take for your people to stand in that doorway?\"", next: "A2-CITY-TERMS" },
        { text: "\"You're saying the Library needs to matter to the city first.\"", next: "A2-CITY-MATTER" }
    ]
},

"A2-CITY-MATTER": {
    title: "What Would Matter",
    act: 2,
    thread: "city",
    prose: `<p>"I'm saying three hundred years is a long time to be invisible." She picks up her trowel again. "I'm saying my father built that wall and no one ever knew his name. I'm saying my daughter almost grew up crippled because the scroll didn't come to our house."</p>

<p>Stone, mortar, press.</p>

<p>"You want us to care about the Library? Give us a reason. Not words. Not promises about knowledge benefiting everyone someday. Something real. Something now."</p>

<p>She looks up.</p>

<p>"Passage for fifty. That's my price. You get my people out, I'll talk to the quarter. I'll spread the word that when it mattered, the Library remembered who built it. First time in three hundred years."</p>

<p>She waits. "That's my offer. Take it or don't."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Fifty people. Done.\"", next: "A2-CITY-ACCEPT", effects: { threadsVisited: ["city"], threadsCompleted: ["city"], city: 1, defense: 1, harborAdvance: 1 } },
        { text: "\"I need to think about it.\"", next: "A2-CITY-DEFER", effects: { threadsVisited: ["city"] } },
        { text: "\"The scrolls have to come first. I'm sorry.\"", next: "A2-CITY-DISMISSED", effects: { threadsVisited: ["city"], threadsCompleted: ["city"], cityDismissed: true } }
    ]
},

"A2-CITY-HESITATION": {
    title: "Hesitation",
    act: 2,
    thread: "city",
    prose: `<p>She watches you hesitate. Her expression doesn't change.</p>

<p>"That's a lot. You don't know if you can." She picks up her trowel again. "I've heard that before. Different words, same meaning. The scrolls come first. The scholars come first. The building comes first. The people who built it..." She shrugs. "We come last. Or not at all."</p>

<p>Stone, mortar, press.</p>

<p>"I'm not angry. This is how it's been for three hundred years. I don't know why I thought today would be different."</p>

<p>She keeps working. The conversation isn't over—not quite—but something has shifted. You're running out of chances to shift it back.</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Wait. Fifty people. Done.\"", next: "A2-CITY-ACCEPT", effects: { threadsVisited: ["city"], threadsCompleted: ["city"], city: 1, defense: 1, harborAdvance: 1 } },
        { text: "\"I need to think about it. I'll come back.\"", next: "A2-CITY-DEFER", effects: { threadsVisited: ["city"] } },
        { text: "\"I'm sorry. The scrolls have to come first.\"", next: "A2-CITY-DISMISSED", effects: { threadsVisited: ["city"], threadsCompleted: ["city"], cityDismissed: true } }
    ]
},

"A2-CITY-TERMS": {
    title: "The Terms",
    act: 2,
    thread: "city",
    prose: `<p>She sets down her trowel. This is the negotiation now—real terms, real costs.</p>

<p>"Passage for fifty. Guild members and families. That's first. Non-negotiable."</p>

<p>She holds up fingers as she counts. "Second: I talk to my quarter. Spread the word that the Library is asking for help—and offering something in return. First time in three hundred years. That means something. Might mean people show up when you need them."</p>

<p>"Third: you tell your people about us. After this is over, whatever happens, the Library knows who built it. Knows our names. My father's name was Ptolemaios. He built the western wall. I want someone to remember that."</p>

<p>She folds her arms. "That's my price. Fifty people, a chance to spread the word, and a name remembered. You can afford that. The question is whether you will."</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Fifty people. Done. What else can you tell us?\"", next: "A2-CITY-ACCEPT", effects: { threadsVisited: ["city"], threadsCompleted: ["city"], city: 1, defense: 1, harborAdvance: 1 } },
        { text: "\"I need to think about it.\"", next: "A2-CITY-DEFER", effects: { threadsVisited: ["city"] } },
        { text: "\"The scrolls have to come first. I'm sorry.\"", next: "A2-CITY-DISMISSED", effects: { threadsVisited: ["city"], threadsCompleted: ["city"], cityDismissed: true } }
    ]
},

"A2-CITY-ACCEPT": {
    title: "Agreement",
    act: 2,
    thread: "city",
    prose: `<p>She looks at you for a long moment. Then she nods—once, sharp.</p>

<p>"Done." She stands, wipes her hands. "Fifty people. I'll have names for you by tomorrow. Mostly families with children—they're the ones who need to get out first."</p>

<p>She looks toward the Library's distant outline. "I'll talk to the quarter tonight. Let them know the Library remembered. Some of them won't believe it. Some of them won't care. But some..." She shrugs. "Some might show up when you need them. First time for everything."</p>

<p>She turns back to you. "The service entrances. I'll draw you a map. And I'll tell you which approaches the soldiers forget to guard. Knowledge for knowledge. That's fair."</p>

<p>She almost smiles. "My father would have liked this. He always said the Library should belong to the city. Maybe now it will."</p>`,
    choices: [
        { text: "Return to the city.", next: "A2-HUB" }
    ]
},

"A2-CITY-DEFER": {
    title: "Deferred",
    act: 2,
    thread: "city",
    prose: `<p>She nods slowly. Goes back to work.</p>

<p>"Think about it. I'll be here." Stone, mortar, press. "The harbor's changing—I can see it from the rooftops. Whatever's coming, it's coming soon. Don't think too long."</p>

<p>She doesn't look up. The rhythm of her work continues.</p>

<p>"You know where to find me. Same trench, same work. That's what we do. We keep building while everyone else argues about what's worth saving."</p>

<p>You've learned what you came to learn. The decision remains unmade.</p>`,
    choices: [
        { text: "Return to the city.", next: "A2-HUB" }
    ]
},

"A2-CITY-DISMISSED": {
    title: "Dismissed",
    act: 2,
    thread: "city",
    prose: `<p>She stops working. Sets down her trowel. Looks at you for a long moment.</p>

<p>"The scrolls come first." She says it back to you, flat. "Three hundred years, and that's still the answer."</p>

<p>She picks up her trowel again. Returns to the mortar. You've stopped existing.</p>

<p>"I don't know why I thought today would be different."</p>

<p>Stone, mortar, press. Stone, mortar, press.</p>

<p>She doesn't look up again. There's nothing more to say.</p>`,
    choices: [
        { text: "Leave.", next: "A2-HUB" }
    ]
},

"A2-CITY-RETURN": {
    title: "Return to the Site",
    act: 2,
    thread: "city",
    prose: `<p>Demetria is still at the site—different trench, same steady work. She sees you coming and doesn't stop, but she doesn't turn away either.</p>

<p>"You're back." Stone, mortar, press. "Thought about it, have you?"</p>

<p>She straightens, wiping her hands on her tunic. "Fifty people. Guild members, families. You get them out, they'll remember. Their children will remember. Might be the first time the Library ever did something for the people who built it."</p>

<p>She waits. The offer hasn't changed. The question is whether you have.</p>`,
    prompt: "How do you respond?",
    choices: [
        { text: "\"Fifty people. Done.\"", next: "A2-CITY-RETURN-ACCEPT", effects: { threadsCompleted: ["city"], city: 1, defense: 1, harborAdvance: 1 } },
        { text: "\"I can't do it. I'm sorry.\"", next: "A2-CITY-FINAL", effects: { threadsCompleted: ["city"] } }
    ]
},

"A2-CITY-RETURN-ACCEPT": {
    title: "Agreement",
    act: 2,
    thread: "city",
    prose: `<p>She nods. Sets down her trowel.</p>

<p>"You came back. That's something." She stands, stretches. "Fifty people. I'll have names by tonight. And I'll talk to the quarter—let them know the Library remembered."</p>

<p>She looks toward the distant outline of the Library.</p>

<p>"My father's name was Ptolemaios. He built the western wall. I want someone to remember that." She turns back to you. "Now—let me tell you about the service entrances. The ones your scholars walk past without seeing."</p>

<p>For the first time, she almost smiles. "Knowledge for knowledge. That's fair."</p>`,
    choices: [
        { text: "Return to the city.", next: "A2-HUB" }
    ]
},

"A2-CITY-FINAL": {
    title: "Final Refusal",
    act: 2,
    thread: "city",
    prose: `<p>She nods once. Goes back to work.</p>

<p>"At least you came back to say it to my face." Stone, mortar, press. "Most wouldn't bother."</p>

<p>She doesn't say anything else. The rhythm of the work continues. You've been dismissed—but not with contempt. Just with the resignation of someone who expected nothing and received exactly that.</p>

<p>Stone, mortar, press. Stone, mortar, press.</p>

<p>You leave her to her work.</p>`,
    choices: [
        { text: "Return to the city.", next: "A2-HUB" }
    ]
}

};
