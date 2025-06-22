import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import initialProjects from "./InitialProjects";
import { toast } from 'react-toastify';
import ENDPOINTS from "./RequestUrls";
import Sidebar from "./components/Sidebar";
const Favorites = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [projects, setProjects] = useState([]);

  let token = localStorage.getItem('access_token');
  useEffect(() => {
    const GetFavorites = async () => {
      try {
        const response = await fetch(ENDPOINTS.FavoriteList, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        if (response.ok) {
          const items = await response.json();
          const ids = items.map(item => item.templateId);
          const favoriteProjects = initialProjects.filter(project => ids.includes(project.id));
          setProjects(favoriteProjects);
        } else if (response.status == "401") {
          localStorage.removeItem('access_token');
          window.location.href = "/AuthPage";
        } else {
          const data = await response.json();
          toast.error('Error: ' + data.error.message);
        }
      } catch (error) {
        toast.error('Network Error: ' + error);
      }
    };

    GetFavorites();
  }, []);

  const [favoriteProjectId, setFavoriteProjectId] = useState(0);
  const [shouldMakeFavoriteRequest, setshouldMakeFavoriteRequest] = useState(false);
  useEffect(() => {
    if (!shouldMakeFavoriteRequest) return;
    const submitDataForm = async () => {
      try {
        const response = await fetch(ENDPOINTS.MakeFavorite + `?templateId=${favoriteProjectId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          },
        });
        if (response.ok) {
          window.location.reload();
        } else if (response.status == "401") {
          localStorage.removeItem('access_token');
          window.location.href = "/AuthPage";
        } else {
          const data = await response.data();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setshouldMakeFavoriteRequest(false); // reset trigger
      }
    };

    submitDataForm();
  }, [shouldMakeFavoriteRequest, favoriteProjectId]);

  const handleMakeFavoriteRequest = (projectId) => {
    setFavoriteProjectId(projectId);
    setshouldMakeFavoriteRequest(true);
  };

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
            Favorites
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {projects.map((project) => (
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
                  src={project.img}
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
                    top: "10px",
                    right: "10px",
                    backgroundColor: "#FF6347",
                    borderRadius: "50%",
                    padding: "5px 12px",
                    color: "white",
                    fontSize: "24px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onClick={() => handleMakeFavoriteRequest(project.id)}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#FF6347")
                  }
                >
                  ♡
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

export default Favorites;
