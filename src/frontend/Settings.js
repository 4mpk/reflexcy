import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ENDPOINTS from "./RequestUrls";
import { toast } from 'react-toastify';
const UserSettingsPage = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");
  const [timeZone, setTimeZone] = useState("UTC");

  // Newsletter settings states
  const [receiveCustomerCare, setReceiveCustomerCare] = useState(false);
  const [receiveOffers, setReceiveOffers] = useState(false);
  const [receiveUpdates, setReceiveUpdates] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleDelete = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action is permanent."
      )
    ) {
      try {
      const response = await fetch(ENDPOINTS.DeleteAccount, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          },
      });
      if (response.ok) {
        toast.success('Account deleted.');
        setTimeout(() => {
          localStorage.removeItem('access_token');
          window.location.href="/";
        }, 3000);
      } else {
        const data = await response.json();
        toast.error('Error: ' + data.error.message);
      }
    } catch (error) {
      toast.error('Network Error: ' + error);
    }
    }
  };

  const handleSave = () => {
    console.log("Saved settings:", { theme, language, timeZone });
    alert("Settings saved!");
  };

  const layoutStyle = {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: theme === "light" ? "#f4f4f4" : "#121212",
    color: theme === "light" ? "#000" : "#f4f4f4",
    paddingTop: "75px"
  };

  const sidebarStyle = {
    width: "250px",
    backgroundColor: theme === "light" ? "#fff" : "#1f1f1f",
    padding: "2rem",
    borderRight: theme === "light" ? "1px solid #ddd" : "1px solid #333",
  };

  const mainStyle = {
    flex: 1,
    padding: "3rem",
  };

  const sectionStyle = {
    marginBottom: "2.5rem",
    backgroundColor: theme === "light" ? "#fff" : "#1f1f1f",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow:
      theme === "light"
        ? "0 2px 8px rgba(0,0,0,0.1)"
        : "0 2px 8px rgba(255,255,255,0.05)",
  };

  const labelStyle = {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "1rem",
    display: "block",
  };

  const toggleContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "1rem",
  };

  const toggleSwitchStyle = {
    position: "relative",
    width: "50px",
    height: "26px",
    backgroundColor: "#ccc",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const toggleThumbStyle = (on) => ({
    position: "absolute",
    top: "2px",
    left: on ? "24px" : "2px",
    width: "22px",
    height: "22px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    transition: "left 0.3s",
  });

  const selectStyle = {
    padding: "0.7rem",
    borderRadius: "6px",
    width: "100%",
    fontSize: "1rem",
    backgroundColor: theme === "light" ? "#f9f9f9" : "#333",
    color: theme === "light" ? "#333" : "#f5f5f5",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "0.8rem 1.5rem",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#0057ff",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "1rem",
    transition: "background-color 0.3s",
  };

  const dangerButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#e53935",
  };

  const feedbackSectionStyle = {
    marginBottom: "2rem",
  };

  const subSectionTitleStyle = {
    fontSize: "1.3rem",
    marginBottom: "1rem",
    color: theme === "light" ? "#333" : "#fff",
  };

  const buttonGroupStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  return (
    <>
      <Navbar />
      <div style={layoutStyle}>
        {/* Sidebar */}
        <div style={sidebarStyle}>
          <h2 style={{ marginBottom: "2rem", fontSize: "1.4rem" }}>Settings</h2>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2rem" }}>
            <li style={{ fontWeight: "bold" }}>User Settings</li>
            <li>Appearance</li>
            <li>Language</li>
            <li>Time Zone</li>
            <li>Newsletter Settings</li>
            <li>Support & Feedback</li>
            <li>Danger Zone</li>
          </ul>
        </div>

        {/* Main content */}
        <div style={mainStyle}>
          <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
            User Settings
          </h1>

          {/* Appearance */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Appearance</label>
            <div style={toggleContainerStyle}>
              <div
                style={{
                  ...toggleSwitchStyle,
                  backgroundColor: theme === "dark" ? "#333" : "#ccc",
                }}
                onClick={toggleTheme}
                role="switch"
                aria-checked={theme === "dark"}
              >
                <div style={toggleThumbStyle(theme === "dark")}></div>
              </div>
              <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
            </div>
          </div>

          {/* Language */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={selectStyle}
            >
              <option value="english">English</option>
              <option value="arabic">Arabic</option>
              <option value="turkish">Turkish</option>
            </select>
          </div>

          {/* Newsletter Settings */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Notifications Settings</label>
            <div style={toggleContainerStyle}>
              <div
                style={{
                  ...toggleSwitchStyle,
                  backgroundColor: receiveCustomerCare ? "#66bb6a" : "#ccc",
                }}
                onClick={() => setReceiveCustomerCare(!receiveCustomerCare)}
                role="switch"
                aria-checked={receiveCustomerCare}
              >
                <div style={toggleThumbStyle(receiveCustomerCare)}></div>
              </div>
              <span>Receive customer care emails</span>
            </div>

            <div style={toggleContainerStyle}>
              <div
                style={{
                  ...toggleSwitchStyle,
                  backgroundColor: receiveOffers ? "#66bb6a" : "#ccc",
                }}
                onClick={() => setReceiveOffers(!receiveOffers)}
                role="switch"
                aria-checked={receiveOffers}
              >
                <div style={toggleThumbStyle(receiveOffers)}></div>
              </div>
              <span>Receive offers and campaigns</span>
            </div>

            <div style={toggleContainerStyle}>
              <div
                style={{
                  ...toggleSwitchStyle,
                  backgroundColor: receiveUpdates ? "#66bb6a" : "#ccc",
                }}
                onClick={() => setReceiveUpdates(!receiveUpdates)}
                role="switch"
                aria-checked={receiveUpdates}
              >
                <div style={toggleThumbStyle(receiveUpdates)}></div>
              </div>
              <span>Receive updates and news</span>
            </div>
          </div>

          {/* Time Zone */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Time Zone</label>
            <select
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
              style={selectStyle}
            >
              <option value="UTC">UTC</option>
              <option value="GMT">GMT</option>
              <option value="EST">EST</option>
            </select>
          </div>

          {/* Support & Feedback */}
          <div style={sectionStyle}>
            <h2
              style={{
                fontSize: "1.8rem",
                marginBottom: "1.5rem",
                fontWeight: "600",
                color: theme === "light" ? "#333" : "#fff",
              }}
            >
              Support & Feedback
            </h2>

            {/* Contact & Report Section */}
            <div style={feedbackSectionStyle}>
              <h3 style={subSectionTitleStyle}>Contact & Report</h3>
              <div style={buttonGroupStyle}>
                <Link to="/ContactSupport">
                  <button style={buttonStyle}>Contact Support</button>
                </Link>
                <Link to="/ReportBug">
                  <button style={buttonStyle}>Report a Bug</button>
                </Link>
              </div>
            </div>

            {/* Feature Requests & Feedback Section */}
            <div style={feedbackSectionStyle}>
              <h3 style={subSectionTitleStyle}>Feature Requests & Feedback</h3>
              <div style={buttonGroupStyle}>
                <Link to="/FeatureRequest">
                  <button style={buttonStyle}>Request a Feature</button>
                </Link>
                <Link to="/Feedback">
                  <button style={buttonStyle}>
                    Submit Feedback / Suggestions
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Danger Zone</label>
            <button style={dangerButtonStyle} onClick={handleDelete}>
              Delete My Account
            </button>
          </div>

          {/* Save Button */}
          <button style={buttonStyle} onClick={handleSave}>
            Save Settings
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserSettingsPage;
