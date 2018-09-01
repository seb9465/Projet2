import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-enregistrer-partie-solo",
    templateUrl: "./enregistrer-partie-solo.component.html",
    styleUrls: ["./enregistrer-partie-solo.component.css"]
})
export class EnregistrerPartieSoloComponent implements OnInit {

    private _nomJoueur: string;

    public constructor() {
        this._nomJoueur = "";
    }

    public ngOnInit(): void {
    }

}
