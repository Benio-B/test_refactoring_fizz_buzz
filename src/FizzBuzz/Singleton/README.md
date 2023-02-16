### Singleton Implementation

Lorsqu'on a un objet seul qui ne dépend d'aucun contexte (pas de dépendance vers d'autres classes).
Une seule instanciation suffit pour son utilisation.

Les singletons sont à utiliser avec parcimonie, en mettre de partout complique le code:

- Compliquer d'étendre une classe
- Compliquer de tester
- Compliquer d'ajouter des dépendances à d'autres classes

Ne doit avoir qu'une seule responsabilité tout au long de sa vie.
Ne pas dépendre d'autres choses (une connexion à une BD pourrait foutre la grouille avec les sessions)
