
import { SocketService } from "./service-socket";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
describe("Service Socket", () => {
    let service: SocketService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
            providers: [SocketService]
        });

        service = TestBed.get(SocketService);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(service).toBeDefined();
    });
});
