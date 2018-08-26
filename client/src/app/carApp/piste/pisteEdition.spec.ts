import { PisteEdition } from "./pisteEdition";
import { VerificateurContraintesPiste, LONGUEUR_MINIMALE } from "../editeurPiste/verificateurContraintesPiste";
import { Point } from "../elementsGeometrie/point";
import { PISTE_TEST } from "./pisteTest";

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

    describe("Ajout de points", () => {
        it("Ajout d'une liste de points", () => {
            for (const point of PISTE_TEST) {
                cls.ajouterPoint(point);
            }

            expect(cls["intersections"].length).toEqual(PISTE_TEST.length);
        });

        // it("Boucler le circuit fonctionne", () => {
        //     expect(cls["estBoucle"]).toBeFalsy();
        //     cls.ajouterPoint(PISTE_TEST[0]);
        //     expect(cls["estBoucle"]).toBeTruthy();
        // });

        // it("Exporter piste", () => {
        //     const points: Point[] = cls.exporter();
        //     expect(points.length).toEqual(PISTE_TEST.length);
        //     for (let i: number = 0 ; i < points.length ; i++) {
        //         expect(points[i].equals(PISTE_TEST[i])).toBeTruthy();
        //     }
        // });

        it("Verification du sens : est anti-horaire", () => {
            expect(cls.estSensHoraire()).toBeFalsy();
        });

        it("Verification du sens : est horaire", () => {
            for (const point of PISTE_TEST.reverse()) {
                cls.ajouterPoint(point);
            }
            expect(cls.estSensHoraire()).toEqual(null);
            cls.ajouterPoint(PISTE_TEST[0]);
            expect(cls["estBoucle"]).toBeTruthy();
            expect(cls.estSensHoraire()).toBeTruthy();
        });
    });

    describe("Selection d'une intersection", () => {
        // it("Selectionner une intersection", () => {
        //     expect(cls["intersectionSelectionnee"]).toEqual(null);
        //     cls.selectionnerIntersection(PISTE_TEST[0]);
        //     expect(cls["intersectionSelectionnee"].point.equals(PISTE_TEST[0])).toBeTruthy();
        // });

        // it("Deselectionner une intersection", () => {
        //     expect(cls["intersectionSelectionnee"]).not.toEqual(null);
        //     cls.deselectionnerIntersection();
        //     expect(cls["intersectionSelectionnee"]).toEqual(null);
        // });
    });

    describe("Importation", () => {
        it("Importer une piste non vide fonctionne", () => {
            cls.importer(PISTE_TEST);
            expect(cls["intersections"].length).toEqual(PISTE_TEST.length);
            expect(cls["estBoucle"]).toBeTruthy();
        });

        it("Importer une piste vide fonctionne", () => {
            cls.importer([]);
            expect(cls["intersections"].length).toEqual(0);
        });
    });

    afterEach(() => {
        cls = null;
    });
});
