'use client';

import { useEffect, useRef } from 'react';
import { ROUTE_SEGMENTS } from '@/data/locations';

interface Props {
  activeDay: number | null;
  onDayChange: (day: number | null) => void;
  isPlaying: boolean;
  onPlayPause: () => void;
  language: 'en' | 'zh';
  labels: {
    play: string;
    pause: string;
    show_all: string;
    day: string;
  };
}

const TOTAL_DAYS = 10;

// Segment color for a given day number
function segmentColor(day: number): string {
  const seg = ROUTE_SEGMENTS.find((s) => s.dayNum === day);
  return seg?.color ?? '#94a3b8';
}

export default function DayTimeline({
  activeDay,
  onDayChange,
  isPlaying,
  onPlayPause,
  language,
  labels,
}: Props) {
  const activeDayRef = useRef(activeDay);
  activeDayRef.current = activeDay;

  // Auto-advance in play mode
  useEffect(() => {
    if (!isPlaying) return;

    const id = setInterval(() => {
      const current = activeDayRef.current ?? 0;
      if (current >= TOTAL_DAYS) {
        onPlayPause(); // stop at end
      } else {
        onDayChange(current + 1);
      }
    }, 2200);

    return () => clearInterval(id);
  }, [isPlaying, onDayChange, onPlayPause]);

  const progress = activeDay != null ? (activeDay / TOTAL_DAYS) * 100 : 0;

  return (
    <div className="trip-timeline bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
      {/* Progress bar + controls row */}
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-center gap-3 mb-3">
          {/* Play / Pause */}
          <button
            onClick={onPlayPause}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 hover:bg-gray-700 text-white transition-colors shadow-sm shrink-0"
            aria-label={isPlaying ? labels.pause : labels.play}
          >
            {isPlaying ? (
              /* Pause icon */
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <rect x="2" y="1" width="3.5" height="12" rx="1" />
                <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
              </svg>
            ) : (
              /* Play icon */
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <path d="M3 1.5l9 5.5-9 5.5V1.5z" />
              </svg>
            )}
          </button>

          {/* Progress track */}
          <div className="flex-1 relative">
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${progress}%`,
                  background:
                    'linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, #10b981 100%)',
                }}
              />
            </div>
            {/* Active day label on the track */}
            {activeDay != null && (
              <div
                className="absolute -top-5 text-[10px] font-semibold text-gray-500 whitespace-nowrap transition-all duration-700"
                style={{ left: `${Math.min(progress, 95)}%`, transform: 'translateX(-50%)' }}
              >
                {language === 'zh' ? `第${activeDay}天` : `Day ${activeDay}`}
              </div>
            )}
          </div>

          {/* Show All */}
          <button
            onClick={() => {
              if (isPlaying) onPlayPause();
              onDayChange(null);
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 ${
              activeDay === null
                ? 'bg-gray-900 text-white shadow-sm'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
          >
            {labels.show_all}
          </button>
        </div>

        {/* Day chips */}
        <div className="flex gap-1.5 flex-wrap">
          {Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1).map((d) => {
            const color = segmentColor(d);
            const isPast = activeDay != null && d < activeDay;
            const isActive = activeDay === d;
            const isFuture = activeDay != null && d > activeDay;

            return (
              <button
                key={d}
                onClick={() => {
                  if (isPlaying) onPlayPause();
                  onDayChange(d);
                }}
                className="relative flex items-center justify-center rounded-lg text-xs font-semibold transition-all duration-200"
                style={{
                  width: '34px',
                  height: '34px',
                  background: isActive
                    ? color
                    : isPast
                    ? `${color}30`
                    : isFuture
                    ? '#f1f5f9'
                    : '#f1f5f9',
                  color: isActive ? '#fff' : isPast ? color : '#94a3b8',
                  boxShadow: isActive ? `0 2px 8px ${color}60` : 'none',
                  transform: isActive ? 'scale(1.15)' : 'scale(1)',
                }}
                title={language === 'zh' ? `第${d}天` : `Day ${d}`}
              >
                {d}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
