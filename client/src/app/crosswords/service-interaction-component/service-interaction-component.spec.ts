import {
    ServiceInteractionComponent,
    CASE_NOIR
} from "./service-interaction-component";
import { ServiceHttp } from "../serviceHttp/http-request.service";
import { TestBed } from "../../../../node_modules/@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TAILLE_TABLEAU } from "./../constantes";
import {
    listeMotsLongue,
    mockMatrice,
    unMotHorizontal,
    listeMotsCourte,
    unMotVertical
} from "./../objetsTest/objetsTest";
import { Mot } from "../objetsTest/mot";
import { LettreGrille } from "../objetsTest/lettreGrille";
import { Subject } from "../../../../node_modules/rxjs/Subject";
import { Observable } from "../../../../node_modules/rxjs/Observable";
import { of } from "../../../../node_modules/rxjs/observable/of";

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
                    expect(service["matriceDesMotsSurGrille"][i][j]).toBe(
                        CASE_NOIR
                    );
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
        it("Should call the serviceEnvoieMots function", () => {
            const spy: jasmine.Spy = spyOn(service, "serviceEnvoieMots");

            service.souscrireServiceSocket();

            expect(spy).toHaveBeenCalled();
        });
        it("Should call the serviceEnvoieMatriceLettres function", () => {
            const spy: jasmine.Spy = spyOn(service, "serviceEnvoieMatriceLettres");

            service.souscrireServiceSocket();

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("SouscrireRequeteGrille function", () => {
        beforeEach(() => {
            mockServiceHttp.obtenirMots.and.returnValue(of(listeMotsCourte));
        });

        it("Should get a list of words from the Http Service", () => {
            service.souscrireRequeteGrille();

            expect(service["_mots"]).not.toBeUndefined();
        });
        it("Should call the serviceEnvoieMots function", () => {
            const spy: jasmine.Spy = spyOn(service, "serviceEnvoieMots");

            service.souscrireRequeteGrille();

            expect(spy).toHaveBeenCalled();
        });
        it("Should call the envoieMatrice function", () => {
            const spy: jasmine.Spy = spyOn(service, "serviceEnvoieMatriceLettres");

            service.souscrireRequeteGrille();

            expect(spy).toHaveBeenCalled();
        });
        it("Should call the insererMotsDansGrille function", () => {
            // <any> for the private function.
            const spy: jasmine.Spy = spyOn<any>(service, "insererMotsDansGrille");

            service.souscrireRequeteGrille();

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("InsererMotsDansGrille function", () => {
        it("Should insert the words in the grid", () => {
            service["_mots"] = listeMotsCourte;

            service["insererMotsDansGrille"]();

            let result: LettreGrille;
            for (const mot of listeMotsCourte) {
                for (let i: number = 0; i < mot.longueur; i++) {
                    mot.estVertical ?
                        (result = service.matrice[mot.premierX][mot.premierY + i]) :
                        (result = service.matrice[mot.premierX + i][mot.premierY]);
                    expect(result.lettre).toEqual(mot.mot[i]);
                }
            }
        });
        it("Should call the assignerLettre function", () => {
            const spy: jasmine.Spy = spyOn<any>(service, "assignerLettre");
            service["_mots"] = listeMotsCourte;

            service["insererMotsDansGrille"]();

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("AssignerLettre function", () => {
        it("Should return the first letter of an horizontal word", () => {
            const expectedResult: LettreGrille = { caseDecouverte: false, lettre: unMotHorizontal.mot[0], lettreDecouverte: false };

            service["assignerLettre"](unMotHorizontal, 0);

            const result: LettreGrille = service.matrice[unMotHorizontal.premierX][unMotHorizontal.premierY];

            expect(result).toEqual(expectedResult);
        });
        it("Should return the last letter of an horizontal word", () => {
            const expectedResult: LettreGrille = {
                caseDecouverte: false,
                lettre: unMotHorizontal.mot[unMotHorizontal.longueur - 1],
                lettreDecouverte: false
            };

            service["assignerLettre"](unMotHorizontal, unMotHorizontal.longueur - 1);

            const result: LettreGrille = service.matrice[unMotHorizontal.premierX + unMotHorizontal.longueur - 1][unMotHorizontal.premierY];

            expect(result).toEqual(expectedResult);
        });
        it("Should return the first letter of a vertical word", () => {
            const expectedResult: LettreGrille = { caseDecouverte: false, lettre: unMotVertical.mot[0], lettreDecouverte: false };

            service["assignerLettre"](unMotVertical, 0);

            const result: LettreGrille = service.matrice[unMotVertical.premierX][unMotVertical.premierY];

            expect(result).toEqual(expectedResult);
        });
        it("Should return the last letter of an vertical word", () => {
            const expectedResult: LettreGrille = {
                caseDecouverte: false,
                lettre: unMotVertical.mot[unMotVertical.longueur - 1],
                lettreDecouverte: false
            };

            service["assignerLettre"](unMotVertical, unMotVertical.longueur - 1);

            const result: LettreGrille = service.matrice[unMotVertical.premierX][unMotVertical.premierY + unMotVertical.longueur - 1];

            expect(result).toEqual(expectedResult);
        });
    });

    describe("ObtenirLettre function", () => {
        it("Should return the first letter", () => {
            const expectedResult: LettreGrille = { caseDecouverte: false, lettre: unMotHorizontal.mot[0], lettreDecouverte: false };

            const result: LettreGrille = service["obtenirLettre"](unMotHorizontal, 0);

            expect(result).toEqual(expectedResult);
        });
    });

    describe("ServiceEnvoieMots function", () => {
        it("Should call the 'next' function", () => {
            // I need to put <...> for the private functions and attributes to be spied.
            const spy: jasmine.Spy = spyOn<Subject<Mot[]>>(
                service["listeMotsSujet"],
                "next"
            );

            service.serviceEnvoieMots(listeMotsLongue);

            expect(spy).toHaveBeenCalled();
        });
        it("Should set the _mots", () => {
            service["_mots"] = listeMotsCourte;

            service.serviceEnvoieMots(listeMotsLongue);

            expect(service["_mots"]).not.toEqual(listeMotsCourte);
            expect(service["_mots"]).toBe(listeMotsLongue);
        });
    });

    describe("ServiceEnvoieMatriceLettres function", () => {
        it("Should call the 'next' function", () => {
            // I need to put <...> for the private functions and attributes to be spied.
            const spy: jasmine.Spy = spyOn<Subject<Array<Array<LettreGrille>>>>(
                service["matriceDesMotsSurGrilleSujet"],
                "next"
            );

            service.serviceEnvoieMatriceLettres(mockMatrice);

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("ServiceEnvoieMotSelectionne function", () => {
        it("Should call the 'next' function", () => {
            // I need to put <...> for the private functions and attributes to be spied.
            const spy: jasmine.Spy = spyOn<Subject<Mot>>(
                service["motSelectionneSuject"],
                "next"
            );

            service.serviceEnvoieMotSelectionne(unMotHorizontal);

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("ServiceEnvoieMotTrouve function", () => {
        it("Should call the 'next' function", () => {
            // I need to put <...> for the private functions and attributes to be spied.
            const spy: jasmine.Spy = spyOn<Subject<Mot>>(
                service["motTrouveSujet"],
                "next"
            );

            service.serviceEnvoieMotTrouve(unMotHorizontal);

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("ServiceEnvoieMotPerdu function", () => {
        it("Should call the 'next' function", () => {
            // I need to put <...> for the private functions and attributes to be spied.
            const spy: jasmine.Spy = spyOn<Subject<Mot>>(
                service["motPerduSujet"],
                "next"
            );

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
            const mock: Observable<Array<Array<LettreGrille>>> = new Subject<
                Array<Array<LettreGrille>>
            >().asObservable();
            service["matriceDesMotsSurGrilleObservable$"] = mock;

            expect(service.serviceReceptionMatriceLettres()).toBe(mock);
        });
    });

    describe("ServiceReceptionMotSelectionne function", () => {
        it("Should get the motSelectionneObservable", () => {
            const mockMotSelectObs$: Observable<Mot> = new Subject<
                Mot
            >().asObservable();
            service["motSelectionneObservable$"] = mockMotSelectObs$;

            expect(service.serviceReceptionMotSelectionne()).toBe(
                mockMotSelectObs$
            );
        });
    });

    describe("ServiceReceptionMotTrouve function", () => {
        it("Should get the motTrouveObservable", () => {
            const mockMotTrouveObs$: Observable<Mot> = new Subject<
                Mot
            >().asObservable();
            service["motTrouveObservable$"] = mockMotTrouveObs$;

            expect(service.serviceReceptionMotTrouve()).toBe(mockMotTrouveObs$);
        });
    });

    describe("ServiceReceptionMotPerdu function", () => {
        it("Should get the motPerduObservable", () => {
            const mockMotPerduObs$: Observable<Mot> = new Subject<
                Mot
            >().asObservable();
            service["motPerduObservable$"] = mockMotPerduObs$;

            expect(service.serviceReceptionMotPerdu()).toBe(mockMotPerduObs$);
        });
    });

    afterEach(() => {
        service = null;
    });
});
