import React, { useState, useEffect } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom"; // Importing Link for routing

export default function AuthPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(true);

  // Add smooth entry animation
  useEffect(() => {
    document.body.classList.add("page-loaded");
  }, []);

  return (
    <>
      <Navbar />
      {/* Wrap the auth content in a container with top and bottom padding */}
      <div className="authPage">
        <div
          className={`authContainer ${
            isSignUpMode ? "right-panel-active" : ""
          }`}
        >
          {/* Sign Up Form */}
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social-icon">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-icon">
                  <FaGooglePlusG />
                </a>
                <a href="#" className="social-icon">
                  <FaLinkedinIn />
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button>Sign Up</button>
            </form>
          </div>

          {/* Sign In Form */}
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Login</h1>
              <div className="social-container">
                <a href="#" className="social-icon">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-icon">
                  <FaGooglePlusG />
                </a>
                <a href="#" className="social-icon">
                  <FaLinkedinIn />
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              {/* Link to Forgot Password Page */}
              <Link
                to="/Forgetpass"
                style={{
                  color: "#007bff",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                Forgot your password?
              </Link>
              <button>Log In</button>
            </form>
          </div>

          {/* Overlay Panel */}
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login</p>
                <button
                  className="ghost"
                  onClick={() => setIsSignUpMode(false)}
                >
                  Login
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>
                  Enter your personal details and start your journey with us
                </p>
                <button className="ghost" onClick={() => setIsSignUpMode(true)}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Scoped styles for the auth page */}
      <style jsx>{`
        .authPage {
          background: #f6f5f7;
          padding-top: 80px;
          padding-bottom: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          animation: page-load 0.5s forwards;
        }

        @keyframes page-load {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .authContainer {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
          position: relative;
          overflow: hidden;
          width: 1000px;
          height: 550px;
          max-width: 100%;
          margin: 0 auto;
          transform: translateY(30px);
          animation: slide-up 0.16s ease-out forwards;
        }

        @keyframes slide-up {
          0% {
            transform: translateY(30px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .authContainer h1 {
          font-weight: bold;
          margin: 0;
        }
        .authContainer p {
          font-size: 16px;
          font-weight: 100;
          line-height: 20px;
          letter-spacing: 0.5px;
          margin: 20px 0 30px;
        }
        .authContainer span {
          font-size: 12px;
        }
        .authContainer a {
          color: #333;
          font-size: 14px;
          text-decoration: none;
          margin: 15px 0;
        }
        .authContainer button {
          border-radius: 20px;
          border: 1px solid #6fccbd;
          background-color: #6fccbd;
          color: #fff;
          font-size: 12px;
          font-weight: bold;
          padding: 12px 45px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: transform 80ms ease-in, background-color 0.3s ease;
          cursor: pointer;
        }
        .authContainer button:hover {
          background-color: #56b49e;
        }
        .authContainer button:active {
          transform: scale(0.95);
        }
        .authContainer button:focus {
          outline: none;
        }
        .authContainer button.ghost {
          background-color: transparent;
          border-color: #fff;
        }
        .authContainer button.ghost:hover {
          border-color: #6fccbd;
          color: #6fccbd;
        }
        .authContainer form {
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 50px;
          height: 100%;
          text-align: center;
        }

        .authContainer input {
          background-color: #eee;
          border: none;
          padding: 12px 15px;
          margin: 8px 0;
          width: 100%;
          transition: all 0.3s ease;
        }

        .authContainer input:focus {
          background-color: #ddd;
          border: 2px solid #6fccbd;
          transform: scale(1.02);
        }

        .authContainer .social-container {
          margin: 20px 0;
        }
        .authContainer .social-container a {
          border: 1px solid #ddd;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 5px;
          width: 40px;
          height: 40px;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        .authContainer .social-container a:hover {
          background-color: #6fccbd;
          border-color: #6fccbd;
        }
        .authContainer .social-container a svg {
          width: 20px;
          height: 20px;
          transition: fill 0.3s ease;
        }
        .authContainer .social-container a:hover svg {
          fill: #fff;
        }

        .form-container {
          position: absolute;
          top: 0;
          height: 100%;
          transition: all 0.6s ease-in-out;
        }
        .sign-in-container {
          left: 0;
          width: 50%;
          z-index: 3;
        }
        .sign-up-container {
          left: 0;
          width: 50%;
          opacity: 0;
          z-index: 1;
        }
        .right-panel-active .sign-in-container {
          transform: translateX(100%);
        }
        .right-panel-active .sign-up-container {
          transform: translateX(100%);
          opacity: 1;
          z-index: 5;
          animation: show 0.6s;
        }
        @keyframes show {
          0%,
          49.99% {
            opacity: 0;
            z-index: 1;
          }
          50%,
          100% {
            opacity: 1;
            z-index: 5;
          }
        }
        .overlay-container {
          position: absolute;
          top: 0;
          left: 50%;
          width: 50%;
          height: 100%;
          overflow: hidden;
          transition: transform 0.6s ease-in-out;
          z-index: 100;
        }
        .right-panel-active .overlay-container {
          transform: translateX(-100%);
        }
        .overlay {
          background: linear-gradient(to right, #198171, #6fccbd);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 0 0;
          color: #fff;
          position: relative;
          left: -100%;
          width: 200%;
          height: 100%;
          transform: translateX(0);
          transition: transform 0.6s ease-in-out;
        }
        .right-panel-active .overlay {
          transform: translateX(50%);
        }
        .overlay-panel {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 20px;
          text-align: center;
          top: 0;
          height: 100%;
          width: 50%;
          transform: translateX(0);
          transition: transform 0.6s ease-in-out;
          justify-content: center;
        }

        .overlay-left {
          transform: translateX(-20%);
        }
        .right-panel-active .overlay-left {
          transform: translateX(0);
        }
        .overlay-right {
          right: 0;
          transform: translateX(0);
        }
        .right-panel-active .overlay-right {
          transform: translateX(20%);
        }
      `}</style>
    </>
  );
}
