import { PartieBD } from "../../../common/communication/PartieBD";
import * as WebRequest from "web-request";
import * as assert from "assert";

describe("Route BD Crosswords", () => {
    const URL: string = "http://localhost:3000/crosswords/";
    const URL_GET_PARTIES: string = URL + "obtenirParties";

    let parties: PartieBD[];

    it("Devrait récupérer les parties dans la BD", async () => {
        parties = await WebRequest.json<PartieBD[]>(URL_GET_PARTIES);
        assert.ok(parties);
    });
});
