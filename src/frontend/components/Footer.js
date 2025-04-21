import React from "react";

function Footer() {
  return (
    <>
      {/* Include Font Awesome CDN for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />

      <footer
        style={{
          backgroundColor: "#9CD1C9", // Set footer background color to #9CD1C9 (light teal)
          color: "#000", // All text is black
          padding: "20px 20px", // Reduced padding to make the footer smaller
          textAlign: "center",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Copyright and Brand Info */}
          <p
            style={{
              fontSize: "14px",
              marginBottom: "8px", // Reduced margin between text elements
            }}
          >
            © 2025 REFLEXCY. All rights reserved.
          </p>

          {/* Contact Information */}
          <div
            style={{
              marginBottom: "15px", // Reduced margin
            }}
          >
            <p
              style={{
                fontSize: "14px",
                marginBottom: "6px", // Reduced margin
              }}
            >
              Phone:{" "}
              <a
                href="tel:+123456789"
                style={{
                  color: "#000", // Link text in black
                  textDecoration: "none",
                }}
              >
                +90 5345444755
              </a>
            </p>
            <p
              style={{
                fontSize: "14px",
              }}
            >
              Email:{" "}
              <a
                href="mailto:REFLEXCY@gmail.com"
                style={{
                  color: "#000", // Link text in black
                  textDecoration: "none",
                }}
              >
                Reflexcy@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div
            style={{
              marginBottom: "15px", // Reduced margin
            }}
          >
            <a
              href="https://www.instagram.com/moha_lens/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#000", // Icon color black
                textDecoration: "none",
                margin: "0 12px", // Reduced margin
                fontSize: "28px", // Icon size
                transition: "transform 0.3s ease, color 0.3s ease", // Animation for hover
              }}
              className="social-icon"
            >
              <i
                className="fab fa-instagram"
                style={{
                  fontSize: "28px", // Font Awesome icon size
                  color: "#000", // Force the icon color to black
                }}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohanad-bazerbashi-23064835a"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#000", // Icon color black
                textDecoration: "none",
                margin: "0 12px", // Reduced margin
                fontSize: "28px", // Icon size
                transition: "transform 0.3s ease, color 0.3s ease", // Animation for hover
              }}
              className="social-icon"
            >
              <i
                className="fab fa-linkedin"
                style={{
                  fontSize: "28px", // Font Awesome icon size
                  color: "#000", // Force the icon color to black
                }}
              ></i>
            </a>
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/971503011245"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#000", // Icon color black
                textDecoration: "none",
                margin: "0 12px", // Reduced margin
                fontSize: "28px", // Icon size
                transition: "transform 0.3s ease, color 0.3s ease", // Animation for hover
              }}
              className="social-icon"
            >
              <i
                className="fab fa-whatsapp"
                style={{
                  fontSize: "28px", // Font Awesome icon size
                  color: "#000", // Force the icon color to black
                }}
              ></i>
            </a>
          </div>

          {/* Navigation Links */}
          <div
            style={{
              marginBottom: "15px", // Reduced margin
            }}
          >
            <a
              href="/about-us"
              style={{
                color: "#000", // Link text in black
                textDecoration: "none",
                margin: "0 12px", // Reduced margin
                fontSize: "18px", // Font size
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "#FF6347")}
              onMouseOut={(e) => (e.target.style.color = "#000")}
            >
              About Us
            </a>
            <a
              href="/services"
              style={{
                color: "#000", // Link text in black
                textDecoration: "none",
                margin: "0 12px", // Reduced margin
                fontSize: "18px", // Font size
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "#FF6347")}
              onMouseOut={(e) => (e.target.style.color = "#000")}
            >
              Services
            </a>
            <a
              href="/privacy-policy"
              style={{
                color: "#000", // Link text in black
                textDecoration: "none",
                margin: "0 12px", // Reduced margin
                fontSize: "18px", // Font size
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "#FF6347")}
              onMouseOut={(e) => (e.target.style.color = "#000")}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              style={{
                color: "#000", // Link text in black
                textDecoration: "none",
                margin: "0 12px", // Reduced margin
                fontSize: "18px", // Font size
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "#FF6347")}
              onMouseOut={(e) => (e.target.style.color = "#000")}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      <style>
        {`
          .social-icon {
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .social-icon:hover {
            transform: scale(1.2); /* Slightly enlarge the icon on hover */
            color: #FF6347; /* Change the color to a red-orange on hover */
          }
        `}
      </style>
    </>
  );
}

export default Footer;
