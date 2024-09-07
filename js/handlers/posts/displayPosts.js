import { fetchPosts } from "../../api/fetchPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderPosts } from "../../ui/products/renderPosts.js";

export async function displayPosts() {
  console.log("displayPosts");
  try {
    const posts = await fetchPosts();
    console.log(posts);
    renderPosts("#posts-container", posts);
  } catch (error) {
    displayMessage("error", "There was an error fetching the posts");
  }
}
