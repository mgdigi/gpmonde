import { Routiere } from './Model/Routiere.js';
import { Maritime } from './Model/Maritime.js';
import { Aerienne } from './Model/Aerienne.js';


import { Alimentaire } from './Model/Alimentaire.js';
import { Chimique } from './Model/Chimique.js';
import { Fragile } from './Model/Fragile.js';
import { Incassable } from './Model/Incassable.js';


const cargaisonRoutiere = new Routiere(100);
const cargaisonMaritime = new Maritime(200);
const cargaisonAerienne = new Aerienne(50);


const farine = new Alimentaire("Farine", 2.5);
const acide = new Chimique("Acide", 1.2,4);
const moteur = new Fragile("Moteur", 5);
const riz = new Alimentaire("Riz", 3);
const huile = new Alimentaire("Huile", 1);
const outil = new Incassable("Bois", 4);

                                                                                                    
const cargaisons = {
    routiere: cargaisonRoutiere,
    maritime: cargaisonMaritime,
    aerienne: cargaisonAerienne
};

const produitsCrees: (Alimentaire | Chimique | Fragile | Incassable)[] = [
    farine, acide, moteur, riz, huile, outil
];




try {
    cargaisonRoutiere.ajouterProduit(farine);
    cargaisonRoutiere.ajouterProduit(moteur);

    cargaisonMaritime.ajouterProduit(acide);
    cargaisonMaritime.ajouterProduit(outil);
    cargaisonMaritime.ajouterProduit(riz);

    cargaisonAerienne.ajouterProduit(farine);
    cargaisonAerienne.ajouterProduit(huile);
} catch (error) {
    console.error("Erreur d'ajout produit :", error);
}


function getProductIcon(produit: Alimentaire | Chimique | Fragile | Incassable): string {
    if (produit instanceof Alimentaire) return '<i class="fa-solid fa-bowl-food text-green-600"></i>';
    if (produit instanceof Chimique) return '<i class="fa-solid fa-flask text-red-600"></i>';
    if (produit instanceof Fragile) return '<i class="fa-solid fa-exclamation-triangle text-yellow-600"></i>';
    if (produit instanceof Incassable) return '<i class="fa-solid fa-hammer text-gray-600"></i>';
    return '<i class="fa-solid fa-box text-blue-600"></i>';
}



function updateUI(): void {
    Object.entries(cargaisons).forEach(([type, cargaison]) => {
        const countElement : HTMLElement = document.getElementById(`${type}-nombre`);
        if (countElement) {
            countElement.textContent = cargaison.nbProduit().toString();
        }
        
        const costElement : HTMLElement = document.getElementById(`${type}-frais`);
        if (costElement) {
            costElement.textContent = `${cargaison.sommeTotale()} F`;
        }
        
        const container = document.getElementById(`${type}-produits`) as HTMLDivElement;
        if (container) {
            container.innerHTML = '';

            const produits = cargaison.getProduits();
            
            produits.forEach((produit, index) => {
                const div = document.createElement('div');
                div.className = 'text-sm bg-gray-100 p-2 rounded flex justify-between items-center';
                div.innerHTML = `
                    <span class="flex items-center gap-2">
                        ${getProductIcon(produit)} 
                        ${produit.getLibelle()}
                    </span>
                  
                `;
                container.appendChild(div);
            });
        }
    });

    const productsList = document.getElementById('productsList') as HTMLDivElement;
    if (productsList) {
        productsList.innerHTML = '';
        
        produitsCrees.forEach(produit => {
            const div = document.createElement('div');
            div.className = 'text-sm bg-gray-100 p-2 rounded flex items-center gap-2';
            div.innerHTML = `${getProductIcon(produit)}   ${produit.getLibelle()} - ${produit.getPoids()}KG `;
            productsList.appendChild(div);
        });
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const productTypeSelect = document.getElementById('productType') as HTMLSelectElement;
    const dangerLevelDiv = document.getElementById('dangerLevelDiv') as HTMLDivElement;
    
    if (productTypeSelect && dangerLevelDiv) {
        productTypeSelect.addEventListener('change', function() {
            if (this.value === 'chimique') {
                dangerLevelDiv.classList.remove('hidden');
            } else {
                dangerLevelDiv.classList.add('hidden');
            }
        });
    }

    const productForm = document.getElementById('productForm') as HTMLFormElement;
    if (productForm) {
        productForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const typeSelect = document.getElementById('productType') as HTMLSelectElement;
            const libelleInput = document.getElementById('productName') as HTMLInputElement;
            const weightInput = document.getElementById('productWeight') as HTMLInputElement;
            const cargoTypeSelect = document.getElementById('cargoType') as HTMLSelectElement;
            const dangerLevelInput = document.getElementById('dangerLevel') as HTMLInputElement;
            
           

            const type = typeSelect.value;
            const libelle = libelleInput.value.trim();
            const poids = parseFloat(weightInput.value);
            const cargoType = cargoTypeSelect.value;
           

            let nouveauProduit: Alimentaire | Chimique | Fragile | Incassable;
            
            try {
                switch(type) {
                    case 'alimentaire':
                        nouveauProduit = new Alimentaire(libelle, poids);
                        break;
                    case 'chimique':
                        const danger = dangerLevelInput ? parseInt(dangerLevelInput.value) || 1 : 1;
                        nouveauProduit = new Chimique(libelle, poids, danger);
                        break;
                    case 'fragile':
                        nouveauProduit = new Fragile(libelle, poids);
                        break;
                    case 'incassable':
                        nouveauProduit = new Incassable(libelle, poids);
                        break;
                    default:
                        throw new Error('Type de produit invalide');
                }

                const cargaison = cargaisons[cargoType as keyof typeof cargaisons];
                if (cargaison) {
                    cargaison.ajouterProduit(nouveauProduit);
                    produitsCrees.push(nouveauProduit);
                    updateUI();
                    productForm.reset();
                } else {
                    throw new Error('Type de cargaison invalide');
                }
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
                console.error("Erreur d'ajout produit :", error);
            }
        });
    }


    updateUI();
    
  

    console.log(farine.info());
    console.log(acide.info());
    console.log(outil.info());
    console.log(moteur.info());
});



