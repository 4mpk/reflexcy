import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ENDPOINTS from "./RequestUrls";
import { toast } from 'react-toastify';
import Sidebar from "./components/Sidebar";
const ContactSupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState(5);
  const [cancelRedirect, setCancelRedirect] = useState(false);

  const navigate = useNavigate();

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
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const body = new FormData();
          for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
              body.append(key, formData[key]);
            }
        }
        const response = await fetch(ENDPOINTS.ContactSupport, {
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
          minHeight: "calc(100vh - 120px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            <div
              style={{
                textAlign: "center",
                animation: "fadeIn 0.6s ease-in-out",
              }}
            >
              <div className="spinner" style={{ marginBottom: "1rem" }} />
              <h2
                style={{
                  fontSize: "2rem",
                  color: "#0057ff",
                  marginBottom: "1rem",
                }}
              >
                🎉 Thank you!
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                We've received your message.
              </p>
              <p style={{ fontSize: "1rem", color: "#555" }}>
                Redirecting to settings in {redirectCountdown} second
                {redirectCountdown > 1 ? "s" : ""}...
              </p>
              {!cancelRedirect && (
                <button
                  onClick={handleCancelRedirect}
                  style={{
                    marginTop: "1rem",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "8px",
                    backgroundColor: "#ccc",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Cancel Redirect
                </button>
              )}
            </div>
          ) : (
            <>
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  marginBottom: "1.5rem",
                }}
              >
                Contact Support
              </h2>
              <form onSubmit={handleSubmit}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "1rem",
                    textAlign: "left",
                  }}
                >
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
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
                <label
                  style={{
                    display: "block",
                    marginBottom: "1rem",
                    textAlign: "left",
                  }}
                >
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
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
                <label
                  style={{
                    display: "block",
                    marginBottom: "1rem",
                    textAlign: "left",
                  }}
                >
                  Message:
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your issue"
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
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />

      {/* Inline styles for fadeIn and spinner */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #ccc;
            border-top: 4px solid #0057ff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ContactSupportPage;
