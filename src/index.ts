import { Viking } from "./Vikings/Viking"
import { Arme } from "./Vikings/Arme"

const armeG = new Arme("Seax",8)
const armeH = new Arme("Hache",9)

const Gudrun = new Viking('Gudrun', 98, 9,[armeG])
console.log(Gudrun)

const Holda = new Viking("Holda", 85, 9, [armeH])
console.log(Holda)

class Combat {

}
