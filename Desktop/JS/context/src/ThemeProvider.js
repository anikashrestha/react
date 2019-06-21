import React, { Component,createContext } from 'react'

export const ThemeContext= createContext();
export default class ThemeProvider extends Component {
  state={
    theme:'light',
    checked: false
}
toggleTheme=()=>{
  this.state.theme==='light'?this.setState({theme:'dark',checked:true}):this.setState({theme:'light', checked: false})
}
  render() {
    return (
      <ThemeContext.Provider value={{
        theme:this.state.theme,
        toggleTheme: this.toggleTheme,
        checked:this.state.checked
      }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
