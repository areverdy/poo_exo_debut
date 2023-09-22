import { Metier } from "../Metiers";

export class Magicien extends Metier{
    private static _nommetier: string = "Magicien";
    private static _santebonus: number = 5;
    private static _forcebonus: number = 1;
    private static _vitessebonus: number = 1;
    private static _intellignencebonus: number = 5;
    private static  _manabonus: number = 45;
    private static _pctpointdechancebonus: number = 0;

    private _incantation: string;
    public get incantation(): string {
        return this._incantation;
    }
    public set incantation(value: string) {
        this._incantation = value;
    }
    constructor(
        incantation: string,
    ){
        super(Magicien._nommetier, Magicien._santebonus, Magicien._forcebonus, Magicien._vitessebonus, Magicien._intellignencebonus, Magicien._manabonus, Magicien._pctpointdechancebonus)
        this._incantation = incantation
    }

}