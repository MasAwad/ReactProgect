import React, { Component } from 'react';
import './App.css';
import Routing from './Routing/routing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>react project</h2>
        <Routing />
      </div>
    );
  }
}

export default App;
