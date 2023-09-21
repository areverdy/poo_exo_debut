export class Chevalier {
    private _bouclier: string;
    public get bouclier(): string {
        return this._bouclier;
    }
    public set bouclier(value: string) {
        this._bouclier = value;
    }
    constructor(
        bouclier: string,
    ){
        this._bouclier=bouclier
    }
}