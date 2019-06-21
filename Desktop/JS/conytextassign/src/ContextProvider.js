import React, { Component,createContext } from 'react'

export const LanguageContext=createContext();
export const ThemeContext=createContext();
export default class ContextProvider extends Component {
  state ={
      theme:'light',
      checked:false,
      language:'english',
      languageChecked:false,
  }
  toggleTheme=()=>{
    this.state.theme==='light'?this.setState({theme:'dark',checked:true}):this.setState({theme:'light', checked: false})
  }
  toggleLanguage=()=>{
    this.state.language==='english'?this.setState({language:'nepali',languageChecked:true}):this.setState({language:'english',languageChecked:false})
  }
  
    render() {
    return (
      <div>
        <ThemeContext.Provider value={{
        theme:this.state.theme,
        toggleTheme: this.toggleTheme,
        checked:this.state.checked
      }}>
      <LanguageContext.Provider value={{
        language:this.state.language,
        languageChecked:this.state.languageChecked,
        toggleLanguage:this.toggleLanguage
      }}>
        {this.props.children}
        </LanguageContext.Provider>
      </ThemeContext.Provider>
      </div>
    )
  }
}
