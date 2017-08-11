import React from 'react';
import PropTypes from 'prop-types';
import TodoItems from "./todoItems";
import Loader from "./Loader";
import { connect, Provider } from "react-redux";
require("../styles/scss/main.scss");
import { getTodo, addItem, deleteItem, updateItem } from "../api/todoApiMongoose";
// import { getTodo, addItem, deleteItem, updateItem } from "../api/todoApi";
import { editTodo, getTodos, deleteTodo} from "../actions/actionCreator";
import store  from  "../store/store";
import AddTodo from "./containers/AddTodo";


class TodoList extends React.Component {

  componentWillMount() {
     const {store} = this.context;
     this.unsubscribe = store.subscribe(() =>
     this.forceUpdate()
    )
    store.dispatch(getTodos());
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    const {store} = this.context;
    const state = store.getState();
    const {loading, error, todos} = state;
    return (
        loading ?
        <Loader /> :
        (error) ?
        <p> Error Loading Menu Items</p> :
        (todos.length) ?
        <TodoItems items={todos} deleteItem={(id) => store.dispatch(deleteTodo(id)) }
        editItem={ (id, item, cb) => {
          store.dispatch(editTodo(id, item))
          if(cb) cb();
         }} />
        :
        <span> No todo tasks yet </span>
    )
  }
}

TodoList.contextTypes = {
  store: PropTypes.object
}

const App = () => (
  <div>
    <h1>Todo App</h1>
    <AddTodo />
    <TodoList />
  </div>
)

const TodoApp = () =>  (
  <Provider store={store}>
    <App/>
  </Provider >
)

export default TodoApp;
