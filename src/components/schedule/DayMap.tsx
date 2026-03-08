'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LOCATIONS, ROUTE_SEGMENTS, DAY_ORDER } from '@/data/locations';
import {
  ROAD_DAY1,
  ROAD_DAY4,
  ROAD_DAY5,
  ROAD_DAY6,
  ROAD_DAY8,
  ROAD_DAY9_ROSE,
  ROAD_DAY10,
} from '@/data/road-routes';
import type { Location } from '@/types';

interface Props {
  dayNum: number;
  language?: 'en' | 'zh';
  color?: string;
}

// Map day number → pre-fetched OSRM road route coords
const ROAD_ROUTES: Record<number, [number, number][]> = {
  1: ROAD_DAY1,
  4: ROAD_DAY4,
  5: ROAD_DAY5,
  6: ROAD_DAY6,
  8: ROAD_DAY8,
  9: ROAD_DAY9_ROSE,
  10: ROAD_DAY10,
};

// Fit the map to the given bounds when locations change
function BoundsFitter({ locations }: { locations: Location[] }) {
  const map = useMap();
  const fittedRef = useRef(false);

  useEffect(() => {
    if (locations.length === 0) return;

    const bounds = locations.map((loc) => loc.coords) as [number, number][];

    if (bounds.length === 1) {
      map.setView(bounds[0], 13, { animate: false });
    } else {
      map.fitBounds(bounds as [[number, number], [number, number]], {
        padding: [32, 32],
        animate: false,
        maxZoom: 14,
      });
    }

    fittedRef.current = true;
  }, [map, locations]);

  return null;
}

export default function DayMap({ dayNum, language = 'en', color }: Props) {
  // Get locations for this day in explicit route order (travel sequence)
  const dayLocationIds = DAY_ORDER[dayNum] || [];
  const seen = new Set<string>();
  const dayLocations = dayLocationIds
    .map((id) => LOCATIONS.find((loc) => loc.id === id))
    .filter((loc): loc is Location => {
      if (!loc || seen.has(loc.id)) return false;
      seen.add(loc.id);
      return true;
    });

  // Get the segment color for this day (use first matching segment)
  const segment = ROUTE_SEGMENTS.find((seg) => seg.dayNum === dayNum);
  const routeColor = color ?? segment?.color ?? '#3498db';

  // Use pre-fetched OSRM road route if available, otherwise fall back to straight lines
  const roadRoute = ROAD_ROUTES[dayNum];
  const routeCoords: [number, number][] = roadRoute
    ? roadRoute
    : dayLocations.map((loc) => loc.coords) as [number, number][];

  if (dayLocations.length === 0) return null;

  return (
    <div
      className="rounded-xl overflow-hidden border border-gray-100 shadow-sm"
      style={{ height: 300 }}
    >
      <MapContainer
        center={dayLocations[0].coords}
        zoom={11}
        className="h-full w-full"
        style={{ zIndex: 1 }}
        zoomControl={false}
        scrollWheelZoom={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={20}
        />

        <BoundsFitter locations={dayLocations} />

        {/* Road route line */}
        {routeCoords.length > 1 && (
          <>
            {/* Glow / shadow layer */}
            <Polyline
              positions={routeCoords}
              pathOptions={{
                color: routeColor,
                weight: 6,
                opacity: 0.18,
                lineCap: 'round',
                lineJoin: 'round',
              }}
            />
            {/* Main solid road route line (no dash — it's a real road trace) */}
            <Polyline
              positions={routeCoords}
              pathOptions={{
                color: routeColor,
                weight: roadRoute ? 3 : 2.5,
                opacity: 0.85,
                dashArray: roadRoute ? undefined : '8 6',
                lineCap: 'round',
                lineJoin: 'round',
              }}
            />
          </>
        )}

        {/* Numbered markers */}
        {dayLocations.map((loc, idx) => {
          const num = idx + 1;
          const isFirst = idx === 0;
          const isLast = idx === dayLocations.length - 1;

          // Outer ring: slightly bigger for base/transport types
          const size = loc.type === 'base' || loc.type === 'transport' ? 32 : 28;
          const half = size / 2;
          const fontSize = size >= 32 ? 13 : 12;

          // Color: first/last use the route color; middle stops slightly lighter
          const bg = isFirst || isLast
            ? routeColor
            : `${routeColor}cc`;

          const icon = divIcon({
            className: '',
            html: `
              <div style="
                width:${size}px;
                height:${size}px;
                border-radius:50%;
                background:${bg};
                border:2.5px solid white;
                box-shadow:0 2px 6px rgba(0,0,0,0.25);
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:${fontSize}px;
                font-weight:700;
                color:white;
                font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
                line-height:1;
              ">${num}</div>`,
            iconSize: [size, size],
            iconAnchor: [half, half],
            popupAnchor: [0, -(half + 4)],
          });

          return (
            <Marker key={loc.id} position={loc.coords} icon={icon}>
              <Popup>
                <div className="text-sm max-w-[180px]">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span
                      className="inline-flex items-center justify-center rounded-full text-white font-bold text-xs shrink-0"
                      style={{
                        background: routeColor,
                        width: 20,
                        height: 20,
                        fontSize: 11,
                      }}
                    >
                      {num}
                    </span>
                    <strong className="text-gray-800 leading-tight">
                      {language === 'en' ? loc.name.en : loc.name.zh}
                    </strong>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {loc.icon}{' '}
                    {language === 'en'
                      ? loc.description.en.split('\n')[0]
                      : loc.description.zh.split('\n')[0]}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
