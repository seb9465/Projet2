import { GestionnaireSouris } from "./gestionnaireSouris";
import { TestBed } from "../../../../node_modules/@angular/core/testing";

describe("Gestionnaire Souris Service", () => {
    let service: GestionnaireSouris;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                GestionnaireSouris
            ]
        });

        service = TestBed.get(GestionnaireSouris);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Constructeur", () => {
        expect(service["listeRappel"]).toBeDefined();
        expect(service["evenementRecu"]).toBeDefined();
    });

    afterEach(() => {
        service = null;
    });
});
