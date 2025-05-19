import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./frontend/signup.js";
import HomePage from "./frontend/Homepage.js";
import EditProfile from "./frontend/EditProfile.js";
import Whyus from "./frontend/whyus.js";
import AuthPage from "./frontend/Sign.js";
import Sidebar from "./frontend/components/Sidebar.js";
import Projectpage from "./frontend/Projectpage.js";
import Favorites from "./frontend/Favorites.js";
import Downloads from "./frontend/Downloads.js";
import ContactForm from "./frontend/contactform.js";
import Dataform from "./frontend/Dataform.js";
import Features from "./frontend/features.js";
import UpdatesPage from "./frontend/updates.js";
import ForgotPassword from "./frontend/Forgetpass.js";
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './frontend/AuthContext.js';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer position="top-left" autoClose={3000} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/why-us" element={<Whyus />} />
          <Route path="/authPage" element={<AuthPage />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/projects" element={<Projectpage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/dataform" element={<Dataform />} />
          <Route path="/features" element={<Features />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/forgetpass" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
