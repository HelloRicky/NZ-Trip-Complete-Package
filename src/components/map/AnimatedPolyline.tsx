'use client';

import { useEffect, useRef } from 'react';
import { Polyline } from 'react-leaflet';
import type L from 'leaflet';

interface Props {
  positions: [number, number][];
  color: string;
  weight?: number;
  opacity?: number;
  dashArray?: string;
  /** Change this value to trigger the draw animation */
  animateKey?: number | string | null;
}

/**
 * Polyline that animates its route drawing via SVG stroke-dashoffset.
 * When `animateKey` changes (to a non-null value), the path draws itself
 * from start to end over ~1.8 s.
 */
export default function AnimatedPolyline({
  positions,
  color,
  weight = 4,
  opacity = 1,
  dashArray,
  animateKey,
}: Props) {
  const polylineRef = useRef<L.Polyline | null>(null);
  const lastKeyRef = useRef<number | string | null | undefined>(undefined);

  useEffect(() => {
    // Skip if key unchanged or null (no animation needed)
    if (animateKey === lastKeyRef.current || animateKey == null) return;
    lastKeyRef.current = animateKey;

    // Slight delay so Leaflet has time to render the SVG path
    const raf = requestAnimationFrame(() => {
      const path = (polylineRef.current as any)?._path as SVGPathElement | null;
      if (!path) return;

      const totalLength = path.getTotalLength();
      if (!totalLength) return;

      // Reset
      path.style.transition = 'none';
      path.style.strokeDasharray = String(totalLength);
      path.style.strokeDashoffset = String(totalLength);

      // Force reflow so the reset takes effect before we animate
      void path.getBoundingClientRect();

      // Animate the draw
      requestAnimationFrame(() => {
        path.style.transition =
          'stroke-dashoffset 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        path.style.strokeDashoffset = '0';
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [animateKey]);

  return (
    <Polyline
      ref={polylineRef}
      positions={positions}
      pathOptions={{
        color,
        weight,
        opacity,
        dashArray,
        lineCap: 'round',
        lineJoin: 'round',
      }}
    />
  );
}
