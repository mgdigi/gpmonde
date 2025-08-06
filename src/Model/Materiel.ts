import {Produit} from './Produit.js'

export abstract class Materiel extends Produit{
     
    protected  type : string ;

    constructor(libelle: string, poids: number,  type: string){
        super(libelle, poids, "Materiel");
        this.type = type;
    }

    public info(): void {
        console.log(`Produit Materiel : ${this.libelle}, Poids : ${this.poids}kg, Type : ${this.typeProduit}`);

    }
    
}