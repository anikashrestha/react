import React from 'react'
import {LanguageConsumer} from '../LanguageProvider'

const TranslatableText=(props=>(

    <LanguageConsumer>
        {({language})=>props.dictionary[language]}
    </LanguageConsumer>
))
export default TranslatableText;