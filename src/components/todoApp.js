import React from 'react';
import TodoForm from "./todoForm";
import TodoItems from "./todoItems";
import Loader from "./Loader";
// import {list as mdcList } from 'material-components-web';
import { getTodo, addItem, deleteItem } from "../api/todoApiMongoose";
// import { getTodo, addItem, deleteItem } from "../api/todoApi";


class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false
    };
    this.addItemTodo = this.addItemTodo.bind(this);
    this.deleteItemTodo = this.deleteItemTodo.bind(this);
  }

  componentWillMount() {
      this.setState({loading: true})
      getTodo().then(
        (result) => {
          console.log(result);
          this.setState({ items: result, loading:false });
        },
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

  // componentDidMount() {

  // }

  render(){
    const {items, loading, error} = this.state;
    return(
      <div>
        <h1>Todo App</h1>
        <TodoForm add={this.addItemTodo} />
        {(loading) ?
        <Loader /> :
        (error) ?
        <p> Error Loading Menu Items</p> :
        (items.length) ?
        <TodoItems items={items} deleteItem={this.deleteItemTodo} />
        :
        <span> No todo tasks yet </span>
        }
      </div>
    )
  }
}

export default TodoApp;
