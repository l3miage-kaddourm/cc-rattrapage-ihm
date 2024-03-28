[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14514387&assignment_repo_type=AssignmentRepo)
# CC1 rattrapage de CL&IHM 2023-2024 : Jeu de puissance 4

Dans cet examen, nous allons nous baser sur le jeu de puissance 4.

Le but du jeu est d'aligner une suite de 4 pions de même couleur sur une grille comptant 6 lignes et 7 colonnes. Chaque joueur dispose de 21 pions d'une couleur (par convention, en général jaune ou rouge). Tour à tour, les deux joueurs placent un pion dans la colonne de leur choix, le pion coulisse alors jusqu'à la position la plus basse possible dans ladite colonne à la suite de quoi c'est à l'adversaire de jouer. Le vainqueur est le joueur qui réalise le premier un alignement (horizontal, vertical ou diagonal) consécutif d'au moins quatre pions de sa couleur. Si, alors que toutes les cases de la grille de jeu sont remplies, aucun des deux joueurs n'a réalisé un tel alignement, la partie est déclarée nulle.

Les structures de données sont définies dans le fichier `src/app/data/data.ts`. Vous ne devez pas les modifier.

Notez bien qu'un plateau est modélisé comme 7 piles de pions. On peut ajouter un pion dans une pile si et seulement si elle n'est pas pleine (elle contient moins de 6 pions).

## A) Composant Board

Le composant Board est un composant pur. Il permet de représenter un plateau de jeu du puissance 4 ainsi que de demander à jouer des coups. Il faut en définir la vue et la vue-modèle (sans les imports de début de fichier, ni le décorateur @Component).

* **QA.1)** Paramétrez ce composant pour qu’il ait pour entrée obligatoire un plateau nommé data, de type BOARD.
* **QA.2)** Paramétrez ce composant pour qu’il puisse émettre un événement de type ColumnIndex via un attribut nommé play. Le nombre émis représentera la colonne dans laquelle le joueur veut poser un pion.
* **QA.3)** Ecrivez la vue associée, représentez la grille de jeu sous forme d’un tableau HTML dont chaque case contient une balise div.  Une balise div contenant un pion rouge devra avoir la classe CSS RED, celles contenant un pion jaune devront avoir la classe CSS YELLOW. **Attention**, il vous faudra transformer la structure de données représentant le plateau pour obtenir une structure de données plus simple à manipuler pour la vue (un tableau de tableau de `PLAYER | undefined`). (Indication : Aidez-vous des constantes `columns` et `lines` du fichier `src/app/data/data.ts`).
* **QA.4)** Faites en sorte que le composant lève un événement play adéquat lorsque l’utilisateur clique sur une colonne.
* **QA.5)** Lorsque le curseur est au-dessus d’une colonne de la grille de jeu sur laquelle on peut poser un pion (et seulement si on peut y poser un pion), ajoutez la classe CSS hilight à cette colonne (aux éléments td de cette colonne). 
INDICATION 1 : utilisez un signal public selectedColumn de type undefined | ColumnIndex. Fixer la valeur de ce signal via les événements pointerenter et pointerleave qui sont déclenchés sur une balise quand un pointeur y entre ou en sort.
INDICATION 2 : lorsque le pointeur sort d’un élément pour aller dans un autre, le navigateur lève d’abord un événement pointerleave sur l’élément quitté PUIS lève un événement pointerenter sur l’élément dans lequel le pointeur entre.

## B) Composant racine

Vous devez définir la vue et la vue-modèle. Le service de jeu est implémenté dans le service GameService.

* **QB.1)** Affichez l’ensemble des plateaux des jeux en cours.
* **QB.2)** Ajoutez un bouton pour permettre à l’utilisateur d’ajouter une nouvelle partie.
* **QB.3)** Faites appel au service pour jouer les coups demandés via les composants board.
* **QB.4)** Définissez un signal indiquant qui est le gagnant pour chaque partie, s’il y en a un. Utilisez ce signal pour indiquer qui est le gagnant pour chaque partie.
  * Définissez le type de donnée de ce signal
  * Définissez le signal lui-même, appuyez vous sur la fonction `hasNtokensAligned` du fichier `src/app/data/data.ts`.
  