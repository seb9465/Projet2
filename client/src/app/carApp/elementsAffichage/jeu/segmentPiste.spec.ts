import { SegmentPiste } from "./segmentPiste";
import { Point } from "../../elementsGeometrie/point";

describe("Segment Piste class", () => {
    const POINT1: Point = new Point(0, 0);
    /* tslint:disable-next-line:no-magic-numbers */
    const POINT2: Point = new Point(4, -2);

    let cls: SegmentPiste;

    beforeEach(() => {
        cls = new SegmentPiste(POINT1, POINT2);
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

        it("la position est bien initialisee", () => {
            expect(cls.position).toEqual(POINT1.vecteurPlanXZ);
        });

        it("le segment contient le bon nombre d'elements (cercle + plan)", () => {
            const NOMBRE_ELEMENTS: number = 2;
            expect(cls.children.length).toEqual(NOMBRE_ELEMENTS);
        });
    });

    afterEach(() => {
        cls = null;
    });
});
