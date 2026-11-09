import { trouverProduit } from './produits.js';

export const CLE = 'althea-panier';

function charger() {
  try {
    if (typeof localStorage === 'undefined') return [];
    const lignes = JSON.parse(localStorage.getItem(CLE) || '[]');
    if (!Array.isArray(lignes)) return [];

    return lignes
      .filter((ligne) =>
        ligne
        && typeof ligne.id === 'string'
        && trouverProduit(ligne.id)
        && Number.isInteger(ligne.quantite)
        && ligne.quantite >= 1
        && ligne.quantite <= 99
      )
      .map(({ id, quantite }) => ({ id, quantite }));
  } catch {
    return [];
  }
}

export const panier = charger();

export function sauvegarder() {
  try {
    if (typeof localStorage === 'undefined') return;
    const lignes = panier.map(({ id, quantite }) => ({ id, quantite }));
    localStorage.setItem(CLE, JSON.stringify(lignes));
  } catch {
    // Le site reste utilisable si le stockage est indisponible.
  }
}

export function ajouter(id) {
  const produit = trouverProduit(id);
  if (!produit || produit.stock === 0) return;

  const ligne = panier.find((article) => article.id === id);
  if (ligne) {
    if (ligne.quantite < 99) ligne.quantite += 1;
  } else {
    panier.push({ id, quantite: 1 });
  }
  sauvegarder();
}

export function changerQuantite(id, quantite) {
  if (quantite <= 0) {
    supprimer(id);
    return;
  }
  if (!Number.isInteger(quantite) || quantite > 99) return;

  const ligne = panier.find((article) => article.id === id);
  if (!ligne) return;
  ligne.quantite = quantite;
  sauvegarder();
}

export function supprimer(id) {
  const index = panier.findIndex((article) => article.id === id);
  if (index < 0) return;
  panier.splice(index, 1);
  sauvegarder();
}

export const compterArticles = () =>
  panier.reduce((total, ligne) => total + ligne.quantite, 0);

export const calculerTotal = (lignes = panier) =>
  lignes.reduce((total, ligne) => {
    const produit = trouverProduit(ligne.id);
    return produit ? total + produit.prix * ligne.quantite : total;
  }, 0);

export function recharger() {
  panier.splice(0, panier.length, ...charger());
}
