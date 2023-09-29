import { Consommable } from "./Consommable";


class Potion extends Consommable {
  private _nom: string;
  private _effet: string;   
  private _pouvoir: string;
       
constructor (prix : number, poids : number, nompotion : string, effet : poteffet, pouvoir :potpouvoir ){
    super(prix, poids);
    this._nom = "Potion de " + nompotion
    this._effet = effet;
    this._pouvoir = pouvoir
}

 utiliser() {
    this.consommer();
     
 }
 consommer(){
    console.log("La potion a été bue !")
 }

 public get nom(): string {
    return this._nom;
}
public set nom(value: string) {
    this._nom = value;
}
public get effet_1(): string {
    return this._effet;
}
public set effet_1(value: string) {
    this._effet = value;
}
public get pouvoir(): string {
    return this._pouvoir;
}
public set pouvoir(value: string) {
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
