import React from 'react';
import TodoForm from "../todoForm";
import { connect } from "react-redux";
import {addTodos, fillTodoName,  fillTodoTime} from "../../actions/actionCreator";

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTodoName: (name) => {
      dispatch(fillTodoName(name))
    },
    setTodoTime: (time) => {
      dispatch(fillTodoTime(time))
    },
    add: (item) => {
      dispatch(addTodos(item))
    }
  }
}

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)

export default AddTodo;
