import { GestionnaireSkybox } from "./gestionnaireSkybox";
import { TestBed } from "../../../../node_modules/@angular/core/testing";

describe("Gestionnaire SkyBox Service", () => {
    let service: GestionnaireSkybox;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                GestionnaireSkybox
            ],
        });

        service = TestBed.get(GestionnaireSkybox);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be defined", () => {
        expect(service).toBeDefined();
    });

    afterEach(() => {
        service = null;
    });
});
