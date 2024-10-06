import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { TextParallaxContentExample } from './components/cart';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main >
          <Header />
          <TextParallaxContentExample />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;