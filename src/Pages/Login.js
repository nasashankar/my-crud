import React, { useState } from 'react';
import './Login.css';
import Banner from '../components/Banner/Banner'

import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
const Login = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '', // Email or Phone Number field
    password: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const phonePattern = /^[0-9]{10}$/; // Simple 10-digit phone number validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Basic email validation

    // Check if password or email/phone field is empty
    if (!formData.emailOrPhone || !formData.password) {
      setError('Please fill in all fields');
      return false;
    }

    // Validate email or phone number
    if (!emailPattern.test(formData.emailOrPhone) && !phonePattern.test(formData.emailOrPhone)) {
      setError('Please enter a valid email address or phone number');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage('Login successful!');
      // Here you can handle actual form submission, like sending data to a backend API
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
     <Banner/>  
     <Navbar/>
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="emailOrPhone">Email Address or Phone Number</label>
          <input
            type="text"
            id="emailOrPhone"
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleChange}
            placeholder="Enter your email or phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
