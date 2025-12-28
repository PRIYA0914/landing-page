import React from 'react';
import './theme.css';

const About = () => {
  return (
    <section id="about" className="about-section neon-card" style={{ margin: '3rem auto', maxWidth: 800, padding: '2.5rem 2rem', background: '#fff' }}>
      <h2 className="neon-text" style={{ fontSize: '1.7rem', marginBottom: '1.2rem', fontWeight: 700, letterSpacing: 0.5 }}>
        About <span className="glow-accent">Us</span>
      </h2>
      <p style={{ color: '#4b5563', fontSize: '1.08rem', lineHeight: 1.7 }}>
        Shrekium Technologies is dedicated to delivering clean, efficient, and user-friendly digital products. Our team values simplicity, clarity, and a pastel-inspired aesthetic that puts your content first.
      </p>
    </section>
  );
};

export default About;
