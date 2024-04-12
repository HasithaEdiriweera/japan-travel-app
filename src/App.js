import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Season from './components/Season';
import Itinerary from './components/Itinerary';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/season/:seasonName" element={<Season />} />
        <Route path="/itinerary" element={<Itinerary />} />  {/* Route to Itinerary component */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
