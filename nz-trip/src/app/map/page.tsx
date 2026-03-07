'use client';

import dynamic from 'next/dynamic';
import { useLanguage } from '@/i18n/LanguageContext';
import { LOCATIONS, ROUTE_SEGMENTS } from '@/data/locations';

const TripMap = dynamic(() => import('@/components/map/TripMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full text-gray-500">
      <div className="text-center">
        <div className="text-3xl mb-2">🗺️</div>
        <p>Loading map...</p>
      </div>
    </div>
  ),
});

export default function MapPage() {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">{t.map.title}</h1>
        <p className="text-gray-500 text-sm mt-1">{t.map.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Map */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" style={{ height: '550px' }}>
          <TripMap language={language} />
        </div>

        {/* Sidebar */}
        <div className="lg:w-64 space-y-4">
          {/* Legend */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-700 text-sm mb-3">{language === 'en' ? 'Legend' : '图例'}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-red-500 shrink-0" />
                <span className="text-gray-600">{t.map.legend_bases}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
                <span className="text-gray-600">{t.map.legend_daytrips}</span>
              </div>
            </div>
          </div>

          {/* Route segments */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-700 text-sm mb-3">{language === 'en' ? 'Route Segments' : '路线段'}</h3>
            <div className="space-y-2">
              {ROUTE_SEGMENTS.map((seg, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                  <span
                    className="w-6 h-2 rounded shrink-0 border border-dashed"
                    style={{ background: seg.color, borderColor: seg.color }}
                  />
                  {language === 'en' ? seg.day.en : seg.day.zh}
                </div>
              ))}
            </div>
          </div>

          {/* Locations list */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-700 text-sm mb-3">{language === 'en' ? 'All Locations' : '所有地点'}</h3>
            <div className="space-y-1">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="flex items-center gap-2 text-xs text-gray-600 py-1">
                  <span>{loc.icon}</span>
                  <span>{language === 'en' ? loc.name.en : loc.name.zh}</span>
                  {loc.type === 'base' && (
                    <span className="ml-auto text-red-500 text-xs">Base</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-3">{t.map.click_marker}</p>
    </div>
  );
}
