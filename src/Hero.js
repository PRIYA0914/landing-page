import React from 'react';
import NeonButton from './NeonButton';
import './theme.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section neon-card" style={{ margin: '3rem auto 2rem', maxWidth: 900, padding: '3rem 2rem', textAlign: 'center', background: '#fff' }}>
      <h1 className="neon-text" style={{ fontSize: '2.5rem', marginBottom: '1.2rem', fontWeight: 700, letterSpacing: 0.5 }}>
        Welcome to <span className="glow-accent">Shrekium</span> Technologies
      </h1>
      <p style={{ color: '#4b5563', fontSize: '1.2rem', marginBottom: '2.2rem', lineHeight: 1.6 }}>
        We craft modern, scalable, and beautiful digital solutions for startups and enterprises. Discover how we can help you grow.
      </p>
      <NeonButton as="a" href="#contact" accent>
        Get Started
      </NeonButton>
    </section>
  );
};

export default Hero;
