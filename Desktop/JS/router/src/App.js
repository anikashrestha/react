import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from './screen/Home';
import Search from './screen/Search';
import Profile from './screen/Profile';


class App extends Component {
  render() {
    return (
      <div className="navbar navbar-light" style="background-color: #e3f2fd;">
         <Link to='/'>Home</Link>
        <Link to='/search'>Search</Link>
        <Link to='/profile'>Profile</Link>
      
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/search' component={Search}/>  
        </Switch>        
      </div>
    );
  }
}

export default App;
