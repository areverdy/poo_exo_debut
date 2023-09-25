import { Personnage } from "./Personnages/Personnage";
import { Archer } from "./Personnages/Archer";
import { Chevalier } from "./Personnages/Chevalier";
import { Magicien } from "./Personnages/Magiciens";
import { Newviking } from "./Personnages/NewViking";
import { Voleur } from "./Personnages/Voleurs";

export class Metier {
    private _nommetier: string;
    private _santebonus: number;    
    private _forcebonus: number;   
    private _vitessebonus: number;  
    private _intelligencebonus: number;
    private _manabonus: number;   
    private _pctpointdechancebonus: number;
    

    constructor(
        _nommetier: string,
        _santebonus: number,
        _forcebonus: number,
        _vitessebonus: number,
        _intelligencebonus: number,
        _manabonus: number,
        _pctpointdechancebonus: number
    ) {
        this._nommetier = _nommetier
        this._santebonus = _santebonus
        this._forcebonus = _forcebonus
        this._vitessebonus = _vitessebonus
        this._intelligencebonus = _intelligencebonus
        this._manabonus = _manabonus
        this._pctpointdechancebonus = _pctpointdechancebonus
    }
    public get nommetier(): string {
        return this._nommetier;
    }
    public set nommetier(value: string) {
        this._nommetier = value;
    }
    public get santebonus(): number {
        return this._santebonus;
    }
    public set santebonus(value: number) {
        this._santebonus = value;
    }
    public get forcebonus(): number {
        return this._forcebonus;
    }
    public set forcebonus(value: number) {
        this._forcebonus = value;
    }
    public get vitessebonus(): number {
        return this._vitessebonus;
    }
    public set vitessebonus(value: number) {
        this._vitessebonus = value;
    }
    public get intelligencebonus(): number {
        return this._intelligencebonus;
    }
    public set intelligencebonus(value: number) {
        this._intelligencebonus = value;
    }
    public get manabonus(): number {
        return this._manabonus;
    }
    public set manabonus(value: number) {
        this._manabonus = value;
    }
    public get pctpointdechancebonus(): number {
        return this._pctpointdechancebonus;
    }
    public set pctpointdechancebonus(value: number) {
        this._pctpointdechancebonus = value;
    }
}