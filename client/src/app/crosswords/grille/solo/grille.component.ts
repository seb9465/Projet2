import { Component, OnInit } from "@angular/core";
import { ServiceInteractionComponent } from "../../service-interaction-component/service-interaction-component";
import { InfojoueurService } from "../../service-info-joueur/infojoueur.service";
import { EncadrementCase } from "../librairieGrille/encadrementCase";
import { GrilleAbs } from "../grilleAbs";
import { OpaciteCase } from "./../librairieGrille/opaciteCase";
import { Mot } from "../../objetsTest/mot";

@Component({
    selector: "app-grille",
    templateUrl: "./grille.component.html",
    styleUrls: ["./grille.component.css"]
})
export class GrilleComponent extends GrilleAbs implements OnInit {
    public constructor(
        private listeMotsService: ServiceInteractionComponent,
        _servicePointage: InfojoueurService
    ) {
        super(_servicePointage);
    }

    public ngOnInit(): void {
        this.listeMotsService.souscrireRequeteGrille();
        this.mots = this.listeMotsService.mots;
        this.matriceDesMotsSurGrille = this.listeMotsService.matrice;

        this.initialiserSouscriptions();
    }

    private initialiserSouscriptions(): void {
        this.subscriptionMots = this.listeMotsService
            .serviceReceptionMots()
            .subscribe((mots) => {
                this.mots = mots;
                this.remplirPositionLettres();
            });

        this.subscriptionMatrice = this.listeMotsService
            .serviceReceptionMatriceLettres()
            .subscribe((matrice) => (this.matriceDesMotsSurGrille = matrice));

        this.subscriptionMotSelec = this.listeMotsService
            .serviceReceptionMotSelectionne()
            .subscribe((motSelec) => {
                this.motSelectionne = motSelec;
                this.motSelectionne.mot = this.motSelectionne.mot.toUpperCase();
                EncadrementCase.appliquerStyleDefautGrille(document);

                if (!this.motSelectionne.motTrouve) {
                    this.miseEnEvidence.miseEvidenceMot(
                        this.motSelectionne,
                        "red"
                    );
                    if (document.getElementById("00") !== null) {
                        this.focusSurBonneLettre();
                    }
                }
            });
    }

    protected envoieMotSelectionne(): void {
        this.listeMotsService.serviceEnvoieMotSelectionne(this.motSelectionne);
    }

    public enleverSelection(x: string, y: string): void {
        // matrice
        // mots
        super.remettreCasseOpaque();
    }

    public switchCheatMode(): void {
        for (const mot of this.mots) {
            mot.cheat = !mot.cheat;
        }
        this.listeMotsService.serviceEnvoieMots(this.mots);
        this.listeMotsService.souscrireServiceSocket();
    }

    protected retrieveWordFromClick(event: KeyboardEvent): Mot {
        const mot: Mot = super.retrieveWordFromClick(event);
        this.motSelectionne = mot;
        OpaciteCase.decouvrirCases(mot, this.matriceDesMotsSurGrille);
        this.envoieMotSelectionne();

        return mot;
    }

    protected envoyerMotTrouve(mot: Mot): void {
        this.listeMotsService.serviceEnvoieMotTrouve(mot);
    }
}
