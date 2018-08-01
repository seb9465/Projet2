import { Mot } from "../../objetsTest/mot";
import { LettreGrille } from "../../objetsTest/lettreGrille";
import { TAILLE_TABLEAU } from './../../constantes';

export class OpaciteCase {
    public static decouvrirCases(mot: Mot, matriceDesMotsSurGrille: Array<Array<LettreGrille>> ): void {
        this.cacherCases(matriceDesMotsSurGrille);
        for (let indice: number = 0; indice < mot.longueur; indice++) {
          mot.estVertical
            ? this.obtenirLettreGrilleMotVertical(mot, indice, matriceDesMotsSurGrille).caseDecouverte = true
            : this.obtenirLettreGrilleMotHorizontal(mot, indice, matriceDesMotsSurGrille).caseDecouverte = true;
        }
      }

    private static cacherCases(matriceDesMotsSurGrille: Array<Array<LettreGrille>>): void {
        for (const ligne of matriceDesMotsSurGrille) {
          for (const lettre of ligne) {
            lettre.caseDecouverte = false;
          }
        }
      }

    private static obtenirLettreGrilleMotVertical(mot: Mot, indice: number, matrice: Array<Array<LettreGrille>>): LettreGrille {
        if (mot.premierX >= TAILLE_TABLEAU || mot.premierY + indice >= TAILLE_TABLEAU) {
            return undefined;
        }

        return matrice[mot.premierX][indice + mot.premierY];
    }

    private static obtenirLettreGrilleMotHorizontal(mot: Mot, indice: number, matrice: Array<Array<LettreGrille>>): LettreGrille {
        if (mot.premierX + indice >= TAILLE_TABLEAU || mot.premierY >= TAILLE_TABLEAU ) {
            return undefined;
        }

        return matrice[indice + mot.premierX][mot.premierY];
    }
}
