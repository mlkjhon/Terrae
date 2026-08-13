'use client';

// Keyframes injetadas no globals.css via animação CSS
const items = [
  'RAINFOREST', '—', 'OCEAN', '—', 'DESERT', '—', 'MOUNTAINS', '—',
  'ARCTIC', '—', 'SAVANNA', '—', 'WETLANDS', '—', 'TUNDRA', '—',
  'RAINFOREST', '—', 'OCEAN', '—', 'DESERT', '—', 'MOUNTAINS', '—',
  'ARCTIC', '—', 'SAVANNA', '—', 'WETLANDS', '—', 'TUNDRA', '—',
];

export default function Marquee() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--ash)',
        borderBottom: '1px solid var(--ash)',
        padding: '14px 0',
        overflow: 'hidden',
        background: 'var(--stone)',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: 'flex',
          gap: '2.5rem',
          whiteSpace: 'nowrap',
          animation: 'terrae-marquee 40s linear infinite',
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="t-label"
            style={{
              fontSize: 10,
              color: item === '—' ? 'var(--ash)' : 'var(--fog)',
              flexShrink: 0,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
