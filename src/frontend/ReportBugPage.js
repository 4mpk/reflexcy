import React, { useState } from "react";

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
    <div style={{ padding: "2rem" }}>
      <h2>Report a Bug</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Bug Title:
          <input
            type="text"
            name="bugTitle"
            value={bugDetails.bugTitle}
            onChange={handleInputChange}
            placeholder="Enter bug title"
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
            required
          />
        </label>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Bug Description:
          <textarea
            name="bugDescription"
            value={bugDetails.bugDescription}
            onChange={handleInputChange}
            placeholder="Describe the bug"
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              minHeight: "150px",
            }}
            required
          />
        </label>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Steps to Reproduce:
          <textarea
            name="stepsToReproduce"
            value={bugDetails.stepsToReproduce}
            onChange={handleInputChange}
            placeholder="Provide steps to reproduce the bug"
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              minHeight: "150px",
            }}
            required
          />
        </label>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Upload Screenshot (Optional):
          <input
            type="file"
            onChange={handleFileChange}
            style={{ marginBottom: "1rem" }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "0.8rem 1.5rem",
            borderRadius: "8px",
            backgroundColor: "#0057ff",
            color: "#fff",
            border: "none",
          }}
        >
          Submit Bug Report
        </button>
      </form>
    </div>
  );
};

export default ReportBugPage;
