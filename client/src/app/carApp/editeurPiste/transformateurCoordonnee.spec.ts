import { TransformateurCoordonnees } from "./transformateurCoordonnees";
import { ICamera } from "../camera/ICamera";
import { GestionnaireEcran } from "../ecran/gestionnaireEcran";

describe("Transformateur Coordonnee class", () => {
    let cls: TransformateurCoordonnees;
    let mockGestionnaireCamera: ICamera;
    let mockGestionnaireEcran: GestionnaireEcran;

    beforeEach(() => {
        mockGestionnaireCamera = jasmine.createSpyObj(["camera"]);
        mockGestionnaireEcran = jasmine.createSpyObj(["largeur", "hauteur", "estLaBonneCible"]);
        cls = new TransformateurCoordonnees(mockGestionnaireCamera, mockGestionnaireEcran);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(cls).toBeDefined();
    });

    it("Composants utilisés sont construits", () => {
        expect(cls["gestionnaireCamera"]).toBeDefined();
        expect(cls["gestionnaireEcran"]).toBeDefined();
    });

    afterEach(() => {
        cls = null;
    });
});
