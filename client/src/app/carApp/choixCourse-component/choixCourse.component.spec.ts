import { TestBed, ComponentFixture } from "../../../../node_modules/@angular/core/testing";
import { ChoixCourseComponent } from "./choixCourse.component";
import { GestionnaireBDCourse } from "../baseDeDonnee/GestionnaireBDCourse";
import { MatExpansionModule } from "../../../../node_modules/@angular/material/expansion";
import { MatDividerModule } from "../../../../node_modules/@angular/material/divider";
import { RouterTestingModule } from "../../../../node_modules/@angular/router/testing";
import { ApercuPisteComponent } from "../apercuPiste/apercuPiste.component";

describe("Choix Course Component", () => {
    let fixture: ComponentFixture<ChoixCourseComponent>;
    let component: ChoixCourseComponent;
    let mockGestionnaireBD: GestionnaireBDCourse;

    beforeEach(() => {
        mockGestionnaireBD = jasmine.createSpyObj(["obtenirPistes"]);
        TestBed.configureTestingModule({
            imports: [MatExpansionModule, MatDividerModule, RouterTestingModule],
            declarations: [ChoixCourseComponent, ApercuPisteComponent],
            providers: [
                { provide: GestionnaireBDCourse, useValue: mockGestionnaireBD },
            ]
        });

        fixture = TestBed.createComponent(ChoixCourseComponent);
        component = fixture.componentInstance;
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(fixture).toBeDefined();
    });

    afterEach(() => {
        fixture = null;
        component = null;
    });
});
