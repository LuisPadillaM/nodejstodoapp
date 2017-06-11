import React from 'react';
import TodoForm from "./todoForm";
import TodoItems from "./todoItems";
import Loader from "./Loader";
import { getTodo, addItem, deleteItem } from "../api/todoApi";

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
          return value.id !== id;
        })
      });
    }, function(error){
       console.log(error);
    })
  }

  // componentDidMount() {

  // }





  render(){
    return(
      <div>
        <h1>Todo App</h1>
        <TodoForm add={this.addItemTodo} />
        {(this.state.loading) ?
        <Loader /> :
        (this.state.error) ?
        <p> Error Loading Menu Items</p> :
        <TodoItems items={this.state.items} deleteItem={this.deleteItemTodo} />
        }
      </div>
    )
  }
}

export default TodoApp;
