/**
 * @module client
 * @beta
 * 
 * A Fetch-ful FHIR Client in TypeScript
 * 
 * @example Grab a capabilities statement:
 * ```typescript
 *  const { capabilities } = Client("https://r4.smarthealthit.org", {});
 *  await capabilities().json() as fhir4.CapabilityStatement;
 * ```
 * 
 * @example Easily read a Patient resource:
 * ```typescript
 *  const { read } = Client("https://r4.smarthealthit.org", {})
 *  await read("Patient", "87a339d0-8cae-418e-89c7-8651e6aab3c6").json() as fhir4.Patient;
 * ```
 */

import fetch from "cross-fetch";

type Summary = "true" | "false" | "text" | "count" | "data";

export default function(baseUrl: string, init: RequestInit) {
  /**
   * Read the current state of the resource
   */
  async function read(type: string, id: string, summary?: Summary) {
    return fetch(`${baseUrl}/${type}/${id}`, {
      method: "GET",
      ...init
    });
  }

  /**
   * Read the state of a specific version of the resource
   */
  async function vread(type: string, id: string, vid: string) {
    return fetch(`${baseUrl}/${type}/${id}/_history/${vid}`, {
      method: "GET",
      ...init
    });
  }
  
  /**
   * Update an existing resource by its id (or create it if it is new)
   */
  async function update(type: string, id: string, resource: fhir3.FhirResource | fhir4.FhirResource) {
    return fetch(`${baseUrl}/${type}/${id}`, {
      method: "PUT",
      body: JSON.stringify(resource),
      ...init
    });
  }

  /**
   * Update an existing resource by posting a set of changes to it
   */
  async function patch(type: string, id: string, resource: fhir3.FhirResource | fhir4.FhirResource) {
    return fetch(`${baseUrl}/${type}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(resource),
      ...init
    });
  }

  /**
   * Delete a resource
   */
  async function destroy(type: string, id: string) {
    return fetch(`${baseUrl}/${type}/${id}`, {
      method: "DELETE",
      ...init
    });
  }

  /**
   * Search the resource type based on some filter criteria OR Search across all resource types based on some filter criteria
   * @todo not complete
   */
  async function search(type: string) {
    return fetch(`${baseUrl}/${type}`, {
      method: "GET",
      ...init
    });
  }

  /**
   * Create a new resource with a server assigned id
   */
  async function create(type: string, id: string) {
    return fetch(`${baseUrl}/${type}`, {
      method: "POST",
      ...init
    });
  }

  /**
   * Retrieve the change history for a particular resource type OR Retrieve the change history for all resources
   */
  async function history() {
    throw new Error("Not Implemented");
  }

  /**
   * Get a capability statement for the system
   */
  async function capabilities() {
    return fetch(`${baseUrl}/metadata`, {
      method: "GET",
      ...init
    });
  }

  /**
   * Update, create or delete a set of resources in a single interaction
   */
  async function batch(bundle: fhir3.Bundle | fhir4.Bundle) {
    return fetch(`${baseUrl}/`, {
      method: "POST",
      body: JSON.stringify(bundle),
      ...init
    });
  }

  /**
   * Update, create or delete a set of resources in a single interaction
   */
  async function transaction(bundle: fhir3.Bundle | fhir4.Bundle) {
    return fetch(`${baseUrl}/`, {
      method: "POST",
      body: JSON.stringify(bundle),
      ...init
    });
  }

  return {
    read,
    vread,
    update,
    patch,
    destroy,
    search,
    create,
    history,
    capabilities,
    batch,
    transaction
  }
}