import { VerificateurContraintesPiste } from "./verificateurContraintesPiste";
import { IntersectionPiste } from "../elementsAffichage/editeur/intersectionPiste";

describe("Verificateur Contraintes Piste class", () => {
    let cls: VerificateurContraintesPiste;
    let intersections: IntersectionPiste[];

    beforeEach(() => {
        intersections = [];
        cls = new VerificateurContraintesPiste(intersections);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    afterEach(() => {
        intersections = null;
        cls = null;
    });
});
