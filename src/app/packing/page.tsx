'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';
import { PACKING_CATEGORIES } from '@/data/packing';
import { IMAGES } from '@/data/images';
import clsx from 'clsx';

const STORAGE_KEY = 'nz-trip-packing';

export default function PackingPage() {
  const { t, language } = useLanguage();
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setChecked(new Set(JSON.parse(stored)));
      } catch {
        // ignore parse errors
      }
    }
    setLoaded(true);
  }, []);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  };

  const reset = () => {
    setChecked(new Set());
    localStorage.removeItem(STORAGE_KEY);
  };

  const totalItems = PACKING_CATEGORIES.flatMap((c) => c.items).length;
  const packedItems = checked.size;
  const percent = totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  if (!loaded) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative rounded-xl overflow-hidden mb-6 h-28">
        <Image
          src={IMAGES.destinations.queenstown}
          alt="New Zealand packing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/75 to-emerald-800/50" />
        <div className="absolute inset-0 flex items-center justify-between px-6">
          <div>
            <h1 className="text-2xl font-bold text-white">{t.packing.title}</h1>
            <p className="text-emerald-100 text-sm mt-1">{t.packing.subtitle}</p>
          </div>
          <button
            onClick={reset}
            className="text-sm text-white border border-white/50 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
          >
            {t.packing.reset}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">{t.packing.progress}</span>
          <span className="text-sm text-gray-500">
            {packedItems} / {totalItems} {t.packing.items_packed}
          </span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="text-right text-xs text-gray-400 mt-1">{percent}%</div>
      </div>

      {/* NZ biosecurity warning */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-sm text-red-700">
        {t.packing.nz_bio_warning}
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {PACKING_CATEGORIES.map((category) => {
          const categoryChecked = category.items.filter((i) => checked.has(i.id)).length;
          const allChecked = categoryChecked === category.items.length;
          return (
            <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                  <span>{category.emoji}</span>
                  <span>{language === 'en' ? category.name.en : category.name.zh}</span>
                </h3>
                <span className={clsx('text-xs font-medium px-2 py-0.5 rounded-full', allChecked ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500')}>
                  {categoryChecked}/{category.items.length}
                </span>
              </div>
              <div className="divide-y divide-gray-50">
                {category.items.map((item) => {
                  const isChecked = checked.has(item.id);
                  return (
                    <label
                      key={item.id}
                      className={clsx(
                        'flex items-start gap-3 px-5 py-3 cursor-pointer hover:bg-gray-50 transition-colors',
                        isChecked && 'bg-emerald-50'
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggle(item.id)}
                        className="mt-0.5 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <div className="flex-1">
                        <span className={clsx('text-sm', isChecked ? 'line-through text-gray-400' : 'text-gray-700')}>
                          {language === 'en' ? item.name.en : item.name.zh}
                          {item.essential && !isChecked && (
                            <span className="ml-1.5 text-xs text-red-500 font-medium">★</span>
                          )}
                        </span>
                        {item.notes && !isChecked && (
                          <p className="text-xs text-gray-400 mt-0.5">
                            {language === 'en' ? item.notes.en : item.notes.zh}
                          </p>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-gray-400 text-center mt-6">
        ★ = {language === 'en' ? 'Essential item' : '必备物品'}
      </p>
    </div>
  );
}
