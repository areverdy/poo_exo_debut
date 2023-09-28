import { Metier } from "../Metier"
import {  } from "./Chevalier";
import { Personnage } from "./Personnage";

export class Archer extends Metier {

    private static _nommetier: string = "Archer";
    private static _santebonus: number = 15;
    private static _forcebonus: number = 2;
    private static _vitessebonus: number = 3;
    private static _intellignencebonus: number = 1;
    private static  _manabonus: number = 10;
    private static _pctpointdechancebonus: number = 0.05;

    private _posedepiege: boolean = true;


    capaciteAvantCombat(perso : Personnage, cible : Personnage) {
        if (perso.vitesse > cible.vitesse){
            console.log(perso.nom + " pose un piège avant le début du combat")
            cible.seFaitAttaquer(2.5*perso.force)
        }
    }

    constructor(
        
    ) {
        super(Archer._nommetier, Archer._santebonus, Archer._forcebonus, Archer._vitessebonus, Archer._intellignencebonus, Archer._manabonus, Archer._pctpointdechancebonus)
        this._posedepiege = this._posedepiege
    }
    public get posedepiege_1(): boolean {
        return this._posedepiege;
    }
    public set posedepiege_1(value: boolean) {
        this._posedepiege = value;
    }
}