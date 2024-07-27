import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Home from './pages/Home';
import Albums from './pages/Albums';
import Photocards from './pages/Photocards';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/photocards" element={<Photocards />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
