// 📁 src/pages/Home.jsx
import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faShieldAlt, faComments } from "@fortawesome/free-solid-svg-icons";

const Home = () => (
  <div className="home-container">
    <section className="hero" id="home">
      <div className="hero-content fade-in">
        <img src="/Hehe.png" className="logo-hero" alt="Karvan e Sabriya Logo" />
        <h1>Karvan e Sabriya</h1>
        <p className="hero-tagline">Soulful Journeys. Trusted Guidance.</p>
        <div className="hero-cta">
          <a href="#packages" className="btn-primary">Explore Packages</a>
          <a href="#contact" className="btn-secondary">Contact Us</a>
        </div>
      </div>
    </section>

    <section className="features-grid fade-up">
      <div className="feature-item">
        <FontAwesomeIcon icon={faPlane} size="2x" className="feature-icon bounce"/>
        <h3>Destinations</h3>
        <p>Majestic mountains, spiritual cities, deserts, and valleys.</p>
      </div>
      <div className="feature-item">
        <FontAwesomeIcon icon={faShieldAlt} size="2x" className="feature-icon bounce"/>
        <h3>Trusted Service</h3>
        <p>Secure booking, 24/7 support, and transparent pricing.</p>
      </div>
      <div className="feature-item">
        <FontAwesomeIcon icon={faComments} size="2x" className="feature-icon bounce"/>
        <h3>Community</h3>
        <p>Thousands of satisfied travelers and heartfelt reviews.</p>
      </div>
    </section>

    <section className="feature-box fade-up" id="about">
      <h2>About Us</h2>
      <p>Dedicated to crafting soulful and spiritual journeys across regions, blending culture with comfort and care.</p>
    </section>

    <section className="feature-box fade-up" id="destinations">
      <h2>Destinations</h2>
      <p>Discover majestic mountains, spiritual cities, deserts, and valleys with our expertly curated travel routes.</p>
    </section>

    <section className="feature-box fade-up" id="packages">
      <h2>Packages</h2>
      <p>Choose from family trips, group umrah, student tours, or customize your own — designed with care.</p>
    </section>

    <section className="feature-box fade-up" id="booking">
      <h2>Booking</h2>
      <p>Hassle-free online booking, secure payments, and instant confirmations at your fingertips.</p>
    </section>

    <section className="feature-box fade-up" id="testimonials">
      <h2>Testimonials</h2>
      <p>Read heartfelt reviews from hundreds of travelers who explored the world with Karvan e Sabriya.</p>
    </section>

    <section className="feature-box fade-up" id="blog">
      <h2>Our Blog</h2>
      <p>Get inspired with travel tips, destination stories, packing guides, and spiritual travel experiences.</p>
    </section>

    <section className="feature-box fade-up" id="contact">
      <h2>Contact</h2>
      <p>Reach out via WhatsApp, call, or our online form. We’re always here to guide your next journey.</p>
    </section>
  </div>
);

export default Home;
