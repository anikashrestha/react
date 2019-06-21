import React, { Component,updateLanguage } from 'react'

const LanguageContext=createContext();
export const LanguageConsumer=LanguageContext.Consumer;
 class LanguageProvider extends Component {
  state = {
    language: "french"
  };

  updateLanguage = (e) => this.setState({ language: e.target.value });

  render() {
    return (
      <LanguageContext.Provider 
      value={{
        language:this.state.language,
        updateLanguage:this.updateLanguage
      }}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
export default LanguageProvider;
