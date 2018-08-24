import { ConteneurFonctionsClavier } from "./conteneurFonctionsClavier";
import { EvenementClavier, FonctionTouche, TypeEvenementClavier } from "./evenementClavier";

describe("Conteneur Fonctions Clavier class", () => {
    let cls: ConteneurFonctionsClavier;

    beforeEach(() => {
        cls = new ConteneurFonctionsClavier();
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(cls).toBeDefined();
    });

    describe("tests", () => {
        const FONCTION: Function = ConteneurFonctionsClavier.prototype.ajouter;
        const EVENEMENT_CLAVIER: EvenementClavier = new EvenementClavier("c", TypeEvenementClavier.TOUCHE_APPUYEE);
        const FONCTION_TOUCHE: FonctionTouche = new FonctionTouche(FONCTION, EVENEMENT_CLAVIER);

        const FONCTION2: Function = ConteneurFonctionsClavier.prototype.retirer;
        const FONCTION_TOUCHE2: FonctionTouche = new FonctionTouche(FONCTION2, EVENEMENT_CLAVIER);

        it("Devrait retourner les fonctions", () => {
            const TABLEAU_TEST: Function[] = [FONCTION, FONCTION2];
            cls.ajouter(FONCTION_TOUCHE);
            cls.ajouter(FONCTION_TOUCHE2);
            expect(cls.obtenirFonctions(EVENEMENT_CLAVIER).length).toEqual(TABLEAU_TEST.length);
            expect(cls.obtenirFonctions(EVENEMENT_CLAVIER).find((element: Function) => element === FONCTION)).toEqual(FONCTION);
            expect(cls.obtenirFonctions(EVENEMENT_CLAVIER).find((element: Function) => element === FONCTION2)).toEqual(FONCTION2);
        });

        it("Devrait ajouter la fonction", () => {
            const ANCIENNE_LONGUEUR: number = cls.obtenirFonctions(EVENEMENT_CLAVIER).length;
            cls.ajouter(FONCTION_TOUCHE);
            expect(cls.obtenirFonctions(EVENEMENT_CLAVIER).length).toEqual(ANCIENNE_LONGUEUR + 1);
            expect(cls.obtenirFonctions(EVENEMENT_CLAVIER).find((element: Function) => element === FONCTION)).toEqual(FONCTION);
        });

        it("Devrait retirer la fonction", () => {
            cls.ajouter(FONCTION_TOUCHE);
            const ANCIENNE_LONGUEUR: number = cls.obtenirFonctions(EVENEMENT_CLAVIER).length;
            cls.retirer(FONCTION_TOUCHE);
            expect(cls.obtenirFonctions(EVENEMENT_CLAVIER).length).toEqual(ANCIENNE_LONGUEUR - 1);
            expect(cls.obtenirFonctions(EVENEMENT_CLAVIER).findIndex((element: Function) => element === FONCTION)).toEqual(-1);
        });
    });

    afterEach(() => {
        cls = null;
    });
});
