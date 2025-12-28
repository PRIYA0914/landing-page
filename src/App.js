import React from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Career from './Career';
import CTA from './CTA';
import WhyChooseUs from './WhyChooseUs';
import Work from './Work';

const App = () => {
  return (
    <div id="main-app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Work />
        <Career />
        <CTA />
      </main>
    </div>
  );
};

export default App;
