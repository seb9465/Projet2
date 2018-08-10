import { CameraJeu2D, PLAN_ELOIGNE, PLAN_RAPPROCHE, ZOOM_DEFAUT } from './CameraJeu2D';

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

    afterEach(() => {
        cls = null;
    });
});
