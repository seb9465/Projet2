import { Component, OnInit } from "@angular/core";
import { ServiceInteractionComponent } from "../service-interaction-component/service-interaction-component";
import { InfojoueurService } from "../service-info-joueur/infojoueur.service";

export class Test {
    private hello: string;
    private bye: string;

    public constructor() {}

    public get helllo(): string { return this.hello; }
    public get byye(): string { return this.bye; }
}

@Component({
    selector: "app-main-grille",
    templateUrl: "./main-grille.component.html",
    styleUrls: ["./main-grille.component.css"],
    providers: [ServiceInteractionComponent, InfojoueurService]

})
export class MainGrilleComponent implements OnInit {
    public _motsObtenus: boolean;

    public constructor(private serviceInteractionComposants: ServiceInteractionComponent) {
        this._motsObtenus = false;
    }

    public ngOnInit(): void {
        this.serviceInteractionComposants.receptionMotsObtenus()
            .subscribe((motsObtenus) => {
                this._motsObtenus = motsObtenus;
            });
    }
}
