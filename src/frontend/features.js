import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFolderOpen,
  FaPaintBrush,
  FaCogs,
  FaMobileAlt,
  FaCloudUploadAlt,
  FaMoon,
  FaGlobe,
  FaDownload,
} from "react-icons/fa";

const FeaturesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="features-page">
      <Navbar />
      <section className="hero-section" data-aos="fade">
        <h1>Our Key Features</h1>
        <p>Discover all the amazing features of our portfolio builder.</p>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="feature-card" data-aos="fade-up">
            <FaFolderOpen className="icon" />
            <h3>Portfolio Templates</h3>
            <p>Choose from a variety of beautifully designed templates.</p>
          </div>
          <div className="feature-card" data-aos="fade-up">
            <FaPaintBrush className="icon" />
            <h3>Customization</h3>
            <p>Fully customizable layouts, colors, and fonts.</p>
          </div>
          <div className="feature-card" data-aos="fade-up">
            <FaCogs className="icon" />
            <h3>Easy-to-Use Editor</h3>
            <p>No coding required; drag and drop content.</p>
          </div>
          <div className="feature-card" data-aos="fade-up">
            <FaMobileAlt className="icon" />
            <h3>Mobile-Responsive Design</h3>
            <p>Portfolios look great on any device.</p>
          </div>
          <div className="feature-card" data-aos="fade-up">
            <FaCloudUploadAlt className="icon" />
            <h3>Content Upload</h3>
            <p>Easily upload images, videos, and documents.</p>
          </div>
          <div className="feature-card" data-aos="fade-up">
            <FaMoon className="icon" />
            <h3>Light & Dark Mode</h3>
            <p>Choose between light and dark modes.</p>
          </div>
          <div className="feature-card" data-aos="fade-up">
            <FaGlobe className="icon" />
            <h3>Multi-Language Support</h3>
            <p>Create portfolios in multiple languages.</p>
          </div>
          <div className="feature-card" data-aos="fade-up">
            <FaDownload className="icon" />
            <h3>Easy Export & Download</h3>
            <p>Download or share your portfolio with one click.</p>
          </div>
        </div>
      </section>

      <section className="cta-section" data-aos="fade">
        <h2>Ready to Build Your Portfolio?</h2>
        <p>Start creating your personalized portfolio with ease and style.</p>
        <button className="cta-button">Get Started</button>
      </section>

      <Footer />

      <style jsx>{`
        .features-page {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .hero-section {
          background-color: #f4f4f4;
          padding: 110px 20px 50px 20px;
          text-align: center;
        }

        .hero-section h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .hero-section p {
          font-size: 1.2rem;
          color: #555;
        }

        .features-section {
          padding: 50px 20px;
          background-color: #fff;
        }

        .features-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          justify-content: center;
        }

        .feature-card {
          background-color: #f8f8f8;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease-in-out;
        }

        .feature-card:hover {
          transform: translateY(-10px);
        }

        .icon {
          font-size: 3rem;
          margin-bottom: 15px;
          color: #9cd1c9;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .feature-card p {
          color: #555;
        }

        .cta-section {
          background-color: rgb(255, 255, 255);
          color: black;
          text-align: center;
          padding: 50px 20px;
        }

        .cta-section h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .cta-section p {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }

        .cta-button {
          background-color: white;
          color: #000;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          cursor: pointer;
          border-radius: 4px;
        }

        .cta-button:hover {
          background-color: #9cd1c9;
        }

        @media (max-width: 1024px) {
          .features-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-section h1 {
            font-size: 2rem;
          }

          .hero-section p {
            font-size: 1rem;
          }

          .feature-card h3 {
            font-size: 1.2rem;
          }

          .cta-section h2 {
            font-size: 1.5rem;
          }

          .cta-section p {
            font-size: 1rem;
          }

          .cta-button {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 600px) {
          .features-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturesPage;
