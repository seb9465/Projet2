import * as assert from "assert";
import { BaseDonneesCrosswords } from "./baseDonneesCrosswords";

// const URL_SERVICE: string = "http://localhost:3000/crosswords/";

describe("Base Donnees Crosswords", () => {
    let service: BaseDonneesCrosswords;

    beforeEach(() => {
        service = new BaseDonneesCrosswords();
    });

    it("Should do nothing", () => {
        assert(true);
    });

    describe("Constructor", () => {
        it("Should initialize mongoose", (done: MochaDone) => {
            assert.ok(service["mongoose"]);
            done();
        });

        it("Should initialize the schema", (done: MochaDone) => {
            assert.ok(service["schema"]);
            done();
        });

        it("Should initialize the model", (done: MochaDone) => {
            assert.ok(service["model"]);
            done();
        });
    });

    describe("Connection to the DB", () => {
        it("Should connect to the DB", (done: MochaDone) => {
            service["seConnecter"]().then(() => {
                assert(service["estConnecte"]);
                done();
            });
        });
    });

    afterEach(() => {
        service = null;
    });
});
