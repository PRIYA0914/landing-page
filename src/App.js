
import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import CTA from './CTA';


function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">Shrekium</div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <CTA />
    </div>
  );
}

export default App;
