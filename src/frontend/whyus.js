import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import whyimg from "./assests/images/whyus1.png";
import whyus from "./assests/images/whyus2.png";
import userimg from "./assests/images/moha.png";

const WhyUs = () => {
  useEffect(() => {
    document.body.classList.add("page-enter");
    return () => document.body.classList.remove("page-enter");
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="section">
        <div className="whyus-title interactive">Why Us ? Why Reflexcy?</div>
        <p className="whyus-body1 glass-morph">
          At Reflexcy, we believe that everyone deserves a personalized platform
          to showcase their achievements, creativity, and professional journey.
          That’s why we built "Reflexcy" that adapts to your style, needs, and
          goals, making it easy to create an impactful online presence.
        </p>
      </div>
      <div className="section different-container">
        <div className="different-title interactive">
          What makes us Different?
        </div>
        <div className="different-content">
          <div className="different-item glass-morph">
            <p>
              "Reflexcy makes it easy for anyone to create a personalized,
              professional portfolio. Our platform offers customizable designs
              that let you showcase your work in a way that reflects your unique
              style—no coding or design experience needed."
            </p>
          </div>
          <div className="different-item">
            <img
              src={whyimg}
              alt="whyimg1"
              className="whyimg interactive-img floating"
            />
          </div>
        </div>
      </div>
      <div className="section what-we-do-container">
        <div className="what-we-do-title interactive">What We Do !?</div>
        <div className="what-we-do-content">
          <div className="what-we-do-item">
            <img
              src={whyus}
              alt="whatwedoimg"
              className="whyimg interactive-img floating"
            />
          </div>
          <div className="what-we-do-item glass-morph">
            <p>
              We exist to help others turn their ideas into great designs
              faster, easier, and better. We put innovative technology—like
              AI—and best-quality content within reach of everyone, including
              designers, marketers, small business owners, educators, and
              content creators.
            </p>
          </div>
        </div>
      </div>
      <div className="section user-feedback-container">
        <div className="user-feedback-title interactive">
          Our Happy Users !!
        </div>
        <div className="user-feedback-content">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="feedback-card glass-morph">
              <img src={userimg} alt="user-feedback" className="user-image" />
              <p>
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year.
              </p>
              <div className="user-rating">⭐⭐⭐⭐☆</div>
              <div className="user-name">Mohanad BazerBashi</div>
              <div className="user-role">Designer</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhyUs;

const styles = document.createElement("style");
styles.innerHTML = `
  body.page-enter {
    animation: fadeIn 1s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .section {
    margin-bottom: 80px;
  }

  .different-content, .what-we-do-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: -300px; /* Reduced space between text and image */
  flex-wrap: wrap;
}

.different-item, .what-we-do-item {
  flex: 1;
  max-width: 750px; /* Adjusted width for better alignment */
  text-align: center;
}

/* Keep the same styles for images */
.whyimg {
  width: 100%;
  max-width: 350px; /* Adjusted image size slightly */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.whyimg:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
}

.glass-morph {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
  text-align: center;
  max-width: 500px; /* Smaller width */
  margin: 0 auto; /* Centers it */
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.glass-morph:hover {
  background:#9CD1C9; 
  transform: scale(1.05);
  box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.4);
}
  .interactive {
    margin: 50px auto;
    width: 50%;
    background-color: #85AFB1;
    padding: 40px;
    border-radius: 20px;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .interactive:hover {
    transform: scale(1.1);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
  }

  .user-feedback-content {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .feedback-card {
    width: 250px;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
  }

  .user-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  .user-rating {
    font-size: 20px;
    margin: 10px 0;
  }

  .user-name {
    font-weight: bold;
    color: #007BFF;
  }

  .user-role {
    font-style: italic;
  }`;
document.head.appendChild(styles);
