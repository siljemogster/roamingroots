import { fetchPosts } from "../api/fetchPosts.js";
import { displayPostThumbnails } from "../ui/posts/displayPostThumbnails.js";
import { displayPosts } from "../ui/posts/displayPosts.js";
import { displayMessage } from "../ui/common/displayMessage.js";

export async function handleDisplayPosts() {
  try {
    const posts = await fetchPosts();
    displayPosts(posts);
  } catch (error) {
    displayMessage("#posts-container", error.message);
  }
}


