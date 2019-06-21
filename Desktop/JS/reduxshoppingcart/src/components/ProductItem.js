import React from 'react'
import Product from './Product';

const ProductItem = ({product, onAddToCartClicked}) => (
    <div style = {{marginBottom: 20}}>
        <Product
            name={product.name}
            price={product.price}
            quantity={product.image}/>
        <button
            onClick={onAddToCartClicked}
            disabled={product.image > 0 ? '' : 'diabled'}>
            {product.image > 0 ? 'Add to Cart' : 'Sold Out'}
        </button>
    </div>
)

export default ProductItem;