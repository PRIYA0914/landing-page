

import React from 'react';
import NeonButton from './NeonButton';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './theme.css';

const illustration = (
  <svg width="340" height="300" viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 340, height: 'auto', display: 'block' }}>
    <ellipse cx="170" cy="170" rx="150" ry="120" fill="#f6f6fa" />
    <circle cx="90" cy="120" r="38" fill="#ffb74d" opacity="0.7" />
    <circle cx="250" cy="90" r="22" fill="#1976d2" opacity="0.18" />
    <circle cx="250" cy="210" r="18" fill="#ff7043" opacity="0.18" />
    <rect x="110" y="180" width="120" height="18" rx="9" fill="#e0e7ef" />
    <rect x="130" y="200" width="80" height="12" rx="6" fill="#e0e7ef" />
    <path d="M120 120 Q140 80 170 120 T220 120" stroke="#1976d2" strokeWidth="3" fill="none" />
    <circle cx="170" cy="120" r="18" fill="#fff" stroke="#1976d2" strokeWidth="3" />
    <circle cx="170" cy="120" r="7" fill="#1976d2" />
    {/* Abstract illustration, replace with a more complex SVG if desired */}
  </svg>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        margin: 0,
        padding: 0,
        width: '100%',
        minHeight: '540px',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 1200,
          padding: '0 2.5rem',
          gap: 48,
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 260,
            zIndex: 1,
            height: '100%',
            maxWidth: 420,
          }}
        >
          {illustration}
        </div>
        <div
          style={{
            flex: 1.1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            color: '#222b45',
            zIndex: 2,
            paddingLeft: 0,
            minWidth: 320,
            maxWidth: 500,
            height: '100%',
          }}
        >
          <div style={{ position: 'relative', width: '100%', marginBottom: 22 }}>
            <h1
              style={{
                fontSize: '2.7rem',
                fontWeight: 900,
                letterSpacing: 1.2,
                color: '#222b45',
                lineHeight: 1.1,
                display: 'inline-block',
                position: 'relative',
                background: 'none',
                margin: 0,
                padding: 0,
                zIndex: 2,
                maxWidth: 480,
              }}
            >
              Welcome to <span className="glow-accent" style={{ position: 'relative', zIndex: 2 }}>Shrekium</span>
            </h1>
            <span
              style={{
                display: 'block',
                width: '220px',
                height: 14,
                background: '#ffe082',
                position: 'absolute',
                left: 0,
                bottom: 6,
                zIndex: 1,
                borderRadius: 6,
                opacity: 0.7,
              }}
            ></span>
          </div>
          <div style={{ fontSize: '1.18rem', color: '#757575', marginBottom: '0.7rem', fontWeight: 500, lineHeight: 1.5, maxWidth: 420 }}>
            Building beautiful, scalable digital products for startups and enterprises.
          </div>
          <div style={{ fontSize: '1.05rem', color: '#b0b0b0', marginBottom: '1.7rem', fontWeight: 400, lineHeight: 1.5, maxWidth: 420 }}>
            Clean code. Modern design. Real results.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
            <NeonButton
              as="a"
              href="#contact"
              accent
              style={{
                borderRadius: 8,
                fontWeight: 700,
                fontSize: '1.08rem',
                padding: '0.7em 2.2em',
                background: 'linear-gradient(90deg, #ffb74d 0%, #1976d2 100%)',
                color: '#fff',
                boxShadow: '0 2px 8px #e0e7ef',
              }}
            >
              Get Started
            </NeonButton>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 8 }}>
            <a href="#" aria-label="Facebook" style={{ color: '#222b45', fontSize: 22 }}><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" style={{ color: '#222b45', fontSize: 22 }}><FaInstagram /></a>
            <a href="#" aria-label="Twitter" style={{ color: '#222b45', fontSize: 22 }}><FaTwitter /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
