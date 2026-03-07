'use client';

import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { ACTIVITIES } from '@/data/activities';
import PriorityBadge from '@/components/shared/PriorityBadge';
import StatusBadge from '@/components/shared/StatusBadge';
import type { Priority } from '@/types';
import clsx from 'clsx';

type Filter = 'all' | 'high' | 'medium' | 'low' | 'free';

export default function ActivitiesPage() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filtered = ACTIVITIES.filter((a) => {
    if (filter === 'all') return true;
    if (filter === 'high') return a.priority === 'high';
    if (filter === 'medium') return a.priority === 'medium';
    if (filter === 'low') return a.priority === 'low' || a.priority === 'optional';
    if (filter === 'free') return a.priority === 'free';
    return true;
  });

  const filters: { key: Filter; label: string; zh: string }[] = [
    { key: 'all', label: t.activities.filter_all, zh: t.activities.filter_all },
    { key: 'high', label: t.activities.filter_high, zh: t.activities.filter_high },
    { key: 'medium', label: t.activities.filter_medium, zh: t.activities.filter_medium },
    { key: 'low', label: t.activities.filter_low, zh: t.activities.filter_low },
    { key: 'free', label: t.activities.filter_free, zh: t.activities.filter_free },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{t.activities.title}</h1>
        <p className="text-gray-500 text-sm mt-1">{t.activities.subtitle}</p>
      </div>

      {/* Priority guide */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">{t.activities.priority_guide}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { priority: 'high' as Priority, desc: t.activities.high_priority, zh: t.activities.high_priority },
            { priority: 'medium' as Priority, desc: t.activities.medium_priority, zh: t.activities.medium_priority },
            { priority: 'low' as Priority, desc: t.activities.low_priority, zh: t.activities.low_priority },
          ].map(({ priority, desc }) => (
            <div key={priority} className="flex items-start gap-2">
              <PriorityBadge priority={priority} lang={language} small />
              <span className="text-xs text-gray-500">{desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-5">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={clsx(
              'px-3 py-1.5 rounded-full text-sm font-medium transition-colors border',
              filter === key
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-300'
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Activity cards */}
      <div className="space-y-3">
        {filtered.map((activity) => {
          const isOpen = expanded.has(activity.id);
          return (
            <div key={activity.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggle(activity.id)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-800 text-sm">
                      {language === 'en' ? activity.name.en : activity.name.zh}
                    </span>
                    <PriorityBadge priority={activity.priority} lang={language} small />
                    <StatusBadge status={activity.status} lang={language} />
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                    <span>
                      {language === 'en' ? `Day ${activity.day}` : `第${activity.day}天`}
                      {activity.time && ` · ${activity.time}`}
                    </span>
                    {activity.costTotal !== undefined && (
                      <span className="text-emerald-600 font-medium">
                        {activity.costTotal === 0 ? 'FREE' : `NZD ~$${activity.costTotal.toLocaleString()}`}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-gray-400 shrink-0">{isOpen ? '▲' : '▼'}</span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 border-t border-gray-100 pt-4 space-y-3">
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? activity.description.en : activity.description.zh}
                  </p>

                  {/* Cost breakdown */}
                  {(activity.costAdult || activity.costChild) && (
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {activity.costAdult && (
                        <div className="bg-gray-50 rounded-lg p-2">
                          <span className="text-gray-400 text-xs">{t.common.per_adult}</span>
                          <div className="font-semibold text-gray-700">{activity.currency} ${activity.costAdult}</div>
                        </div>
                      )}
                      {activity.costChild && (
                        <div className="bg-gray-50 rounded-lg p-2">
                          <span className="text-gray-400 text-xs">{t.common.per_child}</span>
                          <div className="font-semibold text-gray-700">{activity.currency} ${activity.costChild}</div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Details grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-500">
                    {activity.duration && (
                      <div><span className="text-gray-400">{language === 'en' ? 'Duration' : '时长'}:</span> {language === 'en' ? activity.duration.en : activity.duration.zh}</div>
                    )}
                    {activity.phone && (
                      <div><span className="text-gray-400">{t.common.phone}:</span> {activity.phone}</div>
                    )}
                    {activity.address && (
                      <div className="col-span-2"><span className="text-gray-400">{t.common.address}:</span> {language === 'en' ? activity.address.en : activity.address.zh}</div>
                    )}
                    {activity.bookingRef && (
                      <div><span className="text-gray-400">{t.common.booking_ref}:</span> {activity.bookingRef}</div>
                    )}
                    {activity.participants && (
                      <div><span className="text-gray-400">{t.common.participants}:</span> {language === 'en' ? activity.participants.en : activity.participants.zh}</div>
                    )}
                  </div>

                  {/* Notes */}
                  {activity.notes && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-700">
                      📝 {language === 'en' ? activity.notes.en : activity.notes.zh}
                    </div>
                  )}

                  {/* Includes */}
                  {activity.includes && activity.includes.length > 0 && (
                    <div>
                      <div className="text-xs font-semibold text-gray-600 mb-1">{t.common.includes}:</div>
                      <ul className="space-y-0.5">
                        {activity.includes.map((inc, i) => (
                          <li key={i} className="text-xs text-gray-500 flex items-center gap-1">
                            <span className="text-emerald-400">✓</span>
                            {language === 'en' ? inc.en : inc.zh}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Website */}
                  {activity.website && (
                    <div className="text-xs">
                      <span className="text-gray-400">{t.common.website}:</span>{' '}
                      <span className="text-blue-600">{activity.website}</span>
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
