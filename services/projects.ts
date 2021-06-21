// helper functions to call the backend api for project resume related queries

const URL = 'http://localhost:3000/api/resume'; // TODO - place in config files later? prod vs dev env

export const projectService = {
  create,
  update,
  get
};

function create(data) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  };
  return fetch(URL,requestOptions).then(handleResponse);
}

function update(data) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  };
  return fetch(URL,requestOptions).then(handleResponse);
}
function get(id) {
  const requestOptions = {
    method: 'GET'
  }
  // will include the id in the query params
  return fetch(`${URL}/projects/${id}`,requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  })
}
