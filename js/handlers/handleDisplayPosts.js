import { fetchPosts } from "../api/fetchPosts.js";
import { displayPosts } from "../ui/posts/displayPosts.js";
import { displayMessage } from "../ui/common/displayMessage.js";

let currentPage = 1;
let totalPages = 1;
let totalPosts = 0;
let isLoading = false;
let allPosts = [];

export async function handleDisplayPosts() {
  try {
    const { posts, totalPages: newTotalPages, totalPosts: newTotalPosts } = await fetchPosts(currentPage);
    totalPages = newTotalPages;
    totalPosts = newTotalPosts;
    allPosts = posts;
    displayPosts(allPosts);
    setupViewMoreButton();
  } catch (error) {
    displayMessage("#posts-container", error.message);
  }
}

function setupViewMoreButton() {
  const viewMoreButton = document.getElementById("view-more-button");
  viewMoreButton.addEventListener("click", loadAllPosts);
  updateViewMoreButtonState();
}

function updateViewMoreButtonState() {
  const viewMoreButton = document.getElementById("view-more-button");
  if (allPosts.length >= totalPosts) {
    viewMoreButton.style.display = "none";
  } else {
    viewMoreButton.style.display = "block";
    viewMoreButton.disabled = isLoading;
    viewMoreButton.textContent = isLoading ? "Loading..." : "View More";
  }
}

async function loadAllPosts() {
  if (isLoading || allPosts.length >= totalPosts) return;

  isLoading = true;
  updateViewMoreButtonState();

  try {
    const remainingPosts = totalPosts - allPosts.length;
    const { posts } = await fetchPosts(1, remainingPosts);
    allPosts = [...allPosts, ...posts];
    displayPosts(allPosts);
  } catch (error) {
    displayMessage("#posts-container", error.message);
  } finally {
    isLoading = false;
    updateViewMoreButtonState();
  }
}
