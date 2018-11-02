import { IConfigurationPartie } from "../../../../../common/communication/IConfigurationPartie";
import { Difficulte } from "../../../../../common/communication/Difficulte";

export class ConfigurationPartie implements IConfigurationPartie {
    public nombreDeJoueurs: number;
    public niveauDeDifficulte: Difficulte;

    public idPartie: number;
    public requete: string;
}
