import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const DataForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    bio: "", // Added bio field
    currentJob: "",
    previousJob: "",
    skills: "",
    linkedin: "",
    github: "",
    instagram: "",
    tiktok: "",
    experience: "",
    projectDetails: "",
    projectLinks: "",
    certifications: [],
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "certificationFile") {
      setFormData({
        ...formData,
        certifications: [...formData.certifications, ...Array.from(files)],
      });
    } else if (name === "profilePic") {
      setFormData({
        ...formData,
        profilePic: files[0],
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", formData);
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear the form?")) {
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        dob: "",
        email: "",
        phone: "",
        bio: "", // Clear bio field
        currentJob: "",
        previousJob: "",
        skills: "",
        linkedin: "",
        github: "",
        instagram: "",
        tiktok: "",
        experience: "",
        projectDetails: "",
        projectLinks: "",
        certifications: [],
        profilePic: null,
      });
    }
  };

  return (
    <>
      <Navbar />

      <div className="form-container">
        <h2>Data Form to Create Your Portfolio</h2>
        <form onSubmit={handleSubmit}>
          <div className="section personal-info">
            <h3>Personal Information</h3>
            <div className="row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
              />
              <input
                type="text"
                name="middleName"
                placeholder="Middle Name"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <select name="gender" onChange={handleChange}>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input type="date" name="dob" onChange={handleChange} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="section phone-bio">
            <h3>Contact Information</h3>
            <div className="row">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <textarea
                name="bio"
                placeholder="Write a short bio about yourself"
                onChange={handleChange}
                rows="4"
              />
            </div>
          </div>

          <div className="section profile-pic">
            <h3>Upload Profile Picture</h3>
            <div className="row">
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleChange}
              />
              {formData.profilePic && (
                <div className="profile-pic-preview">
                  <img
                    src={URL.createObjectURL(formData.profilePic)}
                    alt="Profile Preview"
                    width="100"
                    height="100"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="section experience-section">
            <h3>Experience & Projects</h3>
            <div className="experience-field">
              <input
                type="text"
                name="experience"
                placeholder="Experience"
                onChange={handleChange}
              />
            </div>
            <div className="project-field">
              <input
                type="text"
                name="projectDetails"
                placeholder="Project Details"
                onChange={handleChange}
              />
              <input
                type="text"
                name="projectLinks"
                placeholder="Project Links"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="section social-links">
            <h3>Social Links</h3>
            <div className="row">
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn URL"
                onChange={handleChange}
              />
              <input
                type="url"
                name="github"
                placeholder="GitHub URL"
                onChange={handleChange}
              />
              <input
                type="url"
                name="instagram"
                placeholder="Instagram URL"
                onChange={handleChange}
              />
              <input
                type="url"
                name="tiktok"
                placeholder="TikTok URL"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="section certifications">
            <h3>Certifications</h3>
            <div className="certification-upload">
              <input
                type="text"
                name="certifications"
                placeholder="Certification Name"
                onChange={handleChange}
              />
              <input
                type="file"
                name="certificationFile"
                multiple
                onChange={handleChange}
              />
              <div className="file-preview">
                {formData.certifications.length > 0 && (
                  <ul>
                    {formData.certifications.map((file, index) => (
                      <li key={index}>
                        {file.name} (Size: {(file.size / 1024).toFixed(2)} KB)
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClear}>
              Clear
            </button>{" "}
            {/* Clear Button */}
          </div>
        </form>

        <style>
          {`
            .form-container {
              width: 750px;
              margin: 30px auto;
              padding: 40px;
              background: linear-gradient(145deg, #e6f7f3, #ffffff);
              border-radius: 25px;
              box-shadow: 8px 8px 20px #c9c9c9, -8px -8px 20px #ffffff;
              text-align: center;
              animation: fadeIn 1s ease-in;
            }

            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }

            h2, h3 {
              color: #1a7f64;
              font-weight: bold;
            }

            .section {
              margin-bottom: 25px;
              padding: 20px;
              border-radius: 15px;
              background: linear-gradient(145deg, #f0f9f6, #ffffff);
              box-shadow: inset 4px 4px 8px #d3d3d3, inset -4px -4px 8px #ffffff;
            }

            .profile-pic {
              margin-top: 15px;
            }

            .row {
              display: flex;
              justify-content: space-between;
              gap: 15px;
              margin-bottom: 15px;
            }

            input, select, textarea {
              width: 100%;
              padding: 14px;
              border: none;
              border-radius: 12px;
              background: #f0f0f0;
              box-shadow: inset 3px 3px 6px #d1d1d1, inset -3px -3px 6px #ffffff;
              transition: all 0.3s ease;
              font-size: 16px;
            }

            input:focus, select:focus, textarea:focus {
              box-shadow: inset 1px 1px 2px #bebebe, inset -1px -1px 2px #ffffff;
            }

            input::placeholder,
            select::placeholder,
            textarea::placeholder {
              color: #999;
            }

            button {
              background: linear-gradient(145deg, #0a84ae, #006a8d);
              color: white;
              padding: 14px 22px;
              border: none;
              border-radius: 12px;
              cursor: pointer;
              font-size: 18px;
              transition: all 0.3s ease;
              box-shadow: 4px 4px 10px #bebebe, -4px -4px 10px #ffffff;
            }

            button:hover {
              background: linear-gradient(145deg, #006a8d, #004f6a);
              transform: scale(1.05);
            }

            .form-actions {
              display: flex;
              gap: 20px;
              justify-content: center;
            }

            .certification-upload {
              display: flex;
              flex-direction: column;
              gap: 15px;
            }

            .file-preview {
              margin-top: 10px;
              text-align: left;
              font-size: 14px;
              color: #333;
            }

            .file-preview ul {
              list-style-type: none;
              padding: 0;
            }

            .file-preview li {
              margin-bottom: 8px;
            }

            .profile-pic-preview {
              margin-top: 10px;
            }

            .profile-pic-preview img {
              border-radius: 50%;
              object-fit: cover;
            }

            @media (max-width: 600px) {
              .form-container {
                width: 90%;
                padding: 20px;
              }

              .row {
                flex-direction: column;
              }

              input, select, textarea {
                width: 100%;
              }
            }
          `}
        </style>
      </div>

      <Footer />
    </>
  );
};

export default DataForm;
