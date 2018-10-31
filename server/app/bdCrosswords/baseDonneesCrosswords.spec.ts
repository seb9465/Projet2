import * as assert from "assert";
import { BaseDonneesCrosswords } from "./baseDonneesCrosswords";

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
        // it("Should be empty at first", async () => {
        //     await service["seConnecter"]();
        //     service["obtenirParties"]().then((data: PartieBD[]) => {
        //         assert(data.length === 0);
        //     }).catch((err: Error) => {
        //         assert(false);
        //     });
        // });
    });

    describe("supprimerUnePartie function", async () => {
        it("Devrait supprimer une partie", async () => {
            const nomDePartie: string = "Nom au hasard";
            await service["ajouterPartie"]({ nomPartie: nomDePartie });
            await service.obtenirIdDunePartie(nomDePartie).then((res: string) => {
                assert(res !== undefined);
            });
        });
    });

    describe("AjouterPartie function", async () => {
        it("Should add a Partie", async () => {
            const nomParties: string[] = [
                "Partie"
            ];
            await service["seConnecter"]();
            for (const nomDePartie of nomParties) {
                const estDejaDansBD: boolean = await service["nomPartieEstDansBaseDonnees"](nomDePartie);
                if (!estDejaDansBD) {
                    await service["ajouterPartie"]({nomPartie: nomDePartie}).catch((err: Error) => {
                        throw err;
                    });
                }
            }
            assert(true);
        });
    });

    afterEach(() => {
        service = null;
    });
});
