import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DefinitionComponent } from "./definition.component";
import { ServiceInteractionComponent } from "../service-interaction-component/service-interaction-component";
import { of } from "rxjs/observable/of";
import { Mot } from "../objetsTest/mot";
import { grilleLettres } from "../objetsTest/objetsTest";

describe("Definition (shallow tests)", () => {
    let fixture: ComponentFixture<DefinitionComponent>;
    let mockListeMotsService: jasmine.SpyObj<ServiceInteractionComponent>;
    let MOTS: Mot[];
    const MOT: Mot = {
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

    beforeEach(() => {
        MOTS = [
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
        mockListeMotsService = jasmine.createSpyObj([
            "serviceReceptionMotSelectionne", "serviceReceptionMots",
            "serviceReceptionMatriceLettres", "serviceReceptionMotTrouve", "serviceReceptionMotPerdu",
            "serviceEnvoieMotSelectionne", "serviceEnvoieMatriceLettres"]);
        TestBed.configureTestingModule({
            declarations: [DefinitionComponent],
            providers: [{ provide: ServiceInteractionComponent, useValue: mockListeMotsService }]
        });

        fixture = TestBed.createComponent(DefinitionComponent);
    });

    it("should do nothing", () => {
        expect(true).toBe(true);
    });

    it("should set mots corretly from the service", () => {
        mockListeMotsService.serviceReceptionMots.and.returnValue(of(MOTS));
        fixture.detectChanges();

        expect(fixture.componentInstance.mots.length).toBe(1);
        expect(fixture.componentInstance.mots[0]).toBe(MOTS[0]);
    });

    describe("should set motSelectionne correctly from the service", () => {
        it("by having the correct word", () => {
            mockListeMotsService.serviceReceptionMotSelectionne.and.returnValue(of(MOT));
            fixture.detectChanges();

            expect(fixture.componentInstance.motSelectionne).toBe(MOT);
        });
    });

    it("should set matriceDesMotsSurGrille correctly", () => {
        mockListeMotsService.serviceReceptionMatriceLettres.and.returnValue(of(grilleLettres));
        fixture.detectChanges();

        expect(fixture.componentInstance.matriceDesMotsSurGrille.length).toBe(grilleLettres.length);
        expect(fixture.componentInstance.matriceDesMotsSurGrille[0]).toBe(grilleLettres[0]);
    });
});
