import { GestionnaireClavier } from "./gestionnaireClavier";
import { TestBed } from "../../../../node_modules/@angular/core/testing";

describe("Gestionnaire Clavier class", () => {
    let service: GestionnaireClavier;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [GestionnaireClavier]
        });

        service = TestBed.get(GestionnaireClavier);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    describe("Properties should be defined", () => {
        it("Should have defined ListeRappel", () => {
            expect(service["listeRappel"]).toBeDefined();
        });
        it("Should have defined EvenementRecu", () => {
            expect(service["evenementRecu"]).toBeDefined();
        });
    });

    afterEach(() => {
        service = null;
    });
});
