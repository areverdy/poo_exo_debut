import { Personnage } from "../Personnages/Personnage";
import { Consommable } from "./Consommable";


export class Potion extends Consommable {
  private _nom: string;
  private _effet: effet;    
  private _pouvoir: pouvoir;
    
       
constructor (prix : number, poids : number, nompotion : string, effet : effet, pouvoir : pouvoir ){
    super(prix, poids);
    this._nom = "Potion de " + nompotion;
    this._effet = effet;
    this._pouvoir = pouvoir
}

 utiliser(personnage : Personnage) {
    this.consommer(personnage);
     
 }
 consommer(personnage : Personnage){
    if(this.effet = 0){
      personnage.mana+=this.pouvoir_1 
      console.log("La potion a été bue !")
    }
    else if(this.effet = 1){
        personnage.santeInitiale+=this.pouvoir_1
        console.log("La potion a été bue !")
    }
    else {
        console.log("Aucune potion à boire")
    }

    
 }

 public get nom(): string {
    return this._nom;
}
public set nom(value: string) {
    this._nom = value;
}
public get effet(): effet {
    return this._effet;
}
public set effet(value: effet) {
    this._effet = value;
}
public get pouvoir_1(): pouvoir {
    return this._pouvoir;
}
public set pouvoir_1(value: pouvoir) {
    this._pouvoir = value;
}

}
export enum effet {
    mana,
    vie
}

export enum pouvoir {
    faible = 10,
    moyen = 45,
    fort = 100
}
