import * as assert from "assert"import { BaseDonneesCrosswords } from "./baseDonneesCrosswords";
É;
const URL_SERVICE: string = "http://localhost:3000/crosswords/";

describe("Base Donnees Crosswords", () => {
    let service: BaseDonneesCrosswords;

    beforeEach(() => {
        service = new BaseDonneesCrosswords();
    });

    it("Should do nothing", () => {
        assert(true);
    });

    afterEach(() => {
        service = null;
    });
});
