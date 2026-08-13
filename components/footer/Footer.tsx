'use client';

import Link from 'next/link';

const footerLinks = [
  { label: 'Explore', href: '#biomes' },
  { label: 'Species', href: '#species' },
  { label: 'Places', href: '#gallery' },
  { label: 'Stories', href: '#stories' },
  { label: 'About', href: '#about' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--stone)',
        borderTop: '1px solid var(--ash)',
        padding: 'clamp(3rem, 6vw, 6rem) 0 clamp(2rem, 4vw, 3rem)',
      }}
      role="contentinfo"
    >
      <div className="container-editorial">
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1rem, 2vw, 2rem)',
            marginBottom: 'clamp(3rem, 5vw, 5rem)',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: '1 / 5' }}>
            <div
              className="t-display"
              style={{
                fontStyle: 'italic',
                fontSize: 'clamp(2rem, 4vw, 4rem)',
                color: 'var(--bone)',
                marginBottom: '0.5rem',
              }}
            >
              TERRÆ
            </div>
            <div className="t-label" style={{ fontSize: 9, color: 'var(--fog)', marginBottom: '1.5rem' }}>
              A DIGITAL ARCHIVE OF OUR PLANET
            </div>
            <p className="t-body" style={{ fontSize: 13, maxWidth: '28ch' }}>
              Documenting the living world — one biome, one species, one story at a time.
            </p>
          </div>

          {/* Spacer */}
          <div style={{ gridColumn: '5 / 8' }} />

          {/* Navigation */}
          <div style={{ gridColumn: '8 / 10' }}>
            <div className="t-label" style={{ fontSize: 9, marginBottom: '1.5rem' }}>INDEX</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="t-body"
                    style={{
                      fontSize: 14,
                      color: 'var(--fog)',
                      textDecoration: 'none',
                      transition: 'color 0.25s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--bone)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fog)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Archive info */}
          <div style={{ gridColumn: '10 / 13' }}>
            <div className="t-label" style={{ fontSize: 9, marginBottom: '1.5rem' }}>ARCHIVE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <div className="t-label" style={{ fontSize: 8, color: 'var(--ash)' }}>BIOMES CATALOGUED</div>
                <div className="t-mono" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fog)' }}>08 / ongoing</div>
              </div>
              <div>
                <div className="t-label" style={{ fontSize: 8, color: 'var(--ash)' }}>SPECIES FEATURED</div>
                <div className="t-mono" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fog)' }}>06 / 8.7M est.</div>
              </div>
              <div>
                <div className="t-label" style={{ fontSize: 8, color: 'var(--ash)' }}>ARCHIVE OPENED</div>
                <div className="t-mono" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fog)' }}>2026 / TERRÆ</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }} />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span className="t-label" style={{ fontSize: 9, color: 'var(--fog)' }}>
            © 2026 TERRÆ — A DIGITAL ARCHIVE OF OUR PLANET
          </span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span className="t-label" style={{ fontSize: 9, color: 'var(--ash)' }}>
              MADE WITH INTENT — NOT GENERATED
            </span>
            <span className="t-label" style={{ fontSize: 9, color: 'var(--ash)' }}>
              EARTH / 01
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
