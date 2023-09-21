import {Arme} from "./Arme"

export class Personnage {

    public nom: string
    public sante: number
    private _santeInitiale: number
    public get santeInitiale(): number {
        return this._santeInitiale
    }
    public set santeInitiale(value: number) {
        this._santeInitiale = value
    }
    private _force: number
    private _arme: Arme
    public get arme(): Arme {
        return this._arme
    }
    public set arme(value: Arme) {
        this._arme = value
    }
    private _defense: number
    public get defense(): number {
        return this._defense
    }
    public set defense(value: number) {
        this._defense = value
    }
    private _niveau: number
    public get niveau(): number {
        return this._niveau
    }
    public set niveau(value: number) {
        this._niveau = value
    }
    private _nbreptexperience: number
    public get nbreptexperience(): number {
        return this._nbreptexperience
    }
    public set nbreptexperience(value: number) {
        this._nbreptexperience = value
    }
    private _type: number
    public get type(): number {
        return this._type
    }
    public set type(value: number) {
        this._type = value
    }
    private _vitesse: number
    public get vitesse(): number {
        return this._vitesse
    }
    public set vitesse(value: number) {
        this._vitesse = value
    }
    private _intelligence: number
    public get intelligence(): number {
        return this._intelligence
    }
    public set intelligence(value: number) {
        this._intelligence = value
    }
    private _mana: number
    public get mana(): number {
        return this._mana
    }
    public set mana(value: number) {
        this._mana = value
    }
    private _pctchance: number
    public get pctchance(): number {
        return this._pctchance
    }
    public set pctchance(value: number) {
        this._pctchance = value
    }


    constructor(
        nom: string,
        sante: number,
        santeInitiale: number,
        force: number,
        arme: Arme,
        defense: number,
        niveau: number,
        nbreptexperience: number,
        type: number,
        vitesse: number,
        intelligence: number,
        mana: number,
        pctchance: number,

    ) {
        this.nom = nom
        this.sante = sante
        this._santeInitiale = santeInitiale
        this._force = force
        this._arme = arme
        this._defense = defense
        this._niveau = niveau
        this._nbreptexperience = nbreptexperience
        this._type = type
        this._vitesse = vitesse
        this._intelligence = intelligence
        this._mana = mana
        this._pctchance = pctchance

    }
}
