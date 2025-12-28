import React from 'react';
import './theme.css';

const Career = () => {
  return (
    <section id="career" className="career-section neon-card" style={{ margin: '3rem auto', maxWidth: 800, padding: '2.5rem 2rem', background: '#fff' }}>
      <h2 className="neon-text" style={{ fontSize: '1.7rem', marginBottom: '1.2rem', fontWeight: 700, letterSpacing: 0.5 }}>
        Join Our <span className="glow-accent">Team</span>
      </h2>
      <p style={{ color: '#4b5563', fontSize: '1.08rem', lineHeight: 1.7 }}>
        We’re always looking for passionate, creative people who value simplicity and clarity. If you want to work in a friendly, pastel-inspired environment, reach out!
      </p>
    </section>
  );
};

export default Career;
