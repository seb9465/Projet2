import { PisteJeu } from "./pisteJeu";
import { PISTE_TEST } from "./pisteTest";

describe("Piste Jeu Class", () => {
    let cls: PisteJeu;

    beforeEach(() => {
        cls = new PisteJeu();
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    describe("Constructeur: ", () => {
        it("le constructeur doit fonctionner", () => {
            expect(cls).toBeTruthy();
        });
    });

    describe("Ajout de points", () => {
        it("Importer une piste fonctionne", () => {
            expect(cls["intersections"].length).toEqual(0);
            cls.importer(PISTE_TEST);
            expect(cls["intersections"].length).toEqual(PISTE_TEST.length);
        });

        it("La piste contient le bon nombre d'elements", () => {
            cls.importer(PISTE_TEST);
            expect(cls.children.length).toEqual(PISTE_TEST.length + 1);
        });
    });

    afterEach(() => {
        cls = null;
    });
});
