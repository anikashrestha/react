import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Error from './screens/Error';
import Navbar from './components/Navbar';
import {Route,Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
        <Route path= '/' exact component={Home}/>
        <Route path= '/about' component={About}/>
        <Route path= '/contact' component={Contact}/>
        <Route component={Error}/>
        </Switch>
      </div>
    );
  }
}

export default App;
