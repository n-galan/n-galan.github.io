import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../img/PB One no back.png';
import '../styles/navbar.css';

const Navbar = () => {
  const location = useLocation();
  let navbarClass = "navbar navbar-expand-lg ";

  switch (location.pathname) {
    case '/':
      navbarClass += "navbar-primary";  // Since you've defined .navbar-primary for home page
      break;
    case '/about':
      // If you have a specific class for 'about', use it here, otherwise use the default
      navbarClass += "navbar-default";
      break;
    case '/sports':
      navbarClass += "navbar-sports";
      break;
    case '/Tech':
      navbarClass += "navbar-tech";
      break;
    case '/music':
      navbarClass += "navbar-music";
      break;
    case '/boxing':
      navbarClass += "navbar-boxing";
      break;
    case '/Soccer':
      navbarClass += "navbar-soccer";
      break;
    case '/Chess':
      navbarClass += "navbar-chess";
      break;
    case '/Basketball':
      navbarClass += "navbar-basketball";
      break;
      case '/resources':
        navbarClass += "navbar-resources";
        break;
    //... add cases for other paths if needed
    default:
      navbarClass += "navbar-default";  // Your default navbar style
  }

  return (
    <nav className={`navbar navbar-expand-lg ${navbarClass}`}>
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          className="navbar-brand"
          style={{ width: '200px', height: '150px' }}
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="nav-link">Unbound Resources</Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Unbound Programs
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/sports" className="dropdown-item">Unbound Sports</Link>
              <Link to="/tech" className="dropdown-item">Unbound Tech</Link>
              <Link to="/music" className="dropdown-item">Unbound Music</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
