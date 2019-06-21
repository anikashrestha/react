import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Cards from './components/Cards';
import Footer from './components/Footer';
import ThemeProvider from './ThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ThemeProvider>
        <Header/>
        <Section/>
        <Cards/>
        <Footer/>
      </ThemeProvider>
      </div>
    );
  }
}

export default App;
