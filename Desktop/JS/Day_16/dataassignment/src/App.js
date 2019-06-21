import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListofData from '../src/classcomp/ListofData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListofData/>
      </div>
    );
  }
}

export default App;
