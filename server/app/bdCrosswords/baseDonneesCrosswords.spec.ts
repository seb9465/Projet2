import * as assert from "assert";
import { BaseDonneesCrosswords } from "./baseDonneesCrosswords";
import { PartieBD } from "../../../common/communication/PartieBD";

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
        it("Should initialize mongoose", () => {
            assert.ok(service["mongoose"]);
        });

        it("Should initialize the schema", () => {
            assert.ok(service["schema"]);
        });

        it("Should initialize the model", () => {
            assert.ok(service["model"]);
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

    describe("ObtenirParties function", () => {
        it("Should be empty at first", async () => {
            await service["seConnecter"]();
            service["obtenirParties"]().then((data: PartieBD[]) => {
                assert(data.length === 0);
            }).catch((err: Error) => {
                assert(false);
            });
        });
    });

    describe("AjouterPartie function", () => {
        it("Should add a Partie", async () => {
            await service["seConnecter"]();
            service["ajouterPartie"]({nomPartie: "Partie10"}).then(() => {
                assert(true);
            });
        });
    });

    afterEach(() => {
        service = null;
    });
});
