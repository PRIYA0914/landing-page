import React from 'react';

const CTA = () => (
  <section className="cta-section" id="contact" style={{padding: '48px 0', background: 'none'}}>
    <h2 style={{fontSize: '2rem', fontWeight: 900, color: '#1976d2', marginBottom: '18px', lineHeight: 1.1, textAlign: 'left'}}>Let’s Build Something Great Together</h2>
    <p style={{fontSize: '1.13rem', color: '#444', marginBottom: '18px', maxWidth: 520, textAlign: 'left'}}>
      Have an idea, startup, or product in mind?
    </p>
    <p style={{fontSize: '1.13rem', color: '#444', marginBottom: '32px', maxWidth: 520, textAlign: 'left'}}>
      Partner with Shrekium Technologies to transform your vision into a powerful digital solution.
    </p>
    <div className="cta-actions" style={{justifyContent: 'flex-start'}}>
      <a href="#contact" className="btn btn-primary">📩 Contact Us Today</a>
      <a href="#contact" className="btn btn-secondary">🚀 Let’s Build Your Product</a>
    </div>
  </section>
);

export default CTA;
