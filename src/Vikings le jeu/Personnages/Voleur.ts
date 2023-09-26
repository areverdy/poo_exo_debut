import { Metier } from "../Metier";
import { Personnage } from "./Personnage";

export class Voleur extends Metier{
    private static _nommetier: string = "Voleur";
    private static _santebonus: number = 15;
    private static _forcebonus: number = 2;
    private static _vitessebonus: number = 5;
    private static _intellignencebonus: number = 1;
    private static _manabonus: number = 10;
    private static _pctpointdechancebonus: number = 0.13;
    
    private _attaquesurprise: number;

    capaciteAvantCombat(perso : Personnage, cible : Personnage) : any {}

    constructor(
        
    ) {
        super(Voleur._nommetier, Voleur._santebonus, Voleur._forcebonus, Voleur._vitessebonus, Voleur._intellignencebonus, Voleur._manabonus, Voleur._pctpointdechancebonus)
            let coupcritique = Math.floor(Math.random()*100)<10;
            if (coupcritique) {
                this._attaquesurprise = 
            }
        

        } 

    public get attaquesurprise(): number {
        return this._attaquesurprise;
    }
    public set attaquesurprise(value: number) {
        this._attaquesurprise = value;
    }
}