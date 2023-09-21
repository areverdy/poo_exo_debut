import {Arme} from "./Arme"

export class Viking {
    public nom : string;
    private sante : number;
    private force : number;
    public arme : Arme ;

    constructor(
        nom: string,
        sante: number,
        force: number,
        arme: Arme
    ) {
        console.log("nouveau Viking")
        this.nom = nom
        this.sante = sante
        this.force = force
        this.arme = arme
    }

    perdreDeLaVie(nbPV: number) : void {
        this.sante = this.sante - nbPV
    }

    getForceTotale() : number {
        return this.force + this.arme.force
    }

    isAlive(){
        return this.sante > 0
    }

    afficherSesCaracteristiques(){
        console.log(`${this.nom} a ${this.sante} PV, ${this.getForceTotale()} de force totale`);
        
    }
}