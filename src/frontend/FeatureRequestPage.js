import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const FeatureRequestPage = () => {
  const [featureRequest, setFeatureRequest] = useState({
    featureTitle: "",
    featureDescription: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeatureRequest((prevRequest) => ({ ...prevRequest, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle feature request
    alert("Feature request submitted");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <div
        style={{
          minHeight: "calc(100vh - 120px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#f4f7fc",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "700px",
            backgroundColor: "#ffffff",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            Request a Feature
          </h2>
          <form onSubmit={handleSubmit}>
            <label style={{ display: "block", marginBottom: "1rem" }}>
              Feature Title:
              <input
                type="text"
                name="featureTitle"
                value={featureRequest.featureTitle}
                onChange={handleInputChange}
                placeholder="Enter feature title"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  marginTop: "0.5rem",
                }}
                required
              />
            </label>
            <label style={{ display: "block", marginBottom: "1rem" }}>
              Feature Description:
              <textarea
                name="featureDescription"
                value={featureRequest.featureDescription}
                onChange={handleInputChange}
                placeholder="Describe the feature"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  marginTop: "0.5rem",
                  minHeight: "150px",
                }}
                required
              />
            </label>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "8px",
                backgroundColor: "#0057ff",
                color: "#fff",
                border: "none",
                fontSize: "1.1rem",
                cursor: "pointer",
              }}
            >
              Submit Feature Request
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeatureRequestPage;
