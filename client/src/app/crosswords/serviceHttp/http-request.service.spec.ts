import { ServiceHttp } from "./http-request.service";
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

});