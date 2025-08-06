export class Produit {
    libelle;
    poids;
    typeProduit;
    constructor(libelle, poids, typeProduit) {
        this.libelle = libelle;
        this.poids = poids;
        this.typeProduit = typeProduit;
    }
    getLibelle() {
        return this.libelle;
    }
    setLibelle(libelle) {
        this.libelle = libelle;
    }
    getPoids() {
        return this.poids;
    }
    setPoids(poids) {
        this.poids = poids;
    }
}
