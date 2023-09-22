import { Metier } from "../Metiers"
import { Viking } from "../Viking"

export class Newviking extends Metier{
    private static _nommetier: String = "test";
    private static _santebonus: Number = 25;
    private static _forcebonus: Number = 4;
    private static _vitessebonus: Number = 2;
    private static _intellignencebonus: Number = 0;
    private static  _manabonus: Number = 5;
    private static _pctpointdechancebonus: Number = 0.2;


    private _voldevie: number
    public get voldevie(): number {
        return this._voldevie
    }
    public set voldevie(value: number) {
        this._voldevie = value
    }

    constructor(
        voldevie: number
    ) {
        super(Newviking._nommetier, Newviking._santebonus, Newviking._forcebonus, Newviking._vitessebonus, Newviking._intellignencebonus, Newviking._manabonus, Newviking._pctpointdechancebonus)
        this._voldevie = voldevie
    }
     
    }
        