import {Arme} from "./Arme"

export class Personnage {

    public nom: string
    public sante: number
    private santeInitiale: number
    private _force: number
    private arme: Arme
    private defense: number

    constructor(
        nom: string,
        sante: number,
        santeInitiale: number,
        force: number,
        arme: Arme,
        defense: number
    ) {
        this.nom = nom
        this.sante = sante
        this.santeInitiale = santeInitiale
        this._force = force
        this.arme = arme
        this.defense = defense
    }
}