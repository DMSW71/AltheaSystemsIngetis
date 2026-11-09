# Althéa Systems — TP Jour 1, 2 et 3

Althéa Systems est une maquette de catalogue de matériel médical pour les professionnels de santé. On peut parcourir les catégories, chercher des produits, consulter leurs informations et essayer un panier.

## Ouvrir le site

Ouvrir le dossier dans Visual Studio Code puis lancer `index.html` avec Live Server. Cette méthode permet aussi de charger les avis depuis le fichier JSON.

## Pages

- `index.html` : accueil et carrousel.
- `catalogue.html` : catalogue complet.
- `categorie.html` : produits de diagnostic et filtres.
- `recherche.html` : recherche par nom, prix et disponibilité.
- `produit.html` : fiche, caractéristiques et avis.
- `panier.html` : panier de démonstration.
- `connexion.html` et `inscription.html` : formulaires de maquette.

## Responsive (Jour 2)

Le site s’adapte au téléphone, à la tablette et à l’ordinateur. La fiche produit contient un tableau qui défile sur petit écran, une galerie d’images et une version prévue pour l’impression. Les liens de langue sont affichés dans le menu ; les traductions ne font pas partie du TP.

Les captures disponibles sont dans `docs/captures`. Les vérifications visuelles aux trois largeurs et les scores Lighthouse restent à relever.

## JavaScript (Jour 3)

- `js/produits.js` contient les produits et leurs détails.
- `js/tri.js` trie le catalogue et garde les produits épuisés à la fin.
- `js/outils.js` formate les prix.
- `js/catalogue.js` crée les cartes produits.
- `js/recherche.js` applique les filtres de recherche.
- `js/panier.js` gère les articles et leur sauvegarde locale.
- `js/vue-panier.js` affiche le panier et met à jour les quantités.
- `js/icone-panier.js` met à jour le compteur du panier.
- `js/fiche.js` affiche la fiche et gère l’ajout au panier.
- `js/avis.js` charge et affiche les avis.
- `js/menu.js` et `js/carrousel.js` gèrent le menu et le carrousel.
- `js/tests.js` contient les tests simples ; `js/main.js` lance les fonctions des pages.

Les textes venant des données sont ajoutés avec `textContent`. Le panier ne garde que l’identifiant et la quantité des produits. Pour les tests, ouvrir `categorie.html?tests` avec Live Server et regarder la console.
