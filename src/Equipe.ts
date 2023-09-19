import { Joueur } from "./Joueur";

export class Equipe{
    public joueurs : Joueur[]

    constructor(
        lesjoueurs : Joueur[]
    ) {
        console.log("nouvelle équipe")
        this.joueurs = lesjoueurs
    }


public affichernbrejoueur(): number {
    return this.joueurs.length;
}

}
 
