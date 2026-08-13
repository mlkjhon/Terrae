'use client';

import { useState } from 'react';

const species = [
  {
    id: '024',
    scientific: 'Panthera pardus',
    common: 'Leopard',
    family: 'FELIDAE / AFRICA & ASIA',
    status: 'VULNERABLE',
    img: '/images/species-leopard.png',
    fact: 'Can carry prey twice its weight up a tree',
    weight: '31–65 kg',
  },
  {
    id: '061',
    scientific: 'Carcharodon carcharias',
    common: 'Great White Shark',
    family: 'LAMNIDAE / GLOBAL OCEANS',
    status: 'VULNERABLE',
    img: '/images/species-shark.png',
    fact: 'Detects one drop of blood in 100L of water',
    weight: '520–1,100 kg',
  },
  {
    id: '003',
    scientific: 'Ailuropoda melanoleuca',
    common: 'Giant Panda',
    family: 'URSIDAE / CHINA',
    status: 'VULNERABLE',
    img: '/images/species-panda.png',
    fact: 'Spends 10-16 hours a day eating bamboo',
    weight: '70–125 kg',
  },
  {
    id: '112',
    scientific: 'Orcinus orca',
    common: 'Orca',
    family: 'DELPHINIDAE / GLOBAL OCEANS',
    status: 'DATA DEFICIENT',
    img: '/images/species-orca.png',
    fact: 'Each pod has its own distinct dialect',
    weight: '3,600–5,400 kg',
  },
  {
    id: '087',
    scientific: 'Ara macao',
    common: 'Scarlet Macaw',
    family: 'PSITTACIDAE / CENTRAL & S. AMERICA',
    status: 'LEAST CONCERN',
    img: '/images/species-macaw.png',
    fact: 'Can live up to 75 years in the wild',
    weight: '0.9–1.1 kg',
  },
  {
    id: '142',
    scientific: 'Crocodylus niloticus',
    common: 'Nile Crocodile',
    family: 'CROCODYLIDAE / AFRICA',
    status: 'LEAST CONCERN',
    img: '/images/species-crocodile.png',
    fact: 'Unchanged for 200 million years',
    weight: '225–750 kg',
  },
];

const statusColors: Record<string, string> = {
  'VULNERABLE': '#c47c3a',
  'ENDANGERED': '#8b2020',
  'LEAST CONCERN': '#1e3226',
  'DATA DEFICIENT': '#3d3c36',
};

export default function Species() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="species"
      style={{
        padding: 'clamp(5rem, 10vw, 12rem) 0',
        background: 'var(--stone)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-editorial">
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1rem, 2vw, 2rem)',
            marginBottom: 'clamp(3rem, 6vw, 6rem)',
          }}
        >
          <div style={{ gridColumn: '1 / 8' }}>
            <div className="t-label" style={{ fontSize: 9, marginBottom: '1.5rem' }}>SECTION 03 / SPECIES</div>
            <h2 className="t-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', color: 'var(--bone)' }}>
              Inhabitants<br />
              <span style={{ fontStyle: 'italic', color: 'var(--fog)' }}>of Earth.</span>
            </h2>
          </div>
          <div style={{ gridColumn: '9 / 13', alignSelf: 'end' }}>
            <p className="t-body" style={{ fontSize: 14 }}>
              From apex predators to ancient survivors — every species is a chapter in Earth&#39;s ongoing story.
            </p>
          </div>
        </div>

        {/* Species grid — asymmetric, editorial layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridAutoRows: 'auto',
            gap: 'clamp(0.75rem, 1.5vw, 1.5rem)',
          }}
        >
          {species.map((sp, i) => {
            // Editorial grid: vary column spans
            const spans = [
              'span 5', 'span 4', 'span 3',
              'span 4', 'span 4', 'span 4',
            ];
            const heights = [
              'clamp(380px, 55vh, 600px)',
              'clamp(320px, 48vh, 500px)',
              'clamp(420px, 60vh, 640px)',
              'clamp(360px, 52vh, 560px)',
              'clamp(400px, 58vh, 580px)',
              'clamp(340px, 50vh, 540px)',
            ];

            return (
              <div
                key={sp.id}
                role="article"
                aria-label={`Species: ${sp.common}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                data-cursor="VIEW"
                style={{
                  gridColumn: spans[i] || 'span 4',
                  height: heights[i],
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'none',
                }}
              >
                {/* Image */}
                <img
                  src={sp.img}
                  alt={`${sp.common} (${sp.scientific})`}
                  className="img-cover img-cinematic"
                  loading="lazy"
                  style={{
                    transform: hovered === i ? 'scale(1.06)' : 'scale(1)',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    filter: `brightness(${hovered === i ? 0.7 : 0.5}) contrast(1.1) saturate(0.75)`,
                  }}
                />

                {/* Gradient */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,9,0.97) 0%, rgba(10,10,9,0.2) 55%, transparent 100%)',
                }} />

                {/* Top labels */}
                <div style={{
                  position: 'absolute',
                  top: 'clamp(1rem, 1.5vw, 1.5rem)',
                  left: 'clamp(1rem, 1.5vw, 1.5rem)',
                  right: 'clamp(1rem, 1.5vw, 1.5rem)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                  <span className="t-label" style={{ fontSize: 8, color: 'var(--fog)' }}>
                    SPECIES {sp.id}
                  </span>
                  <span
                    className="t-label"
                    style={{
                      fontSize: 8,
                      color: statusColors[sp.status] || 'var(--fog)',
                      border: `1px solid ${statusColors[sp.status] || 'var(--ash)'}`,
                      padding: '3px 6px',
                    }}
                  >
                    {sp.status}
                  </span>
                </div>

                {/* Bottom content */}
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  padding: 'clamp(1.2rem, 2vw, 2rem)',
                }}>
                  {/* Hover reveal fact */}
                  <div style={{
                    overflow: 'hidden',
                    maxHeight: hovered === i ? '4rem' : 0,
                    transition: 'max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    marginBottom: hovered === i ? '1rem' : 0,
                    transitionProperty: 'max-height, margin-bottom',
                  }}>
                    <p className="t-body" style={{ fontSize: 12, color: 'var(--sand)' }}>
                      {sp.fact}
                    </p>
                  </div>

                  {/* Scientific name */}
                  <div
                    className="t-display"
                    style={{
                      fontStyle: 'italic',
                      fontSize: 'clamp(1rem, 2vw, 1.6rem)',
                      color: 'var(--bone)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {sp.scientific}
                  </div>

                  {/* Common name */}
                  <div className="t-headline" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', color: 'var(--sand)', marginBottom: '0.5rem' }}>
                    {sp.common}
                  </div>

                  {/* Family line */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.5rem' }}>
                    <span className="t-label" style={{ fontSize: 8, color: 'var(--fog)' }}>{sp.family}</span>
                    <span className="t-label" style={{ fontSize: 8, color: 'var(--fog)' }}>{sp.weight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
