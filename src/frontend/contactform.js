import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Changed from useHistory to useNavigate
import contactImage from "./assests/images/contact.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
const ContactForm = () => {
  const [hover, setHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to manage loading
  const [showThankYou, setShowThankYou] = useState(false); // State to show thank you message
  const navigate = useNavigate(); // useNavigate for redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    // Simulate the loading process (e.g., API call)
    setTimeout(() => {
      setIsLoading(false); // Stop loading
      setShowThankYou(true); // Show thank you message

      // Redirect to homepage after 5 seconds
      setTimeout(() => {
        navigate("/"); // Use navigate to redirect to homepage
      }, 5000);
    }, 2000); // 2 seconds of loading
  };

  return (
    <>
      <Navbar />
      {localStorage.getItem('access_token') != null && (<Sidebar />)}
      <div style={styles.wrapper}>
        <div style={styles.contactContainer}>
          <div style={styles.leftContainer}>
            <img src={contactImage} alt="Contact" style={styles.contactImage} />
          </div>
          <div style={styles.rightContainer}>
            {showThankYou ? (
              <div style={styles.thankYouContainer}>
                <h1>Thank you for your message!</h1>
                <p>We'll get back to you shortly. Redirecting...</p>
              </div>
            ) : (
              <>
                <h3 style={styles.subTitle}>STAY IN CONTACT</h3>
                <h1 style={styles.title}>Get in Touch</h1>
                <form onSubmit={handleSubmit}>
                  <div style={styles.inputGroup}>
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      style={styles.input}
                    />
                    <input
                      type="tel"
                      placeholder="Phone No."
                      required
                      style={styles.input}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Id"
                    required
                    style={styles.input}
                  />
                  <textarea
                    placeholder="Your Message...."
                    required
                    style={styles.textarea}
                  ></textarea>
                  <div style={styles.checkboxGroup}>
                    <input type="checkbox" id="subscribe" />
                    <label htmlFor="subscribe" style={styles.checkboxLabel}>
                      Save Info
                    </label>
                  </div>
                  <button
                    type="submit"
                    style={
                      hover
                        ? { ...styles.button, ...styles.buttonHover }
                        : styles.button
                    }
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </form>
                {isLoading && (
                  <div style={styles.loadingIndicator}>
                    <span>Loading...</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f8f8",
    opacity: 0, // Initially hidden
    animation: "fadeIn 1.5s ease-in forwards",
    margin: 0, //
    paddingTop: "110px"
  },
  contactContainer: {
    display: "flex",
    width: "80%",
    maxWidth: "1100px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    flexWrap: "wrap", // Improves responsiveness
  },
  leftContainer: {
    flex: 1,
    height: "100%",
    minHeight: "100px",
  },
  rightContainer: {
    flex: 1,
    padding: "50px 50px 0 ",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  contactImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  subTitle: {
    color: "#888",
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    flexWrap: "wrap", // for mobile responsiveness
  },
  input: {
    flex: 1,
    padding: "14px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
    width: "100%",
  },
  textarea: {
    width: "100%",
    height: "120px",
    padding: "14px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
    resize: "none",
    marginBottom: "15px",
  },
  checkboxGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "15px",
    fontSize: "14px",
  },
  checkboxLabel: {
    marginLeft: "5px",
    color: "#555",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#444",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  },
  buttonHover: {
    backgroundColor: "#222",
    transform: "scale(1.05)",
  },
  loadingIndicator: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#444",
    fontWeight: "bold",
  },
  thankYouContainer: {
    padding: "50px",
    textAlign: "center",
    fontSize: "18px",
    color: "#444",
  },
};

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`,
  styleSheet.cssRules.length
);

export default ContactForm;
