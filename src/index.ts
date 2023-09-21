import { Viking } from "./Vikings/Viking"
import { Arme } from "./Vikings/Arme"
import { Combat } from "./Vikings/Combat"

const armeG = new Arme("Seax",8)
const armeH = new Arme("Hache",9)

const Gudrun = new Viking('Gudrun', 98, 8,armeG)
console.log(Gudrun)

const Holda = new Viking("Holda", 85, 9, armeH)
console.log(Holda)

const combat = new Combat(Gudrun, Holda)
combat.combattre()
combat.affichervainqueur()