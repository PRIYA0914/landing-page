import React from 'react';



const Hero = () => (
  <section className="hero-section" id="home" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', padding: '48px 0', background: 'none'}}>
    <div style={{flex: 1, minWidth: 0, display: 'flex', justifyContent: 'center'}}>
      <img
        src="https://flexipgroup.com/fpgmediafile/2023/05/0248_637315254261619390.jpg"
        alt="Travel Dreams Hero"
        style={{width: 320, height: 320, objectFit: 'cover', borderRadius: '18px', boxShadow: '0 4px 24px rgba(25, 118, 210, 0.13)'}}
      />
    </div>
    <div style={{flex: 1, minWidth: 0}}>
      <h1 style={{fontSize: '2.5rem', fontWeight: 900, color: '#222', marginBottom: '18px', lineHeight: 1.1}}>
        Building Digital Products That Scale
      </h1>
      <p style={{fontSize: '1.18rem', color: '#444', marginBottom: '18px', maxWidth: 480}}>
        Shrekium Technologies is a software development company focused on building reliable, scalable, and user-friendly digital solutions for startups and growing businesses.
      </p>
      <p style={{fontSize: '1.13rem', color: '#444', marginBottom: '32px', maxWidth: 480}}>
        We transform ideas into powerful web and mobile applications using modern technology, clean design, and efficient development practices.
      </p>
      <a href="#getstarted" className="btn btn-primary" style={{fontWeight: 700, fontSize: '1.1rem', padding: '14px 36px'}}>Get Started</a>
    </div>
  </section>
);

export default Hero;
