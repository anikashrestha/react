import React, { Component } from 'react'
import { ThemeContext, LanguageContext } from '../ContextProvider';
import Switch from 'react-switch';

export default class Body extends Component {
  state={
    nepali:"naam",
    english:"Name"
  }
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
        {({language,toggleLanguage,languageChecked})=>(
            <>
            <LanguageContext.Consumer>
            <div className={`body ${language}`}>
            <Switch onChange={toggleLanguage} checked={languageChecked}/>             
            </div>
            </LanguageContext.Consumer>
            </>
        )}
    </ThemeContext.Consumer>
      </div>
    )
  }
}
