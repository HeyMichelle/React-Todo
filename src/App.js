import React, { useState, Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// import React from 'react';


class App extends React.Component {
  // Constructor with state
  constructor () {
    super();
    this.state = {

    };
  }

  // class methods to update state
    
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>~ Daily To-do's ~</h2>
        <TodoForm />
      </div>
    );
  }
}

/*
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      groceries
    }

  render() {
    return (
      <div>
        <h2>~ Daily To-do's ~</h2>
      </div>
    );
  }
}
*/

export default App;
