'use client';

import { useState } from 'react';

const photos = [
  {
    src: '/images/hero-rainforest.png',
    alt: 'Amazon canopy from above at golden hour',
    caption: 'Amazon Basin, Brazil',
    orientation: 'landscape',
    colSpan: 7,
    rowSpan: 1,
  },
  {
    src: '/images/species-arctic-wolf.png',
    alt: 'Arctic wolf in snowstorm',
    caption: 'Arctic Wolf, Nunavut',
    orientation: 'portrait',
    colSpan: 5,
    rowSpan: 2,
  },
  {
    src: '/images/ocean-deep.png',
    alt: 'Deep ocean bioluminescence',
    caption: 'Pacific Trench, 3,800m depth',
    orientation: 'landscape',
    colSpan: 4,
    rowSpan: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
    alt: 'Cracked earth during drought',
    caption: 'Okavango Delta, Botswana',
    orientation: 'square',
    colSpan: 3,
    rowSpan: 1,
  },
  {
    src: '/images/mountain-glacial.png',
    alt: 'Glacial mountain peaks at dawn',
    caption: 'Karakoram Range, Pakistan',
    orientation: 'portrait',
    colSpan: 4,
    rowSpan: 2,
  },
  {
    src: '/images/desert-expanse.png',
    alt: 'Sahara desert dune patterns from above',
    caption: 'Sahara, Algeria',
    orientation: 'landscape',
    colSpan: 5,
    rowSpan: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
    alt: 'Coral reef ecosystem',
    caption: 'Great Barrier Reef, Australia',
    orientation: 'landscape',
    colSpan: 3,
    rowSpan: 1,
  },
  {
    src: '/images/micro-leaf.png',
    alt: 'Macro leaf cellular structure',
    caption: 'Ficus elastica leaf surface, ×40',
    orientation: 'square',
    colSpan: 3,
    rowSpan: 1,
  },
];

export default function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      style={{
        padding: 'clamp(5rem, 10vw, 12rem) 0',
        background: 'var(--stone)',
        overflow: 'hidden',
      }}
    >
      <div className="container-editorial">
        {/* Header */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
          <div className="t-label" style={{ fontSize: 9, marginBottom: '1.5rem' }}>SECTION 05 / ARCHIVE</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 className="t-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', color: 'var(--bone)' }}>
              The Earth,<br />
              <span style={{ fontStyle: 'italic', color: 'var(--sand)' }}>Unfiltered.</span>
            </h2>
            <p className="t-body" style={{ maxWidth: '30ch', fontSize: 14 }}>
              Photography captures what language cannot. Eight images from eight corners of a planet in motion.
            </p>
          </div>
        </div>

        {/* Masonry-style editorial grid */}
        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridAutoRows: 'clamp(120px, 18vh, 220px)',
            gap: 'clamp(0.5rem, 1vw, 1rem)',
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              data-cursor="VIEW"
              style={{
                gridColumn: `span ${photo.colSpan}`,
                gridRow: `span ${photo.rowSpan}`,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'none',
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="img-cover img-cinematic"
                loading="lazy"
                style={{
                  transform: hovered === i ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s',
                  filter: `brightness(${hovered === i ? 0.8 : 0.6}) contrast(1.1) saturate(${hovered === i ? 0.9 : 0.75})`,
                }}
              />

              {/* Hover caption */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,9,0.85) 0%, transparent 50%)',
                opacity: hovered === i ? 1 : 0,
                transition: 'opacity 0.4s',
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '1rem 1.25rem',
                transform: hovered === i ? 'translateY(0)' : 'translateY(8px)',
                opacity: hovered === i ? 1 : 0,
                transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s',
              }}>
                <div className="t-label" style={{ fontSize: 8, color: 'var(--copper)' }}>
                  {String(i + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
                </div>
                <div className="t-label" style={{ fontSize: 9, color: 'var(--bone)', marginTop: 4 }}>
                  {photo.caption}
                </div>
              </div>

              {/* Corner index — always visible */}
              <div style={{
                position: 'absolute',
                top: '0.75rem', left: '0.75rem',
              }}>
                <span className="t-label" style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
