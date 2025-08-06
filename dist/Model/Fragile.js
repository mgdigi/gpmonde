import { Materiel } from './Materiel.js';
export class Fragile extends Materiel {
    constructor(libelle, poids) {
        super(libelle, poids, "Fragile");
    }
}
