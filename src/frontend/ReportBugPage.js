import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ReportBugPage = () => {
  const [bugDetails, setBugDetails] = useState({
    bugTitle: "",
    bugDescription: "",
    stepsToReproduce: "",
    screenshot: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBugDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBugDetails((prevDetails) => ({ ...prevDetails, screenshot: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle bug submission
    alert("Bug report submitted");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar /> {/* Add Navbar component */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 120px)", // Ensure the form takes up space between navbar and footer
          padding: "2rem",
          backgroundColor: "#f4f7fc", // Light background for the page
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "700px",
            backgroundColor: "#ffffff", // White background for the form
            padding: "2rem",
            borderRadius: "12px", // Rounded corners for the form
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow
            transition: "all 0.3s ease-in-out", // Smooth transition for hover
            marginBottom: "2rem", // Add margin to the bottom for spacing from footer
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              marginBottom: "1rem",
            }}
          >
            Report a Bug
          </h2>
          <form onSubmit={handleSubmit}>
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
                Bug Title:
              </label>
              <input
                type="text"
                name="bugTitle"
                value={bugDetails.bugTitle}
                onChange={handleInputChange}
                placeholder="Enter bug title"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  transition: "border-color 0.3s",
                }}
                required
              />
            </div>

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
                Bug Description:
              </label>
              <textarea
                name="bugDescription"
                value={bugDetails.bugDescription}
                onChange={handleInputChange}
                placeholder="Describe the bug"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  minHeight: "150px",
                  transition: "border-color 0.3s",
                }}
                required
              />
            </div>

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
                Steps to Reproduce:
              </label>
              <textarea
                name="stepsToReproduce"
                value={bugDetails.stepsToReproduce}
                onChange={handleInputChange}
                placeholder="Provide steps to reproduce the bug"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  minHeight: "150px",
                  transition: "border-color 0.3s",
                }}
                required
              />
            </div>

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
                Upload Screenshot (Optional):
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
                transition: "background-color 0.3s, transform 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0046d4")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#0057ff")}
              onFocus={(e) => (e.target.style.transform = "scale(1.05)")}
              onBlur={(e) => (e.target.style.transform = "scale(1)")}
            >
              Submit Bug Report
            </button>
          </form>
        </div>
      </div>
      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default ReportBugPage;
