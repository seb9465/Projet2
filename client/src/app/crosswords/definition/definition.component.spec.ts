import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DefinitionComponent } from "./definition.component";
import { ServiceInteractionComponent } from "../service-interaction-component/service-interaction-component";
import { Mot } from "../objetsTest/mot";
import { of } from "../../../../node_modules/rxjs/observable/of";
import { LettreGrille } from "./../objetsTest/lettreGrille";

describe("DefinitionComponent", () => {
    const mockMatrice: LettreGrille[][] = [
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
    const unMot: Mot = {
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
    const mockMots: Mot[] = [unMot];
    const mockMot: Mot = unMot;
    let fixture: ComponentFixture<DefinitionComponent>;
    let mockServiceInteractionComp: jasmine.SpyObj<ServiceInteractionComponent>;

    beforeEach(() => {
        // Ajouter les noms d"attributs utilisés de Service Interaction ici.
        mockServiceInteractionComp = jasmine.createSpyObj([
            "mots",
            "matrice",
            "serviceReceptionMots",
            "serviceReceptionMotSelectionne",
            "serviceReceptionMatriceLettres",
            "serviceReceptionMotTrouve",
            "serviceReceptionMotPerdu",
            "serviceEnvoieMotSelectionne",
            "serviceEnvoieMatriceLettres"
        ]);
        TestBed.configureTestingModule({
            declarations: [DefinitionComponent],
            providers: [
                {
                    provide: ServiceInteractionComponent,
                    useValue: mockServiceInteractionComp
                }
            ]
        });

        fixture = TestBed.createComponent(DefinitionComponent);
    });

    afterEach(() => {});

    it("should do nothing", () => {
        expect(true).toBe(true);
    });

    it("should be define", () => {
        expect(fixture).toBeDefined();
    });

    describe("Subscriptions", () => {
        describe("Reception Mots", () => {
            it("Service's function should be called to return a value.", () => {
                mockServiceInteractionComp.serviceReceptionMots.and.returnValue(
                    of(mockMots)
                );

                fixture.componentInstance["souscrireReceptionMots"]();

                expect(
                    mockServiceInteractionComp.serviceReceptionMots
                ).toHaveBeenCalled();
            });

            it("Current component should receive the good value from the service.", () => {
                mockServiceInteractionComp.serviceReceptionMots.and.returnValue(
                    of(mockMots)
                );

                fixture.componentInstance["souscrireReceptionMots"]();

                expect(fixture.componentInstance.mots).toBe(mockMots);
            });
        });
        describe("Reception Matrice", () => {
            it("Service's function should be called to return a value.", () => {
                mockServiceInteractionComp.serviceReceptionMatriceLettres.and.returnValue(
                    of(mockMatrice)
                );

                fixture.componentInstance["souscrireReceptionMatrice"]();

                expect(
                    mockServiceInteractionComp.serviceReceptionMatriceLettres
                ).toHaveBeenCalled();
            });
            it("Current component should receive the good value from the service.", () => {
                mockServiceInteractionComp.serviceReceptionMatriceLettres.and.returnValue(
                    of(mockMatrice)
                );

                fixture.componentInstance["souscrireReceptionMatrice"]();

                expect(fixture.componentInstance.matriceDesMotsSurGrille).toBe(
                    mockMatrice
                );
            });
        });
        describe("Reception Mot Trouve", () => {
            it("Service's function should be called to return a value.", () => {
                mockServiceInteractionComp.serviceReceptionMotTrouve.and.returnValue(
                    of(mockMot)
                );

                fixture.componentInstance["souscrireMotsTrouves"]();

                expect(
                    mockServiceInteractionComp.serviceReceptionMotTrouve
                ).toHaveBeenCalled();
            });
        });
        describe("Reception Mot Perdu", () => {
            it("Services's function shoudl be called to return a value.", () => {
                mockServiceInteractionComp.serviceReceptionMotPerdu.and.returnValue(
                    of(mockMot)
                );

                fixture.componentInstance["souscrireMotsPerdus"]();

                expect(
                    mockServiceInteractionComp.serviceReceptionMotPerdu
                ).toHaveBeenCalled();
            });
        });
        describe("Envoie Matrice Lettres", () => {
            it("Should call the service's function.", () => {
                fixture.componentInstance["envoieMatrice"]();

                expect(
                    mockServiceInteractionComp.serviceEnvoieMatriceLettres
                ).toHaveBeenCalled();
            });
        });
        describe("Envoie Mot Selectionne", () => {
            it("Should call the service's function.", () => {
                fixture.componentInstance["envoieMotSelectionne"]();

                expect(
                    mockServiceInteractionComp.serviceEnvoieMotSelectionne
                ).toHaveBeenCalled();
            });
        });
    });
    describe("Decouvrir cases", () => {
        it("Should have put truthy the newly undercovered boxes.", () => {
            fixture.componentInstance.matriceDesMotsSurGrille = mockMatrice;

            fixture.componentInstance["decouvrirCases"](unMot);

            for (let indice: number = 0; indice < unMot.longueur; indice++) {
                expect(
                    fixture.componentInstance.matriceDesMotsSurGrille[unMot.premierX + indice][unMot.premierY]
                ).toBeTruthy();
            }
        });
        it("Should have call the Envoie Matrice function.", () => {
            const spy = spyOn<any>(
                DefinitionComponent.prototype,
                "envoieMatrice"
            );
            fixture.componentInstance.matriceDesMotsSurGrille = mockMatrice;

            fixture.componentInstance["decouvrirCases"](unMot);

            expect(spy).toHaveBeenCalled();
        });
    });
});
