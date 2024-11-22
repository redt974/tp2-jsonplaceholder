const axios = require('axios');

// 1. Effectuer une requête GET sur les commentaires
const getComments = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    console.log('Commentaires :', response.data);
  } catch (error) {
    console.error('Erreur lors de la récupération des commentaires:', error);
  }
};

// 2. Effectuer une requête POST sur les todos
const createTodo = async () => {
  try {
    const newTodo = {
      userId: 1,
      title: 'Apprendre à utiliser l\'API',
      completed: false
    };

    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
    console.log('Todo créé :', response.data);
  } catch (error) {
    console.error('Erreur lors de la création du todo:', error);
  }
};

// 3. Effectuer une requête PATCH sur un post (modification du titre et du contenu)
const updatePost = async () => {
  try {
    const updatedPost = {
      title: 'Titre modifié',
      body: 'Contenu modifié'
    };

    const response = await axios.patch('https://jsonplaceholder.typicode.com/posts/1', updatedPost);
    console.log('Post mis à jour :', response.data);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du post:', error);
  }
};

// 4. Effectuer une requête GET pour récupérer les commentaires associés au post avec l'identifiant 1
const getCommentsForPost = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    console.log('Commentaires du post 1 :', response.data);
  } catch (error) {
    console.error('Erreur lors de la récupération des commentaires du post 1:', error);
  }
};

// 5. Effectuer une requête GET pour récupérer les photos de l'album numéro 2
const getPhotosForAlbum = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums/2/photos');
    console.log('Photos de l\'album 2 :', response.data);
  } catch (error) {
    console.error('Erreur lors de la récupération des photos de l\'album 2:', error);
  }
};

// Exécution des différentes fonctions
getComments();
createTodo();
updatePost();
getCommentsForPost();
getPhotosForAlbum();
