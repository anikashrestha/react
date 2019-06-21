import React, { Component } from 'react';
import { connect } from 'react-redux';
import { subtract, add } from './Actions';

class Counter extends Component {
    render() {
      console.log(this.props);
    return (
      <div>
        <button onClick={()=>this.props.add(2)}>
          Add
        </button>
        <h1>{this.props.counter.count}</h1>
        <button onClick ={this.props.subtract}>
          Subtract
        </button>
      </div>
    )
  }
}
////function which has argument:state
const mapStateToProps=(state)=>({
    counter:state.counter   
})
const mapActionToProps=(dispatch)=>({
    add:(data)=>dispatch(add(data)),
    subtract:()=>dispatch(subtract())
})
export default connect(mapStateToProps,mapActionToProps)(Counter);