import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ContactSupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission
    alert("Support request submitted");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <div
        style={{
          minHeight: "calc(100vh - 120px)", // space between navbar and footer
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
            marginBottom: "2rem", // prevent touching footer
          }}
        >
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
            <label style={{ display: "block", marginBottom: "1rem" }}>
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
            <label style={{ display: "block", marginBottom: "1rem" }}>
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
            <label style={{ display: "block", marginBottom: "1rem" }}>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSupportPage;
