import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-aicha.png'; 

function Navbar() {
    return (
      <nav className="navbar-background flex items-center justify-between px-6 bg-cream sticky top-0 z-50">
        {/* Logo à gauche */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Aicha Logo" className="h-20 w-auto" />
        </Link>
  
        {/* Onglets carnet */}
        <div className="flex gap-4">
          <Link to="/my-story" className="bookmark-tab">My story</Link>
          <Link to="/projects" className="bookmark-tab">Projects</Link>
          <Link to="/dev-diary" className="bookmark-tab">Dev Diary</Link>
          <Link to="/contact" className="bookmark-tab">Contact</Link>
        </div>
      </nav>
    );
  }
  
  export default Navbar;