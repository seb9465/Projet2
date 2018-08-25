import { GestionnairePeripherique } from "./GestionnairePeripherique";
import { TestBed } from "../../../../node_modules/@angular/core/testing";
import { EvenementClavier, TypeEvenementClavier, FonctionTouche } from "../clavier/evenementClavier";
import { ConteneurFonctionSouris } from "../souris/conteneurFonctionsSouris";

describe("Gestionnaire Peripheriques Service", () => {
    const FONCTION: Function = GestionnairePeripherique.prototype.inscrire;
    const EVENEMENT_CLAVIER: EvenementClavier = new EvenementClavier("c", TypeEvenementClavier.TOUCHE_APPUYEE);
    const FONCTION_TOUCHE: FonctionTouche = new FonctionTouche(FONCTION, EVENEMENT_CLAVIER);

    const FONCTION2: Function = GestionnairePeripherique.prototype.desinscrire;
    const EVENEMENT_CLAVIER2: EvenementClavier = new EvenementClavier("f", TypeEvenementClavier.TOUCHE_PRESSEE);
    const FONCTION_TOUCHE2: FonctionTouche = new FonctionTouche(FONCTION2, EVENEMENT_CLAVIER2);

    let service: GestionnairePeripherique;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                GestionnairePeripherique,
            ],
        });

        service = TestBed.get(GestionnairePeripherique);
        service["listeRappel"] = new ConteneurFonctionSouris();
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Devrait inscrire les fonctions", () => {
        service.inscrire(FONCTION_TOUCHE);
        service.inscrire(FONCTION_TOUCHE2);
        expect(service["listeRappel"].obtenirFonctions(FONCTION_TOUCHE.evenement)
            .find((element: Function) => element === FONCTION_TOUCHE.fonction)).toEqual(FONCTION);
        expect(service["listeRappel"].obtenirFonctions(FONCTION_TOUCHE2.evenement)
            .find((element: Function) => element === FONCTION_TOUCHE2.fonction)).toEqual(FONCTION2);
    });

    it("Devrait supprimer les fonctions", () => {
        service.desinscrire(FONCTION_TOUCHE);
        expect(service["listeRappel"].obtenirFonctions(FONCTION_TOUCHE.evenement)
            .findIndex((element: Function) => element === FONCTION_TOUCHE.fonction)).toEqual(-1);
    });

    afterEach(() => {
        service = null;
    });
});
