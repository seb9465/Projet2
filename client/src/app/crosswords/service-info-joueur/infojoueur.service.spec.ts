import { InfojoueurService } from './infojoueur.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '../../../../node_modules/@angular/core/testing';

describe("Info Joueur Service", () => {
    let service: InfojoueurService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
            providers: [InfojoueurService],
        });

        service = TestBed.get(InfojoueurService);
    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });

    it("Should be truthy", () => {
        expect(service).toBeTruthy();
    });

    describe("incrementationNbMotDecouv function", () => {
        it("Should increment _nbMotsDecouverts by a certain number defined in the parameters", () => {
            const increment: number = 1;

            service.incrementationNbMotDecouv(increment);

            expect(service["_nbMotsDecouverts"]).toEqual(increment);
        });
    });
});
