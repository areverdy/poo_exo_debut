import { Equipe } from "./Equipe";
import { Joueur } from "./Joueur";

export class Match{
    public equipe1 : Joueur [];
    public equipe2 : Joueur [];

    constructor(
        equipe1: Joueur[],
        equipe2: Joueur[],
    ) {
        console.log("composition equipe")
        this.equipe1 = equipe1
        this.equipe2 = equipe2
    }
}