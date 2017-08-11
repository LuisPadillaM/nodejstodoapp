import C from "./constants";
import { getTodo, addItem, deleteItem, updateItem } from "../api/todoApiMongoose";
// import { getTodo, addItem, deleteItem, updateItem } from "../api/todoApi";

export const fillTodoName = (name) => ({
  type: C.FILL_NAME,
  name
});

export const fillTodoTime = (time) => ({
  type: C.FILL_TIME,
  time
});

 const addTodoState = (todo) => ({
  type: C.ADD_ITEM,
  todo
});

export const editTodo = (id, item) => ({
  type: C.EDIT_ITEM,
  id,
  item
});

export const removeTodo = (id) => ({
  type: C.REMOVE_ITEM,
  id
});

const fetchTodos = () => {
  return {
    type: C.FETCH_TODO_DATA,
    todosIsLoading: true
  }
}

const fetchTodosSuccess = (todos) => {
  return {
    type: C.FETCH_TODO_DATA_SUCCESS,
    todosIsLoading: false,
    todos: todos
  }
}

const fetchTodosError = (error) => {
  return {
    type: C.FETCH_TODO_DATA_ERROR,
    todosIsLoading: false,
    error
  }
}


//CRUD OPERATIONS IN DATABASES USING THUNK

export const getTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodos());
    return getTodo().then(
      todos => dispatch(fetchTodosSuccess(todos)),
      error => dispatch(fetchTodosError(error))
    )
  }
}

export const addTodos = (todo) => {
  return (dispatch) => {
    return addItem(todo).then(
      () => dispatch(addTodoState(todo)),
    )
  }
}

export const deleteTodo = (id) => {
  return (dispatch) => {
    return deleteItem(id).then(
      () => dispatch(removeTodo(id))
    )
  }
}

export const updateTodo = (id, item) => {
  return (dispatch) => {
    return updateItem(id, item).then(
      () => dispatch(editTodo(id, item))
    )
  }
}
