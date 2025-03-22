import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./frontend/signup.js";
import HomePage from "./frontend/Homepage.js";
import EditProfile from "./frontend/EditProfile.js";
import Whyus from "./frontend/whyus.js";
import Login from "./frontend/Login.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />;
        <Route path="/signup" element={<Signup />} />;
        <Route path="/edit" element={<EditProfile />} />;
        <Route path="/why-us" element={<Whyus />} />;
        <Route path="/login" element={<Login />} />;
      </Routes>
    </Router>
  );
}

export default App;
