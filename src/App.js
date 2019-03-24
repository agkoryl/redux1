import React, { Component } from 'react';
import './App.css';

import Counter from './Counter/Counter';
import TodoList from './Todo/Todo';



class App extends Component {
  render() {
    return (
      <div className="App">
    <h2>REDUX COUNTER</h2>
    <Counter></Counter>
    <div style={{display: "flex", justifyContent: "center"}}>
    <TodoList></TodoList>
    </div>
      </div>
    );
  }
}

export default App;
