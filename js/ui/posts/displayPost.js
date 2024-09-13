export function displayPost(post) {
  document.title = `${post.title.rendered} | ${document.title.rendered}`;

  const container = document.querySelector("#post-container");

  container.innerHTML = "";

  const heading = document.createElement("h1");
  heading.innerText = post.title.rendered;

  const featured_media = document.createElement("img");

  featured_media.src =
    post._embedded["wp:featuredmedia"]?.[0]?.media_details.sizes.large
      .source_url || "https://placehold.co/600x400";
  featured_media.alt = post.title.rendered;

  const content = document.createElement("pr");
  content.innerHTML = post.content.rendered;

  container.append(heading);
  container.append(featured_media);
  container.append(content);

  featured_media.addEventListener("click", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = featured_media.src;
  });
}
