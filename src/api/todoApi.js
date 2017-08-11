import "whatwg-fetch";
// require('es6-promise').polyfill();
// require('isomorphic-fetch');

import { get, add, del, update } from "./request2";

export function getTodo() {
  return get("todolist");
}
export function getById(id) {
  return get(`todolist/${id}`);
}


export function deleteItem(id) {
  return del(`todolist/${id}`);
}

export function addItem(item) {
  return add(`todolist/`, item);
}

export function updateItem(id, item) {
  return update(`todolist/${id}`, item);
}
