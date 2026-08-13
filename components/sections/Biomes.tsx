'use client';

import { useEffect, useRef, useState } from 'react';

const biomes = [
  {
    id: '01',
    name: 'OCEAN',
    sub: 'Salt Water / 3.6km avg depth',
    coverage: '71%',
    img: '/images/ocean-deep.png',
    color: '#1a3a4a',
    coords: '00°00\'N / 170°00\'W',
    fact: 'More than 80% remains unexplored',
  },
  {
    id: '02',
    name: 'RAINFOREST',
    sub: 'Tropical / Equatorial Belt',
    coverage: '6%',
    img: '/images/hero-rainforest.png',
    color: '#1e3226',
    coords: '03°27\'S / 60°01\'W',
    fact: 'Home to 50% of all species',
  },
  {
    id: '03',
    name: 'DESERT',
    sub: 'Arid / Hyper-arid Zones',
    coverage: '33%',
    img: '/images/desert-expanse.png',
    color: '#3d2b10',
    coords: '23°41\'N / 07°14\'E',
    fact: 'One-third of Earth\'s land surface',
  },
  {
    id: '04',
    name: 'MOUNTAINS',
    sub: 'Alpine / Subalpine Zones',
    coverage: '24%',
    img: '/images/mountain-glacial.png',
    color: '#1c2530',
    coords: '27°59\'N / 86°55\'E',
    fact: 'Freshwater source for 2B people',
  },
  {
    id: '05',
    name: 'ICE CAPS',
    sub: 'Polar / Glacial Regions',
    coverage: '10%',
    img: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop',
    color: '#1a2535',
    coords: '90°00\'S / 00°00\'E',
    fact: '68.7% of Earth\'s fresh water',
  },
  {
    id: '06',
    name: 'SAVANNA',
    sub: 'Tropical Grasslands',
    coverage: '20%',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
    color: '#2e2010',
    coords: '01°17\'S / 36°49\'E',
    fact: 'Hosts the great animal migrations',
  },
  {
    id: '07',
    name: 'WETLANDS',
    sub: 'Swamps / Marshes / Bogs',
    coverage: '6%',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
    color: '#162018',
    coords: '15°38\'N / 08°25\'E',
    fact: 'Filters 80% of Earth\'s drinking water',
  },
  {
    id: '08',
    name: 'FOREST',
    sub: 'Temperate / Boreal',
    coverage: '31%',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop',
    color: '#1a2318',
    coords: '55°45\'N / 37°37\'E',
    fact: 'Sequesters 2.6 billion tonnes CO₂/yr',
  },
];

export default function Biomes() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);

  return (
    <section
      id="biomes"
      style={{
        padding: 'clamp(5rem, 10vw, 10rem) 0 0',
        background: 'var(--black)',
        overflow: 'hidden',
      }}
    >
      {/* Section header */}
      <div className="container-editorial" style={{ marginBottom: 'clamp(2rem, 4vw, 4rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="t-label" style={{ fontSize: 9, marginBottom: '1.5rem' }}>SECTION 02 / BIOMES</div>
            <h2 className="t-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', color: 'var(--bone)' }}>
              Eight<br />
              <span style={{ fontStyle: 'italic', color: 'var(--sand)' }}>Worlds.</span>
            </h2>
          </div>
          <p className="t-body" style={{ maxWidth: '30ch', fontSize: 14, textAlign: 'right' }}>
            Each biome is a distinct world with its own rules, species, and stories. Drag to explore.
          </p>
        </div>
      </div>

      {/* Horizontal scroll track — editorial composition with mixed sizes */}
      <div
        style={{ paddingLeft: 'clamp(1.5rem, 5vw, 5rem)', paddingBottom: 'clamp(4rem, 8vw, 8rem)' }}
      >
        <div
          ref={trackRef}
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
            cursor: 'grab',
          }}
          data-cursor="DRAG"
        >
          {biomes.map((biome, i) => {
            const tall = i === 0 || i === 3 || i === 6;
            const wide = i === 1 || i === 4;

            return (
              <div
                key={biome.id}
                role="article"
                aria-label={`Biome: ${biome.name}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(-1)}
                style={{
                  flexShrink: 0,
                  width: wide ? 'clamp(300px, 40vw, 520px)' : 'clamp(220px, 28vw, 380px)',
                  height: tall ? 'clamp(500px, 70vh, 750px)' : 'clamp(380px, 55vh, 580px)',
                  position: 'relative',
                  scrollSnapAlign: 'start',
                  overflow: 'hidden',
                  marginTop: i % 3 === 1 ? 'clamp(2rem, 5vw, 5rem)' : 0,
                }}
              >
                {/* Image */}
                <img
                  src={biome.img}
                  alt={`${biome.name} biome`}
                  className="img-cover img-cinematic"
                  loading="lazy"
                  style={{
                    transform: active === i ? 'scale(1.04)' : 'scale(1)',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                    filter: `brightness(${active === i ? 0.75 : 0.55}) contrast(1.1) saturate(0.8)`,
                  }}
                />

                {/* Gradient */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,9,0.95) 0%, rgba(10,10,9,0.2) 60%, transparent 100%)',
                }} />

                {/* Content */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: 'clamp(1.2rem, 2vw, 2rem)',
                }}>
                  <div className="t-label" style={{ fontSize: 8, color: 'var(--copper)', marginBottom: '0.5rem' }}>
                    BIOME {biome.id}
                  </div>
                  <div className="t-headline" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--bone)', marginBottom: '0.5rem' }}>
                    {biome.name}
                  </div>
                  <div className="t-label" style={{ fontSize: 9, color: 'var(--fog)', marginBottom: '1rem' }}>
                    {biome.sub}
                  </div>

                  {/* Stats */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '0.75rem',
                    marginTop: '0.5rem',
                  }}>
                    <div>
                      <div className="t-number" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--sand)' }}>
                        {biome.coverage}
                      </div>
                      <div className="t-label" style={{ fontSize: 8 }}>OF LAND</div>
                    </div>
                    <div className="t-label" style={{ fontSize: 8, textAlign: 'right', maxWidth: '14ch', color: 'var(--fog)' }}>
                      {biome.fact}
                    </div>
                  </div>
                </div>

                {/* Coords — top right */}
                <div style={{
                  position: 'absolute', top: 'clamp(1rem, 1.5vw, 1.5rem)', right: 'clamp(1rem, 1.5vw, 1.5rem)',
                }}>
                  <div className="t-label" style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', textAlign: 'right' }}>
                    {biome.coords}
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
