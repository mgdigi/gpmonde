import { Cargaison } from "./Cargaison.js";
export class Routiere extends Cargaison {
    constructor(distance) {
        super(distance, "Routiere");
    }
    calculerFraisProduit(produit) {
        const poids = produit.getPoids();
        const type = produit.constructor.name.toLowerCase();
        switch (type) {
            case 'alimentaire':
                return 100 * poids * this.distance;
            case 'materiel':
                return 200 * poids * this.distance;
            case 'chimique':
                throw new Error("Les produits chimiques ne sont pas transportés par route.");
            default:
                return 0;
        }
    }
    calculerFrais() {
        return this.produits.reduce((total, produit) => total + this.calculerFraisProduit(produit), 0);
    }
    sommeTotale() {
        return this.calculerFrais();
    }
}
