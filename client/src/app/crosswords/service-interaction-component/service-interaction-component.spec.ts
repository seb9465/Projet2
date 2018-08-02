import { ServiceInteractionComponent, CASE_NOIR } from "./service-interaction-component";
import { ServiceHttp } from "../serviceHttp/http-request.service";
import { TestBed } from "../../../../node_modules/@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TAILLE_TABLEAU } from "./../constantes";
import { listeMotsLongue, mockMatrice } from "./../objetsTest/objetsTest";
import { Mot } from "../objetsTest/mot";
import { LettreGrille } from "../objetsTest/lettreGrille";

describe("Service Interaction Component", () => {
    let mockServiceHttp: jasmine.SpyObj<ServiceHttp>;
    let service: ServiceInteractionComponent;
    beforeEach(() => {
        mockServiceHttp = jasmine.createSpyObj(["obtenirMots"]);

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ServiceInteractionComponent,
                { provide: ServiceHttp, useValue: mockServiceHttp }
            ]
        });

        service = TestBed.get(ServiceInteractionComponent);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(service).toBeDefined();
    });

    it("Should be truthy", () => {
        expect(service).toBeTruthy();
    });

    describe("Constructor - GenererGrille function", () => {
        it("Should have initialized a non empty matrice", () => {
            expect(service["matriceDesMotsSurGrille"]).toBeDefined();
        });
        it("Should have initilized every spot of the matrice with a CASE_NOIR", () => {
            for (let i: number = 0; i < TAILLE_TABLEAU; i++) {
                for (let j: number = 0; j < TAILLE_TABLEAU; j++) {
                    expect(service["matriceDesMotsSurGrille"][i][j]).toBe(CASE_NOIR);
                }
            }
        });
    });

    describe("Getter - Setter", () => {
        it("Should get mots", () => {
            service["_mots"] = listeMotsLongue;

            const result: Mot[] = service.mots;

            expect(result).toBe(listeMotsLongue);
        });
        it("Should get matrice", () => {
            service["matriceDesMotsSurGrille"] = mockMatrice;

            const result: Array<Array<LettreGrille>> = service.matrice;

            expect(result).toBe(mockMatrice);
        });
    });

    describe("SouscrireServiceSocket function", () => {

    });

    describe("SouscrireRequeteGrille function", () => {

    });

    describe("InsererMotsDansGrille function", () => {

    });

    describe("AssignerLettre function", () => {

    });

    describe("ObtenirLettre function", () => {

    });

    describe("ServiceEnvoieMots function", () => {

    });

    describe("ServiceEnvoieMatriceLettres function", () => {

    });

    describe("ServiceEnvoieMotSelectionne function", () => {

    });

    describe("ServiceEnvoieMotPerdu function", () => {

    });

    describe("ServiceReceptionMots function", () => {

    });

    describe("ServiceReceptionMatriceLettres function", () => {

    });

    describe("ServiceReceptionMotSelectionne function", () => {

    });

    describe("ServiceReceptionMotTrouve function", () => {

    });

    describe("ServiceReceptionMotPerdu function", () => {

    });
});
