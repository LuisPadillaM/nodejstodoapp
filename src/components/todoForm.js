import React from 'react';
import PropTypes from 'prop-types';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class TodoForm extends React.Component{

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e){
    let item = { "task": this.itemInput.value} ;
    e.preventDefault();
    this.props.add(item);
    this.itemInput.value = "";
  }

  render() {
    return(
    <form action="" onSubmit= {this.submit}>
      <input type="text" ref={ (input) => {this.itemInput = input }} name="item" placeholder="Add new item.." required />
      <button type="submit">Add item</button>
    </form>
    )
  }
}

TodoForm.propTypes = {
  add: PropTypes.func.isRequired
}

export default TodoForm;



