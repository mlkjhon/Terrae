'use client';

import { useEffect, useRef } from 'react';

const stats = [
  {
    number: '71',
    unit: '%',
    label: 'OF EARTH\'S SURFACE IS COVERED BY OCEAN',
    detail: 'Only 5% has been explored by humans',
    color: 'var(--ocean)',
  },
  {
    number: '8.7',
    unit: 'M',
    label: 'ESTIMATED SPECIES ON EARTH',
    detail: '∼86% on land still undiscovered ∼91% in ocean',
    color: 'var(--moss)',
  },
  {
    number: '4.5',
    unit: 'B',
    label: 'YEARS OF PLANETARY AGE',
    detail: 'Life emerged approximately 3.8 billion years ago',
    color: 'var(--charcoal)',
  },
  {
    number: '31',
    unit: '%',
    label: 'OF LAND COVERED BY FORESTS',
    detail: 'Forests are home to 80% of terrestrial species',
    color: 'var(--moss)',
  },
];

export default function PlanetData() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('data-visible');
          }
        });
      },
      { threshold: 0.3 }
    );
    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="data"
      style={{
        padding: 'clamp(5rem, 10vw, 12rem) 0',
        background: 'var(--black)',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .data-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);
        }
        .data-visible .data-item, .data-item.data-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="container-editorial">
        {/* Header */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
          <div className="t-label" style={{ fontSize: 9, marginBottom: '1.5rem' }}>SECTION 06 / DATA</div>
          <h2 className="t-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', color: 'var(--bone)' }}>
            The planet<br />
            <span style={{ fontStyle: 'italic', color: 'var(--fog)' }}>in numbers.</span>
          </h2>
        </div>

        {/* Stats — editorial layout, not a dashboard */}
        <div
          className="planet-data-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: 'var(--ash)',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="data-item"
              style={{
                background: 'var(--black)',
                padding: 'clamp(2.5rem, 5vw, 5rem)',
                position: 'relative',
                overflow: 'hidden',
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              {/* Background watermark */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  right: '-0.05em',
                  bottom: '-0.15em',
                  fontFamily: 'var(--font-cormorant)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(8rem, 20vw, 18rem)',
                  fontWeight: 300,
                  color: stat.color,
                  opacity: 0.06,
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                {stat.number}
              </div>

              {/* Section index */}
              <div className="t-label" style={{ fontSize: 8, color: 'var(--fog)', marginBottom: 'clamp(1.5rem, 3vw, 3rem)' }}>
                {String(i + 1).padStart(2, '0')} / {String(stats.length).padStart(2, '0')}
              </div>

              {/* Number */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.1em', marginBottom: 'clamp(1rem, 2vw, 2rem)' }}>
                <span
                  className="t-number"
                  style={{
                    fontSize: 'clamp(5rem, 12vw, 11rem)',
                    color: 'var(--bone)',
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </span>
                <span
                  className="t-display"
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 5rem)',
                    color: 'var(--copper)',
                    fontStyle: 'italic',
                  }}
                >
                  {stat.unit}
                </span>
              </div>

              {/* Label */}
              <div
                className="t-headline"
                style={{
                  fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
                  color: 'var(--sand)',
                  letterSpacing: '0.05em',
                  marginBottom: '1rem',
                  maxWidth: '30ch',
                }}
              >
                {stat.label}
              </div>

              {/* Detail */}
              <p className="t-body" style={{ fontSize: 12, color: 'var(--fog)', maxWidth: '32ch' }}>
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: '2rem', textAlign: 'right' }}>
          <span className="t-label" style={{ fontSize: 8, color: 'var(--ash)' }}>
            ∼ All figures are scientific estimates. Sources: IUCN, NASA, FAO, IPBES — 2024
          </span>
        </div>
      </div>
    </section>
  );
}
