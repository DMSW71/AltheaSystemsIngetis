# Tests du site

Les tests automatiques se lancent avec `categorie.html?tests` dans Live Server. Résultat obtenu : **10 / 10 réussis**.

| Vérification automatique | Résultat |
|---|---|
| Deux formats de prix | OK |
| Prioritaires en premier et épuisés à la fin (3 tests) | OK |
| Le tri ne modifie pas la liste de départ | OK |
| Tri par prix avec épuisés à la fin | OK |
| Valeur de tri inconnue refusée | OK |
| Recherche sans accent | OK |
| Prix maximum de 50 € et produits disponibles : 4 résultats | OK |

À vérifier dans le navigateur :

- ajouter un produit, modifier sa quantité, le supprimer et recharger la page ;
- ouvrir deux onglets et vérifier que le panier se met à jour ;
- chercher « oxy » et « stethoscope » ;
- vérifier le bouton d’achat désactivé pour le tensiomètre en rupture ;
- tester le menu et le carrousel au clavier, à 360 px ;
- vérifier le panier et les avis en mode sombre ;
- confirmer que le texte piégé dans les avis et les produits reste du texte.

Le texte de test `<script>alert(1)</script>` et le nom contenant `<img src=x onerror=alert(1)>` doivent rester affichés comme du texte. Le code des avis utilise `textContent`. Le test avec les avis est couvert par le test automatique ; aucun script ne doit déclencher d’alerte.

Pour le panier, le code de calcul additionne le prix multiplié par la quantité de chaque ligne. Quand un article déjà présent est ajouté une deuxième fois, sa quantité augmente au lieu de créer un doublon. Le test navigateur avec un point d’arrêt reste à faire.
