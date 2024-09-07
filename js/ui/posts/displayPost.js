export function displayPost(post) {
    document.title = `${post.title} | ${document.title}`;
  
    const container = document.querySelector("#post-container");
  
    container.innerHTML = "";
  
    const heading = document.createElement("h1");
    heading.innerText = post.title;
  
    const image = document.createElement("img");
  
    if (post.links && post.images.length > 0) {
      image.src = post.link[0].src;
      image.alt = post.title;
    } else {
      image.src = "path/to/default/image.jpg";
      image.alt = "Default Image";
    }
  
    const content = document.createElement("p");
    excerpt.innerHTML = post.content;
  
   
    container.append(heading);
    container.append(link);
    container.append(content);

  }
  