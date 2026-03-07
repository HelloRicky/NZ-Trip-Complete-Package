'use client';

import { useEffect, useRef } from 'react';

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

export default function DayTimeline({ activeDay, onDayChange, isPlaying, onPlayPause, language, labels }: Props) {
  const activeDayRef = useRef(activeDay);
  activeDayRef.current = activeDay;

  useEffect(() => {
    if (!isPlaying) return;

    const id = setInterval(() => {
      const current = activeDayRef.current ?? 0;
      if (current >= TOTAL_DAYS) {
        onPlayPause(); // stop at end
      } else {
        onDayChange(current + 1);
      }
    }, 2000);

    return () => clearInterval(id);
  }, [isPlaying, onDayChange, onPlayPause]);

  const dayLabel = (d: number) =>
    language === 'zh' ? `${labels.day}${d}天` : `${labels.day} ${d}`;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 mb-3">
      <div className="flex flex-wrap items-center gap-2">
        {/* Play/Pause */}
        <button
          onClick={onPlayPause}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium transition-colors shrink-0"
        >
          {isPlaying ? (
            <>
              <span>⏸</span>
              <span>{labels.pause}</span>
            </>
          ) : (
            <>
              <span>▶</span>
              <span>{labels.play}</span>
            </>
          )}
        </button>

        {/* Show All */}
        <button
          onClick={() => {
            if (isPlaying) onPlayPause();
            onDayChange(null);
          }}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 ${
            activeDay === null
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          {labels.show_all}
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-200 shrink-0" />

        {/* Day buttons */}
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1).map((d) => (
            <button
              key={d}
              onClick={() => {
                if (isPlaying) onPlayPause();
                onDayChange(d);
              }}
              title={dayLabel(d)}
              className={`w-8 h-7 rounded text-xs font-medium transition-colors ${
                activeDay === d
                  ? 'bg-blue-500 text-white shadow-sm'
                  : activeDay !== null && d > activeDay
                  ? 'bg-gray-50 text-gray-300 hover:text-gray-500 hover:bg-gray-100'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {activeDay !== null && (
        <p className="text-xs text-gray-400 mt-2 pl-1">
          {dayLabel(activeDay)}
        </p>
      )}
    </div>
  );
}
