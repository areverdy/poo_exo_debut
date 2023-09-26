// import { Viking } from "./Vikings le jeu/Viking"
// import { Arme } from "./Vikings le jeu/Arme"
// import { Combat } from "./Vikings le jeu/Combat"

import { before } from "node:test";
import { Archer } from "./Vikings le jeu/Personnages/Archer.1";
import { Chevalier } from "./Vikings le jeu/Personnages/Chevalier";
import { Magicien } from "./Vikings le jeu/Personnages/Magicien";
import { Newviking } from "./Vikings le jeu/Personnages/NewViking";
import { Personnage } from "./Vikings le jeu/Personnages/Personnage";
import { CombatHandler } from "./Vikings le jeu/CombatHandler";

// const armeG = new Arme("Seax",8)
// const armeH = new Arme("Hache",9)

// const Gudrun = new Viking('Gudrun', 98, 8,armeG)
// console.log(Gudrun)

// const Holda = new Viking("Holda", 85, 9, armeH)
// console.log(Holda)

// const combat = new Combat(Gudrun, Holda)
// combat.combattre()
// combat.affichervainqueur()

const viking = new Newviking();
const Ragnar = new Personnage("Ragnar", viking)
// console.log(Ragnar)

const archer = new Archer();
const Cupidon = new Personnage("Cupidon", archer)
// console.log(Cupidon)

const chevalier = new Chevalier();
const Bayard = new Personnage("Bayard", chevalier)
// console.log(Bayard)

const magicien = new Magicien();
const Merlin = new Personnage("Merlin", magicien)
// console.log(Merlin)

const monCombat = new CombatHandler(Ragnar, Cupidon)
monCombat.seDeroule()

const monCombat2 = new CombatHandler(Bayard, Merlin)
monCombat2.seDeroule()