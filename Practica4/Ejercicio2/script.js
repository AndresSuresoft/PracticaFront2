function getUser(id, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => callback(null, data))
      .catch(err => callback(err));
  }
  
 
  function getPosts(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(res => res.json())
      .then(data => callback(null, data))
      .catch(err => callback(err));
  }
  
  
  function getComments(postId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(res => res.json())
      .then(data => callback(null, data))
      .catch(err => callback(err));
  }
  
 
  getUser(1, (err, user) => {
    if (err) return console.error("Error obteniendo usuario:", err);
    console.log("Usuario:", user);
  
    getPosts(user.id, (err, posts) => {
      if (err) return console.error("Error obteniendo posts:", err);
      console.log("Posts del usuario:", posts);
  
      getComments(posts[0].id, (err, comments) => {
        if (err) return console.error("Error obteniendo comentarios:", err);
        console.log("Comentarios del primer post:", comments);
      });
    });
  });