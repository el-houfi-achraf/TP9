# Compte Client - Application de Gestion de Comptes Bancaires

Application React pour la gestion de comptes bancaires (Courant et Épargne). Cette application permet d'ajouter et de visualiser des comptes via une interface utilisateur moderne utilisant Bootstrap.

## Fonctionnalités

- ✨ Ajouter un nouveau compte bancaire
- 📋 Afficher la liste de tous les comptes
- 💰 Gestion de deux types de comptes : Courant et Épargne
- 🔄 Communication avec une API REST backend

## Technologies Utilisées

- **React** (v19.2.0) - Bibliothèque JavaScript pour l'interface utilisateur
- **Bootstrap** (v5.3.8) - Framework CSS pour le design responsive
- **Axios** (v1.12.2) - Client HTTP pour les appels API
- **React Testing Library** - Tests unitaires

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn
- Backend API en cours d'exécution sur `http://localhost:8082/api`

## Installation

1. Cloner le projet :

```bash
git clone <repository-url>
cd compte-client
```

2. Installer les dépendances :

```bash
npm install
```

3. Configurer l'URL de l'API (si nécessaire) dans `src/config.js` :

```javascript
const API_BASE_URL = "http://localhost:8082/api";
```

## Démarrage de l'Application

In the project directory, you can run:

### `npm start`

Lance l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour la visualiser dans votre navigateur.

La page se recharge automatiquement lorsque vous effectuez des modifications.\
Les erreurs de lint s'affichent également dans la console.

### `npm test`

Lance le runner de tests en mode watch interactif.\
Consultez la section sur [les tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'informations.

### `npm run build`

Compile l'application pour la production dans le dossier `build`.\
Elle regroupe correctement React en mode production et optimise la build pour de meilleures performances.

La build est minifiée et les noms de fichiers incluent des hashes.\
Votre application est prête à être déployée!

## Structure du Projet

```
compte-client/
├── public/           # Fichiers statiques
├── src/
│   ├── components/
│   │   ├── CompteForm.js   # Formulaire d'ajout de compte
│   │   └── CompteList.js   # Liste des comptes
│   ├── App.js        # Composant principal
│   ├── config.js     # Configuration de l'URL de l'API
│   └── index.js      # Point d'entrée de l'application
└── package.json
```

## API Backend

L'application communique avec une API REST qui doit être disponible sur `http://localhost:8082/api`.

### Endpoints utilisés :

- `GET /comptes` - Récupérer la liste de tous les comptes
- `POST /comptes` - Créer un nouveau compte

### Format des données :

```json
{
  "id": 1,
  "solde": 5000.0,
  "dateCreation": "2025-10-27",
  "type": "COURANT"
}
```

## Types de Comptes

- **COURANT** - Compte courant
- **EPARGNE** - Compte épargne

## Auteur
