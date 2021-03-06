import { injectable, inject } from "inversify";
import { ServiceWeb } from "../serviceweb";
import Types from "../types";
import { BaseDonneesCrosswords } from "./baseDonneesCrosswords";
import { Router, Request, Response } from "express";

@injectable()
export class RouteBDCrosswords extends ServiceWeb {
    public readonly mainRoute: string = "/crosswords";

    public constructor(@inject(Types.BaseDonneesCrosswords) private bdCrosswords: BaseDonneesCrosswords) {
        super();
    }

    public get routes(): Router {
        const router: Router = Router();

        router.get("/", async (req: Request, res: Response) => {
            await this.bdCrosswords.assurerConnection();
            res.send("Connection made with the BD");
        });

        router.post("/ajouterPartie", async (req: Request, res: Response) => {
            await this.bdCrosswords.requeteAjouterPartie(req, res);
        });

        router.post("/ajouterParties", async (req: Request, res: Response) => {
            await this.bdCrosswords.requeteAjouterParties(req, res);
        });

        router.post("/ajouterPartiesDeTypeBD", async (req: Request, res: Response) => {
            await this.bdCrosswords.requeteAjouterPartiesBD(req, res);
        });

        router.get("/obtenirParties", async (req: Request, res: Response) => {
            await this.bdCrosswords.requeteObtenirParties(req, res);
        });

        router.get("/obtenirIdPartie/:id", async (req: Request, res: Response) => {
            await this.bdCrosswords.requeteObtenirIdDunePartie(req, res);
        });

        router.get("/nomPartieEstDansBaseDonnees/:id", async (req: Request, res: Response) => {
            await this.bdCrosswords.requeteNomPartieEstDansBaseDonnees(req, res);
        });

        router.delete("/supprimerToutesLesParties", async (req: Request, res: Response) => {
            await this.bdCrosswords.requeteSupprimerPistes(req, res);
        });

        router.delete("/supprimerUnePartie/:id", async (req: Request, res: Response) => {
            await this.bdCrosswords.requeteSupprimerUnePiste(req, res);
        });

        return router;
    }
}
