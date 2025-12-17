🚀 Rocket : Mission JS-01
Ce projet est une application web interactive simulant le décollage d'une fusée. L'objectif était de manipuler le DOM (Document Object Model), de gérer des événements utilisateur et de maîtriser les fonctions de timing en JavaScript.

📋 Table des matières
Fonctionnalités

Structure du Projet

Détails Techniques

Bonus : Allons plus loin

Aperçu

Fonctionnalités
Le processus de lancement respecte les étapes suivantes :

Mise à feu : Au clic sur le bouton "Mise à feu", le compte à rebours commence à 10.

Changement d'état : Dès le départ, l'image de la fusée passe en mode "préparation" (rocket2.gif) et le bouton devient inactif.

Compte à rebours : Chaque seconde, l'affichage se met à jour.

Décollage : À 0, l'image change pour la version en vol (rocket3.gif) et la fusée s'élance vers le haut de l'écran.

Structure du Projet
Le code est organisé de manière modulaire pour garantir une meilleure lisibilité :

Déclaration des constantes & variables globales : Sélection des éléments du DOM (boutons, image, affichage) et initialisation du timer.

Définition des fonctions :

updateCountdown() : Gère la logique de décrémentation et le changement d'images.

launchRocket() : Initialise le processus et désactive les contrôles.

resetRocket() : Réinitialise l'état complet du lanceur.

createStars() : Génère dynamiquement le décor spatial.

Code principal : Mise en place des écouteurs d'événements (click).

Détails Techniques
Pour réaliser ce projet, les concepts suivants ont été utilisés :

setInterval() & clearInterval() : Pour créer une boucle de temps précise chaque seconde.

classList : Pour ajouter ou supprimer les classes CSS (.disabled, .tookOff) dynamiquement.

Manipulation d'attributs : Utilisation de la propriété .src pour modifier les images en temps réel.

Bonus : Allons plus loin
Nous avons poussé l'expérience au-delà du cahier des charges initial :

Génération d'étoiles : Un algorithme génère 150 étoiles de manière aléatoire. Chaque étoile reçoit une taille aléatoire (tiny, normal ou big) et une position top / left générée aléatoirement en JavaScript pour un fond unique à chaque rechargement.

Annulation de mise à feu : Un bouton "Annuler" permet d'arrêter le compte à rebours en plein vol tant que la fusée n'a pas décollé.

Reset (Remise à zéro) : Un bouton de réinitialisation permet de remettre la fusée au sol, de réactiver le bouton de mise à feu et de remettre le compteur à 10 sans rafraîchir la page.

Aperçu
Note aux ingénieurs : Ce projet démontre la capacité à orchestrer plusieurs événements asynchrones en synchronisant l'interface utilisateur (HTML/CSS) avec la logique applicative (JS).
