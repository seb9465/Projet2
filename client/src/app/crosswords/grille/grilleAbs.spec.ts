import { GrilleAbs } from "./grilleAbs";
import { InfojoueurService } from "../service-info-joueur/infojoueur.service";
import { Mot } from "../objetsTest/mot";

class TestMe extends GrilleAbs {
    protected envoyerMotTrouve(mot: Mot): Mot {
        return mot;
    }
}

describe("dbsada", () => {
    let cls: TestMe;
    const infoMock: jasmine.SpyObj<InfojoueurService> = jasmine.createSpyObj(["incrementationNbMotDecouv"]);

    beforeEach(() => {
        cls = new TestMe(infoMock);
    });

    it("Should be define", () => {
        expect(cls).toBeDefined();
    });
});
