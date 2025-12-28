import React from 'react';
import { FaGlobe, FaMobileAlt, FaTools, FaRocket } from 'react-icons/fa';

const Work = () => {
  return (
    <section className="work-section neon-card" style={{ margin: '3rem auto', maxWidth: 900, padding: '2.5rem 2rem', background: '#fff' }}>
      <h2 className="neon-text" style={{ fontSize: '1.7rem', marginBottom: '1.2rem', fontWeight: 700, letterSpacing: 0.5 }}>
        Our <span className="glow-accent">Work</span>
      </h2>
      <p style={{ color: '#4b5563', fontSize: '1.08rem', lineHeight: 1.7 }}>
        Explore our portfolio of clean, minimal, and pastel-inspired projects. We believe in letting the work speak for itself.
      </p>
      <h3 style={{fontSize: '1.25rem', color: '#1565c0', margin: '32px 0 18px 0', textAlign: 'left', fontWeight: 800, letterSpacing: '0.5px'}}>What We’ve Built</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '28px',
        margin: '0 0 0 0',
        maxWidth: 700
      }}>
        <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #bbdefb 100%)', borderRadius: '18px', padding: '28px 22px', boxShadow: '0 2px 12px rgba(21, 101, 192, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120}}>
          <div style={{fontSize: '2rem', color: '#1565c0', marginBottom: 10}}><FaGlobe /></div>
          <div style={{fontWeight: 700, color: '#1565c0', marginBottom: 6}}>Web Applications</div>
          <div style={{color: '#0a2540', textAlign: 'center'}}>Support business operations and growth</div>
        </div>
        <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #b2ebf2 100%)', borderRadius: '18px', padding: '28px 22px', boxShadow: '0 2px 12px rgba(21, 101, 192, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120}}>
          <div style={{fontSize: '2rem', color: '#1565c0', marginBottom: 10}}><FaMobileAlt /></div>
          <div style={{fontWeight: 700, color: '#1565c0', marginBottom: 6}}>Mobile Applications</div>
          <div style={{color: '#0a2540', textAlign: 'center'}}>Smooth user experience and modern interfaces</div>
        </div>
        <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #ffe082 100%)', borderRadius: '18px', padding: '28px 22px', boxShadow: '0 2px 12px rgba(21, 101, 192, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120}}>
          <div style={{fontSize: '2rem', color: '#1565c0', marginBottom: 10}}><FaTools /></div>
          <div style={{fontWeight: 700, color: '#1565c0', marginBottom: 6}}>Custom Solutions</div>
          <div style={{color: '#0a2540', textAlign: 'center'}}>Tailored to specific business needs</div>
        </div>
        <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #b2dfdb 100%)', borderRadius: '18px', padding: '28px 22px', boxShadow: '0 2px 12px rgba(21, 101, 192, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120}}>
          <div style={{fontSize: '2rem', color: '#1565c0', marginBottom: 10}}><FaRocket /></div>
          <div style={{fontWeight: 700, color: '#1565c0', marginBottom: 6}}>Startup MVPs</div>
          <div style={{color: '#0a2540', textAlign: 'center'}}>Built for speed, validation, and scalability</div>
        </div>
        <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #c5cae9 100%)', borderRadius: '18px', padding: '28px 22px', boxShadow: '0 2px 12px rgba(21, 101, 192, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120}}>
          <div style={{fontSize: '2rem', color: '#1976d2', marginBottom: 10}}>🤖</div>
          <div style={{fontWeight: 700, color: '#1976d2', marginBottom: 6}}>AI & Automation</div>
          <div style={{color: '#444', textAlign: 'center'}}>AI-powered and automation-driven digital solutions</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
