import React, { useState, useEffect } from 'react';
import './Navbar.css';
import './theme.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'career', label: 'Career' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');

  // Scroll to section smoothly on click
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(id);
    }
  };

  // Scrollspy: update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      let found = 'home';
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = link.id;
            break;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar neon-card" style={{ padding: '1.2rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', boxShadow: '0 2px 16px 0 #e9f3f9' }}>
      <div className="navbar-logo" style={{ fontWeight: 700, fontSize: '1.3rem', color: '#2563eb', letterSpacing: 0.5 }}>
        Shrekium
      </div>
      <ul className="navbar-links">
        {NAV_LINKS.map(link => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`navbar-link${active === link.id ? ' active' : ''}`}
              onClick={e => handleNavClick(e, link.id)}
              aria-current={active === link.id ? 'page' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
