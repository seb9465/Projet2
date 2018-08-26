import { GestionnaireScenePiste } from "./GestionnaireScenePiste";
import { TestBed } from "../../../../node_modules/@angular/core/testing";
import { GestionnaireEditionPiste } from "../editeurPiste/gestionnaireEditionPiste";
// import { PLAN_RAPPROCHE, PLAN_ELOIGNE } from "../camera/GestionnaireCameraPiste";
// import { Object3D, PlaneGeometry, Mesh } from "three";

describe("Gestionnaire Scene Piste Service", () => {
    let service: GestionnaireScenePiste;
    let mockGestionnaireEditionPiste: GestionnaireEditionPiste;

    beforeEach(() => {
        mockGestionnaireEditionPiste = jasmine.createSpyObj(["piste"]);

        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                GestionnaireScenePiste,
                { provide: GestionnaireEditionPiste, useValue: mockGestionnaireEditionPiste },
            ],
        });

        service = TestBed.get(GestionnaireScenePiste);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    describe("Constructeur", () => {
        it("Objet est construit", () => {
            expect(service).toBeDefined();
        });
    });

    // describe("Initialisation", () => {
    //     // it("La scene comporte le bon nombre d'elements", () => {
    //     //     const NOMBRE_ENFANTS: number = 2;
    //     //     expect(service.children.length).toEqual(NOMBRE_ENFANTS);
    //     // });

    //     it("La profondeur est visible pour la camera", () => {
    //         expect(PROFONDEUR_SCENE).toBeGreaterThanOrEqual(PLAN_RAPPROCHE);
    //         expect(PROFONDEUR_SCENE).toBeLessThanOrEqual(PLAN_ELOIGNE);
    //     });

    //     it("Le decor est a la bonne profondeur", () => {
    //         const OBJECT: Object3D = service.children[0];
    //         if (OBJECT instanceof Mesh && OBJECT.geometry instanceof PlaneGeometry) {
    //             expect(OBJECT.geometry.vertices[0].y).toBeCloseTo(PROFONDEUR_SCENE);
    //         } else {
    //             expect(false).toBeTruthy();
    //         }
    //     });
    // });

    afterEach(() => {
        service = null;
    });
});
