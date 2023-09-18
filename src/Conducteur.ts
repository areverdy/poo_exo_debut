import { Voiture } from "./Voiture";

export class Conducteur {
    public nom : string;
    public prenom : string;
    public voitures: Voiture[];
  
    constructor(
      nom: string,
      prenom: string,
      voitures: Voiture[]
    ) {
      console.log("Nouvelle voiture")
      this.nom = nom
      this.prenom = prenom
      this.voitures = voitures
    }
      
    public direBonjour(): void {
      console.log("Bonjour, je m'appelle " + this.nom + ' ' + this.prenom)
    }
  
    public crasher(index: number): void {
        this.voitures[index].crasher()
    }
  }
 