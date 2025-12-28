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
  <footer>
    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#career">Career</a>
      <a href="#contact">Contact</a>
      <a href="mailto:info@shrekium.com">Email</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
    <div>© {new Date().getFullYear()} Shrekium Technologies. All rights reserved.</div>
  </footer>
);

const App = () => {
  return (
    <div id="main-app-container">
      <Navbar />
      <main>
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
        <SectionWrapper>
          <About />
        </SectionWrapper>
        <SectionWrapper>
          <Services />
        </SectionWrapper>
        <SectionWrapper>
          <Work />
        </SectionWrapper>
        <SectionWrapper>
          <Career />
        </SectionWrapper>
        <SectionWrapper>
          <CTA />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default App;
