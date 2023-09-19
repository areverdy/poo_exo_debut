import {Voiture} from "./Voiture"
import {Pomme} from "./Pomme"
import {Conducteur} from "./Conducteur"
import {Joueur} from "./Joueur"
import {Equipe} from "./Equipe"
import { Match } from "./Match"

const apple = new Pomme('Granny Smith', 'verte')
apple.afficher()
console.log(apple.couleur)

apple.couleur = "rouge";
console.log(apple.couleur)

const apple2 = new Pomme('Pink Lady', 'rose')
apple2.afficher()

apple2.couleur = "jaune";
console.log(apple2.couleur)

console.log(Pomme.donner_l_heure())

const voiturePetite = new Voiture('rouge', 22);
const voiture1 = new Voiture('noire', 100);
// voiture1.crasher()
// console.log("etat de la voiture neuve :", voiture1.etat)
// console.log("etat de la voiture petite :", voiturePetite.etat)

const voitures = [voiturePetite, voiture1]


const thomas = new Conducteur("Laforge", "thomas", voitures)
thomas.direBonjour()
thomas.crasher(0)
console.log(voiturePetite.etat);
console.log(voiture1.etat);


console.log(thomas.voitures[0].couleur)

const kevin = new Joueur('Kevin', 'Durant', 37)
// console.log(kevin)

const victor = new Joueur('Victor', 'Wemi', 19)
// console.log(victor)

const equipe1 = new Equipe([kevin,victor])
console.log(equipe1)

const tony = new Joueur('Tony', 'Parker', 42)
// console.log(tony)

const boris = new Joueur('Boris', 'Diaw', 42)
// console.log(boris)

const equipe2 = new Equipe([tony,boris])
console.log(equipe2)

// const match = new Match(equipe1, equipe2, 0, 0)
// match.affrontement()
// const vainqueur = match.getWinner1()

class Tournoi {

    public equipe1: Equipe
    public equipe2: Equipe
    public equipe3: Equipe
    public equipe4: Equipe
    winner: Equipe | null

    constructor(equipe1: Equipe, equipe2: Equipe, equipe3: Equipe, equipe4: Equipe, ){
        this.equipe1 = equipe1
        this.equipe2 = equipe2
        this.equipe3 = equipe3
        this.equipe4 = equipe4
        this.winner = null
    }

    public affrontement(){
        const matchequipe1et2 = new Match(this.equipe1, this.equipe2, 0, 0)
        matchequipe1et2.affrontement()
        const winnerEquipe1et2 = matchequipe1et2.getWinner()
        const loserEquipe1et2 = matchequipe1et2.getLoser()
        const matchequipe3et4 = new Match(this.equipe3, this.equipe4, 0, 0)
        matchequipe3et4.affrontement()
        const winnerEquipe3et4 = matchequipe3et4.getWinner()
        const loserEquipe3et4 = matchequipe3et4.getLoser()
        const matchDesGagnants = new Match(winnerEquipe1et2, winnerEquipe3et4, 0, 0)
        matchDesGagnants.affrontement()
        const winnertournoi = matchDesGagnants.getWinner()
        const matchDesPerdants = new Match(loserEquipe1et2, loserEquipe3et4, 0, 0)       
        matchDesPerdants.affrontement()
        const winnerpetitefinale = matchDesPerdants.getWinner()
        this.winner = winnertournoi
    }

    getWinner(){
        return this.winner
    }

}