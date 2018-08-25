import { IntersectionPiste } from "./intersectionPiste";
import { Point } from "../../elementsGeometrie/point";
import { DroiteAffichage } from "./droiteAffichage";

describe("Intersection Piste class", () => {
    const X1: number = 5;
    const Y1: number = -10;
    const POINT1: Point = new Point(X1, Y1);
    const X2: number = 7;
    const Y2: number = 3;
    const POINT2: Point = new Point(X2, Y2);
    const DROITE: DroiteAffichage = new DroiteAffichage(POINT1, POINT1);

    let cls: IntersectionPiste;
    let intersection2: IntersectionPiste;

    beforeEach(() => {
        cls = new IntersectionPiste(DROITE, POINT1);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(cls).toBeDefined();
    });

    describe("Constructeur: ", () => {
        it("le constructeur doit fonctionner", () => {
            expect(cls).toBeTruthy();
            expect(cls.point).toEqual(POINT1);
            expect(cls.droiteArrivee.droite.end).toEqual(POINT1.vecteurPlanXZ);
            expect(cls.droiteDebut.droite.start).toEqual(POINT1.vecteurPlanXZ);

            const NOMBRE_ENFANTS: number = 3;
            expect(cls.children.length).toEqual(NOMBRE_ENFANTS);
        });
    });

    describe("Methodes: ", () => {

        beforeEach(() => {
            intersection2 = new IntersectionPiste(cls.droiteArrivee, POINT2);
        });

        it("le point a l'extremite est bien detecte", () => {
            expect(cls["estPointDuBout"]).toBeTruthy();
        });

        it("le premier point place est bien detecte", () => {
            expect(cls["estPremierPointPlace"]).toBeTruthy();
            intersection2 = new IntersectionPiste(cls.droiteArrivee, POINT2);
            expect(intersection2["estPremierPointPlace"]).not.toBeTruthy();
        });

        it("la mise a jour du point est correcte", () => {
            cls.point = POINT2;
            expect(cls.point).toEqual(POINT2);
            expect(cls.droiteArrivee.droite.end).toEqual(POINT2.vecteurPlanXZ);
            expect(cls.droiteDebut.droite.start).toEqual(POINT2.vecteurPlanXZ);
        });

        it("la droite de depart se ramene correctement", () => {
            const ancienneDroite: DroiteAffichage = cls.droiteDebut;
            cls.ramenerDroiteDepart();
            expect(cls.droiteDebut).not.toEqual(ancienneDroite);
            expect(cls.droiteDebut.arrivee.equals(cls.point));
        });

        it("la liaison de deux intersections se fait", () => {
            expect(cls.droiteDebut).not.toEqual(intersection2.droiteArrivee);
            cls.bouclerAvec(intersection2);
            expect(cls.droiteDebut).toEqual(intersection2.droiteArrivee);
        });

        it("la separation de deux intersections se fait", () => {
            cls.bouclerAvec(intersection2);
            expect(cls.droiteDebut).toEqual(intersection2.droiteArrivee);
            cls.separer(intersection2);
            expect(cls.droiteDebut).not.toEqual(intersection2.droiteArrivee);
        });

        afterEach(() => {
            intersection2 = null;
        });
    });

    afterEach(() => {
        cls = null;
    });
});
