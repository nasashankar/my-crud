import React from 'react';
import './Banner.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="banner">
      <Link to="/Home"><img src="/path/to/your/logo.png" alt="Logo" /></Link>
    </div>
  );
}

export default Banner;