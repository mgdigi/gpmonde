import { Produit } from './Produit';
export declare abstract class Cargaison {
    protected distance: number;
    protected produits: Produit[];
    protected typeCargaison: string;
    constructor(distance: number, typeCargaison: string);
    getDistance(): number;
    setDistance(distance: number): void;
    getProduits(): Produit[];
    ajouterProduit(produit: Produit): void;
    abstract calculerFrais(): number;
    abstract sommeTotale(): number;
    nbProduit(): number;
}
//# sourceMappingURL=Cargaison.d.ts.map