export class Joueur {
    public prenom : string;
    public nom : string;
    public age : number;

    constructor(
        prenom: string,
        nom: string,
        age: number
    ){
        console.log("joueur")
        this.nom = nom
        this.prenom = prenom
        this.age = age
      }
       
}