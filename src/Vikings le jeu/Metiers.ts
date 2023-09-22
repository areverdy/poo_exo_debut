import { Personnage } from "./Personnages/Personnages";
import { Archer } from "./Personnages/Archers";
import { Chevalier } from "./Personnages/Chevaliers";
import { Magicien } from "./Personnages/Magiciens";
import { Newviking } from "./Personnages/NewVikings";
import { Voleur } from "./Personnages/Voleurs";

export class Metier {
   private _nommetier: String;
    public get nommetier(): String {
        return this._nommetier;
    }
    public set nommetier(value: String) {
        this._nommetier = value;
    }
    private _santebonus: Number;
    public get santebonus(): Number {
        return this._santebonus;
    }
    public set santebonus(value: Number) {
        this._santebonus = value;
    }
    private _forcebonus: Number;
    public get forcebonus(): Number {
        return this._forcebonus;
    }
    public set forcebonus(value: Number) {
        this._forcebonus = value;
    }
    private _vitessebonus: Number;
    public get vitessebonus(): Number {
        return this._vitessebonus;
    }
    public set vitessebonus(value: Number) {
        this._vitessebonus = value;
    }
    private _intelligencebonus: Number;
    public get intelligencebonus(): Number {
        return this._intelligencebonus;
    }
    public set intelligencebonus(value: Number) {
        this._intelligencebonus = value;
    }

    private _manabonus: Number;
    public get manabonus(): Number {
        return this._manabonus;
    }
    public set manabonus(value: Number) {
        this._manabonus = value;
    }
    private _pctpointdechancebonus: Number;
    public get pctpointdechancebonus(): Number {
        return this._pctpointdechancebonus;
    }
    public set pctpointdechancebonus(value: Number) {
        this._pctpointdechancebonus = value;
    }

    constructor(
        _nommetier: String,
        _santebonus: Number,
        _forcebonus: Number,
        _vitessebonus: Number,
        _intelligencebonus: Number,
        _manabonus: Number,
        _pctpointdechancebonus: Number
    ) {
        this._nommetier = _nommetier
        this._santebonus = _santebonus
        this._forcebonus = _forcebonus
        this._vitessebonus = _vitessebonus
        this._intelligencebonus = _intelligencebonus
        this._manabonus = _manabonus
        this._pctpointdechancebonus = _pctpointdechancebonus
    }


}