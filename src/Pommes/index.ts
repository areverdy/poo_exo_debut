
import {Pomme} from "./Pomme"

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
