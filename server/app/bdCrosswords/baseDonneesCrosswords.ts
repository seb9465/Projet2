import { injectable } from "inversify";
import { Mongoose, Schema, Model, Document } from "mongoose";
import { Request, Response } from "express";
import { ErreurConnectionBD } from "../exceptions/erreurConnectionBD";
import { PartieBD } from "./../../../common/communication/PartieBD";
import { ErreurRechercheBaseDonnees } from "../exceptions/erreurRechercheBD";
import { MongoError } from "mongodb";
import { ErreurSupressionBaseDonnees } from "../exceptions/erreurSupressionBD";

const URL_BD: string = "mongodb://admin:admin@ds123129.mlab.com:23129/log2990";
// const URL_BD: string = "mongodb://localhost:27017/log2990";

@injectable()
export class BaseDonneesCrosswords {

    private mongoose: Mongoose;
    private schema: Schema;
    private model: Model<Document>;

    constructor() {
        this.mongoose = new Mongoose();
        this.schema = new Schema({
            nomPartie: { type: String, unique: true }
        });
        this.model = this.mongoose.model("crosswords", this.schema);
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
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });
        const partie: Document = new this.model(partieJson);
        await this.model.create(partie).catch((err: MongoError) => {
            throw err;
        });
    }

    private async ajouterParties(partiesJson: {}[]): Promise<void> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });

        await this.model.collection.insertMany(partiesJson).catch((err: MongoError) => {
            throw err;
        });
    }

    public async ajouterPartiesBD(parties: PartieBD[]): Promise<void> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });

        for (const partie of parties) {
            await this.model.create(partie).catch((err: MongoError) => {
                throw err;
            });
        }
    }

    private async obtenirParties(): Promise<PartieBD[]> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });

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

    private async nomPartieEstDansBaseDonnees(nomPartie: string): Promise<boolean> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });
        const document: Document = await this.model.findOne({
            nomPartie: nomPartie
        }).exec().catch((err: MongoError) => {
            throw err;
        });

        return document !== null;
    }

    public async obtenirIdDunePartie(nomDePartie: string): Promise<string> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });
        const res: Document = await this.model.findOne({nomPartie: nomDePartie})
            .exec()
            .catch((err: MongoError) => {
                throw err;
            });
        const resObj: PartieBD = res.toObject();
        if (resObj) {
            return resObj._id;
        }

        return "";
    }

    private async supprimerUnePartie(id: string): Promise<void> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });
        await this.model.findByIdAndRemove(id)
            .exec()
            .catch(() => {
                throw new ErreurSupressionBaseDonnees();
            });
    }

    private async supprimerToutesLesParties(): Promise<void> {
        const parties: PartieBD[] = await this.obtenirParties().catch((err: MongoError) => {
            throw err;
        });

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

    public async requeteObtenirIdDunePartie(req: Request, res: Response): Promise<void> {
        await this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });
        res.send(await this.obtenirIdDunePartie(req.params.id));
    }

    public async requeteSupprimerPistes(req: Request, res: Response): Promise<void> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });
        res.send(await this.supprimerToutesLesParties());
    }

    public async requeteSupprimerUnePiste(req: Request, res: Response): Promise<void> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });
        res.send(await this.supprimerUnePartie(req.params.id));
    }

    public async requeteNomPartieEstDansBaseDonnees(req: Request, res: Response): Promise<void> {
        res.send(await this.nomPartieEstDansBaseDonnees(req.params.id));
    }
}
