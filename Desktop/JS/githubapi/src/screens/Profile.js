import React, { Component } from 'react'

export default class Profile extends Component {
    componentDidMount(){
        console.log(this.props);
    }
  render() {
    return (
      <div>
        <h1>{this.props.location.state.username}</h1>
      </div>
    )
  }
}
