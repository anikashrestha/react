import React, { Component } from 'react'
import "../app.css";
import propTypes from 'prop-types';
export default class Button extends Component {
  handleClick=()=>{
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className=[
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];
    return (
      <div  className={className.join("").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}  
  Button.propTypes={
    name:propTypes.string,
    orange:propTypes.bool,
    wide:propTypes.bool,
    clickHandler:propTypes.func,
  };


