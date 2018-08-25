import { Point } from "./point";

describe("Point class", () => {
    const X: number = 5;
    const Y: number = -10;

    let cls: Point;
    let clsInverse: Point;

    beforeEach(() => {
        cls = new Point(X, Y);
        clsInverse = new Point(Y, X);
    });

    it("should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(cls).toBeDefined();
    });

    describe("Constructeur: ", () => {
        it("le constructeur doit fonctionner", () => {
            expect(cls).toBeTruthy();
            expect(cls.x).toEqual(X);
            expect(cls.y).toEqual(Y);
        });
    });

    describe("Methodes: ", () => {
        it("le vecteur XY est correct", () => {
            expect(cls.vecteurPlanXZ.x).toEqual(X);
            expect(cls.vecteurPlanXZ.y).toEqual(0);
            expect(cls.vecteurPlanXZ.z).toEqual(Y);
        });

        it("L'egalite est detectee entre 2 points", () => {
            expect(cls.equals(clsInverse)).not.toBeTruthy();
            expect(cls.equals(new Point(X, Y))).toBeTruthy();
            expect(cls.equals(cls)).toBeTruthy();
        });
    });

    afterEach(() => {
        cls = null;
    });
});
