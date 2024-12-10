import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#282c34",
        color: "white",
        padding: "20px 0",
        textAlign: "center",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Links Section */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <a
            href="#home"
            style={{ color: "white", textDecoration: "none", fontSize: "14px" }}
          >
           <Link to="/home"> Home</Link>
          </a>
          <a
            href="#about"
            style={{ color: "white", textDecoration: "none", fontSize: "14px" }}
          >
            <Link to="/aboutus">About Us</Link>
          </a>
          <a
            href="#services"
            style={{ color: "white", textDecoration: "none", fontSize: "14px" }}
          >
             <Link to="/services">Services</Link>
          </a>
          <a
            href="#contact"
            style={{ color: "white", textDecoration: "none", fontSize: "14px" }}
          >
            <Link to="/contactus">Contact</Link>
          </a>
        </div>

        {/* Copyright Section */}
        <p style={{ marginTop: "20px", fontSize: "12px" }}>
          © {new Date().getFullYear()} Media Audition. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
