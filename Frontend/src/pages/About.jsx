import React from "react";
import "./page.css";

const About = () => {
  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <span className="hero-badge">Our Journey</span>
          <h1>Bringing the choice of top restaurants right to your doorstep</h1>
          <p>
            We are on a mission to redefine food delivery by connecting you with your favorite 
            local eateries, culinary artists, and global chains seamlessly, quickly, and with 
            uncompromising quality.
          </p>
        </div>
      </section>

      {/* Stats Dashboard Banner */}
      <section className="about-stats">
        <div className="stat-box">
          <h3>500+</h3>
          <p>Restaurant Partners</p>
        </div>
        <div className="stat-box">
          <h3>20M+</h3>
          <p>Happy Meals Delivered</p>
        </div>
        <div className="stat-box">
          <h3>15 Mins</h3>
          <p>Average Delivery Time</p>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="about-values">
        <h2 className="section-title">What Drives Us</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>
              Our complex routing and dedicated delivery fleet ensure your food 
              arrives piping hot, exactly when you expect it.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🍲</div>
            <h3>Curated Selection</h3>
            <p>
              From neighborhood hidden gems to high-end fine dining, we partner with 
              verified kitchens prioritizing hygiene and flavor.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">📱</div>
            <h3>Seamless UX</h3>
            <p>
              No friction, just food. Live order tracking, personalized recommendations, 
              and effortless 1-tap checkouts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;