import { Request, Response, NextFunction } from "express";
import "reflect-metadata";
import { injectable, } from "inversify";
import * as WebRequest from "web-request";

import { MotGenerationGrille } from "./motGenerateurGrille";
import { MockOptionPartie } from "./../../../common/mockObject/mockOptionPartie";
import { Mot } from "./../serviceLexical/Mot";
import { Difficultees, REQUETE_COMMUN, REQUETE_NONCOMMUN } from "./constantes";

import { GenSquelette } from "./genSquelette";
import { GenerateurListeMots } from "./generateurListeMots";

module Route {

    @injectable()
    export class GenerateurGrille {

        private grille: Array<Array<string>>;
        private listeMot: Array<MotGenerationGrille>;
        private generateurSquelette: GenSquelette = new GenSquelette();
        private generateurListeMots: GenerateurListeMots = new GenerateurListeMots();
        private motsDejaPlaces: Map<string, number> = new Map();
        private requetesInvalides: Map<string, number> = new Map();
        private optionsPartie: MockOptionPartie;

        constructor() {
            this.initMatrice();
            this.optionsPartie = new MockOptionPartie("Facile", 1); // j'impose facile pour l'instant
        }

        private initMatrice(): void {
            this.listeMot = new Array<MotGenerationGrille>();
            this.grille = new Array<Array<string>>();
            this.grille = this.generateurSquelette.getSqueletteGrille();
            this.listeMot = this.generateurListeMots.donnerUneListe(this.grille);

            this.requetesInvalides.clear();
            this.requetesInvalides = new Map();
            this.motsDejaPlaces.clear();
            this.motsDejaPlaces = new Map();
        }

        private lireMotViaGrille(mot: MotGenerationGrille): void {
            let lecteur: string = "";
            const x: number = mot.premierX;
            const y: number = mot.premierY;

            for (let i: number = 0; i < mot.longueur; i++) {
                if (mot.estVertical) {
                    lecteur += this.grille[y + i][x];
                } else {
                    lecteur += this.grille[y][x + i];
                }
            }
            mot.mot = lecteur;
        }

        private ecrireDansLaGrille(mot: MotGenerationGrille): void {
            const x: number = mot.premierX;
            const y: number = mot.premierY;

            for (let i: number = 0; i < mot.longueur; i++) {
                if (mot.estVertical) {
                    this.grille[y + i][x] = mot.mot[i];
                } else {
                    this.grille[y][x + i] = mot.mot[i];
                }
            }
        }

        private async remplirLaGrilleDeMots(): Promise<void> {
            while (!await this.remplirGrilleRecursif(0)) {
                this.motsDejaPlaces.clear();
            }
        }

        private async remplirGrilleRecursif(indice: number): Promise<boolean> {

            const motActuel: MotGenerationGrille = this.listeMot[indice];
            this.lireMotViaGrille(motActuel);
            let lesMots: Mot[];
            const contrainte: string = motActuel.mot;

            if (motActuel.mot in this.requetesInvalides) {
                return false;
            }
            lesMots = await this.demanderMot(motActuel);
            // Pas de mots trouve
            if (lesMots === undefined) {
                this.requetesInvalides[motActuel.mot] = 1;

                return false;
            }
            let prochainIndice: number;
            let ctr: number = 0;
            const DIX: number = 2; // A rajouter dans les constantes quand on va avoir un bon chiffre
            let prochainMotTrouve: boolean = false;
            let indiceAleatoire: number = 0;
            do {
                indiceAleatoire = this.nombreAleatoire(lesMots.length) - 1;
                // limiter le nombre d'essai pour chaque mot
                if (ctr++ === DIX || ctr >= lesMots.length) {
                    this.motsDejaPlaces.delete(motActuel.mot);
                    motActuel.mot = contrainte;
                    this.ecrireDansLaGrille(motActuel);
                    motActuel.estTraite = false;

                    return false;
                }
                // Verif si le mot est deja place dans la grille
                if (!(lesMots[indiceAleatoire].mot in this.motsDejaPlaces)) {
                    this.affecterMot(lesMots[indiceAleatoire], motActuel);
                    this.ecrireDansLaGrille(motActuel);
                    prochainIndice = this.obtenirLeMotLePlusImportant(motActuel);
                    if (prochainIndice === -1) {
                        this.motsDejaPlaces[motActuel.mot] = 1;

                        return true;
                    }
                }
                // console.log(this.grille);
                prochainMotTrouve = await this.remplirGrilleRecursif(prochainIndice);

            } while (!prochainMotTrouve);
            this.motsDejaPlaces[motActuel.mot] = 1;

            return true;
        }

        private obtenirLeMotLePlusImportant(mock: MotGenerationGrille): number {
            let max: number = 0;
            let indiceDuMax: number = -1;
            let temp: number;
            for (let i: number = 0; i < this.listeMot.length; i++) {
                if (!this.listeMot[i].estTraite) {
                    temp = this.listeMot[i].getImportance(mock);
                    if (max < temp) {
                        max = temp;
                        indiceDuMax = i;
                    }
                }
            }

            return indiceDuMax;
        }

        private async demanderMot(mot: MotGenerationGrille): Promise<Mot[]> {

            let url: string;
            switch (this.optionsPartie.niveau) {

                case Difficultees.Facile:
                case Difficultees.Normal:
                url = REQUETE_COMMUN + mot.mot;
                break;

                case Difficultees.Difficile:
                url = REQUETE_NONCOMMUN + mot.mot;
                break;

                default: /*devrait jamais arriver?*/ break;
            }

            return WebRequest.json<Mot[]>(url);
        }

        private affecterMot(unMot: Mot, motAChanger: MotGenerationGrille): Mot {
            // regarder avec simon si on doit trouver un mot en particulier dans la liste
            let indexDef: number = 0;
            const nbDef: number = unMot.definitions.length;
            switch (this.optionsPartie.niveau) {

                case Difficultees.Normal:
                case Difficultees.Difficile:
                if (unMot.definitions.length > 0) {    // S'il n'y a aucune autre def
                    indexDef = this.nombreAleatoire(nbDef) - 1;
                }
                break;

                default: /*devrait jamais arriver?*/ break;
            }

            motAChanger.mot = unMot.mot;
            motAChanger.definition = unMot.definitions[indexDef].definition;
            motAChanger.estTraite = true;

            return unMot;
        }

        // retourne un nombre entre 1 et nbMax
        private nombreAleatoire(nbMax: number): number {
            const millisecondes: number = new Date().getMilliseconds();
            const MILLE: number = 1000;

            return Math.floor(millisecondes * nbMax / MILLE) + 1;
        }

        public async requeteDeGrille(req: Request, res: Response, next: NextFunction): Promise<void> {
            this.optionsPartie.setDifficultee(req.params.difficulte);
            this.initMatrice();
            await this.remplirLaGrilleDeMots();
            res.send(this.listeMot);
        }

    }
}

export = Route;
