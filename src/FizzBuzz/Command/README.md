### Command Implementation

Très compliqué à mettre en place dans mon cas. Il n'y a que des classes de calcul avec un degré de niveau.
Pour le design Command, il est important qu'un systeme ne fasse qu'une chose à la fois (on clique sur un button, il se
passe quelque chose sans que le bouton se soucie de ce qu'il se passe)
Le syteme d'historique est très interessant mais dans mon cas cela est totalement inutile.

Cela permet d'abastraire le calcul derriere une commande. Donc si notre calcul change, on a juste à ajouter une nouvelle
classe.

Utile quand on a des traitements bien disjoints des uns et des autres. Avec une possibilité d'undo facilement.
L'historique est cool mais il faut que le systeme de command soit totalement seul
