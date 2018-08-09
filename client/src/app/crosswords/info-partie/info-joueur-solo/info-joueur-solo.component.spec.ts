import { TestBed, ComponentFixture } from "@angular/core/testing";
import { InfoJoueurSoloComponent } from "./info-joueur-solo.component";
import { InfojoueurService } from "../../service-info-joueur/infojoueur.service";
import { ServiceInteractionComponent } from "../../service-interaction-component/service-interaction-component";
import { ServiceHttp } from "../../serviceHttp/http-request.service";
import { Router } from "@angular/router";

describe("Info Joueur Solo", () => {
    let fixture: ComponentFixture<InfoJoueurSoloComponent>;
    let component: InfoJoueurSoloComponent;
    let mockInfoJoueurService: jasmine.SpyObj<InfojoueurService>;
    let mockServiceInteraction: jasmine.SpyObj<ServiceInteractionComponent>;
    let mockServiceHttp: jasmine.SpyObj<ServiceHttp>;
    let mockRouter: jasmine.SpyObj<Router>;

    beforeEach(() => {
        mockInfoJoueurService = jasmine.createSpyObj(["serviceReceptionPointage"]);
        mockServiceInteraction = jasmine.createSpyObj(["serviceReceptionMots"]);
        mockServiceHttp = jasmine.createSpyObj(["difficulte"]);
        mockRouter = jasmine.createSpyObj(["navigateByUrl"]);

        TestBed.configureTestingModule({
            declarations: [ InfoJoueurSoloComponent ],
            imports: [],
            providers: [
                { provide: InfojoueurService, useValue: mockInfoJoueurService },
                { provide: ServiceInteractionComponent, useValue: mockServiceInteraction },
                { provide: ServiceHttp, useValue: mockServiceHttp },
                { provide: Router, useValue: mockRouter }
            ]
        });

        fixture = TestBed.createComponent(InfoJoueurSoloComponent);
        component = fixture.componentInstance;
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });
});
