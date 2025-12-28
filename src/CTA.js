import React from 'react';
import { FaEnvelope, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import NeonButton from './NeonButton';
import './theme.css';

const CTA = () => {
  return (
    <section
      id="contact"
      className="cta-section neon-card"
      style={{
        margin: '4rem auto',
        maxWidth: 700,
        padding: '2.5rem 2rem',
        textAlign: 'center',
      }}
    >
      <h2
        className="neon-text"
        style={{
          fontSize: '1.7rem',
          marginBottom: '1.5rem',
          letterSpacing: 0.5,
        }}
      >
        Ready to <span className="glow-accent">Elevate</span> Your Project?
      </h2>
      <p
        style={{
          color: '#4b5563',
          fontSize: '1.08rem',
          marginBottom: '2.5rem',
          lineHeight: 1.6,
        }}
      >
        Let’s build something extraordinary together. Whether you need a custom
        solution, want to join our team, or just want to say hi, we’re here for
        you. Reach out and let’s make it happen!
      </p>
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <NeonButton as="a" href="#contact" accent>
          Contact Us
        </NeonButton>
        <NeonButton as="a" href="#careers">
          Join Our Team
        </NeonButton>
      </div>
    </section>
  );
};

export default CTA;
