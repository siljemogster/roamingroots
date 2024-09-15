export function createPost(post) {
    const { title, excerpt, _embedded, id } = post;
  
    const featured_media =
      _embedded["wp:featuredmedia"]?.[0]?.media_details.sizes.large.source_url ||
      "https://placehold.co/600x400";
  
    const postElement = document.createElement("div");
    postElement.classList.add("post");
  
    const postTitleElement = document.createElement("h2");
    postTitleElement.textContent = title.rendered;
  
    const featuredMediaElement = document.createElement("img");
    featuredMediaElement.src = featured_media;
    featuredMediaElement.alt = title.rendered;
  
    const postExcerptElement = document.createElement("p");
    postExcerptElement.innerHTML = excerpt.rendered;
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