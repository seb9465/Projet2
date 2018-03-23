import { Component, OnInit, OnDestroy, Injectable, /* Inject */ } from "@angular/core";
import { InfojoueurService } from "../../service-info-joueur/infojoueur.service";
import { ServiceHttp } from "../../serviceHttp/http-request.service";
import { ServiceInteractionComponent } from "../../service-interaction-component/service-interaction-component";
import { InfoPartieAbs } from "../../info-partie/info-partie-abs";
import * as CONST from "../../constantes";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";
// import { MatDialog, MatDialogRef, /* MAT_DIALOG_DATA */ } from "@angular/material/dialog";
// import { DialogComponent } from "../../dialog/dialog.component";

@Component({
  selector: "app-info-joueur-solo",
  templateUrl: "./info-joueur-solo.component.html",
  styleUrls: ["./info-joueur-solo.component.css"],
  // providers: [MAT_DIALOG_DATA]
})

@Injectable()
export class InfoJoueurSoloComponent extends InfoPartieAbs implements OnInit, OnDestroy {

  private _nomJoueur: string;
  private _nbMotsDecouverts: number;
  private _barreProgression: HTMLElement;
  private _subscriptionNbMotsDecouv: Subscription;

  // private dialogRef: MatDialogRef<DialogComponent>;

  public constructor(_servicePointage: InfojoueurService,
                     private _requeteGrille: ServiceInteractionComponent,
                     private httpReq: ServiceHttp,
                     private router: Router) {
    super(_servicePointage);
    this._nomJoueur = "Nom du joueur";
    this._nbMotsDecouverts = 0;
    this._difficulte = this.httpReq.difficulte.toString();
  }

  public ngOnInit(): void {
    this.initialiserSouscriptions();
    this._barreProgression = document.getElementById("progress-bar");
  }

/*   public openDialog(dialog: MatDialog): void {
    this.dialogRef = dialog.open(DialogComponent, {
      data: {difficulte: this._difficulte}
    });
  } */

  protected souscrireListeDeMots(): void {
    this._subscriptionListeMots = this._requeteGrille.serviceReceptionMots()
    .subscribe((listeMots) => {
      this._listeMots = listeMots;
    });
  }

  protected souscrireMotsDecouverts(): void {
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
    if (this.pourcentagePoint === 100) {
      this.finPartie();
    }
  }

  public finPartie(): void {
    this._subscriptionTimer.unsubscribe();
    this.router.navigateByUrl("FinPartie");
    // this.openDialog();
  }

  public ngOnDestroy(): void {
    this.desinscrireSouscriptions();
  }

  private desinscrireSouscriptions(): void {
    this._subscriptionListeMots.unsubscribe();
    this._subscriptionNbMotsDecouv.unsubscribe();
    this._subscriptionTimer.unsubscribe();
  }
}
