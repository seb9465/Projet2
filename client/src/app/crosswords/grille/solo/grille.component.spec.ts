/* tslint:disable-next-line:max-file-line-count */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GrilleComponent } from "./../solo/grille.component";
import { ServiceInteractionComponent } from "../../service-interaction-component/service-interaction-component";
import { InfojoueurService } from "../../service-info-joueur/infojoueur.service";
import { TAILLE_TABLEAU } from "../../constantes";
import { listeMotsLongue, mockMatrice, unMotHorizontal } from "./../../objetsTest/objetsTest";
import { REGLE_JEU } from "../grilleAbs";
import { Mot } from "../../objetsTest/mot";
import { LettreGrille } from "../../objetsTest/lettreGrille";
import { of } from "rxjs/observable/of";
import { EncadrementCase } from "../librairieGrille/encadrementCase";

interface OpaciteEntry {
    input: boolean;
    expectedOutput: string;
}

describe("GrilleComponent", () => {
    let fixture: ComponentFixture<GrilleComponent>;
    let component: GrilleComponent;
    let mockServiceInteraction: jasmine.SpyObj<ServiceInteractionComponent>;
    let mockServiceInfoJoueur: jasmine.SpyObj<InfojoueurService>;

    beforeEach(() => {
        mockServiceInteraction = jasmine.createSpyObj([
            "mots",
            "matrice",
            "serviceReceptionMatriceLettres",
            "serviceReceptionMots",
            "serviceReceptionMotSelectionne",
            "serviceEnvoieMots",
            "souscrireServiceSocket",
            "serviceEnvoieMotTrouve",
            "serviceEnvoieMotSelectionne",
            "souscrireRequeteGrille"
        ]);
        mockServiceInfoJoueur = jasmine.createSpyObj([
            "incrementationNbMotDecouv"
        ]);
        TestBed.configureTestingModule({
            declarations: [GrilleComponent],
            imports: [],
            providers: [
                { provide: ServiceInteractionComponent, useValue: mockServiceInteraction },
                { provide: InfojoueurService, useValue: mockServiceInfoJoueur }
            ]
        });

        fixture = TestBed.createComponent(GrilleComponent);
        component = fixture.componentInstance;
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    describe("Constructor function", () => {
        it("Shoudl be defined", () => {
            expect(component).toBeDefined();
        });
        it("Should initialize the lockedLetter matrix with 'false'", () => {
            for (let i: number = 0; i < TAILLE_TABLEAU; i++) {
                for (let j: number = 0; j < TAILLE_TABLEAU; j++) {
                    expect(fixture.componentInstance["lockedLetter"][i][j]).toBeFalsy();
                }
            }
        });
        it("Should create a focus property", () => {
            expect(fixture.componentInstance["focus"]).toBeDefined();
            expect(fixture.componentInstance["focus"]).toBeTruthy();
        });
        it("Should create a miseEnEvidence property", () => {
            expect(fixture.componentInstance["miseEnEvidence"]).toBeDefined();
            expect(fixture.componentInstance["miseEnEvidence"]).toBeTruthy();
        });
    });

    describe("initialiserSouscriptions function", () => {
        let spyServiceReceptionMots: jasmine.Spy;
        let spyServiceReceptionMotSelectionne: jasmine.Spy;
        let spyServiceReceptionMatriceLettres: jasmine.Spy;
        let spyRemplirPositionLettres: jasmine.Spy;
        let spyMiseEnEvidence: jasmine.Spy;

        beforeEach(() => {
            spyServiceReceptionMots = mockServiceInteraction.serviceReceptionMots.and.returnValue(of(listeMotsLongue));
            spyServiceReceptionMotSelectionne = mockServiceInteraction.serviceReceptionMotSelectionne.and.returnValue(of(unMotHorizontal));
            spyServiceReceptionMatriceLettres = mockServiceInteraction.serviceReceptionMatriceLettres.and.returnValue(of(mockMatrice));
            spyRemplirPositionLettres = spyOn<any>(component, "remplirPositionLettres");
            spyMiseEnEvidence = spyOn<any>(component["miseEnEvidence"], "miseEvidenceMot");

            component["initialiserSouscriptions"]();
        });

        it("Should have called the serviceReceptionMots function", () => {
            expect(spyServiceReceptionMots).toHaveBeenCalled();
        });
        it("Should have called the serviceReceptionMotSelectionne function", () => {
            expect(spyServiceReceptionMotSelectionne).toHaveBeenCalled();
        });
        it("Should have called the serviceReceptionMatriceLettres function", () => {
            expect(spyServiceReceptionMatriceLettres).toHaveBeenCalled();
        });

        it("Should subscribe to the mots", () => {
            expect(component["subscriptionMots"]).not.toBeNull();
            expect(component["subscriptionMots"]).not.toBeUndefined();
        });
        it("Should set the mots with the received value", () => {
            expect(component["mots"]).toEqual(listeMotsLongue);
        });
        it("Should call the remplirPositionLettres function when subscribing to the mots", () => {
            expect(spyRemplirPositionLettres).toHaveBeenCalled();
        });

        it("Should subscribe to the matrice", () => {
            expect(component["subscriptionMatrice"]).not.toBeNull();
            expect(component["subscriptionMatrice"]).not.toBeUndefined();
        });
        it("Should set the matriceDesMotsSurGrile property with the received value", () => {
            expect(component["matriceDesMotsSurGrille"]).toEqual(mockMatrice);
        });

        it("Should subscribe to the mot selectionne", () => {
            expect(component["subscriptionMotSelec"]).not.toBeNull();
            expect(component["subscriptionMotSelec"]).not.toBeUndefined();
        });
        it("Should set the motSelectionne property with the received value", () => {
            expect(component["motSelectionne"]).toBe(unMotHorizontal);
        });
        it("Should set the motSelectionne's mot to upperCase", () => {
            expect(component["motSelectionne"].mot).toEqual(unMotHorizontal.mot.toUpperCase());
        });
        it("Should call the miseEnvidence function", () => {
            expect(spyMiseEnEvidence).toHaveBeenCalledWith(component["motSelectionne"], "red");
        });

        afterEach(() => {
            spyServiceReceptionMots = null;
            spyServiceReceptionMotSelectionne = null;
            spyServiceReceptionMatriceLettres = null;
            spyRemplirPositionLettres = null;
        });
    });

    describe("envoyerMotTrouve function", () => {
        it("Should call the serviceEnvoieMotTrouve function of the ListeMotsService", () => {
            const spy: jasmine.Spy = mockServiceInteraction.serviceEnvoieMotTrouve;

            component["envoyerMotTrouve"](unMotHorizontal);

            expect(spy).toHaveBeenCalledWith(unMotHorizontal);
        });
    });

    describe("enleverSelection function", () => {
        it("Should call the appliquerStyleDefautGrille of the EncadrementCase class", () => {
            const spy: jasmine.Spy = spyOn(EncadrementCase, "appliquerStyleDefautGrille");
            component["mots"] = listeMotsLongue;
            component["matriceDesMotsSurGrille"] = mockMatrice;

            component.enleverSelection("0", "0");

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("switchCheatMode function", () => {

    });

    describe("retrieveWordFromClick function", () => {

    });

    describe("remettreCaseOpaque function", () => {
        beforeEach(() => {
            fixture.componentInstance["mots"] = listeMotsLongue;
            fixture.componentInstance["matriceDesMotsSurGrille"] = mockMatrice;

            fixture.componentInstance["remettreCasseOpaque"]();
        });

        it("Should set the activer property of each word to false", () => {
            for (const mot of fixture.componentInstance["mots"]) {
                expect(mot.activer).toBeFalsy();
            }
        });
        it("Should set the caseDecouverte property of each letters of the grid to false", () => {
            for (const ligne of fixture.componentInstance["matriceDesMotsSurGrille"]) {
                for (const lettre of ligne) {
                    expect(lettre.caseDecouverte).toBeFalsy();
                }
            }
        });
    });

    describe("afficherRegles function", () => {
        it("Should call the alert function with the game rules", () => {
            const spy: jasmine.Spy = spyOn(window, "alert");

            component.afficherRegle();

            expect(spy).toHaveBeenCalledWith(REGLE_JEU);
        });
    });

    describe("getListeMots function", () => {
        it("Should return mots with the good value", () => {
            component["mots"] = listeMotsLongue;

            const expectedResult: Mot[] = component.getListeMots();

            expect(expectedResult).toBe(listeMotsLongue);
        });
        it("Should be truthy if the property has never been set", () => {
            const expectedResult: Mot[] = component.getListeMots();

            expect(expectedResult).toBeTruthy();
        });
    });

    describe("getMatrice function", () => {
        it("Should return matriceDesMotsSurGrille with the good value", () => {
            component["matriceDesMotsSurGrille"] = mockMatrice;

            const expectedResult: Array<Array<LettreGrille>> = component.getMatrice();

            expect(expectedResult).toEqual(mockMatrice);
        });
        it("Should be truthy if the property has never been set", () => {
            const expectedResult: Array<Array<LettreGrille>> = component.getMatrice();

            expect(expectedResult).toBeTruthy();
        });
    });

    describe("opacite function", () => {
        const entries: OpaciteEntry[] = [
            { input: true, expectedOutput: "0" },
            { input: false, expectedOutput: ".3" }
        ];
        for (const entry of entries) {
            it("Should be " + entry.input.toString(), () => {
                const result: string = component.opacite(entry.input);

                expect(result).toEqual(entry.expectedOutput);
            });
        }
    });

    describe("manageEntry function", () => {
        it("Should jump to the next letter if a letter is pressed", () => {
            const keyEvent: KeyboardEvent = new KeyboardEvent("keydown", { "key": "E" });
            const initialPosition: number = 0;
            component["focus"]["positionCourante"] = initialPosition;
            component["motSelectionne"] = unMotHorizontal;

            component.manageKeyEntry(keyEvent);

            expect(component["focus"]["positionCourante"]).toBeGreaterThan(initialPosition);
        });
        it("Should go back to the previous letter if backspace is pressed", () => {
            const keyEvent: KeyboardEvent = new KeyboardEvent("keydown", { "key": "Backspace" });
            const initialPosition: number = 1;
            component["focus"]["positionCourante"] = initialPosition;
            component["motSelectionne"] = unMotHorizontal;

            component.manageKeyEntry(keyEvent);

            expect(component["focus"]["positionCourante"]).toBeLessThan(initialPosition);
        });
        it("Should do nothing if the pressed key is an invalid one", () => {
            const keyEvent: KeyboardEvent = new KeyboardEvent("keydown", { "key": "2" });
            const initialPosition: number = 1;
            component["focus"]["positionCourante"] = initialPosition;
            component["motSelectionne"] = unMotHorizontal;

            component.manageKeyEntry(keyEvent);

            expect(component["focus"]["positionCourante"]).toEqual(initialPosition);
        });
        it("Should do nothing if the Backspace is pressed at the beginning of the word", () => {
            const keyEvent: KeyboardEvent = new KeyboardEvent("keydown", { "key": "Backspace" });
            const initialPosition: number = 0;
            component["focus"]["positionCourante"] = initialPosition;
            component["motSelectionne"] = unMotHorizontal;

            component.manageKeyEntry(keyEvent);

            expect(component["focus"]["positionCourante"]).toEqual(initialPosition);
        });
        it("Should call the validateWord function if the key is a letter and at the last letter of the word", () => {
            const keyEvent: KeyboardEvent = new KeyboardEvent("keydown", { "key": "E" });
            const initialPosition: number = unMotHorizontal.longueur - 1;
            const spy: jasmine.Spy = spyOn<any>(component, "validateWord");
            component["focus"]["positionCourante"] = initialPosition;
            component["motSelectionne"] = unMotHorizontal;

            component.manageKeyEntry(keyEvent);

            expect(spy).toHaveBeenCalled();
        });
    });
});
