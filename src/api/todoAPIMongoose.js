import "whatwg-fetch";
import { get, add, del } from "./request";

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







