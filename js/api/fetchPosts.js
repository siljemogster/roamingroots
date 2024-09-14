import { url } from "../constants.js";

export async function fetchPosts(page = 1, perPage = 10) {
  try {
    const response = await fetch(
      `${url}?_embed&page=${page}&per_page=${perPage}`
    );
    
    if (response.ok) {
      const results = await response.json();
      const totalPages = parseInt(response.headers.get("x-wp-totalpages"), 10);
      const totalPosts = parseInt(response.headers.get("x-wp-total"), 10);
      return { posts: results, totalPages, totalPosts };
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error in fetchPosts:", error);
    throw new Error("There was an error fetching the blog posts");
  }
}