import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSucces, onError);
}

// Can't call func delete since reserved word.
function del(url) {
  const request = new Request(baseUrl + url, {
    method : 'DELETE'
  });

  return fetch(request).then(onSucces, onError);
}

function onSucces(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
