import { useState } from "react";
import {
  Home,
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
        {/* Top Section */}
        <div className="sidebar-header">
          <Box className="icon" />
          {isHovered && <span className="title">Reflexcy</span>}
        </div>

        {/* Menu Items */}
        <nav className="menu">
          {menuItems.map(({ icon: Icon, label }) => (
            <div key={label} className="menu-item">
              <Icon className="icon" />
              {isHovered && <span>{label}</span>}
            </div>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="bottom-section">
          <div className="menu-item">
            <Settings className="icon" />
            {isHovered && <span>Settings</span>}
          </div>
          <div className="menu-item">
            <ExternalLink className="icon" />
            {isHovered && <span>Logout</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

const menuItems = [
  { icon: Users, label: "User" },
  { icon: Box, label: "Projects" },
  { icon: Download, label: "Downloads" },
  { icon: Heart, label: "Favorites" },
  { icon: AtSign, label: "Notifications" },
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
    background-color: #f8f8f8; /* Updated to off-white */
    width: 55px; /* Reduced width */
    color: black; /* Adjusted text color for contrast */
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden; /* Prevents items from overflowing */
    box-shadow: 2px 0 5px rgba(0,0,0,0.1); /* Added shadow for depth */
  }
  .sidebar.expanded {
    width: 220px; /* Reduced expanded width */
  }
  .icon {
    font-size: 20px;
    transition: transform 0.2s ease; /* Icon rotation effect on hover */
  }
  .menu {
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }
  .menu-item {
    display: flex;
    align-items: center;
    padding: 15px 0; /* Increased spacing between options */
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth hover effects */
  }
  .menu-item span {
    margin-left: 10px;
    opacity: 0; /* Initially hidden */
    transition: opacity 0.3s ease;
  }
  .menu-item:hover {
    background-color: #dcdcdc; /* Slight hover effect */
    transform: scale(1.05); /* Slightly enlarge the menu item on hover */
  }
  .menu-item:hover .icon {
    transform: rotate(15deg); /* Icon rotates when hovering over menu item */
  }
  .menu-item:hover span {
    opacity: 1; /* Show the label on hover */
  }
  .sidebar-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px; /* Added space before Reflexcy text */
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .sidebar.expanded .title {
    opacity: 1; /* Make title visible when sidebar is expanded */
  }
  .bottom-section {
    margin-top: auto;
  }
  .menu-item:hover {
    background-color: #dcdcdc; /* Slight hover effect */
  }

  /* Hover effect */
  .sidebar-container:hover .sidebar {
    width: 220px; /* Reduced expanded width */
  }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
