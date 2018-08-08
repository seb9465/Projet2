import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GrilleComponent } from "./../solo/grille.component";
import { ServiceInteractionComponent } from "../../service-interaction-component/service-interaction-component";
import { InfojoueurService } from "../../service-info-joueur/infojoueur.service";

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
});
