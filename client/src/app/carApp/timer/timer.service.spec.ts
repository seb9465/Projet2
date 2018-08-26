import { TimerService } from "./timer.service";
import { TestBed } from "../../../../node_modules/@angular/core/testing";

describe("Timer Service", () => {
    let service: TimerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                TimerService
            ],
        });

        service = TestBed.get(TimerService);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    describe("Avant d'avoir debute le timer", () => {
        it("Temps actuel devrait être à 0", () => {
            expect(service.obtenirTempsActuel).toEqual(0);
        });
        it("Temps dernier tour devrait être à 0", () => {
            expect(service.obtenirTempsActuel).toEqual(0);
        });
    });

    afterEach(() => {
        service = null;
    });
});
