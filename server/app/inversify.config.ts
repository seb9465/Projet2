import Types from "./types";
import { Container } from "inversify";
import { Server } from "./server";
import { Application } from "./app";

import { RouteServiceLexical } from "./serviceLexical/routeServiceLexical";
import { ServiceLexical } from "./serviceLexical/ServiceLexical";

import { RouteGenGrille } from "./generateurGrille/routeGenGrille";
import { GenerateurGrille } from "./generateurGrille/generateurGrille";

import { RouteBaseDonneesCourse } from "./baseDonnees/routeBaseDonneesCourse";
import { BaseDonneesCourse } from "./baseDonnees/baseDonneesCourse";
import { BaseDonneesCrosswords } from "./bdCrosswords/baseDonneesCrosswords";
import { RouteBDCrosswords } from "./bdCrosswords/routeBDCrosswords";
import { BaseDonneesImage } from "./bdImage/bdImage";
import { RouteBaseDonneesImage } from "./bdImage/routeBDImage";

const container: Container = new Container();

container.bind(Types.Server).to(Server);
container.bind(Types.Application).to(Application);

container.bind(Types.RouteServiceLexical).to(RouteServiceLexical);
container.bind(Types.ServiceLexical).to(ServiceLexical);

container.bind(Types.GenerateurGrille).to(GenerateurGrille);
container.bind(Types.RouteGenGrille).to(RouteGenGrille);

container.bind(Types.BaseDonneesCourse).to(BaseDonneesCourse);
container.bind(Types.RouteBaseDonneesCourse).to(RouteBaseDonneesCourse);

container.bind(Types.BaseDonneesCrosswords).to(BaseDonneesCrosswords);
container.bind(Types.RouteBDCrosswords).to(RouteBDCrosswords);

container.bind(Types.BaseDonneesImage).to(BaseDonneesImage);
container.bind(Types.RouteBaseDonneesImage).to(RouteBaseDonneesImage);

export { container };
