import { url } from "../constants.js";

export async function fetchPosts() {
  console.log("Fetching posts from URL:", `${url}?_embed`);
  
  try {
    const response = await fetch(`${url}?_embed`);
    console.log("Response status:", response.status);
    
    if (response.ok) {
      const results = await response.json();
      console.log("Fetched posts:", results);
      return results;
    } else {
      console.error("Response not OK. Status:", response.status);
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error in fetchPosts:", error);
    throw new Error("There was an error fetching the blog posts");
  }
}