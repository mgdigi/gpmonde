import {Cargaison} from "./Cargaison.js";
import {Produit} from './Produit.js';
import {Chimique} from './Chimique.js';

export class Maritime extends Cargaison{
    
    constructor(distance: number){
        super(distance, "Maritime");
    }

    
     private calculerFraisProduit(produit: Produit): number {
        const poids = produit.getPoids();
        const type = produit.constructor.name.toLowerCase();

        switch (type) {
            case 'alimentaire':
                return 90 * poids * this.distance;
            case 'chimique':
                if (produit instanceof Chimique) {
                    return 500 * poids * produit.getDegre();
                }
                return 0;
            case 'materiel':
                return 400 * poids * this.distance;
            default:
                return 0;
        }
    }

    public calculerFrais(): number {
        return this.produits.reduce((total, produit) => total + this.calculerFraisProduit(produit), 0);
    }

    public sommeTotale(): number {
        
        let total = this.calculerFrais();
        for (const produit of this.produits) {
            if (produit.constructor.name.toLowerCase() === "alimentaire") {
                total += 5000; 
            } else if (produit.constructor.name.toLowerCase() === "chimique") {
                total += 10000; 
            }
        }
        return total;

    }




}