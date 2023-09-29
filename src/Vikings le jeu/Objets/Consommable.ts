import { Personnage } from "../Personnages/Personnage";
import { IObjet } from "./IObjet"

export abstract class Consommable implements IObjet{
    prix: number;
    poids: number;

    abstract utiliser(personnage : Personnage) : any;
    abstract consommer(personnage : Personnage) : any
    
    constructor(prix : number, poids : number){
        this.prix = prix
        this.poids= poids
    }

}