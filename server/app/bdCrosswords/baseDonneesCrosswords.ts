import { injectable } from "inversify";
import { Mongoose, Schema, Model, Document } from "mongoose";

const URL_BD: string = "mongodb://admin:admin@ds123129.mlab.com:23129/log2990";

@injectable()
export class BaseDonneesCrosswords {

    private mongoose: Mongoose;
    private schema: Schema;
    private model: Model<Document>;

    constructor() {
        this.mongoose = new Mongoose();
        this.schema = new Schema({

        });
        this.model = this.mongoose.model("crossword", this.schema);
    }

    private async seConnecter(): Promise<void> {
        await this.mongoose.connect(URL_BD);
    }

    private get estConnecte(): boolean {
        return this.mongoose.connection.readyState === 1;
    }

    private async assurerConnection(): Promise<void> {
        if (!this.estConnecte) {
            await this.seConnecter();
        }
    }
}
