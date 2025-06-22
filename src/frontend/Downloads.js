import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import initialProjects from "./InitialProjects";
import { toast } from 'react-toastify';
import ENDPOINTS from "./RequestUrls";
import Sidebar from "./components/Sidebar";
const Downloads = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  // const [projects, setProjects] = useState(initialProjects);
  const [forms, SetForms] = useState([]);

  let token = localStorage.getItem('access_token');
  useEffect(() => {
    const GetDownloads = async () => {
      try {
        const response = await fetch(ENDPOINTS.Downloads, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        if (response.ok) {
          const items = await response.json();
          const ids = items.map(item => ({
            id: item.id,
            project: initialProjects.find(e => e.id == item.projectId)
          }));
          SetForms(ids);
          // const downloadProjects = initialProjects.filter(project => ids.includes(project.id));
          // setProjects(downloadProjects);
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

    GetDownloads();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  const handleClick = async (formId) => {
    try {
      const response = await fetch(ENDPOINTS.DownloadFile + `?dataFormId=${formId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;

        // Optionally get filename from headers
        const contentDisposition = response.headers.get("Content-Disposition");
        let fileName = "downloaded-file";
        if (contentDisposition && contentDisposition.includes("filename=")) {
          fileName = contentDisposition
            .split("filename=")[1]
            .replace(/"/g, "")
            .trim();
        }
        a.download = fileName;

        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(downloadUrl);

        toast.success('File downloaded successfully!');
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
  }
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
            Downloads
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: forms.length > 0 ? "repeat(auto-fill, minmax(200px, 1fr))" : "none",
              gap: "20px",
            }}
          >
            {forms.length > 0 && forms.map((form) => (
              <div
                key={form.id}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={form.project.img}
                  alt={form.project.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onClick={() => handleClick(form.id)}
                />
              </div>
            ))}

            {forms.length == 0 && (
              <p style={{ color: "#666", fontSize: "16px" }}>
                No downloads available at the moment.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer /> {/* Footer Component */}
    </div>
  );
};

export default Downloads;
