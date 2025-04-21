import React, { useState } from "react";
import contactImage from "./assests/images/contact.png";

const ContactForm = () => {
  const [hover, setHover] = useState(false);

  return (
    <div style={styles.wrapper}>
      <div style={styles.contactContainer}>
        <div style={styles.leftContainer}>
          <img src={contactImage} alt="Contact" style={styles.contactImage} />
        </div>
        <div style={styles.rightContainer}>
          <h3 style={styles.subTitle}>STAY IN CONTACT</h3>
          <h1 style={styles.title}>Get in Touch</h1>
          <form>
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
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f8f8",
  },
  contactContainer: {
    display: "flex",
    width: "80%",
    maxWidth: "1100px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  leftContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  rightContainer: {
    flex: 1,
    padding: "50px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  contactImage: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    borderRadius: "10px",
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
};

export default ContactForm;
