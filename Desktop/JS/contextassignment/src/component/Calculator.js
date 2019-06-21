import React, { Component } from 'react'
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from './Calculate';

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.state={
            total:null,
            next:null,
            operation:null,
        };
    }
    handleClick=butttonName=>{
        this.setState(Calculate(this.state,butttonName));
    };
    render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total|| "0"}/>
        <ButtonPanel clickHandler={this.handleClick}/>
    </div>
    )
  }
}
