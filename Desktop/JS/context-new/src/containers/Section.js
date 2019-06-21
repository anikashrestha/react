import React, {useContext} from 'react';
import '../items.json';
import { ProductContext } from '../ProductContext.js';
import ItemCard from '../components/ItemCard.js';

export default function Section() {
  const value = useContext(ProductContext);
  const {items} = value.state;
  return (
    <div className="section">
      {items.map((item)=><ItemCard item={item}/>)}
    </div>
  )
}