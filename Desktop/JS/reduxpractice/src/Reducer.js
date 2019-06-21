import React from 'react'  ////Action dispatch garne thau
import { combineReducers } from 'redux';  /// redux-- state management 
import CounterReducer from './CounterReducer'; //// combine reducer method of redux ---key,value pair

export default combineReducers({

  counter:CounterReducer   ///counter-key
  
  
})
