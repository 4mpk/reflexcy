import React, { useState } from "react";

const App = () => {
  const [buttonHover, setButtonHover] = useState(false);
  const [cardHover, setCardHover] = useState(false);

  const features = [
    {
      title: "Portfolio Templates",
      description:
        "Choose from a variety of beautifully designed templates that suit your style and profession.",
      icon: "🖼️",
    },
    {
      title: "Customization",
      description:
        "Fully customizable layouts, colors, and fonts to make your portfolio truly yours.",
      icon: "🎨",
    },
    {
      title: "Easy-to-Use Editor",
      description:
        "No coding required! Simply drag and drop your content to build your portfolio.",
      icon: "🔧",
    },
    {
      title: "Mobile-Responsive Design",
      description:
        "Your portfolio will look amazing on any device, from desktop to mobile.",
      icon: "📱",
    },
    {
      title: "Content Upload",
      description:
        "Easily upload images, videos, and documents to showcase your work.",
      icon: "📤",
    },
    {
      title: "Light & Dark Mode",
      description:
        "Now you can create portfolios in light or dark mode for a modern, professional look.",
      icon: "🌞🌚",
    },
    {
      title: "Multi-Language Support",
      description:
        "Create portfolios in multiple languages to reach a broader audience.",
      icon: "🌐",
    },
  ];

  const styles = {
    app: {
      fontFamily: "'Poppins', sans-serif",
      textAlign: "center",
      padding: "0",
      margin: "0",
      backgroundColor: "#f4f5f7",
      color: "#333",
    },
    hero: {
      background: "linear-gradient(135deg, #3b7b8c, #5b9b9d)",
      color: "white",
      padding: "100px 30px",
      borderBottom: "5px solid #ffffff",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    },
    heroTitle: {
      fontSize: "3.5rem",
      marginBottom: "15px",
      fontWeight: "700",
      letterSpacing: "-1px",
    },
    heroText: {
      fontSize: "1.4rem",
      marginBottom: "30px",
      lineHeight: "1.8",
    },
    ctaButton: {
      backgroundColor: buttonHover ? "#3c9bbd" : "#2b8b97",
      color: "white",
      padding: "16px 32px",
      border: "none",
      cursor: "pointer",
      fontSize: "1.3rem",
      marginTop: "20px",
      borderRadius: "50px",
      transition: "background-color 0.3s, transform 0.2s",
      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
    },
    ctaButtonHover: {
      transform: "scale(1.1)",
    },
    features: {
      marginTop: "60px",
      padding: "50px 30px",
      backgroundColor: "white",
      borderTop: "5px solid #e0e0e0",
    },
    featuresTitle: {
      fontSize: "2.8rem",
      marginBottom: "50px",
      fontWeight: "700",
    },
    featureList: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
    },
    featureCard: {
      width: "300px",
      padding: "30px",
      border: "1px solid #e4e4e4",
      borderRadius: "12px",
      backgroundColor: "white",
      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s, box-shadow 0.3s",
      textAlign: "left",
    },
    featureCardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
    },
    featureIcon: {
      fontSize: "3rem",
      color: "#3b7b8c",
    },
    featureTitle: {
      fontSize: "1.8rem",
      marginTop: "15px",
      fontWeight: "600",
      color: "#333",
    },
    demo: {
      backgroundColor: "#f0f5f5",
      padding: "80px 20px",
    },
    demoTitle: {
      fontSize: "2.2rem",
      marginBottom: "25px",
      fontWeight: "700",
    },
    demoButton: {
      backgroundColor: "#5b9b9d",
      color: "white",
      padding: "14px 35px",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
      fontSize: "1.2rem",
      transition: "background-color 0.3s",
    },
    demoButtonHover: {
      backgroundColor: "#2b8b97",
    },
    finalCta: {
      backgroundColor: "#f4f5f7",
      padding: "50px 20px",
      marginTop: "80px",
      borderTop: "5px solid #e4e4e4",
    },
    finalCtaTitle: {
      fontSize: "2.5rem",
      marginBottom: "25px",
      fontWeight: "700",
    },
  };

  return (
    <div style={styles.app}>
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Stay updated with the latest features and improvements to make your
          portfolio building experience even better!
        </h1>
        <p style={styles.heroText}>
          Our powerful features let you easily design and showcase your work in
          a professional and stylish way.
        </p>
        <button
          style={{
            ...styles.ctaButton,
            ...(buttonHover ? styles.ctaButtonHover : {}),
          }}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Start Building Now
        </button>
      </header>

      {/* Features Section */}
      <section style={styles.features}>
        <h2 style={styles.featuresTitle}>Key Features</h2>
        <div style={styles.featureList}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                ...styles.featureCard,
                ...(cardHover ? styles.featureCardHover : {}),
              }}
              onMouseEnter={() => setCardHover(true)}
              onMouseLeave={() => setCardHover(false)}
            >
              <span style={styles.featureIcon}>{feature.icon}</span>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section style={styles.demo}>
        <h2 style={styles.demoTitle}>See It In Action</h2>
        <p>Try out our builder and preview your portfolio in real-time!</p>
        <button
          style={{
            ...styles.demoButton,
            ...(buttonHover ? styles.demoButtonHover : {}),
          }}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Try Demo Now
        </button>
      </section>

      {/* Final Call to Action */}
      <footer style={styles.finalCta}>
        <h2 style={styles.finalCtaTitle}>
          Start Building Your Portfolio Today!
        </h2>
        <p>Ready to showcase your skills? Sign up now and get started.</p>
        <button
          style={{
            ...styles.ctaButton,
            ...(buttonHover ? styles.ctaButtonHover : {}),
          }}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Create Your Portfolio
        </button>
      </footer>
    </div>
  );
};

export default App;
