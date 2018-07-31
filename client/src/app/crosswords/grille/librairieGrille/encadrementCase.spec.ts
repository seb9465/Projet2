import { EncadrementCase } from "./encadrementCase";
import { LARGEUR_BORDURE_CASE_DEFAUT, COULEUR_BORDURE_CASE_DEFAUT } from "../../constantes";

describe("Encadrement Case", () => {
    describe("Border", () => {
        let uneCase: HTMLElement;
        let uneCouleur: string;
        let uneLargeur: string;

        beforeEach(() => {
            uneCase = document.createElement("div");
            uneCouleur = COULEUR_BORDURE_CASE_DEFAUT;
            uneLargeur = LARGEUR_BORDURE_CASE_DEFAUT;
        });

        describe("Top", () => {
            beforeEach(() => {
                EncadrementCase.appliquerBordureHaut(uneCase, uneCouleur, uneLargeur);
            });

            it("Should set correctly the top border color of the html element.", () => {
                expect(uneCase.style.borderTopColor).toBe(uneCouleur);
            });
            it("Should set correctly the top border width of the html element.", () => {
                expect(uneCase.style.borderTopWidth).toBe(uneLargeur);
            });
        });
        describe("Bottom", () => {
            beforeEach(() => {
                EncadrementCase.appliquerBordureBas(uneCase, uneCouleur, uneLargeur);
            });

            it("Should set correctly the bottom border color of the html element.", () => {
                expect(uneCase.style.borderBottomColor).toBe(uneCouleur);
            });
            it("Should set correctly the bottom border width of the html element.", () => {
                expect(uneCase.style.borderBottomWidth).toBe(uneLargeur);
            });
        });
        describe("Left", () => {
            beforeEach(() => {
                EncadrementCase.appliquerBordureGauche(uneCase, uneCouleur, uneLargeur);
            });

            it("Should set correctly the left border color of the html element.", () => {
                expect(uneCase.style.borderLeftColor).toBe(uneCouleur);
            });
            it("Should set correctly the left border width of the html element.", () => {
                expect(uneCase.style.borderLeftWidth).toBe(uneLargeur);
            });
        });
        describe("Right", () => {
            beforeEach(() => {
                EncadrementCase.appliquerBordureDroite(uneCase, uneCouleur, uneLargeur);
            });

            it("Should set correctly the right border color of the html element.", () => {
                expect(uneCase.style.borderRightColor).toBe(uneCouleur);
            });
            it("Should set correctly the right border width of the html element.", () => {
                expect(uneCase.style.borderRightWidth).toBe(uneLargeur);
            });
        });
    });
});
