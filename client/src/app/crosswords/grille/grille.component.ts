import { Component, OnInit } from "@angular/core";
import { Word } from "../mockObject/word";
import { Subscription } from 'rxjs/Subscription';

import { lettreGrille } from "../mockObject/word";
import { RequeteDeGrilleService } from "../service-Requete-de-Grille/requete-de-grille.service";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "app-grille",
  templateUrl: "./grille.component.html",
  styleUrls: ["./grille.component.css"]
})

export class GrilleComponent implements OnInit, OnDestroy {
  private mots: Word[];
  private matriceDesMotsSurGrille: Array<Array<lettreGrille>>;
  private subscriptionMots: Subscription;
  private subscriptionMatrice: Subscription;
  // private motsAAfiicher: String[];
  // private dessu: boolean;
  // private compteur: number;

  public constructor(private listeMotsService: RequeteDeGrilleService) {
    this.mots = this.listeMotsService.getMots();
    this.matriceDesMotsSurGrille = this.listeMotsService.getMatrice();
    this.subscriptionMots = this.listeMotsService.serviceReceptionMots().subscribe(mots => this.mots = mots);
    this.subscriptionMatrice = this.listeMotsService.serviceReceptionMatriceLettres().subscribe(matrice => this.matriceDesMotsSurGrille = matrice);
  }

  ngOnInit() {

  }

  envoieMots(): void {
    this.listeMotsService.serviceEnvoieMots(this.mots);
  }
  
  envoieMatrice(): void {
    this.listeMotsService.serviceEnvoieMatriceLettres(this.matriceDesMotsSurGrille);
  }

  opacite(etat:boolean): String {
    if(!etat)
      return("1")
    return("0")
  }

  onKey(event:any){
    let element = event.srcElement.nextElementSibling;
    console.log(element);

    if(element == null){
      console.log("null")
      return;
    }
    else{
      let elem = document.getElementById("testFocus");
      elem.focus();
    }
  }

  ngOnDestroy() {
    this.subscriptionMots.unsubscribe();
    this.subscriptionMatrice.unsubscribe();
  }

  print(event:any):void {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    console.log(idAttr);
  }

  makeIDs(i:any, j:any): any{
    let a = String(i);
    let b = String(j);
    return a+b;
  }
}
