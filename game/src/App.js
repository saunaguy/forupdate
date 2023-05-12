import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Brick from './BrickBreaker';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import './App.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Brick" element={<Brick />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;