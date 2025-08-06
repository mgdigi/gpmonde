import { Materiel } from './Materiel.js';
export class Incassable extends Materiel {
    constructor(libelle, poids) {
        super(libelle, poids, "Incassable");
    }
}
