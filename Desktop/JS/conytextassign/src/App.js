import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import ContextProvider from './ContextProvider';

class App extends Component {
  render() {
    return (
      <ContextProvider>
      <div className="App">
      <Header/>
      <Body/>
      <Footer/>
      </div>
      </ContextProvider>
    );
  }
}

export default App;
