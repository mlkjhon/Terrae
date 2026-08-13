'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoOverlayRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stagger reveal on load
    const elements = [badgeRef.current, headlineRef.current, scrollIndicatorRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = `opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 200);
    });

    // Parallax on scroll
    const onScroll = () => {
      const overlay = videoOverlayRef.current;
      if (!overlay) return;
      const scrollY = window.scrollY;
      overlay.style.transform = `translateY(${scrollY * 0.35}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      {/* Background image with parallax wrapper */}
      <div
        ref={videoOverlayRef}
        style={{
          position: 'absolute',
          inset: '-10% 0',
          zIndex: 0,
        }}
      >
        <img
          src="/images/hero-rainforest.png"
          alt="Amazon Rainforest from above — the lungs of the Earth"
          className="img-cover img-cinematic"
          style={{ filter: 'brightness(0.55) contrast(1.1) saturate(0.75)' }}
          loading="eager"
        />
        {/* Gradient overlays */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,10,9,0.3) 0%, transparent 30%, transparent 60%, rgba(10,10,9,0.9) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(10,10,9,0.5) 0%, transparent 60%)',
        }} />
      </div>

      {/* Hero content */}
      <div
        className="container-editorial"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingBottom: 'clamp(3rem, 6vw, 6rem)',
          paddingTop: 'var(--nav-h)',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {/* Top editorial badge row */}
        <div
          ref={badgeRef}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {/* Left: category badge */}
          <div className="coord-badge">
            <span>BIOME 01 / RAINFOREST</span>
            <span style={{ color: 'var(--copper)' }}>AMAZON BASIN</span>
          </div>

          {/* Right: coordinates */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div className="coord-badge">
              <span>03°27&#39;S</span>
              <span>60°01&#39;W</span>
            </div>
            <div className="coord-badge" style={{ display: 'none' }}>
              <span>EARTH ARCHIVE</span>
              <span style={{ color: 'var(--copper)' }}>EST. 2026</span>
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div ref={headlineRef}>
          {/* Eyebrow — only one on this page */}
          <div className="t-label" style={{ marginBottom: '1.5rem', color: 'var(--copper)' }}>
            PLANET EARTH / 01
          </div>

          {/* Headline — asymmetric, two families */}
          <h1 style={{ position: 'relative' }}>
            {/* Large display serif — emotional word */}
            <div
              className="t-display"
              style={{
                fontSize: 'clamp(5rem, 14vw, 16rem)',
                color: 'var(--bone)',
                display: 'block',
                marginLeft: '-0.04em', // optical alignment
              }}
            >
              ONE
            </div>

            {/* Sans — smaller, offset */}
            <div
              className="t-headline"
              style={{
                fontSize: 'clamp(2rem, 5vw, 5.5rem)',
                color: 'var(--sand)',
                display: 'block',
                marginLeft: 'clamp(2rem, 8vw, 12rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
              }}
            >
              PLANET.
            </div>

            {/* Display serif again — even bigger */}
            <div
              className="t-display"
              style={{
                fontSize: 'clamp(4rem, 12vw, 13rem)',
                color: 'var(--bone)',
                display: 'block',
                fontStyle: 'italic',
                marginLeft: 'clamp(0.5rem, 4vw, 8rem)',
              }}
            >
              Infinite
            </div>

            {/* Sans — small, right edge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div
                className="t-headline"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 5.5rem)',
                  color: 'var(--sand)',
                  fontWeight: 300,
                }}
              >
                WORLDS.
              </div>
              {/* Subtext — desktop only */}
              <p
                className="t-body hidden lg:block"
                style={{
                  maxWidth: '28ch',
                  fontSize: 14,
                  textAlign: 'right',
                  paddingBottom: '0.5rem',
                }}
              >
                A living digital archive of the planet — from microscopic ecosystems to continental biomes.
              </p>
            </div>
          </h1>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            marginTop: '1rem',
          }}
        >
          {/* Scroll line */}
          <div style={{ position: 'relative', width: 40, height: 40 }}>
            <div style={{
              position: 'absolute',
              left: 19,
              top: 0,
              width: 1,
              height: '100%',
              background: 'var(--fog)',
              overflow: 'hidden',
            }}>
              <div style={{
                width: '100%',
                height: '40%',
                background: 'var(--copper)',
                animation: 'scroll-line 1.8s ease-in-out infinite',
              }} />
            </div>
          </div>
          <span className="t-label" style={{ fontSize: 9 }}>SCROLL TO EXPLORE</span>


        </div>
      </div>

      {/* Bottom-right species counter */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(2rem, 4vw, 4rem)',
          right: 'clamp(1.5rem, 5vw, 5rem)',
          zIndex: 2,
          textAlign: 'right',
        }}
      >
        <div className="t-label" style={{ fontSize: 8 }}>KNOWN SPECIES</div>
        <div
          className="t-number"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--bone)' }}
        >
          8.7M
        </div>
        <div className="t-label" style={{ fontSize: 8, color: 'var(--copper)' }}>ESTIMATED ∼</div>
      </div>
    </section>
  );
}
