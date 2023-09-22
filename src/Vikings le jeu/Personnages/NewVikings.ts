export class Newviking {
    private _voldevie: number
    public get voldevie(): number {
        return this._voldevie
    }
    public set voldevie(value: number) {
        this._voldevie = value
    }

    constructor(
        voldevie: number,
    ) {
        this._voldevie = voldevie
    }
        
}