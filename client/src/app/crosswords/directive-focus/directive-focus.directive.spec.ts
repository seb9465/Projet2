import { DirectiveFocusDirective } from "./directive-focus.directive";

describe("Directive Focus", () => {
    it("Should create an instance.", () => {
        const directive: DirectiveFocusDirective = new DirectiveFocusDirective();

        expect(directive).toBeTruthy();
    });

    describe("EstUneLettre function.", () => {
        let directive: DirectiveFocusDirective;

        beforeEach(() => {
            directive = new DirectiveFocusDirective();
            directive.appDirectiveFocus = true;
        });

        describe("Should be false", () => {
            it("When giving ArrowDown.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "ArrowDown" }
                );

                const result: boolean = directive["estUneLettre"](
                    keyboardEvent
                );

                expect(result).toBeFalsy();
            });
            it("When giving Backspace.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "Backspace" }
                );

                const result: boolean = directive["estUneLettre"](
                    keyboardEvent
                );

                expect(result).toBeFalsy();
            });
            it("When giving Enter.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "Enter" }
                );

                const result: boolean = directive["estUneLettre"](
                    keyboardEvent
                );

                expect(result).toBeFalsy();
            });
            it("When giving Undo.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "Undo" }
                );

                const result: boolean = directive["estUneLettre"](
                    keyboardEvent
                );

                expect(result).toBeFalsy();
            });
        });

        describe("Should be true", () => {
            it("When giving the letter a", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "a" }
                );

                const result: boolean = directive["estUneLettre"](
                    keyboardEvent
                );

                expect(result).toBeTruthy();
            });
            it("When giving the letter z", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "z" }
                );

                const result: boolean = directive["estUneLettre"](
                    keyboardEvent
                );

                expect(result).toBeTruthy();
            });
            it("When giving the letter g", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "g" }
                );

                const result: boolean = directive["estUneLettre"](
                    keyboardEvent
                );

                expect(result).toBeTruthy();
            });
            it("When giving the letter r", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "r" }
                );

                const result: boolean = directive["estUneLettre"](
                    keyboardEvent
                );

                expect(result).toBeTruthy();
            });
        });

        afterEach(() => {
            directive = null;
        });
    });

    describe("onKeyDown function", () => {
        let directive: DirectiveFocusDirective;

        beforeEach(() => {
            directive = new DirectiveFocusDirective();
            directive.appDirectiveFocus = true;
        });

        describe("Should call the preventDefault function", () => {
            it("When giving ArrowDown as a parameter.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "ArrowDown" }
                );
                const spy: jasmine.Spy = spyOn(keyboardEvent, "preventDefault");

                directive.onKeyDown(keyboardEvent);

                expect(spy).toHaveBeenCalled();
            });
            it("When giving A as a parameter.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "A" }
                );
                const spy: jasmine.Spy = spyOn(keyboardEvent, "preventDefault");

                directive.onKeyDown(keyboardEvent);

                expect(spy).toHaveBeenCalled();
            });
            it("When giving Z as a parameter.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "Z" }
                );
                const spy: jasmine.Spy = spyOn(keyboardEvent, "preventDefault");

                directive.onKeyDown(keyboardEvent);

                expect(spy).toHaveBeenCalled();
            });
            it("When giving M as a parameter.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "M" }
                );
                const spy: jasmine.Spy = spyOn(keyboardEvent, "preventDefault");

                directive.onKeyDown(keyboardEvent);

                expect(spy).toHaveBeenCalled();
            });
        });

        describe("Should not call the preventDefault function", () => {
            it("When giving the letter a.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "a" }
                );
                const spy: jasmine.Spy = spyOn(keyboardEvent, "preventDefault");

                directive.onKeyDown(keyboardEvent);

                expect(spy).not.toHaveBeenCalled();
            });
            it("When giving the letter z.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "z" }
                );
                const spy: jasmine.Spy = spyOn(keyboardEvent, "preventDefault");

                directive.onKeyDown(keyboardEvent);

                expect(spy).not.toHaveBeenCalled();
            });
            it("When giving the letter m.", () => {
                const keyboardEvent: KeyboardEvent = new KeyboardEvent(
                    "keydown",
                    { key: "m" }
                );
                const spy: jasmine.Spy = spyOn(keyboardEvent, "preventDefault");

                directive.onKeyDown(keyboardEvent);

                expect(spy).not.toHaveBeenCalled();
            });
        });

        afterEach(() => {
            directive = null;
        });
    });
});
