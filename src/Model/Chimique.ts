import  {Produit} from  './Produit.js';

export class Chimique extends Produit{

    private degre : number;


    public getDegre(): number {
        return this.degre;
    }

    public setDegre(degre: number): void {
        this.degre = degre;
    }

    constructor(libelle: string , poids : number , degre : number){
        super(libelle, poids, "Chimique");
        this.degre = degre;
    }
    public info(): void {
      console.log(`Produit Chimique : ${this.libelle}, Poids : ${this.poids}kg, Type : ${this.typeProduit}, Degre : ${this.degre}`);
    }
    
}