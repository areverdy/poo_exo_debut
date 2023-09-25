import { Metier } from "../Metier";

export class Magicien extends Metier{
    private static _nommetier: string = "Magicien";
    private static _santebonus: number = 5;
    private static _forcebonus: number = 1;
    private static _vitessebonus: number = 1;
    private static _intellignencebonus: number = 5;
    private static  _manabonus: number = 45;
    private static _pctpointdechancebonus: number = 0;

    private _incantation: boolean = true;
    
    constructor(
        
    ){
        super(Magicien._nommetier, Magicien._santebonus, Magicien._forcebonus, Magicien._vitessebonus, Magicien._intellignencebonus, Magicien._manabonus, Magicien._pctpointdechancebonus)
        this._incantation = this.incantation
    }
    public get incantation(): boolean {
        return this._incantation;
    }
    public set incantation(value: boolean) {
        this._incantation = value;
    }
}