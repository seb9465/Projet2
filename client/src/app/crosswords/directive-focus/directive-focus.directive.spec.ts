import { TestBed } from "../../../../node_modules/@angular/core/testing";
import { DirectiveFocusDirective } from "./directive-focus.directive";
import { Component, DebugElement } from "../../../../node_modules/@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { By } from "../../../../node_modules/@angular/platform-browser";
// import { KEYCODE_MIN } from './../constantes';

@Component({
    template: `<input type="text" appDirectiveFocus>`
})
class TestAppDirectiveFocusComponent { }

describe("Directive Focus", () => {

    let component: TestAppDirectiveFocusComponent;
    let fixture: ComponentFixture<TestAppDirectiveFocusComponent>;
    let inputEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ TestAppDirectiveFocusComponent, DirectiveFocusDirective]
        });
        fixture = TestBed.createComponent(TestAppDirectiveFocusComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css("input"));
    });

    it("Should do nothing.", () => {
        expect(true).toBe(true);
    });
    it("Should be define.", () => {
        expect(fixture).toBeDefined();
    });
});
