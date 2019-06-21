import React, { Component } from 'react'
import { ThemeContext } from '../ContextProvider';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
        {({theme})=>(
            <>
            <div className={`footer ${theme}`}>
               footer               
            </div>
            </>
        )}
    </ThemeContext.Consumer>
    )
      </div>
    )
  }
}
