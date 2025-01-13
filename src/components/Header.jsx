import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
      <div className="container">
        {/* Navbar Toggler */}
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Brand Logo */}
        <Link className="navbar-brand text-brand" to="/">
          Estate<span className="color-b">Agency</span>
        </Link>

        {/* Navbar Collapse */}
        <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/property">
                Property
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Button */}
        <button
          type="button"
          className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          onClick={toggleSearch}
        >
          <i className="bi bi-search"></i>
        </button>

        {/* Search Modal (Optional, based on your setup) */}
        {isSearchOpen && (
          <div className="search-modal">
            <input type="text" placeholder="Search..." />
            <button onClick={toggleSearch}>Close</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
