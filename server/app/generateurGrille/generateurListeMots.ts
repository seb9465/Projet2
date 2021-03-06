import { VIDE, NOIR } from "./constantes";
import { Mot } from "./mot";

export class GenerateurListeMots {

    private listeMot: Array<Mot> = new Array<Mot>();

    public donnerUneListe(uneGrille: Array<Array<string>>): Array<Mot> {
        this.listeMot = new Array<Mot>();
        this.genererListeMot(uneGrille);
        this.nettoyerMots();

        return this.listeMot;
    }

    private nettoyerMots(): void {
        this.trierMotsOrdreDecroissant();
        this.retirerMotsUneLettre();
    }

    private trierMotsOrdreDecroissant(): void {
        this.listeMot.sort((n1: Mot, n2: Mot) => n2.longueur - n1.longueur);
    }

    private retirerMotsUneLettre(): void {
        while (this.listeMot[this.listeMot.length - 1].longueur === 1) {
            this.listeMot.pop();
        }
    }

    private genererMot(x: number, y: number, estVertical: boolean, uneGrille: Array<Array<string>>): Mot {

        if (x < 0 || y < 0) {
            throw new Error("Entree negative interdite");
        }

        let longMot: number = 0;
        let mot: string = "";
        for (let i: number = estVertical ? y : x; i < uneGrille.length; i++) {
            if (uneGrille[i][x] !== NOIR && estVertical) {
                longMot++;
                mot += "_";
            } else if (uneGrille[y][i] !== NOIR && !estVertical) {
                longMot++;
                mot += "_";
            } else {
                break;
            }
        }
        const nouveauMot: Mot = new Mot(estVertical, longMot, x, y);
        nouveauMot.mot = mot;

        return nouveauMot;
    }

    private genererListeMot(uneGrille: Array<Array<string>>): number {
        let ctrMots: number = 0;
        for (let i: number = 0; i < uneGrille.length; i++) {
            for (let j: number = 0; j < uneGrille.length; j++) {
                if (uneGrille[i][j] === VIDE) {
                    if (j === 0) {
                        this.listeMot.push(this.genererMot(j, i, false, uneGrille));
                        ctrMots++;
                    } else if (uneGrille[i][j - 1] === NOIR) {
                         this.listeMot.push(this.genererMot(j, i, false, uneGrille));
                         ctrMots++;
                    }
                    if (i === 0) {
                        this.listeMot.push(this.genererMot(j, i, true, uneGrille));
                        ctrMots++;
                    } else if (uneGrille[i - 1][j] === NOIR) {
                        this.listeMot.push(this.genererMot(j, i, true, uneGrille));
                        ctrMots++;
                    }
                }
            }
        }
        this.nettoyerMots();

        return ctrMots;
    }
}
