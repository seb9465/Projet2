import { injectable, inject } from "inversify";
import { ServiceWeb } from "../serviceweb";
import { BaseDonneesImage } from "./bdImage";
import Types from "../types";
import { Router, Request, Response } from "express";

@injectable()
export class RouteBaseDonneesImage extends ServiceWeb {

    public readonly mainRoute: string = "/apiPhoto";

    public constructor(@inject(Types.BaseDonneesImage) private bdCrosswords: BaseDonneesImage) {
        super();
    }

    public get routes(): Router {
        const router: Router = Router();

        router.get("/", async (req: Request, res: Response) => {
            await this.bdCrosswords.assurerConnection();
            res.send("Connection made with the BD");
        });

        router.post("/upload", async (req: Request, res: Response) => {
            await this.bdCrosswords.requeteUpload(req, res);
        });

        router.get("/getAll", async (req: Request, res: Response) => {
            await this.bdCrosswords.requeteDownload(req, res);
        });

        return router;
    }
}
