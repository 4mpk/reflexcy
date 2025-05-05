import React, { useState } from "react";

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
    <div style={{ padding: "2rem" }}>
      <h2>Submit Feedback / Suggestions</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Rating:
          <select
            name="rating"
            value={feedback.rating}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          >
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </label>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Comments:
          <textarea
            name="comments"
            value={feedback.comments}
            onChange={handleInputChange}
            placeholder="Provide your feedback"
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
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackPage;
