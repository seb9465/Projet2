import { PisteEdition } from "./pisteEdition";
import { VerificateurContraintesPiste, LONGUEUR_MINIMALE } from "../editeurPiste/verificateurContraintesPiste";
import { Point } from "../elementsGeometrie/point";

const POINT1: Point = new Point(0, 0);
const POINT2: Point = new Point(LONGUEUR_MINIMALE - 1, 0);
const POINT3: Point = new Point(LONGUEUR_MINIMALE, LONGUEUR_MINIMALE);
const POINT4: Point = new Point(LONGUEUR_MINIMALE, -LONGUEUR_MINIMALE);
const POINT5: Point = new Point(0, -LONGUEUR_MINIMALE);
const POINT6: Point = new Point(0, LONGUEUR_MINIMALE);

describe("Piste Edition class", () => {
    let cls: PisteEdition;
    let verificateur: VerificateurContraintesPiste;

    beforeEach(() => {
        cls = new PisteEdition();
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(cls).toBeDefined();
    });

    describe("Simulation d'ajout de points", () => {
        beforeEach(() => {
            verificateur = cls["verificateurPiste"];
        });

        it("Premier point ne brise aucune contrainte", () => {
            cls.ajouterPoint(POINT1);
            expect(verificateur.pisteRespecteContraintes).toBeTruthy();
        });

        it("Deuxieme point brise contrainte de longueur", () => {
            cls.ajouterPoint(POINT1);
            expect(verificateur.pisteRespecteContraintes).toBeTruthy();
            cls.ajouterPoint(POINT2);
            expect(verificateur.pisteRespecteContraintes).toBeFalsy();
        });

        it("Deuxieme point ne brise pas de contrainte de longueur", () => {
            cls.ajouterPoint(POINT1);
            cls.ajouterPoint(POINT3);
            expect(verificateur.pisteRespecteContraintes).toBeTruthy();
        });

        it("Troisieme point ne brise pas contrainte d'angle", () => {
            cls.ajouterPoint(POINT1);
            cls.ajouterPoint(POINT3);
            cls.ajouterPoint(POINT4);
            expect(verificateur.pisteRespecteContraintes).toBeTruthy();
        });

        it("Troisieme point brise contrainte d'angle", () => {
            cls.ajouterPoint(POINT1);
            cls.ajouterPoint(POINT3);
            expect(verificateur.pisteRespecteContraintes).toBeTruthy();
            cls.ajouterPoint(POINT5);
            expect(verificateur.pisteRespecteContraintes).toBeFalsy();
        });

        it("Quatrieme brise contrainte de croisement", () => {
            cls.ajouterPoint(POINT1);
            cls.ajouterPoint(POINT3);
            cls.ajouterPoint(POINT4);
            expect(verificateur.pisteRespecteContraintes).toBeTruthy();
            cls.ajouterPoint(POINT6);
            expect(verificateur.pisteRespecteContraintes).toBeFalsy();
        });
    });

    afterEach(() => {
        cls = null;
    });
});
