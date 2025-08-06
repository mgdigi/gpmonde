export abstract class Produit{

    protected libelle : string;
    protected poids : number;
    protected typeProduit : string;



    constructor(libelle: string , poids : number, typeProduit: string){
       this.libelle = libelle;
       this.poids = poids;
       this.typeProduit = typeProduit    }

    public getLibelle(): string {
        return this.libelle;
    }

    public setLibelle(libelle: string): void {
        this.libelle = libelle;
    }

    public getPoids(): number {
        return this.poids;
    }

    public setPoids(poids: number): void {
        this.poids = poids;
    }

    abstract info(): void;

}