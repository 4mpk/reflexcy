import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ENDPOINTS from "./RequestUrls";
import { toast } from 'react-toastify';

const DataForm = () => {
  const [formData, setFormData] = useState({
    projectId: Number(localStorage.getItem('ProjectId') ?? 0),
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    vision: "",
    bio: "",
    skills: "",
    profile: null,
    departmentName: "",
    universityName: "",
    dateOfGraduation: "",
    firstPositionTitle: "",
    firstPositionDescription: "",
    firstPositionEndDate: "",
    secondPositionTitle: "",
    secondPositionDescription: "",
    secondPositionEndDate: "",
    thirdPositionTitle: "",
    thirdPositionDescription: "",
    thirdPositionEndDate: "",
    firstProjectName: "",
    firstProjectDescription: "",
    firstProjectPicture: null,
    secondProjectName: "",
    secondProjectDescription: "",
    secondProjectPicture: null,
    thirdProjectName: "",
    thirdProjectDescription: "",
    thirdProjectPicture: null,
    linkedinUrl: "",
    facebookUrl: "",
    instagramUrl: "",
    xUrl: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile") {
      setFormData({
        ...formData,
        profile: files[0],
      });
    }
    else if (name === "firstProjectPicture") {
      setFormData({
        ...formData,
        firstProjectPicture: files[0],
      });
    } 
    else if (name === "secondProjectPicture") {
      setFormData({
        ...formData,
        secondProjectPicture: files[0],
      });
    } 
    else if (name === "thirdProjectPicture") {
      setFormData({
        ...formData,
        thirdProjectPicture: files[0],
      });
    }  
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const [shouldDataFormSubmit, setShouldDataFormSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }
    setShouldDataFormSubmit(true);
  };

  useEffect(() => {
    if (!shouldDataFormSubmit) return;
    const submitDataForm = async () => {
      try {
        const body = new FormData();
        for (const key in formData) {
          if (formData.hasOwnProperty(key)) {
            body.append(key, formData[key]);
          }
        }
        const response = await fetch(ENDPOINTS.DataForm, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          },
          body: body
        });
        if (response.ok) {
          const blob = await response.blob();
          // Create file download
          const downloadUrl = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = downloadUrl;

          // Optionally get filename from headers
          const contentDisposition = response.headers.get("Content-Disposition");
          let fileName = "downloaded-file";
          if (contentDisposition && contentDisposition.includes("filename=")) {
            fileName = contentDisposition
              .split("filename=")[1]
              .replace(/"/g, "")
              .trim();
          }
          a.download = fileName;

          document.body.appendChild(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(downloadUrl);

          toast.success('File downloaded successfully!');
        } else if (response.status == "401") {
          localStorage.removeItem('access_token');
          window.location.href = "/AuthPage";
        } else {
          const data = await response.data();
          toast.error('Some thing went wrong please try again');
        }
      } catch (error) {
        console.log(error);
        toast.error('Some thing went wrong please try again');
      } finally {
        setShouldDataFormSubmit(false); // reset trigger
      }
    };

    submitDataForm();
  }, [shouldDataFormSubmit, formData]);

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear the form?")) {
      setFormData({
        projectId: Number(localStorage.getItem('ProjectId') ?? 0),
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        vision: "",
        bio: "",
        skills: "",
        profile: null,
        departmentName: "",
        universityName: "",
        dateOfGraduation: "",
        firstPositionTitle: "",
        firstPositionDescription: "",
        firstPositionEndDate: "",
        secondPositionTitle: "",
        secondPositionDescription: "",
        secondPositionEndDate: "",
        thirdPositionTitle: "",
        thirdPositionDescription: "",
        thirdPositionEndDate: "",
        firstProjectName: "",
        firstProjectDescription: "",
        firstProjectPicture: null,
        secondProjectName: "",
        secondProjectDescription: "",
        secondProjectPicture: null,
        thirdProjectName: "",
        thirdProjectDescription: "",
        thirdProjectPicture: null,
        linkedinUrl: "",
        facebookUrl: "",
        instagramUrl: "",
        x: "",
      });
    }
  };

  return (
    <>
      <Navbar />
<div style={{paddingTop: "110px"}}>

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
                value={formData.firstName}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
              />
              </div>
              <div className="row">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
          </div>

          <div className="section phone-bio">
            <h3>About me</h3>
            <div className="row">
              <textarea
                name="vision"
                placeholder="Write the vision"
                onChange={handleChange}
                rows="3"
                value={formData.vision}
              />
            </div>
            <div className="row">
              <textarea
                name="bio"
                placeholder="Write a short bio about yourself"
                onChange={handleChange}
                rows="3"
                value={formData.bio}
              />
            </div>

            <div className="row">
              <textarea
                name="skills"
                placeholder="Write your skills"
                onChange={handleChange}
                rows="3"
                value={formData.skills}
              />
            </div>
          </div>

          <div className="section profile-pic">
            <h3>Upload Profile Picture</h3>
            <div className="row">
              <input
                type="file"
                name="profile"
                accept="image/*"
                onChange={handleChange}
              />
              {formData.profile && (
                <div className="profile-pic-preview">
                  <img
                    src={URL.createObjectURL(formData.profile)}
                    alt="Profile Preview"
                    width="100"
                    height="100"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="section education">
            <h3>Education</h3>
            <div className="certification-upload">
              <input
                type="text"
                name="departmentName"
                placeholder="Department Name"
                onChange={handleChange}
                value={formData.departmentName}
              />
              <input
                type="text"
                name="universityName"
                placeholder="university Name"
                onChange={handleChange}
                value={formData.universityName}
              />
              <input
                type="number" min="1"
                name="dateOfGraduation"
                placeholder="Date Of Graduation"
                onChange={handleChange}
                value={formData.dateOfGraduation}
              />
            </div>
          </div>

          <div className="section experience-section">
            <h3>Experience</h3>
            <div className="row">
              <input
                type="text"
                name="firstPositionTitle"
                placeholder="First Position title"
                onChange={handleChange}
                value={formData.firstPositionTitle}
              />
            </div>
            <div className="row">
              <textarea
                type="text"
                name="firstPositionDescription"
                placeholder="First Position Description"
                rows="3"
                onChange={handleChange}
                value={formData.firstPositionDescription}
              />
              </div>
            <div className="row">
              <input
                type="number" min="1"
                name="firstPositionEndDate"
                placeholder="First Position End Date"
                onChange={handleChange}
                value={formData.firstPositionEndDate}
              />
            </div>
            <div className="row mt-5">
              <input
                type="text"
                name="secondPositionTitle"
                placeholder="Second Position title"
                onChange={handleChange}
                value={formData.secondPositionTitle}
              />
            </div>
            <div className="row">
              <textarea
                type="text"
                name="secondPositionDescription"
                placeholder="Second Position Description"
                rows="3"
                onChange={handleChange}
                value={formData.secondPositionDescription}
              />
              </div>
            <div className="row">
              <input
                type="number" min="1"
                name="secondPositionEndDate"
                placeholder="Second Position End Date"
                onChange={handleChange}
                value={formData.secondPositionEndDate}
              />
            </div>
            <div className="row mt-5">
              <input
                type="text"
                name="thirdPositionTitle"
                placeholder="Third Position title"
                onChange={handleChange}
                value={formData.thirdPositionTitle}
              />
            </div>
            <div className="row">
              <textarea
                type="text"
                name="thirdPositionDescription"
                placeholder="Third Position Description"
                rows="3"
                onChange={handleChange}
                value={formData.thirdPositionDescription}
              />
              </div>
            <div className="row">
              <input
                type="number" min="1"
                name="thirdPositionEndDate"
                placeholder="Third Position End Date"
                onChange={handleChange}
                value={formData.thirdPositionEndDate}
              />
            </div>
          </div>
          <div className="section project-section">
            <h3>Projects</h3>
            <div className="row">
              <input
                type="text"
                name="firstProjectName"
                placeholder="First Project Name"
                onChange={handleChange}
                value={formData.firstProjectName}
              />
            </div>
            <div className="row">
              <textarea
                type="text"
                name="firstProjectDescription"
                placeholder="First Project Description"
                rows="3"
                onChange={handleChange}
                value={formData.firstProjectDescription}
              />
              </div>
            <div className="row">
              <input
                type="file"
                name="firstProjectPicture"
                accept="image/*"
                onChange={handleChange}
              />
              {formData.firstProjectPicture && (
                <div className="profile-pic-preview">
                  <img
                    src={URL.createObjectURL(formData.firstProjectPicture)}
                    alt="First Project Picture"
                    width="100"
                    height="100"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
              )}
            </div>
            <div className="row mt-5">
              <input
                type="text"
                name="secondProjectName"
                placeholder="Second Project Name"
                onChange={handleChange}
                value={formData.secondProjectName}
              />
            </div>
             <div className="row">
              <textarea
                type="text"
                name="secondProjectDescription"
                placeholder="Second Project Description"
                rows="3"
                onChange={handleChange}
                value={formData.secondProjectDescription}
              />
              </div>
            <div className="row">
              <input
                type="file"
                name="secondProjectPicture"
                accept="image/*"
                onChange={handleChange}
              />
              {formData.secondProjectPicture && (
                <div className="profile-pic-preview">
                  <img
                    src={URL.createObjectURL(formData.secondProjectPicture)}
                    alt="Second Project Picture"
                    width="100"
                    height="100"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
              )}
            </div>
            <div className="row mt-5">
              <input
                type="text"
                name="thirdProjectName"
                placeholder="Third Project Name"
                onChange={handleChange}
                value={formData.thirdProjectName}
              />
            </div>
             <div className="row">
              <textarea
                type="text"
                name="thirdProjectDescription"
                placeholder="Third Project Description"
                rows="3"
                onChange={handleChange}
                value={formData.thirdProjectDescription}
              />
              </div>
            <div className="row">
              <input
                type="file"
                name="thirdProjectPicture"
                accept="image/*"
                onChange={handleChange}
              />
              {formData.thirdProjectPicture && (
                <div className="profile-pic-preview">
                  <img
                    src={URL.createObjectURL(formData.thirdProjectPicture)}
                    alt="Third Project Picture"
                    width="100"
                    height="100"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="section social-links">
            <h3>Social Links</h3>
            <div className="row">
              <input
                type="text"
                name="linkedinUrl"
                placeholder="LinkedIn URL"
                onChange={handleChange}
                value={formData.linkedinUrl}
              />
              <input
                type="text"
                name="facebookUrl"
                placeholder="Facebook URL"
                onChange={handleChange}
                value={formData.facebookUrl}
              />
              </div>
            <div className="row">
              <input
                type="url"
                name="instagramUrl"
                placeholder="Instagram URL"
                onChange={handleChange}
                value={formData.instagramUrl}
              />
              <input
                type="url"
                name="xUrl"
                placeholder="X URL"
                onChange={handleChange}
                value={formData.xUrl}
              />
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
            .mt-5 {
              margin-top: 50px;
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
</div>

      <Footer />
    </>
  );
};

export default DataForm;
