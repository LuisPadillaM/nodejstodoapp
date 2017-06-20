import "whatwg-fetch";
import getBaseUrl from "./baseUrl2";

const baseUrl = getBaseUrl();

export function getTodo() {
  return get("todolist");
}

export function deleteItem(id) {
  return del(`todolist/${id}`);
}

export function addItem(item) {
  return add(`todolist/`, item);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function del(url){
  const request = new Request(baseUrl + url, {
    method: "DELETE"
  });

  return fetch(request).then(onSuccess, onError);
}

function add(url, item){

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



function onError(error){
  console.log(error);
}
