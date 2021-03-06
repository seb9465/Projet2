import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DefinitionComponent } from "./definition.component";
import { ServiceInteractionComponent } from "../service-interaction-component/service-interaction-component";
import { Mot } from "../objetsTest/mot";
import { of } from "../../../../node_modules/rxjs/observable/of";
import { mockMatrice, unMotHorizontal, unMotVertical, unMotHorizontalTrouve } from "./../objetsTest/objetsTest";

describe("DefinitionComponent", () => {
    const mockMots: Mot[] = [unMotHorizontal];
    const mockMot: Mot = unMotHorizontal;
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
        describe("SouscrireReceptionMatrice function", () => {
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
        describe("EnvoieMotSelectionne function", () => {
            it("Should call the service's function.", () => {
                fixture.componentInstance["envoieMotSelectionne"]();

                expect(
                    mockServiceInteractionComp.serviceEnvoieMotSelectionne
                ).toHaveBeenCalled();
            });
        });
    });

    describe("Decouvrir cases", () => {
        describe("with an horizontal word", () => {
            it("Should have put truthy the newly undercovered boxes.", () => {
                fixture.componentInstance.matriceDesMotsSurGrille = mockMatrice;

                fixture.componentInstance["decouvrirCases"](unMotHorizontal);

                for (
                    let indice: number = 0;
                    indice < unMotHorizontal.longueur;
                    indice++
                ) {
                    expect(
                        fixture.componentInstance.matriceDesMotsSurGrille[
                            unMotHorizontal.premierX + indice
                        ][unMotHorizontal.premierY]
                    ).toBeTruthy();
                }
            });
            it("Should have call the Envoie Matrice function.", () => {
                const spy: jasmine.Spy = spyOn<any>(
                    DefinitionComponent.prototype,
                    "envoieMatrice"
                );
                fixture.componentInstance.matriceDesMotsSurGrille = mockMatrice;

                fixture.componentInstance["decouvrirCases"](unMotHorizontal);

                expect(spy).toHaveBeenCalled();
            });
        });
        describe("with a vertical word", () => {
            beforeEach(() => {
                fixture.componentInstance.matriceDesMotsSurGrille = mockMatrice;
            });
            it("Should have put truthy the newly undercovered boxes.", () => {
                fixture.componentInstance["decouvrirCases"](unMotVertical);

                for (
                    let indice: number = 0;
                    indice < unMotVertical.longueur;
                    indice++
                ) {
                    expect(
                        fixture.componentInstance.matriceDesMotsSurGrille[
                            unMotVertical.premierX
                        ][unMotVertical.premierY + indice]
                    ).toBeTruthy();
                }
            });
            it("Should have call the Envoie Matrice function.", () => {
                const spy = spyOn<any>(
                    DefinitionComponent.prototype,
                    "envoieMatrice"
                );

                fixture.componentInstance["decouvrirCases"](unMotVertical);

                expect(spy).toHaveBeenCalled();
            });
            it("Should e calling the EnvoieMatriceLettres function, in another way.", () => {
                const stub: jasmine.Spy = mockServiceInteractionComp.serviceEnvoieMatriceLettres.and.stub();

                fixture.componentInstance["decouvrirCases"](unMotHorizontal);

                expect(stub).toHaveBeenCalled();
            });
        });
    });

    describe("Getter - Setter", () => {
        describe("For the property mots", () => {
            it("Should get the good value.", () => {
                fixture.componentInstance["_mots"] = mockMots;

                expect(fixture.componentInstance.mots).toBe(mockMots);
            });
            it("Should set the good value.", () => {
                fixture.componentInstance.mots = mockMots;

                expect(fixture.componentInstance["_mots"]).toBe(mockMots);
            });
        });
        describe("For the property matriceDesMotsSurGrille.", () => {
            it("Should get the good value.", () => {
                fixture.componentInstance["_matriceDesMotsSurGrille"] = mockMatrice;

                expect(fixture.componentInstance.matriceDesMotsSurGrille).toBe(mockMatrice);
            });
            it("Should set the good value.", () => {
                fixture.componentInstance.matriceDesMotsSurGrille = mockMatrice;

                expect(fixture.componentInstance["_matriceDesMotsSurGrille"]).toBe(mockMatrice);
            });
        });
        describe("For the property motSelectionne.", () => {
            it("Should get the good value.", () => {
                fixture.componentInstance["_motSelectionne"] = mockMot;

                expect(fixture.componentInstance.motSelectionne).toBe(mockMot);
            });
            it("Should set the good value.", () => {
                fixture.componentInstance.motSelectionne = mockMot;

                expect(fixture.componentInstance["_motSelectionne"]).toBe(mockMot);
            });
        });
    });

    describe("ngOnInit", () => {
        beforeEach(() => {
            fixture.componentInstance.mots = mockMots;
            fixture.componentInstance.matriceDesMotsSurGrille = mockMatrice;

            mockServiceInteractionComp.serviceReceptionMotSelectionne.and.returnValue(of(unMotHorizontal));
            mockServiceInteractionComp.serviceReceptionMots.and.returnValue(of(mockMots));
            mockServiceInteractionComp.serviceReceptionMatriceLettres.and.returnValue(of(mockMatrice));
            mockServiceInteractionComp.serviceReceptionMotTrouve.and.returnValue(of(unMotVertical));
            mockServiceInteractionComp.serviceReceptionMotPerdu.and.returnValue(of(unMotHorizontal));
        });

        it("Should call all the subscriptions function", () => {
            const spy1: jasmine.Spy = spyOn<any>(fixture.componentInstance, "souscrireReceptionMots");
            const spy2: jasmine.Spy = spyOn<any>(fixture.componentInstance, "souscrireSelectionMots");
            const spy3: jasmine.Spy = spyOn<any>(fixture.componentInstance, "souscrireReceptionMatrice");
            const spy4: jasmine.Spy = spyOn<any>(fixture.componentInstance, "souscrireMotsTrouves");
            const spy5: jasmine.Spy = spyOn<any>(fixture.componentInstance, "souscrireMotsPerdus");

            fixture.detectChanges();

            expect(spy1).toHaveBeenCalled();
            expect(spy2).toHaveBeenCalled();
            expect(spy3).toHaveBeenCalled();
            expect(spy4).toHaveBeenCalled();
            expect(spy5).toHaveBeenCalled();
        });
    }); 

    describe("InitialiserSouscriptions function", () => {
        beforeEach(() => {
            fixture.componentInstance.mots = mockMots;
            fixture.componentInstance.matriceDesMotsSurGrille = mockMatrice;

            mockServiceInteractionComp.serviceReceptionMotSelectionne.and.returnValue(of(unMotHorizontal));
            mockServiceInteractionComp.serviceReceptionMots.and.returnValue(of(mockMots));
            mockServiceInteractionComp.serviceReceptionMatriceLettres.and.returnValue(of(mockMatrice));
            mockServiceInteractionComp.serviceReceptionMotTrouve.and.returnValue(of(unMotVertical));
            mockServiceInteractionComp.serviceReceptionMotPerdu.and.returnValue(of(unMotHorizontal));
        });

        it("Should call all the subscriptions function", () => {
            const spy1: jasmine.Spy = spyOn<any>(fixture.componentInstance, "souscrireReceptionMots");
            const spy2: jasmine.Spy = spyOn<any>(fixture.componentInstance, "souscrireSelectionMots");
            const spy3: jasmine.Spy = spyOn<any>(fixture.componentInstance, "souscrireReceptionMatrice");
            const spy4: jasmine.Spy = spyOn<any>(fixture.componentInstance, "souscrireMotsTrouves");
            const spy5: jasmine.Spy = spyOn<any>(fixture.componentInstance, "souscrireMotsPerdus");

            fixture.componentInstance["initialiserSouscriptions"]();

            expect(spy1).toHaveBeenCalled();
            expect(spy2).toHaveBeenCalled();
            expect(spy3).toHaveBeenCalled();
            expect(spy4).toHaveBeenCalled();
            expect(spy5).toHaveBeenCalled();
        });
    }); 

    describe("souscrireSelectionMots function", () => {
        beforeEach(() => {
            fixture.componentInstance.mots = mockMots;
            fixture.componentInstance.matriceDesMotsSurGrille = mockMatrice;
            mockServiceInteractionComp.serviceReceptionMotSelectionne.and.returnValue(of(unMotHorizontal));
        });

        it("Should receive the mot selectionne", () => {
            fixture.componentInstance["souscrireSelectionMots"]();

            const result: Mot = fixture.componentInstance["_motSelectionne"];

            expect(result).toEqual(unMotHorizontal);
        });
        it("Should call the miseAJourMotSelectionne function", () => {
            const spy: jasmine.Spy = spyOn<any>(fixture.componentInstance, "miseAJourMotSelectionne");

            fixture.componentInstance["souscrireSelectionMots"]();

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("ChangementMot function", () => {
        beforeEach(() => {
            fixture.componentInstance.mots = mockMots;
        });

        it("Should set the property motSelectionne with the good value.", () => {
            fixture.componentInstance["changementMot"](unMotHorizontal);

            expect(fixture.componentInstance.motSelectionne).toBe(unMotHorizontal);
        });
        it("Should set the property activer of motSelectionne to true.", () => {
            fixture.componentInstance["changementMot"](unMotHorizontal);

            expect(fixture.componentInstance.motSelectionne.activer).toBeTruthy();
        });
    });

    describe("ChangementMotsSelectionne function", () => {
        beforeEach(() => {
            fixture.componentInstance.mots = mockMots;
            fixture.componentInstance.matriceDesMotsSurGrille = mockMatrice;
        });
        it("Should call the miseAJourMotSelectionne function if motTrouve property is false", () => {
            const spy: jasmine.Spy = spyOn<any>(fixture.componentInstance, "miseAJourMotSelectionne");

            fixture.componentInstance.changementMotSelectionne(unMotHorizontal);

            expect(spy).toHaveBeenCalled();
        });
        it("Should call the envoieMotSelectionne function if motTrouve property is false", () => {
            const spy: jasmine.Spy = spyOn<any>(fixture.componentInstance, "envoieMotSelectionne");

            fixture.componentInstance.changementMotSelectionne(unMotHorizontal);

            expect(spy).toHaveBeenCalled();
        });
        it("Should not call the miseAJourMotSelectionne function if motTrouve property is true", () => {
            const spy: jasmine.Spy = spyOn<any>(fixture.componentInstance, "miseAJourMotSelectionne");

            fixture.componentInstance.changementMotSelectionne(unMotHorizontalTrouve);

            expect(spy).not.toHaveBeenCalled();
        });
        it("Should not call the envoieMotSelectionne function if motTrouve property is true", () => {
            const spy: jasmine.Spy = spyOn<any>(fixture.componentInstance, "envoieMotSelectionne");

            fixture.componentInstance.changementMotSelectionne(unMotHorizontalTrouve);

            expect(spy).not.toHaveBeenCalled();
        });
    });

    describe("MiseAJourMotSelectionne function", () => {
        beforeEach(() => {
            fixture.componentInstance.mots = mockMots;
            fixture.componentInstance.matriceDesMotsSurGrille = mockMatrice;
        });

        it("Should call the changementMot function", () => {
            const spy: jasmine.Spy = spyOn<any>(fixture.componentInstance, "changementMot");

            fixture.componentInstance["miseAJourMotSelectionne"](unMotHorizontal);

            expect(spy).toHaveBeenCalled();
        });
        it("Should call the decouvrirCases function", () => {
            const spy: jasmine.Spy = spyOn<any>(fixture.componentInstance, "decouvrirCases");

            fixture.componentInstance["miseAJourMotSelectionne"](unMotHorizontal);

            expect(spy).toHaveBeenCalled();
        });
    });
});
