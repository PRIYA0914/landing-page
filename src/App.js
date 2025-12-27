import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Work from './Work';
import WhyChooseUs from './WhyChooseUs';
import CTA from './CTA';



function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">Shrekium</div>
        <ul className="navbar-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#services">Our services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#getstarted" className="navbar-btn">Get Started</a></li>
        </ul>
      </nav>
      <main>
        <div className="fade-in"><Hero /></div>
        <div className="fade-in"><About /></div>
        <div className="fade-in"><Services /></div>
        <div className="fade-in"><Work /></div>
        <div className="fade-in"><WhyChooseUs /></div>
        <div className="fade-in"><CTA /></div>
      </main>
    </div>
  );
}

export default App;
