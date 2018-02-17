import { CameraJeu } from "./CameraJeu";
import { Vector3, OrthographicCamera } from "three";

// Attributs camera

const PLAN_RAPPROCHE: number = 0;
const PLAN_ELOIGNE: number = 10;

const ZOOM_MINIMUM: number = 16;
const ZOOM_DEFAUT: number = 30;
const ZOOM_MAXIMUM: number = 50;
const PAS_ZOOM: number = 2;

export class CameraJeu2D extends CameraJeu {

    public camera: OrthographicCamera;
    private zoom: number;
    private largeur: number;
    private hauteur: number;

    public constructor() {
        super();
        this.camera = new OrthographicCamera(null, null, null, null, PLAN_RAPPROCHE, PLAN_ELOIGNE);
        this.zoom = ZOOM_DEFAUT;
        this.largeur = null;
        this.hauteur = null;
    }

    protected obtenirPositionRelative(): Vector3 {
        return new Vector3(0, 1, 0);
    }

    protected reglerPositionnement(POSITION_ABSOLUE: Vector3): void {
        this.camera.position.set(POSITION_ABSOLUE.x, POSITION_ABSOLUE.y, POSITION_ABSOLUE.z);
        this.camera.lookAt(this.voitureSuivie.position);
        this.ajusterVue();
    }

    protected calculerNouvellePositionAbsolue(position: Vector3): Vector3 {
        return position.normalize()
            .add(this.voitureSuivie.position);
    }

    private ajusterVue(): void {
        const DEUX: number = 2;
        this.camera.left = -(this.largeur / DEUX);
        this.camera.right = (this.largeur / DEUX);
        this.camera.top = (this.hauteur / DEUX);
        this.camera.bottom = -(this.hauteur / DEUX);
        this.camera.zoom = this.zoom;
        this.camera.updateProjectionMatrix();
    }

    public zoomer(): void {
        if (this.zoom < ZOOM_MAXIMUM) {
            this.zoom += PAS_ZOOM;
        }
    }

    public dezoomer(): void {
        if (this.zoom > ZOOM_MINIMUM) {
            this.zoom -= PAS_ZOOM;
        }
    }

    public redimensionnement(largeur: number, hauteur: number): void {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

}
