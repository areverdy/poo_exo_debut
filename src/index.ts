// import { Viking } from "./Vikings le jeu/Viking"
// import { Arme } from "./Vikings le jeu/Arme"
// import { Combat } from "./Vikings le jeu/Combat"

import { before } from "node:test";
import { Archer } from "./Vikings le jeu/Personnages/Archer";
import { Chevalier } from "./Vikings le jeu/Personnages/Chevalier";
import { Magicien } from "./Vikings le jeu/Personnages/Magicien";
import { Newviking } from "./Vikings le jeu/Personnages/NewViking";
import { Personnage } from "./Vikings le jeu/Personnages/Personnage";
import { CombatHandler } from "./Vikings le jeu/CombatHandler";
import { Potion } from "./Vikings le jeu/Objets/Potion";

// const armeG = new Arme("Seax",8)
// const armeH = new Arme("Hache",9)

// const Gudrun = new Viking('Gudrun', 98, 8,armeG)
// console.log(Gudrun)

// const Holda = new Viking("Holda", 85, 9, armeH)
// console.log(Holda)

// const combat = new Combat(Gudrun, Holda)
// combat.combattre()
// combat.affichervainqueur()
const Potion1 = new Potion(5,0.5,"potiondevie",1,100)
const viking = new Newviking();
const Ragnar = new Personnage("Ragnar", viking,[Potion1])
// console.log(Ragnar)

const archer = new Archer();
const Cupidon = new Personnage("Cupidon", archer,[Potion1])
// console.log(Cupidon)

const chevalier = new Chevalier();
const Bayard = new Personnage("Bayard", chevalier,[Potion1])
// console.log(Bayard)

const magicien = new Magicien();
const Merlin = new Personnage("Merlin", magicien,[Potion1])
// console.log(Merlin)

const monCombat = new CombatHandler(Ragnar, Cupidon)
let vainc1 = monCombat.seDeroule()

const monCombat2 = new CombatHandler(Bayard, Merlin)
let vainc2 = monCombat2.seDeroule()

const monCombat3 = new CombatHandler(vainc1, vainc2)
monCombat3.seDeroule()

