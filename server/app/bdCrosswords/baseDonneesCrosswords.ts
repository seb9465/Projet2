import { injectable } from "inversify";
import { Mongoose, Schema, Model, Document } from "mongoose";
import { Request, Response } from "express";
import { ErreurConnectionBD } from "../exceptions/erreurConnectionBD";

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
        await this.mongoose.connect(URL_BD);
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

    public async requeteAjouterPartie(req: Request, res: Response): Promise<void> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });
        res.send(await this.ajouterPartie(req.body));
    }
}
