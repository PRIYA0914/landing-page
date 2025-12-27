import React from 'react';

const Services = () => (
  <section className="services-section" id="services" style={{padding: '48px 0', background: 'none'}}>
    <h2 style={{fontSize: '2.2rem', fontWeight: 900, color: '#1976d2', marginBottom: '32px', lineHeight: 1.1, textAlign: 'center', letterSpacing: '1px'}}>What We Do Best</h2>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '32px',
      justifyContent: 'center',
      alignItems: 'stretch',
      margin: '0 auto',
      maxWidth: 1100
    }}>
      <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #bbdefb 100%)', borderRadius: '22px', padding: '38px 28px', boxShadow: '0 4px 24px rgba(25, 118, 210, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s'}}>
        <div style={{fontSize: '2.6rem', color: '#1976d2', marginBottom: 16, animation: 'bounce 1.2s infinite alternate'}}>💻</div>
        <strong style={{color: '#1976d2', fontSize: '1.18rem', marginBottom: 10}}>Web Application Development</strong>
        <div style={{color: '#444', textAlign: 'center'}}>High-performance, secure, and scalable web applications tailored to your business needs.</div>
      </div>
      <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #b2ebf2 100%)', borderRadius: '22px', padding: '38px 28px', boxShadow: '0 4px 24px rgba(25, 118, 210, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s'}}>
        <div style={{fontSize: '2.6rem', color: '#1976d2', marginBottom: 16, animation: 'bounce 1.3s infinite alternate'}}>📱</div>
        <strong style={{color: '#1976d2', fontSize: '1.18rem', marginBottom: 10}}>Mobile App Development</strong>
        <div style={{color: '#444', textAlign: 'center'}}>User-friendly Android and iOS applications with smooth performance and modern UI.</div>
      </div>
      <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #c5cae9 100%)', borderRadius: '22px', padding: '38px 28px', boxShadow: '0 4px 24px rgba(25, 118, 210, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s'}}>
        <div style={{fontSize: '2.6rem', color: '#1976d2', marginBottom: 16, animation: 'bounce 1.4s infinite alternate'}}>🎨</div>
        <strong style={{color: '#1976d2', fontSize: '1.18rem', marginBottom: 10}}>UI/UX Design</strong>
        <div style={{color: '#444', textAlign: 'center'}}>Clean, intuitive, and conversion-focused designs that enhance user experience.</div>
      </div>
      <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #ffe082 100%)', borderRadius: '22px', padding: '38px 28px', boxShadow: '0 4px 24px rgba(25, 118, 210, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s'}}>
        <div style={{fontSize: '2.6rem', color: '#1976d2', marginBottom: 16, animation: 'bounce 1.5s infinite alternate'}}>🛠️</div>
        <strong style={{color: '#1976d2', fontSize: '1.18rem', marginBottom: 10}}>Custom Software Solutions</strong>
        <div style={{color: '#444', textAlign: 'center'}}>Fully customized systems built to solve specific business challenges.</div>
      </div>
      <div className="fade-in" style={{background: 'linear-gradient(135deg, #e3f2fd 60%, #b2dfdb 100%)', borderRadius: '22px', padding: '38px 28px', boxShadow: '0 4px 24px rgba(25, 118, 210, 0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s'}}>
        <div style={{fontSize: '2.6rem', color: '#1976d2', marginBottom: 16, animation: 'bounce 1.6s infinite alternate'}}>🚀</div>
        <strong style={{color: '#1976d2', fontSize: '1.18rem', marginBottom: 10}}>Startup & MVP Development</strong>
        <div style={{color: '#444', textAlign: 'center'}}>Rapid MVP development to validate ideas and launch faster.</div>
      </div>
    </div>
    <style>{`
      @keyframes bounce {
        0% { transform: translateY(0); }
        100% { transform: translateY(-12px); }
      }
    `}</style>
  </section>
);

export default Services;
