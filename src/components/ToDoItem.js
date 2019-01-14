import React, { Component } from 'react';

class ToDoItem extends Component {

  render(){
    return (
      <li>
        <input type="checkbox" checked={this.props.isDone} onChange={this.props.toggleCheckBox}/>
        <span className={this.props.isDone ? 'done' : ''}>{this.props.text}</span>
        <span className="cmd" onClick={this.props.deleteTodo}>[x]</span>
      </li>
    );
  }
}

export default ToDoItem;
