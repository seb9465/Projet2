import * as express from "express";
import * as path from "path";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as cors from "cors";
// import * as multer from "multer";
import Types from "./types";
import { injectable, inject } from "inversify";

import { ServiceWeb } from "./serviceweb";
import { RouteServiceLexical } from "./serviceLexical/routeServiceLexical";
import { RouteGenGrille } from "./generateurGrille/routeGenGrille";
import { RouteBaseDonneesCourse } from "./baseDonnees/routeBaseDonneesCourse";
import { RouteBDCrosswords } from "./bdCrosswords/routeBDCrosswords";
import { RouteBaseDonneesImage } from "./bdImage/routeBDImage";

@injectable()
export class Application {

    private readonly internalError: number = 500;
    public app: express.Application;

    constructor(
        @inject(Types.RouteServiceLexical) private routeServiceLexical: RouteServiceLexical,
        @inject(Types.RouteGenGrille) private routeGenGrille: RouteGenGrille,
        @inject(Types.RouteBaseDonneesCourse) private routeBaseDonneesCourse: RouteBaseDonneesCourse,
        @inject(Types.RouteBDCrosswords) private routeBDCrosswords: RouteBDCrosswords,
        @inject(Types.RouteBaseDonneesImage) private routeBaseDonneesImage: RouteBaseDonneesImage) {
        this.app = express();

        this.config();

        this.routes();
    }

    private config(): void {
        // Middlewares configuration
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, "../client")));
        this.app.use(cors());
        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.header("Access-Control-Allow-Origin", "http://localhost:4200");
            res.header("Access-Control-Allow-Credentials", "true");
            res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
            res.header("Access-Control-Allow-Headers",
                       "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json,Authorization");
            next();
        });
        // this.app.use(multer({
        //     dest: "./ uploads /",
        //     rename: (filename: any) => {
        //         return filename;
        //     }
        // }));
    }

    public routes(): void {
        this.ajouterService(this.routeServiceLexical);
        this.ajouterService(this.routeGenGrille);
        this.ajouterService(this.routeBaseDonneesCourse);
        this.ajouterService(this.routeBDCrosswords);
        this.ajouterService(this.routeBaseDonneesImage);
        this.errorHandeling();
    }

    private ajouterService(service: ServiceWeb): void {
        this.app.use(service.mainRoute, service.routes);
    }

    private errorHandeling(): void {
        // Gestion des erreurs
        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            const err: Error = new Error("Not Found");
            next(err);
        });

        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        // development error handler
        // will print stacktrace
        if (this.app.get("env") === "development") {
            // tslint:disable-next-line:no-any
            this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
                res.status(err.status || this.internalError);
                res.send({
                    message: err.message,
                    error: err
                });
            });
        }

        // production error handler
        // no stacktraces leaked to user (in production env only)
        // tslint:disable-next-line:no-any
        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.status(err.status || this.internalError);
            res.send({
                message: err.message,
                error: {}
            });
        });
    }
}
