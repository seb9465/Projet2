import { ServiceInteractionComponent, CASE_NOIR } from "./service-interaction-component";
import { ServiceHttp } from "../serviceHttp/http-request.service";
import { TestBed } from "../../../../node_modules/@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TAILLE_TABLEAU } from "./../constantes";
import { listeMotsLongue, mockMatrice, unMotHorizontal } from "./../objetsTest/objetsTest";
import { Mot } from "../objetsTest/mot";
import { LettreGrille } from "../objetsTest/lettreGrille";
import { Subject } from "../../../../node_modules/rxjs/Subject";
import { Observable } from "../../../../node_modules/rxjs/Observable";

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
        it("Should call the 'next' function", () => {
            // I need to put <...> for the private functions and attributes to be spied.
            const spy: jasmine.Spy = spyOn<Subject<Mot>>(service["motPerduSujet"], "next");

            service.serviceEnvoieMotPerdu(unMotHorizontal);

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("ServiceReceptionMots function", () => {
        it("Should get the listeDesMotsObservale", () => {
            const mock: Observable<Mot[]> = new Subject<Mot[]>().asObservable();
            service["listeMotsObservable$"] = mock;

            expect(service.serviceReceptionMots()).toBe(mock);
        });
    });

    describe("ServiceReceptionMatriceLettres function", () => {
        it("Should get the matriceDesMotsSurGrilleObservable", () => {
            const mock: Observable<Array<Array<LettreGrille>>> = (new Subject<Array<Array<LettreGrille>>>()).asObservable();
            service["matriceDesMotsSurGrilleObservable$"] = mock;

            expect(service.serviceReceptionMatriceLettres()).toBe(mock);
        });
    });

    describe("ServiceReceptionMotSelectionne function", () => {
        it("Should get the motSelectionneObservable", () => {
            const mockMotSelectObs$: Observable<Mot> = (new Subject<Mot>()).asObservable();
            service["motSelectionneObservable$"] = mockMotSelectObs$;

            expect(service.serviceReceptionMotSelectionne()).toBe(mockMotSelectObs$);
        });
    });

    describe("ServiceReceptionMotTrouve function", () => {
        it("Should get the motTrouveObservable", () => {
            const mockMotTrouveObs$: Observable<Mot> = (new Subject<Mot>()).asObservable();
            service["motTrouveObservable$"] = mockMotTrouveObs$;

            expect(service.serviceReceptionMotTrouve()).toBe(mockMotTrouveObs$);
        });
    });

    describe("ServiceReceptionMotPerdu function", () => {
        it("Should get the motPerduObservable", () => {
            const mockMotPerduObs$: Observable<Mot> = (new Subject<Mot>()).asObservable();
            service["motPerduObservable$"] = mockMotPerduObs$;

            expect(service.serviceReceptionMotPerdu()).toBe(mockMotPerduObs$);
        });
    });
});
