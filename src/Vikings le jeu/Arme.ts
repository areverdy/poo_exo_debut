export class Arme {
    public nom : string;
    private _force : number;

    constructor(
        nom: string,
        force: number
    ){
        console.log("nouvelle arme")
        this.nom = nom
        this._force = force
    }

    public get force(){
        return this._force
    }
}