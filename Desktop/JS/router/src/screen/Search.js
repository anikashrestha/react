import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
       <input type="text" className="searchform" name="name" placeholder="Input the name" onChange={this.props.handleChange}/>
      </div>
    )
  }
}
