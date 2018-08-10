import { ComponentFixture, TestBed } from "@angular/core/testing";
import { InfoPartieMultijoueurComponent } from "./info-partie-multijoueur.component";
import { SocketService } from "../../service-socket/service-socket";
import { RouterTestingModule } from "../../../../../node_modules/@angular/router/testing";

describe("Info Joueur Multijoueur Component", () => {
    let fixture: ComponentFixture<InfoPartieMultijoueurComponent>;
    let component: InfoPartieMultijoueurComponent;
    let mockSocketService: jasmine.SpyObj<SocketService>;

    beforeEach(() => {
        mockSocketService = jasmine.createSpyObj([
            "recevoirScore",
            "telechargerPaquetPartie",
        ]);

        TestBed.configureTestingModule({
            declarations: [InfoPartieMultijoueurComponent],
            imports: [RouterTestingModule],
            providers: [
                { provide: SocketService, useValue: mockSocketService },
            ]
        });

        fixture = TestBed.createComponent(InfoPartieMultijoueurComponent);
        component = fixture.componentInstance;
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });
});
