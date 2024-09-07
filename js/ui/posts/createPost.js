export function createPost(post) {
    console.log(post);
  
    const { title, images , excerpt, } = post;
  
    const image = images[0].src;
  
    const postElement = document.createElement("div");
    postElement.classList.add("post");
  
    const postTitleElement = document.createElement("h2");
    postTitleElement.textContent = title;
  
    const imageElement = document.createElement("img");
    imageElement.src = image;
    imageElement.alt = title;
  
    const postExcerptElement = document.createElement("p");
    postExcerptElement.innerHTML = excerpt;
    postExcerptElement.classList.add("centered-text");
  
    const link = document.createElement("a");
    link.classList.add("link");
    link.textContent = "Read more";
    link.href = `post.html?id=${id}`;
  
    postElement.append(movieTitleElement);
    postElement.append(imageElement);
    postElement.append(postExcerptElement);
    postElement.append(link);
  
    return postElement;
  }
  