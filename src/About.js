import React from 'react';

const About = () => (
  <section className="about-section" id="about" style={{padding: '0', background: 'none', display: 'flex', justifyContent: 'center'}}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '48px',
      background: 'linear-gradient(120deg, #e3f2fd 60%, #fff 100%)',
      borderRadius: '32px',
      boxShadow: '0 8px 32px rgba(25, 118, 210, 0.10)',
      padding: '48px 48px',
      maxWidth: 1100,
      margin: '48px auto',
      width: '100%'
    }}>
      <div style={{flex: 1, minWidth: 0, display: 'flex', justifyContent: 'center'}}>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
          alt="About Shrekium"
          style={{width: 180, height: 180, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 4px 24px rgba(25, 118, 210, 0.13)', border: '6px solid #fff'}}
        />
      </div>
      <div style={{flex: 2, minWidth: 0}}>
        <h2 style={{fontSize: '2.2rem', fontWeight: 900, color: '#1976d2', marginBottom: '18px', lineHeight: 1.1, textAlign: 'left', letterSpacing: '1px'}}>
          <span style={{background: '#fff', borderRadius: '8px', padding: '4px 18px', boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)'}}>Who We Are</span>
        </h2>
        <p style={{fontSize: '1.13rem', color: '#444', marginBottom: '18px', maxWidth: 520, textAlign: 'left'}}>
          Shrekium Technologies is a technology-driven startup focused on delivering high-quality digital solutions. We work closely with clients to understand their goals and build software that creates real business impact.
        </p>
        <p style={{fontSize: '1.13rem', color: '#444', marginBottom: '18px', maxWidth: 520, textAlign: 'left'}}>
          From early-stage startups to growing enterprises, we provide end-to-end development support—from idea validation to deployment and scaling.
        </p>
        <p style={{fontSize: '1.13rem', color: '#444', marginBottom: '0', maxWidth: 520, textAlign: 'left'}}>
          Our approach combines strategy, design, and engineering to deliver solutions that are simple, scalable, and future-ready.
        </p>
      </div>
    </div>
  </section>
);

export default About;
