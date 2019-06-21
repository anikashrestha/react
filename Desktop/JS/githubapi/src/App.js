import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import Search from './screens/Search';
import Profile from './screens/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/"><button type="button" className="btn btn-outline-secondary">Home</button></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/about"><button type="button" className="btn btn-outline-secondary">About</button></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search"><button className="btn btn-outline-info" type="submit">Search</button></Link>
          </li>
        </ul>
      </div>
      </nav>
      <Switch>
       <Route path="/"exact={true} component={Home}></Route>
       <Route path="/about" component={About}></Route>
       <Route path="/search" component={Search}></Route>
       <Route path="/profile" component={Profile}></Route>

       </Switch>
      </div>
    );
  }
}

export default App;
