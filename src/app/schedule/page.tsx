'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/i18n/LanguageContext';
import { ITINERARY } from '@/data/itinerary';
import { ROUTE_SEGMENTS } from '@/data/locations';
import { DAY_IMAGES } from '@/data/images';
import DayTimeline from '@/components/map/DayTimeline';
import type { ItineraryActivity } from '@/types';
import clsx from 'clsx';

const DayMap = dynamic(() => import('@/components/schedule/DayMap'), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center" style={{ height: 300 }}>
      <span className="text-gray-400 text-sm">Loading map…</span>
    </div>
  ),
});


function activityTypeBadge(type: ItineraryActivity['type'], lang: 'en' | 'zh') {
  if (!type || type === 'normal') return null;
  const map: Record<string, { label: string; zh: string; classes: string }> = {
    free: { label: 'FREE', zh: '免费', classes: 'bg-emerald-100 text-emerald-700' },
    optional: { label: 'Optional', zh: '可选', classes: 'bg-purple-100 text-purple-700' },
    'must-book': { label: '🔴 Must Book', zh: '🔴 必须预订', classes: 'bg-red-100 text-red-700' },
    'book-ahead': { label: '🟡 Book Ahead', zh: '🟡 提前预订', classes: 'bg-yellow-100 text-yellow-700' },
  };
  const cfg = map[type];
  if (!cfg) return null;
  return (
    <span className={clsx('text-xs px-2 py-0.5 rounded-full font-medium', cfg.classes)}>
      {lang === 'zh' ? cfg.zh : cfg.label}
    </span>
  );
}

