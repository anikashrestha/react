import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person'
import Button from '@material-ui/core/Button';

class App extends Component {

  constructor(props){
    super(props)
    // this.updateState= this.updateState.bind(this);
    // this.toggleComponent=this.toggleComponent.bind(this); 
  }
  state={
    name:'Asim',
    showComponent:true
  }

  componentWillMount(){
    console.log('This is called before component  mount')
  }

  componentDidMount(){
    console.log('Thuis is called when component mount')
  }

  updateState=()=>{
      this.setState({name:'Sagun'})
  }

  toggleComponent=()=>{
    this.setState({showComponent:!this.state.showComponent})
  }
 
  render() {
    return (
      <div className="App">
      {this.state.showComponent && <Person name={this.state.name}/>}  { //CONDITIONAL RENDERINDG // 
      }
       
        <Button variant="contained" color="primary" onClick={this.updateState}>
          Update
        </Button>
        <Button variant="contained" color="primary" onClick={this.toggleComponent}>
          Toggle
        </Button>
      </div>
    );
  }
}

export default App;
