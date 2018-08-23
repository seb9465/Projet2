import { TestBed } from "../../../../node_modules/@angular/core/testing";
import { GestionnaireCameraPiste, PLAN_ELOIGNE, PLAN_RAPPROCHE, ZOOM_DEFAUT } from "./GestionnaireCameraPiste";
import { OrthographicCamera } from "three";

describe("Gestionnaire Camera Piste service", () => {
    let service: GestionnaireCameraPiste;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [GestionnaireCameraPiste],
        });

        service = TestBed.get(GestionnaireCameraPiste);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(service).toBeDefined();
    });

    describe("Constantes de la camera", () => {
        it("Distances des plans sont logiques", () => {
            expect(PLAN_RAPPROCHE <= PLAN_ELOIGNE).toBeTruthy();
            expect(PLAN_RAPPROCHE).toBeLessThanOrEqual(0);
            expect(PLAN_ELOIGNE).toBeGreaterThanOrEqual(0);
        });

        it("Zoom est correcte", () => {
            expect(ZOOM_DEFAUT).toBeGreaterThan(0);
        });
    });

    it("Le redimenssionnement est bien effectue", () => {
        if (service.camera instanceof OrthographicCamera) {
            const LARGEUR: number = 640;
            const HAUTEUR: number = 480;
            expect(service.camera.right - service.camera.left).not.toEqual(LARGEUR);
            expect(service.camera.top - service.camera.bottom).not.toEqual(HAUTEUR);
            service.redimensionnement(LARGEUR, HAUTEUR);
            expect(service.camera.right - service.camera.left).toEqual(LARGEUR);
            expect(service.camera.top - service.camera.bottom).toEqual(HAUTEUR);
        } else {
            expect(false).toBeTruthy();
        }
    });

    afterEach(() => {
        service = null;
    });
});
