import { trouverProduit } from './produits.js';
import { ajouter } from './panier.js';
import { mettreAJourIcone } from './icone-panier.js';

export function initialiserFiche() {
  const fiche = document.querySelector('.fiche');
  if (!fiche) return;

  const idUrl = new URLSearchParams(location.search).get('produit');
  const produit = trouverProduit(idUrl || fiche.dataset.id) || trouverProduit('tensiometre');
  if (!produit) return;

  fiche.dataset.id = produit.id;
  document.title = produit.nom + ' - Althéa Systems';
  document.querySelector('#nom-produit').textContent = produit.nom;
  document.querySelector('#produit-fil').textContent = produit.nom;
  document.querySelector('#produit-fil').href = 'produit.html?produit=' + produit.id;
  document.querySelector('#categorie-fil').textContent = produit.categorie;
  document.querySelector('#description-produit').textContent = produit.description;

  const prix = document.querySelector('#prix-produit');
  prix.textContent = produit.prixAffiche;
  prix.value = String(produit.prix);

  const enStock = produit.stock > 0;
  const etatStock = document.querySelector('#etat-stock');
  etatStock.textContent = enStock
    ? 'Disponibilité : en stock.'
    : 'Disponibilité : en rupture de stock.';
  etatStock.classList.toggle('stock-rupture', !enStock);

  const champ = document.querySelector('#quantite');
  const bouton = document.querySelector('.achat button');
  champ.disabled = !enStock;
  bouton.disabled = !enStock;
  bouton.textContent = enStock ? 'Ajouter au panier' : 'En rupture de stock';

  document.querySelectorAll('#galerie-produit li').forEach((li, index) => {
    const image = li.querySelector('img');
    const nomImage = produit.images[index];
    if (!nomImage) {
      li.hidden = true;
      return;
    }

    li.hidden = false;
    image.src = 'img/' + nomImage + '.svg';
    image.srcset = 'img/' + nomImage + '.svg 400w, img/' + nomImage + '.svg 800w';
    image.sizes = '(min-width: 64rem) 50vw, 100vw';
    image.alt = produit.nom + ', vue ' + (index + 1);
  });

  const listeCaracteristiques = document.querySelector('#liste-caracteristiques');
  listeCaracteristiques.replaceChildren();
  produit.caracteristiques.forEach(([nom, valeur]) => {
    const terme = document.createElement('dt');
    const definition = document.createElement('dd');
    terme.textContent = nom;
    definition.textContent = valeur;
    listeCaracteristiques.append(terme, definition);
  });

  const formulaire = document.querySelector('.achat');
  const message = document.querySelector('.message-achat');
  formulaire.addEventListener('submit', (event) => {
    event.preventDefault();

    const quantite = Number(champ.value);
    if (!Number.isInteger(quantite) || quantite < 1 || quantite > 10) {
      message.textContent = 'Entre 1 et 10 exemplaires.';
      champ.focus();
      return;
    }

    if (!enStock) {
      message.textContent = 'Ce produit est en rupture de stock.';
      return;
    }

    for (let i = 0; i < quantite; i++) ajouter(produit.id);
    mettreAJourIcone();
    message.textContent = quantite + ' exemplaire' + (quantite > 1 ? 's' : '')
      + ' ajouté' + (quantite > 1 ? 's' : '') + ' au panier.';
  });

  mettreAJourIcone();
}
