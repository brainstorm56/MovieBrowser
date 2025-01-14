import { Link, NavLink } from "react-router-dom";
import "./NavbarStyle.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* app Logo */}
        
        <Link to="/" className="navbar-logo">
          🎥 MovieBrowser
        </Link>

        {/* Navlinks */}

        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navbar-link ${
                  isActive ? "text-orange-700" : "text-white"
                }  hover:text-orange-700`
              }
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
                }  hover:text-orange-700 `
              }
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
                }  hover:text-orange-700 `
              }
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
