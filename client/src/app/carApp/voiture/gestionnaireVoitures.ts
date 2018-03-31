import { Injectable, Inject } from "@angular/core";
import { ObjectLoader, Object3D } from "three";
import { Voiture } from "../voiture/voiture";
import { TempsJournee } from "../skybox/skybox";
import { GestionnaireClavier } from "../clavier/gestionnaireClavier";
import { EvenementClavier, TypeEvenementClavier } from "../clavier/evenementClavier";
import { UtilisateurPeripherique } from "../peripheriques/UtilisateurPeripherique";
import { ErreurChargementTexture } from "../../exceptions/erreurChargementTexture";

// AI
export const NOMBRE_AI: number = 1;

// Textures
const CHEMIN_TEXTURE: string = "../../../assets/voitures/";
const NOMS_TEXTURES: string[] = ["camero-2010-low-poly.json", "voiture-2010-low-poly.json"];

// Couleur voiture
enum CouleurVoiture { JAUNE = 0, ROSE = 1 }
const TEXTURE_DEFAUT_JOUEUR: CouleurVoiture = CouleurVoiture.ROSE;
const TEXTURE_DEFAUT_AI: CouleurVoiture = CouleurVoiture.JAUNE;

// Touches clavier
const ACCELERATEUR_APPUYE: EvenementClavier = new EvenementClavier("w", TypeEvenementClavier.TOUCHE_APPUYEE);
const ACCELERATEUR_RELEVE: EvenementClavier = new EvenementClavier("w", TypeEvenementClavier.TOUCHE_RELEVEE);
const DIRECTION_GAUCHE_APPUYEE: EvenementClavier = new EvenementClavier("a", TypeEvenementClavier.TOUCHE_APPUYEE);
const DIRECTION_GAUCHE_RELEVE: EvenementClavier = new EvenementClavier("a", TypeEvenementClavier.TOUCHE_RELEVEE);
const DIRECTION_DROITE_APPUYE: EvenementClavier = new EvenementClavier("d", TypeEvenementClavier.TOUCHE_APPUYEE);
const DIRECTION_DROITE_RELEVE: EvenementClavier = new EvenementClavier("d", TypeEvenementClavier.TOUCHE_RELEVEE);
const FREIN_APPUYE: EvenementClavier = new EvenementClavier("s", TypeEvenementClavier.TOUCHE_APPUYEE);
const FREIN_RELEVE: EvenementClavier = new EvenementClavier("s", TypeEvenementClavier.TOUCHE_RELEVEE);
const INTERRUPTEUR_LUMIERE: EvenementClavier = new EvenementClavier("l", TypeEvenementClavier.TOUCHE_RELEVEE);

@Injectable()
export class GestionnaireVoitures {

    private _voitureJoueur: Voiture;
    private _voituresAI: Voiture[];
    private clavier: UtilisateurPeripherique;

    public get voitureJoueur(): Voiture {
        return this._voitureJoueur;
    }

    public get voituresAI(): Voiture[] {
        return this._voituresAI;
    }

    public constructor(@Inject(GestionnaireClavier) gestionnaireClavier: GestionnaireClavier) {
        this._voituresAI = [];
        this.clavier = new UtilisateurPeripherique(gestionnaireClavier);
    }

    protected initialisationTouches(): void {
        this.clavier.ajouter(this._voitureJoueur.accelerer.bind(this._voitureJoueur), ACCELERATEUR_APPUYE);
        this.clavier.ajouter(this._voitureJoueur.relacherAccelerateur.bind(this._voitureJoueur), ACCELERATEUR_RELEVE);
        this.clavier.ajouter(this._voitureJoueur.virerGauche.bind(this._voitureJoueur), DIRECTION_GAUCHE_APPUYEE);
        this.clavier.ajouter(this._voitureJoueur.relacherVolant.bind(this._voitureJoueur), DIRECTION_GAUCHE_RELEVE);
        this.clavier.ajouter(this._voitureJoueur.virerDroite.bind(this._voitureJoueur), DIRECTION_DROITE_APPUYE);
        this.clavier.ajouter(this._voitureJoueur.relacherVolant.bind(this._voitureJoueur), DIRECTION_DROITE_RELEVE);
        this.clavier.ajouter(this._voitureJoueur.freiner.bind(this._voitureJoueur), FREIN_APPUYE);
        this.clavier.ajouter(this._voitureJoueur.relacherFreins.bind(this._voitureJoueur), FREIN_RELEVE);
        this.clavier.ajouter(this._voitureJoueur.changerEtatPhares.bind(this._voitureJoueur), INTERRUPTEUR_LUMIERE);
    }

    // Creation des voitures

    public initialiser(): void {
        this.creerVoitureJoueur();
        this.creerVoituresAI();
        this.initialisationTouches();
    }

    private creerVoitureJoueur(): void {
        this._voitureJoueur = new Voiture();
        this.chargerTexture(NOMS_TEXTURES[TEXTURE_DEFAUT_JOUEUR])
            .then((objet: Object3D) => this._voitureJoueur.initialiser(objet))
            .catch(() => { throw new ErreurChargementTexture(); });
    }

    private creerVoituresAI(): void {
        for (let i: number = 0; i < NOMBRE_AI; i++) {
            this._voituresAI.push(new Voiture());
            this._voituresAI[i].position.set(0, 0, -4);
            this.chargerTexture(NOMS_TEXTURES[TEXTURE_DEFAUT_AI])
            .then((objet: Object3D) => this._voituresAI[i].initialiser(objet))
            .catch(() => { throw new ErreurChargementTexture(); });
        }
    }

    private async chargerTexture(URL_TEXTURE: string): Promise<Object3D> {
        return new Promise<Object3D>((resolve, reject) => {
            const loader: ObjectLoader = new ObjectLoader();
            loader.load(CHEMIN_TEXTURE + URL_TEXTURE, (object) => {
                resolve(object);
            });
        });
    }

    // Changements affectant les voitures

    public miseAJourVoitures(tempsDepuisDerniereTrame: number): void {
        this.voitureJoueur.update(tempsDepuisDerniereTrame);

        for (const voiture of this._voituresAI) {
            voiture.update(tempsDepuisDerniereTrame);
        }
    }

    public changerTempsJournee(temps: TempsJournee): void {
        temps === TempsJournee.Jour
            ? this.eteindrePhares()
            : this.allumerPhares();
    }

    private eteindrePhares(): void {
        for (const voiture of this.voitures) {
            voiture.eteindrePhares();
        }
    }

    private allumerPhares(): void {
        for (const voiture of this.voitures) {
            voiture.allumerPhares();
        }
    }

    public get voitures(): Voiture[] {
        return this._voituresAI.concat([this._voitureJoueur]);
    }
}
