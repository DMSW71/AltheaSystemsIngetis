import { compterArticles } from './panier.js';

export function mettreAJourIcone() {
  const nombre = compterArticles();
  document.querySelectorAll('.panier').forEach((lien) => {
    lien.classList.toggle('a-des-articles', nombre > 0);
    const compteur = lien.querySelector('.visuellement-cache');
    if (compteur) {
      compteur.textContent = '(' + nombre + ' article' + (nombre > 1 ? 's' : '') + ')';
    }
  });
}
