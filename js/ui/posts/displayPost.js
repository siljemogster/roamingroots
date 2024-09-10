export function displayPost(post) {
    document.title = `${post.title} | ${document.title}`;
  
    const container = document.querySelector("#post-container");
  
    container.innerHTML = "";
  
    const heading = document.createElement("h1");
    heading.innerText = post.title;
  
    const featured_media = document.createElement("img");
  
    if (post.links && post.featured_media.length > 0) {
      featured_media.src = _embedded["wp:featuredmedia"]?.[0]?.media_details.sizes.large.source_url;
      featured_media.alt = post.title;
    } else {
      featured_media.src = "/wp-json/wp/v2/posts/?_embed";
      featured_media.alt = "Default Image";
    }
  
    const content = document.createElement("p");
    excerpt.innerHTML = post.content;
  
   
    container.append(heading);
    container.append(featured_media);
    container.append(content);

  }
  