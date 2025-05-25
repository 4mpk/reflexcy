import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Blue Spinner Component (same as ReportBugPage)
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

const FeedbackPage = () => {
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState({
    rating: "1",
    comments: "",
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
            navigate("/settings");
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showThankYou, cancelRedirect, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here (e.g., API call)
    setShowThankYou(true);
  };

  const handleCancelRedirect = () => {
    setCancelRedirect(true);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 120px)",
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
                🎉 Thank you for your feedback!
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
            <>
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
                <label
                  style={{
                    display: "block",
                    marginBottom: "1.5rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
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
                      fontSize: "1rem",
                    }}
                  >
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </select>
                </label>

                <label
                  style={{
                    display: "block",
                    marginBottom: "1.5rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
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
                      fontSize: "1rem",
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
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#0046d4";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#0057ff";
                  }}
                >
                  Submit Feedback
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeedbackPage;
