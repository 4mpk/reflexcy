import React, { useState, useEffect } from "react";
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
import ENDPOINTS from "../RequestUrls";

const Navbar = (props) => {
const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(props.imageUrl !== undefined ? props.imageUrl : null);

  useEffect(() => {
    if (props.imageUrl !== undefined) {
      setProfileImage(props.imageUrl);
    }
  }, [props.imageUrl]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(ENDPOINTS.GetProfileImage, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          },
        });
        if (response.ok) {
          const result = await response.json();
          setProfileImage(result.url);
        } else if (response.status == "401") {
          localStorage.removeItem('access_token');
        } else {
          const data = await response.data();
        }
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
    if (localStorage.getItem('access_token') !== null) {
      fetchData();
    }
  }, []);
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
        <input type="text" placeholder="Search..." onChange={props.onChange} />
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

      {localStorage.getItem('access_token') == null && (
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link
            to="/AuthPage"
            className="nav-button signup-btn"
            onClick={() => setMenuOpen(false)}
          >
            SignUp
          </Link>
        </div>
            to="/AuthPage"
            className="nav-button signup-btn"
            onClick={() => setMenuOpen(false)}
          >
            SignUp
          </Link>
        </div>
      )}


      {localStorage.getItem('access_token') !== null && (
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link
            to="/Edit"
            className="nav-button signup-btn"
            onClick={() => setMenuOpen(false)}
          >
            {profileImage !== null && (
              <img
                src={profileImage}
                alt="Profile"
                className="profileImage"
                style={{ borderRadius: "50%" }}
              />
            )}
            {profileImage === null && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/* ======= CSS (Inside the same file) ======= */
const styles = document.createElement("style");
styles.innerHTML = `
  .navbar {
    z-index: 201;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #9CD1C9;
    padding: 12px 20px;
    font-family: Arial, sans-serif;
    position: fixed;
    width: 100%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
 
  }
  .profileImage {
    width: 40px;
    height: 40px;
    borderRadius: 50% !important;
    objectFit: cover;
    border: 2px solid #fff;
    boxShadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
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
      box-shadow: none;
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
    margin: 0px 30px;
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
