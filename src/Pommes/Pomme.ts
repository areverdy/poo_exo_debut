export class Pomme {

    public variete: string
    private _couleur: string
  
  
    constructor(
      variete: string,
      couleur: string,
    ) {
  
      console.log('Nouvelle pomme')
      this.variete = variete
      this._couleur = couleur
    }
    afficher(){
        console.log('La nouvelle pomme est : ', this._couleur);
      }
    
      static donner_l_heure(){
        return Date.now()
      }
    
    
      public get couleur() : string {
        return this._couleur
      }
    
      public set couleur(couleur: string){
        this._couleur = couleur;
      }
    }