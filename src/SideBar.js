import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // We'll style the sidebar later

function SideBar() {

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/mountaineering">Mountaineering</Link>
        </li>
        <li>
          <Link to="/trailrunning">TrailRunning</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;