import { fetchPost } from "/js/api/fetchPost.js";
import { displayPost } from "../ui/posts/displayPost.js";
import { displayMessage } from "../ui/shared/displayMessage.js";
import getQueryParam from "/js/helper/getQueryParams.js";

export async function handleDisplayPost() {
  const id = getQueryParam("id");

  if (!id) {
    window.location.href = "/";
  }

  try {
    const post = await fetchPost(id);
    displayPost(post);
  } catch (error) {
    displayMessage("post-container", error.message, "error");
  }
}

