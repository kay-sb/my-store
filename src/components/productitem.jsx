import React from 'react';

function ProductItem({ product }) {
  return (
    <li className="border p-2 my-2">
      {product.name} - {product.price}
    </li>
  );
}

export default ProductItem;