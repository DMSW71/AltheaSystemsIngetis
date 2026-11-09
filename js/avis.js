export async function chargerAvis() {
  const fiche = document.querySelector('.fiche');
  const etat = document.querySelector('#etat-avis');
  const liste = document.querySelector('#liste-avis');
  if (!fiche || !etat || !liste) return;

  try {
    const reponse = await fetch('data/avis.json');
    if (!reponse.ok) throw new Error(reponse.status);

    const donnees = await reponse.json();
    if (!Array.isArray(donnees)) throw new Error('Le fichier des avis est invalide.');

    const avis = donnees.filter((element) =>
      element.produit === fiche.dataset.id
      && Number.isInteger(element.note)
      && element.note >= 1
      && element.note <= 5
    );

    liste.replaceChildren();
    avis.forEach((element) => {
      const ligne = document.createElement('li');
      const auteur = document.createElement('strong');
      const etoiles = document.createElement('span');
      const noteAccessible = document.createElement('span');
      const texte = document.createElement('p');

      auteur.textContent = String(element.auteur ?? '');
      etoiles.setAttribute('aria-hidden', 'true');
      etoiles.textContent = '★'.repeat(element.note);
      noteAccessible.className = 'visuellement-cache';
      noteAccessible.textContent = element.note + ' sur 5';
      texte.textContent = String(element.texte ?? '');

      ligne.append(auteur, ' ', etoiles, noteAccessible, texte);
      liste.append(ligne);
    });

    if (avis.length === 0) {
      etat.textContent = 'Aucun avis pour le moment.';
      return;
    }

    const total = avis.reduce((somme, element) => somme + element.note, 0);
    const moyenne = (total / avis.length).toFixed(1).replace('.', ',');
    etat.textContent = avis.length + ' avis · note moyenne : ' + moyenne + ' sur 5.';
  } catch (erreur) {
    console.error(erreur);
    liste.replaceChildren();
    etat.textContent = 'Les avis ne sont pas disponibles pour le moment.';
  }
}
