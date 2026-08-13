'use client';

import { useEffect, useRef } from 'react';

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lines = entry.target.querySelectorAll<HTMLElement>('.manifesto-line');
            lines.forEach((line, i) => {
              setTimeout(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: 'clamp(6rem, 12vw, 14rem) 0',
        background: 'var(--black)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent number */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-2vw',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontSize: 'clamp(12rem, 30vw, 40rem)',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.015)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        01
      </div>

      <div className="container-editorial" ref={textRef}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1rem, 2vw, 2rem)',
            alignItems: 'start',
          }}
        >
          {/* Main headline — spanning 10 cols, offset */}
          <div style={{ gridColumn: '2 / 12' }}>
            {/* Line 1 */}
            <div
              className="manifesto-line t-display"
              style={{
                fontSize: 'clamp(3.5rem, 9vw, 10rem)',
                color: 'var(--bone)',
                display: 'block',
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              EARTH IS NOT
            </div>

            {/* Line 2 — italic, shifted right */}
            <div
              className="manifesto-line t-display"
              style={{
                fontSize: 'clamp(3.5rem, 9vw, 10rem)',
                color: 'var(--sand)',
                fontStyle: 'italic',
                display: 'block',
                marginLeft: 'clamp(2rem, 8vw, 14rem)',
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              a background.
            </div>

            {/* Line 3 — sans, bold */}
            <div
              className="manifesto-line t-headline"
              style={{
                fontSize: 'clamp(3.5rem, 9vw, 10rem)',
                color: 'var(--bone)',
                display: 'block',
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              IT IS THE
            </div>

            {/* Line 4 — copper accent word */}
            <div
              className="manifesto-line"
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.4em',
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <span
                className="t-display"
                style={{
                  fontSize: 'clamp(3.5rem, 9vw, 10rem)',
                  color: 'var(--copper)',
                  fontStyle: 'italic',
                }}
              >
                story.
              </span>
            </div>
          </div>

          {/* Subtext + data — bottom row */}
          <div
            className="manifesto-line"
            style={{
              gridColumn: '7 / 12',
              marginTop: 'clamp(3rem, 5vw, 6rem)',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <p className="t-body" style={{ fontSize: 15, marginBottom: '2rem' }}>
              From a single water droplet to entire continental biomes — the planet holds more worlds than any map can contain. We are here to archive them.
            </p>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <div className="t-number" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--bone)' }}>510M</div>
                <div className="t-label" style={{ fontSize: 9 }}>KM² of surface area</div>
              </div>
              <div>
                <div className="t-number" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--bone)' }}>4B</div>
                <div className="t-label" style={{ fontSize: 9 }}>Years of evolution</div>
              </div>
            </div>
          </div>

          {/* Section label — left column */}
          <div
            className="manifesto-line"
            style={{
              gridColumn: '2 / 4',
              marginTop: 'clamp(3rem, 5vw, 6rem)',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div className="t-label" style={{ fontSize: 9, marginBottom: '1rem' }}>SECTION 01</div>
            <div style={{ width: 40, height: 1, background: 'var(--ash)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
