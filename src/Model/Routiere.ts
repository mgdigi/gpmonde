import {Cargaison} from "./Cargaison.js";
import {Produit} from './Produit.js';

export class Routiere extends Cargaison{
    
    constructor(distance: number){
        super(distance, "Routiere");
    }
    
     private calculerFraisProduit(produit: Produit): number {
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

    public calculerFrais(): number {
        return this.produits.reduce((total, produit) => total + this.calculerFraisProduit(produit), 0);
    }

    public sommeTotale(): number {
        return this.calculerFrais(); 
    }
    
}