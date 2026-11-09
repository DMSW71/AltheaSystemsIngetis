import { produits } from './produits.js';
import { trierCatalogue, trierPar } from './tri.js';
import { formaterPrix } from './outils.js';
import { normaliser, filtrerProduits } from './recherche.js';

export function lancerTests() {
  const echantillon = [
    { id: 'epuise-prioritaire', prix: 2, stock: 0, prioritaire: true },
    { id: 'normal', prix: 3, stock: 4, prioritaire: false },
    { id: 'prioritaire', prix: 4, stock: 2, prioritaire: true }
  ];
  const copieAvant = echantillon.map((produit) => produit.id).join(',');
  const recommandes = trierCatalogue(echantillon);
  const tests = [
    ['prix 89,9', formaterPrix(89.9) === '89,90 €'],
    ['prix 24', formaterPrix(24) === '24,00 €'],
    ['épuisé à la fin', recommandes[recommandes.length - 1].id === 'epuise-prioritaire'],
    ['prioritaire en tête', recommandes[0].id === 'prioritaire'],
    ['prioritaire épuisé à la fin', recommandes[recommandes.length - 1].id === 'epuise-prioritaire'],
    ['le tableau original ne change pas', echantillon.map((produit) => produit.id).join(',') === copieAvant],
    ['prix trié avec épuisés à la fin', trierPar(echantillon, 'prix-croissant')[echantillon.length - 1].stock === 0],
    ['tri inconnu devient recommandé', trierPar(echantillon, 'inconnu').map((produit) => produit.id).join(',') === recommandes.map((produit) => produit.id).join(',')],
    ['recherche sans accent', normaliser(' StéThoscope ') === 'stethoscope'],
    ['prix maximum 50 et disponibles', filtrerProduits(produits, { prixMax: 50, dispo: true }).length === 4]
  ];

  let reussis = 0;
  tests.forEach(([nom, ok]) => {
    console.assert(ok, 'Échec : ' + nom);
    if (ok) reussis += 1;
  });
  console.log('Tests : ' + reussis + ' / ' + tests.length + ' réussis');
  return reussis === tests.length;
}
