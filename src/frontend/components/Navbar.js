import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/images/reflexcylogo.png";
import {
  FaSearch,
  FaHome,
  FaUser,
  FaBell,
  FaFileAlt,
  FaSync,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Reflexcy Logo" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link
          to="/why-us"
          className="nav-item"
          onClick={() => setMenuOpen(false)}
        >
          <span>Why Us?</span>
        </Link>
        <Link
          to="/features"
          className="nav-item"
          onClick={() => setMenuOpen(false)}
        >
          <span>Features</span>
        </Link>

        <Link
          to="/updates"
          className="nav-item"
          onClick={() => setMenuOpen(false)}
        >
          <span>Updates</span>
        </Link>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {/* Sign Up & Log In Buttons */}
        <Link
          to="/AuthPage"
          className="nav-button signup-btn"
          onClick={() => setMenuOpen(false)}
        >
          SignUp
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

/* ======= CSS (Inside the same file) ======= */
const styles = document.createElement("style");
styles.innerHTML = `
  .navbar {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #9CD1C9;
    padding: 12px 20px;
    font-family: Arial, sans-serif;
    position: relative;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
 
  }
  .search-bar {
      display: flex;
      align-items: center;
      background-color: #b9d8d3;
      padding: 5px 15px;
      border-radius: 25px;
      transition: all 0.3s ease-in-out;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      position: relative;
      overflow: hidden;
  }

  .search-bar input {
      border: none;
      background: transparent;
      outline: none;
      padding: 8px;
      width: 150px;
      transition: all 0.4s ease-in-out;
  }

  .search-bar:hover {
      background-color: #91c1bb;
  }

  .search-bar:focus-within {
      box-shadow: 0px 0px 12px rgba(0, 255, 170, 0.6);
  }

  .search-bar input:focus {
      width: 200px;
  }

  .nav-links {
    display: flex;
    gap: 20px;
  }

  .nav-links a {
      text-decoration: none;
      color: #333;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 5px 10px;
      border-radius: 20px;
      transition: color 0.3s ease, transform 0.2s ease;
  }

  .nav-links a:hover {
      color: white;
      transform: scale(1.1);
  }

  .auth-buttons button {
    padding: 5px 10px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }

  /* Profile Icon */
  .profile-icon i {
      font-size: 24px;
      color: #6e5c91;
  }

  .signup-btn {
    background: transparent;
    color: black;
    font-weight: bold;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: color 0.3s ease;
    text-decoration: none;
  }
  
  .signup-btn:hover {
    color: white;
  }
  
  .login-btn {
    background: white;
    color: black;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 25px;
    text-align: center;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;
    text-decoration: none;
  }
  
  .login-btn:hover {
    background: #a8c7c7;
    color: white;
  }
`;
document.head.appendChild(styles);
