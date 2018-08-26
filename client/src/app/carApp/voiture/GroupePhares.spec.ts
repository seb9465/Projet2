import { GroupePhares } from "./groupePhares";

describe("Groupe Phares class", () => {
    const NOMBRE_ENFANTS: number = 3;

    let cls: GroupePhares;

    beforeEach(() => {
        cls = new GroupePhares();
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Instanciation avec constructeur", () => {
        cls = new GroupePhares();
        expect(cls).toBeDefined();
        expect(cls.children.length).toBe(0);
    });

    it("Initialisation se fait bien", () => {
        cls.initialiser();
        expect(cls.children.length).toBe(NOMBRE_ENFANTS);
    });

    it("Phares s'eteignent", () => {
        spyOn(cls, "eteindre");
        cls.eteindre();
        expect(cls.eteindre).toHaveBeenCalled();
    });

    it("Phares s'allument", () => {
        spyOn(cls, "allumer");
        cls.allumer();
        expect(cls.allumer).toHaveBeenCalled();
    });

    afterEach(() => {
        cls = null;
    });
});
