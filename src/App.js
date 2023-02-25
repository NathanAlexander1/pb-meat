import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from "./components/About";
import Contact from "./components/Contact";
import Merch from "./components/Merch"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Recipes from "./components/Recipes";

function App() {
  return (
    <main className="App">
      <Header />
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/merch" element={<Merch />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
