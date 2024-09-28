import React from 'react';
import ProductList from '../components/productlist';

function Home() {
  return (
    <div>
      <h2 className="text-xl">Products</h2>
      <ProductList />
    </div>
  );
}

export default Home;