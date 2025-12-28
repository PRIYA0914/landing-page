
import React from 'react';
import NeonButton from './NeonButton';
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

const CTA = () => {
  return (
    <section
      id="contact"
      className="cta-section"
      style={{
        margin: 0,
        padding: 0,
        width: '100%',
        minHeight: '420px',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: 1100, padding: '0 2.5rem', gap: 48 }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 220, zIndex: 1, maxWidth: 340 }}>
          {illustration}
        </div>
        <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', color: '#222b45', zIndex: 2, paddingLeft: 0, minWidth: 320, maxWidth: 500, height: '100%' }}>
          <div style={{ position: 'relative', width: '100%', marginBottom: 22 }}>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900, letterSpacing: 1.2, color: '#222b45', lineHeight: 1.1, display: 'inline-block', position: 'relative', background: 'none', margin: 0, padding: 0, zIndex: 2, maxWidth: 480 }}>
              Ready to <span className="glow-accent" style={{ position: 'relative', zIndex: 2 }}>Elevate</span> Your Project?
            </h2>
            <span style={{ display: 'block', width: '180px', height: 10, background: '#ffe082', position: 'absolute', left: 0, bottom: 6, zIndex: 1, borderRadius: 6, opacity: 0.7 }}></span>
          </div>
          <div style={{ fontSize: '1.13rem', color: '#757575', marginBottom: '1.2rem', fontWeight: 500, lineHeight: 1.5, maxWidth: 420 }}>
            Let’s build something extraordinary together. Whether you need a custom solution, want to join our team, or just want to say hi, we’re here for you. Reach out and let’s make it happen!
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: 12 }}>
            <NeonButton as="a" href="#contact" accent>
              Contact Us
            </NeonButton>
            <NeonButton as="a" href="#careers">
              Join Our Team
            </NeonButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
