import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavbarStyle.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* app Logo */}
        <Link to="/" className="navbar-logo">
          🎥 MovieBrowser
        </Link>

        {/* Navlinks */}
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navbar-link ${
                  isActive ? "text-orange-700" : "text-white"
                }  hover:text-orange-700`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `navbar-link ${
                  isActive ? "text-orange-700" : "text-white"
                }  hover:text-orange-700`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                `navbar-link ${
                  isActive ? "text-orange-700" : "text-white"
                }  hover:text-orange-700`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Favourites
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;