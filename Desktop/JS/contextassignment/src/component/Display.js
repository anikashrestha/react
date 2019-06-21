import React, { Component } from 'react'
import propTypes from 'prop-types';
import '../app.css'
export default class Display extends Component {
  render() {
    return (
      <div className="component-display">
      <div>{this.props.value}</div>
      </div>
    );
  }
}
Display.propTypes={
  value:propTypes.string,
}
