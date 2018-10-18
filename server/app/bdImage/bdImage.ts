import { injectable } from "inversify";
import { Mongoose, Schema, Model, Document } from "mongoose";
import { Request, Response } from "express";
import { ErreurConnectionBD } from "../exceptions/erreurConnectionBD";
import * as fs from "fs";
import { ErreurRechercheBaseDonnees } from "../exceptions/erreurRechercheBD";

const URL_BD: string = "mongodb://admin:admin@ds123129.mlab.com:23129/log2990";

// interface Image {
//     img: { data: Buffer, contentType: String };
// }

@injectable()
export class BaseDonneesImage {

    private mongoose: Mongoose;
    private schema: Schema;
    private model: Model<Document>;

    constructor() {
        this.mongoose = new Mongoose();
        this.schema = new Schema({
            img: { data: Buffer, contentType: String }
        });
        this.model = this.mongoose.model("img", this.schema);
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

    public async requeteUpload(req: Request, res: Response): Promise<void> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });

        // tslint:disable-next-line:no-any
        const a: any = new this.model();
        a.img.data = fs.readFileSync("./assets/image001.png");
        a.img.contentType = "image/png";
        res.send(
            await a.save((err: Error) => {
                if (err) {
                    throw err;
                }
            })
        );
    }

    public async requeteDownload(req: Request, res: Response): Promise<void> {
        this.assurerConnection().catch(() => {
            throw new ErreurConnectionBD();
        });

        const images: Array<{}> = [];
        this.model.find().then((docs: Document[]) => {
            res.send(docs);
            for (const doc of docs) {
                images.push(doc.toObject());
            }
        })
        .catch(() => {
            throw new ErreurRechercheBaseDonnees;
        });
    }
}
