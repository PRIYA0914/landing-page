
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
  {
    title: "Web Development",
    description: "Modern, responsive websites and web apps tailored to your business needs.",
    icon: "🌐",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, user-centric interfaces and experiences that delight your users.",
    icon: "🎨",
  },
  {
    title: "Branding",
    description: "Distinctive branding and identity design to make your business stand out.",
    icon: "🚀",
  },
  {
    title: "SEO & Marketing",
    description: "Boost your online presence and reach your audience with smart SEO and marketing.",
    icon: "📈",
  },
  ];
  return (
    <section id="services" className="services-section finpay-bg-light" style={{padding: '0', marginBottom: 48}}>
      <div className="finpay-grid" style={{alignItems: 'flex-start', gap: 0}}>
        <div style={{padding: '48px 36px 48px 48px'}}>
          <h2 style={{marginBottom: 18, color: '#1976d2', fontWeight: 900}}>Our Services</h2>
          <p style={{color: '#1565c0', fontSize: '1.13rem', marginBottom: 0, background: 'none', padding: 0}}>We offer a full suite of digital services to help your business grow and thrive online.</p>
        </div>
        <div style={{width: '100%', padding: '36px 36px 36px 0'}}>
          <div className="finpay-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32}}>
            {services.map((service, idx) => (
              <div key={idx} className="finpay-card" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12, minHeight: 180, boxShadow: '0 2px 12px rgba(25, 118, 210, 0.06)'}}>
                <span style={{ fontSize: "2.3rem", marginBottom: 8 }}>{service.icon}</span>
                <div style={{fontWeight: 700, fontSize: '1.18rem', color: '#1976d2', marginBottom: 2}}>{service.title}</div>
                <div style={{color: '#1565c0', fontSize: '1.05rem', lineHeight: 1.6}}>{service.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
