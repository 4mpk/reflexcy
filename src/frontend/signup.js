import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import Logo from "./assests/images/reflexcylogo.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <style>
        {`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #e0f7fa,rgb(210, 230, 232));
            padding: 20px;
          }

          .signup-box {
            background: #ffffff;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
            width: 420px;
            text-align: center;
            transition: transform 0.3s ease-in-out;
          }

          .signup-box:hover {
            transform: translateY(-5px);
            box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.3);
          }

          .right-box {
            margin-left: 30px;
            padding: 25px;
            text-align: center;
            background: #ffffff;
            border-radius: 15px;
            width: 370px;
            font-family: "Courier New", Courier, monospace;
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease-in-out;
          }

          .right-box:hover {
            transform: scale(1.05);
          }

          .logo {
            width: 300px;
            margin-bottom: 15px;
          }

          .social-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 90%;
            padding: 12px;
            border: none;
            border-radius: 25px;
            margin-bottom: 12px;
            cursor: pointer;
            background: white;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
          }

          .social-button:hover {
            transform: scale(1.05);
            box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
          }

          .input-field {
            width: 90%;
            padding: 12px;
            margin-bottom: 12px;
            border: 2px solid #ccc;
            border-radius: 8px;
            transition: all 0.3s ease;
          }

          .input-field:focus {
            border-color: #00bcd4;
            box-shadow: 3px 3px 10px rgba(0, 188, 212, 0.5);
            outline: none;
          }

          .submit-button {
            width: 90%;
            background: #00796b;
            color: white;
            padding: 12px;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s ease;
          }

          .submit-button:hover {
            background: #004d40;
            box-shadow: 5px 5px 15px rgba(0, 77, 64, 0.4);
          }
        `}
      </style>
      <Navbar />
      <div className="container">
        <div className="signup-box">
          <img src={Logo} alt="Reflexcy Logo" className="logo" />
          <button className="social-button">
            <FaGoogle color="#db4437" size={20} style={{ marginRight: 8 }} />
            Sign Up With Google
          </button>
          <button className="social-button">
            <FaFacebook color="#1877F2" size={20} style={{ marginRight: 8 }} />
            Sign Up With Facebook
          </button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
            />

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="checkbox"
              />
              I agree to Reflexcy Terms and privacy policy
            </label>

            <button type="submit" className="submit-button">Sign Up</button>
          </form>
        </div>
        <div className="right-box">
          <h2>Hello there, sign up to get started</h2>
          <p><b>REFLEXCY</b> helps showcase your creative work to everyone.</p>
          <button className="submit-button">Sign Up</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
