import { EncadrementCase } from "./encadrementCase";
import { LARGEUR_BORDURE_CASE_DEFAUT, COULEUR_BORDURE_CASE_DEFAUT } from "../../constantes";

describe("Encadrement Case", () => {
    describe("appliquerBordure... function", () => {
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

    describe("appliquerStyleDefautGrille function", () => {
        let doc: Document;
        let tagElem: HTMLElement;

        beforeEach(() => {
            doc = new Document();
            tagElem = document.createElement("td");
            doc.appendChild(tagElem);

            EncadrementCase.appliquerStyleDefautGrille(doc);
        });

        it("Should get a defined tag element.", () => {
            expect(doc.getElementsByTagName("td")[0]).toBeDefined();
        });
        it("Should get a tag element with the default top border color.", () => {
            expect(doc.getElementsByTagName("td")[0].style.borderTopColor).toBe(COULEUR_BORDURE_CASE_DEFAUT);
        });
        it("Should get a tag element with the default top border style.", () => {
            const expectedColor: string = COULEUR_BORDURE_CASE_DEFAUT;
            const expectedWidth: string = LARGEUR_BORDURE_CASE_DEFAUT;

            expect(doc.getElementsByTagName("td")[0].style.borderTopColor).toBe(expectedColor);
            expect(doc.getElementsByTagName("td")[0].style.borderTopWidth).toBe(expectedWidth);
        });
        it("Should get a tag element with the default bottom border style.", () => {
            const expectedColor: string = COULEUR_BORDURE_CASE_DEFAUT;
            const expectedWidth: string = LARGEUR_BORDURE_CASE_DEFAUT;

            expect(doc.getElementsByTagName("td")[0].style.borderBottomColor).toBe(expectedColor);
            expect(doc.getElementsByTagName("td")[0].style.borderBottomWidth).toBe(expectedWidth);
        });
        it("Should get a tag element with the default right border style.", () => {
            const expectedColor: string = COULEUR_BORDURE_CASE_DEFAUT;
            const expectedWidth: string = LARGEUR_BORDURE_CASE_DEFAUT;

            expect(doc.getElementsByTagName("td")[0].style.borderRightColor).toBe(expectedColor);
            expect(doc.getElementsByTagName("td")[0].style.borderRightWidth).toBe(expectedWidth);
        });
        it("Should get a tag element with the default left border style.", () => {
            const expectedColor: string = COULEUR_BORDURE_CASE_DEFAUT;
            const expectedWidth: string = LARGEUR_BORDURE_CASE_DEFAUT;

            expect(doc.getElementsByTagName("td")[0].style.borderLeftColor).toBe(expectedColor);
            expect(doc.getElementsByTagName("td")[0].style.borderLeftWidth).toBe(expectedWidth);
        });
});
