import {Arme} from "../Arme"
import { Metier } from "../Metier"


export class Personnage {

    public nom: string
    private _santeInitiale: number = 50
    private _metier: Metier
    private _force: number = 10
    private _niveau: number = 1
    private _nbreptexperience: number = 0
    private _vitesse: number = 10
    private _intelligence: number = 10
    private _mana: number = 50 
    private _pctchance: number = 0.02
     
    constructor(
        
        nom: string,
        metier : Metier,

    ) {
        this.nom = nom
        this._metier = metier
        this._santeInitiale = this.santeInitiale + this.metier.santebonus
        this._force = this.force + this.metier.forcebonus
        this._niveau = this.niveau
        this._nbreptexperience = this.nbreptexperience
        this._vitesse = this.vitesse + this.metier.vitessebonus
        this._intelligence = this.intelligence + this.metier.intelligencebonus
        this._mana = this.mana + this.metier.manabonus
        this._pctchance = this.pctchance + this.metier.pctpointdechancebonus

    }
    public get santeInitiale(): number {
        return this._santeInitiale
    }
    public set santeInitiale(value: number) {
        this._santeInitiale = value
    }

    public get metier(): Metier {
        return this._metier
    }
    public set metier(value: Metier) {
        this._metier = value
    }
    public get niveau(): number {
        return this._niveau
    }
    public set niveau(value: number) {
        this._niveau = value
    }
    public get nbreptexperience(): number {
        return this._nbreptexperience
    }
    public set nbreptexperience(value: number) {
        this._nbreptexperience = value
    }
    public get vitesse(): number {
        return this._vitesse
    }
    public set vitesse(value: number) {
        this._vitesse = value
    }
    public get intelligence(): number {
        return this._intelligence
    }
    public set intelligence(value: number) {
        this._intelligence = value
    }
    public get mana(): number {
        return this._mana
    }
    public set mana(value: number) {
        this._mana = value
    }
    public get pctchance(): number {
        return this._pctchance
    }
    public set pctchance(value: number) {
        this._pctchance = value
    }
    public get force(): number {
        return this._force
    }
    public set force(value: number) {
        this._force = value
    }
}
