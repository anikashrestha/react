import React, { Component } from 'react'

export default class Home extends Component {

    navigate=()=>{
        this.props.history.push('/about');  
    }
  render() {
    return (
      <div className="home">
        <button onClick={this.navigate}>Home</button>
      </div>
    )
  }
}
