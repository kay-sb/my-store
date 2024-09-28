import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/" className="text-white hover:text-blue-300 transition duration-200">Home</Link>
        </li>
        <li>
          <Link to="/products" className="text-white hover:text-blue-300 transition duration-200">Products</Link>
        </li>
        <li>
          <Link to="/cart" className="text-white hover:text-blue-300 transition duration-200">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;