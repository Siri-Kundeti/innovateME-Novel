import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/file" className="nav-link">File</Link>
        </li>
        <li className="nav-item">
          <Link to="/edit" className="nav-link">Edit</Link>
        </li>
        <li className="nav-item">
          <Link to="/view" className="nav-link">View</Link>
        </li>
        <li className="nav-item">
          <Link to="/others" className="nav-link">Others</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
