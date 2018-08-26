// import { GestionnaireScene } from "./GestionnaireScene";
// import { TestBed } from "../../../../node_modules/@angular/core/testing";
// import { GestionnaireSkybox } from "../skybox/gestionnaireSkybox";
// import { GestionnaireVoitures } from "../voiture/gestionnaireVoitures";
// import { GestionnaireBDCourse } from "../baseDeDonnee/GestionnaireBDCourse";
// import { GestionnaireClavier } from "../clavier/gestionnaireClavier";

// /*  The error :
//     ERROR: 'THREE.Object3D.add: object not an instance of THREE.Object3D.', function () { ... }
//     is caused by that service.
//  */

// describe("Gestionnaire Scene Service", () => {
//     let service: GestionnaireScene;
//     let mockGestionnaireSkybox: GestionnaireSkybox;
//     let mockGestionnaireVoitures: GestionnaireVoitures;
//     let mockGestionnaireBDCourse: GestionnaireBDCourse;
//     let mockGestionnaireClavier: GestionnaireClavier;

//     /* tslint:disable-next-line:max-func-body-length */
//     beforeEach(() => {
//         mockGestionnaireSkybox = jasmine.createSpyObj([
//             "changerSkyboxAleatoire",
//             "skybox",
//             "changerTempsJournee",
//             "changerDecor"
//         ]);
//         mockGestionnaireVoitures = jasmine.createSpyObj([
//             "initialiser",
//             "voituresAI",
//             "voitureJoueur",
//             "miseAJourVoitures",
//             "changerTempsJournee",
//         ]);
//         mockGestionnaireBDCourse = jasmine.createSpyObj([
//             "pointsJeu",
//         ]);
//         mockGestionnaireClavier = jasmine.createSpyObj([
//             "inscrire",
//             "desinscrire",
//         ]);

//         TestBed.configureTestingModule({
//             imports: [],
//             declarations: [],
//             providers: [
//                 GestionnaireScene,
//                 { provide: GestionnaireSkybox, useValue: mockGestionnaireSkybox },
//                 { provide: GestionnaireVoitures, useValue: mockGestionnaireVoitures },
//                 { provide: GestionnaireBDCourse, useValue: mockGestionnaireBDCourse },
//                 { provide: GestionnaireClavier, useValue: mockGestionnaireClavier },
//             ],
//         });

//         service = TestBed.get(GestionnaireScene);
//     });

//     it("Should do nothing", () => {
//         expect(true).toBe(true);
//     });

//     afterEach(() => {
//         service = null;
//     });
// });
