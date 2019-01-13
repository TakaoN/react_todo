import React, { Component } from 'react';

class ToDoItem extends Component {

  render(){
    return (
      <li>
        <span>{this.props.text}</span>
        <span onClick={this.props.deleteTodo}>[x]</span>
      </li>
    );
  }
}

export default ToDoItem;
