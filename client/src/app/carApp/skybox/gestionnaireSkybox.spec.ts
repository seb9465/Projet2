import { GestionnaireSkybox, SKYBOX } from "./gestionnaireSkybox";
import { TestBed } from "../../../../node_modules/@angular/core/testing";
import { TempsJournee } from "./tempsJournee";
import { NOM_TEXTURE_PISTE } from "../elementsAffichage/jeu/segmentPiste";

describe("Gestionnaire SkyBox Service", () => {
    let service: GestionnaireSkybox;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                GestionnaireSkybox
            ],
        });

        service = TestBed.get(GestionnaireSkybox);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(service).toBeDefined();
    });

    it ("Constructeur", () => {
        service = new GestionnaireSkybox();
        expect(service).toBeDefined();
        expect(service.skybox).toBeDefined();
    });

    it ("Changer decor", () => {
        const skyboxAvant: string = service["skyboxCourante"]["URL_ENVIRONNEMENT"];
        const tempsAvant: TempsJournee = service["skyboxCourante"]["tempsJournee"];
        service.changerDecor();
        const skyboxApres: string = service["skyboxCourante"]["URL_ENVIRONNEMENT"];
        const tempsApres: TempsJournee = service["skyboxCourante"]["tempsJournee"];
        expect(skyboxAvant).not.toEqual(skyboxApres);
        expect(tempsAvant).toEqual(tempsApres);
    });

    it ("Changer temps journee pour jour", () => {
        service.changerTempsJournee(TempsJournee.Nuit);
        const tempsTest: TempsJournee = TempsJournee.Jour;
        const skyboxAvant: string = service["skyboxCourante"]["URL_ENVIRONNEMENT"];
        const tempsAvant: TempsJournee = service["skyboxCourante"]["tempsJournee"];
        service.changerTempsJournee(tempsTest);
        const skyboxApres: string = service["skyboxCourante"]["URL_ENVIRONNEMENT"];
        const tempsApres: TempsJournee = service["skyboxCourante"]["tempsJournee"];
        expect(skyboxAvant).not.toEqual(skyboxApres);
        expect(tempsApres).toEqual(tempsTest);
        expect(tempsApres).not.toEqual(tempsAvant);
    });

    it ("Changer temps journee pour nuit", () => {
        service.changerTempsJournee(TempsJournee.Jour);
        const tempsTest: TempsJournee = TempsJournee.Nuit;
        const skyboxAvant: string = service["skyboxCourante"]["URL_ENVIRONNEMENT"];
        const tempsAvant: TempsJournee = service["skyboxCourante"]["tempsJournee"];
        service.changerTempsJournee(tempsTest);
        const skyboxApres: string = service["skyboxCourante"]["URL_ENVIRONNEMENT"];
        const tempsApres: TempsJournee = service["skyboxCourante"]["tempsJournee"];
        expect(skyboxAvant).not.toEqual(skyboxApres);
        expect(tempsApres).toEqual(tempsTest);
        expect(tempsApres).not.toEqual(tempsAvant);
    });

    it ("La surface hors-piste est différente de la piste", () => {
        for (const element of SKYBOX) {
            expect(element.plancher).not.toEqual(NOM_TEXTURE_PISTE);
        }
    });

    afterEach(() => {
        service = null;
    });
});
