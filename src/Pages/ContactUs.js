import React, { useState } from 'react';
import './Contact.css'; // Include CSS file for styling
import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to API or email)
    console.log('Form Submitted', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
    <Banner/>  
    <Navbar/> 
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please reach out to us using the form below.</p>
      </header>

      <section className="contact-form-section">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
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
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message"
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <section className="contact-info">
        <h2>Our Address</h2>
        <p>
          <strong>Media Audition, Inc.</strong><br />
          123 Creative Avenue, Suite 456<br />
          Los Angeles, CA 90001<br />
          USA
        </p>

        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="##" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="###" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="###" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="##" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
