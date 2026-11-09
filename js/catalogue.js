import { formaterPrix } from './outils.js';

export function creerCarte({ id, nom, prix, prixAffiche, stock, images }) {
  const ligne = document.createElement('li');
  const article = document.createElement('article');
  article.className = 'produit';

  const image = document.createElement('img');
  image.src = 'img/' + images[0] + '.svg';
  image.alt = 'Illustration : ' + nom;
  image.width = 400;
  image.height = 300;
  image.loading = 'lazy';

  const titre = document.createElement('h3');
  const lien = document.createElement('a');
  lien.href = 'produit.html?produit=' + id;
  lien.textContent = nom;
  titre.append(lien);

  const prixElement = document.createElement('p');
  prixElement.className = 'prix';
  prixElement.textContent = prixAffiche || formaterPrix(prix);

  const stockElement = document.createElement('p');
  stockElement.className = stock === 0 ? 'stock stock-rupture' : 'stock';
  stockElement.textContent = stock === 0 ? 'En rupture de stock' : 'En stock';

  const bouton = document.createElement('button');
  bouton.type = 'button';
  bouton.className = 'btn';
  bouton.dataset.id = id;
  bouton.disabled = stock === 0;
  bouton.textContent = stock === 0 ? 'Indisponible' : 'Ajouter au panier';

  article.append(image, titre, prixElement, stockElement, bouton);
  ligne.append(article);
  return ligne;
}

export function afficherCatalogue(liste, produits) {
  if (!liste) return;
  liste.replaceChildren();
  produits.forEach((produit) => liste.append(creerCarte(produit)));
}
