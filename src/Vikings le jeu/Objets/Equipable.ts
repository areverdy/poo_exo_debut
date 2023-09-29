
export abstract class Equipable implements IObjet{
    prix: number;
    poids: number;

    abstract equiper(): any

    utiliser() {
        this.equiper();
        console.log()
    }

    
    constructor(prix : number, poids : number){
        this.prix = prix
        this.poids= poids
    }

}