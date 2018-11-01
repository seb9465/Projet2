import * as assert from "assert";
import { BaseDonneesCrosswords } from "./baseDonneesCrosswords";
import { PartieBD } from "../../../common/communication/PartieBD";
// import { PartieBD } from "../../../common/communication/PartieBD";

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
            const idPartie: string = await service["obtenirIdDunePartie"](nomDePartie);
            assert(idPartie !== null);
            await service["supprimerUnePartie"](idPartie);
            const estDansBD: boolean = await service["nomPartieEstDansBaseDonnees"](nomDePartie);
            assert(!estDansBD);
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

    describe("Petite sequence", async () => {
        let parties: PartieBD[];

        it("Random", async () => {
            parties = await service["obtenirParties"]();
            assert(true);
        });

        it("Random 2", async () => {
            await service["supprimerToutesLesParties"]();
            assert(true);
        });

        it("Random 3", async () => {
            const partiesApresSuppression: PartieBD[] = await service["obtenirParties"]();
            assert(partiesApresSuppression.length === 0);
        });

        it("Random 4", async () => {
            await service.ajouterPartiesBD(parties);
            assert(true);
        });
    });

    afterEach(() => {
        service = null;
    });
});
