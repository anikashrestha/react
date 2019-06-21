import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Studentlist from './Studentlist';
import Hello from './Hello';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Studentlist/> */}
        <Hello/>
      </div>
    );
  }
}

export default App;
