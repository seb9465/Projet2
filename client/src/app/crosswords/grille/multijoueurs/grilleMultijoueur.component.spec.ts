import { ComponentFixture, TestBed } from "../../../../../node_modules/@angular/core/testing";
import { GrilleMultijoueurComponent } from "./grilleMultijoueur.component";
import { RouterTestingModule } from "@angular/router/testing";
import { InfojoueurService } from "./../../service-info-joueur/infojoueur.service";
import { SocketService } from "../../service-socket/service-socket";
import { ServiceInteractionComponent } from "../../service-interaction-component/service-interaction-component";

describe("Grille Multijoueur", () => {
    let fixture: ComponentFixture<GrilleMultijoueurComponent>;
    let component: GrilleMultijoueurComponent;
    let mockServicePointage: jasmine.SpyObj<InfojoueurService>;
    let mockServiceSocket: jasmine.SpyObj<SocketService>;
    let mockServiceInteraction: jasmine.SpyObj<ServiceInteractionComponent>;

    /* tslint:disable-next-line:max-func-body-length */
    beforeEach(() => {
        mockServicePointage = jasmine.createSpyObj([ "incrementationNbMotDecouv" ]);
        mockServiceSocket = jasmine.createSpyObj([
            "commencerPartie",
            "envoyerMotSelectFromDef",
            "envoyerTentative",
            "finPartie",
            "recevoirMotSelect",
            "recevoirMotSelectJ2",
            "recevoirMotDef",
            "recevoirMotTrouve",
            "recevoirMotPerdu",
            "rejouerPartie",
            "telechargerPaquetPartie"
        ]);
        mockServiceInteraction = jasmine.createSpyObj([
            "mots",
            "serviceEnvoieMot",
            "serviceEnvoieMots",
            "serviceEnvoieMotSelectionne",
            "serviceEnvoieMotPerdu",
            "serviceEnvoieMotTrouve",
            "serviceReceptionMots",
            "serviceReceptionMotSelectionne",
            "souscrireServiceSocket",
        ]);

        TestBed.configureTestingModule({
            declarations: [GrilleMultijoueurComponent],
            imports: [RouterTestingModule],
            providers: [
                { provide: InfojoueurService, useValue: mockServicePointage },
                { provide: SocketService, useValue: mockServiceSocket },
                { provide: ServiceInteractionComponent, useValue: mockServiceInteraction },
            ]
        });

        fixture = TestBed.createComponent(GrilleMultijoueurComponent);
        component = fixture.componentInstance;
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });
});
