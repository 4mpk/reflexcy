import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import tem1 from "./assests/images/template12.png";
import tem2 from "./assests/images/template10.png";
import tem3 from "./assests/images/template8.png";
import tem4 from "./assests/images/template9.png";
import Sidebar from "./components/Sidebar";
const Projects = () => {
  const [showAll, setShowAll] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);
  const projects = [
    { id: 1, title: "Project 1", image: tem1 },
    { id: 2, title: "Project 2", image: tem2 },
    { id: 3, title: "Project 3", image: tem3 },
    { id: 4, title: "Project 4", image: tem4 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = (buttonType) => {
    if (buttonType === "ALL") {
      setShowAll(true); // Show all projects
    } else if (buttonType === "Trash") {
      setShowAll(false); // Show only 2 projects for trash
    }
  };

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
      {localStorage.getItem('access_token') != null && (<Sidebar />)}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "110px",
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
              marginBottom: "30px",
              color: "#333",
            }}
          >
            Projects
          </h2>

          <div style={{ marginBottom: "20px" }}>
            <button
              onClick={() => handleButtonClick("ALL")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
              onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
              onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
            >
              ALL +
            </button>
            <button
              onClick={() => handleButtonClick("Trash")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#FF6347",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                marginLeft: "10px",
                cursor: "pointer",
                transition: "background-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#d9534f")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#FF6347")}
              onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
              onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
            >
              Trash
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {projects
              .slice(0, showAll ? projects.length : 2) // If "ALL" is selected, show all projects; if "Trash" is selected, show only 2
              .map((project) => (
                <div
                  key={project.id}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      opacity: "0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <h3 style={{ color: "white", fontSize: "1.5rem" }}>
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Footer Component */}
    </div>
  );
};

export default Projects;
