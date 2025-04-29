import React, { useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);
  const codeRefs = useRef([]);

  const handleEmailSubmit = () => {
    if (!email.includes("@")) return alert("Please enter a valid email.");
    setLoading(true);
    setTimeout(() => {
      setStep(2);
      setLoading(false);
    }, 1000);
  };

  const handleCodeSubmit = () => {
    if (verificationCode.join("").length === 5) {
      setStep(3);
    } else {
      alert("Please enter the full 5-digit code.");
    }
  };

  const handlePasswordSubmit = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
    } else if (newPassword === "") {
      alert("Please enter a valid password.");
    } else {
      setStep(5);
    }
  };

  const handleCodeChange = (e, index) => {
    const value = e.target.value;
    if (value.match(/[0-9]/) && value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      if (index < 4) codeRefs.current[index + 1]?.focus();
    }
  };

  const styles = {
    container: {
      maxWidth: "500px",
      width: "90%",
      margin: "100px auto",
      padding: "60px 40px",
      backgroundColor: "#9cd1c9",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      marginTop: "80px", // Adjust the margin to account for the Navbar
    },
    header: {
      fontSize: "1.5em",
      marginBottom: "10px",
    },
    inputContainer: {
      position: "relative",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "1.1em",
    },
    passwordEyeIcon: {
      position: "absolute",
      right: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#555",
    },
    button: {
      width: "50%",
      padding: "12px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1.1em",
      transition: "background-color 0.3s ease",
      marginTop: "15px",
    },
    paragraph: {
      fontSize: "0.9em",
      color: "#555",
    },
    codeBoxContainer: {
      display: "flex",
      justifyContent: "space-between",
      margin: "20px 0",
    },
    codeBox: {
      width: "50px",
      height: "50px",
      textAlign: "center",
      fontSize: "1.5em",
      borderRadius: "4px",
      border: "1px solid #ccc",
      outline: "none",
    },
    resendLink: {
      display: "block",
      marginTop: "10px",
      color: "#007bff",
      textDecoration: "none",
      fontSize: "0.9em",
    },
    errorText: {
      color: "red",
      fontSize: "0.85em",
      marginTop: "-10px",
      marginBottom: "10px",
    },
    backButton: {
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: hover ? "#e0e0e0" : "#f0f0f0",
      color: "#333",
      border: "1px solid #ccc",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1em",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div style={styles.container}>
        {/* Step 1: Email Input */}
        {step === 1 && (
          <>
            <h2 style={styles.header}>
              Please enter your email to reset the password
            </h2>
            <div style={styles.inputContainer}>
              <input
                style={styles.input}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleEmailSubmit()}
              />
            </div>
            <button
              style={styles.button}
              onClick={handleEmailSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Code"}
            </button>
          </>
        )}

        {/* Step 2: Verification Code */}
        {step === 2 && (
          <>
            <h2 style={styles.header}>We sent a reset link to {email}</h2>
            <p style={styles.paragraph}>
              Enter the 5-digit code mentioned in the email.
            </p>
            <div style={styles.codeBoxContainer}>
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (codeRefs.current[index] = el)}
                  style={styles.codeBox}
                  type="text"
                  value={digit}
                  maxLength="1"
                  onChange={(e) => handleCodeChange(e, index)}
                  autoFocus={index === 0}
                />
              ))}
            </div>
            <button style={styles.button} onClick={handleCodeSubmit}>
              Verify Code
            </button>
            <a href="#" style={styles.resendLink}>
              Haven’t got the email yet? Resend email
            </a>
          </>
        )}

        {/* Step 3: Reset Password */}
        {step === 3 && (
          <>
            <h2 style={styles.header}>Create a New Password</h2>
            <p style={styles.paragraph}>
              Ensure it differs from previous ones for security.
            </p>

            {/* New Password */}
            <div style={styles.inputContainer}>
              <input
                style={styles.input}
                type={newPasswordVisible ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
              />
              <div
                style={styles.passwordEyeIcon}
                onClick={() => setNewPasswordVisible(!newPasswordVisible)}
              >
                {newPasswordVisible }
              </div>
            </div>

            {/* Confirm Password */}
            <div style={styles.inputContainer}>
              <input
                style={styles.input}
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
              />
              <div
                style={styles.passwordEyeIcon}
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              >
                {confirmPasswordVisible }
              </div>
            </div>

            {/* Validation Error */}
            {newPassword !== confirmPassword && confirmPassword !== "" && (
              <p style={styles.errorText}>Passwords do not match</p>
            )}

            <button style={styles.button} onClick={handlePasswordSubmit}>
              Reset Password
            </button>
          </>
        )}

        {/* Step 5: Success */}
        {step === 5 && (
          <>
            <h2 style={styles.header}>Password Reset Successful!</h2>
            <p style={styles.paragraph}>
              You can now log in with your new password.
            </p>
            <button
              onClick={() => (window.location.href = "/authPage")} // Redirect to sign-up page
              style={styles.backButton}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Back to Sign Up
            </button>
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ForgotPassword;
