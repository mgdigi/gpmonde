import { Routiere } from './Model/Routiere';
import { Maritime } from './Model/Maritime';
import { Aerienne } from './Model/Aerienne';
import { Alimentaire } from './Model/Alimentaire';
import { Chimique } from './Model/Chimique';
import { Fragile } from './Model/Fragile';
import { Incassable } from './Model/Incassable';
const cargaisonRoutiere = new Routiere(100);
const cargaisonMaritime = new Maritime(200);
const cargaisonAerienne = new Aerienne(50);
const farine = new Alimentaire("Farine", 2.5);
const acide = new Chimique("Acide", 1.2, 4);
const moteur = new Fragile("Moteur", 5);
const riz = new Alimentaire("Riz", 3);
const huile = new Alimentaire("Huile", 1);
const outil = new Incassable("Bois", 4);
try {
    cargaisonRoutiere.ajouterProduit(farine);
    cargaisonRoutiere.ajouterProduit(moteur);
    cargaisonMaritime.ajouterProduit(acide);
    cargaisonMaritime.ajouterProduit(outil);
    cargaisonMaritime.ajouterProduit(riz);
    cargaisonAerienne.ajouterProduit(farine);
    cargaisonAerienne.ajouterProduit(huile);
}
catch (error) {
    console.error("Erreur d'ajout produit :", error);
}
function afficherInfos(cargaison, nom) {
    console.log(`---- ${nom} ----`);
    console.log(`Nombre de produits : ${cargaison.nbProduit()}`);
    console.log(`Frais total : ${cargaison.sommeTotale()} F`);
    console.log('');
}
afficherInfos(cargaisonRoutiere, "Cargaison Routière");
afficherInfos(cargaisonMaritime, "Cargaison Maritime");
afficherInfos(cargaisonAerienne, "Cargaison Aérienne");
console.log(farine.info());
console.log(acide.info());
console.log(outil.info());
console.log(moteur.info());
