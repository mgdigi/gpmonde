import  {Produit} from  './Produit.js';

export class Alimentaire extends Produit {

    constructor(libelle: string, poids: number ) {
        super(libelle, poids, "Alimentaire");
    }

    public info(): void {
        console.log(`Produit Alimentaire : ${this.libelle}, Poids : ${this.poids}kg, Type : ${this.typeProduit}`);
    }
    
}