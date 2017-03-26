
const API_URL = 'http://localhost:7000/api/v1';

export default function callApi(endpoint, method = 'get', body) {
    return fetch(`${API_URL}/${endpoint}`, {
        credentials: 'same-origin',
        headers: { 'content-type': 'application/json' },
        method,
        body: JSON.stringify(body),
    })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
      if (!response.ok) {
          return Promise.reject(json);
      }

      return json;
  })
  .then(
    response => response,
    error => error
  );
}
