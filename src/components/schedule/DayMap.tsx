'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LOCATIONS, ROUTE_SEGMENTS } from '@/data/locations';
import type { Location } from '@/types';

interface Props {
  dayNum: number;
  language?: 'en' | 'zh';
  color?: string;
}

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
  // Get locations for this day, in array order (which matches activity order in data)
  const dayLocations = LOCATIONS.filter(
    (loc) => loc.days?.includes(dayNum) ?? false
  );

  // Get the segment color for this day (use first matching segment)
  const segment = ROUTE_SEGMENTS.find((seg) => seg.dayNum === dayNum);
  const routeColor = color ?? segment?.color ?? '#3498db';

  // Coordinates for the straight-line route between markers
  const routeCoords = dayLocations.map((loc) => loc.coords) as [number, number][];

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

        {/* Dashed route line connecting locations in order */}
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
            {/* Main dashed line */}
            <Polyline
              positions={routeCoords}
              pathOptions={{
                color: routeColor,
                weight: 2.5,
                opacity: 0.85,
                dashArray: '8 6',
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
