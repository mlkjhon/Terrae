'use client';

import { useEffect, useRef } from 'react';

const macroItems = [
  { label: 'AMAZON BASIN', size: '6.7M km²', img: '/images/hero-rainforest.png' },
  { label: 'PACIFIC OCEAN', size: '165M km²', img: '/images/ocean-deep.png' },
  { label: 'HIMALAYAS', size: '4,400 km', img: '/images/mountain-glacial.png' },
];

const microItems = [
  { label: 'LEAF CELL', size: '20–100 μm', img: '/images/micro-leaf.png' },
  { label: 'WATER DROPLET', size: '1–2 mm', img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop' },
  { label: 'POLLEN GRAIN', size: '10–100 μm', img: '/images/micro-leaf.png' },
];

export default function ScaleDuality() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (lineRef.current) {
              lineRef.current.style.transform = 'scaleX(1)';
              lineRef.current.style.opacity = '1';
            }
            const cards = entry.target.querySelectorAll<HTMLElement>('.scale-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: 'clamp(5rem, 10vw, 12rem) 0',
        background: 'var(--black)',
        overflow: 'hidden',
      }}
    >
      <div className="container-editorial">
        {/* Header */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 7rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="t-label" style={{ fontSize: 9, marginBottom: '1.5rem' }}>SECTION 04 / SCALE</div>
            <h2 className="t-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', color: 'var(--bone)' }}>
              From a<br />
              <span style={{ fontStyle: 'italic', color: 'var(--copper)' }}>single cell</span><br />
              to a continent.
            </h2>
          </div>
          <p className="t-body" style={{ maxWidth: '28ch', fontSize: 14 }}>
            Everything is connected. The same water molecule in a leaf cell will one day fill an ocean.
          </p>
        </div>

        {/* Micro row */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div className="t-label" style={{ fontSize: 9, color: 'var(--copper)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>MICRO</span>
            <span style={{ flex: 1, height: 1, background: 'var(--ash)', display: 'block' }} />
            <span>10⁻⁵ m</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(0.75rem, 1.5vw, 1.5rem)' }}>
            {microItems.map((item, i) => (
              <div
                key={item.label}
                className="scale-card"
                style={{
                  height: 'clamp(180px, 28vh, 280px)',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)`,
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="img-cover img-cinematic"
                  loading="lazy"
                  style={{ filter: 'brightness(0.6) contrast(1.15) saturate(0.7)' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,9,0.9) 0%, transparent 60%)',
                }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem 1.25rem' }}>
                  <div className="t-label" style={{ fontSize: 8, color: 'var(--fog)' }}>{item.label}</div>
                  <div className="t-mono" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--copper)', marginTop: 4 }}>{item.size}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connector — animated */}
        <div style={{ position: 'relative', height: '4rem', display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div
            ref={lineRef}
            style={{
              position: 'absolute',
              left: 0, right: 0,
              height: 1,
              background: 'linear-gradient(90deg, var(--copper) 0%, var(--ash) 50%, var(--copper) 100%)',
              transformOrigin: 'left',
              transform: 'scaleX(0)',
              opacity: 0,
              transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1), opacity 0.4s',
            }}
          />
          <div style={{
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
            background: 'var(--black)',
            padding: '0 1.5rem',
          }}>
            <div className="t-label" style={{ fontSize: 9, color: 'var(--fog)', whiteSpace: 'nowrap' }}>
              EVERYTHING IS CONNECTED
            </div>
          </div>
        </div>

        {/* Macro row */}
        <div>
          <div className="t-label" style={{ fontSize: 9, color: 'var(--fog)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>MACRO</span>
            <span style={{ flex: 1, height: 1, background: 'var(--ash)', display: 'block' }} />
            <span>10⁶ m</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(0.75rem, 1.5vw, 1.5rem)' }}>
            {macroItems.map((item, i) => (
              <div
                key={item.label}
                className="scale-card"
                style={{
                  height: 'clamp(260px, 40vh, 420px)',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${(i + 3) * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${(i + 3) * 0.1}s`,
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="img-cover img-cinematic"
                  loading="lazy"
                  style={{ filter: 'brightness(0.55) contrast(1.1) saturate(0.75)' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,9,0.92) 0%, transparent 55%)',
                }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                  <div className="t-label" style={{ fontSize: 8, color: 'var(--copper)' }}>{item.label}</div>
                  <div className="t-mono" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--sand)', marginTop: 4 }}>{item.size}</div>
                </div>
                {/* Number watermark */}
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  fontFamily: 'var(--font-cormorant)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(4rem, 8vw, 7rem)',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.04)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
