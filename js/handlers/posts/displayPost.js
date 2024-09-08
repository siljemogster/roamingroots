import { fetchPost } from "../../api/fetchPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { displayPost } from "../../ui/movies/displayPost.js";

export async function displayPost() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");

  if (!id) {
    return (location.href = "/");
  }

  try {
    const post = await fetchPost(id);
    console.log(post);
    displayPost("#post-container", post);
  } catch (error) {
    displayMessage("error", "There was an error fetching the posts");
  }
}
console.log("post:", post);
