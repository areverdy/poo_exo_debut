import { Metier } from "../Metiers"
import {  } from "./Chevaliers";

export class Archer extends Metier {
    private static _nommetier: string = "Archer";
    private static _santebonus: number = 15;
    private static _forcebonus: number = 2;
    private static _vitessebonus: number = 3;
    private static _intellignencebonus: number = 1;
    private static  _manabonus: number = 10;
    private static _pctpointdechancebonus: number = 0.05;

    private _posedepiege: string;
    public get posedepiege(): string {
        return this._posedepiege;
    }
    public set posedepiege(value: string) {
        this._posedepiege = value;
    }
    constructor(
        posedepiege: string,
    ) {
        super(Archer._nommetier, Archer._santebonus, Archer._forcebonus, Archer._vitessebonus, Archer._intellignencebonus, Archer._manabonus, Archer._pctpointdechancebonus)
        this._posedepiege = posedepiege
    }
}