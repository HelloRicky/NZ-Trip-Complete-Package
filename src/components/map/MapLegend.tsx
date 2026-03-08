'use client';

import { useState } from 'react';
import { ROUTE_SEGMENTS } from '@/data/locations';
import clsx from 'clsx';

interface Props {
  language: 'en' | 'zh';
}

const LOCATION_TYPES = [
  {
    color: '#e74c3c',
    en: 'Base (overnight stop)',
    zh: '基地（过夜营地）',
    emoji: '🏕️',
  },
  {
    color: '#9b59b6',
    en: 'Transport (airport)',
    zh: '交通（机场）',
    emoji: '✈️',
  },
  {
    color: '#27ae60',
    en: 'Scenic (viewpoints)',
    zh: '风景（观景台）',
    emoji: '📸',
  },
  {
    color: '#3498db',
    en: 'Activity (booked)',
    zh: '活动（已预订）',
    emoji: '🎯',
  },
  {
    color: '#e67e22',
    en: 'Food',
    zh: '餐饮',
    emoji: '🍽️',
  },
];

// Deduplicate route segments by label for the legend display
function getUniqueDaySegments() {
  const seen = new Set<string>();
  return ROUTE_SEGMENTS.filter((seg) => {
    const key = `${seg.dayNum}-${seg.day.en}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export default function MapLegend({ language }: Props) {
  const [open, setOpen] = useState(false);

  const uniqueSegments = getUniqueDaySegments();

  return (
    <div
      className="absolute bottom-3 left-3 z-[1000] flex flex-col items-start gap-1"
      style={{ pointerEvents: 'none' }}
    >
      {/* Expandable panel */}
      {open && (
        <div
          className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-3 w-64 max-h-[65vh] overflow-y-auto"
          style={{ pointerEvents: 'auto' }}
        >
          {/* Location Types */}
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
            {language === 'en' ? 'Location Types' : '地点类型'}
          </p>
          <div className="space-y-1.5 mb-3">
            {LOCATION_TYPES.map((type) => (
              <div key={type.en} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full shrink-0 ring-2 ring-white shadow-sm"
                  style={{ background: type.color }}
                />
                <span className="text-[11px] text-gray-600 leading-none">
                  {language === 'en' ? type.en : type.zh}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 mb-2.5" />

          {/* Route Days */}
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
            {language === 'en' ? 'Route Days' : '路线天数'}
          </p>
          <div className="space-y-1.5">
            {uniqueSegments.map((seg, i) => (
              <div key={i} className="flex items-start gap-2">
                <span
                  className="mt-0.5 w-5 h-2 rounded shrink-0 shadow-sm"
                  style={{ background: seg.color }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-gray-700 leading-tight">
                    {language === 'en' ? seg.day.en : seg.day.zh}
                  </p>
                  {seg.distance && (
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      {seg.distance} · {seg.driveTime}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{ pointerEvents: 'auto' }}
        className={clsx(
          'flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg shadow-md border text-xs font-semibold transition-all duration-150',
          open
            ? 'bg-blue-600 text-white border-blue-500 shadow-blue-200'
            : 'bg-white/95 text-gray-600 border-gray-200 hover:bg-gray-50'
        )}
        title={
          open
            ? language === 'en'
              ? 'Hide legend'
              : '隐藏图例'
            : language === 'en'
              ? 'Show legend'
              : '显示图例'
        }
      >
        <span>{open ? '✕' : 'ℹ'}</span>
        <span>{language === 'en' ? 'Legend' : '图例'}</span>
      </button>
    </div>
  );
}
