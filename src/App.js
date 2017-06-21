import React, { Component } from 'react';
import Headnav from './head1/Head.jsx';
import Home from './head1/Home.jsx'

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
