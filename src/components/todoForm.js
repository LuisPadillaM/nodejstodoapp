import React from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input';
import  { Button } from 'react-toolbox/lib/button';

class TodoForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = { itemName: ''}
    this.submit = this.submit.bind(this);
  }

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  submit(e){
    e.preventDefault();
    let item = { "task": this.state.itemName} ;
    this.props.add(item);
  }

  render() {
    return(
    <form action="" onSubmit= {this.submit} method="POST" >
      <div className="form-first">
        <Input className="input_field" type="text" value ={this.state.itemName}  onChange={this.handleChange.bind(this, 'itemName')} label="New item" required />
        <Button icon="add" floating primary mini  type="submit" />
      </div>
    </form>
    )
  }
}

TodoForm.propTypes = {
  add: PropTypes.func.isRequired
}

export default TodoForm;



