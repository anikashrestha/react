import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import User from './screens/User';
import Details from './screens/Details';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={User}/>
          <Route path='/details' component={Details}/>
        </Switch>
      </div>
    );
  }
}

export default App;
