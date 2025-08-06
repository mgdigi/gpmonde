import { Produit } from './Produit';
export declare abstract class Materiel extends Produit {
    protected type: string;
    constructor(libelle: string, poids: number, type: string);
    info(): void;
}
//# sourceMappingURL=Materiel.d.ts.map