import React, { useState } from "react";

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
    <div style={{ padding: "2rem" }}>
      <h2>Request a Feature</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Feature Title:
          <input
            type="text"
            name="featureTitle"
            value={featureRequest.featureTitle}
            onChange={handleInputChange}
            placeholder="Enter feature title"
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
            required
          />
        </label>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Feature Description:
          <textarea
            name="featureDescription"
            value={featureRequest.featureDescription}
            onChange={handleInputChange}
            placeholder="Describe the feature"
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              minHeight: "150px",
            }}
            required
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
          Submit Feature Request
        </button>
      </form>
    </div>
  );
};

export default FeatureRequestPage;
