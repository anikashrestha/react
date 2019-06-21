import React, { Component } from 'react';
import './App.css';
import LanguageProvider from './LanguageProvider';
import Header from './components/Header';
import TranslatableText from './components/TranslatableText';

class App extends Component {
  render() {
    return (
      <div className="App">
      <LanguageProvider>
        <Header/>
        <h1>
        <TranslatableText dictionary={
        {french:"Bonjour",
        english:"Hello",
        italian:"Ciao"}
        }/>
        </h1>
      </LanguageProvider>
      </div>
    );
  }
}

export default App;
