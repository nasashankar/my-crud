import React from 'react'
import './Services.css';
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function Services() {
  return (
    <>
        <Banner/>  
        <Navbar/>   
        <div className="services-container">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Explore the powerful tools and services we provide for both artists and directors to make the casting and audition process seamless and efficient.</p>
      </header>

      <section className="services-artists">
        <h2>For Artists</h2>
        <div className="service-item">
          <h3>Create Your Professional Profile</h3>
          <p>Build a comprehensive portfolio with headshots, demo reels, and your resume to showcase your talent to casting professionals.</p>
        </div>
        <div className="service-item">
          <h3>Access to Auditions</h3>
          <p>Browse and apply to auditions that match your skill set. Get real-time notifications for new opportunities.</p>
        </div>
        <div className="service-item">
          <h3>Networking & Exposure</h3>
          <p>Gain exposure to casting directors, producers, and industry professionals. Expand your network and grow your career.</p>
        </div>
      </section>

      <section className="services-directors">
        <h2>For Directors</h2>
        <div className="service-item">
          <h3>Post Casting Calls</h3>
          <p>Easily create and manage casting calls for your projects. Customize listings with detailed descriptions and role requirements.</p>
        </div>
        <div className="service-item">
          <h3>Streamlined Audition Management</h3>
          <p>Review applications, schedule auditions, and manage candidates all in one place with our easy-to-use platform.</p>
        </div>
        <div className="service-item">
          <h3>Direct Communication with Talent</h3>
          <p>Communicate directly with artists via chat and video calls. Offer feedback and schedule live auditions with ease.</p>
        </div>
      </section>

      <section className="services-additional">
        <h2>Additional Features for Both Artists & Directors</h2>
        <div className="service-item">
          <h3>Real-Time Notifications</h3>
          <p>Stay updated on auditions, applications, and feedback through real-time notifications.</p>
        </div>
        <div className="service-item">
          <h3>Secure Payment Integration</h3>
          <p>Handle payments securely and easily, whether you’re an artist receiving compensation or a director managing payments for talent.</p>
        </div>
        <div className="service-item">
          <h3>User-Friendly Interface</h3>
          <p>Enjoy a simple, intuitive platform that is easy to navigate on both desktop and mobile devices.</p>
        </div>
      </section>

      <section className="services-cta">
        <h2>Get Started Today</h2>
        <p>Join the Media Audition platform today and start exploring endless possibilities for your career or project. Whether you're an artist or a director, we’ve got the tools you need to succeed.</p>
        <button className="cta-button" >Sign Up Now</button>
      </section>
    </div>
        <Footer/>
    </>
  )
}
