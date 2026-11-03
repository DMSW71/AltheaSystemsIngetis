const boutonMenu = document.querySelector('.menu-bouton');
const menu = document.querySelector('#menu-principal');

if (boutonMenu && menu) {
  boutonMenu.addEventListener('click', () => {
    const estOuvert = boutonMenu.getAttribute('aria-expanded') === 'true';
    boutonMenu.setAttribute('aria-expanded', String(!estOuvert));
    menu.classList.toggle('menu--ouvert', !estOuvert);
  });
}

const produits = {
  tensiometre: {
    nom: 'Tensiomètre électronique de bras OMRON M3 Comfort',
    categorie: 'Diagnostic',
    description: 'Le tensiomètre OMRON M3 Comfort prend la tension avec un brassard au bras.',
    prix: '59,90 € TTC',
    valeur: '59.90',
    stock: false,
    images: ['tensiometre', 'tensiometre-ecran', 'tensiometre-brassard'],
    caracteristiques: [
      ['Tour de bras', '22 à 42 cm'],
      ['Mémoire', '2 utilisateurs, 60 mesures chacun'],
      ['Alimentation', '4 piles AA'],
      ['Poids', 'Environ 337 g sans piles']
    ]
  },
  analyseur: {
    nom: 'Analyseur hématologie 3-part',
    categorie: 'Diagnostic',
    description: 'Un analyseur pour les examens de sang en laboratoire.',
    prix: '4 990 € HT',
    valeur: '4990',
    stock: true,
    images: ['analyseur'],
    caracteristiques: [
      ['Type', 'Analyseur hématologique'],
      ['Utilisation', 'Laboratoire'],
      ['État', 'Neuf'],
      ['Disponibilité', 'En stock']
    ]
  },
  chariot: {
    nom: 'Chariot de soins 3 niveaux',
    categorie: 'Soins',
    description: 'Chariot à trois plateaux pour le matériel de soins.',
    prix: '590 € HT',
    valeur: '590',
    stock: true,
    images: ['chariot'],
    caracteristiques: [
      ['Niveaux', '3 plateaux'],
      ['Utilisation', 'Soins médicaux'],
      ['État', 'Neuf'],
      ['Disponibilité', 'En stock']
    ]
  },
  microscope: {
    nom: 'Microscope optique binoculaire',
    categorie: 'Diagnostic',
    description: 'Microscope optique avec deux oculaires.',
    prix: '1 290 € HT',
    valeur: '1290',
    stock: true,
    images: ['microscope'],
    caracteristiques: [
      ['Type', 'Optique binoculaire'],
      ['Utilisation', 'Laboratoire'],
      ['État', 'Neuf'],
      ['Disponibilité', 'En stock']
    ]
  },
  'cable-ecg': {
    nom: 'Câble ECG 10 fils universel',
    categorie: 'Diagnostic',
    description: 'Câble ECG avec 10 fils.',
    prix: '49 € HT',
    valeur: '49',
    stock: false,
    images: ['cable-ecg'],
    caracteristiques: [
      ['Type', 'Câble ECG'],
      ['Nombre de fils', '10'],
      ['Utilisation', 'Avec un appareil ECG compatible'],
      ['Disponibilité', 'En rupture de stock']
    ]
  },
  'batterie-ecg': {
    nom: 'Batterie ECG portable',
    categorie: 'Accessoires',
    description: 'Batterie pour un ECG portable.',
    prix: '89,90 €',
    valeur: '89.90',
    stock: true,
    images: ['batterie-ecg'],
    caracteristiques: [
      ['Type', 'Batterie'],
      ['Appareil', 'ECG portable'],
      ['État', 'Neuf'],
      ['Disponibilité', 'En stock']
    ]
  },
  'batterie-moniteur': {
    nom: 'Batterie moniteur compatible',
    categorie: 'Accessoires',
    description: 'Batterie pour un moniteur compatible.',
    prix: '79,90 €',
    valeur: '79.90',
    stock: true,
    images: ['batterie-moniteur'],
    caracteristiques: [
      ['Type', 'Batterie'],
      ['Appareil', 'Moniteur'],
      ['État', 'Neuf'],
      ['Disponibilité', 'En stock']
    ]
  }
};

const fiche = document.querySelector('.fiche');
if (fiche) {
  const id = new URLSearchParams(location.search).get('produit') || 'tensiometre';
  const produit = produits[id] || produits.tensiometre;

  document.title = `${produit.nom} - Althéa Systems`;
  document.querySelector('#nom-produit').textContent = produit.nom;
  document.querySelector('#produit-fil').textContent = produit.nom;
  document.querySelector('#produit-fil').href = `produit.html?produit=${id}`;
  document.querySelector('#categorie-fil').textContent = produit.categorie;
  document.querySelector('#description-produit').textContent = produit.description;

  const prix = document.querySelector('#prix-produit');
  prix.textContent = produit.prix;
  prix.value = produit.valeur;

  const stock = document.querySelector('#etat-stock');
  stock.textContent = produit.stock
    ? 'Disponibilité : en stock.'
    : 'Disponibilité : en rupture de stock.';
  stock.classList.toggle('stock-rupture', !produit.stock);

  document.querySelector('#quantite').disabled = !produit.stock;
  const boutonAchat = document.querySelector('.achat button');
  boutonAchat.disabled = !produit.stock;
  boutonAchat.textContent = produit.stock ? 'Ajouter au panier' : 'Indisponible';

  document.querySelectorAll('#galerie-produit li').forEach((li, index) => {
    const image = li.querySelector('img');
    if (!produit.images[index]) {
      li.hidden = true;
      return;
    }

    li.hidden = false;
    image.src = `img/${produit.images[index]}.svg`;
    image.srcset = `img/${produit.images[index]}-400.svg 400w, img/${produit.images[index]}-800.svg 800w`;
    image.sizes = '(min-width:64rem) 50vw, 100vw';
    image.alt = `${produit.nom}, vue ${index + 1}`;
  });

  const listeCaracteristiques = document.querySelector('#liste-caracteristiques');
  listeCaracteristiques.textContent = '';
  produit.caracteristiques.forEach(([nom, valeur]) => {
    const terme = document.createElement('dt');
    const definition = document.createElement('dd');
    terme.textContent = nom;
    definition.textContent = valeur;
    listeCaracteristiques.append(terme, definition);
  });
}

const motDePasse = document.querySelector('#nouveau-mdp');
const confirmation = document.querySelector('#confirmation');
if (motDePasse && confirmation) {
  const verifierMotDePasse = () => {
    const message = motDePasse.value === confirmation.value
      ? ''
      : 'Les mots de passe doivent être identiques.';
    confirmation.setCustomValidity(message);
  };

  motDePasse.addEventListener('input', verifierMotDePasse);
  confirmation.addEventListener('input', verifierMotDePasse);
}