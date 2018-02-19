import { Injectable } from "@angular/core";
import Stats = require("stats.js");
import { WebGLRenderer } from "three";
import { GestionnaireScene } from "../scene/GestionnaireScene";
import { GestionnaireCamera } from "../camera/GestionnaireCamera";
import { GestionnaireEcran } from "../ecran/gestionnaireEcran";

@Injectable()
export class ServiceDeRendu {
    private renderer: WebGLRenderer;
    private stats: Stats;
    private tempsDerniereMiseAJour: number;

    public constructor(private gestionnaireScene: GestionnaireScene,
                       private gestionnaireCamera: GestionnaireCamera,
                       private gestionnaireEcran: GestionnaireEcran) {
    }

    // Initialisation

    public async initialiser(): Promise<void> {
        await this.initialiserScene();
        this.initialiserStats();
        this.commencerBoucleDeRendu();
    }

    private initialiserStats(): void {
        this.stats = new Stats();
        this.stats.dom.style.position = "absolute";
        this.gestionnaireEcran.ajouterElementConteneur(this.stats.dom);
    }

    private async initialiserScene(): Promise<void> {
        await this.gestionnaireScene.creerScene();
    }

    // Rendu

    private commencerBoucleDeRendu(): void {
        this.renderer = new WebGLRenderer();
        this.renderer.setPixelRatio(devicePixelRatio);
        this.gestionnaireEcran.ajouterElementConteneur(this.renderer.domElement);
        this.redimensionnement();

        this.tempsDerniereMiseAJour = Date.now();

        this.rendu();
    }

    private rendu(): void {
        requestAnimationFrame(() => this.rendu());
        this.miseAJour();
        this.renderer.render(this.gestionnaireScene, this.gestionnaireCamera.camera);
        this.stats.update();
    }

    private miseAJour(): void {
        const tempsDepuisDerniereTrame: number = Date.now() - this.tempsDerniereMiseAJour;
        this.gestionnaireScene.miseAJour(tempsDepuisDerniereTrame);
        this.tempsDerniereMiseAJour = Date.now();

        this.redimensionnement();
    }

    // Mise à jour de la taille de la fenetre

    public redimensionnement(): void {
        if (this.gestionnaireEcran.aEteRedimensionne) {
            this.renderer.setSize(this.gestionnaireEcran.largeur, this.gestionnaireEcran.hauteur);
            this.gestionnaireCamera.redimensionnement(this.gestionnaireEcran.largeur, this.gestionnaireEcran.hauteur);
            this.gestionnaireEcran.aEteRedimensionne = false;
        }
    }
}
