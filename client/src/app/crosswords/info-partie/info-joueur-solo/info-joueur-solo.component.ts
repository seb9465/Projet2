import { Component, OnInit, OnDestroy, Injectable } from "@angular/core";
import { InfojoueurService } from "../../service-info-joueur/infojoueur.service";
import { ServiceHttp } from "../../serviceHttp/http-request.service";
import { ServiceInteractionComponent } from "../../service-interaction-component/service-interaction-component";
import { InfoPartieAbs } from "../../info-partie/info-partie-abs";
import * as CONST from "../../constantes";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";
import { Difficulte } from "../../../../../../common/communication/Difficulte";

const POURCENTAGE_MAX: number = 100;

@Component({
    selector: "app-info-joueur-solo",
    templateUrl: "./info-joueur-solo.component.html",
    styleUrls: ["./info-joueur-solo.component.css"],
})

@Injectable()
export class InfoJoueurSoloComponent extends InfoPartieAbs implements OnInit, OnDestroy {

    private _nomJoueur: string;
    private _nbMotsDecouverts: number;
    private _barreProgression: HTMLElement;
    private _subscriptionNbMotsDecouv: Subscription;
    private _subscriptionMotsObtenus: Subscription;

    public constructor( private _servicePointage: InfojoueurService,
                        private _serviceInteractionComp: ServiceInteractionComponent,
                        private httpReq: ServiceHttp,
                        private router: Router) {
        super();
        this._nomJoueur = "Nom du joueur";
        this._nbMotsDecouverts = 0;
        this._difficulte = Difficulte.Facile.toString();
    }

    public ngOnInit(): void {
        this._difficulte = this.httpReq.difficulte.toString();
        this.initialiserSouscriptions();
        this._barreProgression = document.getElementById("progress-bar");
    }

    protected initialiserSouscriptions(): void {
        this.souscrireMotsObtenus();
        this.souscrireListeDeMots();
        this.souscrireMotsDecouverts();
    }

    private souscrireMotsObtenus(): void {
        this._subscriptionMotsObtenus = this._serviceInteractionComp.receptionMotsObtenus()
        .subscribe((motsObtenus) => {
            if (motsObtenus) {
                super.initialiserSouscriptionsTimer();
            }
        });
    }

    private souscrireListeDeMots(): void {
        this._subscriptionListeMots = this._serviceInteractionComp.serviceReceptionMots()
            .subscribe((listeMots) => {
                this._listeMots = listeMots;
            });
    }

    private souscrireMotsDecouverts(): void {
        this._subscriptionNbMotsDecouv = this._servicePointage.serviceReceptionPointage()
            .subscribe((pointage) => {
                this._nbMotsDecouverts = pointage;
                this.majBarreProgression();
            });
    }

    public get pourcentagePoint(): number {
        if (this._listeMots.length === 0) {
            return 0;
        } else {
            return Math.round(this._nbMotsDecouverts / this._listeMots.length * CONST.CONVERSION_POURCENTAGE);
        }
    }

    private majBarreProgression(): void {
        this._barreProgression.style.width = String(this.pourcentagePoint) + "%";
        if (this.pourcentagePoint === POURCENTAGE_MAX) {
            this.arreterTimer();
            this.router.navigateByUrl("FinPartie");
        }
    }

    public ngOnDestroy(): void {
        this.desinscrireSouscriptions();
    }

    private desinscrireSouscriptions(): void {
        if (this._subscriptionMotsObtenus) {
            this._subscriptionMotsObtenus.unsubscribe();
            this._subscriptionMotsObtenus = null;
        }
        if (this._subscriptionNbMotsDecouv) {
            this._subscriptionNbMotsDecouv.unsubscribe();
            this._subscriptionNbMotsDecouv = null;
        }
    }
}
