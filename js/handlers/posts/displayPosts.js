import { createPost } from "./createPost.js";

const INITIAL_POSTS = 10;
let showingAllPosts = false;
let allPosts = [];

export function displayPosts(posts) {
  console.log("displayPosts called with", posts.length, "posts");
  console.log("First post:", posts[0]);
  
  allPosts = posts;
  const postContainer = document.querySelector("#posts-container");
  const viewMoreButton = document.querySelector("#view-more-button");
  
  if (!postContainer) {
    console.error("Could not find #posts-container");
    return;
  }
  
  postContainer.innerHTML = "";
  
  const postsToShow = showingAllPosts ? allPosts : allPosts.slice(0, INITIAL_POSTS);
  console.log("Showing", postsToShow.length, "posts");
  
  postsToShow.forEach(function (post, index) {
    console.log(`Creating post ${index + 1}:`, post.id, post.title?.rendered);
    const postDetails = createPost(post);
    postContainer.append(postDetails);
  });
  
  if (!viewMoreButton) {
    console.error("Could not find #view-more-button");
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