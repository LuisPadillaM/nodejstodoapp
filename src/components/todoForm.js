import React from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input';
import  { Button } from 'react-toolbox/lib/button';
import DatePicker from 'react-toolbox/lib/date_picker';
import TimePicker from 'react-toolbox/lib/time_picker';

class TodoForm extends React.Component{

  constructor(props) {
    super(props);
    // this.props.setTodoName('');
    this.props.setTodoTime(new Date());
    this.state = { itemName: '', time: new Date()}
    this.submit = this.submit.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  formatDate = (value) => `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`;

  submit(e){
    e.preventDefault();
    let item = { "task": this.state.itemName, "time": this.state.time} ;
    console.log(item);
    this.props.add(item);
    this.setState({...this.state, itemName: ''});
  }

  render() {
    return(
    <form action="" onSubmit= {this.submit} method="POST" >
      <div className="form-first">
        <Input className="input_field" type="text" value ={this.state.itemName}  onChange={this.handleChange.bind(this, 'itemName')} label="New item" required />
        {/*<DatePicker label="Formatted date" inputFormat={this.formatDate} onChange={this.handleChange.bind(this, 'itemDate')} value={this.state.itemDate} />*/}
        <TimePicker format="ampm" label="Start at" onChange={this.handleChange.bind(this, 'time')} value={this.state.time}
      />
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



