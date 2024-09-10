export function displayPost(post) {
    document.title = `${post.title} | ${document.title}`;
  
    const container = document.querySelector("#post-container");
  
    container.innerHTML = "";
  
    const heading = document.createElement("h1");
    heading.innerText = post.title;
  
    const featured_media = document.createElement("img");
  
    if (post.links && post.featured_media.length > 0) {
      featured_media.src = post.link[0].src;
      featured_media.alt = post.title;
    } else {
      featured_media.src = "path/to/default/image.jpg";
      featured_media.alt = "Default Image";
    }
  
    const content = document.createElement("p");
    excerpt.innerHTML = post.content;
  
   
    container.append(heading);
    container.append(featured_media);
    container.append(content);

  }
  