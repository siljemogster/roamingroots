import { url } from "../app.js";

export async function fetchPost() {
  const response = await fetch(url);

  coneolse.log(response);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();
  return json;
}
