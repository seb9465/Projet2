import { Droite } from "./droite";
import { Point } from "./point";
import { Vector3 } from "three";
import * as assert from "assert";

describe("Droite class", () => {
    /* tslint:disable-next-line:no-magic-numbers */
    const POINT1: Point = new Point(6, 0);
    /* tslint:disable-next-line:no-magic-numbers */
    const POINT2: Point = new Point(0, 5);

    let cls: Droite;

    beforeEach(() => {
        cls = new Droite(POINT1, POINT2);
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
        });

        it("les accesseurs des points fonctionnent", () => {
            expect(cls.depart.equals(POINT1)).toBeTruthy();
            expect(cls.arrivee.equals(POINT2)).toBeTruthy();
        });
    });
    describe("plusPetitX: ", () => {
        it("retourne bien le plus petit x", () => {
            expect(cls.plusPetitX).toEqual(0);
        });
    });
    describe("plusGrandX: ", () => {
        it("retourne bien le plus grand x", () => {
            /* tslint:disable-next-line:no-magic-numbers */
            expect(cls.plusGrandX).toEqual(6);
        });
    });
    describe("plusPetitY: ", () => {
        it("retourne bien le plus petit y", () => {
            expect(cls.plusPetitY).toEqual(0);
        });
    });
    describe("plusGrandY: ", () => {
        it("retourne bien le plus grand y", () => {
            /* tslint:disable-next-line:no-magic-numbers */
            expect(cls.plusGrandY).toEqual(5);
        });
    });
    describe("modifierDepart: ", () => {
        it("le depart devrait etre modifie", () => {
            const departInitial: Vector3 = cls.start;
            /* tslint:disable-next-line:no-magic-numbers */
            cls.depart = new Point(5, 1);
            assert(!departInitial.equals(cls.start));
        });
    });
    describe("modifierArrivee: ", () => {
        it("l'arrivee devrait etre modifiee", () => {
            const arriveetInitiale: Vector3 = cls.end;
            /* tslint:disable-next-line:no-magic-numbers */
            cls.arrivee = new Point(1, 6);
            assert(!arriveetInitiale.equals(cls.end));
        });
    });

    describe("angleAvecDroite: ", () => {
        it("bon angle calcule", () => {
            const droite1: Droite = new Droite(new Point(0, 0), new Point(1, 0));
            const droite2: Droite = new Droite(new Point(0, 0), new Point(0, 1));
            /* tslint:disable-next-line:no-magic-numbers */
            expect(droite1.angleAvecDroite(droite2)).toEqual(Math.PI / 2);
        });
    });

    afterEach(() => {
        cls = null;
    });
});
