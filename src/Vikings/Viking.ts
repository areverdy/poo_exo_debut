import {Arme} from "./Arme"

export class Viking {
    public nom : string;
    public sante : string;
    public force : string;
    public arme : Arme [] ;

    constructor(
        nom: string,
        sante: string,
        force: string,
        arme: Arme []
    ) {
        console.log("nouveau Viking")
        this.nom = nom
        this.sante = sante
        this.force = force
        this.arme = arme
    }
}