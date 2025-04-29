import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import {
  Box,
  Users,
  Download,
  Heart,
  AtSign,
  Settings,
  ExternalLink,
} from "lucide-react";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="sidebar-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Sidebar */}
      <div className={`sidebar ${isHovered ? "expanded" : ""}`}>
        {/* Menu Items */}
        <nav className="menu">
          {menuItems.map(({ icon: Icon, label, path }) => (
            <Link to={path} key={label} className="menu-item">
              <Icon className="icon" />
              {isHovered && <span>{label}</span>}
            </Link>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="bottom-section">
          <Link to="/settings" className="menu-item">
            <Settings className="icon" />
            {isHovered && <span>Settings</span>}
          </Link>
          <Link to="/logout" className="menu-item">
            <ExternalLink className="icon" />
            {isHovered && <span>Logout</span>}
          </Link>
        </div>
      </div>
    </div>
  );
}

const menuItems = [
  { icon: Users, label: "User", path: "/edit" },
  { icon: Box, label: "Projects", path: "/projects" },
  { icon: Download, label: "Downloads", path: "/downloads" },
  { icon: Heart, label: "Favorites", path: "/favorites" },
  { icon: AtSign, label: "Notifications", path: "/contact" },
];

// CSS (Inline styles or Tailwind classes)
const styles = `
  .sidebar-container {
    display: flex;
    position: fixed;
    height: 100%;
    transition: all 0.3s ease;
  }
  .sidebar {
    margin-top: 75px;
    background-color: #f8f8f8;
    width: 55px;
    color: black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  }
  .sidebar.expanded {
    width: 220px;
  }
  .icon {
    font-size: 20px;
    transition: transform 0.2s ease;
  }
  .menu {
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }
  .menu-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-decoration: none; /* Remove the underline */
}

.menu-item span {
  margin-left: 10px;
  opacity: 1;
  transition: opacity 0.3s ease;
  color: black; /* Set text color to black */
}


.menu-item .icon {
  color: black; 
}


.menu-item:hover {
  background-color: #dcdcdc;
  transform: scale(1.05);
}

/* Hover state for icons */
.menu-item:hover .icon {
  transform: rotate(15deg);
}

.menu-item:hover span {
  opacity: 1;
}
  .sidebar-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .sidebar.expanded .title {
    opacity: 1;
  }
  .bottom-section {
    margin-top: auto;
  }
  .menu-item:hover {
    background-color: #dcdcdc;
  }

  .sidebar-container:hover .sidebar {
    width: 220px;
  }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
