import { Equipe } from "./Equipe";
import { Joueur } from "./Joueur";


// SQL

export class Match{
    public equipe1 : Equipe;
    public equipe2 : Equipe;
    public scoreequipe1 : number;
    public scoreequipe2 : number;


    constructor(
        equipe1: Equipe,
        equipe2: Equipe,
        scoreequipe1: number,
        scoreequipe2: number,
     
    ) {
        console.log("composition equipe")
        this.equipe1 = equipe1
        this.equipe2 = equipe2
        this.scoreequipe1 = scoreequipe1
        this.scoreequipe2 = scoreequipe2
    }

    public affrontement(){
        this.scoreequipe1 = 20
        this.scoreequipe2 = 2

    }
    
    public getWinner() : Equipe {
        if(this.scoreequipe1 > this.scoreequipe2){
            return this.equipe1
        }
        else {
            return this.equipe2
        }
    }

    public getLoser() : Equipe {
        if(this.scoreequipe1 > this.scoreequipe2) {
            return this.equipe2
        }
        else {
            return this.equipe1
        }
    }
}

