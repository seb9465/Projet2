import { GestionnaireEditionPiste } from "./gestionnaireEditionPiste";
import { TestBed } from "../../../../node_modules/@angular/core/testing";
import { GestionnaireBDCourse } from "../baseDeDonnee/GestionnaireBDCourse";
import { GestionnaireSouris } from "../souris/gestionnaireSouris";
import { GestionnaireCameraPiste } from "../camera/GestionnaireCameraPiste";
import { GestionnaireEcran } from "../ecran/gestionnaireEcran";
import { HttpClientTestingModule } from "../../../../node_modules/@angular/common/http/testing";

describe("Gestionnaire Edition Piste service", () => {
    let service: GestionnaireEditionPiste;
    let mockGestionnaireBD: GestionnaireBDCourse;
    let mockGestionnaireSouris: GestionnaireSouris;
    let mockGestionnaireCameraPiste: GestionnaireCameraPiste;
    let mockGestionnaireEcran : GestionnaireEcran;

    beforeEach(() => {
        mockGestionnaireBD = jasmine.createSpyObj(["pointsEdition", "creerNouvellePiste", "mettreAJourPiste"]);
        mockGestionnaireSouris = jasmine.createSpyObj(["inscrire"]);
        mockGestionnaireCameraPiste = jasmine.createSpyObj([""]);
        mockGestionnaireEcran = jasmine.createSpyObj([""]);

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [],
            providers: [
                GestionnaireEditionPiste,
                { provide: GestionnaireBDCourse, useValue: mockGestionnaireBD },
                { provide: GestionnaireSouris, useValue: mockGestionnaireSouris },
                { provide: GestionnaireCameraPiste, useValue: mockGestionnaireCameraPiste },
                { provide: GestionnaireEcran, useValue: mockGestionnaireEcran },
            ],
        });

        service = TestBed.get(GestionnaireEditionPiste);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    afterEach(() => {
        service = null;
    });
});
