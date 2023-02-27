### Mediator Implementation

Utile dans mon cas, cela permet de décentraliser la logique au sein d'un même endroit -> le mediator.

Il faut gérer pas mal d'event pour arriver à une certaine logique. Les tests peuvent être complexe (seulement
unitairement de chaque component, et un test global mais pas de test unitaire du Mediator)

Besoin de beaucoup de log pour comprendre chaque event, le mediator a appelé quoi et quand. Un mauvais return peut
foutre la grouille rapidement dans les events
