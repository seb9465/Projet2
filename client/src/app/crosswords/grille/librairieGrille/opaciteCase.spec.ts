import { OpaciteCase } from "./opaciteCase";
import {
    unMotVertical,
    mockMatrice,
    unMotHorizontal,
    matriceCaseDecouverteTrue
} from "./../../objetsTest/objetsTest";
import { TAILLE_TABLEAU } from "./../../../../../../server/app/generateurGrille/constantes";
import { LettreGrille } from "./../../objetsTest/lettreGrille";
import { Mot } from "../../objetsTest/mot";

describe("Opacite Case", () => {
    beforeEach(() => {
        for (const ligne of matriceCaseDecouverteTrue) {
            for (const lettre of ligne) {
                lettre.caseDecouverte = true;
            }
        }
    });

    it("Should do nothing.", () => {
        expect(true).toBe(true);
    });

    describe("decouvrirCase function", () => {
        it("Should set every letter's caseDecouverte property to true of the horizontal word given as a parameter.", () => {
            const mockMatriceCaseDecouverte: Array<
                Array<LettreGrille>
            > = matriceCaseDecouverteTrue;
            const mockMotHorizontal: Mot = unMotHorizontal;

            OpaciteCase.decouvrirCases(
                mockMotHorizontal,
                mockMatriceCaseDecouverte
            );

            for (let i: number = 0; i < mockMotHorizontal.longueur; i++) {
                const result: boolean =
                    mockMatriceCaseDecouverte[mockMotHorizontal.premierX + i][
                        mockMotHorizontal.premierY
                    ].caseDecouverte;
                expect(result).toBeTruthy();
            }
        });
        it("Should set every letter's caseDecouverte property to true of the vertical word given as a parameter.", () => {
            const mockMatriceCaseDecouverte: Array<
                Array<LettreGrille>
            > = matriceCaseDecouverteTrue;
            const mockMotVertical: Mot = unMotVertical;

            OpaciteCase.decouvrirCases(
                mockMotVertical,
                mockMatriceCaseDecouverte
            );

            for (let i: number = 0; i < mockMotVertical.longueur; i++) {
                const result: boolean =
                    mockMatriceCaseDecouverte[mockMotVertical.premierX][
                        mockMotVertical.premierY + i
                    ].caseDecouverte;
                expect(result).toBeTruthy();
            }
        });
    });

    describe("cacherCase function", () => {
        it("Should set every letter's caseDecouverte to false.", () => {
            const mockMatriceCaseDecouverteTrue: Array<
                Array<LettreGrille>
            > = matriceCaseDecouverteTrue;
            for (const ligne of mockMatriceCaseDecouverteTrue) {
                for (const lettre of ligne) {
                    expect(lettre.caseDecouverte).toBeTruthy();
                }
            }

            OpaciteCase["cacherCases"](mockMatriceCaseDecouverteTrue);

            for (const ligne of mockMatriceCaseDecouverteTrue) {
                for (const lettre of ligne) {
                    expect(lettre.caseDecouverte).toBeFalsy();
                }
            }
        });
    });

    describe("obtenirLettreGrilleMotVertical function", () => {
        it("Should return the letter m from the word moutarde.", () => {
            const expectedResult: LettreGrille = {
                caseDecouverte: false,
                lettre: "m",
                lettreDecouverte: false
            };

            const result: LettreGrille = OpaciteCase[
                "obtenirLettreGrilleMotVertical"
            ](unMotVertical, 0, mockMatrice);

            expect(result.lettre).toBe(expectedResult.lettre);
        });
        it("Should return the letter e from the word moutarde.", () => {
            const expectedResult: LettreGrille = {
                caseDecouverte: false,
                lettre: "e",
                lettreDecouverte: false
            };

            const result: LettreGrille = OpaciteCase[
                "obtenirLettreGrilleMotVertical"
            ](unMotVertical, unMotVertical.longueur - 1, mockMatrice);

            expect(result.lettre).toBe(expectedResult.lettre);
        });
        it("Should return another letter if index is bigger than the word's length, but still inside the matrice.", () => {
            const expectedResult: LettreGrille = {
                caseDecouverte: false,
                lettre: "e",
                lettreDecouverte: false
            };

            const result: LettreGrille = OpaciteCase[
                "obtenirLettreGrilleMotVertical"
            ](unMotVertical, unMotVertical.longueur, mockMatrice);

            expect(result.lettre).not.toBe(expectedResult.lettre);
        });
        it("Should return undefined if the index goes out of the matrice's bounds.", () => {
            const result: LettreGrille = OpaciteCase[
                "obtenirLettreGrilleMotVertical"
            ](unMotVertical, TAILLE_TABLEAU + 1, mockMatrice);

            expect(result).toBeUndefined();
        });
        it("Should return undefined if the index is lower than 0.", () => {
            const result: LettreGrille = OpaciteCase[
                "obtenirLettreGrilleMotVertical"
            ](unMotVertical, -1, mockMatrice);

            expect(result).toBeUndefined();
        });
    });

    describe("obtenirLettreGrilleMotHorizontal function", () => {
        it("Should return the letter k from ketchup.", () => {
            const expectedResult: LettreGrille = {
                caseDecouverte: false,
                lettre: "k",
                lettreDecouverte: false
            };

            const result: LettreGrille = OpaciteCase[
                "obtenirLettreGrilleMotHorizontal"
            ](unMotHorizontal, 0, mockMatrice);

            expect(result.lettre).toBe(expectedResult.lettre);
        });
        it("Should return the letter p from ketchup.", () => {
            const expectedResult: LettreGrille = {
                caseDecouverte: false,
                lettre: "p",
                lettreDecouverte: false
            };

            const result: LettreGrille = OpaciteCase[
                "obtenirLettreGrilleMotHorizontal"
            ](unMotHorizontal, unMotHorizontal.longueur - 1, mockMatrice);

            expect(result.lettre).toBe(expectedResult.lettre);
        });
        it("Should return another letter if index is bigger than the word's length, but still inside the matrice.", () => {
            const expectedResult: LettreGrille = {
                caseDecouverte: false,
                lettre: "p",
                lettreDecouverte: false
            };

            const result: LettreGrille = OpaciteCase[
                "obtenirLettreGrilleMotHorizontal"
            ](unMotHorizontal, unMotHorizontal.longueur, mockMatrice);

            expect(result.lettre).not.toBe(expectedResult.lettre);
        });
        it("Should return undefined if the index goes out of the matrice's bounds.", () => {
            const result: LettreGrille = OpaciteCase[
                "obtenirLettreGrilleMotHorizontal"
            ](unMotHorizontal, TAILLE_TABLEAU + 1, mockMatrice);

            expect(result).toBeUndefined();
        });
        it("Should return undefined if the index is lower than 0.", () => {
            const result: LettreGrille = OpaciteCase[
                "obtenirLettreGrilleMotHorizontal"
            ](unMotHorizontal, -1, mockMatrice);

            expect(result).toBeUndefined();
        });
    });

    afterEach(() => {});
});
