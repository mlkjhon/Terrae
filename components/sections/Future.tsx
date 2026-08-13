'use client';

import { useEffect, useRef } from 'react';

export default function Future() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll<HTMLElement>('.future-reveal');
            els.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stories"
      style={{
        position: 'relative',
        minHeight: '90dvh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        background: 'var(--stone)',
      }}
    >
      {/* Full bleed background image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop"
          alt="Glacial landscape — a record of climate written in ice"
          className="img-cover img-cinematic"
          loading="lazy"
          style={{ filter: 'brightness(0.4) contrast(1.1) saturate(0.6)' }}
        />
        {/* Gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(10,10,9,0.85) 40%, rgba(10,10,9,0.1) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,9,0.7) 0%, transparent 60%)',
        }} />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="container-editorial"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: 'clamp(6rem, 12vw, 14rem)',
          paddingBottom: 'clamp(5rem, 10vw, 10rem)',
          maxWidth: '60ch',
        }}
      >
        {/* Section label */}
        <div
          className="future-reveal t-label"
          style={{
            fontSize: 9,
            marginBottom: '3rem',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          SECTION 07 / FUTURE
        </div>

        {/* Headline */}
        <h2
          className="future-reveal t-display"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 7.5rem)',
            color: 'var(--bone)',
            marginBottom: '1rem',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          WHAT WE
        </h2>
        <h2
          className="future-reveal t-display"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 7.5rem)',
            color: 'var(--sand)',
            fontStyle: 'italic',
            marginBottom: '1rem',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          leave behind
        </h2>
        <h2
          className="future-reveal t-display"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 7.5rem)',
            color: 'var(--bone)',
            marginBottom: 'clamp(2rem, 4vw, 4rem)',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          MATTERS.
        </h2>

        {/* Body */}
        <p
          className="future-reveal t-body"
          style={{
            fontSize: 'clamp(14px, 1.5vw, 17px)',
            maxWidth: '40ch',
            marginBottom: 'clamp(2rem, 4vw, 4rem)',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          The planet is not fragile. It has survived five mass extinctions, continental shifts, and eons of transformation. What is fragile is what lives on it — including us.
        </p>

        {/* CTA */}
        <a
          href="#biomes"
          className="future-reveal"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--copper)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--copper)',
            paddingBottom: 4,
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1), color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--copper-light)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--copper)')}
        >
          EXPLORE THE PLANET →
        </a>

        {/* Ice age data point */}
        <div
          className="future-reveal"
          style={{
            marginTop: 'clamp(4rem, 8vw, 8rem)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '2rem',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div style={{ width: 40, height: 1, background: 'var(--copper)', marginTop: 7, flexShrink: 0 }} />
          <div>
            <div className="t-number" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--bone)' }}>1M+</div>
            <div className="t-label" style={{ fontSize: 9 }}>SPECIES THREATENED WITH EXTINCTION</div>
            <div className="t-label" style={{ fontSize: 8, color: 'var(--ash)', marginTop: 4 }}>IPBES GLOBAL ASSESSMENT, 2024 ∼</div>
          </div>
        </div>
      </div>
    </section>
  );
}
