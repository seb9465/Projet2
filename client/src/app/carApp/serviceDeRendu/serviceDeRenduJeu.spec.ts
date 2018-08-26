import { ServiceDeRenduJeu } from "./serviceDeRenduJeu";
import { TestBed } from "@angular/core/testing";
import { GestionnaireScene } from "../scene/GestionnaireScene";
import { GestionnaireEcran } from "../ecran/gestionnaireEcran";
import { GestionnaireCamera } from "../camera/GestionnaireCamera";

describe("Gestionnaire Scene Piste Service", () => {
    let service: ServiceDeRenduJeu;
    let mockGestionnaireScene: GestionnaireScene;
    let mockGestionnaireEcran: GestionnaireEcran;
    let mockGestionnaireCamera: GestionnaireCamera;

    beforeEach(() => {
        mockGestionnaireScene = jasmine.createSpyObj([
            "miseAJour",
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
                ServiceDeRenduJeu,
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

    describe("Constructeur", () => {
        it("Objet est construit", () => {
            expect(service).toBeDefined();
        });
    });

    // describe("Initialisation", () => {
    //     it("Boucle de rendue partie", async () => {
    //         spyOn(service["renderer"], "render");
    //         await service.initialiser();
    //         expect(service["renderer"].render).toHaveBeenCalled();
    //     });
    // });

    // describe("Redimensionnement", () => {
    //     it("Renderer mis à jour", async () => {
    //         spyOn(service["renderer"], "setSize");
    //         service.redimensionnement();
    //         expect(service["renderer"].setSize).toHaveBeenCalled();
    //     });

    //     it("Cameras mises à jour", async () => {
    //         spyOn(service["gestionnaireCamera"], "redimensionnement");
    //         service.redimensionnement();
    //         expect(service["gestionnaireCamera"].redimensionnement).toHaveBeenCalled();
    //     });
    // });

    afterEach(() => {
        service = null;
    });
});
