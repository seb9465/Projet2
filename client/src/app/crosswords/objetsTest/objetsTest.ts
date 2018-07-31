import { Mot } from "./mot";
import { LettreGrille } from "./lettreGrille";

export const listeMotsLongue: Mot[] = [
    {
        definitions: [{ definition: "beneath the surface of the water" }],
        estVertical: false,
        longueur: 10,
        mot: "underwater",
        premierX: 0,
        premierY: 0,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    },
    {
        definitions: [{ definition: "destroyed physically or morally" }],
        estVertical: true,
        longueur: 9,
        mot: "destroyed",
        premierX: 2,
        premierY: 0,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    },
    {
        definitions: [
            { definition: "a person employed to watch for something to happen" }
        ],
        estVertical: false,
        longueur: 8,
        mot: "sentinel",
        premierX: 2,
        premierY: 2,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    },
    {
        definitions: [{ definition: "the act of robbing a helpless person" }],
        estVertical: true,
        longueur: 7,
        mot: "rolling",
        premierX: 9,
        premierY: 0,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    },
    {
        definitions: [{ definition: "anew" }],
        estVertical: false,
        longueur: 5,
        mot: "again",
        premierX: 5,
        premierY: 9,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    },
    {
        definitions: [{ definition: "a strong restless desire" }],
        estVertical: true,
        longueur: 5,
        mot: "urged",
        premierX: 0,
        premierY: 0,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    },
    {
        definitions: [{ definition: "a branch of the Tai languages" }],
        estVertical: true,
        longueur: 4,
        mot: "thai",
        premierX: 5,
        premierY: 2,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    },
    {
        definitions: [
            { definition: "a way especially designed for a particular use" }
        ],
        estVertical: true,
        longueur: 4,
        mot: "path",
        premierX: 4,
        premierY: 5,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    },
    {
        definitions: [
            {
                definition:
                    "the act of rolling something (as the ball in bowling)"
            }
        ],
        estVertical: true,
        longueur: 4,
        mot: "roll",
        premierX: 0,
        premierY: 6,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    },
    {
        definitions: [{ definition: "eat a meal; take a meal" }],
        estVertical: false,
        longueur: 3,
        mot: "eat",
        premierX: 0,
        premierY: 3,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    },
    {
        definitions: [
            { definition: "a surface excavation for extracting stone or slate" }
        ],
        estVertical: false,
        longueur: 3,
        mot: "pit",
        premierX: 4,
        premierY: 5,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    },
    {
        definitions: [
            {
                definition:
                    "(nautical) the distance traveled by a sailing vessel on a single tack"
            }
        ],
        estVertical: false,
        longueur: 3,
        mot: "leg",
        premierX: 7,
        premierY: 6,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    },
    {
        definitions: [
            {
                definition:
                    "a movable top or cover (hinged or separate) for closing the opening of a container"
            }
        ],
        estVertical: false,
        longueur: 3,
        mot: "lid",
        premierX: 0,
        premierY: 8,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    },
    {
        // On ne peut pas separer un string sur plusieurs lignes
        // tslint:disable-next-line:max-line-length
        definitions: [
            {
                definition:
                    "the fourth caliph of Islam who is considered to be the first caliph by Shiites;he was a cousin" +
                    "and son-in-law of Muhammad; after his assination Islam was divided into Shiite and Sunnite sects"
            }
        ],
        estVertical: false,
        longueur: 3,
        mot: "ali",
        premierX: 7,
        premierY: 4,
        activer: false,
        motTrouve: false,
        cheat: false,
        positionsLettres: []
    }
];

export const grilleLettres: LettreGrille[][] = [
    [
        { caseDecouverte: false, lettre: "u", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "r", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "g", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "e", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "d", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "r", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "o", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "l", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "l", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "n", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "a", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "i", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "d", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "e", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "s", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "t", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "r", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "o", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "y", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "e", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "d", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "e", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "e", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "r", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "n", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "p", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "a", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "t", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "h", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "w", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "t", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "h", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "a", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "i", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "a", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "a", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "i", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "t", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "g", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "t", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "n", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "a", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "l", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "a", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "e", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "e", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "l", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "e", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "i", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "r", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "o", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "l", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "l", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "i", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "n", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "g", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "1", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "n", lettreDecouverte: false }
    ]
];

export const mockMatrice: LettreGrille[][] = [
    [
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "o", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "u", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "t", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "a", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "r", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "d", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "e", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "k", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "e", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "t", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "c", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "h", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "u", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "p", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false }
    ],
    [
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false },
        { caseDecouverte: false, lettre: "m", lettreDecouverte: false }
    ]
];

export const unMotHorizontal: Mot = {
    mot: "moutarde",
    definitions: undefined,
    estVertical: false,
    longueur: 8,
    premierX: 0,
    premierY: 0,
    activer: false,
    motTrouve: false,
    cheat: false,
    positionsLettres: []
};

export const unMotVertical: Mot = {
    mot: "ketchup",
    definitions: undefined,
    estVertical: true,
    longueur: 7,
    premierX: 0,
    premierY: 1,
    activer: false,
    motTrouve: false,
    cheat: false,
    positionsLettres: []
};
