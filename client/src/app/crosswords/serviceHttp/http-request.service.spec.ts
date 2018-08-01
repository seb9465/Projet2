import { ServiceHttp, DIFFICULTE_DEFAUT, URL_REQUETE } from "./http-request.service";
import { HttpClient } from "@angular/common/http";

describe("HTTP Service", () => {
    let service: ServiceHttp;
    let mockHttpClient: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        mockHttpClient = jasmine.createSpyObj(["get"]);
        service = new ServiceHttp(mockHttpClient);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(service).toBeDefined();
    });

    it("Should set the difficulte to the default one when initalizing", () => {
        expect(service.difficulte).toBe(DIFFICULTE_DEFAUT);
    });

    it("Should return a url with default difficulty", () => {
        const expectedUrl: string = URL_REQUETE + DIFFICULTE_DEFAUT.toString();

        expect(service["url"]).toBe(expectedUrl);
    });

    
});