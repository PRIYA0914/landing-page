import React from 'react';
import './theme.css';

const Services = () => {
  const services = [
    { title: 'Web Development', desc: 'Modern, responsive websites and web apps.' },
    { title: 'UI/UX Design', desc: 'Clean, user-focused interfaces and experiences.' },
    { title: 'Cloud Solutions', desc: 'Scalable, secure cloud integrations.' },
    { title: 'Consulting', desc: 'Expert advice for your digital journey.' },
  ];
  return (
    <section id="services" className="services-section" style={{ margin: '3rem auto', maxWidth: 900, padding: '2.5rem 2rem' }}>
      <h2 className="neon-text" style={{ fontSize: '1.7rem', marginBottom: '2rem', fontWeight: 700, letterSpacing: 0.5 }}>
        Our <span className="glow-accent">Services</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
        {services.map((s, i) => (
          <div key={i} className="neon-card" style={{ padding: '1.5rem 1rem', background: '#fff', textAlign: 'center' }}>
            <h3 style={{ color: '#2563eb', fontSize: '1.08rem', marginBottom: '0.7rem', fontWeight: 600 }}>{s.title}</h3>
            <p style={{ color: '#4b5563', fontSize: '0.98rem', margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
