import { GestionnaireBDCourse } from "./GestionnaireBDCourse";
import { TestBed } from "../../../../node_modules/@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PISTE1 } from "../piste/pisteTest";

describe("Gestionnaire BD Course Service", () => {
    let service: GestionnaireBDCourse;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            providers: [GestionnaireBDCourse],
        });

        service = TestBed.get(GestionnaireBDCourse);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(service).toBeDefined();
    });

    describe("Constructor function", () => {
        it("Should have defined the properties", () => {
            expect(service.pisteEdition).toBeNull();
            expect(service.pisteJeu).toBeNull();
        });
    });

    describe("pointsEdition function", () => {
        it("Should set the pisteEdition correctly", () => {
            service.pisteEdition = PISTE1;
            const expectedResult: number = PISTE1.points.length;

            const result: number = service.pointsEdition.length;

            expect(result).toEqual(expectedResult);
        });
    });

    describe("pointsJeu function", () => {
        it("Should return 0 when given a null pisteEdition", () => {
            const expectedResult: number = 0;

            const result: number = service.pointsJeu.length;

            expect(result).toEqual(expectedResult);
        });
    });
});
