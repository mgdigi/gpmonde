import { Produit } from './Produit.js';
export class Materiel extends Produit {
    type;
    constructor(libelle, poids, type) {
        super(libelle, poids, "Materiel");
        this.type = type;
    }
    info() {
        console.log(`Produit Materiel : ${this.libelle}, Poids : ${this.poids}kg, Type : ${this.typeProduit}`);
    }
}
