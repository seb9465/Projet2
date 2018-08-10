import { MainGrilleComponent } from "./main-grille.component";
import { ComponentFixture, TestBed } from "../../../../node_modules/@angular/core/testing";
import { ServiceHttp } from "../serviceHttp/http-request.service";
import { DefinitionVComponent } from "../definition/definitionV.component";
import { DefinitionHComponent } from "../definition/definitionH.component";
import { GrilleComponent } from "./../grille/solo/grille.component";
import { InfoJoueurSoloComponent } from "./../info-partie/info-joueur-solo/info-joueur-solo.component";
import { RouterTestingModule } from "@angular/router/testing";
describe("Main Grille Solo Component", () => {
    let fixture: ComponentFixture<MainGrilleComponent>;
    let component: MainGrilleComponent;
    let mockServiceHttp: jasmine.SpyObj<ServiceHttp>;

    beforeEach(() => {
        mockServiceHttp = jasmine.createSpyObj(["obtenirMots"]);

        TestBed.configureTestingModule({
            declarations: [
                DefinitionVComponent,
                DefinitionHComponent,
                GrilleComponent,
                InfoJoueurSoloComponent,
                MainGrilleComponent
            ],
            imports: [RouterTestingModule],
            providers: [
                { provide: ServiceHttp, useValue: mockServiceHttp },
            ]
        });

        fixture = TestBed.createComponent(MainGrilleComponent);
        component = fixture.componentInstance;
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });
});
