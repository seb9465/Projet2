# Projet Intégrateur 2e année - 2nd Year School Project

## Exigences - Requirements
- [NodeJs](https://nodejs.org/en/) <br />
- [Angular CLI](https://cli.angular.io)         `npm install -g @angular/cli`

## Installation
1. `git clone https://github.com/seb9465/Projet2.git` <br />
2. `cd Projet2` <br />
3. 
    | Côté client - Client side | Côté serveur - Server side |
    | --- | --- |
    | `cd client` | `cd server` |
    | `npm install` | `npm install` |

## Démarrer la solution - Run the solution
Depuis le dossier source - From the root folder <br />

| Côté client | Côté serveur |
| ----- | ----- |
| `cd client` | `cd server` |
| `npm start` | `npm start` |
| http://localhost:4200 | http://localhost:3000 |


## Tests unitaires - Unit tests
Depuis le dossier source - From the root folder <br />

| Côté client avec [Karma](https://karma-runner.github.io) | Côté serveur avec [Mocha](https://mochajs.org/) |
| ----- | ----- |
| `cd client` | `cd server` |
| `ng test` | `npm test` |

# Touches à utiliser pour le jeu de course - Keys to use for the racing game

Cette liste de touches sert à standardiser les jeux et ainsi faciliter la correction. Un non respect de la touche sera considéré comme une fonctionnalité non livrée au client (note de 0).

|    Fonctionnalité    	| Touche 	|
|:--------------------:	|:------:	|
|        Avancer       	|    W   	|
|        Arrêter       	|    S   	|
|        Gauche        	|    A   	|
|        Droite        	|    D   	|
|       Lumières       	|    L   	|
|       Mode nuit      	|    N   	|
|      Zoom avant      	|    +   	|
|     Zoom arrière     	|    -   	|
| Changement de caméra 	|    C   	|

# Cadriciel

Nous vous avons fourni plusieurs pièces de code.

## Course

Tout d'abord, le déplacement d'un véhicule pour le jeu de course. Puisque vous devez éviter la duplication de code, vous aurez probablement à modifier ce code, en partie ou en totalité. Nous vous recommandons cependant de ne pas modifier les constantes du véhicule puisque celles-ci ont étés testées et donnent un contrôle relativement réaliste au véhicule.

La fonction qui calcule le couple (torque) du moteur est une fonction qui a été obtenue à partir des points du moteur réel. La masse, la taille des roues, le poids de celles-ci sont des valeurs obtenues des spécifications d'une Chevrolet Camaro et représentent autant que possible la réalité.

Les formules suivantes sont utilisés pour déterminer les données du véhicule à chaque intervalle:
- Accélération: a = F/m.
- Vitesse: vf = vi + a*dt. 
- Position: pf = pi + v*dt. 

Afin de simplifier les calculs physiques, nous avons assumé que le poids du véhicule est toujours réparti au centre de celui-ci sur le plan gauche-droite. De plus, il s'agit d'un véhicule à propulsion, donc seulement les roues arrières font avancer le véhicule.

L'accélération se fait toujours au maximum possible, qui est déterminé par le coefficient de friction des pneus, la masse du véhicule et la répartition du poids. Nous utilisons toujours la valeur maximale entre ceci et la force générée par le moteur afin de simuler un système d'anti-patinage. Ceci nous permet de ne pas gérer le dérapage du véhicule.

Nous avons aussi ajouté une transmission automatique, qui change les vitesses du véhicules automatiquement.

La majorité des formules ont étés obtenues à partir de [Engineering Toolbox](https://www.engineeringtoolbox.com) et de [Car physics for games](http://www.asawicki.info/Mirror/Car%20Physics%20for%20Games/Car%20Physics%20for%20Games.html)

## Général

Un service de base effectuant une requête http vers le serveur vous est fourni.
