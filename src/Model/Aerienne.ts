import {Cargaison} from './Cargaison.js';
import {Produit} from './Produit.js';

export class Aerienne extends Cargaison{
    
    constructor(distance: number){
        super(distance, "Aerienne");
    }
    
       private calculerFraisProduit(produit: Produit): number{
        const poids = produit.getPoids();
        const type = produit.constructor.name.toLowerCase(); 

        switch (type) {
            case 'alimentaire':
                return 300 * poids * this.distance;
            case 'materiel':
                return 1000 * poids;
            case 'chimique':
                throw new Error("Les produits chimiques ne sont pas transportés par avion.");
            default:
                throw new Error("Type de produit non reconnu.");
        }
    }

    public calculerFrais(): number {
        return this.produits.reduce((total, produit) => total + this.calculerFraisProduit(produit), 0);
    }

    public sommeTotale(): number {
        let total = this.calculerFrais();

        for (const produit of this.produits) {
            if (produit.constructor.name.toLowerCase() === "chimique") {
                total += 10000;
            } else if (produit.constructor.name.toLowerCase() === "alimentaire") {
                total += 0; 
            }
        }

        return total;
    }
    
    
    public fraisTransport(produit: Produit): number{
        const poids : number = produit.getPoids();
        const typeProduit : string = produit.constructor.name.toLowerCase();

        switch(typeProduit){
            case "alimentaire":
                return 300 * poids * this.distance;
            case "materiel":
                return 1000 * poids ;
            case "chimique": 
               throw new Error("les produits chimique ne sont pas exporte par voie aerienne")
            default :
              throw new Error ('type  de produit  non reconnu ')
                 
        }
    }
        
    
}