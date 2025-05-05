import React, { useState } from "react";

const ContactSupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission
    alert("Support request submitted");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Contact Support</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
            required
          />
        </label>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
            required
          />
        </label>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Describe your issue"
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              minHeight: "150px",
            }}
            required
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "0.8rem 1.5rem",
            borderRadius: "8px",
            backgroundColor: "#0057ff",
            color: "#fff",
            border: "none",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactSupportPage;
