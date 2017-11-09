import React, { Component } from 'react';

import Todos from '../components/Todos.js';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App-Container clearfix">
        <div className="Header">
          Todos
        </div>
        <Todos />
      </div>
    );
  }
}

export default App;
