import { Metier } from "../Metiers";

export class Chevalier extends Metier {
    private static _nommetier: string = "Chevalier";
    private static _santebonus: number = 40;
    private static _forcebonus: number = 5;
    private static _vitessebonus: number = 1;
    private static _intellignencebonus: number = 1;
    private static  _manabonus: number = 5;
    private static _pctpointdechancebonus: number = 0.03;

    private _bouclier: string;
    public get bouclier(): string {
        return this._bouclier;
    }
    public set bouclier(value: string) {
        this._bouclier = value;
    }
    constructor(
        bouclier: string,
    ){
        super(Chevalier._nommetier, Chevalier._santebonus, Chevalier._forcebonus, Chevalier._vitessebonus, Chevalier._intellignencebonus, Chevalier._manabonus, Chevalier._pctpointdechancebonus)
        this._bouclier=bouclier
    }
}