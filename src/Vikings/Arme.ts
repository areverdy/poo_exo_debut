export class Arme {
    public nom : string;
    public force : number;

    constructor(
        nom: string,
        force: number
    ){
        console.log("nouvelle arme")
        this.nom = nom
        this.force = force
    }
}