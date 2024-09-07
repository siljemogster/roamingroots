import { url } from "../constants.js";

export async function fetchPost(id) {
  const detailUrl = `${url}${id}`;

  const response = await fetch(detailUrl);

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error("There was an error fetching the post with id: ${id}");
}
