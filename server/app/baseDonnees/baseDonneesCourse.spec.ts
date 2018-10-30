import * as assert from "assert";
import { BaseDonneesCourse } from "./baseDonneesCourse";
import * as sinon from "sinon";

describe("Base De Donnees Course", () => {
    describe("Constructeur", () => {
        it ("bon fonctionnement du constructeur", (done: MochaDone) => {
            assert.ok(new BaseDonneesCourse);
            done();
        });

        const baseDonneesCourse: BaseDonneesCourse = new BaseDonneesCourse();

        it ("Le constructeur crée bien le schéma de piste.", (done: MochaDone) => {
            assert.ok(baseDonneesCourse["schemaPiste"]);
            done();
        });

        it ("Le constructeur crée bien Mongoose.", (done: MochaDone) => {
            assert.ok(baseDonneesCourse["mongoose"]);
            done();
        });

        it ("Le constructeur crée bien le modèle de piste.", (done: MochaDone) => {
            assert.ok(baseDonneesCourse["modelPiste"]);
            done();
        });
    });

    describe("Fonction seConnecter", () => {
        let bd: BaseDonneesCourse;

        beforeEach(() => {
            bd = new BaseDonneesCourse();
        });

        it("Devrait appeller la fonction connect de Mongoose", () => {
            const stub: sinon.SinonStub = sinon.stub(bd["mongoose"], "connect")
                .withArgs(sinon.match.string, sinon.match.object);

            bd["seConnecter"]();

            assert(stub.calledOnce);
        });
    });
});
