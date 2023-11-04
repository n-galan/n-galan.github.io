import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';  // Assuming Navbar is located here
// Import other components/pages as needed
import Home from './Home';
import About from './About';
import Sports from './Sports';
import Tech from './Tech';
import Music from './Music';
import Contact from './Contact';
import Footer from './Footer'; // Assuming Footer.js is in the same directory



// Your variable overrides go here, e.g.:
// $h1-font-size: 3rem;
 import "bootswatch/dist/minty/bootstrap.min.css";

 function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/Tech" element={<Tech />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}





// Optional: Include a simple 404 Not Found component
function NotFound() {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default App;
