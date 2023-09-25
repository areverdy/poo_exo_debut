import { Metier } from "../Metier"
import {  } from "./Chevalier";

export class Archer extends Metier {
    private static _nommetier: string = "Archer";
    private static _santebonus: number = 15;
    private static _forcebonus: number = 2;
    private static _vitessebonus: number = 3;
    private static _intellignencebonus: number = 1;
    private static  _manabonus: number = 10;
    private static _pctpointdechancebonus: number = 0.05;

    private _posedepiege: boolean = true;
    public get posedepiege(): true {
        return this._posedepiege = true;
    }
    public set posedepiege(value: boolean) {
        this._posedepiege = value;
    }
    constructor(
        
    ) {
        super(Archer._nommetier, Archer._santebonus, Archer._forcebonus, Archer._vitessebonus, Archer._intellignencebonus, Archer._manabonus, Archer._pctpointdechancebonus)
        this._posedepiege = this.posedepiege
    }
}