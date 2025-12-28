
import React from 'react';
import './theme.css';

const illustration = (
  <svg width="340" height="220" viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 340, height: 'auto', display: 'block' }}>
    <ellipse cx="170" cy="110" rx="150" ry="90" fill="#f6f6fa" />
    <rect x="110" y="140" width="120" height="12" rx="6" fill="#e0e7ef" />
    <rect x="130" y="160" width="80" height="8" rx="4" fill="#e0e7ef" />
    <circle cx="90" cy="80" r="28" fill="#ffb74d" opacity="0.7" />
    <circle cx="250" cy="60" r="18" fill="#1976d2" opacity="0.18" />
    <circle cx="250" cy="170" r="14" fill="#ff7043" opacity="0.18" />
  </svg>
);

const Services = () => {
  const services = [
    { title: 'Web Development', desc: 'Modern, responsive websites and web apps.' },
    { title: 'UI/UX Design', desc: 'Clean, user-focused interfaces and experiences.' },
    { title: 'Cloud Solutions', desc: 'Scalable, secure cloud integrations.' },
    { title: 'Consulting', desc: 'Expert advice for your digital journey.' },
  ];
  return (
    <section
      id="services"
      className="services-section"
      style={{
        margin: 0,
        padding: 0,
        width: '100%',
        minHeight: '420px',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: 1100, padding: '0 2.5rem', gap: 48 }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 220, zIndex: 1, maxWidth: 340 }}>
          {illustration}
        </div>
        <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', color: '#222b45', zIndex: 2, paddingLeft: 0, minWidth: 320, maxWidth: 500, height: '100%' }}>
          <div style={{ position: 'relative', width: '100%', marginBottom: 22 }}>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900, letterSpacing: 1.2, color: '#222b45', lineHeight: 1.1, display: 'inline-block', position: 'relative', background: 'none', margin: 0, padding: 0, zIndex: 2, maxWidth: 480 }}>
              Our <span className="glow-accent" style={{ position: 'relative', zIndex: 2 }}>Services</span>
            </h2>
            <span style={{ display: 'block', width: '140px', height: 10, background: '#ffe082', position: 'absolute', left: 0, bottom: 6, zIndex: 1, borderRadius: 6, opacity: 0.7 }}></span>
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', width: '100%' }}>
              {services.map((s, i) => (
                <div key={i} className="neon-card" style={{ padding: '1.5rem 1rem', background: '#fff', textAlign: 'center', borderRadius: 14, boxShadow: '0 2px 12px #e0e7ef' }}>
                  <h3 style={{ color: '#2563eb', fontSize: '1.08rem', marginBottom: '0.7rem', fontWeight: 600 }}>{s.title}</h3>
                  <p style={{ color: '#4b5563', fontSize: '0.98rem', margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
