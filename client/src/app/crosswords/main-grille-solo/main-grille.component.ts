import { Component, OnInit } from "@angular/core";
import { ServiceInteractionComponent } from "../service-interaction-component/service-interaction-component";
import { InfojoueurService } from "../service-info-joueur/infojoueur.service";

@Component({
    selector: "app-main-grille",
    templateUrl: "./main-grille.component.html",
    styleUrls: ["./main-grille.component.css"],
    providers: [ServiceInteractionComponent, InfojoueurService]

})
export class MainGrilleComponent implements OnInit {
    private motsObtenus: boolean;

    public constructor(private serviceInteractionComposants: ServiceInteractionComponent) {
        this.motsObtenus = false;
    }

    public ngOnInit(): void { }
}
