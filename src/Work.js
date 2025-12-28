
import React from 'react';
import { FaGlobe, FaMobileAlt, FaTools, FaRocket } from 'react-icons/fa';

const workItems = [
  { icon: <FaGlobe />, title: 'Web Applications', desc: 'Support business operations and growth' },
  { icon: <FaMobileAlt />, title: 'Mobile Applications', desc: 'Smooth user experience and modern interfaces' },
  { icon: <FaTools />, title: 'Custom Solutions', desc: 'Tailored to specific business needs' },
  { icon: <FaRocket />, title: 'Startup MVPs', desc: 'Built for speed, validation, and scalability' },
  { icon: '🤖', title: 'AI & Automation', desc: 'AI-powered and automation-driven digital solutions' },
];

const Work = () => {
  return (
    <section id="work" className="work-section finpay-bg-light" style={{padding: '0', marginBottom: 48}}>
      <div className="finpay-grid" style={{alignItems: 'flex-start', gap: 0}}>
        <div style={{padding: '48px 36px 48px 48px'}}>
          <h2 style={{marginBottom: 18, color: '#1976d2', fontWeight: 900}}>Our Work</h2>
          <p style={{color: '#1565c0', fontSize: '1.13rem', marginBottom: 0, background: 'none', padding: 0}}>A selection of our recent projects, crafted with care and expertise.</p>
        </div>
        <div style={{width: '100%', padding: '36px 36px 36px 0'}}>
          <div className="finpay-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32}}>
            {workItems.map((work, idx) => (
              <div key={idx} className="finpay-card" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12, minHeight: 180, boxShadow: '0 2px 12px rgba(25, 118, 210, 0.06)'}}>
                <span style={{ fontSize: "2.3rem", marginBottom: 8 }}>{work.icon}</span>
                <div style={{fontWeight: 700, fontSize: '1.18rem', color: '#1976d2', marginBottom: 2}}>{work.title}</div>
                <div style={{color: '#1565c0', fontSize: '1.05rem', lineHeight: 1.6}}>{work.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
