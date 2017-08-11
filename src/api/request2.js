import "whatwg-fetch";
import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

export function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

export function add(url, item){

  const request = new Request(baseUrl + url, {
    method: "POST",
    headers: new Headers({
      'Content-Type':'application/json'
    }),
    mode: 'cors',
    body: JSON.stringify(item)
  });
  return fetch(request).then(onSuccess, onError);
}

export function del(url){
  const request = new Request(baseUrl + url, {
    method: "DELETE"
  });

  return fetch(request).then(onSuccess, onError);
}

export function update(url, item){
  const request = new Request(baseUrl + url, {
    method: "PUT",
    headers: new Headers({
      'Content-Type':'application/json'
    }),
    mode: 'cors',
    body: JSON.stringify(item)
  });
  return fetch(request).then(onSuccess, onError);
}

function onError(error){
  console.log(error);
}

function onSuccess(response){
  return response.json();
}
