import { Component, OnInit } from "@angular/core";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { Subscription } from "rxjs/Subscription";
import { ServiceInteractionComponent } from "../service-interaction-component/service-interaction-component";
import { Mot } from "../objetsTest/mot";
import { LettreGrille } from "../objetsTest/lettreGrille";
import { OpaciteCase } from "../grille/librairieGrille/opaciteCase";

@Component({
    selector: "app-definition",
    templateUrl: "./definition.component.html",
    styleUrls: ["./definition.component.css"]
})

export class DefinitionComponent implements OnInit, OnDestroy {
    private _mots: Mot[];
    private _matriceDesMotsSurGrille: Array<Array<LettreGrille>>;
    private _motSelectionne: Mot;

    private subscriptionMots: Subscription;
    private subscriptionMatrice: Subscription;
    private subscriptionMotSelec: Subscription;
    private subscriptionMotTrouve: Subscription;
    private subscriptionMotPerdu: Subscription;

    public constructor(private listeMotsService: ServiceInteractionComponent) {
        this._mots = this.listeMotsService.mots;
        this._matriceDesMotsSurGrille = this.listeMotsService.matrice;
    }

    public ngOnInit(): void {
        this.initialiserSouscriptions();
    }

    public ngOnDestroy(): void {
        if (this.subscriptionMots) {
            this.subscriptionMots.unsubscribe();
        }
        if (this.subscriptionMatrice) {
            this.subscriptionMatrice.unsubscribe();
        }
        if (this.subscriptionMotSelec) {
            this.subscriptionMotSelec.unsubscribe();
        }
        if (this.subscriptionMotTrouve) {
            this.subscriptionMotTrouve.unsubscribe();
        }
        if (this.subscriptionMotPerdu) {
            this.subscriptionMotPerdu.unsubscribe();
        }
    }

    public get mots(): Mot[] {
        return this._mots;
    }

    public set mots(desMots: Mot[]) {
        this._mots = desMots;
    }

    public get matriceDesMotsSurGrille(): Array<Array<LettreGrille>> {
        return this._matriceDesMotsSurGrille;
    }

    public set matriceDesMotsSurGrille(matrice: Array<Array<LettreGrille>>) {
        this._matriceDesMotsSurGrille = matrice;
    }

    public get motSelectionne(): Mot {
        return this._motSelectionne;
    }

    public set motSelectionne(mot: Mot) {
        this._motSelectionne = mot;
    }

    // Souscriptions

    private initialiserSouscriptions(): void {
        this.souscrireReceptionMots();
        this.souscrireSelectionMots();
        this.souscrireReceptionMatrice();
        this.souscrireMotsTrouves();
        this.souscrireMotsPerdus();
    }

    private souscrireReceptionMots(): void {
        this.subscriptionMots = this.listeMotsService.serviceReceptionMots()
            .subscribe((mots) => this._mots = mots);
    }

    private souscrireSelectionMots(): void {
        this.subscriptionMotSelec = this.listeMotsService.serviceReceptionMotSelectionne().subscribe((motSelect) => {
            this._motSelectionne = motSelect;
            this.miseAJourMotSelectionne(this._motSelectionne);
        });
    }

    private souscrireReceptionMatrice(): void {
        this.subscriptionMatrice = this.listeMotsService.serviceReceptionMatriceLettres()
            .subscribe((matrice) => this._matriceDesMotsSurGrille = matrice);
    }

    private souscrireMotsTrouves(): void {
        this.subscriptionMotTrouve = this.listeMotsService.serviceReceptionMotTrouve()
            .subscribe((mot: Mot) => {
                if (document.getElementById(mot.mot)) {
                    document.getElementById(mot.mot).classList.add("motTrouve");
                }
            });
    }

    private souscrireMotsPerdus(): void {
        this.subscriptionMotPerdu = this.listeMotsService.serviceReceptionMotPerdu()
            .subscribe((mot: Mot) => {
                if (document.getElementById(mot.mot)) {
                    document.getElementById(mot.mot).classList.add("motPerdu");
                }
            });
    }

    // Changement d'un mot

    public changementMotSelectionne(mot: Mot): void {
        if (!mot.motTrouve) {
            this.miseAJourMotSelectionne(mot);
            this.envoieMotSelectionne();
        }
    }

    private envoieMotSelectionne(): void {
        this.listeMotsService.serviceEnvoieMotSelectionne(this._motSelectionne);
    }

    private miseAJourMotSelectionne(mot: Mot): void {
        this.changementMot(mot);
        this.decouvrirCases(mot);
    }

    private changementMot(mot: Mot): void {
        this._mots.forEach((element: Mot) => element.activer = false);
        this._motSelectionne = mot;
        mot.activer = !mot.activer;
    }

    private decouvrirCases(mot: Mot): void {
        OpaciteCase.decouvrirCases(mot, this._matriceDesMotsSurGrille);
        this.envoieMatrice();
    }

    private envoieMatrice(): void {
        this.listeMotsService.serviceEnvoieMatriceLettres(this._matriceDesMotsSurGrille);
    }
}
