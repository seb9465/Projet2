import { TestBed, ComponentFixture } from "@angular/core/testing";
import { ConfigPartieComponent } from "./config-partie.component";
import { ServiceHttp } from "../serviceHttp/http-request.service";
import { SocketService } from "../service-socket/service-socket";
import { Router } from "@angular/router";
import { Difficulte } from "../../../../../common/communication/Difficulte";
import { of } from "rxjs/observable/of";

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

    describe("should set difficulte correctly", () => {
        it("when receiving undefined value", () => {
            fixture.componentInstance.ajouterDifficulte(undefined);

            expect(fixture.componentInstance.difficultee).toBe(undefined);
        });

        it("when receiving Facile difficultee", () => {
            fixture.componentInstance.ajouterDifficulte(Difficulte.Facile);

            expect(fixture.componentInstance.difficultee).toEqual("facile");
        });

        it("when receiving Facile difficultee", () => {
            fixture.componentInstance.ajouterDifficulte(Difficulte.Normal);

            expect(fixture.componentInstance.difficultee).toEqual("normal");
        });

        it("when receiving Facile difficultee", () => {
            fixture.componentInstance.ajouterDifficulte(Difficulte.Difficile);

            expect(fixture.componentInstance.difficultee).toEqual("difficile");
        });
    });

    it("should call rejoindrePartie from the service when commencerPartie is called", () => {
        mockServiceSocket.chargementComplete.and.returnValue(of());

        fixture.componentInstance["commencerPartie"]();

        expect(mockServiceSocket.chargementComplete).toHaveBeenCalled();
    });
});
