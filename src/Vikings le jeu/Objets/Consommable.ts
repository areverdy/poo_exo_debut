
export abstract class Consommable implements IObjet{
    prix: number;
    poids: number;

    abstract utiliser() : any;
    abstract consommer() : any
    
    constructor(prix : number, poids : number){
        this.prix = prix
        this.poids= poids
    }

}