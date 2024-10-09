import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/Sidebar";
import { TextParallaxContentExample } from "./pages/Home";
import Sales from "./pages/Sales";

function App() {
  return (
    <Router>
      <div className="App flex">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<TextParallaxContentExample />} />
            <Route path="/Sales" element={<Sales />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
