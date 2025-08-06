import {Produit} from './Produit.js';

export abstract class Cargaison{

    protected distance : number;
    protected produits : Produit[];
    protected typeCargaison : string;
    

    constructor(distance: number, typeCargaison : string, ){
        this.distance = distance;
        this.typeCargaison = typeCargaison;
        this.produits = [];

    }
    
      public getDistance(): number {
        return this.distance;
    }

    public setDistance(distance: number): void {
        this.distance = distance;
    }

    public getProduits(): Produit[] {
        return this.produits;
    }

    public  ajouterProduit(produit : Produit): void{
        if(this.produits.length > 10){
            throw new Error ("vous ne pouvez pas ajouter un autre produit")
        }
       this.produits.push(produit);

    };
    abstract calculerFrais(): number;
    abstract sommeTotale(): number;

    public  nbProduit(): number{
      return this.produits.length;
    };
}