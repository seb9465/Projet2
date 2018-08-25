import { PointAffichage, DIFFERENCE_PROFONDEUR } from "./pointAffichage";
import { Point } from "../../elementsGeometrie/point";

describe("Point Affichage class", () => {
    const X: number = 5;
    const Y: number = -10;
    const POINT: Point = new Point(X, Y);
    const POINT_INVERSE: Point = new Point(Y, X);

    let cls: PointAffichage;

    beforeEach(() => {
        cls = new PointAffichage(POINT);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    describe("Constructeur: ", () => {
        it("le constructeur doit fonctionner", () => {
            expect(cls).toBeTruthy();
            expect(cls.point).toEqual(POINT);
            expect(cls.children.length).toBe(1);
        });

        it("la position de l'objet est correcte", () => {
            const POINT_RESTITUE: Point = new Point(cls.position.x, cls.position.z);
            expect(POINT_RESTITUE.equals(POINT)).toBeTruthy();
            expect(cls.position.y).toEqual(DIFFERENCE_PROFONDEUR);
        });

        it("l'ajout du contour se fait bien", () => {
            let nombreElements: number = cls.children.length;
            expect(nombreElements).toBe(1);
            cls.marquerCommePremier();
            expect(cls.children.length).toBe(++nombreElements);
            cls.marquerCommePremier();
            expect(cls.children.length).toBe(nombreElements);
        });

        it("la modification du point se fait", () => {
            const POINT_AVANT: Point = cls.point;
            cls.point = POINT_INVERSE;
            expect(cls.point).not.toEqual(POINT_AVANT);
            expect(cls.point).toEqual(POINT_INVERSE);
        });
    });

    afterEach(() => {
        cls = null;
    });
});
