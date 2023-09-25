import { Metier } from "../Metier";

export class Chevalier extends Metier {
    private static _nommetier: string = "Chevalier";
    private static _santebonus: number = 40;
    private static _forcebonus: number = 5;
    private static _vitessebonus: number = 1;
    private static _intellignencebonus: number = 1;
    private static  _manabonus: number = 5;
    private static _pctpointdechancebonus: number = 0.03;

    private _bouclier: boolean = true;
   
    constructor(  
    ){
        super(Chevalier._nommetier, Chevalier._santebonus, Chevalier._forcebonus, Chevalier._vitessebonus, Chevalier._intellignencebonus, Chevalier._manabonus, Chevalier._pctpointdechancebonus)
        this._bouclier=this.bouclier
    }
    public get bouclier(): boolean {
        return this._bouclier;
    }
    public set bouclier(value: boolean ) {
        this._bouclier = value;
    }
}