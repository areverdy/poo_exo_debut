import { Joueur } from "./Joueur";

export class Equipe{
    public joueurs : Joueur[]

    constructor(
        joueurs : Joueur[]
    ) {
        // console.log("nouvelle équipe")
        this.joueurs = joueurs
    }

public affichernbrejoueur(): number {
    return this.joueurs.length;
}

}
 
