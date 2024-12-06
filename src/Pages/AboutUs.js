import React from 'react'
import './Aboutus.css';
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
export default function AboutUs() {
  return (
    <>
        <Banner/>  
        <Navbar/>   
        <div className="about-us-container">
      <header className="about-us-header">
        <h1>Welcome to Media Audition</h1>
        <p>
          The premier platform that connects talented artists with visionary
          directors and casting professionals.
        </p>
        <img 
          src="https://via.placeholder.com/1200x400?text=Media+Audition" 
          alt="Media Audition Banner" 
          className="about-us-banner"
        />
      </header>

      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <div className="section-content">
          <p>
            At <strong>Media Audition</strong>, we believe that talent should always find its way to the right audience. Whether you're an actor, voice artist, musician, model, or any other type of performer, we provide a space for you to showcase your skills to directors, casting agents, and production teams worldwide.
          </p>
          <img 
            src="https://via.placeholder.com/600x400?text=Our+Mission" 
            alt="Our Mission" 
            className="section-image"
          />
        </div>
        <p>
          For directors and producers, we simplify the process of discovering new talent, managing auditions, and making informed casting decisions, all in one user-friendly platform. We’re here to bridge the gap between creativity and opportunity, empowering both artists and directors to bring their vision to life.
        </p>
      </section>

      <section className="about-us-offer">
        <h2>What We Offer</h2>

        <div className="offer-section">
          <h3>For Artists</h3>
          <ul>
            <li>
              <strong>Showcase Your Talent:</strong> Build a profile to display your experience, portfolio, and demo reels.
            </li>
            <li>
              <strong>Instant Access to Auditions:</strong> Browse and apply to auditions that match your profile, with notifications keeping you up-to-date.
            </li>
            <li>
              <strong>Global Reach:</strong> Connect with directors, filmmakers, and producers from across the world.
            </li>
          </ul>
          <img 
            src="https://via.placeholder.com/600x400?text=For+Artists" 
            alt="For Artists" 
            className="offer-image"
          />
        </div>

        <div className="offer-section">
          <h3>For Directors</h3>
          <ul>
            <li>
              <strong>Efficient Casting:</strong> Manage audition postings, review talent applications, and shortlist candidates all in one place.
            </li>
            <li>
              <strong>Easy Communication:</strong> Direct messaging and live video auditions help you engage with artists in real-time.
            </li>
            <li>
              <strong>Streamlined Audition Process:</strong> Simplify the way you find and select the right talent for your projects.
            </li>
          </ul>
          <img 
            src="https://via.placeholder.com/600x400?text=For+Directors" 
            alt="For Directors" 
            className="offer-image"
          />
        </div>
      </section>

      <section className="about-us-vision">
        <h2>Our Vision</h2>
        <div className="section-content">
          <p>
            We envision a world where talent and opportunity meet effortlessly. By connecting the right artists with the right projects, we hope to empower both sides of the creative industry and contribute to bringing innovative ideas to life.
          </p>
          <img 
            src="https://via.placeholder.com/600x400?text=Our+Vision" 
            alt="Our Vision" 
            className="section-image"
          />
        </div>
        <p>
          Whether you're a budding artist looking for your big break or a director scouting the next star for your production, <strong>Media Audition</strong> is here to make the process easier, faster, and more rewarding for everyone involved.
        </p>
      </section>

      <section className="join-us">
        <h2>Join Us Today</h2>
        <div className="section-content">
          <p>
            At <strong>Media Audition</strong>, we’re dedicated to building a community that supports creative growth and professional development. Join us today and start connecting with the people who can help take your career to the next level.
          </p>
          <img 
            src="https://via.placeholder.com/600x400?text=Join+Us" 
            alt="Join Us" 
            className="section-image"
          />
        </div>
      </section>
    </div>
        <Footer/>
    </>
  )
}