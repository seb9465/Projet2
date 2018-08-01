import { OpaciteCase } from "./opaciteCase";
import {
    unMotVertical,
    mockMatrice,
    unMotHorizontal
} from "./../../objetsTest/objetsTest";
import { TAILLE_TABLEAU } from "./../../../../../../server/app/generateurGrille/constantes";
import { LettreGrille } from "./../../objetsTest/lettreGrille";

describe("Opacite Case", () => {
    beforeEach(() => {});

    it("Should do nothing.", () => {
        expect(true).toBe(true);
    });

    describe("decouvrirCase function", () => {});

    describe("cacherCase function", () => {});

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
        it("Should return another letter if positionCourante is bigger than the word's length, but still inside the matrice.", () => {
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
        it("Should return undefined if the positionCourante goes out of the matrice's bounds.", () => {
            const result: LettreGrille = OpaciteCase[
                "obtenirLettreGrilleMotVertical"
            ](unMotVertical, TAILLE_TABLEAU + 1, mockMatrice);

            expect(result).toBeUndefined();
        });
        it("Should return undefined if the positionCourante is lower than 0.", () => {
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
        it("Should return another letter if positionCourante is bigger than the word's length, but still inside the matrice.", () => {
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
        it("Should return undefined if the positionCourante goes out of the matrice's bounds.", () => {
            const result: LettreGrille = OpaciteCase["obtenirLettreGrilleMotHorizontal"](unMotHorizontal, TAILLE_TABLEAU + 1, mockMatrice);

            expect(result).toBeUndefined();
        });
    });

    afterEach(() => {});
});
