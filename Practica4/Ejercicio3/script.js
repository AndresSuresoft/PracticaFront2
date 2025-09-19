// Función 1: obtiene un usuario
function getUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Error al obtener usuario");
        return res.json();
      });
  }
  
  
  function getUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(res => {
        if (!res.ok) throw new Error("Error al obtener posts");
        return res.json();
      });
  }
  
  
  function getPostComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(res => {
        if (!res.ok) throw new Error("Error al obtener comentarios");
        return res.json();
      });
  }
  
  
  async function loadUserFeed(userId) {
    try {
      const user = await getUser(userId);              
      const posts = await getUserPosts(user.id);       
      
      // por si el usuario no tenga un post
      if (posts.length === 0) {
        return { user, posts: [], firstPostComments: [] };
      }
  
      const firstPost = posts[0];
      const comments = await getPostComments(firstPost.id); 
  
      
      const result = {
        user,
        posts,
        firstPostComments: comments
      };
  
      console.log(result); 
      return result;
  
    } catch (err) {
      console.error(" Error en loadUserFeed:", err);
    }
  }
  
  
  loadUserFeed(1);
  