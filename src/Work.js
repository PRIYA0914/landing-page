import React from 'react';

const Work = () => (
  <section className="work-section" id="work" style={{padding: '48px 0', background: 'none'}}>
    <h2 style={{fontSize: '2rem', fontWeight: 900, color: '#1976d2', marginBottom: '18px', lineHeight: 1.1, textAlign: 'left'}}>Our Work</h2>
    <p style={{fontSize: '1.13rem', color: '#444', marginBottom: '18px', maxWidth: 520, textAlign: 'left'}}>
      We create high-quality digital products that are designed to scale. Our work focuses on solving real business problems through clean design, efficient development, and reliable technology.
    </p>
    <p style={{fontSize: '1.13rem', color: '#444', marginBottom: '18px', maxWidth: 520, textAlign: 'left'}}>
      Every project we deliver is built with a strong emphasis on usability, performance, and long-term maintainability.
    </p>
    <h3 style={{fontSize: '1.25rem', color: '#1976d2', margin: '32px 0 18px 0', textAlign: 'left', fontWeight: 800, letterSpacing: '0.5px'}}>What We’ve Built</h3>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '28px',
      margin: '0 0 0 0',
      maxWidth: 700
    }}>
      <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #bbdefb 100%)', borderRadius: '18px', padding: '28px 22px', boxShadow: '0 2px 12px rgba(25, 118, 210, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120}}>
        <div style={{fontSize: '2rem', color: '#1976d2', marginBottom: 10}}>🌐</div>
        <div style={{fontWeight: 700, color: '#1976d2', marginBottom: 6}}>Web Applications</div>
        <div style={{color: '#444', textAlign: 'center'}}>Support business operations and growth</div>
      </div>
      <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #b2ebf2 100%)', borderRadius: '18px', padding: '28px 22px', boxShadow: '0 2px 12px rgba(25, 118, 210, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120}}>
        <div style={{fontSize: '2rem', color: '#1976d2', marginBottom: 10}}>📱</div>
        <div style={{fontWeight: 700, color: '#1976d2', marginBottom: 6}}>Mobile Applications</div>
        <div style={{color: '#444', textAlign: 'center'}}>Smooth user experience and modern interfaces</div>
      </div>
      <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #ffe082 100%)', borderRadius: '18px', padding: '28px 22px', boxShadow: '0 2px 12px rgba(25, 118, 210, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120}}>
        <div style={{fontSize: '2rem', color: '#1976d2', marginBottom: 10}}>🛠️</div>
        <div style={{fontWeight: 700, color: '#1976d2', marginBottom: 6}}>Custom Solutions</div>
        <div style={{color: '#444', textAlign: 'center'}}>Tailored to specific business needs</div>
      </div>
      <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #b2dfdb 100%)', borderRadius: '18px', padding: '28px 22px', boxShadow: '0 2px 12px rgba(25, 118, 210, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120}}>
        <div style={{fontSize: '2rem', color: '#1976d2', marginBottom: 10}}>🚀</div>
        <div style={{fontWeight: 700, color: '#1976d2', marginBottom: 6}}>Startup MVPs</div>
        <div style={{color: '#444', textAlign: 'center'}}>Built for speed, validation, and scalability</div>
      </div>
      <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #c5cae9 100%)', borderRadius: '18px', padding: '28px 22px', boxShadow: '0 2px 12px rgba(25, 118, 210, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 120}}>
        <div style={{fontSize: '2rem', color: '#1976d2', marginBottom: 10}}>🤖</div>
        <div style={{fontWeight: 700, color: '#1976d2', marginBottom: 6}}>AI & Automation</div>
        <div style={{color: '#444', textAlign: 'center'}}>AI-powered and automation-driven digital solutions</div>
      </div>
    </div>
  </section>
);

export default Work;
