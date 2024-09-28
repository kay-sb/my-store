import React from 'react';
import ProductItem from './productitem';

const products = [
  { id: 1, name: 'Product 1', price: '$20' },
  { id: 2, name: 'Product 2', price: '$30' },
  { id: 3, name: 'Product 3', price: '$40' },
];

function ProductList() {
  return (
    <ul>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;