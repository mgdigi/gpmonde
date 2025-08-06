import { Produit } from './Produit.js';
export class Chimique extends Produit {
    degre;
    getDegre() {
        return this.degre;
    }
    setDegre(degre) {
        this.degre = degre;
    }
    constructor(libelle, poids, degre) {
        super(libelle, poids, "Chimique");
        this.degre = degre;
    }
    info() {
        console.log(`Produit Chimique : ${this.libelle}, Poids : ${this.poids}kg, Type : ${this.typeProduit}, Degre : ${this.degre}`);
    }
}
