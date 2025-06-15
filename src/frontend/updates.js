import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaRobot,
  FaChartLine,
  FaMicrophone,
  FaMobileAlt,
  FaUsers,
  FaPuzzlePiece,
} from "react-icons/fa";

const UpdatesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="updates-page">
      <Navbar />

      <section className="hero-section">
        <h1>Upcoming Features</h1>
        <p>
          We’re working hard to bring these exciting new tools to your portfolio
          builder experience!
        </p>
      </section>

      <section className="updates-section">
        <div className="updates-container">
          <div className="update-card" data-aos="fade-up">
            <FaRobot className="icon" />
            <h3>AI-Powered Suggestions</h3>
            <p>✨ Get intelligent content and design tips powered by AI.</p>
          </div>

          <div className="update-card" data-aos="fade-up">
            <FaChartLine className="icon" />
            <h3>Portfolio Analytics</h3>
            <p>✨ Track how often your portfolio is viewed and by whom!</p>
          </div>

          <div className="update-card" data-aos="fade-up">
            <FaMicrophone className="icon" />
            <h3>Voice-to-Text Builder</h3>
            <p>✨ Create your portfolio using voice commands!</p>
          </div>

          <div className="update-card" data-aos="fade-up">
            <FaMobileAlt className="icon" />
            <h3>Mobile Portfolio Editor</h3>
            <p>✨ Easily update your portfolio directly from your phone.</p>
          </div>

          <div className="update-card" data-aos="fade-up">
            <FaUsers className="icon" />
            <h3>Collaboration Tools</h3>
            <p>
              ✨ Invite teammates or mentors to collaborate on your portfolio.
            </p>
          </div>

          <div className="update-card" data-aos="fade-up">
            <FaPuzzlePiece className="icon" />
            <h3>Custom Widgets</h3>
            <p>✨ Add unique widgets like testimonials, carousels, and more!</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Got an idea?</h2>
        <p>Let us know what features you’d love to see next!</p>
        <button className="cta-button">Submit Feature Request</button>
      </section>

      <Footer />

      <style jsx>{`
        .updates-page {
          font-family: Arial, sans-serif;
          animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-section {
          background-color: #f4f4f4;
          padding: 110px 20px 60px 20px;
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

        .updates-section {
          padding: 50px 20px;
          background-color: #fff;
        }

        .updates-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .update-card {
          background-color: #f8f8f8;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: transform 0.3s ease-in-out;
        }

        .update-card:hover {
          transform: translateY(-10px);
        }

        .icon {
          font-size: 3rem;
          margin-bottom: 15px;
          color: #9cd1c9;
        }

        .update-card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .update-card p {
          color: #555;
        }

        .cta-section {
          background-color: #fff;
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
          color: #ff8c00;
          border: 2px solid #ff8c00;
          padding: 10px 20px;
          font-size: 1rem;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background-color: #9cd1c9;
          color: black;
          border-color: #9cd1c9;
        }

        @media (max-width: 1024px) {
          .updates-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .updates-container {
            grid-template-columns: 1fr;
          }

          .hero-section h1 {
            font-size: 2rem;
          }

          .hero-section p,
          .cta-section p {
            font-size: 1rem;
          }

          .cta-section h2 {
            font-size: 1.5rem;
          }

          .cta-button {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default UpdatesPage;
