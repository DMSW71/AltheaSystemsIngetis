# Sécurité — maquette Jour 2

| Protection | Mise en place | Limite |
|---|---|---|
| CSP | Ressources locales, pas de scripts/styles inline, objets interdits, formulaires limités au site. | À envoyer aussi par le serveur en production. |
| Referer | `strict-origin-when-cross-origin`. | Réglage de démonstration. |
| Formulaires | POST, validations HTML et aides associées. | Aucun serveur ne reçoit ni ne vérifie les données. |
| Liens externes | HTTPS, `noopener noreferrer`, nouvel onglet annoncé. | Vérifier les domaines avant publication. |
| Dépôt | `.gitignore` exclut secrets et fichiers locaux. | Ne pas ajouter de secret au projet. |
