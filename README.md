# TP : Utilisation de l'API JSONPlaceholder

## Objectif
L'objectif de ce TP est d'effectuer différentes requêtes HTTP (GET, POST, PATCH) auprès de l'API publique [JSONPlaceholder](https://jsonplaceholder.typicode.com/), en utilisant un outil tiers comme Postman. 

L'API JSONPlaceholder est une API gratuite qui fournit des données fictives pour effectuer des tests et du développement. Aucun besoin d'authentification.

---

## Déroulé du TP

### 1. **Effectuez une requête GET sur les commentaires**

Effectuez une requête `GET` pour récupérer la liste de tous les commentaires.

**URL :**  
`https://jsonplaceholder.typicode.com/comments`

**Méthode :** `GET`

**Réponse attendue :**  
Liste de commentaires sous forme de tableau JSON contenant des objets avec des propriétés comme `postId`, `id`, `name`, `email` et `body`.

Exemple de réponse :
```json
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium animi dolorem vel architecto..."
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis..."
  }
]
```

---

### 2. **Effectuez une requête POST sur les todos**

Effectuez une requête `POST` pour créer un nouveau todo. Vous devez utiliser les paramètres existants pour créer un objet `todo`.

**URL :**  
`https://jsonplaceholder.typicode.com/todos`

**Méthode :** `POST`

**Payload (x-www-form-urlencoded) :**
```json
{
  "userId": 1,
  "title": "Apprendre à utiliser l'API",
  "completed": false
}
```

**Réponse attendue :**
```json
{
  "userId": 1,
  "id": 201,
  "title": "Apprendre à utiliser l'API",
  "completed": false
}
```

---

### 3. **Effectuez une requête PATCH sur les posts**

Effectuez une requête `PATCH` pour modifier un post existant. Modifiez les propriétés `title` et `body` du post avec un `id` donné.

**URL :**  
`https://jsonplaceholder.typicode.com/posts/1`

**Méthode :** `PATCH`

**Payload :**
```json
{
  "title": "Titre modifié",
  "body": "Contenu modifié"
}
```

**Réponse attendue :**
```json
{
  "userId": 1,
  "id": 1,
  "title": "Titre modifié",
  "body": "Contenu modifié"
}
```

---

### 4. **Effectuez une requête GET pour afficher les commentaires associés au post ayant l'identifiant 1**

Effectuez une requête `GET` pour récupérer les commentaires associés au post avec l'identifiant `1`.

**URL :**  
`https://jsonplaceholder.typicode.com/posts/1/comments`

**Méthode :** `GET`

**Réponse attendue :**  
Liste des commentaires associés à ce post, avec des propriétés similaires à celles mentionnées dans le premier point.

Exemple de réponse :
```json
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium animi dolorem vel architecto..."
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis..."
  }
]
```

---

### 5. **Effectuez une requête GET pour afficher les photos affiliées à l'album numéro 2**

Effectuez une requête `GET` pour récupérer toutes les photos associées à l'album avec l'identifiant `2`.

**URL :**  
`https://jsonplaceholder.typicode.com/albums/2/photos`

**Méthode :** `GET`

**Réponse attendue :**  
Liste des photos associées à l'album, avec des propriétés comme `albumId`, `id`, `title`, et `url`.

Exemple de réponse :
```json
[
  {
    "albumId": 2,
    "id": 51,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/7c4c3c",
    "thumbnailUrl": "https://via.placeholder.com/150/7c4c3c"
  },
  {
    "albumId": 2,
    "id": 52,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/2d517b",
    "thumbnailUrl": "https://via.placeholder.com/150/2d517b"
  }
]
```

---

## Résumé des requêtes

Voici un résumé des requêtes à effectuer avec leurs paramètres :

1. **GET /comments** : Récupérer tous les commentaires.
2. **POST /todos** : Créer un nouveau todo avec un titre et un statut `completed`.
3. **PATCH /posts/1** : Modifier le `title` et le `body` d'un post existant.
4. **GET /posts/1/comments** : Récupérer tous les commentaires associés au post avec l'ID `1`.
5. **GET /albums/2/photos** : Récupérer toutes les photos de l'album numéro `2`.

---

## Utilisation de Postman

### 1. **GET /comments**
- Méthode : `GET`
- URL : `https://jsonplaceholder.typicode.com/comments`

### 2. **POST /todos**
- Méthode : `POST`
- URL : `https://jsonplaceholder.typicode.com/todos`
- **Payload** (x-www-form-urlencoded) :
  ```json
  {
    "userId": 1,
    "title": "Apprendre à utiliser l'API",
    "completed": false
  }
  ```

### 3. **PATCH /posts/1**
- Méthode : `PATCH`
- URL : `https://jsonplaceholder.typicode.com/posts/1`
- **Payload** :
  ```json
  {
    "title": "Titre modifié",
    "body": "Contenu modifié"
  }
  ```

### 4. **GET /posts/1/comments**
- Méthode : `GET`
- URL : `https://jsonplaceholder.typicode.com/posts/1/comments`

### 5. **GET /albums/2/photos**
- Méthode : `GET`
- URL : `https://jsonplaceholder.typicode.com/albums/2/photos`