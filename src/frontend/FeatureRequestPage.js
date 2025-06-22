import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ENDPOINTS from "./RequestUrls";
import { toast } from 'react-toastify';
import Sidebar from "./components/Sidebar";
const Spinner = () => (
  <svg
    style={{ marginBottom: "1rem" }}
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="none"
  >
    <circle
      cx="25"
      cy="25"
      r="20"
      stroke="#007bff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="60"
      strokeDashoffset="0"
      transform="rotate(-90 25 25)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

const FeatureRequestPage = () => {
  const navigate = useNavigate();

  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
    befefit: "",
    attachment: null,
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState(5);
  const [cancelRedirect, setCancelRedirect] = useState(false);

  useEffect(() => {
    let timer;
    if (showThankYou && !cancelRedirect) {
      timer = setInterval(() => {
        setRedirectCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            navigate("/");
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showThankYou, cancelRedirect, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormDetails((prev) => ({ ...prev, attachment: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = new FormData();
      for (const key in formDetails) {
        if (formDetails.hasOwnProperty(key)) {
          body.append(key, formDetails[key]);
        }
      }
      const response = await fetch(ENDPOINTS.RequestFeature, {
        method: 'POST',
        body: body
      });
      if (response.ok) {
        toast.success('Form submitted successfully!');
        setShowThankYou(true);
      } else {
        const data = await response.json();
        toast.error('Error: ' + data.error.message);
      }
    } catch (error) {
      toast.error('Network Error: ' + error);
    }

    // You can add your submission logic here (e.g., API call)
  };

  const handleCancelRedirect = () => {
    setCancelRedirect(true);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      {localStorage.getItem('access_token') != null && (<Sidebar />)}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 120px)",
          padding: "2rem",
          backgroundColor: "#f4f7fc",
          paddingTop: "110px"
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
          {showThankYou ? (
            <div style={{ textAlign: "center" }}>
              <Spinner />
              <h3
                style={{
                  color: "#28a745",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                🚀 Thank you for your feature request!
              </h3>
              {!cancelRedirect ? (
                <p>
                  Redirecting to settings in{" "}
                  <strong>{redirectCountdown}</strong> seconds...
                </p>
              ) : (
                <p style={{ color: "gray" }}>Redirect cancelled.</p>
              )}
              {!cancelRedirect && (
                <button
                  onClick={handleCancelRedirect}
                  style={{
                    marginTop: "1rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "6px",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Cancel Redirect
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Feature Title */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  Feature Title:
                </label>
                <input
                  type="text"
                  name="title"
                  value={formDetails.title}
                  onChange={handleInputChange}
                  placeholder="Enter feature title"
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    fontSize: "1rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    boxSizing: "border-box",
                  }}
                  required
                />
              </div>

              {/* Feature Description */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  Feature Description:
                </label>
                <textarea
                  name="description"
                  value={formDetails.description}
                  onChange={handleInputChange}
                  placeholder="Describe the feature"
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    fontSize: "1rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    minHeight: "150px",
                  }}
                  required
                />
              </div>

              {/* Benefit Explanation */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  How will this feature help you?
                </label>
                <textarea
                  name="befefit"
                  value={formDetails.befefit}
                  onChange={handleInputChange}
                  placeholder="Explain the befefit or use case"
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    fontSize: "1rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    minHeight: "150px",
                  }}
                  required
                />
              </div>

              {/* File Upload */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  Attach a mockup or example (Optional):
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{
                    display: "block",
                    marginTop: "0.5rem",
                    backgroundColor: "#fafafa",
                    padding: "0.6rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    width: "100%",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  padding: "0.8rem 1.5rem",
                  borderRadius: "8px",
                  backgroundColor: "#0057ff",
                  color: "#fff",
                  border: "none",
                  width: "100%",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#0046d4";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#0057ff";
                }}
              >
                Submit Feature Request
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeatureRequestPage;
