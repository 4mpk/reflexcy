import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Downloads = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#F0F4F8",
        fontFamily: "'Poppins', sans-serif",
        opacity: pageLoaded ? 1 : 0,
        transition: "opacity 0.8s ease-in",
      }}
    >
      <Navbar /> {/* Navbar Component */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "40px",
          paddingBottom: "30px",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "15px",
            boxShadow:
              "8px 8px 20px rgba(0, 0, 0, 0.1), -8px -8px 20px rgba(255, 255, 255, 0.1)",
            padding: "40px",
            width: "100%",
            maxWidth: "500px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "15px", // Adjusted for better spacing
              color: "#333",
            }}
          >
            Downloads
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "16px",
              marginBottom: "30px", // Added some space below the text
            }}
          >
            All your downloaded assets will be shown here... once you get your
            hands on them!
          </p>

          {/* No images to display */}
          <p style={{ color: "#666", fontSize: "16px" }}>
            No downloads available at the moment.
          </p>
        </div>
      </div>
      <Footer /> {/* Footer Component */}
    </div>
  );
};

export default Downloads;
