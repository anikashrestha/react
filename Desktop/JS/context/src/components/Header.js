import React, { Component } from 'react'
import { ThemeContext } from '../ThemeProvider';
import Switch from 'react-switch';

export default class Header extends Component {
    
  render() {
    return (      
        <ThemeContext.Consumer>
            {({theme,toggleTheme,checked})=>(
                <>
                <div className={`${theme}`}>
                   {theme}      {/*  //{context.value} */}
                   <Switch onChange={toggleTheme} checked={checked}/>
                </div>
                </>
            )}
        </ThemeContext.Consumer>
     
    )
  }
}
