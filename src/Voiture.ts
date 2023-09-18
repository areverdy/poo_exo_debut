export class Voiture {
  private _couleur : string;
  public etat : number;

  constructor(
    couleur: string,
    etat: number,
  ) {
    console.log("Nouvelle voiture")
    this._couleur = couleur
    this.etat = etat
  }
    
  public crasher(): void {
    this.etat *=0.8;
  }

  public get couleur(): string {
    return this._couleur;
  }
}
