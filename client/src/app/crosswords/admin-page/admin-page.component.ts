import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IPartieCrosswords } from "./../../../../../common/communication/IPartieCrosswords";
import { URI_OTENIR_PARTIES, URI_SUPPRESSION_TOUTES_PARTIES } from "../../Constantes/routeBDCrosswords";

@Component({
    selector: "app-admin-page",
    templateUrl: "./admin-page.component.html",
    styleUrls: ["./admin-page.component.css"]
})
export class AdminPageComponent implements OnInit {
    public myParams: {};
    public myStyle: {};
    protected listeParties: IPartieCrosswords[];

    // tslint:disable-next-line:max-func-body-length
    public constructor(private _http: HttpClient) {
        this.myParams = {
            "particles": {
              "number": {
                "value": 6,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#1b1e34"
              },
              "shape": {
                "type": "polygon",
                "stroke": {
                  "width": 0,
                  "color": "#000"
                },
                "polygon": {
                  "nb_sides": 6
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 160,
                "random": false,
                "anim": {
                  "enable": true,
                  "speed": 10,
                  "size_min": 40,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 1,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 8,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": false,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          };
        this.myStyle = {
            "position": "absolute",
            "width": "100%",
            "height": "100%",
            "top": "0",
            "left": "0",
            "z-index": "-9999",
        };
    }

    public ngOnInit(): void {
        this._http.get<IPartieCrosswords[]>(URI_OTENIR_PARTIES).subscribe((data: IPartieCrosswords[]) => {
            this.listeParties = data;
        });
    }

    public async supprimerToutesLesParties(): Promise<void> {
        await this._http.delete(URI_SUPPRESSION_TOUTES_PARTIES);
        this.listeParties = [];
    }

    public ajouterUnePartie(): void {
        document.getElementById("overlay").classList.remove("closed");
        document.getElementById("overlay").classList.add("opened");
    }

    public retirerOverlay(): void {
        document.getElementById("overlay").classList.remove("opened");
        document.getElementById("overlay").classList.add("closed");
    }
}
