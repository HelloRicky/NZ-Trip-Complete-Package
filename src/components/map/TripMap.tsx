'use client';

import { useEffect, useRef, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import { Fragment } from 'react';
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LOCATIONS, ROUTE_SEGMENTS } from '@/data/locations';
import type { Location } from '@/types';
import AnimatedPolyline from './AnimatedPolyline';

interface Props {
  language: 'en' | 'zh';
  activeDay?: number | null;
}

// Day → flyTo center + zoom
const DAY_VIEWS: Record<number, { center: [number, number]; zoom: number }> = {
  1: { center: [-43.532, 172.6306], zoom: 10 },
  2: { center: [-42.97, 173.16], zoom: 9 },
  3: { center: [-44.0, 170.7], zoom: 8 },
  4: { center: [-44.2, 170.6], zoom: 7 },
  5: { center: [-45.0312, 168.6626], zoom: 11 },
  6: { center: [-44.9, 168.38], zoom: 10 },
  7: { center: [-44.2, 169.6], zoom: 8 },
  8: { center: [-43.532, 172.6306], zoom: 10 },
  9: { center: [-43.532, 172.6306], zoom: 11 },
  10: { center: [-43.7, 172.78], zoom: 10 },
};

const OVERVIEW = { center: [-43.7, 170.5] as [number, number], zoom: 7 };

const typeColors: Record<Location['type'], string> = {
  base: '#e74c3c',
  daytrip: '#f39c12',
  activity: '#3498db',
};

// ── Map controller ────────────────────────────────────────────────────────────
function MapController({ activeDay }: { activeDay: number | null | undefined }) {
  const map = useMap();

  useEffect(() => {
    if (activeDay == null) {
      map.flyTo(OVERVIEW.center, OVERVIEW.zoom, { duration: 1.4, easeLinearity: 0.3 });
    } else {
      const view = DAY_VIEWS[activeDay] ?? OVERVIEW;
      map.flyTo(view.center, view.zoom, { duration: 1.4, easeLinearity: 0.3 });
    }
  }, [activeDay, map]);

  return null;
}

// ── Pulsing active-location marker ───────────────────────────────────────────
function PulsingDot({ coords }: { coords: [number, number] }) {
  const icon = divIcon({
    className: '',
    html: `<div class="pulse-dot"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
  return <Marker position={coords} icon={icon} />;
}

// ── Main component ────────────────────────────────────────────────────────────
export default function TripMap({ language, activeDay }: Props) {
  // Track which segments have been animated (key = timestamp of trigger)
  const [segAnimKeys, setSegAnimKeys] = useState<Record<number, number>>({});
  const prevDayRef = useRef<number | null | undefined>(undefined);

  // Fix Leaflet default icons
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const L = require('leaflet');
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });
  }, []);

  // Decide whether to animate a new segment (only in sequential/play mode)
  useEffect(() => {
    const prev = prevDayRef.current;
    prevDayRef.current = activeDay;

    if (activeDay != null && prev != null && activeDay === prev + 1) {
      // Going forward one step → animate the new segment for this day
      const seg = ROUTE_SEGMENTS.find((s) => s.dayNum === activeDay);
      if (seg) {
        setSegAnimKeys((keys) => ({ ...keys, [activeDay]: Date.now() }));
      }
    }
    // If jumping from null → day, animate that day's segment too (first tap on a day)
    if (activeDay != null && prev == null) {
      const seg = ROUTE_SEGMENTS.find((s) => s.dayNum === activeDay);
      if (seg) {
        setSegAnimKeys((keys) => ({ ...keys, [activeDay]: Date.now() }));
      }
    }
  }, [activeDay]);

  const showAll = activeDay == null;

  // Determine which location to pulse
  const activeLocation =
    activeDay != null
      ? LOCATIONS.find((loc) => loc.days?.includes(activeDay))
      : null;

  return (
    <MapContainer
      center={OVERVIEW.center}
      zoom={OVERVIEW.zoom}
      className="h-full w-full"
      style={{ zIndex: 1 }}
      zoomControl={false}
    >
      {/* Clean, travel-friendly CartoDB Voyager tiles */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains="abcd"
        maxZoom={20}
      />

      <MapController activeDay={activeDay} />

      {/* ── Route segments ─────────────────────────────────────────────── */}
      {ROUTE_SEGMENTS.map((seg) => {
        const visible = showAll || seg.dayNum <= activeDay!;
        if (!visible) return null;

        const isActive = activeDay === seg.dayNum;
        const animKey = segAnimKeys[seg.dayNum] ?? null;

        return (
          <Fragment key={seg.dayNum}>
            {/* Glow layer (thicker, semi-transparent) */}
            <AnimatedPolyline
              positions={seg.coords}
              color={seg.color}
              weight={isActive ? 10 : 7}
              opacity={isActive ? 0.22 : 0.12}
              animateKey={animKey}
            />
            {/* Main line */}
            <AnimatedPolyline
              positions={seg.coords}
              color={seg.color}
              weight={isActive ? 4.5 : 3}
              opacity={isActive ? 1 : 0.65}
              animateKey={animKey}
            />
          </Fragment>
        );
      })}

      {/* ── Location markers ───────────────────────────────────────────── */}
      {LOCATIONS.map((loc) => {
        const visible =
          showAll || (loc.days != null && Math.min(...loc.days) <= activeDay!);
        if (!visible) return null;

        const color = typeColors[loc.type];
        const isActiveLoc = loc === activeLocation;
        const radius = loc.type === 'base' ? 11 : 7;

        const emojiIcon = divIcon({
          className: '',
          html: `<div style="font-size:18px;text-shadow:0 2px 6px rgba(0,0,0,0.3),0 0 12px white;filter:drop-shadow(0 1px 2px rgba(0,0,0,.4));">${loc.icon}</div>`,
          iconSize: [26, 26],
          iconAnchor: [13, 13],
        });

        return (
          <Fragment key={loc.id}>
            {/* Outer glow ring for active location */}
            {isActiveLoc && (
              <CircleMarker
                center={loc.coords}
                radius={radius + 8}
                pathOptions={{
                  fillColor: color,
                  color: 'transparent',
                  fillOpacity: 0.15,
                }}
              />
            )}

            <CircleMarker
              center={loc.coords}
              radius={radius}
              pathOptions={{
                fillColor: color,
                color: '#fff',
                weight: isActiveLoc ? 2.5 : 1.5,
                fillOpacity: isActiveLoc ? 1 : 0.85,
              }}
            >
              <Popup>
                <div className="text-sm max-w-[220px]">
                  <strong className="text-gray-800">
                    {language === 'en' ? loc.name.en : loc.name.zh}
                  </strong>
                  <pre
                    className="whitespace-pre-wrap text-xs text-gray-500 mt-1.5 leading-relaxed"
                    style={{ fontFamily: 'inherit' }}
                  >
                    {language === 'en' ? loc.description.en : loc.description.zh}
                  </pre>
                </div>
              </Popup>
            </CircleMarker>

            <Marker position={loc.coords} icon={emojiIcon} />

            {/* Pulsing dot on active location */}
            {isActiveLoc && <PulsingDot coords={loc.coords} />}
          </Fragment>
        );
      })}
    </MapContainer>
  );
}
