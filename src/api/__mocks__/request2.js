require('es6-promise').polyfill();
require('isomorphic-fetch');

import getBaseUrl from "../baseUrl";
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

  return new Promise((resolve,reject) => {
    process.nextTick(
      () => {
        if(url.indexOf('todolist') == -1){
          reject({error: "couldn't find any resource"});
        }

        const chunk = url.substr('todolist/'.length);
        const todoID = (chunk != "") ? parseInt(chunk, 10) : "";
      }
    );
  });

}

export function get(url) {

  return new Promise((resolve, reject) => {
    process.nextTick(
      () => {

        if(url.indexOf('todolist') == -1){
          reject({error: "couldn't find any resource"});
        }

        const chunk = url.substr('todolist/'.length);
        const todoID = (chunk != "") ? parseInt(chunk, 10) : "";

        if(todoID ===""){
          return resolve(todolist[url]);
        }else{

          let id = todolist["todolist"].filter((element)=> {
            return element["id"] === todoID;
          });
          return id.length ? resolve(id[0]) : reject({error: "couldn't find any todolist"});
        }

      }
    );
  });
}

function onError(error){
  console.log(error);
}

function onSuccess(response){
  return response.json();
}

