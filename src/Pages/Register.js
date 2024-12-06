import React, { useState } from 'react';
import './Register.css';
import Banner from '../components/Banner/Banner'

import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
const Register = () => {
  const [formData, setFormData] = useState({
    userType: '',  // Director or Artist
    name: '',
    email: '',
    phoneNumber: '', // Added phone number field
    password: '',
    confirmPassword: '',
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
    const phonePattern = /^[0-9]{10}$/; // Simple validation for 10-digit phone numbers (change as needed)
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    
    if (!formData.name || !formData.email || !formData.password || !formData.userType || !formData.phoneNumber) {
      setError('Please fill in all fields');
      return false;
    }

    if (!phonePattern.test(formData.phoneNumber)) {
      setError('Please enter a valid phone number');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage('Registration successful!');
      // Here you can handle actual form submission, like sending data to a backend API
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
    <Banner/>  
    <Navbar/>   
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="userType">I am a</label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            required
          >
            <option value="">Select your role</option>
            <option value="director">Director</option>
            <option value="artist">Artist</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
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

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Register;
