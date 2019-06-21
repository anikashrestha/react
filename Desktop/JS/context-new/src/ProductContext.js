import React, { createContext,Component } from 'react'
import items from './items.json';

export const ProductContext=createContext();

export default class ProductProvider extends Component {
    state={
        items:[],
        addItems:[]
    }
    addItems=()=>{
        console.log('add items called')
    }
    componentWillMount(){
        console.log({items:items.items})
    }
  render() {
    return (
      <div>
        <ProductContext.Provider value={{state:this.state, addItems:this.addItems}}>
            {this.props.children}
        </ProductContext.Provider>
      </div>
    )
  }
}

