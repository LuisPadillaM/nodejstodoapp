require('es6-promise').polyfill();
require('isomorphic-fetch');
import getBaseUrl from "../baseUrl2";
const baseUrl = getBaseUrl();

const todolist = {
  "todolist": [
    {
      "id": 23869840,
      "task": "su"
    },
    {
      "id": 51416500,
      "task": "magna dolor"
    },
    {
      "id": 65647855,
      "task": "exercitation"
    }
  ]
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

export function get(url) {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () => todolist[url] ? resolve(todolist[url]) : reject({error: "couldn't find any todolist"})
    );
  });
}


function onError(error){
  console.log(error);
}

function onSuccess(response){
  return response.json();
}
