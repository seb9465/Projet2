import { GrilleFocus } from "./grilleFocus";
import { Mot } from "../../objetsTest/mot";

describe("Grille Focus", () => {
    let mockDocument: Document;
    let component: GrilleFocus;
    let unMot: Mot;
    let unMotVide: Mot;

    beforeEach(() => {
        mockDocument = new Document();

        component = new GrilleFocus(mockDocument, 0);

        unMot = new Mot();
        unMot.mot = "test";
        unMot.longueur = unMot.mot.length;
        unMot.premierX = 0;
        unMot.premierY = 0;
        unMot.positionsLettres = ["00", "01", "02", "03"];

        unMotVide = new Mot();
        unMotVide.mot = "";
    });

    it("should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(component).toBeDefined();
    });

    describe("focusSurBonneLettre function", () => {});

    describe("focusOnNextLetter function", () => {
        it("Should return false when positionCourante is at 0.", () => {
            const result: boolean = component["focusOnNextLetter"](unMot);

            expect(result).toBeFalsy();
        });
        it("Should return true when positionCourante is at the last word's letter.", () => {
            component["positionCourante"] = unMot.longueur - 1;

            const result: boolean = component["focusOnNextLetter"](unMot);

            expect(result).toBeTruthy();
        });
        it("Should return false when positionCourante is anywhere between 0 and the last-before word's letter.", () => {
            const positionCouranteRandom: number = 2;
            component["positionCourante"] = positionCouranteRandom;

            const result: boolean = component["focusOnNextLetter"](unMot);

            expect(result).toBeFalsy();
        });
        it("Should return false when positionCourante is over the word's length.", () => {
            const randNumber: number = 5;
            const positionCourante: number = unMot.longueur + randNumber;
            component["positionCourante"] = positionCourante;

            const result: boolean = component["focusOnNextLetter"](unMot);

            expect(result).toBeFalsy();
        });
        it("Should return false if the word given is empty.", () => {
            const result: boolean = component["focusOnNextLetter"](unMotVide);

            expect(result).toBeFalsy();
        });
    });

    describe("removeFocusFromSelectedWord function", () => {});

    describe("focusOnPreviousLetter function", () => {});

    describe("isLastLetterOfWord function", () => {
        it("Should return false if the current position is 0.", () => {
            const result: boolean = component["isLastLetterOfWord"](unMot);

            expect(result).toBeFalsy();
        });
        it("Should return false if the current position is at the before last word's letter.", () => {
            // - 2 because the count of positionCourant starts at 0, and not 1;
            const beforeLastPosition: number = 2;
            component["positionCourante"] = unMot.longueur - beforeLastPosition;

            const result: boolean = component["isLastLetterOfWord"](unMot);

            expect(result).toBeFalsy();
        });
        it("Should return true if the current position is at the last word's letter.", () => {
            // - 1 because the count of positionCourante starts at 0, and not 1.
            component["positionCourante"] = unMot.longueur - 1;

            const result: boolean = component["isLastLetterOfWord"](unMot);

            expect(result).toBeTruthy();
        });
        it("Should return false if the current position is higher than the word length.", () => {
            component["positionCourante"] = unMot.longueur;

            const result: boolean = component["isLastLetterOfWord"](unMot);

            expect(result).toBeFalsy();
        });
    });

    afterEach(() => {
        mockDocument = null;
        component = null;
        unMot = null;
        unMotVide = null;
    });
});
