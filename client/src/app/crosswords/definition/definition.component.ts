import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

import { RequeteDeGrilleService } from '../service-Requete-de-Grille/requete-de-grille.service';
import { Word, LettreGrille } from '../mockObject/word';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})

export class DefinitionComponent implements OnDestroy, OnInit {
  private mots: Word[];
  public matriceDesMotsSurGrille: Array<Array<LettreGrille>>;
  private subscriptionMots: Subscription;
  private subscriptionMatrice: Subscription;
  private reponse: String;
  private motSelectionne: Word;

  private constructor (private listeMotsService: RequeteDeGrilleService) {
    this.mots = this.listeMotsService.getMots();
    this.matriceDesMotsSurGrille = this.listeMotsService.getMatrice();
    this.subscriptionMots = this.listeMotsService.serviceReceptionMots().subscribe(mots => this.mots = mots);
    this.subscriptionMatrice = this.listeMotsService.serviceReceptionMatriceLettres().subscribe(matrice => this.matriceDesMotsSurGrille = matrice);
  }

  ngOnInit() { }

  envoieMots(): void {
    this.listeMotsService.serviceEnvoieMots(this.mots);
  }
  
  envoieMatrice(): void {
    this.listeMotsService.serviceEnvoieMatriceLettres(this.matriceDesMotsSurGrille);
  }

  getMots(): Word[] {
    return this.mots;
  }

  getMatriceDesMotsGrille(): Array<Array<LettreGrille>> {
    return this.matriceDesMotsSurGrille;
  }

  changementMotSelectionne(mot: Word): void {
    for(let mot of this.mots) {
      mot.activer = false;
    }
    this.motSelectionne = mot;
    mot.activer = !mot.activer;

    this.decouvrirCases(mot);
  }

  decouvrirCases(mot: Word): void {
    this.cacherCases();
    for (let indice: number = 0 ; indice < mot.longeur ; indice++) {
      if (mot.vertical) {
        this.matriceDesMotsSurGrille[mot.premierX][indice + mot.premierY].caseDecouverte = true;
      } else {
        this.matriceDesMotsSurGrille[indice + mot.premierX][mot.premierY].caseDecouverte = true;
      }
    }
    this.envoieMatrice();
  }

  decouvrirLettre(mot: Word): void {
    for (let indice: number = 0 ; indice < mot.longeur ; indice++) {
      if (mot.vertical) {
        this.matriceDesMotsSurGrille[mot.premierX][indice + mot.premierY].lettreDecouverte = true;
      } else {
        this.matriceDesMotsSurGrille[indice + mot.premierX][mot.premierY].lettreDecouverte = true;
      }
    }
    this.envoieMatrice();
  }

  // Décommenter les lignes dans cette fonction pour remettre la fonctionnalité
  // des lettres cachées sur la grille.
  cacherCases(): void {
    for (let ligne of this.matriceDesMotsSurGrille) {
      for (let lettre of ligne) {
        // if (lettre.lettreDecouverte == true) {
          lettre.caseDecouverte = false;
        // }
      }
    }
  }

  verifierTentative(tentative: String) {
    if(tentative.toLocaleUpperCase() === this.motSelectionne.mot.toLocaleUpperCase()) {
      this.decouvrirLettre(this.motSelectionne);
      this.reponse = 'Bonne Reponse !';
    } else {
      this.reponse = 'Mauvaise Reponse !';
    }
  }

  ngOnDestroy() {
    this.subscriptionMots.unsubscribe();
    this.subscriptionMatrice.unsubscribe();
  }

  private afficherRegle(): void {
    alert('Cliquez sur une définition afin d\'effectuer une tentative.');
  }
}
