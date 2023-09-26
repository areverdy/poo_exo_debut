import { Metier } from "../Metier"
import { Viking } from "../Viking"
import { Personnage } from "./Personnage";

export class Newviking extends Metier{

    private static _nommetier: string = "Viking";
    private static _santebonus: number = 25;
    private static _forcebonus: number = 4;
    private static _vitessebonus: number = 2;
    private static _intellignencebonus: number = 0;
    private static  _manabonus: number = 5;
    private static _pctpointdechancebonus: number = 0.08;

    private _voldevie: number
    
    constructor() {
        super(Newviking._nommetier, Newviking._santebonus, Newviking._forcebonus, Newviking._vitessebonus, Newviking._intellignencebonus, Newviking._manabonus, Newviking._pctpointdechancebonus)
        this._voldevie = 0.15
    }

    capaciteAvantCombat(perso: Personnage, cible: Personnage) {}

    public get voldevie(): number {
        return this._voldevie
    }
    public set voldevie(value: number) {
        this._voldevie = value
    }
     
    }
        