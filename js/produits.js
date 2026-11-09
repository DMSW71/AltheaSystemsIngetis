export const produits = [
  {
    id: 'tensiometre',
    nom: 'Tensiomètre électronique de bras OMRON M3 Comfort',
    prix: 59.90,
    stock: 0,
    prioritaire: true,
    categorie: 'Diagnostic',
    description: 'Le tensiomètre OMRON M3 Comfort mesure la tension artérielle avec un brassard au bras.',
    prixAffiche: '59,90 € TTC',
    images: ['tensiometre', 'tensiometre-ecran', 'tensiometre-brassard'],
    caracteristiques: [
      ['Tour de bras', '22 à 42 cm'],
      ['Mémoire', '2 utilisateurs, 60 mesures chacun'],
      ['Alimentation', '4 piles AA'],
      ['Poids', 'Environ 337 g sans piles']
    ]
  },
  {
    id: 'analyseur',
    nom: 'Analyseur hématologie 3-part',
    prix: 4990,
    stock: 5,
    prioritaire: true,
    categorie: 'Diagnostic',
    description: 'Un analyseur pour les examens de sang en laboratoire.',
    prixAffiche: '4 990 € HT',
    images: ['analyseur'],
    caracteristiques: [['Type', 'Analyseur hématologique'], ['Utilisation', 'Laboratoire'], ['État', 'Neuf'], ['Disponibilité', 'En stock']]
  },
  {
    id: 'chariot',
    nom: 'Chariot de soins 3 niveaux',
    prix: 590,
    stock: 5,
    prioritaire: false,
    categorie: 'Soins',
    description: 'Chariot à trois plateaux pour le matériel de soins.',
    prixAffiche: '590 € HT',
    images: ['chariot'],
    caracteristiques: [['Niveaux', '3 plateaux'], ['Utilisation', 'Soins médicaux'], ['État', 'Neuf'], ['Disponibilité', 'En stock']]
  },
  {
    id: 'microscope',
    nom: 'Microscope optique binoculaire',
    prix: 1290,
    stock: 5,
    prioritaire: false,
    categorie: 'Diagnostic',
    description: 'Microscope optique avec deux oculaires.',
    prixAffiche: '1 290 € HT',
    images: ['microscope'],
    caracteristiques: [['Type', 'Optique binoculaire'], ['Utilisation', 'Laboratoire'], ['État', 'Neuf'], ['Disponibilité', 'En stock']]
  },
  {
    id: 'cable-ecg',
    nom: 'Câble ECG 10 fils universel',
    prix: 49,
    stock: 0,
    prioritaire: false,
    categorie: 'Diagnostic',
    description: 'Câble ECG avec 10 fils.',
    prixAffiche: '49 € HT',
    images: ['cable-ecg'],
    caracteristiques: [['Type', 'Câble ECG'], ['Nombre de fils', '10'], ['Utilisation', 'Avec un appareil ECG compatible'], ['Disponibilité', 'En rupture de stock']]
  },
  {
    id: 'batterie-ecg',
    nom: 'Batterie ECG portable',
    prix: 89.90,
    stock: 5,
    prioritaire: false,
    categorie: 'Accessoires',
    description: 'Batterie pour un ECG portable.',
    prixAffiche: '89,90 € HT',
    images: ['batterie-ecg'],
    caracteristiques: [['Type', 'Batterie'], ['Appareil', 'ECG portable'], ['État', 'Neuf'], ['Disponibilité', 'En stock']]
  },
  {
    id: 'batterie-moniteur',
    nom: 'Batterie moniteur compatible',
    prix: 79.90,
    stock: 5,
    prioritaire: false,
    categorie: 'Accessoires',
    description: 'Batterie pour un moniteur compatible.',
    prixAffiche: '79,90 € HT',
    images: ['batterie-moniteur'],
    caracteristiques: [['Type', 'Batterie'], ['Appareil', 'Moniteur'], ['État', 'Neuf'], ['Disponibilité', 'En stock']]
  },
  {
    id: 'oxymetre',
    nom: 'Oxymètre de pouls',
    prix: 34.50,
    stock: 5,
    prioritaire: false,
    categorie: 'Diagnostic',
    description: 'Oxymètre de pouls compact avec écran numérique.',
    prixAffiche: '34,50 € TTC',
    images: ['oxymetre'],
    caracteristiques: [['Type', 'Oxymètre de pouls'], ['Affichage', 'Écran numérique'], ['Alimentation', 'Piles'], ['Disponibilité', 'En stock']]
  },
  {
    id: 'stethoscope',
    nom: 'Stéthoscope Campus',
    prix: 78,
    stock: 5,
    prioritaire: false,
    categorie: 'Diagnostic',
    description: 'Stéthoscope simple pour les examens courants.',
    prixAffiche: '78 € TTC',
    images: ['stethoscope'],
    caracteristiques: [['Type', 'Stéthoscope'], ['Longueur', '65 cm'], ['Couleur', 'Noir'], ['Disponibilité', 'En stock']]
  },
  {
    id: 'gants-piege',
    nom: 'Gants nitrile <img src="x" onerror="alert(1)">',
    prix: 14.90,
    stock: 0,
    prioritaire: false,
    categorie: 'Consommables',
    description: 'Produit de test pour vérifier que le nom reste affiché comme du texte.',
    prixAffiche: '14,90 € HT',
    images: ['gants-nitrile'],
    caracteristiques: [['Type', 'Gants nitrile'], ['Disponibilité', 'En rupture de stock']]
  },
  {
    id: 'thermometre',
    nom: 'Thermomètre médical digital',
    prix: 22.90,
    stock: 5,
    prioritaire: false,
    categorie: 'Diagnostic',
    description: 'Thermomètre médical numérique.',
    prixAffiche: '22,90 € TTC',
    images: ['thermometre'],
    caracteristiques: [['Type', 'Thermomètre numérique'], ['Affichage', 'Écran numérique'], ['Disponibilité', 'En stock']]
  },
  {
    id: 'compresses',
    nom: 'Compresses stériles',
    prix: 7.50,
    stock: 5,
    prioritaire: false,
    categorie: 'Consommables',
    description: 'Compresses stériles pour les soins.',
    prixAffiche: '7,50 € HT',
    images: ['compresses'],
    caracteristiques: [['Type', 'Compresses stériles'], ['Conditionnement', 'Paquet'], ['Disponibilité', 'En stock']]
  },
  {
    id: 'masques',
    nom: 'Masques chirurgicaux',
    prix: 6.90,
    stock: 5,
    prioritaire: false,
    categorie: 'Consommables',
    description: 'Masques chirurgicaux à usage unique.',
    prixAffiche: '6,90 € HT',
    images: ['masques'],
    caracteristiques: [['Type', 'Masque chirurgical'], ['Usage', 'À usage unique'], ['Disponibilité', 'En stock']]
  }
];

export function trouverProduit(id) {
  return produits.find((produit) => produit.id === id);
}
