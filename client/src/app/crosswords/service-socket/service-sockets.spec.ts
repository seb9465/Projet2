
import { SocketService } from "./service-socket";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { DIFFICULTE_DEFAUT } from './../serviceHttp/http-request.service';

describe("Service Socket", () => {
    let service: SocketService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
            providers: [SocketService]
        });

        service = TestBed.get(SocketService);

        service["connectionServeur"]();
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(service).toBeDefined();
    });

    describe("connectionServeur function", () => {

    });

    describe("creerPartie function", () => {
        it("Should call connection service function", () => {
            const spyConnectionServeur: jasmine.Spy = spyOn<any>(service, "connectionServeur");
    
            service.creerPartie("PartieTest", DIFFICULTE_DEFAUT, "joueurTest");
    
            expect(spyConnectionServeur).toHaveBeenCalled();
        });
    });

    describe("joueurVeutJoindre function", () => {

    });

    describe("demanderListePartie function", () => {

    });

    describe("chargementComplete function", () => {

    });

    describe("demandeDeGrille function", () => {

    });

    describe("envoyerGrille function", () => {

    });

    describe("recevoirListePartie function", () => {

    });

    describe("commencerPartie function", () => {

    });

    describe("telechargerPaquetPartie function", () => {

    });
    
    describe("envoyerMotSelect function", () => {

    });

    describe("envoyerMotSelectFromDef function", () => {

    });

    describe("recevoirMotDef function", () => {

    });
    
    describe("recevoirMotSelectJ2 function", () => {

    });

    describe("envoyerTentative function", () => {

    });

    describe("recevoirMotPerdu function", () => {

    });

    describe("recevoirMotTrouve function", () => {

    });

    describe("recevoirScore function", () => {

    });

    describe("finPartie function", () => {

    });

    describe("rejouerPartie function", () => {
        it("Should call the emit function of the SocketClient", () => {
            const spy: jasmine.Spy = spyOn(service["socketClient"], "emit");

            service.rejouerPartie();

            expect(spy).toHaveBeenCalled();
        });
    });

    afterEach(() => {
        service = null;
    });
});
