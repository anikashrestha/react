import React, { Component } from 'react'
import  { ThemeContext } from '../ThemeProvider';

export default class Section extends Component {
  render() {
    return (
        <ThemeContext.Consumer>
        {({theme})=>(
            <>
            <div className={`section ${theme}`}>
               section               
            </div>
            </>
        )}
    </ThemeContext.Consumer>
    )
    
  }
}
