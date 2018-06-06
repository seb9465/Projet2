import { AudioListener, AudioLoader, PositionalAudio } from "three";
import { Injectable } from "@angular/core";

export const LISTENER: AudioListener = new AudioListener();

@Injectable()
export abstract class SonAbstrait {
    protected _audio: PositionalAudio;
    protected _audioLoader: AudioLoader;
    protected readonly distanceRef: number = 15;

    public constructor() {
        this._audioLoader = new AudioLoader();
        this.initialisationSon();
    }

    protected abstract initialisationSon(): void;

    public get obtenirSon(): PositionalAudio {
        return this._audio;
    }

    public jouerSon(): void {
        if (!this._audio.isPlaying) {
            this._audio.play();
        }
    }

}