export default function SchedulePage() {
  const { t, language } = useLanguage();
  const [openDays, setOpenDays] = useState<Set<number>>(new Set([1]));
  const [lastOpenedDay, setLastOpenedDay] = useState<number | null>(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const setCardRef = useCallback((day: number) => (el: HTMLDivElement | null) => {
    if (el) cardRefs.current.set(day, el);
    else cardRefs.current.delete(day);
  }, []);

  const toggleCard = (day: number) => {
    setOpenDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) {
        next.delete(day);
        // If no cards open, reset map to overview
        if (next.size === 0) setLastOpenedDay(null);
      } else {
        next.add(day);
        setLastOpenedDay(day);
      }
      return next;
    });
  };

  const handleDayChange = (day: number | null) => {
    if (day === null) {
      setLastOpenedDay(null);
      return;
    }
    setOpenDays(new Set([day]));
    setLastOpenedDay(day);
    // Scroll to the card
    setTimeout(() => {
      const el = cardRefs.current.get(day);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  };

  const handlePlayPause = () => setIsPlaying((prev) => !prev);

  // Find route segment for a given day
  const getSegment = (dayNum: number) =>
    ROUTE_SEGMENTS.find((seg) => seg.dayNum === dayNum) ?? null;


  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{t.schedule.title}</h1>
        <p className="text-gray-400 text-sm mt-1 font-medium">{t.schedule.subtitle}</p>
      </div>

      <DayTimeline
        activeDay={lastOpenedDay}
        onDayChange={handleDayChange}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        language={language}
        labels={{
          play: t.map.play,
          pause: t.map.pause,
          show_all: t.map.show_all,
          day: t.map.day,
        }}
      />

      {/* Day cards */}
      <div className="space-y-3 mt-4">
          {ITINERARY.map((day) => {
            const isOpen = openDays.has(day.day);
            const segment = getSegment(day.day);

            return (
              <div
                key={day.day}
                ref={setCardRef(day.day)}
                className={clsx(
                  'bg-white rounded-2xl shadow-sm border overflow-hidden transition-all duration-200',
                  lastOpenedDay === day.day
                    ? 'border-blue-200 shadow-blue-50 shadow-md'
                    : 'border-gray-100 hover:border-gray-200 hover:shadow'
                )}
              >
                <button
                  className="w-full flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => toggleCard(day.day)}
                >
                  <div className="flex items-center gap-3">
                    {DAY_IMAGES[day.day] && (
                      <div className="relative w-16 h-14 shrink-0">
                        <Image
                          src={DAY_IMAGES[day.day]}
                          alt={language === 'en' ? day.title.en : day.title.zh}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-3 py-4 pl-1">
                      <span className="bg-emerald-100 text-emerald-800 text-sm font-bold px-2.5 py-1 rounded-lg min-w-[60px] text-center">
                        {language === 'en' ? `Day ${day.day}` : `第${day.day}天`}
                      </span>
                      <div>
                        <div className="font-semibold text-gray-800">
                          {language === 'en' ? day.title.en : day.title.zh}
                        </div>
                        <div className="text-xs text-gray-400">
                          {language === 'en' ? day.dateLabel.en : day.dateLabel.zh}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pr-4">
                    {segment && (
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ background: segment.color }}
                        title={language === 'en' ? segment.day.en : segment.day.zh}
                      />
                    )}
                    <span className="text-gray-400">{isOpen ? '▲' : '▼'}</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-5 border-t border-gray-100 day-card-content">
                    {DAY_IMAGES[day.day] && (
                      <div className="relative h-32 w-full">
                        <Image
                          src={DAY_IMAGES[day.day]}
                          alt={language === 'en' ? day.title.en : day.title.zh}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                      </div>
                    )}
                    <div className="px-5">
                      {/* Base info */}
                      <div className="mt-3 mb-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg">
                        🏨 {language === 'en' ? day.base.en : day.base.zh}
                        {day.subtitle && (
                          <span className="ml-2 text-gray-500">
                            • {language === 'en' ? day.subtitle.en : day.subtitle.zh}
                          </span>
                        )}
                      </div>

                      {/* Driving info */}
                      {segment && segment.distance && (
                        <div
                          className="mb-3 text-xs px-3 py-2 rounded-lg flex items-center gap-2"
                          style={{ background: segment.color + '18', color: segment.color }}
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full shrink-0"
                            style={{ background: segment.color }}
                          />
                          🚗 {t.schedule.driving}: ~{segment.distance} · ~{segment.driveTime}
                        </div>
                      )}

                      {/* Sections */}
                      <div className="space-y-4">
                        {day.sections.map((section, si) => (
                          <div key={si}>
                            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                              {language === 'en' ? section.title.en : section.title.zh}
                            </h4>
                            <div className="space-y-2">
                              {section.activities.map((act, ai) => (
                                <div key={ai} className="flex gap-3">
                                  {act.time && (
                                    <span className="text-xs text-gray-400 w-16 shrink-0 pt-0.5">
                                      {act.time}
                                    </span>
                                  )}
                                  {!act.time && <span className="w-16 shrink-0" />}
                                  <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <span className="text-sm font-medium text-gray-700">
                                        {act.emoji && <span className="mr-1">{act.emoji}</span>}
                                        {language === 'en' ? act.name.en : act.name.zh}
                                      </span>
                                      {activityTypeBadge(act.type, language)}
                                    </div>
                                    {act.cost && (
                                      <p className="text-xs text-emerald-600 mt-0.5">
                                        💰 {language === 'en' ? act.cost.en : act.cost.zh}
                                      </p>
                                    )}
                                    {act.notes && (
                                      <p className="text-xs text-gray-400 mt-0.5">
                                        {language === 'en' ? act.notes.en : act.notes.zh}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Day notes */}
                      {day.notes && (
                        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-700">
                          📝 {language === 'en' ? day.notes.en : day.notes.zh}
                        </div>
                      )}

                      {/* Daily mini-map */}
                      <div className="mt-4">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          {language === 'en' ? "Today's Route" : '今日路线'}
                        </p>
                        <DayMap
                          dayNum={day.day}
                          language={language}
                          color={segment?.color}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
