import {Voiture} from "./Voiture"
import {Conducteur} from "./Conducteur"

const voiturePetite = new Voiture('rouge', 22);
const voiture1 = new Voiture('noire', 100);
voiture1.crasher()
console.log("etat de la voiture neuve :", voiture1.etat)
console.log("etat de la voiture petite :", voiturePetite.etat)

const voitures = [voiturePetite, voiture1]


const thomas = new Conducteur("Laforge", "thomas", voitures)
thomas.direBonjour()
thomas.crasher(0)
console.log(voiturePetite.etat);
console.log(voiture1.etat);


console.log(thomas.voitures[0].couleur)