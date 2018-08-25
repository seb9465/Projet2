import { DroiteAffichage, COULEUR_DEFAUT, COULEUR_CORRECTE, COULEUR_ERREUR } from "./droiteAffichage";
import { Point } from "../../elementsGeometrie/point";
import { LineBasicMaterial, Geometry } from "three";

describe("Droite Affichage class", () => {
    const X: number = 5;
    const Y: number = -10;
    const POINT: Point = new Point(X, Y);
    const POINT_INVERSE: Point = new Point(Y, X);
    const NOUVEAU_POINT: Point = new Point(Y, Y);

    let cls: DroiteAffichage;

    beforeEach(() => {
        cls = new DroiteAffichage(POINT, POINT_INVERSE);
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
            expect(cls.droite.start).toEqual(POINT.vecteurPlanXZ);
            expect(cls.droite.end).toEqual(POINT_INVERSE.vecteurPlanXZ);

            cls.material instanceof LineBasicMaterial
                ? expect(cls.material.color.getHex()).toEqual(COULEUR_DEFAUT)
                : expect(false).toBeTruthy();
        });

        it("les accesseurs des points fonctionnent", () => {
            expect(cls.depart.equals(POINT)).toBeTruthy();
            expect(cls.arrivee.equals(POINT_INVERSE)).toBeTruthy();
        });
    });

    describe("Couleur de la droite: ", () => {
        it("la droite est de la bonne couleur quand elle respecte les contraintes", () => {
            cls.respecteContraintes();

            cls.material instanceof LineBasicMaterial
                ? expect(cls.material.color.getHex()).toEqual(COULEUR_CORRECTE)
                : expect(false).toBeTruthy();
        });

        it("la droite est de la bonne couleur quand elle brise une contrainte", () => {
            cls.briseContrainte();

            cls.material instanceof LineBasicMaterial
                ? expect(cls.material.color.getHex()).toEqual(COULEUR_ERREUR)
                : expect(false).toBeTruthy();
        });
    });

    describe("Modification de la droite: ", () => {
        it("la modification du point de depart se fait", () => {
            expect(cls.droite.start).not.toEqual(NOUVEAU_POINT.vecteurPlanXZ);
            cls.depart = NOUVEAU_POINT;
            expect(cls.droite.start).toEqual(NOUVEAU_POINT.vecteurPlanXZ);

            cls.geometry instanceof Geometry
                ? expect(cls.geometry.vertices[0]).toEqual(NOUVEAU_POINT.vecteurPlanXZ)
                : expect(false).toBeTruthy();
        });

        it("la modification du point d'arrivee se fait", () => {
            expect(cls.droite.end).not.toEqual(NOUVEAU_POINT.vecteurPlanXZ);
            cls.arrivee = NOUVEAU_POINT;
            expect(cls.droite.end).toEqual(NOUVEAU_POINT.vecteurPlanXZ);

            cls.geometry instanceof Geometry
                ? expect(cls.geometry.vertices[1]).toEqual(NOUVEAU_POINT.vecteurPlanXZ)
                : expect(false).toBeTruthy();
        });

        it("la modification du point se fait", () => {
            expect(cls.droite.start).not.toEqual(NOUVEAU_POINT.vecteurPlanXZ);
            expect(cls.droite.end).not.toEqual(NOUVEAU_POINT.vecteurPlanXZ);
            cls.point = NOUVEAU_POINT;
            expect(cls.droite.start).toEqual(NOUVEAU_POINT.vecteurPlanXZ);
            expect(cls.droite.end).toEqual(NOUVEAU_POINT.vecteurPlanXZ);

            cls.geometry instanceof Geometry
                ? expect(cls.geometry.vertices).toEqual([NOUVEAU_POINT.vecteurPlanXZ, NOUVEAU_POINT.vecteurPlanXZ])
                : expect(false).toBeTruthy();
        });
    });

    afterEach(() => {
        cls = null;
    });
});
