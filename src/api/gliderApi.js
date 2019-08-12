import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/gliders/";

export function getGliders() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getGliderBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(gliders => {
        if (gliders.length !== 1) throw new Error("Glider not found: " + slug);
        return gliders[0]; // should only find one glider for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveGlider(glider) {
  return fetch(baseUrl + (glider.id || ""), {
    method: glider.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...glider,
      // Parse manufacturerId to a number (in case it was sent as a string).
      manufactuerId: parseInt(glider.manufacturerId, 10)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteGlider(gliderId) {
  return fetch(baseUrl + gliderId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
