import React, { useState, useRef, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ENDPOINTS from "./RequestUrls";
import { toast } from 'react-toastify';

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

  const [forgetPassFormData, setForgetPassFormData] = useState({
      email: '',
      appName: "Reflexcy",
    });
  const [verifyCodeFormData, SetVerifyCodeFormData] = useState({
      email: email,
      code: verificationCode.join("")
    });
    const [ResetPasswordFormData, SetResetPasswordFormData] = useState({
      email: email,
      newPassword: newPassword
    });
    
    const [shouldForgetPassSubmit, setShouldForgetPassSubmit] = useState(false);
  
    const handleForgetPassChange = (e) => {
      setForgetPassFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
      SetVerifyCodeFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
      SetResetPasswordFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };
  
    const handleForgetPassSubmit = (e) => {
      e.preventDefault();
      setShouldForgetPassSubmit(true); // trigger useEffect
    };
  
    useEffect(() => {
      if (!shouldForgetPassSubmit) return;
      const submitForgetPassData = async () => {
        setLoading(true);
        try {
          const response = await fetch(ENDPOINTS.SendResetPassword, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(forgetPassFormData)
          });
          if (response.ok) {
            setTimeout(() => {
              setStep(2);
              setLoading(false);
            }, 1000);
            toast.success('Forget Password Email Sent successfully!');
          } else if (response.status == "401") {
            localStorage.removeItem('access_token');
          } else {
            const data = await response.json();
            toast.error('Error: ' + data.error.message);
          }
        } catch (error) {
          toast.error('Network Error: ' + error);
        } finally {
          setShouldForgetPassSubmit(false); // reset trigger
        }
      };
  
      submitForgetPassData();
    }, [shouldForgetPassSubmit, forgetPassFormData]);
  
  const handleCodeSubmit = () => {
    if (verificationCode.join("").length === 5) {
      setShouldVerifyPasswordSubmit(true);
    } else {
      alert("Please enter the full 5-digit code")
    }
  };

  const [shouldVerifyPasswordSubmit, setShouldVerifyPasswordSubmit] = useState(false);

  useEffect(() => {
    if (!shouldVerifyPasswordSubmit) return;
    const submitVerifyCodeData = async () => {
      setLoading(true);
      try {
        const response = await fetch(ENDPOINTS.VerifyResetPassword, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(verifyCodeFormData)
        });
        const isSuccess = await response.json();
        if (response.ok && isSuccess) {
          setTimeout(() => {
            setStep(3);
            setLoading(false);
          }, 1000);
          toast.success('Verified Code successfully!');
        } else if (response.status == "401") {
          localStorage.removeItem('access_token');
        } else {
          toast.error('Code is wrong');
        }
      } catch (error) {
        toast.error('Network Error: ' + error);
      } finally {
        setShouldVerifyPasswordSubmit(false); // reset trigger
      }
    };

    submitVerifyCodeData();
  }, [shouldVerifyPasswordSubmit, verifyCodeFormData]);

  const handlePasswordSubmit = () => {
    const isValidPassword = (password) => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/;
      return passwordRegex.test(password);
    };
  
    if (!newPassword || newPassword.trim() === "") {
      alert("Please enter a valid password.");
      return;
    }
  
    if (!isValidPassword(newPassword)) {
      alert("Passwords must have at least one non-alphanumeric character, one lowercase ('a'-'z'), and one uppercase ('A'-'Z').");
      return;
    }
  
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    SetResetPasswordFormData((prev) => ({
      ...prev,
      ["newPassword"]: newPassword
    }));
    setShouldResetPasswordSubmit(true);
  };

  const [shouldResetPasswordSubmit, setShouldResetPasswordSubmit] = useState(false);

  useEffect(() => {
    if (!shouldResetPasswordSubmit) return;
    const submitResetPasswordData = async () => {
      setLoading(true);
      try {
        const response = await fetch(ENDPOINTS.ResetPassword, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ResetPasswordFormData)
        });
        if (response.ok) {
          setTimeout(() => {
            setStep(5);
            setLoading(false);
          }, 1000);
          toast.success('Password changed successfully!');
        } else if (response.status == "401") {
          localStorage.removeItem('access_token');
        } else {
          const data = await response.data();
          toast.error('Error: ' + data.error.message);
        }
      } catch (error) {
        toast.error('Network Error: ' + error);
      } finally {
        setShouldResetPasswordSubmit(false); // reset trigger
      }
    };

    submitResetPasswordData();
  }, [shouldResetPasswordSubmit, ResetPasswordFormData]);

  const handleCodeChange = (e, index) => {
    const value = e.target.value;
    if (value.match(/[0-9]/) && value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      if (index < 4) codeRefs.current[index + 1]?.focus();
      SetVerifyCodeFormData((prev) => ({
        ...prev,
        ["code"]: newCode.join("")
      }));
    }

  };

  const styles = {
    container: {
      maxWidth: "500px",
      width: "90%",
      margin: "0px auto 100px auto",
      padding: "60px 40px",
      backgroundColor: "#9cd1c9",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
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
      <div style={{paddingBottom: "110px"}}></div>
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
                name="email"
                onChange={handleForgetPassChange}
              />
            </div>
            <button
              style={styles.button}
              onClick={handleForgetPassSubmit}
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
