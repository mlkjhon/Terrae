'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      label.style.left = `${e.clientX}px`;
      label.style.top = `${e.clientY}px`;
    };

    const animate = () => {
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.1;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.1;
      ring.style.left = `${ringPosRef.current.x}px`;
      ring.style.top = `${ringPosRef.current.y}px`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    // Hover effects
    const addExplore = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const lbl = el.getAttribute('data-cursor') || 'EXPLORE';
      label.textContent = lbl;
      document.body.classList.add('cursor-explore');
    };
    const removeExplore = () => {
      document.body.classList.remove('cursor-explore');
    };

    const interactiveEls = document.querySelectorAll('[data-cursor]');
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', addExplore);
      el.addEventListener('mouseleave', removeExplore);
    });

    // Global smooth scroll interceptor for hash links
    const onAnchorClick = (e: MouseEvent) => {
      const targetEl = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!targetEl) return;
      const href = targetEl.getAttribute('href');
      if (!href || href === '#') return;

      const targetSection = document.querySelector(href);
      if (!targetSection) return;

      e.preventDefault();
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - 72;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1100;
      let start: number | null = null;

      const easeOutExpo = (t: number, b: number, c: number, d: number) => {
        return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      };

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = easeOutExpo(elapsed, startPosition, distance, duration);
        window.scrollTo(0, progress);
        if (elapsed < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    document.addEventListener('click', onAnchorClick);
    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('click', onAnchorClick);
      cancelAnimationFrame(rafRef.current);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', addExplore);
        el.removeEventListener('mouseleave', removeExplore);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div id="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div id="cursor-label" ref={labelRef} aria-hidden="true">EXPLORE</div>
    </>
  );
}
