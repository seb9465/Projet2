import { TestBed, ComponentFixture } from "@angular/core/testing";
import { InfoJoueurSoloComponent } from "./info-joueur-solo.component";
import { InfojoueurService } from "../../service-info-joueur/infojoueur.service";
import { ServiceInteractionComponent } from "../../service-interaction-component/service-interaction-component";
import { ServiceHttp } from "../../serviceHttp/http-request.service";
import { Router } from "@angular/router";
import { ABREVIATION_HEURES, ABREVIATION_MINUTES, ABREVIATION_SECONDES } from "../../constantes";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Difficulte } from "../../../../../../common/communication/Difficulte";
import { listeMotsLongue, listeMotsCourte } from "../../objetsTest/objetsTest";
import { of } from "../../../../../node_modules/rxjs/observable/of";

describe("Info Joueur Solo", () => {
    let fixture: ComponentFixture<InfoJoueurSoloComponent>;
    let component: InfoJoueurSoloComponent;
    let mockInfoJoueurService: jasmine.SpyObj<InfojoueurService>;
    let mockServiceInteraction: jasmine.SpyObj<ServiceInteractionComponent>;
    let mockServiceHttp: jasmine.SpyObj<ServiceHttp>;
    let mockRouter: jasmine.SpyObj<Router>;

    beforeEach(() => {
        mockInfoJoueurService = jasmine.createSpyObj(["serviceReceptionPointage"]);
        mockServiceInteraction = jasmine.createSpyObj([
            "serviceReceptionMots",
            "receptionMotsObtenus"
        ]);
        mockServiceHttp = jasmine.createSpyObj(["difficulte"]);
        mockRouter = jasmine.createSpyObj(["navigateByUrl"]);

        TestBed.configureTestingModule({
            declarations: [ InfoJoueurSoloComponent ],
            imports: [HttpClientTestingModule],
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

    it("Should be defined", () => {
        expect(component).toBeDefined();
    });

    describe("Constructor function", () => {
        it("Should set the _nomJoueur with initial value", () => {
            expect(component["_nomJoueur"]).toBe("Nom du joueur");
        });
        it("Should set the _nbMotsDecouverts with initial value", () => {
            expect(component["_nbMotsDecouverts"]).toEqual(0);
        });
        it("Should set the _difficulte with initial value", () => {
            expect(component["_difficulte"]).toBe(Difficulte.Facile.toString());
        });
        it("Should define _listeMots", () => {
            expect(component["_listeMots"]).toBeDefined();
        });
        it("Should define _formattedTimer", () => {
            expect(component["_formatedTimer"]).toBeDefined();
        });
    });

    describe("InitialiserSouscriptions function", () => {
        let spyMotsObtenus: jasmine.Spy;
        let spyListeMots: jasmine.Spy;
        let spyMotsDecouverts: jasmine.Spy;

        beforeEach(() => {
            spyMotsObtenus = spyOn<any>(component, "souscrireMotsObtenus");
            spyListeMots = spyOn<any>(component, "souscrireListeDeMots");
            spyMotsDecouverts = spyOn<any>(component, "souscrireMotsDecouverts");

            component["initialiserSouscriptions"]();
        });


        it("Should call the souscrireMotsObtenus function", () => {
            expect(spyMotsObtenus).toHaveBeenCalled();
        });
        it("Should call the souscrireListeDeMots function", () => {
            expect(spyListeMots).toHaveBeenCalled();
        });
        it("Should call the souscrireMotsDecouverts function", () => {
            expect(spyMotsDecouverts).toHaveBeenCalled();
        });
    });

    describe("souscrireListeDesMots function", () => {
        it("Should give set _listeMots with the good value", () => {
            component["_listeMots"] = listeMotsCourte;

            mockServiceInteraction.serviceReceptionMots.and.callFake(() => {
                return of(listeMotsLongue);
            });

            component["souscrireListeDeMots"]();

            expect(component["_listeMots"]).toBe(listeMotsLongue);
            expect(component["_listeMots"]).not.toBe(listeMotsCourte);
        });
    });

    describe("formatterTimer function", () => {
        it("Should format correctly the timer", () => {
            const expectedResult: string = "0" + ABREVIATION_HEURES +
                                        "0" + ABREVIATION_MINUTES +
                                        "0" + ABREVIATION_SECONDES;
            component["_timer"] = 0;

            component.formatterTimer();

            expect(component["_formatedTimer"]).toEqual(expectedResult);
        });
    });
});
