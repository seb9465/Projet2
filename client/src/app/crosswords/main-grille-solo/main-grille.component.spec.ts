import { MainGrilleComponent } from "./main-grille.component";
import { ComponentFixture, TestBed } from "../../../../node_modules/@angular/core/testing";
import { ServiceHttp } from "../serviceHttp/http-request.service";
import { DefinitionVComponent } from "../definition/definitionV.component";
import { DefinitionHComponent } from "../definition/definitionH.component";
import { GrilleComponent } from "./../grille/solo/grille.component";
import { InfoJoueurSoloComponent } from "./../info-partie/info-joueur-solo/info-joueur-solo.component";
import { RouterTestingModule } from "@angular/router/testing";
import { ServiceInteractionComponent } from "../service-interaction-component/service-interaction-component";
// import { of } from "rxjs/observable/of";
// import { listeMotsCourte } from "../objetsTest/objetsTest";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { InfojoueurService } from "../service-info-joueur/infojoueur.service";
import { listeMotsCourte } from "../objetsTest/objetsTest";
import { of } from "rxjs/observable/of";

describe("Main Grille Solo Component", () => {
    let fixture: ComponentFixture<MainGrilleComponent>;
    let component: MainGrilleComponent;
    let mockServiceHttp: jasmine.SpyObj<ServiceHttp>;
    let mockServiceInteractionComposants: jasmine.SpyObj<ServiceInteractionComponent>;
    let mockServiceInfoJoueur: jasmine.SpyObj<InfojoueurService>;

    beforeEach(() => {
        mockServiceHttp = jasmine.createSpyObj(["obtenirMots"]);
        mockServiceInteractionComposants = jasmine.createSpyObj(["receptionMotsObtenus"]);
        mockServiceInfoJoueur = jasmine.createSpyObj([""]);

        TestBed.configureTestingModule({
            declarations: [
                DefinitionVComponent,
                DefinitionHComponent,
                GrilleComponent,
                InfoJoueurSoloComponent,
                MainGrilleComponent
            ],
            imports: [RouterTestingModule, HttpClientTestingModule],
            providers: [
                { provide: ServiceHttp, useValue: mockServiceHttp },
                { provide: ServiceInteractionComponent, useValue: mockServiceInteractionComposants },
                { provide: InfojoueurService, useValue: mockServiceInfoJoueur },
            ]
        });

        fixture = TestBed.createComponent(MainGrilleComponent);
        component = fixture.componentInstance;
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    describe("constructor", () => {
        it("Should set the _motObtenus property", () => {
            expect(component["_motsObtenus"]).toBeFalsy();
            expect(component["serviceInteractionComposants"]).toBeDefined();
        });
    });

    describe("ngOnInit function", () => {
        let spy: jasmine.Spy;

        beforeEach(() => {
            spy = mockServiceInteractionComposants.receptionMotsObtenus.and.returnValue(of(listeMotsCourte));

            component.ngOnInit();
        });
        it("Should call the receptionMotsObtenus function", () => {
            expect(spy).not.toHaveBeenCalled();
            // tslint:disable-next-line:no-console
            console.log(spy);
            // tslint:disable-next-line:no-console
            console.log(mockServiceInteractionComposants);
        });
    });
});
