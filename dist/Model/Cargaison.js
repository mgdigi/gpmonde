export class Cargaison {
    distance;
    produits;
    typeCargaison;
    constructor(distance, typeCargaison) {
        this.distance = distance;
        this.typeCargaison = typeCargaison;
        this.produits = [];
    }
    getDistance() {
        return this.distance;
    }
    setDistance(distance) {
        this.distance = distance;
    }
    getProduits() {
        return this.produits;
    }
    ajouterProduit(produit) {
        if (this.produits.length > 10) {
            throw new Error("vous ne pouvez pas ajouter un autre produit");
        }
        this.produits.push(produit);
    }
    ;
    nbProduit() {
        return this.produits.length;
    }
    ;
}
