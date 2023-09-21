import { cp } from "fs";
import { Viking } from "./Viking";

export class Combat {
    public v1 : Viking;
    public v2 : Viking;

    constructor(viking1: Viking, viking2: Viking){
        this.v1 = viking1
        this.v2 = viking2
    }
    
    public combattre(){
        // this.getattaquant1().
        let defenseur = this.getdefenseur1()
        let attaquant = this.getattaquant1()

        while(defenseur.isAlive() && attaquant.isAlive()){
            defenseur.perdreDeLaVie(attaquant.getForceTotale())
            
            console.log("La situation est la suivante");
            console.log("attaquant : ");
            defenseur.afficherSesCaracteristiques()
            console.log("defenseur : ");
            attaquant.afficherSesCaracteristiques()        

            let intermediaire = attaquant
            attaquant = defenseur
            defenseur = intermediaire
        }
    }       

    public récupérerSurvivant(){
        if(this.v1.isAlive()){
            return this.v1
        }
        else {
            return this.v2
        }
    }

    public afficherNomsCombattants(){
        console.log("Les noms des combattants : " + this.v1.nom + ', ' + this.v2.nom);
    }

    public afficherArmesCombattants(){
        console.log("Les noms des armes: " + this.v1.arme.nom + ', ' + this.v2.arme.nom);
    }

    public recupererLaForceTotaleDesVikings(){
        (this.v1.getForceTotale() + this.v2.getForceTotale())

    }

    public affichervainqueur(){
        const vainqueur = this.getgagnant()
        console.log('le gagnant est ' + vainqueur.nom + " avec " + vainqueur.sante + " PV")
    }

    public getattaquant1(): Viking {
        if (this.v1.force + this.v1.arme.force < this.v2.force + this.v2.arme.force) {
            return this.v1
        } else {
            return this.v2
        }
    }

    public getdefenseur1(): Viking {
        if (this.v1.force + this.v1.arme.force < this.v2.force + this.v2.arme.force) {
            return this.v2
        } else {
            return this.v1
        }
    }

    public getgagnant() : Viking {
        let gagnant = this.v1
        if(this.v1.sante <= 0){
            gagnant = this.v2
        }
        return gagnant 
    }

}