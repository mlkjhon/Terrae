'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

const navItems = [
  { id: '01', label: 'EXPLORE', href: '#biomes' },
  { id: '02', label: 'SPECIES', href: '#species' },
  { id: '03', label: 'PLACES', href: '#gallery' },
  { id: '04', label: 'STORIES', href: '#stories' },
  { id: '05', label: 'ABOUT', href: '#about' },
];

export default function Navigation() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(false);

  // Stagger items in overlay
  useEffect(() => {
    if (menuOpen) {
      const t = setTimeout(() => setItemsVisible(true), 80);
      return () => clearTimeout(t);
    } else {
      setItemsVisible(false);
    }
  }, [menuOpen]);

  // Navbar background change on scroll
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Ultra-smooth easing scroll function (easeOutExpo)
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (menuOpen) {
      setMenuOpen(false);
    }

    const target = document.querySelector(href);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 72;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200; // 1.2s luxurious smooth scroll duration
    let start: number | null = null;

    const easeOutExpo = (t: number, b: number, c: number, d: number) => {
      return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = easeOutExpo(elapsed, startPosition, distance, duration);
      window.scrollTo(0, progress);
      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [menuOpen]);

  return (
    <>
      <style>{`
        /* Desktop nav link hover line */
        .nav-link-item {
          position: relative;
          color: var(--fog);
          text-decoration: none;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.18em;
          transition: color 0.3s ease;
          padding: 4px 0;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 1px;
          background: var(--copper);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link-item:hover { color: var(--bone) !important; }
        .nav-link-item:hover::after { transform: scaleX(1); }

        /* Fullscreen Overlay Menu styling — matches Image 2 */
        .overlay-backdrop {
          position: fixed;
          inset: 0;
          background: #0a0a09;
          z-index: 50;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(2rem, 6vw, 6rem) clamp(2rem, 8vw, 8rem);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .overlay-backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* Large overlay title links — exact match for Image 2 */
        .overlay-item-link {
          font-family: var(--font-cormorant);
          font-style: italic;
          font-size: clamp(3.2rem, 9vw, 7.5rem);
          font-weight: 300;
          color: var(--bone);
          text-decoration: none;
          line-height: 1.1;
          display: inline-flex;
          align-items: baseline;
          gap: clamp(1rem, 3vw, 2.5rem);
          transition: color 0.3s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: none;
        }
        .overlay-item-link:hover {
          color: var(--copper);
          transform: translateX(16px);
        }

        /* Stagger animation for overlay items */
        .overlay-stagger-item {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .overlay-stagger-item.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* CTA top right */
        .nav-cta-link {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.2em;
          color: var(--copper);
          text-decoration: none;
          border-bottom: 1px solid var(--copper);
          padding-bottom: 2px;
          transition: color 0.3s, border-color 0.3s, letter-spacing 0.3s;
        }
        .nav-cta-link:hover {
          color: var(--copper-light);
          border-color: var(--copper-light);
          letter-spacing: 0.25em;
        }

        /* Close icon button */
        .menu-trigger-btn {
          background: none;
          border: none;
          color: var(--bone);
          cursor: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          transition: transform 0.3s ease;
        }
        .menu-trigger-btn:hover {
          transform: scale(1.1);
        }

        /* Bottom left circular badge (matching Image 2) */
        .badge-circle-n {
          position: fixed;
          bottom: clamp(1.5rem, 3vw, 3rem);
          left: clamp(1.5rem, 5vw, 5rem);
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(232, 226, 212, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          color: var(--bone);
          z-index: 60;
          background: rgba(10, 10, 9, 0.8);
          backdrop-filter: blur(8px);
        }
      `}</style>

      {/* ── Fixed Header Navbar (always on top, zIndex: 60) ── */}
      <nav
        className={solid && !menuOpen ? 'nav-solid' : ''}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 60,
          height: 'var(--nav-h)',
          padding: '0 clamp(1.5rem, 5vw, 5rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.5s, border-color 0.5s, backdrop-filter 0.5s',
          background: menuOpen ? 'transparent' : undefined,
        }}
        aria-label="Main navigation"
      >
        {/* Logo (left) */}
        <Link href="/" aria-label="TERRÆ Home" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              letterSpacing: '0.18em',
              color: 'var(--bone)',
            }}>
              TERRÆ
            </span>
            <span className="t-label" style={{ fontSize: 8, opacity: 0.45, letterSpacing: '0.22em' }}>
              EARTH ARCHIVE / 01
            </span>
          </div>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <ul className="hidden lg:flex" style={{ gap: 'clamp(2rem, 3.5vw, 4rem)', listStyle: 'none' }} role="list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="nav-link-item"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA + Hamburger/Close button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <a
            href="#biomes"
            className="nav-cta-link hidden sm:block"
            onClick={(e) => handleNavClick(e, '#biomes')}
          >
            START EXPLORING ↗
          </a>

          {/* Toggle Menu Button (Hamburger / X icon) */}
          <button
            className="menu-trigger-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              /* Fine X Icon matching Image 2 */
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Fine 2-line Hamburger icon */
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <line x1="0" y1="2" x2="22" y2="2" />
                <line x1="0" y1="12" x2="22" y2="12" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ── Fullscreen Overlay Menu (Matches Image 2) ── */}
      <div
        className={`overlay-backdrop ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1.5vw, 1.5rem)' }}>
            {navItems.map((item, i) => (
              <li
                key={item.id}
                className={`overlay-stagger-item ${itemsVisible ? 'show' : ''}`}
                style={{ transitionDelay: itemsVisible ? `${i * 0.08}s` : '0s' }}
              >
                <a
                  href={item.href}
                  className="overlay-item-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontStyle: 'normal',
                      fontSize: 'clamp(10px, 1.2vw, 14px)',
                      color: 'var(--fog)',
                      letterSpacing: '0.15em',
                      opacity: 0.7,
                    }}
                  >
                    {item.id}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Left Badge (Matching Image 2) */}
        <div className="badge-circle-n">
          N
        </div>
      </div>
    </>
  );
}
