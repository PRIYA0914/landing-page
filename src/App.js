import React from 'react';

import SectionWrapper from './SectionWrapper';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Work from './Work';
import Career from './Career';
import CTA from './CTA';

const Footer = () => (
  <footer className="finpay-footer">
    <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginBottom: 16 }}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#career">Career</a>
      <a href="#contact">Contact</a>
      <a href="mailto:info@shrekium.com">Email</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
    <div style={{ opacity: 0.7, fontSize: '0.98rem' }}>© {new Date().getFullYear()} Shrekium Technologies. All rights reserved.</div>
  </footer>
);

const App = () => {
  return (
    <div id="main-app-container">
      <Navbar />
      <main style={{ scrollBehavior: "smooth" }}>
        <SectionWrapper id="home" className="finpay-bg-light">
          <Hero />
        </SectionWrapper>
        <SectionWrapper id="about">
          <About />
        </SectionWrapper>
        <SectionWrapper id="services" className="finpay-bg-light">
          <Services />
        </SectionWrapper>
        <SectionWrapper id="work">
          <Work />
        </SectionWrapper>
        <SectionWrapper id="career" className="finpay-bg-light">
          <Career />
        </SectionWrapper>
        <SectionWrapper id="contact">
          <CTA />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default App;
