import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Logo from "./assests/images/reflexcylogo.png";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
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
            background: linear-gradient(135deg, #d0f0f3, #bde0e5);
            padding: 20px;
          }

          .login-box {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.2);
            width: 400px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .login-box:hover {
            transform: scale(1.03);
            box-shadow: 12px 12px 25px rgba(0, 0, 0, 0.3);
          }

          .logo {
            width: 100px;
            margin-bottom: 15px;
          }

          .input-field {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 2px solid #00796b;
            border-radius: 8px;
            background: #f0fdfb;
            transition: all 0.3s ease;
          }

          .input-field:focus {
            border-color: #004d40;
            box-shadow: 0px 0px 10px rgba(0, 77, 64, 0.5);
            outline: none;
          }

          .submit-button {
            width: 100%;
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
            box-shadow: 0px 0px 15px rgba(0, 77, 64, 0.5);
          }

          .forgot-password {
            font-size: 14px;
            display: block;
            text-align: right;
            margin-bottom: 10px;
            color: #004d40;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .forgot-password:hover {
            color: #00251a;
          }
        `}
      </style>
      <Navbar />
      <div className="container">
        <div className="login-box">
          <img src={Logo} alt="Reflexcy Logo" className="logo" />
          <h2>
            <b>Welcome Back!</b>
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              required
            />
            <span className="forgot-password">Forgot your password?</span>
            <button type="submit" className="submit-button">
              Log In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
