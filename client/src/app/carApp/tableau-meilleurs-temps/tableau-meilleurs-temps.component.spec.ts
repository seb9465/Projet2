import { ComponentFixture, TestBed } from "../../../../node_modules/@angular/core/testing";
import { TableauMeilleursTempsComponent } from "./tableau-meilleurs-temps.component";
import { GestionnaireBDCourse } from "../baseDeDonnee/GestionnaireBDCourse";
import { GestionnaireDesTempsService } from "../GestionnaireDesTemps/gestionnaire-des-temps.service";
import { FormsModule } from "../../../../node_modules/@angular/forms";
import { MatDividerModule } from "../../../../node_modules/@angular/material/divider";
import { Point } from "../elementsGeometrie/point";
import { PisteBD } from "../piste/IPisteBD";
import { TempsJoueur } from "../GestionnaireDesTemps/tempsJoueur";
import { ITempsBD } from "../piste/ITempsBD";
import { ResultatJoueur } from "../fin-course/resultatJoueur";

describe("Tableau Meilleurs Temps Component", () => {
    const LONGUEUR: number = 100;
    const PISTE_TEST: Point[] = [
        new Point(0, 0),
        new Point(-LONGUEUR, 0),
        new Point(-LONGUEUR, -LONGUEUR),
        new Point(0, -LONGUEUR),
    ];
    const PISTE: PisteBD = {
        _id: "2",
        nom: "Piste 2",
        description: "Champs de ble",
        points: PISTE_TEST,
        type: "Type1",
        temps: [
            { nom: "Joe La Bine", min: 0, sec: 0, milliSec: 0 },
            { nom: "Joe La Bine", min: 1, sec: 0, milliSec: 0 },
            { nom: "Joe La Bine", min: 2, sec: 0, milliSec: 0 },
            { nom: "Joe La Bine", min: 0, sec: 30, milliSec: 0 }],
        nbFoisJoue: 2
    };
    const NB_MILLISECS_DANS_UNE_MIN: number = 60000;
    const TEMPS_JOUEUR: TempsJoueur = new TempsJoueur();
    TEMPS_JOUEUR.nom = "Joe La Bine";
    TEMPS_JOUEUR.definirAI = false;
    TEMPS_JOUEUR.definirTempsCourse = NB_MILLISECS_DANS_UNE_MIN;

    let fixture: ComponentFixture<TableauMeilleursTempsComponent>;
    let component: TableauMeilleursTempsComponent;
    let mockGestionnaireBDCourse: GestionnaireBDCourse;
    let mockGestionnaireTemps: GestionnaireDesTempsService;

    beforeEach(() => {
        mockGestionnaireBDCourse = jasmine.createSpyObj([
            "pisteJeu",
            "mettreAJourPiste"
        ]);
        mockGestionnaireTemps = jasmine.createSpyObj([
            "obtenirTempsDesJoueurs",
        ]);

        TestBed.configureTestingModule({
            imports: [FormsModule, MatDividerModule],
            declarations: [
                TableauMeilleursTempsComponent,
            ],
            providers: [
                { provide: GestionnaireBDCourse, useValue: mockGestionnaireBDCourse },
                { provide: GestionnaireDesTempsService, useValue: mockGestionnaireTemps }
            ],
        });

        fixture = TestBed.createComponent(TableauMeilleursTempsComponent);
        component = fixture.componentInstance;
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Devrait bien construire", () => {
        expect(component).toBeTruthy();
    });

    // describe("Piste courante : ", () => {
    //     beforeEach(() => {
    //         component["_pisteCourante"] = PISTE;
    //         component["classerTempsTableau"]();
    //         component.ngOnInit();
    //         component["_resultatsCourse"].push(new ResultatJoueur("Joueur", TEMPS_JOUEUR));
    //     });

    //     it("L'attribut devrait être défini.", () => {
    //         expect(component["_pisteCourante"]).toBeDefined();
    //     });
    //     it("Devrait contenir 4 pistes.", () => {
    //         const NB_PISTES_ATTENDU: number = 4;
    //         expect(component["_pisteCourante"].temps.length).toBe(NB_PISTES_ATTENDU);
    //     });
    //     it("Devrait contenir un des temps défini plus haut.", () => {
    //         const UN_TEMPS: ITempsBD = { nom: "Joe La Bine", min: 0, sec: 0, milliSec: 0 };
    //         expect(component["_pisteCourante"].temps).toContain(UN_TEMPS);
    //     });
    // });

    // describe("Resultat course : ", () => {
    //     beforeEach(() => {
    //         component["_pisteCourante"] = PISTE;
    //         component["classerTempsTableau"]();
    //         component.ngOnInit();
    //         component["_resultatsCourse"].push(new ResultatJoueur("Joueur", TEMPS_JOUEUR));
    //     });

    //     it("Lattribut devrait être défini.", () => {
    //         expect(component["_resultatsCourse"]).toBeDefined();
    //     });
    //     it("Devrait contenir le joueur en premiere position du tableau.", () => {
    //         expect(component["_resultatsCourse"][0].nom).toBe("Joueur");
    //     });
    // });
});
