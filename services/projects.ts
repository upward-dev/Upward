// helper functions to call the backend api for project resume related queries

const URL = '/api/projects'; // TODO - place in config files later?

export const projectService = {
  create
};

function create(data) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  return fetch(URL,requestOptions).then(handleResponse);
}

function update() {

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
