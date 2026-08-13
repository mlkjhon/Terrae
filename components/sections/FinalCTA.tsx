'use client';

import { useEffect, useRef } from 'react';

export default function FinalCTA() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll<HTMLElement>('.cta-reveal');
            els.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, i * 180);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    if (headRef.current) observer.observe(headRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '80dvh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--black)',
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1600&auto=format&fit=crop"
          alt="Earth from space — the pale blue dot"
          className="img-cover img-cinematic"
          loading="lazy"
          style={{ filter: 'brightness(0.25) contrast(1.2) saturate(0.5)' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(10,10,9,0.92) 0%, rgba(10,10,9,0.5) 60%, rgba(10,10,9,0.8) 100%)',
        }} />
      </div>

      {/* Content */}
      <div
        ref={headRef}
        className="container-editorial"
        style={{ position: 'relative', zIndex: 2, width: '100%' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1rem, 2vw, 2rem)',
            alignItems: 'end',
          }}
        >
          {/* Main headline — large, left-aligned */}
          <div className="cta-grid-col-left" style={{ gridColumn: '1 / 11' }}>
            <div
              className="cta-reveal t-display"
              style={{
                fontSize: 'clamp(4rem, 13vw, 14rem)',
                color: 'var(--bone)',
                display: 'block',
                opacity: 0,
                transform: 'translateY(40px)',
                transition: 'opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              KEEP
            </div>
            <div
              className="cta-reveal t-display"
              style={{
                fontSize: 'clamp(4rem, 13vw, 14rem)',
                color: 'var(--sand)',
                fontStyle: 'italic',
                display: 'block',
                marginLeft: 'clamp(2rem, 8vw, 12rem)',
                opacity: 0,
                transform: 'translateY(40px)',
                transition: 'opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              Looking.
            </div>
            <div
              className="cta-reveal t-headline"
              style={{
                fontSize: 'clamp(2rem, 6vw, 7rem)',
                color: 'rgba(232, 226, 212, 0.35)',
                letterSpacing: '-0.02em',
                display: 'block',
                opacity: 0,
                transform: 'translateY(40px)',
                transition: 'opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              There&#39;s more to see.
            </div>
          </div>

          {/* Right column — CTA + coords */}
          <div
            className="cta-reveal cta-grid-col-right"
            style={{
              gridColumn: '9 / 13',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignSelf: 'end',
              paddingBottom: 'clamp(2rem, 4vw, 4rem)',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Primary CTA */}
            <a
              href="#hero"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--black)',
                background: 'var(--copper)',
                textDecoration: 'none',
                padding: '1rem 2rem',
                transition: 'background 0.3s, color 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--copper-light)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--copper)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              EXPLORE EARTH →
            </a>

            {/* Coordinates */}
            <div className="coord-badge" style={{ alignSelf: 'flex-end' }}>
              <span>TERRÆ EARTH ARCHIVE</span>
              <span style={{ color: 'var(--copper)' }}>2026 / ONGOING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
