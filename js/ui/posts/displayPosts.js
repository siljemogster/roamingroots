import { createPost } from "./createPost.js";

export function displayPosts(posts) {
  const postContainer = document.querySelector("#posts-container");

  postContainer.innerHTML = "";

  posts.forEach(function (post) {
    const postDetails = createPost(post);
    postContainer.append(postDetails);
  });
}