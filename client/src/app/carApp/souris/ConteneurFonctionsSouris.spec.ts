import { ConteneurFonctionSouris } from "./conteneurFonctionsSouris";
import { EvenementSouris, FonctionSouris, TypeEvenementSouris } from "./evenementSouris";

describe("Conteneur Fonctions Souris class", () => {
    const FONCTION: Function = ConteneurFonctionSouris.prototype.ajouter;
    const FONCTION2: Function = ConteneurFonctionSouris.prototype.retirer;
    const EVENEMENT_SOURIS: EvenementSouris = new EvenementSouris(TypeEvenementSouris.CLICK);
    const FONCTION_SOURIS: FonctionSouris = new FonctionSouris(FONCTION, EVENEMENT_SOURIS);
    const FONCTION_SOURIS2: FonctionSouris = new FonctionSouris(FONCTION2, EVENEMENT_SOURIS);

    let cls: ConteneurFonctionSouris;

    beforeEach(() => {
        cls = new ConteneurFonctionSouris();
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Constructeur", () => {
        expect(cls).toBeDefined();
    });

    it("Devrait retourner les fonctions", () => {
        const TABLEAU_TEST: Function[] = [FONCTION, FONCTION2];
        cls.ajouter(FONCTION_SOURIS);
        cls.ajouter(FONCTION_SOURIS2);
        expect(cls.obtenirFonctions(EVENEMENT_SOURIS).length).toEqual(TABLEAU_TEST.length);
        expect(cls.obtenirFonctions(EVENEMENT_SOURIS).find((element: Function) => element === FONCTION)).toEqual(FONCTION);
        expect(cls.obtenirFonctions(EVENEMENT_SOURIS).find((element: Function) => element === FONCTION2)).toEqual(FONCTION2);
    });

    it("Devrait ajouter la fonction", () => {
        const ANCIENNE_LONGUEUR: number = cls.obtenirFonctions(EVENEMENT_SOURIS).length;
        cls.ajouter(FONCTION_SOURIS);
        expect(cls.obtenirFonctions(EVENEMENT_SOURIS).length).toEqual(ANCIENNE_LONGUEUR + 1);
        expect(cls.obtenirFonctions(EVENEMENT_SOURIS).find((element: Function) => element === FONCTION)).toEqual(FONCTION);
    });

    it("Devrait retirer la fonction", () => {
        cls.ajouter(FONCTION_SOURIS);
        const ANCIENNE_LONGUEUR: number = cls.obtenirFonctions(EVENEMENT_SOURIS).length;
        cls.retirer(FONCTION_SOURIS);
        expect(cls.obtenirFonctions(EVENEMENT_SOURIS).length).toEqual(ANCIENNE_LONGUEUR - 1);
        expect(cls.obtenirFonctions(EVENEMENT_SOURIS).findIndex((element: Function) => element === FONCTION)).toEqual(-1);
    });

    afterEach(() => {
        cls = null;
    });
});
