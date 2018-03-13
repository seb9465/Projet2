import { injectable } from "inversify";
import { Router, Request, Response, NextFunction } from "express";

// import Types from "../types";
import { ServiceLexical } from "./ServiceLexical";
import { Frequence } from "./Mot";
import { ServiceWeb } from "../serviceweb";

@injectable()
export class RouteServiceLexical extends ServiceWeb {

    public readonly mainRoute: string = "/serviceLexical";

    public constructor(/*@inject(Types.ServiceLexical) private serviceLexical: ServiceLexical*/) {
        super();
    }

    public get routes(): Router {
        const router: Router = Router();

        router.get("/commun/contrainte/:contrainte", (req: Request, res: Response, next: NextFunction) => {
            ServiceLexical.servirMotsSelonContrainte(req.params.contrainte, Frequence.Commun, res);
        });

        router.get("/noncommun/contrainte/:contrainte", (req: Request, res: Response, next: NextFunction) => {
            ServiceLexical.servirMotsSelonContrainte(req.params.contrainte, Frequence.NonCommun, res);
        });

        return router;
    }
}
