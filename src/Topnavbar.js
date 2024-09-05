import React from 'react';
import { Link } from 'react-router-dom';
import './Topnavbar.css';

function Topnavbar() {
  return (
    <nav className="top-nav">
      <div className="nav-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/mountaineering" className="nav-link">Mountaineering</Link>
        <Link to="/trailrunning" className="nav-link">Trail Running</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}

export default Topnavbar;