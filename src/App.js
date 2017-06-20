import React, { Component } from 'react';
import Headnav from './head1/head.js';
import Home from './head1/home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headnav></Headnav>
        <Home></Home>
      </div>
    );
  }
}

export default App;
