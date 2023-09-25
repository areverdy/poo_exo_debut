import { log } from "console";
import { Archer } from "./Personnages/Archer";
import { Newviking } from "./Personnages/NewViking";
import { Personnage } from "./Personnages/Personnage";

export class CombatHandler {
    public attaquant1 : Personnage;
    public attaquant2 : Personnage;

    constructor(attaquant1: Personnage, attaquant2: Personnage){
        this.attaquant1 = attaquant1,
        this.attaquant2 = attaquant2
    }

    seDeroule(){
        let defenseur = this.attaquant1.vitesse > this.attaquant2.vitesse ? this.attaquant2 : this.attaquant1
        let attaquant = this.attaquant1.vitesse > this.attaquant2.vitesse ? this.attaquant1 : this.attaquant2

        if(defenseur.metier instanceof Archer){
            console.log('un archer !')
        }

        while(defenseur.isAlive() && attaquant.isAlive()){

            defenseur.seFaitAttaquer(attaquant.getForceTotale())

            let intermediaire = attaquant
            attaquant = defenseur
            defenseur = intermediaire
        } 

        if(this.attaquant1.isAlive()){
            // console.log(this.attaquant1.nom + ' a gagné');
            // this.attaquant2.nbreptexperience = 160
            // console.log('niveau adverse', this.attaquant2.niveau);
            // console.log('niveau perso:before', this.attaquant1.niveau, this.attaquant1.nbreptexperience);
            // this.attaquant1.nbreptexperience += this.attaquant2.niveau * 100
            // console.log('niveau perso:after', this.attaquant1.niveau, this.attaquant1.nbreptexperience);
        }
        else {
            console.log(this.attaquant2.nom + ' a gagné');
        }
    }



}