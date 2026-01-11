/**
 * Act 4: Ending Scenes
 * The consequences of your choices
 */

import { STATE } from '../state.js';

export const ACT4_CONTENT = {

"A4-EVACUATE": {
    title: "The Long Night of Copying",
    act: 4,
    ending: true,
    dynamic: true,
    getProseAndChoices: function() {
        // Intel variation - knowing harbor timing helps evacuation
        let intelText = STATE.intel ?
            `<p>Nephthys's intelligence proved critical. You knew which ships were leaving when, which captains could be trusted, which routes the military wasn't watching yet. The <em>Ibis</em> left twelve hours earlier than planned—just before the first checkpoints went up.</p>

<p>"You bought us a day," Theron said on the fourth night. "Maybe more. That's thousands of scrolls we wouldn't have saved otherwise."</p>` :
            `<p>The timing was chaos. Ships left when they could, not when you planned. The <em>Crocodile</em>'s captain doubled his price when the checkpoints went up. You paid it—what choice did you have?</p>`;

        let communityText = STATE.community ?
            `<p>Miriam's network proved its worth alongside Theron's. While the College moved scrolls to the harbor, her people moved different cargo—Aristobulus, the letters, the marginalia. The proof that Jews in Alexandria had thought and built. Her brother's contacts in Antioch were ready. Her cousin's in Cyrene. A temple of words, traveling.</p>

<p>"We've been doing this longer than you," she said on the third night, not unkindly. "Let us carry what we know how to carry."</p>` :
            `<p>Somewhere in the Library, Miriam was running her own evacuation—her materials, her network, her priorities. You hadn't allied with her, but she hadn't waited for permission. Her people had been carrying knowledge through catastrophe for a thousand years. They didn't need the College's help.</p>`;

        // What survived varies by intel + community
        let scrollCount = STATE.intel ? "eighty thousand" : "seventy thousand";
        let whatSurvivedText;
        if (STATE.community && STATE.intel) {
            whatSurvivedText = `<p>${scrollCount} scrolls through Theron's network—the extra day made the difference. Another ten thousand through Miriam's. The mathematics went to Pergamum. The Aristobulus went to Antioch. The surgical texts went to Athens. And because you had time, some of the poetry made it too. Sappho's fragments, carried on the last ship out.</p>`;
        } else if (STATE.community) {
            whatSurvivedText = `<p>Seventy thousand scrolls through Theron's network. Another ten thousand through Miriam's—different texts, different destinations, different priorities. The mathematics went to Pergamum. The Aristobulus went to Antioch. The surgical texts went to Athens. The letters between Alexandria and Jerusalem went to Cyrene, carried by people who understood why they mattered.</p>`;
        } else if (STATE.intel) {
            whatSurvivedText = `<p>${scrollCount} scrolls. The extra day Nephthys bought you meant time for the poetry—some of it, at least. Sappho's fragments made it onto the last ship. Not everything. But more than you expected.</p>`;
        } else {
            whatSurvivedText = `<p>Seventy thousand scrolls. That's what you saved. Most were hasty copies, context stripped away.</p>`;
        }

        let endingReflection;
        if (STATE.community || STATE.intel) {
            endingReflection = `<p>The flesh still burned. Most of the poetry, the histories, the conversations you'll never reconstruct. But something more than cargo made it out. Something that remembered why it mattered.</p>`;
        } else {
            endingReflection = `<p>The flesh burned. The poetry, the histories, the letters—the conversation across centuries. Gone.</p>

<p>Sometimes you wonder if Hypatia was right. If a civilization without its poetry is really worth saving.</p>

<p>You never find an answer.</p>`;
        }

        let prose = `<p>You worked for six days. Six days and six nights, while the city held its breath.</p>

<p>Theron's network proved its worth. Every copyist in Alexandria received their orders. Hands cramped and bled. The scratch of pens became desperate music.</p>

${intelText}

<p>Mathematics went first. "Euclid can be rebuilt from fragments," Theron said. Medicine followed. Then astronomy, engineering, agriculture.</p>

${(STATE.intel || STATE.community) ? `<p>The poetry waited. "We'll get to it," you said on the third night.</p>

<p>You got to some of it.</p>` : `<p>The poetry waited. "We'll get to it," you said on the third night.</p>

<p>"We might," Theron said.</p>

<p>You didn't.</p>`}

${communityText}

<p>The <em>Ibis</em> left on the second day. The Cypriot followed. The <em>Crocodile</em> took the astronomy, the engineering—civilization's foundations.</p>

${whatSurvivedText}

<p>The Library burned on the seventh day. You watched from the harbor. The flames took the eastern wing first, then the reading rooms, then the stacks.</p>

<p>Hypatia stayed. She'd helped choose what went, but she wouldn't leave. They found her body three days later. She'd been trying to reach a section that had already burned.</p>

<p>You saved the foundations. The mathematics that rebuilds civilizations. The skeleton of knowledge, scattered across the Mediterranean.</p>

${endingReflection}

<p class="ending-label"><strong>ENDING: The Long Night of Copying</strong></p>`;

        return { prose: prose, choices: null };
    }
},

"A4-DEFEND": {
    title: "The Stand at Alexandria",
    act: 4,
    ending: true,
    dynamic: true,
    getProseAndChoices: function() {
        let cityText = STATE.city ?
            `<p>Demetria's people came. Not all of them, not with joy, but they came. They built barricades from stones they'd laid years ago. "The Library saw us first," one said. "Fair's fair."</p>` : '';

        // Intel variation - knowing when the crisis would hit helped prepare
        let intelText = STATE.intel ?
            `<p>Nephthys's warning gave you twelve hours you wouldn't have had otherwise. Twelve hours to move the most irreplaceable texts to the inner rooms. Twelve hours to fill water barrels, position guards, send word to sympathetic officials.</p>

<p>When the fire started on the second night, you were ready. The bucket chains were already organized. The evacuation routes were already clear. You lost three rooms instead of thirty.</p>` :
            `<p>The fire started on the second night—not from the harbor. It started in the scholars' dormitory, where an oil lamp fell. By the time you saw the glow, three rooms were gone.</p>`;

        // Outcome varies by intel + city
        let outcomeText;
        if (STATE.intel && STATE.city) {
            outcomeText = `<p>The eastern wing burned, but only the eastern wing. Demetria's people knew where the weak points were—they'd built them. They held the fire lines while scholars carried texts to safety.</p>

<p>Twenty thousand scrolls became ash. What survived wasn't random—it was chosen. The mathematical texts, the medical treatises, the astronomical charts. And because you had time, some of the poetry too.</p>`;
        } else if (STATE.intel) {
            outcomeText = `<p>The eastern wing burned completely. But the western wing was saved—not mostly, but entirely. The warning time made the difference. Thirty thousand scrolls became ash instead of forty.</p>

<p>What survived was still partly random. But less random than it would have been.</p>`;
        } else if (STATE.city) {
            outcomeText = `<p>The eastern wing burned completely. The western wing was saved—mostly. Demetria's people held the line longer than anyone expected. Forty thousand scrolls became ash. What survived was determined by proximity to exits and the choices made in chaos.</p>`;
        } else {
            outcomeText = `<p>The eastern wing burned completely. The western wing was saved—mostly. Forty thousand scrolls became ash. What survived was random—determined by proximity to exits and pure chance.</p>`;
        }

        // Hypatia's fate varies slightly
        let hypatiaText = STATE.intel ?
            `<p>Hypatia died on the third day. Not in the fire—at the eastern barricade. She died with a scroll case in her arms. She'd gone back for the letters of Alexander's generals.</p>

<p>The letters survived. You'd had time to copy them, the night before. She didn't know.</p>` :
            `<p>Hypatia died on the third day. Not in the fire—at the eastern barricade. She died with a scroll case in her arms. She'd gone back for the letters of Alexander's generals.</p>

<p>They didn't survive with her. The case broke when she fell.</p>`;

        let prose = `<p>You held for three days.</p>

${intelText}

<p>You made choices in that first hour that you'll carry forever. The mathematical texts or the astronomical charts. Scrolls that had survived two centuries, grabbed by hands that had never touched them, carried through smoke.</p>

<p>Hypatia was everywhere. Organizing bucket chains. Arguing with guardsmen about sight lines. Pulling texts from shelves with trancelike focus.</p>

${cityText}

<p>On the third day, the mob came. Not soldiers—Alexandrians who'd decided the Library was a symbol of something they hated.</p>

<p>They met the scholars in the doorway. It worked—the same thing that worked fifty years ago. Teachers facing students. The mob saw faces they recognized, and something faltered.</p>

<p>But not all of them.</p>

${outcomeText}

${hypatiaText}

<p>The Library still stands. Parts of it. Enough to call it survival, if you're generous.</p>

<p>Hypatia would say it was worth it. The stand, the symbol.</p>

<p>You're not sure anymore what you would say.</p>

<p class="ending-label"><strong>ENDING: The Stand at Alexandria</strong></p>`;

        return { prose: prose, choices: null };
    }
},

"A4-TEMPLE": {
    title: "The Serapeum Bargain",
    act: 4,
    ending: true,
    dynamic: true,
    getProseAndChoices: function() {
        // Intel variation - knowing timing helps prioritize the transfer
        let transferText = STATE.intel ?
            `<p>The transfer took four days. Nephthys's intelligence helped you prioritize—you knew how much time you had, which routes would close first. The most irreplaceable texts went up the hill first. The mathematical treatises. The unique copies. Aristobulus.</p>

<p>Carts climbed to the Serapeum in careful sequence. Priests received each shipment with rituals that felt half blessing, half inventory.</p>` :
            `<p>The transfer took four days. Carts climbing the hill to the Serapeum in desperate haste. Priests receiving each shipment with rituals that felt half blessing, half inventory.</p>

<p>You didn't know how much time you had. You guessed wrong about what to prioritize.</p>`;

        // What survived varies by intel
        let survivedText = STATE.intel ?
            `<p>Twenty-five thousand scrolls reached the Serapeum before the fire came. The extra day of warning meant time for the poetry—some of it. Sappho's fragments made it up the hill. The mathematics, the medicine, the astronomy—safe in vaults built before Alexander was born.</p>` :
            `<p>Twenty thousand scrolls reached the Serapeum before the fire came. The mathematics, the medicine—safe in vaults built before Alexander was born. But the poetry didn't make the priority list. There wasn't time.</p>`;

        // Fire outcome
        let fireText = STATE.intel ?
            `<p>The Library burned on the fifth night. The eastern wing was gone, and the reading rooms. Twenty-five thousand scrolls became ash—fewer than expected, because you'd known where to focus.</p>` :
            `<p>The Library burned on the fifth night. The eastern wing was gone, and the reading rooms. Thirty thousand scrolls became ash.</p>`;

        let prose = `${transferText}

<p>Hypatia supervised. Her face was stone.</p>

<p>"The Egyptian materials go to the inner vault," Khaemwaset said. "Separate from the Greek texts."</p>

<p>"Repatriation," Hypatia said flatly.</p>

<p>"Return."</p>

${survivedText}

${fireText}

<p>What survived did so under the temple's protection. Scholars could request texts—following the temple's protocols, observing the temple's hours.</p>

<p>Hypatia did not come to the Serapeum. She stayed in what remained, teaching in the ruins for twelve more years.</p>

<p>"He preserved the texts," she said once. "But he killed the dream. The idea that knowledge could exist independent of power."</p>

<p>The Serapeum stood for three more centuries. In the end, it burned too—destroyed by Christians.</p>

<p>But that was three hundred years later.</p>

<p>Whether that difference mattered depends on what you think knowledge is for.</p>

<p class="ending-label"><strong>ENDING: The Serapeum Bargain</strong></p>`;

        return { prose: prose, choices: null };
    }
},

"A4-HYBRID": {
    title: "The Coordinated Effort",
    act: 4,
    ending: true,
    dynamic: true,
    getProseAndChoices: function() {
        let cityText = STATE.city ?
            `<p>Demetria's people made the difference. Building barricades in the morning, loading carts in the afternoon. "The Library saw us first. We're returning the favor."</p>` : '';

        // Intel helps coordination
        let intelText = STATE.intel ?
            `<p>Nephthys's intelligence was the key. You knew when the crisis would peak, which routes would close, how long you had. The coordination wasn't guesswork—it was planned.</p>

<p>When the runner was killed on the fourth night, you had backup systems. Another runner. A signal fire. Three hours of chaos became thirty minutes.</p>` :
            `<p>But the coordination broke down when you needed it most. A runner was killed. For three hours, Theron didn't know what was happening at the Library.</p>`;

        // Outcome varies by intel
        let outcomeText;
        if (STATE.intel) {
            outcomeText = `<p>Ninety thousand scrolls saved. More than any single plan could have achieved. The mathematics, the medicine, the astronomy—and because the coordination held, some of the poetry too. Sappho's fragments made it onto the last cart.</p>

<p>Thirty thousand burned. But less than half what you'd feared.</p>`;
        } else {
            outcomeText = `<p>In those three hours, the fire took the poetry. Sappho, Alcaeus, Pindar. A scholar named Theodoros had been copying Sappho's fragments. He got out. The copies didn't.</p>

<p>Eighty-five thousand scrolls saved. More than evacuation alone. The mathematics, the medicine, the astronomy.</p>

<p>But forty thousand burned. Lost in the gap between two plans.</p>`;
        }

        // Hypatia's survival and reflection
        let reflectionText = STATE.intel ?
            `<p>Hypatia survived. She emerged at dawn, smoke-blackened, alive.</p>

<p>"We did it," she said. "Both plans. Together." She looked at the smoke still rising from the eastern wing. "Is it enough?"</p>

<p>"More than either alone," you said.</p>

<p>She nodded slowly. "Maybe that's the answer. Maybe it always was."</p>` :
            `<p>Hypatia survived. She emerged at dawn, smoke-blackened, alive. The collapse had been partial.</p>

<p>"We saved more than either plan alone," she said. "We lost more than if we'd focused on one. Is that victory?"</p>

<p>You didn't have an answer.</p>`;

        let prose = `<p>You tried to do everything. Against all odds, you almost succeeded.</p>

<p>The first three days were a miracle of coordination. Hypatia's defense bought time; Theron's evacuation used it. Runners moved between the Library and harbor in constant stream. The barricades held. The carts kept moving.</p>

${cityText}

<p>The fire came on the fourth night. The eastern wing burned—but the defense had bought time to empty most of it. The mathematical treatises were in three cities by the time the flames reached their shelves.</p>

${intelText}

${outcomeText}

${reflectionText}

<p class="ending-label"><strong>ENDING: The Coordinated Effort</strong></p>`;

        return { prose: prose, choices: null };
    }
},

"A4-INACTION": {
    title: "The Refusal",
    act: 4,
    ending: true,
    prose: `<p>"I don't choose."</p>

<p>The words fell into silence.</p>

<p>"Every path is loss," you said. "Why choose which loss?"</p>

<p>"There's never a right choice in moments like this," Hypatia said quietly. "There's only the choice you make."</p>

<p>"Then let someone else make it."</p>

<p>They looked at each other. The old argument with nowhere to go.</p>

<p>"Then we're back where we started," Theron said. "You've chosen nothing. We can't afford nothing."</p>

<p>They turned away. Not in anger—in necessity.</p>

<p>Theron evacuated what he could—not much, without coordination. Hypatia defended what she could—not long, without support. The barricades held for a day.</p>

<p>Perhaps fifteen thousand scrolls survived. Less than half what evacuation might have saved.</p>

<p>But you didn't order anyone to die. You didn't play god with three centuries of human knowledge.</p>

<p>The Library burned, and you watched from a distance.</p>

<p>You chose not to choose. The choice was made anyway.</p>

<p>Just not by you.</p>

<p class="ending-label"><strong>ENDING: The Refusal</strong></p>`
}

};
