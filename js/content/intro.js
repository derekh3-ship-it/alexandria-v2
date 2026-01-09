/**
 * Introduction Scene
 */

export const INTRO_CONTENT = {
    "INTRO": {
        title: "The Alexandria Dilemma",
        isIntro: true,
        prose: `<p><em>You are a senior member of the Invisible College—a secret network of scholars, spies, and intellectuals dedicated to preserving knowledge across the Mediterranean world.</em></p>

<p><em>Tonight, an emergency gathering has been called in a hidden chamber beneath the Great Library of Alexandria. Political chaos is coming. The Library—the greatest repository of human knowledge ever assembled—is in mortal danger.</em></p>

<p><strong>There is no right answer. There is only the choice you make, and the consequences that follow.</strong></p>`,
        choices: [
            { text: "Begin", next: "A1-01" }
        ]
    }
};
