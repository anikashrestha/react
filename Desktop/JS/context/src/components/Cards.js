import React, { Component } from 'react'
import { ThemeContext } from '../ThemeProvider';

export default class Cards extends Component {
  render() {
    return (
        <ThemeContext.Consumer>
        {({theme})=>(
            <>
            <div className={`cards ${theme}`}>
               cards               
            </div>
            </>
        )}
    </ThemeContext.Consumer>
    )
    }
}
