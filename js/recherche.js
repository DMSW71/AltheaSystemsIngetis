import { produits } from './produits.js';
import { lireTri, trierPar } from './tri.js';
import { afficherCatalogue } from './catalogue.js';

export const normaliser = (texte) =>
  String(texte).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

export const lireNombre = (texte, parDefaut) => {
  if (!texte) return parDefaut;
  const nombre = Number(texte);
  return Number.isFinite(nombre) && nombre >= 0 ? nombre : parDefaut;
};

export const filtrerProduits = (
  liste,
  { mot = '', prixMin = 0, prixMax = Infinity, dispo = false } = {}
) => liste.filter((produit) =>
  normaliser(produit.nom).includes(normaliser(mot))
  && produit.prix >= prixMin
  && produit.prix <= prixMax
  && (!dispo || produit.stock > 0)
);

export function initialiserRecherche() {
  const liste = document.querySelector('#resultats-produits');
  if (!liste) return;

  const params = new URLSearchParams(location.search);
  const mot = params.get('q') ?? params.get('titre') ?? '';
  const prixMin = lireNombre(params.get('prixMin'), 0);
  const prixMax = lireNombre(params.get('prixMax'), Infinity);
  const dispo = params.get('disponible') === 'oui';
  const tri = lireTri(params.get('tri'));
  const resultat = trierPar(
    filtrerProduits(produits, { mot, prixMin, prixMax, dispo }),
    tri
  );

  const titre = document.querySelector('#titre-resultats');
  titre.textContent = mot
    ? 'Résultats pour « ' + mot + ' » : ' + resultat.length + ' produits'
    : 'Résultats : ' + resultat.length + ' produits';

  afficherCatalogue(liste, resultat);
  document.querySelector('#aucun-resultat').hidden = resultat.length > 0;

  const pagination = document.querySelector('.resultats .pagination');
  if (pagination) pagination.hidden = true;

  const champEntete = document.querySelector('#q');
  if (champEntete) champEntete.value = mot;

  const champTitre = document.querySelector('#titre');
  if (champTitre) champTitre.value = mot;

  const min = document.querySelector('#prixMin');
  if (min) min.value = params.has('prixMin') && prixMin !== 0 ? String(prixMin) : '';

  const max = document.querySelector('#prixMax');
  if (max) max.value = Number.isFinite(prixMax) ? String(prixMax) : '';

  const caseDispo = document.querySelector('#disponible');
  if (caseDispo) caseDispo.checked = dispo;

  const choixTri = document.querySelector('#tri');
  if (choixTri) choixTri.value = tri;
}
