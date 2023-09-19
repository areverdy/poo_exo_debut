export class Arme {
    public nom : string;
    public force : string;

    constructor(
        nom: string,
        force: string
    ){
        console.log("nouvelle arme")
        this.nom = nom
        this.force = force
    }
}