import { Subscription } from "rxjs/Subscription";
import { Mot } from "../objetsTest/mot";
import * as CONST from "../constantes";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Observable } from "rxjs/Observable";
import { OnDestroy } from "@angular/core";

export abstract class InfoPartieAbs implements OnDestroy {
    protected _listeMots: Mot[];
    private _timer: number;
    private _formatedTimer: string;
    protected _difficulte: string;

    private _timerObservable$: Observable<number>;

    protected _subscriptionListeMots: Subscription;
    protected _subscriptionTimer: Subscription;

    public constructor() {
        this._listeMots = [];
        this._timer = 0;
        this._formatedTimer = "";
        this.formatterTimer();
        this._timerObservable$ = TimerObservable.create(
            0,
            CONST.UNE_SECONDE_EN_MILISECONDES
        );
    }

    public formatterTimer(): void {
        let tmpTimer: number = this._timer,
            heures: number = 0,
            min: number = 0,
            sec: number = 0;

        heures =
            Math.floor(tmpTimer / CONST.SECONDES_PAR_HEURE) %
            CONST.HEURES_PAR_JOUR;
        tmpTimer -= heures;
        min =
            Math.floor(tmpTimer / CONST.SECONDES_PAR_MINUTE) %
            CONST.SECONDES_PAR_MINUTE;
        tmpTimer -= min;
        sec = tmpTimer % CONST.SECONDES_PAR_MINUTE;

        this._formatedTimer =
            String(heures) +
            CONST.ABREVIATION_HEURES +
            String(min) +
            CONST.ABREVIATION_MINUTES +
            String(sec) +
            CONST.ABREVIATION_SECONDES;
    }

    protected initialiserSouscriptionsTimer(): void {
        this.souscrireTimer();
    }

    private souscrireTimer(): void {
        this._subscriptionTimer = this._timerObservable$.subscribe(
            (t: number) => {
                this._timer = t;
                this.formatterTimer();
            }
        );
    }

    protected arreterTimer(): void {
        if (this._subscriptionListeMots) {
            this._subscriptionListeMots.unsubscribe();
        }
    }

    public ngOnDestroy(): void {
        if (this._subscriptionListeMots) {
            this._subscriptionListeMots.unsubscribe();
            this._subscriptionListeMots = null;
        }
        this.arreterTimer();
        this._subscriptionTimer = null;
    }
}
