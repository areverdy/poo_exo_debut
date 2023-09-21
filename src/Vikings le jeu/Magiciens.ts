export class Magicien {
    private _incantation: string;
    public get incantation(): string {
        return this._incantation;
    }
    public set incantation(value: string) {
        this._incantation = value;
    }
    constructor(
        incantation: string,
    ){
        this._incantation = incantation
    }

}