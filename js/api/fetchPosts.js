import { url } from "../constants.js";

export async function fetchPosts() {
  const response = await fetch(`${url}?_embed`);

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error("There was an error fetching the blog posts");
}