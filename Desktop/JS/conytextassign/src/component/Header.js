import React, { Component } from 'react'
import { ThemeContext } from '../ContextProvider';
import Switch from 'react-switch';
export default class Header extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
            {({theme,toggleTheme,checked})=>(
                <>
                <div className={`${theme}`}>
                   {theme}    
                   <Switch onChange={toggleTheme} checked={checked}/>
                </div>
                </>
            )}
        </ThemeContext.Consumer>
     
      </div>
    )
  }
}
