export class ErreurAjoutBaseDeDonnees extends Error {
    public constructor(message: string) {
        super();
        this.message = message;
    }
}
