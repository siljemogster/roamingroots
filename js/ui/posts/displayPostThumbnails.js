export function displayPostThumbnails(targetElement, posts) {
    const element = document.querySelector(targetElement);
    element.innerHTML = "";
  
    const thumbnailHtml = posts.map(function (post) {
      return createHtmlForPostThumbnail(post);
    });
  
    thumbnailHtml.forEach(function (thumbnail) {
      const thumbnailContainer = document.createElement("div");
      thumbnailContainer.classList.add("thumbnail-container");
      thumbnailContainer.appendChild(thumbnail);
      element.appendChild(thumbnailContainer);
    });
  }
  
  function createHtmlForPostThumbnail(post) {
   
    const featured_media =
    _embedded["wp:featuredmedia"]?.[0]?.media_details.sizes.large.source_url ||
    "https://placehold.co/600x400";


  
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    return img;
  }