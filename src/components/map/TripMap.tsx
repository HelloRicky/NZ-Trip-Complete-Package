'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Marker, Popup, Polyline } from 'react-leaflet';
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LOCATIONS, ROUTE_SEGMENTS } from '@/data/locations';
import type { Location } from '@/types';

interface Props {
  language: 'en' | 'zh';
}

const typeColors: Record<Location['type'], string> = {
  base: '#e74c3c',
  daytrip: '#f39c12',
  activity: '#3498db',
};

export default function TripMap({ language }: Props) {
  useEffect(() => {
    // Fix default Leaflet marker icon paths in Next.js
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const L = require('leaflet');
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer
      center={[-43.5, 170.5]}
      zoom={7}
      className="h-full w-full"
      style={{ zIndex: 1 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      {/* Route segments */}
      {ROUTE_SEGMENTS.map((seg, i) => (
        <Polyline
          key={i}
          positions={seg.coords}
          pathOptions={{ color: seg.color, weight: 2.5, opacity: 0.7, dashArray: '8,8' }}
        />
      ))}

      {/* Location markers */}
      {LOCATIONS.map((loc) => {
        const color = typeColors[loc.type];
        const radius = loc.type === 'base' ? 12 : 8;
        const emojiIcon = divIcon({
          className: '',
          html: `<div style="font-size:20px;text-shadow:1px 1px 3px white,0 0 6px white;">${loc.icon}</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });
        return (
          <div key={loc.id}>
            <CircleMarker
              center={loc.coords}
              radius={radius}
              pathOptions={{ fillColor: color, color: '#fff', weight: 2, fillOpacity: 0.85 }}
            >
              <Popup>
                <div className="text-sm max-w-[200px]">
                  <strong>{language === 'en' ? loc.name.en : loc.name.zh}</strong>
                  <br />
                  <pre className="whitespace-pre-wrap text-xs text-gray-600 mt-1" style={{ fontFamily: 'inherit' }}>
                    {language === 'en' ? loc.description.en : loc.description.zh}
                  </pre>
                </div>
              </Popup>
            </CircleMarker>
            <Marker position={loc.coords} icon={emojiIcon} />
          </div>
        );
      })}
    </MapContainer>
  );
}
