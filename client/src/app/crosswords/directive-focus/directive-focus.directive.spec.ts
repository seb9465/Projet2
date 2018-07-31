import { DirectiveFocusDirective } from "./directive-focus.directive";
// import { Component } from "../../../../node_modules/@angular/core";

// @Component({
//     template: `<input type="text" appDirectiveFocus>`
// })
// class TestAppDirectiveFocusComponent { }

describe("Directive Focus", () => {
    it("Should create an instance.", () => {
        const directive: DirectiveFocusDirective = new DirectiveFocusDirective();

        expect(directive).toBeTruthy();
    });

    describe("EstUneLettre function.", () => {
        let directive: DirectiveFocusDirective;

        beforeEach(() => {
            directive = new DirectiveFocusDirective();
        });

        describe("Should be false", () => {
            it("When giving ArrowDown.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent("keydown", { key: "ArrowDown" });

                const result: boolean = directive["estUneLettre"](keyboardEvent);

                expect(result).toBeFalsy();
            });
            it("When giving Backspace.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent("keydown", { key: "Backspace" });

                const result: boolean = directive["estUneLettre"](keyboardEvent);

                expect(result).toBeFalsy();
            });
            it("When giving Enter.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent("keydown", { key: "Enter" });

                const result: boolean = directive["estUneLettre"](keyboardEvent);

                expect(result).toBeFalsy();
            });
            it("When giving Undo.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent("keydown", { key: "Undo" });

                const result: boolean = directive["estUneLettre"](keyboardEvent);

                expect(result).toBeFalsy();
            });
        });

        describe("Should be true", () => {
            it("When giving the letter a", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent("keydown", { key: "a" });

                const result: boolean = directive["estUneLettre"](keyboardEvent);

                expect(result).toBeTruthy();
            });
            it("When giving the letter z", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent("keydown", { key: "z" });

                const result: boolean = directive["estUneLettre"](keyboardEvent);

                expect(result).toBeTruthy();
            });
            it("When giving the letter g", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent("keydown", { key: "g" });

                const result: boolean = directive["estUneLettre"](keyboardEvent);

                expect(result).toBeTruthy();
            });
            it("When giving the letter r", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent("keydown", { key: "r" });

                const result: boolean = directive["estUneLettre"](keyboardEvent);

                expect(result).toBeTruthy();
            });
        });

        afterEach(() => {
            directive = null;
        });
    });
});
