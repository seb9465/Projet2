import { Injectable, Inject } from "@angular/core";
import { UtilisateurPeripherique } from "../peripheriques/UtilisateurPeripherique";
import { GestionnaireSouris } from "../souris/gestionnaireSouris";
import { EvenementSouris, TypeEvenementSouris, BoutonSouris } from "../souris/evenementSouris";
import { GestionnaireCameraPiste } from "./gestionnaireCameraPiste";
import { TransformateurCoordonnees } from "./elementsGeometrie/TransformateurCoordonnees";
import { GestionnaireEcran } from "../ecran/gestionnaireEcran";
import { Piste } from "./piste";
import { Group } from "three";
import { Point } from "./elementsGeometrie/Point";

@Injectable()
export class GestionnairePiste {

    private souris: UtilisateurPeripherique;
    private transformateur: TransformateurCoordonnees;
    private _piste: Piste;

    public get piste(): Group {
        return this._piste;
    }

    public constructor(@Inject(GestionnaireSouris) gestionnaireSouris: GestionnaireSouris,
                       @Inject(GestionnaireCameraPiste) gestionnaireCamera: GestionnaireCameraPiste,
                       @Inject(GestionnaireEcran) gestionnaireEcran: GestionnaireEcran) {
        this._piste = new Piste();
        this.souris = new UtilisateurPeripherique(gestionnaireSouris);
        this.transformateur = new TransformateurCoordonnees(gestionnaireCamera, gestionnaireEcran);
        this.inscriptionSouris();
    }

    private inscriptionSouris(): void {
        this.souris.ajouter(this.ajouterPoint.bind(this), new EvenementSouris(TypeEvenementSouris.CLICK));
        this.souris.ajouter(this.effacerPoint.bind(this), new EvenementSouris(TypeEvenementSouris.CLICK));
        // this.souris.ajouter(this.deplacementPoint.bind(this), new EvenementSouris(TypeEvenementSouris.CLICK));
        this.souris.ajouter(this.miseAJourSelection.bind(this), new EvenementSouris(TypeEvenementSouris.CLICK));
    }

    private ajouterPoint(evenementSouris: MouseEvent): void {
        if (this.positionSourisValide(evenementSouris) && evenementSouris.button === BoutonSouris.GAUCHE) {
            this._piste.ajouterPoint(this.positionSouris(evenementSouris));
        }
    }

    private effacerPoint(evenementSouris: MouseEvent): void {
        if (this.positionSourisValide(evenementSouris) && evenementSouris.button === BoutonSouris.DROIT) {
            this._piste.effacerPoint(this.positionSouris(evenementSouris));
        }
    }

    private deplacementPoint(evenementSouris: MouseEvent): void {
        if (this.positionSourisValide(evenementSouris) && evenementSouris.button === BoutonSouris.DROIT) {
            this._piste.miseAJourElementSelectionne(this.positionSouris(evenementSouris));
        }
    }

    private miseAJourSelection(evenementSouris: MouseEvent): void {
        if (this.positionSourisValide(evenementSouris) && evenementSouris.button === BoutonSouris.GAUCHE) {
            this._piste.selectionnerIntersection(this.positionSouris(evenementSouris));
        }
    }

    private positionSourisValide(evenementSouris: MouseEvent): boolean {
        return this.transformateur.estSurScene(evenementSouris);
    }

    private positionSouris(evenementSouris: MouseEvent): Point {
        return this.transformateur.positionEcranVersScene(evenementSouris);
    }
}