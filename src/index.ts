import {Voiture} from "./Voiture"
import {Pomme} from "./Pomme"
import {Conducteur} from "./Conducteur"
import {Joueur} from "./Joueur"
import {Equipe} from "./Equipe"

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

const camille = new Joueur('Tony', 'Parker', 42)
// console.log(camille)

const karim = new Joueur('Karim', 'Sekri', 42)
// console.log(karim)

const equipe2 = new Equipe([camille,karim])
console.log(equipe2)

