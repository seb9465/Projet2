import { GestionnaireVoitures } from "./gestionnaireVoitures";
import { TestBed } from "../../../../node_modules/@angular/core/testing";
import { GestionnaireClavier } from "../clavier/gestionnaireClavier";
// import { TempsJournee } from "../skybox/tempsJournee";

describe("Gestionnaire Voitures Service", () => {
    let service: GestionnaireVoitures;
    let mockGestionnaireClavier: GestionnaireClavier;

    beforeEach(() => {
        mockGestionnaireClavier = jasmine.createSpyObj([
            "inscrire",
            "desinscrire",
        ]);

        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                GestionnaireVoitures,
                { provide: GestionnaireClavier, useValue: mockGestionnaireClavier },
            ],
        });

        service = TestBed.get(GestionnaireVoitures);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Constructeur initialise un gestionnaire", () => {
        expect(service).toBeDefined();
    });

    // it("changerTempsJournee change mode nuit", () => {
    //     const temps: TempsJournee = TempsJournee.Nuit;
    //     spyOn(service["_voitureJoueur"], "allumerPhares");
    //     service.changerTempsJournee(temps);
    //     expect(service["_voitureJoueur"].allumerPhares).toHaveBeenCalled();
    // });

    // it("changerTempsJournee change mode jour", () => {
    //     const temps: TempsJournee = TempsJournee.Jour;
    //     spyOn(service["_voitureJoueur"], "eteindrePhares");
    //     service.changerTempsJournee(temps);
    //     expect(service["_voitureJoueur"].eteindrePhares).toHaveBeenCalled();
    // });

    // it("get voitureJoueur renvoie un objet", () => {
    //     expect(service.voitureJoueur).toBeDefined();
    // });

    // it("get voituresAI renvoie un groupe contenant les voitures AI", () => {
    //     expect(service.voituresAI.children.length).toBe(NOMBRE_AI);
    // });

    // it("Position des voitures est aléatoire", () => {
    //     const tableauPlaces: number[] = [0, 0, 0, 0];
    //     const NOMBRE_ESSAIS: number = 10000;

    //     for (let i: number = 0; i < NOMBRE_ESSAIS; i++) {
    //         const place: number = service["placeAleatoire"]();
    //         tableauPlaces[place]++;
    //     }

    //     for (const place of tableauPlaces) {
    //         expect(place / NOMBRE_ESSAIS).toBeGreaterThan(1 / (tableauPlaces.length + 1));
    //     }
    // });

    afterEach(() => {
        service = null;
    });
});
