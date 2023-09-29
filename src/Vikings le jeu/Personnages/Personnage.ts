import {Arme} from "../Arme"
import { Metier } from "../Metier"
import { Consommable } from "../Objets/Consommable"
import { Equipable } from "../Objets/Equipable"


export class Personnage {

    public nom: string
    private _santeInitiale: number = 50
    private _metier: Metier
    private _force: number = 10
    private _nbreptexperience: number = 0
    private _vitesse: number = 10
    private _intelligence: number = 10
    private _mana: number = 50 
    private _pctchance: number = 0.02
    private _degats: number = 0
    public hasPiege: boolean = false
    public hasBouclier: boolean = false
    private _consommable: Consommable[]
    
     
    constructor(
        nom: string,
        metier : Metier,
        consommable : Consommable[],

        
    ) {
        this.nom = nom
        this._metier = metier
        this._consommable = consommable

        }

    seFaitAttaquer(pointsDeDegats: number){
        this._degats += pointsDeDegats
    }
    getForceTotale() : number {
        return this.force + this._metier.forcebonus
    }
    isAlive(){
        return this.sante > 0
    }

    avantCombat(cible:Personnage) {
        this.metier.capaciteAvantCombat(this, cible);
    }

    public get sante(){
        return this.santeInitiale - this._degats
    }

    public get santeInitiale(): number {
        return this._santeInitiale + this.metier.santebonus
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
        let niveau = 1
        if(this._nbreptexperience > 150){
            niveau = 2
        }
        else if(this._nbreptexperience > 400){
            niveau = 3
        }
        return niveau
    }

    public get nbreptexperience(): number {
        return this._nbreptexperience
    }
    public set nbreptexperience(value: number) {
        this._nbreptexperience = value
    }
    public get vitesse(): number {
        return this._vitesse + this._metier.vitessebonus
    }
    public set vitesse(value: number) {
        this._vitesse = value
    }
    public get intelligence(): number {
        return this._intelligence + this._metier.intelligencebonus
    }
    public set intelligence(value: number) {
        this._intelligence = value
    }
    public get mana(): number {
        return this._mana + this._metier.manabonus
    }
    public set mana(value: number) {
        this._mana = value
    }
    public get pctchance(): number {
        return this._pctchance + this.metier.pctpointdechancebonus
    }
    public set pctchance(value: number) {
        this._pctchance = value
    }
    public get force(): number {
        return this._force + this.metier.forcebonus
    }
    public set force(value: number) {
        this._force = value
    }
    public get degats(): number {
        return this._degats
    }
    public set degats(value: number) {
        this._degats = value
    }
    public get consommable(): Consommable[] {
        return this._consommable
    }
    public set consommable(value: Consommable[]) {
        this._consommable = value
    }
}
