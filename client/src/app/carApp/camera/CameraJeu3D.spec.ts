/* tslint:disable-next-line:max-line-length */
import { CameraJeu3D, DISTANCE_DEFAUT, PLAN_RAPPROCHE, PLAN_ELOIGNE, CHAMP_DE_VISION, DISTANCE_MINIMUM, DISTANCE_MAXIMUM, PAS_DISTANCE } from "./CameraJeu3D";
import * as assert from "assert";

describe("Camera Jeu 3D class", () => {
    let cls: CameraJeu3D;

    beforeEach(() => {
        cls = new CameraJeu3D();
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(cls).toBeDefined();
    });

    it("Distance recoit la valeur par defaut", () => {
        expect(cls["distance"]).toEqual(DISTANCE_DEFAUT);
    });

    it("Camera recoit les bonnes valeurs de plans", () => {
        expect(cls["camera"].near).toEqual(PLAN_RAPPROCHE);
        expect(cls["camera"].far).toEqual(PLAN_ELOIGNE);
        expect(cls["camera"].fov).toEqual(CHAMP_DE_VISION);
    });

    describe("Constantes la distance de la camera", () => {
        it("Distance minimale est positive et <= distance maximale", () => {
            assert(DISTANCE_MINIMUM <= DISTANCE_MAXIMUM && DISTANCE_MINIMUM >= 0);
        });

        it("Distance maximale est positive et >= distance minimale", () => {
            assert(DISTANCE_MAXIMUM >= DISTANCE_MINIMUM && DISTANCE_MAXIMUM >= 0);
        });

        it("Distance par defaut est borne par valeur min et max", () => {
            assert(DISTANCE_MINIMUM <= DISTANCE_DEFAUT && DISTANCE_DEFAUT <= DISTANCE_MAXIMUM);
        });

        it("Pas du zoom permet un nombre de gradations suffisantes", () => {
            const NOMBRE_GRADATIONS: number = 10;
            assert((DISTANCE_MAXIMUM - DISTANCE_MINIMUM) / PAS_DISTANCE >= NOMBRE_GRADATIONS);
        });
    });

    describe("Constantes pour camera", () => {
        it("Plan rapproche est valide", () => {
            assert(PLAN_RAPPROCHE >= 0 && PLAN_RAPPROCHE < PLAN_ELOIGNE);
        });

        it("Plan eloigne est valide", () => {
            assert(PLAN_ELOIGNE >= 0 && PLAN_ELOIGNE > PLAN_RAPPROCHE);
        });

        it("Champ de vision est valide", () => {
            assert(CHAMP_DE_VISION >= 0);
        });
    });

    describe("Methode zoomer", () => {
        it("Ne depasse pas la valeur maximale", () => {
            let distanceDebut: number;
            let distanceFin: number;

            do {
                distanceDebut = cls["distance"];
                cls.zoomer();
                distanceFin = cls["distance"];
            }
            while (distanceDebut !== DISTANCE_MINIMUM);

            expect(distanceFin).toBeLessThanOrEqual(DISTANCE_MAXIMUM);
        });

        it("Diminue la distance entre objet et camera", () => {
            const distanceDebut: number = cls["distance"];
            cls.zoomer();
            const distanceFin: number = cls["distance"];

            expect(distanceFin).toBeLessThanOrEqual(distanceDebut);
        });
    });

    describe("Methode dezoomer", () => {
        it("Ne depasse pas la valeur maximale", () => {
            let distanceDebut: number;
            let distanceFin: number;

            do {
                distanceDebut = cls["distance"];
                cls.dezoomer();
                distanceFin = cls["distance"];
            }
            while (distanceDebut !== DISTANCE_MAXIMUM);

            expect(distanceFin).toEqual(DISTANCE_MAXIMUM);
        });

        it("Augmente la distance entre objet et camera", () => {
            const distanceDebut: number = cls["distance"];
            cls.dezoomer();
            const distanceFin: number = cls["distance"];

            expect(distanceFin).toBeGreaterThanOrEqual(distanceDebut);
        });
    });

    it("Redimensionnement", () => {
        const nouvLargeur: number = 640;
        const nouvHauteur: number = 480;

        cls.redimensionnement(nouvLargeur, nouvHauteur);

        expect(cls["_camera"]["aspect"]).toBeCloseTo(nouvLargeur / nouvHauteur);
    });

    afterEach(() => {
        cls = null;
    });
});
