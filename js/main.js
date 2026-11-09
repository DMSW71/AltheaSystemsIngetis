import { produits } from './produits.js';
import { lireTri, trierPar } from './tri.js';
import { afficherCatalogue } from './catalogue.js';
import { initialiserMenu } from './menu.js';
import { initialiserCarrousel } from './carrousel.js';
import { initialiserRecherche } from './recherche.js';
import { initialiserFiche } from './fiche.js';
import { chargerAvis } from './avis.js';
import { panier, ajouter, CLE, recharger } from './panier.js';
import { mettreAJourIcone } from './icone-panier.js';
import { initialiserPanier, afficherPanier } from './vue-panier.js';
import { lancerTests } from './tests.js';

initialiserMenu();
initialiserCarrousel();

const listeCategorie = document.querySelector('#liste-produits');
const listeCatalogue = document.querySelector('#liste-catalogue');
if (listeCatalogue) {
  const choix = new URLSearchParams(location.search).get('tri');
  afficherCatalogue(listeCatalogue, trierPar(produits, lireTri(choix)));
}
if (listeCategorie) {
  const caseDispo = document.querySelector('#dispo-seulement');
  const nombreProduits = document.querySelector('#nb-produits');
  const choixTri = document.querySelector('#choix-tri');
  const params = new URLSearchParams(location.search);
  let triCourant = lireTri(params.get('tri'));
  if (choixTri) choixTri.value = triCourant;

  const diagnostic = produits.filter((produit) =>
    produit.categorie === 'Diagnostic'
  );

  const rafraichir = () => {
    let visibles = diagnostic;
    if (caseDispo && caseDispo.checked) {
      visibles = diagnostic.filter((produit) => produit.stock > 0);
    }
    const tries = trierPar(visibles, triCourant);
    afficherCatalogue(listeCategorie, tries);
    if (nombreProduits) {
      nombreProduits.textContent = tries.length + ' produits';
    }
  };

  if (caseDispo) caseDispo.addEventListener('change', rafraichir);
  if (choixTri) {
    choixTri.addEventListener('change', () => {
      triCourant = lireTri(choixTri.value);
      choixTri.value = triCourant;
      const nouvelleAdresse = new URLSearchParams(location.search);
      nouvelleAdresse.set('tri', triCourant);
      history.replaceState(null, '', '?' + nouvelleAdresse.toString());
      rafraichir();
    });
  }
  rafraichir();
}

initialiserRecherche();
initialiserFiche();
chargerAvis();

const params = new URLSearchParams(location.search);
if (document.querySelector('#lignes-panier') && params.has('tests') && panier.length === 0) {
  ajouter('analyseur');
  ajouter('oxymetre');
}
initialiserPanier();

document.querySelectorAll('#liste-produits, #liste-catalogue, #resultats-produits')
  .forEach((liste) => {
    liste.addEventListener('click', (event) => {
      const bouton = event.target.closest('button[data-id]');
      if (!bouton || bouton.disabled) return;

      ajouter(bouton.dataset.id);
      mettreAJourIcone();
      const produit = produits.find((element) => element.id === bouton.dataset.id);
      const message = document.querySelector('#message-catalogue')
        || document.querySelector('#message-recherche');
      if (message && produit) message.textContent = produit.nom + ' ajouté au panier.';
    });
  });

mettreAJourIcone();

window.addEventListener('storage', (event) => {
  if (event.key !== CLE) return;
  recharger();
  mettreAJourIcone();
  if (document.querySelector('#lignes-panier')) afficherPanier();
});

const mdp = document.querySelector('#nouveau-mdp');
const confirmation = document.querySelector('#confirmation');
if (mdp && confirmation) {
  const verifierMotsDePasse = () => {
    confirmation.setCustomValidity(
      mdp.value === confirmation.value ? '' : 'Les mots de passe doivent être identiques.'
    );
  };
  mdp.addEventListener('input', verifierMotsDePasse);
  confirmation.addEventListener('input', verifierMotsDePasse);
}

if (params.has('tests')) lancerTests();
