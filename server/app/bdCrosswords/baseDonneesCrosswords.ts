import { injectable } from "inversify";
import { Mongoose, Schema, Model, Document } from "mongoose";
import { Request, Response } from "express";
import { ErreurConnectionBD } from "../exceptions/erreurConnectionBD";
import { PartieBD } from "./../../../common/communication/PartieBD";
import { ErreurRechercheBaseDonnees } from "../exceptions/erreurRechercheBD";
import { MongoError } from "mongodb";
import { ErreurSupressionBaseDonnees } from "../exceptions/erreurSupressionBD";

const URL_BD: string = "mongodb://admin:admin@ds123129.mlab.com:23129/log2990";

@injectable()
export class BaseDonneesCrosswords {

    private mongoose: Mongoose;
    private schema: Schema;
    private model: Model<Document>;

    constructor() {
        this.mongoose = new Mongoose();
        this.schema = new Schema({
            nomPartie: String
        });
        this.model = this.mongoose.model("crossword", this.schema);
    }

    private async seConnecter(): Promise<void> {
        await this.mongoose.connect(URL_BD, { useNewUrlParser: true });
    }

    private get estConnecte(): boolean {
        return this.mongoose.connection.readyState === 1;
    }

    public async assurerConnection(): Promise<void> {
        if (!this.estConnecte) {
            await this.seConnecter();
        }
    }

    private async ajouterPartie(partieJson: {}): Promise<void> {
        const partie: Document = new this.model(partieJson);
        await this.model.create(partie);
    }

    private async ajouterParties(partiesJson: {}[]): Promise<void> {
        this.model.collection.insertMany(partiesJson, (err: MongoError) => {
            if (err) {
                /* tslint:disable-next-line:no-console */
                return console.log(err);
            } else {
                /* tslint:disable-next-line:no-console */
                console.log("Parties successfully added to the DB.");
            }
        });
    }

    private async obtenirParties(): Promise<PartieBD[]> {
        const parties: PartieBD[] = [];

        await this.model
            .find()
            .then((res: Document[]) => {
                for (const doc of res) {
                    parties.push(doc.toObject());
                }
            })
            .catch(() => { throw new ErreurRechercheBaseDonnees; });

        return parties;
    }

    private async supprimerUnePartie(id: string): Promise<void> {
        await this.model.findByIdAndRemove(id)
            .exec()
            .catch(() => {
                throw new ErreurSupressionBaseDonnees();
            });
    }

    private async supprimerToutesLesParties(): Promise<void> {
        const parties: PartieBD[] = await this.obtenirParties();

        for (const partie of parties) {
            await this.supprimerUnePartie(partie._id);
        }
    }

    public async requeteAjouterPartie(req: Request, res: Response): Promise<void> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });
        res.send(await this.ajouterPartie(req.body));
    }

    public async requeteAjouterParties(req: Request, res: Response): Promise<void> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });
        res.send(await this.ajouterParties(req.body));
    }

    public async requeteObtenirParties(req: Request, res: Response): Promise<void> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });
        res.send(await this.obtenirParties());
    }

    public async requeteSupprimerPistes(req: Request, res: Response): Promise<void> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });
        res.send(this.supprimerToutesLesParties());
    }
}
