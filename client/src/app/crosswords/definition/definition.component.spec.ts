import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DefinitionComponent } from "./definition.component";
import { ServiceInteractionComponent } from "../service-interaction-component/service-interaction-component";

describe("DefinitionComponent", () => {
    let fixture: ComponentFixture<DefinitionComponent>;
    let mockServiceInteractionComp: jasmine.SpyObj<ServiceInteractionComponent>;

    beforeEach(() => {
        // Ajouter les noms d'attributs utilisés de Service Interaction ici.
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
                { provide: ServiceInteractionComponent, useValue: mockServiceInteractionComp}
            ]
        });

        fixture = TestBed.createComponent(DefinitionComponent);
    });

    it("should do nothing", () => {
        expect(true).toBe(true);
    });
});
