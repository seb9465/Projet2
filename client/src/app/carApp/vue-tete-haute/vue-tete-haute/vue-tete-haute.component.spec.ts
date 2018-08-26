import { ComponentFixture, TestBed } from "@angular/core/testing";
import { VueTeteHauteComponent } from "./vue-tete-haute.component";
import { TimerService } from "../../timer/timer.service";
import { GestionnaireDesTempsService } from "../../GestionnaireDesTemps/gestionnaire-des-temps.service";
import { TempsAffichage } from "./tempsAffichage";
import { Router } from "@angular/router";

describe("VueTeteHauteComponent", () => {
    let component: VueTeteHauteComponent;
    let fixture: ComponentFixture<VueTeteHauteComponent>;
    let mockTimerService: TimerService;
    let mockGestionnaireDesTemps: GestionnaireDesTempsService;
    let mockRouter: Router;

    beforeEach(() => {
        mockTimerService = jasmine.createSpyObj([
            "debuterCourse",
            "obtenirTempsActuel",
            "obtenirTempsTourJoueur",
            "nouveauTour",
        ]);
        mockGestionnaireDesTemps = jasmine.createSpyObj([
            "actualiserTempsJoueur",
        ]);
        mockRouter = jasmine.createSpyObj([
            "navigate"
        ]);

        TestBed.configureTestingModule({
            declarations: [VueTeteHauteComponent],
            providers: [
                { provide: TimerService, useValue: mockTimerService },
                { provide: GestionnaireDesTempsService, useValue: mockGestionnaireDesTemps },
                { provide: Router, useValue: mockRouter },
            ]
        });

        fixture = TestBed.createComponent(VueTeteHauteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("Devrait bien construire", () => {
        expect(component).toBeTruthy();
    });

    const tempsAffichage: TempsAffichage = new TempsAffichage();

    it("Ajouter 0 devrait ajouter un 0 si le temps envoyé est unitaire", () => {
        expect(tempsAffichage["ajouterZero"]("6")).toEqual("06");
    });

    it("Ne devrait pas ajouter un 0 si le temps envoyé est dans les dizaines", () => {
        expect(tempsAffichage["ajouterZero"]("44")).toEqual("44");
    });

    const tempsTest: number = 133443;

    it("Le temps de test = " + tempsTest + " devrait donner deux minutes", () => {
        expect(tempsAffichage["formaterTempsMinute"](tempsTest)).toEqual("02");
    });

    it("Le temps de test = 0 devrait donner zero minutes", () => {
        expect(tempsAffichage["formaterTempsMinute"](0)).toEqual("00");
    });

    it("Le temps de test = " + tempsTest + " devrait donner X secondes", () => {
        expect(tempsAffichage["formaterTempsSec"](tempsTest)).toEqual("13");
    });

    it("Le temps de test = 0 devrait donner zero secondes", () => {
        expect(tempsAffichage["formaterTempsSec"](0)).toEqual("00");
    });

    it("Le temps de test = " + tempsTest + " devrait donner X millisecondes", () => {
        expect(tempsAffichage["formaterTempsMS"](tempsTest)).toEqual("44");
    });

    it("Le temps de test = 0 devrait donner zero millisecondes", () => {
        expect(tempsAffichage["formaterTempsMS"](0)).toEqual("00");
    });
});
