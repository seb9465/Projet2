import { ComponentFixture, TestBed } from "../../../../node_modules/@angular/core/testing";
import { PisteComponent } from "./piste.component";
import { GestionnaireEditionPiste } from "../editeurPiste/gestionnaireEditionPiste";
import { ServiceDeRenduPistes } from "../serviceDeRendu/serviceDeRenduPistes";
import { GestionnaireClavier } from "../clavier/gestionnaireClavier";
import { GestionnaireEcran } from "../ecran/gestionnaireEcran";
import { GestionnaireSouris } from "../souris/gestionnaireSouris";
import { GestionnaireBDCourse } from "../baseDeDonnee/GestionnaireBDCourse";
import { NbCaractMaxDirective } from "../directive-nb-caract-max/nb-caract-max.directive";
import { FormsModule } from "../../../../node_modules/@angular/forms";
import { PisteEdition } from "../piste/pisteEdition";

describe("Piste Component", () => {
    let fixture: ComponentFixture<PisteComponent>;
    let component: PisteComponent;
    let mockEditeurPiste: GestionnaireEditionPiste;
    let mockServiceRenduPiste: ServiceDeRenduPistes;
    let mockGestionnaireClavier: GestionnaireClavier;
    let mockGestionnaireEcran: GestionnaireEcran;
    let mockGestionnaireSouris: GestionnaireSouris;
    let mockGestionnaireBD: GestionnaireBDCourse;
    let mockPisteEdition: PisteEdition;

    beforeEach(() => {
        mockEditeurPiste = jasmine.createSpyObj(["importerPiste", "creerNouvellePiste", "mettreAJourPiste", "piste"]);
        mockServiceRenduPiste = jasmine.createSpyObj([""]);
        mockGestionnaireClavier = jasmine.createSpyObj([""]);
        mockGestionnaireEcran = jasmine.createSpyObj([""]);
        mockGestionnaireSouris = jasmine.createSpyObj([""]);
        mockGestionnaireBD = jasmine.createSpyObj(["pisteEdition"]);
        mockPisteEdition = jasmine.createSpyObj(["receptionNbPoints"]);

        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [PisteComponent, NbCaractMaxDirective],
            providers: [
                { provide: GestionnaireEditionPiste, useValue: mockEditeurPiste },
                { provide: ServiceDeRenduPistes, useValue: mockServiceRenduPiste },
                { provide: GestionnaireClavier, useValue: mockGestionnaireClavier },
                { provide: GestionnaireEcran, useValue: mockGestionnaireEcran },
                { provide: GestionnaireSouris, useValue: mockGestionnaireSouris },
                { provide: GestionnaireBDCourse, useValue: mockGestionnaireBD },
                { provide: PisteEdition, useValue: mockPisteEdition },
            ],
        });

        fixture = TestBed.createComponent(PisteComponent);
        component = fixture.componentInstance;
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(fixture).toBeDefined();
    });
});
