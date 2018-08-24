import { GestionnaireEcran } from "./gestionnaireEcran";

describe("Gestionnaire Ecran class", () => {
    let cls: GestionnaireEcran;
    const conteneur: HTMLDivElement = document.createElement("div");
    const elementHTML: HTMLElement = document.createElement("div");

    beforeEach(() => {
        cls = new GestionnaireEcran();
    });

    it("Instantiable avec le constructeur", () => {
        expect(cls).toBeDefined();
        expect(cls["conteneur"]).toBeDefined();
    });

    it("Ajout d'un conteneur", () => {
        cls.initialiserConteneur(conteneur);
        expect(cls["conteneur"]).not.toEqual(null);
    });

    it("Ajout d'un element dans le conteneur", () => {
        expect(cls["conteneur"].childElementCount).toEqual(0);
        cls.ajouterElementConteneur(elementHTML);
        expect(cls["conteneur"].childElementCount).toEqual(1);
    });

    it("Obtention du ratio", () => {
        const RATIO: number = conteneur.clientWidth / conteneur.clientHeight;
        expect(cls.ratio).toEqual(RATIO);
    });
});
