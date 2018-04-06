import { TempsAffichage} from "../vue-tete-haute/vue-tete-haute/tempsAffichage";

const NB_DE_TOURS: number = 3;

export class ResultatJoueur {

    public rang: number;

    private constructor(public tempsDesTours: TempsAffichage[],
                        public tempsCourse: TempsAffichage[]) {
        this.rang = null;
    }
}
