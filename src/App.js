import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        { id: 1, text: "dataを表示する" },
        { id: 2, text: "簡単な構成をしる" }
      ],
    };
  };
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map((item) =>{
            return( <li>{item.text}</li>)
          })}
        </ul>
      </div>
    );
  }
}

export default App;
