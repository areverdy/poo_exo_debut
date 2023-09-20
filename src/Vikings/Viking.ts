import {Arme} from "./Arme"

export class Viking {
    public nom : string;
    public sante : number;
    public force : number;
    public arme : Arme [] ;

    constructor(
        nom: string,
        sante: number,
        force: number,
        arme: Arme []
    ) {
        console.log("nouveau Viking")
        this.nom = nom
        this.sante = sante
        this.force = force
        this.arme = arme
    }
}