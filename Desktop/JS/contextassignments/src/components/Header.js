import React from 'react'
import { LanguageConsumer,updateLanguage } from '../LanguageProvider';

const Header=() =>{
  return (
    <LanguageConsumer>
        {({updateLanguage})}=>(
            <header>
               Language
                <select onChange={updateLanguage}>
                <option value="french">French </option>
                <option value="english">English </option>
                <option value="italian">Italian</option>
                </select>
            </header>
        )
    </LanguageConsumer>
  )
}
export default Header;