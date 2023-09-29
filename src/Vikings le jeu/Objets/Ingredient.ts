import { Consommable } from "./Consommable";


class Ingredient extends Consommable {
  private _nom: string;


  constructor (prix : number, poids : number, nomingredient : string){
    super(prix, poids);
    this._nom = "Ingrédient = " + nomingredient
}

 utiliser() {
    this.consommer();
     
 }
 consommer(){
    console.log("L'ingrédient a été utilisé' !")
 }
  }

  public get nom(): string {
    return this._nom;
}
public set nom(value: string) {
    this._nom = value;
}
