import { createPost } from "./createPost.js";

const INITIAL_POSTS = 10;
let showingAllPosts = false;
let allPosts = [];

export function displayPosts(posts) {

  allPosts = posts;
  const postContainer = document.querySelector("#posts-container");
  const viewMoreButton = document.querySelector("#view-more-button");

  if (!postContainer) {
    return;
  }

  postContainer.innerHTML = "";

  const postsToShow = showingAllPosts ? allPosts : allPosts.slice(0, INITIAL_POSTS);

  postsToShow.forEach(function (post, index) {
    const postDetails = createPost(post);
    postContainer.append(postDetails);
  });

  if (!viewMoreButton) {
  } else {
    if (showingAllPosts || allPosts.length <= INITIAL_POSTS) {
      viewMoreButton.style.display = "none";
    } else {
      viewMoreButton.style.display = "block";
    }
  }
}

export function setupViewMore() {
  const viewMoreButton = document.querySelector("#view-more-button");

  if (!viewMoreButton) {
    console.error("Could not find #view-more-button in setupViewMore");
    return;
  }

  viewMoreButton.addEventListener("click", () => {
    showingAllPosts = true;
    displayPosts(allPosts);
  });
}