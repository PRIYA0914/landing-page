import React from 'react';
import { FaGlobe, FaMobileAlt, FaTools, FaRocket } from 'react-icons/fa';

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

const Work = () => {
  const workItems = [
    { icon: <FaGlobe />, title: 'Web Applications', desc: 'Support business operations and growth' },
    { icon: <FaMobileAlt />, title: 'Mobile Applications', desc: 'Smooth user experience and modern interfaces' },
    { icon: <FaTools />, title: 'Custom Solutions', desc: 'Tailored to specific business needs' },
    { icon: <FaRocket />, title: 'Startup MVPs', desc: 'Built for speed, validation, and scalability' },
    { icon: '🤖', title: 'AI & Automation', desc: 'AI-powered and automation-driven digital solutions' },
  ];
  const [current, setCurrent] = React.useState(0);
  const total = workItems.length;
  const prev = () => setCurrent(current === 0 ? total - 1 : current - 1);
  const next = () => setCurrent(current === total - 1 ? 0 : current + 1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c === total - 1 ? 0 : c + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [total]);

  // Parallax effect: animate card's horizontal position
  const [parallax, setParallax] = React.useState(0);
  React.useEffect(() => {
    setParallax(0);
    const anim = setTimeout(() => setParallax(1), 100);
    return () => clearTimeout(anim);
  }, [current]);

  return (
    <section
      id="work"
      className="work-section"
      style={{
        margin: 0,
        padding: 0,
        width: '100%',
        minHeight: '480px',
        background: 'linear-gradient(120deg, #e0e7ef 0%, #f6f6fa 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: 700, padding: '0 2.5rem' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', color: '#222b45', zIndex: 2, minWidth: 320, maxWidth: 540, height: '100%' }}>
          <div style={{ position: 'relative', width: '100%', marginBottom: 22 }}>
            <h2 style={{ fontSize: '2.3rem', fontWeight: 900, letterSpacing: 1.2, color: '#222b45', lineHeight: 1.1, display: 'inline-block', position: 'relative', background: 'none', margin: 0, padding: 0, zIndex: 2, maxWidth: 480 }}>
              Our <span className="glow-accent" style={{ position: 'relative', zIndex: 2, background: 'linear-gradient(90deg, #ffe082 60%, #b3d8fd 100%)', borderRadius: 6, padding: '0 8px' }}>Work</span>
            </h2>
            <span style={{ display: 'block', width: '120px', height: 10, background: '#ffe082', position: 'absolute', left: 0, bottom: 6, zIndex: 1, borderRadius: 6, opacity: 0.7 }}></span>
          </div>
          <div style={{ fontSize: '1.18rem', color: '#757575', marginBottom: '1.1rem', fontWeight: 500, lineHeight: 1.5, maxWidth: 420 }}>
          </div>
          <div style={{ width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 180 }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 320 }}>
              <div className="neon-card" style={{
                minWidth: 400,
                maxWidth: 480,
                padding: '2.2rem 1.1rem',
                background: 'linear-gradient(120deg, #fff 80%, #e0e7ef 100%)',
                textAlign: 'center',
                borderRadius: 12,
                boxShadow: parallax ? '0 12px 48px #b3d8fd88' : '0 8px 32px #e0e7ef',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: 220,
                transition: 'transform 0.7s cubic-bezier(.77,.2,.32,1.01), box-shadow 0.7s cubic-bezier(.77,.2,.32,1.01)',
                cursor: 'pointer',
                border: '2.5px solid #b3d8fd',
                position: 'relative',
                transform: parallax ? 'translateX(0) scale(1.04)' : 'translateX(60px) scale(0.98)',
                opacity: parallax ? 1 : 0.7,
                animation: parallax ? 'bounceIn 0.7s' : 'none',
              }}>
                <div style={{ fontSize: '3.5rem', color: '#1565c0', marginBottom: 18, filter: 'drop-shadow(0 0 10px #b3d8fd88)' }}>{workItems[current].icon}</div>
                <div style={{ fontWeight: 800, color: '#1565c0', marginBottom: 12, fontSize: '1.55rem', letterSpacing: 0.7 }}>{workItems[current].title}</div>
                <div style={{ color: '#0a2540', textAlign: 'center', fontSize: '1.22rem', opacity: 0.96, fontWeight: 500 }}>{workItems[current].desc}</div>
                {/* Removed dot-like structure */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
          100% { transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% {
            transform: scale(0.92);
            opacity: 0.7;
          }
          60% {
            transform: scale(1.08);
            opacity: 1;
          }
          100% {
            transform: scale(1.04);
            opacity: 1;
          }
        }
        .neon-card:hover {
          transform: scale(1.07) translateY(-8px);
          box-shadow: 0 16px 48px #b3d8fd88;
        }
      `}</style>
    </section>
  );
};

export default Work;
