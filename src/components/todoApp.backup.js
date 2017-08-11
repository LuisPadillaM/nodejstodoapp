import { React, Component } from 'react';
import TodoForm from "./todoForm";
import TodoItems from "./todoItems";
import Loader from "./Loader";
import { Provider } from "react-redux";
require("../styles/scss/main.scss");
import { getTodo, addItem, deleteItem, updateItem } from "../api/todoApiMongoose";
// import { getTodo, addItem, deleteItem, updateItem } from "../api/todoApi";
import {addTodo, removeTodo} from "../actions/actionCreator";
import store  from  "../store";

// const store = storeFactory;


class AddTodo extends Component {

  componentDidMound(){
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    const {store} = this.context;
    const state = store.getState()
    return (
      <TodoForm add={ () => store.dispatch(addTodo("1", "test"))} />
    )
  }
}

class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false
    };
    this.addItemTodo = this.addItemTodo.bind(this);
    this.deleteItemTodo = this.deleteItemTodo.bind(this);
    this.editItemTodo = this.editItemTodo.bind(this);
  }

  componentWillMount() {
      this.setState({loading: true})
      getTodo().then(
        (result) => this.setState({
            items: result,
            loading:false
        }),
        (error) => {
        // Promise was rejected
        console.error(error);
        this.setState({
          loading: false,
          error});
        }

      );
  }

  addItemTodo(item){
    addItem(item).then((response) => {
      this.setState({
        items: [...this.state.items, response]
      });
    }, function(error){
      console.log(error);
    });
  }

  deleteItemTodo(e, id){
    e.preventDefault();
    deleteItem(id).then(() =>{
      this.setState({
        items: this.state.items.filter((value) =>{
          return value._id !== id;
        })
      });
    }, function(error){
       console.log(error);
    })
  }

  editItemTodo(id, ind, item, cb){

    let itemEdited = { "task": item} ;
    updateItem(id, itemEdited).then((response) =>{
      if(response){
        this.setState({
          items: this.state.items.map((value,  index) =>{
            return (index === ind) ? Object.assign(value, itemEdited) : value
          })
        });
         if(cb) cb();
      }
    }, function(error){
       console.log(error);
    })
  }

  // componentDidMount() {

  // }

  render(){
    const {items, loading, error} = this.state;
    return(
      <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <TodoForm add={this.addItemTodo} />
        {(loading) ?
        <Loader /> :
        (error) ?
        <p> Error Loading Menu Items</p> :
        (items.length) ?
        <TodoItems items={items} deleteItem={this.deleteItemTodo} editItem={this.editItemTodo} />
        :
        <span> No todo tasks yet </span>
        }
      </div>
      </Provider >
    )
  }
}

export default TodoApp;
