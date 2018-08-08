import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GrilleComponent } from "./../solo/grille.component";
import { ServiceInteractionComponent } from "../../service-interaction-component/service-interaction-component";
import { InfojoueurService } from "../../service-info-joueur/infojoueur.service";
import { TAILLE_TABLEAU } from "../../constantes";
import { listeMotsLongue, mockMatrice } from "./../../objetsTest/objetsTest";

describe("GrilleComponent", () => {
    let fixture: ComponentFixture<GrilleComponent>;
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

    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    describe("Constructor function", () => {
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
});
