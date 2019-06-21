import React from 'react'

const initialState={
    count:0
}
function CounterReducer(state=initialState,action) {  ///(state,action)
    switch (action.type) {
        case 'ADD':
        console.log('data',action.payload)
            return{...state,count:state.count+action.payload}                
        case 'SUBTRACT':
            return{...state,count:state.count-1}            
        default:
            return state
    } 
}
export default CounterReducer;