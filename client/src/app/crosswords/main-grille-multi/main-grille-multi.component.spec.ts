import { MainGrilleMultiComponent } from "./main-grille-multi.component";
import { ComponentFixture, TestBed } from "../../../../node_modules/@angular/core/testing";
import { DefinitionVComponent } from "./../definition/definitionV.component";
import { DefinitionHComponent } from "./../definition/definitionH.component";
import { RouterTestingModule } from "@angular/router/testing";
import { GrilleMultijoueurComponent } from "./../grille/multijoueurs/grilleMultijoueur.component";
import { InfoPartieMultijoueurComponent } from "./../info-partie/info-partie-multijoueur/info-partie-multijoueur.component";
import { ServiceHttp } from "./../serviceHttp/http-request.service";
import { SocketService } from "../service-socket/service-socket";
describe("Main Grille Multijoueur Component", () => {
    let fixture: ComponentFixture<MainGrilleMultiComponent>;
    let component: MainGrilleMultiComponent;
    let mockServiceHttp: jasmine.SpyObj<ServiceHttp>;
    let mockSocketService: jasmine.SpyObj<SocketService>;

    beforeEach(() => {
        mockServiceHttp = jasmine.createSpyObj([""]);
        mockSocketService = jasmine.createSpyObj(["commencerPartie"]);

        TestBed.configureTestingModule({
            declarations: [
                DefinitionVComponent,
                DefinitionHComponent,
                GrilleMultijoueurComponent,
                InfoPartieMultijoueurComponent,
                MainGrilleMultiComponent
            ],
            imports: [RouterTestingModule],
            providers: [
                { provide: ServiceHttp, useValue: mockServiceHttp },
                { provide: SocketService, useValue: mockSocketService },
            ]
        });

        fixture = TestBed.createComponent(MainGrilleMultiComponent);
        component = fixture.componentInstance;
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });
});
