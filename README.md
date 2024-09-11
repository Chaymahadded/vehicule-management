# Application Web de Gestion des Véhicules

Ce projet vise à développer une application web offrant aux utilisateurs un suivi complet du kilométrage, de l'historique de consommation de carburant et des services d'entretien de leurs véhicules. Cette application permettra également aux utilisateurs de recevoir des rappels pertinents pour la maintenance de leurs véhicules.

## Fonctionnalités

- **Suivi de l'historique de consommation de carburant :** Les utilisateurs peuvent suivre et gérer l'historique de consommation de carburant de leurs véhicules.
- **Gestion des services d'entretien :** Gérez et enregistrez les services d'entretien pour les véhicules.
- **Rappels de maintenance :** Les utilisateurs recevront des rappels pour assurer la maintenance régulière de leurs véhicules.

## Structure du Projet

### Frontend
- **Framework :** Angular
- **Description :** Le frontend de l'application est construit avec Angular, offrant une interface utilisateur réactive et conviviale pour la gestion des informations sur les véhicules.

### Backend
- **Framework :** Spring Boot
- **Description :** Le backend est développé en utilisant Spring Boot, offrant des API RESTful pour la gestion des véhicules, y compris les opérations CRUD.

## Pour Commencer

### Prérequis

- **Node.js :** Requis pour exécuter le frontend Angular.
- **Java :** Requis pour exécuter le backend Spring Boot.
- **Maven :** Pour gérer les dépendances Java et construire l'application Spring Boot.

### Installation

1. **Cloner le Référentiel :**

    ```bash
    git clone https://github.com/Chaymahadded/vehicle-management.git
    ```

2. **Naviguer vers le Répertoire Frontend et Installer les Dépendances :**

    ```bash
    cd gestion-des-vehicules/frontend
    npm install
    ```

3. **Naviguer vers le Répertoire Backend et Construire l'Application :**

    ```bash
    cd ../backend
    mvn clean install
    ```

### Exécution de l'Application

1. **Démarrer le Backend :**

    ```bash
    cd backend
    mvn spring-boot:run
    ```

2. **Démarrer le Frontend :**

    ```bash
    cd frontend
    ng serve
    ```

3. **Accéder à l'Application :**
   
   Ouvrez votre navigateur et accédez à `http://localhost:4200`.

