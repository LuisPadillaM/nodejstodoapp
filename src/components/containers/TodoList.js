import React from 'react';
import TodoForm from "../todoForm";
import { connect } from "react-redux";
import {addTodo} from "../../actions/actionCreator";

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (id, task) => {
      dispatch(addTodo(id, task))
    }
  }
}

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)

export default AddTodo;
