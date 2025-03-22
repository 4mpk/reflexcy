import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div style={styles.container}>
      <Navbar />

      <div style={styles.profileBox}>
        <h2 style={styles.title}>Profile Details</h2>
        <div style={styles.imageContainer}>
          {profileImage ? (
            <img src={profileImage} alt="Profile" style={styles.profileImage} />
          ) : (
            <div style={styles.placeholderImage}>No Image</div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={styles.uploadInput}
        />
        <button onClick={handleRemoveImage} style={styles.button}>
          Remove Profile Picture
        </button>

        <div style={styles.inputContainer}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.buttonContainer}>
          <button style={styles.button}>Change</button>
          <button onClick={handleSave} style={styles.button}>
            Save
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  profileBox: {
    backgroundColor: "#a5d2c9",
    width: "50%",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#2d4a48",
  },
  imageContainer: {
    marginBottom: "10px",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  placeholderImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
  },
  uploadInput: {
    marginTop: "10px",
  },
  inputContainer: {
    margin: "10px 0",
  },
  input: {
    width: "80%",
    padding: "8px",
    margin: "5px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4d706d",
    color: "#fff",
  },
};

export default EditProfile;
