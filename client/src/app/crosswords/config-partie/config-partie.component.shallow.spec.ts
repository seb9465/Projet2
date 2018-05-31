import { TestBed, ComponentFixture } from "@angular/core/testing";
import { ConfigPartieComponent } from "./config-partie.component";
import { ServiceHttp } from "../serviceHttp/http-request.service";
import { SocketService } from "../service-socket/service-socket";
import { Router } from "@angular/router";

describe("ConfigPartie (shallow test)", () => {
    let fixture: ComponentFixture<ConfigPartieComponent>;
    let mockServiceHTTP: jasmine.SpyObj<ServiceHttp>;
    let mockServiceSocket: jasmine.SpyObj<SocketService>;
    let mockRouter: jasmine.SpyObj<Router>;

    beforeEach(() => {
        mockServiceHTTP = jasmine.createSpyObj(["difficulte"]);
        mockServiceSocket = jasmine.createSpyObj([
            "chargementComplete", "creerPartie", "rejoindrePartie", "recevoirListePartie",
            "demandeDeGrille", "envoyerGrille"
        ]);
        mockRouter = jasmine.createSpyObj(["navigateByUrl"]);

        TestBed.configureTestingModule({
            declarations: [ConfigPartieComponent],
            providers: [
                { provide: ServiceHttp, useValue: mockServiceHTTP },
                { provide: SocketService, useValue: mockServiceSocket },
                { provide: Router, useValue: mockRouter }
            ]
        });

        fixture = TestBed.createComponent(ConfigPartieComponent);
    });

    it("should do nothing", () => {
        expect(true).toBe(true);
    });
});
