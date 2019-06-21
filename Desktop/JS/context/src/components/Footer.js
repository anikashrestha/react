import React, { Component } from 'react'
import { ThemeContext } from '../ThemeProvider';

export default class Footer extends Component {
  render() {
    return (
        <ThemeContext.Consumer>
        {({theme})=>(
            <>
            <div className={`footer ${theme}`}>
               foter               
            </div>
            </>
        )}
    </ThemeContext.Consumer>
    )
  }
}
