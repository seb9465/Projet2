import { LigneDeDepart } from "./ligneDepart";
import { Vector3 } from "three";
import { PI_OVER_2 } from "../../constants";

describe("Ligne Depart", () => {
    const EMPLACEMENT: Vector3 = new Vector3(-1, 0, 1);
    const ANGLE: number = 0.75;

    let cls: LigneDeDepart;

    beforeEach(() => {
        cls = new LigneDeDepart(EMPLACEMENT, ANGLE);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    describe("Constructeur: ", () => {
        it("le constructeur doit fonctionner", () => {
            expect(cls).toBeTruthy();
        });

        it("la position est bien initialisee", () => {
            expect(cls.position).toEqual(EMPLACEMENT);
        });

        it("son angle de direction est perpendiculaire a l'angle de la piste", () => {
            expect(ANGLE).toBeLessThanOrEqual(Math.PI);
            expect(cls.rotation.y).toBeCloseTo(PI_OVER_2 - ANGLE);
        });
    });

    afterEach(() => {
        cls = null;
    });
});
