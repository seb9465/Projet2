import { Component, OnInit } from "@angular/core";
import { InfoPartieAbs } from "../../info-partie/info-partie-abs";
import { SocketService } from "../../service-socket/service-socket";
import { PaquetPartie } from "../../objetsTest/paquetPartie";

@Component({
    selector: "app-info-partie-multijoueur",
    templateUrl: "./info-partie-multijoueur.component.html",
    styleUrls: ["./info-partie-multijoueur.component.css"]
})
export class InfoPartieMultijoueurComponent extends InfoPartieAbs implements OnInit {
    private _motsDecouvertsJoueur1: number;
    private _motsDecouvertsJoueur2: number;
    private _nomJoueur1: string;
    private _nomJoueur2: string;

    public constructor(private socketClient: SocketService) {
        super();
        this._motsDecouvertsJoueur1 = 0;
        this._motsDecouvertsJoueur2 = 0;
        this._nomJoueur1 = "Joueur 1";
        this._nomJoueur2 = "Joueur 2";
    }

    public ngOnInit(): void {
        this.chargerNomsJoueurs();
        this.miseAJourScores();
    }

    private chargerNomsJoueurs(): void {
        this.socketClient
            .telechargerPaquetPartie()
            .subscribe((paquet: PaquetPartie) => {
                this._nomJoueur1 = paquet.nomJoeurs[0];
                this._nomJoueur2 = paquet.nomJoeurs[1];
                this._difficulte = paquet.difficultee;
            });
    }

    private miseAJourScores(): void {
        this.socketClient
            .recevoirScore()
            .subscribe((nouveauScores: number[]) => {
                this._motsDecouvertsJoueur1 = nouveauScores[0];
                this._motsDecouvertsJoueur2 = nouveauScores[1];
            });
    }
}
