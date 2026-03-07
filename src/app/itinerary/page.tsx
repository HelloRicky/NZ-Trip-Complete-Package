'use client';

import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { ITINERARY } from '@/data/itinerary';
import type { ItineraryActivity } from '@/types';
import clsx from 'clsx';

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

export default function ItineraryPage() {
  const { t, language } = useLanguage();
  const [openDays, setOpenDays] = useState<Set<number>>(new Set([1]));

  const toggle = (day: number) => {
    setOpenDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">{t.itinerary.title}</h1>
        <p className="text-gray-500 text-sm mt-1">{t.itinerary.subtitle}</p>
      </div>

      <div className="space-y-3">
        {ITINERARY.map((day) => {
          const isOpen = openDays.has(day.day);
          return (
            <div key={day.day} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggle(day.day)}
              >
                <div className="flex items-center gap-3">
                  <span className="bg-emerald-100 text-emerald-800 text-sm font-bold px-2.5 py-1 rounded-lg min-w-[60px] text-center">
                    {language === 'en' ? `Day ${day.day}` : `第${day.day}天`}
                  </span>
                  <div>
                    <div className="font-semibold text-gray-800">{language === 'en' ? day.title.en : day.title.zh}</div>
                    <div className="text-xs text-gray-400">{language === 'en' ? day.dateLabel.en : day.dateLabel.zh}</div>
                  </div>
                </div>
                <span className="text-gray-400 ml-2">{isOpen ? '▲' : '▼'}</span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 border-t border-gray-100">
                  {/* Base info */}
                  <div className="mt-3 mb-4 text-xs text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg">
                    🏨 {language === 'en' ? day.base.en : day.base.zh}
                    {day.subtitle && (
                      <span className="ml-2 text-gray-500">• {language === 'en' ? day.subtitle.en : day.subtitle.zh}</span>
                    )}
                  </div>

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
                                <span className="text-xs text-gray-400 w-16 shrink-0 pt-0.5">{act.time}</span>
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
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
