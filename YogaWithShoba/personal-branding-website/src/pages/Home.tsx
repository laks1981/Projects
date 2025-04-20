import React from 'react';
import BookingForm from '../components/BookingForm';
import Schedule from '../components/Schedule';
import DemoVideos from '../components/DemoVideos';
import PaymentIntegration from '../components/PaymentIntegration';
import './Home.css';
import { Link } from 'react-router-dom';
import vinyasaImg from '../assets/vinyasa.jpg';
import restorativeImg from '../assets/restorative.jpg';
import meditationImg from '../assets/meditation.jpg';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Sahasrara Yoga</h1>
          <p>Where Earth meets the Universe — Find balance, breath, and bliss.</p>
          <div className="earthy-separator"></div>
          <Link to="/classes" className="cta-button">Explore Classes</Link>
        </div>
      </header>

      <section className="about">
        <h2>Our Philosophy</h2>
        <p>
          Rooted in ancient wisdom and universal connection, we guide you through mindful
          movements and meditative journeys. Whether you're a beginner or experienced yogi,
          our sanctuary welcomes you.
        </p>
      </section>

      <section className="highlights">
        <h2>What We Offer</h2>
        <div className="cards">
          <div className="card">
          <img src={vinyasaImg} alt="Vinyasa Flow Yoga" />
            <h3>Vinyasa Flow</h3>
            <p>Build strength and flexibility through flowing sequences aligned with breath.</p>
          </div>
          <div className="card">
          <img src={restorativeImg} alt="Restorative Yoga" />
            <h3>Restorative Yoga</h3>
            <p>Slow down and restore with deep stretches and supported poses.</p>
          </div>
          <div className="card">
            <img src={meditationImg} alt="Guided Meditation" />
            <h3>Guided Meditation</h3>
            <p>Connect to inner peace and cosmic awareness through mindful meditation.</p>
          </div>
        </div>
      </section>

      <section className="cta-booking">
        <h2>Ready to begin your journey?</h2>
        <Link to="/booking" className="cta-button">Book a Class</Link>
      </section>
    </div>
  );
};

export default Home;
