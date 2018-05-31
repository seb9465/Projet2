import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DefinitionComponent } from "./definition.component";
import { ServiceInteractionComponent } from "../service-interaction-component/service-interaction-component";
import { of } from "rxjs/observable/of";
import { Mot } from "../objetsTest/mot";
import { grilleLettres } from "../objetsTest/objetsTest";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("Definition (shallow tests)", () => {
    let fixture: ComponentFixture<DefinitionComponent>;
    let mockListeMotsService: jasmine.SpyObj<ServiceInteractionComponent>;
    const MOT_NON_TROUVE: Mot = {
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
    };
    const MOT_TROUVE: Mot = {
        definitions: [{definition: "destroyed physically or morally"}],
        estVertical: true,
        longueur: 9,
        mot: "destroyed",
        premierX: 2,
        premierY: 0,
        activer: false,
        motTrouve: true,
        cheat: false,
        positionsLettres: []
    };
    const MOTS: Mot[] = [
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
        }
    ];

    beforeEach(() => {
        mockListeMotsService = jasmine.createSpyObj([
            "serviceReceptionMotSelectionne", "serviceReceptionMots",
            "serviceReceptionMatriceLettres",
            "serviceEnvoieMotSelectionne", "serviceEnvoieMatriceLettres"]);
        TestBed.configureTestingModule({
            declarations: [DefinitionComponent],
            providers: [{ provide: ServiceInteractionComponent, useValue: mockListeMotsService }],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(DefinitionComponent);
    });

    it("should do nothing", () => {
        expect(true).toBe(true);
    });

    it("should set mots correctly from the service", () => {
        mockListeMotsService.serviceReceptionMots.and.returnValue(of(MOTS));

        fixture.componentInstance["souscrireReceptionMots"]();

        expect(fixture.componentInstance.mots.length).toBe(1);
    });

    it("should set motSelectionne correctly from the service", () => {
        const spyFunction1: jasmine.Spy = spyOn<any>(fixture.componentInstance, "miseAJourMotSelectionne");
        fixture.componentInstance.mots = MOTS;
        mockListeMotsService.serviceReceptionMotSelectionne.and.returnValue(of(MOT_NON_TROUVE));

        fixture.componentInstance["souscrireSelectionMots"]();

        expect(spyFunction1).toHaveBeenCalled();
        expect(fixture.componentInstance.motSelectionne).toBe(MOT_NON_TROUVE);
    });

    it("should set matriceDesMotsSurGrille correctly", () => {
        mockListeMotsService.serviceReceptionMatriceLettres.and.returnValue(of(grilleLettres));

        fixture.componentInstance["souscrireReceptionMatrice"]();

        expect(fixture.componentInstance.matriceDesMotsSurGrille.length).toBe(10);
    });

    it("should change the selected word if word not already found", () => {
        const spyFunction1: jasmine.Spy = spyOn<any>(fixture.componentInstance, "miseAJourMotSelectionne");
        const spyFunction2: jasmine.Spy = spyOn<any>(fixture.componentInstance, "envoieMotSelectionne");
        fixture.componentInstance.mots = MOTS;
        fixture.componentInstance.matriceDesMotsSurGrille = grilleLettres;

        fixture.componentInstance.changementMotSelectionne(MOT_NON_TROUVE);

        expect(spyFunction1).toHaveBeenCalled();
        expect(spyFunction2).toHaveBeenCalled();
    });

    it("should not change the selected word if word already found", () => {
        const spyFunction1: jasmine.Spy = spyOn<any>(fixture.componentInstance, "miseAJourMotSelectionne");
        const spyFunction2: jasmine.Spy = spyOn<any>(fixture.componentInstance, "envoieMotSelectionne");
        fixture.componentInstance.mots = MOTS;
        fixture.componentInstance.matriceDesMotsSurGrille = grilleLettres;

        fixture.componentInstance.changementMotSelectionne(MOT_TROUVE);

        expect(spyFunction1).not.toHaveBeenCalled();
        expect(spyFunction2).not.toHaveBeenCalled();
    });

    it("should call serviceEnvoieMotSelectionne from the service when calling envoieMotSelectionne", () => {
        fixture.componentInstance.motSelectionne = MOT_NON_TROUVE;

        fixture.componentInstance["envoieMotSelectionne"]();

        expect(mockListeMotsService.serviceEnvoieMotSelectionne).toHaveBeenCalled();
    });
});
