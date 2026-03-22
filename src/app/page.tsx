'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { TRAVELERS, TRIP_DATES, CAMPERVAN, BUDGET_SUMMARY } from '@/data/trip';
import { IMAGES } from '@/data/images';

function getDaysUntilTrip(): number {
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Sydney',
    year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now);
  const y = parseInt(parts.find((p) => p.type === 'year')!.value);
  const m = parseInt(parts.find((p) => p.type === 'month')!.value) - 1;
  const d = parseInt(parts.find((p) => p.type === 'day')!.value);
  const todaySydney = new Date(y, m, d);
  const tripStart = new Date(2026, 3, 11); // April 11, 2026
  return Math.round((tripStart.getTime() - todaySydney.getTime()) / 86400000);
}

export default function HomePage() {
  const { t, language } = useLanguage();
  const [daysUntil, setDaysUntil] = useState<number | null>(null);

  useEffect(() => {
    setDaysUntil(getDaysUntilTrip());
  }, []);

  const highlights = [
    { emoji: '🎣', en: 'Kaikoura Fishing Charter', zh: '凯库拉钓鱼之旅（第2天）', img: IMAGES.activities.fishing },
    { emoji: '🛶', en: 'Seal Kayaking – Kaikoura', zh: '海豹皮划艇 – 凯库拉', img: IMAGES.activities['seal-kayak'] },
    { emoji: '🏔️', en: 'Hooker Valley Track – Mt Cook', zh: 'Hooker Valley步道 – 库克山', img: IMAGES.activities['hooker-valley'] },
    { emoji: '🪂', en: 'SKYDIVE Mt Cook – Rose & Chris!', zh: '库克山跳伞 – Rose & Chris！', img: IMAGES.activities['hooker-valley'] },
    { emoji: '🚡', en: 'Skyline Gondola + Luge – Queenstown', zh: '天际缆车 + 滑道 – 皇后镇', img: IMAGES.activities['skyline-gondola'] },
    { emoji: '🍂', en: 'Arrowtown Autumn Festival', zh: '箭镇秋季节', img: IMAGES.destinations.queenstown },
    { emoji: '🛁', en: 'Omarama Hot Tubs', zh: '奥马拉马温泉浴桶（第8天）', img: IMAGES.activities['omarama-hot-tubs'] },
    { emoji: '🍄', en: "Bottle Lake Mushroom Picking – Chris's family", zh: '瓶湖采蘑菇 – Chris一家（第10天）', img: IMAGES.activities['bottle-lake'] },
  ];

  const roseFamilyCount = TRAVELERS.filter((t) => t.family === 'rose').length;
  const chrisFamilyCount = TRAVELERS.filter((t) => t.family === 'chris').length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg h-56 md:h-72">
        <Image
          src={IMAGES.hero}
          alt="New Zealand South Island"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <span>🇳🇿</span>
            <span>{t.home.hero_title}</span>
          </h1>
          <p className="text-emerald-100 text-xs sm:text-sm md:text-lg whitespace-nowrap">{t.home.hero_subtitle}</p>
          {daysUntil !== null && daysUntil > 0 ? (
            <div className="mt-3 bg-white/20 backdrop-blur-sm rounded-xl px-5 py-2 text-center">
              <span className="text-3xl font-bold text-white">{daysUntil}</span>
              <span className="text-emerald-100 text-sm ml-2">
                {language === 'en' ? 'days to go' : '天后出发'}
              </span>
            </div>
          ) : (
            <p className="text-emerald-200 text-sm mt-2">
              {TRIP_DATES.start} – {TRIP_DATES.end}
            </p>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div>
        <h2 className="text-lg font-bold text-gray-700 mb-4">{t.home.quick_stats}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: t.home.travelers, value: TRAVELERS.length, emoji: '👥' },
            { label: language === 'en' ? '10 Days Total' : '共10天', value: 10, emoji: '📅' },
            { label: language === 'en' ? 'Destinations' : '目的地', value: 8, emoji: '📍' },
            { label: language === 'en' ? 'Campervan' : '房车', value: 'JUCY', emoji: '🚐' },
          ].map(({ label, value, emoji }) => (
            <div key={label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
              <div className="text-2xl mb-1">{emoji}</div>
              <div className="text-xl font-bold text-gray-800">{value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Families */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">👨‍👩‍👧‍👦</span>
            <h3 className="font-bold text-gray-800">{t.home.rose_family}</h3>
            <span className="text-xs text-gray-400 ml-auto">{roseFamilyCount} {language === 'en' ? 'people' : '人'}</span>
          </div>
          <p className="text-sm text-gray-600">{t.home.rose_members}</p>
          <p className="text-xs text-gray-400 mt-1">{t.home.rose_days}</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              {language === 'en' ? 'Budget' : '预算'}: ~NZD ${BUDGET_SUMMARY.roseFamilyNZD.toLocaleString()} <span className="text-gray-400">({language === 'en' ? 'excl. flights' : '不含机票'})</span>
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">👨‍👩‍👦</span>
            <h3 className="font-bold text-gray-800">{t.home.chris_family}</h3>
            <span className="text-xs text-gray-400 ml-auto">{chrisFamilyCount} {language === 'en' ? 'people' : '人'}</span>
          </div>
          <p className="text-sm text-gray-600">{t.home.chris_members}</p>
          <p className="text-xs text-gray-400 mt-1">{t.home.chris_days}</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              {language === 'en' ? 'Budget' : '预算'}: ~NZD ${BUDGET_SUMMARY.chrisFamilyNZD.toLocaleString()} <span className="text-gray-400">({language === 'en' ? 'excl. flights' : '不含机票'})</span>
            </p>
          </div>
        </div>
      </div>

      {/* Booking Status */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h2 className="font-bold text-gray-700 mb-4">{t.home.booking_status}</h2>
        <div className="space-y-2">
          {[
            { label: language === 'en' ? 'Flights (EK412 / EK413)' : '航班（EK412/EK413）', status: '✅', statusColor: 'text-green-600', detail: language === 'en' ? 'Confirmed – Booking #750492842' : '已确认 – 预订号#750492842' },
            { label: language === 'en' ? 'JUCY Big Kahuna Campervan' : 'JUCY Big Kahuna房车', status: '✅', statusColor: 'text-green-600', detail: language === 'en' ? `Confirmed – #${CAMPERVAN.bookingRef} ($1,836.79)` : `已确认 – #${CAMPERVAN.bookingRef}（$1,836.79）` },
            { label: language === 'en' ? 'Accommodation (7 of 9 nights)' : '住宿（9晚中7晚）', status: '✅', statusColor: 'text-green-600', detail: language === 'en' ? 'Booked: $629.13 | Pending: Omarama + CHC final' : '已预订：$629.13 | 待订：奥马拉马 + 基督城最后一晚' },
            { label: language === 'en' ? 'Seal Kayak Kaikoura' : '凯库拉海豹皮划艇', status: '⏳', statusColor: 'text-amber-600', detail: language === 'en' ? 'Not yet booked' : '尚未预订' },
            { label: language === 'en' ? 'Skydive Mt Cook (Rose & Chris)' : '库克山跳伞（Rose & Chris）', status: '⏳', statusColor: 'text-amber-600', detail: language === 'en' ? '~$598 (2 × $299)' : '约$598（2 × $299）' },
            { label: language === 'en' ? 'Skyline Gondola + Luge' : '天际缆车 + 滑道', status: '⏳', statusColor: 'text-amber-600', detail: language === 'en' ? 'Not yet booked' : '尚未预订' },
            { label: language === 'en' ? 'Omarama Hot Tubs' : '奥马拉马温泉浴桶', status: '⏳', statusColor: 'text-amber-600', detail: language === 'en' ? 'Not yet booked' : '尚未预订' },
          ].map(({ label, status, statusColor, detail }) => (
            <div key={label} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
              <span className={`text-lg ${statusColor}`}>{status}</span>
              <div>
                <p className="text-sm font-medium text-gray-700">{label}</p>
                <p className="text-xs text-gray-400">{detail}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Cost Summary */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">{language === 'en' ? '💰 Confirmed Costs' : '💰 已确认费用'}</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">{language === 'en' ? 'Accommodation' : '住宿'}</span>
              <span className="font-medium text-green-700">$629.13</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">{language === 'en' ? 'Campervan' : '房车'}</span>
              <span className="font-medium text-green-700">$1,836.79</span>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-50 flex justify-between text-sm font-semibold">
            <span className="text-gray-700">{language === 'en' ? 'Total Booked' : '已预订总计'}</span>
            <span className="text-emerald-700">$2,465.92 NZD</span>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div>
        <h2 className="font-bold text-gray-700 mb-4">{t.home.highlights}</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {highlights.map(({ emoji, en, zh, img }) => (
            <div key={en} className="bg-white rounded-lg shadow-sm border border-gray-100 flex items-center gap-3 overflow-hidden">
              <div className="relative w-16 h-14 shrink-0">
                <Image src={img} alt={en} fill className="object-cover" />
              </div>
              <div className="flex items-center gap-2 pr-3">
                <span className="text-lg">{emoji}</span>
                <span className="text-sm text-gray-700">{language === 'en' ? en : zh}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Cards */}
      <div>
        <h2 className="font-bold text-gray-700 mb-4">{language === 'en' ? 'Quick Navigation' : '快速导航'}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { href: '/schedule', emoji: '📅', en: 'Trip Schedule', zh: '行程日程' },
            { href: '/accommodation', emoji: '🏨', en: 'Accommodation', zh: '住宿计划' },
            { href: '/activities', emoji: '🎢', en: 'Activities & Bookings', zh: '活动与预订' },
            { href: '/budget', emoji: '💰', en: 'Budget Tracker', zh: '预算追踪' },
            { href: '/packing', emoji: '🎒', en: 'Packing List', zh: '打包清单' },
          ].map(({ href, emoji, en, zh }) => (
            <Link
              key={href}
              href={href}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all text-center group"
            >
              <div className="text-2xl mb-2">{emoji}</div>
              <div className="text-sm font-medium text-gray-700 group-hover:text-emerald-700">
                {language === 'en' ? en : zh}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Weather note */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-700">
        🌤️ {t.common.weather_note}
      </div>
    </div>
  );
}
