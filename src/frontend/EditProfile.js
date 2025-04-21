import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [pageLoaded, setPageLoaded] = useState(false);
  const [isLabelHovered, setIsLabelHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for controlling password visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file);
        setProfileImage(imageUrl);
      } else {
        setError("Please upload a valid image file.");
      }
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
  };

  const saveProfile = async (profileData) => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const handleSave = async () => {
    if (!username || !password) {
      setError("Username and Password are required!");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long!");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await saveProfile({ username, password, profileImage });
      setSuccessMessage("Profile updated successfully!");
      setUsername("");
      setPassword("");
    } catch (e) {
      setError("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div
      style={
        pageLoaded
          ? { ...styles.pageContainer, opacity: 1 }
          : {
              ...styles.pageContainer,
              opacity: 0,
              transition: "opacity 0.8s ease-in",
            }
      }
    >
      <Navbar />

      <div style={styles.mainContent}>
        <div style={styles.profileBox}>
          <h2 style={styles.title}>Edit Your Profile</h2>

          <div style={styles.imageContainer}>
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                style={styles.profileImage}
              />
            ) : (
              <div style={styles.placeholderImage}>Upload</div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={styles.uploadInput}
            aria-label="Upload profile image"
          />
          <button onClick={handleRemoveImage} style={styles.removeImageButton}>
            Remove Image
          </button>

          <div style={styles.inputContainer}>
            <label
              style={{
                ...styles.inputLabel,
                color: isLabelHovered ? "#4D706D" : "#333",
                transform: isLabelHovered ? "scale(1.1)" : "scale(1)",
              }}
              onMouseEnter={() => setIsLabelHovered(true)}
              onMouseLeave={() => setIsLabelHovered(false)}
            >
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              placeholder="Enter your username"
              aria-label="Username"
            />
          </div>

          <div style={styles.inputContainer}>
            <label
              style={{
                ...styles.inputLabel,
                color: isLabelHovered ? "#4D706D" : "#333",
                transform: isLabelHovered ? "scale(1.1)" : "scale(1)",
              }}
              onMouseEnter={() => setIsLabelHovered(true)}
              onMouseLeave={() => setIsLabelHovered(false)}
            >
              Password:
            </label>
            <div style={styles.passwordInputContainer}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                placeholder="Enter your password"
                aria-label="Password"
              />
              <span onClick={togglePasswordVisibility} style={styles.eyeIcon}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {error && <p style={styles.error}>{error}</p>}
          {successMessage && <p style={styles.success}>{successMessage}</p>}

          <div style={styles.buttonContainer}>
            <button style={styles.button} disabled={loading} onClick={() => {}}>
              Cancel
            </button>
            <button
              onClick={handleSave}
              style={styles.saveButton}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#F0F4F8", // Lighter background
    fontFamily: "'Poppins', sans-serif",
    opacity: 0,
    transition: "opacity 0.8s ease-in",
  },
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "40px",
    paddingBottom: "30px",
  },
  profileBox: {
    background: "#fff", // White background for clean feel
    borderRadius: "15px",
    boxShadow:
      "8px 8px 20px rgba(0, 0, 0, 0.1), -8px -8px 20px rgba(255, 255, 255, 0.1)",
    padding: "40px",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
    marginBottom: "30px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#333",
  },
  imageContainer: {
    marginBottom: "15px",
  },
  profileImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  },
  placeholderImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#B0B0B0",
    color: "#fff",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  uploadInput: {
    marginTop: "15px",
    padding: "12px",
    fontSize: "14px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
    width: "200px",
    textAlign: "center",
    transition: "background-color 0.3s",
  },
  removeImageButton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#FF6347", // Tomato color
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s ease",
  },
  inputContainer: {
    margin: "15px 0",
    textAlign: "left",
  },
  inputLabel: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
    marginBottom: "10px",
    display: "block",
    transition: "color 0.3s, transform 0.3s",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "2px solid #ddd",
    margin: "8px 0",
    backgroundColor: "#fff",
    transition: "border 0.3s ease, box-shadow 0.3s ease",
  },
  passwordInputContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    fontSize: "20px",
  },
  buttonContainer: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#8C9B9D",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 20px",
    cursor: "pointer",
    width: "48%",
    transition:
      "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
  },
  saveButton: {
    backgroundColor: "#4D706D", // Greenish color
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 20px",
    cursor: "pointer",
    width: "48%",
    transition:
      "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
  },
  error: {
    color: "#f44336",
    fontSize: "14px",
    marginTop: "10px",
  },
  success: {
    color: "#4CAF50",
    fontSize: "14px",
    marginTop: "10px",
  },
};

export default EditProfile;
