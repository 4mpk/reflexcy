import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({
    rating: 1,
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({ ...prevFeedback, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle feedback submission
    alert("Feedback submitted");
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
            Submit Feedback / Suggestions
          </h2>
          <form onSubmit={handleSubmit}>
            <label style={{ display: "block", marginBottom: "1rem" }}>
              Rating:
              <select
                name="rating"
                value={feedback.rating}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  marginTop: "0.5rem",
                }}
              >
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </label>
            <label style={{ display: "block", marginBottom: "1rem" }}>
              Comments:
              <textarea
                name="comments"
                value={feedback.comments}
                onChange={handleInputChange}
                placeholder="Provide your feedback"
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
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeedbackPage;
