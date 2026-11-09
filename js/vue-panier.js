import { panier, changerQuantite, supprimer, calculerTotal } from './panier.js';
import { trouverProduit } from './produits.js';
import { formaterPrix } from './outils.js';
import { mettreAJourIcone } from './icone-panier.js';

export function afficherPanier() {
  const liste = document.querySelector('#lignes-panier');
  const total = document.querySelector('#total-panier');
  const vide = document.querySelector('#panier-vide');
  if (!liste || !total || !vide) return;

  liste.replaceChildren();
  panier.forEach(({ id, quantite }) => {
    const produit = trouverProduit(id);
    if (!produit) return;

    const ligne = document.createElement('li');
    ligne.dataset.id = id;

    const nom = document.createElement('h2');
    nom.textContent = produit.nom;

    const prix = document.createElement('p');
    prix.textContent = 'Prix : ' + produit.prixAffiche;

    const label = document.createElement('label');
    const champ = document.createElement('input');
    champ.type = 'number';
    champ.id = 'quantite-' + id;
    champ.min = '1';
    champ.max = '99';
    champ.value = String(quantite);
    label.htmlFor = champ.id;
    label.textContent = 'Quantité';

    const sousTotal = document.createElement('p');
    sousTotal.textContent = 'Sous-total : ' + formaterPrix(produit.prix * quantite);

    const bouton = document.createElement('button');
    bouton.type = 'button';
    bouton.className = 'btn';
    bouton.dataset.supprimer = id;
    bouton.setAttribute('aria-label', 'Supprimer ' + produit.nom);
    bouton.textContent = 'Supprimer';

    ligne.append(nom, prix, label, champ, sousTotal, bouton);
    liste.append(ligne);
  });

  total.textContent = formaterPrix(calculerTotal());
  vide.hidden = panier.length > 0;
  mettreAJourIcone();
}

export function initialiserPanier() {
  const liste = document.querySelector('#lignes-panier');
  if (!liste) return;

  afficherPanier();

  liste.addEventListener('change', (event) => {
    const champ = event.target.closest('input[type="number"]');
    const ligne = champ && champ.closest('li');
    if (!ligne) return;

    changerQuantite(ligne.dataset.id, Number(champ.value));
    afficherPanier();
  });

  liste.addEventListener('click', (event) => {
    const bouton = event.target.closest('button[data-supprimer]');
    if (!bouton) return;

    supprimer(bouton.dataset.supprimer);
    afficherPanier();
    document.querySelector('#titre-panier').focus();
  });
}
