export function createPost(post) {
    console.log(post);
  
    const { title, image, excerpt, } = post;
  
    const featured_media = _embedded["wp:featuredmedia"]?.[0]?.media_details.sizes.large.source_url;
  
    const postElement = document.createElement("div");
    postElement.classList.add("post");
  
    const postTitleElement = document.createElement("h2");
    postTitleElement.textContent = title;
  
    const featuredMediaElement = document.createElement("img");
    imageElement.src = featuredmedia;
    imageElement.alt = title;
  
    const postExcerptElement = document.createElement("p");
    postExcerptElement.innerHTML = excerpt;
    postExcerptElement.classList.add("centered-text");
  
    const link = document.createElement("a");
    link.classList.add("link");
    link.textContent = "Read more";
    link.href = `post.html?id=${id}`;
  
    postElement.append(postTitleElement);
    postElement.append(featuredMediaElement);
    postElement.append(postExcerptElement);
    postElement.append(link);
  
    return postElement;
  }
  