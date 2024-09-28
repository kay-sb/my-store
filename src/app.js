import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* می‌توانید صفحات دیگر را اینجا اضافه کنید */}
            <Route path="/products" element={<div>Products Page</div>} />
            <Route path="/cart" element={<div>Cart Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;