import { UtilisateurPeripherique } from "./UtilisateurPeripherique";
import { GestionnaireClavier } from "../clavier/gestionnaireClavier";
import { EvenementClavier, TypeEvenementClavier, FonctionTouche } from "../clavier/evenementClavier";

describe("Utilisateur Peripherique class", () => {
    const FONCTION: Function = UtilisateurPeripherique.prototype.ajouter;
    const EVENEMENT_CLAVIER: EvenementClavier = new EvenementClavier("c", TypeEvenementClavier.TOUCHE_APPUYEE);
    const FONCTION_TOUCHE: FonctionTouche = new FonctionTouche(FONCTION, EVENEMENT_CLAVIER);

    let cls: UtilisateurPeripherique;

    beforeEach(() => {
        cls = new UtilisateurPeripherique(new GestionnaireClavier());
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(cls).toBeDefined();
    });

    it("Devrait ajouter les evenements", () => {
        const TAILLE_AVANT: number = cls["fonctionsEnregistrees"].length;
        cls.ajouter(FONCTION, EVENEMENT_CLAVIER);
        expect(cls["fonctionsEnregistrees"].length).toEqual(TAILLE_AVANT + 1);
        expect(cls["fonctionsEnregistrees"][0].evenement).toEqual(FONCTION_TOUCHE.evenement);
        expect(cls["fonctionsEnregistrees"][0].fonction).toEqual(FONCTION_TOUCHE.fonction);

    });

    it("Devrait supprimer les fonctions", () => {
        cls.ajouter(FONCTION, EVENEMENT_CLAVIER);
        const TAILLE_AVANT: number = cls["gestionnaire"]["listeRappel"].obtenirFonctions(FONCTION_TOUCHE.evenement).length;
        expect(TAILLE_AVANT).toEqual(1);
        cls["ngOnDestroy"]();
        expect(cls["fonctionsEnregistrees"]).toBe(null);
        expect(cls["gestionnaire"]["listeRappel"].obtenirFonctions(FONCTION_TOUCHE.evenement).length).toEqual(TAILLE_AVANT - 1);
    });

    afterEach(() => {
        cls = null;
    });
});
