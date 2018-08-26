import { Phare, DISTANCE, PENOMBRE, COULEUR_ALLUMEE, INTENSITE_ALLUME, COULEUR_ETEINTE, INTENSITE_ETEINT } from "./phare";
import { Vector3 } from "three";

describe("Phare class", () => {
    const HAUTEUR: number = 0.5;
    const LARGEUR: number = 0.5;
    const PROFONDEUR: number = -1.65;
    const AJUSTEMENT_FAISCEAU_DISTANCE_VOITURE: number = 0.75;

    const PHARE_POSITION_RELATIVE: Vector3 = new Vector3(LARGEUR, HAUTEUR, PROFONDEUR);
    const PHARE_POSITION: Vector3 = new Vector3(LARGEUR, HAUTEUR, PROFONDEUR + AJUSTEMENT_FAISCEAU_DISTANCE_VOITURE);

    let cls: Phare;

    beforeEach(() => {
        cls = new Phare(PHARE_POSITION_RELATIVE);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Instantiable avec le constructeur", () => {
        expect(cls).toBeDefined();
        expect(cls.distance).toBe(DISTANCE);
        expect(cls.penumbra).toBe(PENOMBRE);
        expect(cls.position).toEqual(PHARE_POSITION);
    });

    it("Phare s'allume", () => {
        cls.allumer();
        expect(cls["materielAmpoule"].color.getHex()).toBe(COULEUR_ALLUMEE);
        expect(cls.color.getHex()).toBe(COULEUR_ALLUMEE);
        expect(cls.intensity).toBe(INTENSITE_ALLUME);
    });

    it("Phare s'eteint", () => {
        cls.allumer();
        cls.eteindre();
        expect(cls["materielAmpoule"].color.getHex()).toBe(COULEUR_ETEINTE);
        expect(cls.intensity).toBeCloseTo(INTENSITE_ETEINT);
    });

    afterEach(() => {
        cls = null;
    });
});
