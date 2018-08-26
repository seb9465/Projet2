import { TestBed } from "@angular/core/testing";
import { GestionnaireScene } from "../scene/GestionnaireScene";
import { GestionnaireEcran } from "../ecran/gestionnaireEcran";
import { GestionnaireCamera } from "../camera/GestionnaireCamera";
import { ServiceDeRenduPistes } from "./serviceDeRenduPistes";

describe("Gestionnaire Scene Piste Service", () => {
    let service: ServiceDeRenduPistes;
    let mockGestionnaireScene: GestionnaireScene;
    let mockGestionnaireEcran: GestionnaireEcran;
    let mockGestionnaireCamera: GestionnaireCamera;

    beforeEach(() => {
        mockGestionnaireScene = jasmine.createSpyObj([
           "scene",
        ]);
        mockGestionnaireEcran = jasmine.createSpyObj([
            "ajouterElementConteneur",
            "largeur",
            "hauteur",
        ]);
        mockGestionnaireCamera = jasmine.createSpyObj([
            "redimenssionnement",
            "camera",
        ]);

        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                ServiceDeRenduPistes,
                { provide: GestionnaireScene, useValue: mockGestionnaireScene },
                { provide: GestionnaireEcran, useValue: mockGestionnaireEcran },
                { provide: GestionnaireCamera, useValue: mockGestionnaireCamera },
            ],
        });

        service = TestBed.get(GestionnaireScene);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    afterEach(() => {
        service = null;
    });
});
