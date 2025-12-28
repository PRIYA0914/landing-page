
import React from 'react';
import './theme.css';

const illustration = (
  <svg width="340" height="220" viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 340, height: 'auto', display: 'block' }}>
    <ellipse cx="170" cy="110" rx="150" ry="90" fill="#f6f6fa" />
    <circle cx="90" cy="80" r="28" fill="#ffb74d" opacity="0.7" />
    <circle cx="250" cy="60" r="18" fill="#1976d2" opacity="0.18" />
    <circle cx="250" cy="170" r="14" fill="#ff7043" opacity="0.18" />
    <rect x="110" y="140" width="120" height="12" rx="6" fill="#e0e7ef" />
    <rect x="130" y="160" width="80" height="8" rx="4" fill="#e0e7ef" />
  </svg>
);

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="finpay-grid" style={{ alignItems: 'center', maxWidth: 1100, margin: '0 auto', padding: '0 2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 220, zIndex: 1, maxWidth: 340 }}>
          {illustration}
        </div>
        <div className="finpay-card" style={{ color: '#222b45', zIndex: 2, minWidth: 320, maxWidth: 500, height: '100%' }}>
          <div style={{ position: 'relative', width: '100%', marginBottom: 22 }}>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900, letterSpacing: 1.2, color: '#222b45', lineHeight: 1.1, display: 'inline-block', position: 'relative', background: 'none', margin: 0, padding: 0, zIndex: 2, maxWidth: 480 }}>
              About <span className="glow-accent" style={{ position: 'relative', zIndex: 2 }}>Us</span>
            </h2>
            <span style={{ display: 'block', width: '120px', height: 10, background: '#ffe082', position: 'absolute', left: 0, bottom: 6, zIndex: 1, borderRadius: 6, opacity: 0.7 }}></span>
          </div>
          <div style={{ fontSize: '1.13rem', color: '#757575', marginBottom: '0.7rem', fontWeight: 500, lineHeight: 1.5, maxWidth: 420 }}>
            Shrekium Technologies is dedicated to delivering clean, efficient, and user-friendly digital products. Our team values simplicity, clarity, and a pastel-inspired aesthetic that puts your content first.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
