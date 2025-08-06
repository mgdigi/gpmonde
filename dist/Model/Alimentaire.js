import { Produit } from './Produit.js';
export class Alimentaire extends Produit {
    constructor(libelle, poids) {
        super(libelle, poids, "Alimentaire");
    }
    info() {
        console.log(`Produit Alimentaire : ${this.libelle}, Poids : ${this.poids}kg, Type : ${this.typeProduit}`);
    }
}
