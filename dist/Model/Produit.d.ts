export declare abstract class Produit {
    protected libelle: string;
    protected poids: number;
    protected typeProduit: string;
    constructor(libelle: string, poids: number, typeProduit: string);
    getLibelle(): string;
    setLibelle(libelle: string): void;
    getPoids(): number;
    setPoids(poids: number): void;
    abstract info(): void;
}
//# sourceMappingURL=Produit.d.ts.map