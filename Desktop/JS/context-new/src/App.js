import React from 'react';
import './App.css';
import Shoppingcart from './containers/Shoppingcart';
import ProductContext from './ProductContext';

export default()=> {
  return(
    <ProductContext>
      <Shoppingcart/>
    </ProductContext>
    
  )
}
