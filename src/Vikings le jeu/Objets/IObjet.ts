import { Personnage } from "../Personnages/Personnage";

export interface IObjet {
    prix : number;
    poids : number;
    utiliser(personnage : Personnage) : any;
}