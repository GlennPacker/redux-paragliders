import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/manufacturers/";

export function getManufacturers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveManufacturer(manufacturer) {
  return fetch(baseUrl + (manufacturer.id || ""), {
    method: manufacturer.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(manufacturer)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteManufacturer(manufacturerId) {
  return fetch(baseUrl + manufacturerId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
