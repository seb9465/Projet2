import * as assert from "assert";
import { CameraJeu2D, PLAN_ELOIGNE, PLAN_RAPPROCHE, ZOOM_DEFAUT, ZOOM_MINIMUM, ZOOM_MAXIMUM, PAS_ZOOM } from "./CameraJeu2D";

describe("Camera Jeu 2D Class", () => {
    let cls: CameraJeu2D;

    beforeEach(() => {
        cls = new CameraJeu2D();
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });
    it("Should be defined", () => {
        expect(cls).toBeDefined();
    });

    describe("constructor function", () => {
        it("Should initialize with default value the zoom property", () => {
            expect(cls["zoom"]).toEqual(ZOOM_DEFAUT);
        });
        it("Should initialize the plan values", () => {
            expect(cls["_camera"].near).toEqual(PLAN_RAPPROCHE);
            expect(cls["_camera"].far).toEqual(PLAN_ELOIGNE);
        });
    });

    describe("Constantes pour zoom", () => {
        it("Zoom minimal est positif et <= zoom maximal", () => {
            assert(ZOOM_MINIMUM <= ZOOM_MAXIMUM && ZOOM_MINIMUM >= 0);
        });

        it("Zoom maximal est positif et >= zoom minimal", () => {
            assert(ZOOM_MAXIMUM >= ZOOM_MINIMUM && ZOOM_MAXIMUM >= 0);
        });

        it("Zoom par defaut est borne par valeur min et max", () => {
            assert(ZOOM_MINIMUM <= ZOOM_DEFAUT && ZOOM_DEFAUT <= ZOOM_MAXIMUM);
        });

        it("Pas du zoom permet un nombre de gradations suffisantes", () => {
            const NOMBRE_GRADATIONS: number = 10;
            assert((ZOOM_MAXIMUM - ZOOM_MINIMUM) / PAS_ZOOM >= NOMBRE_GRADATIONS);
        });
    });

    describe("Constantes pour camera", () => {
        it("Plan rapproche est valide", () => {
            assert(PLAN_RAPPROCHE < PLAN_ELOIGNE);
        });

        it("Plan eloigne est valide", () => {
            assert(PLAN_ELOIGNE >= 0 && PLAN_ELOIGNE > PLAN_RAPPROCHE);
        });
    });

    describe("Methode zoomer", () => {
        it("Ne depasse pas la valeur maximale", () => {
            let zoomDebut: number;
            let zoomFin: number;

            do {
                zoomDebut = cls["zoom"];
                cls.zoomer();
                zoomFin = cls["zoom"];
            }
            while (zoomDebut !== ZOOM_MAXIMUM);

            expect(zoomFin).toEqual(ZOOM_MAXIMUM);
        });

        it("Augmente le zoom", () => {
            const zoomDebut: number = cls["zoom"];
            cls.zoomer();
            const zoomFin: number = cls["zoom"];

            expect(zoomDebut).toBeLessThanOrEqual(zoomFin);
        });
    });

    describe("Methode dezoomer", () => {
        it("Ne depasse pas la valeur minimale", () => {
            let zoomDebut: number;
            let zoomFin: number;

            do {
                zoomDebut = cls["zoom"];
                cls.dezoomer();
                zoomFin = cls["zoom"];
            }
            while (zoomDebut !== ZOOM_MINIMUM);

            expect(zoomFin).toEqual(ZOOM_MINIMUM);
        });

        it("Augmente le zoom", () => {
            const zoomDebut: number = cls["zoom"];
            cls.dezoomer();
            const zoomFin: number = cls["zoom"];

            expect(zoomFin).toBeLessThanOrEqual(zoomDebut);
        });
    });

    it("Redimensionnement", () => {
        const REDIMENSIONNEMENT: number = 120;
        const nouvLargeur: number = cls["largeur"] + REDIMENSIONNEMENT;
        const nouvHauteur: number = cls["hauteur"] - REDIMENSIONNEMENT;

        cls.redimensionnement(nouvLargeur, nouvHauteur);

        const redLargeur: number = cls["largeur"];
        const redHauteur: number = cls["hauteur"];

        assert(nouvLargeur === redLargeur && nouvHauteur === redHauteur);
    });

    afterEach(() => {
        cls = null;
    });
});
