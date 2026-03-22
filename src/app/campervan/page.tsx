'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { IMAGES } from '@/data/images';

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-mono font-bold rounded-lg transition-colors"
      title="Click to copy"
    >
      {label}
      <span className="text-emerald-600">
        {copied ? '✓' : '📋'}
      </span>
    </button>
  );
}

const CAMPERVAN_DATA = {
  bookingRef: 'CHC-1409599',
  vehicleName: 'Big Kahuna',
  vehicleType: '6 Berth Campervan',
  
  // Trip Info
  pickup: {
    date: '11 Apr 2026',
    time: '1:00 PM',
    location: 'Christchurch Airport',
  },
  dropoff: {
    date: '19 Apr 2026',
    time: '4:00 PM',
    location: 'Christchurch Airport',
  },
  
  // Pricing
  dailyRate: 201.78,
  days: 9,
  vehicleCost: 1816.02,
  airportFee: 12.00,
  creditCardFee: 8.77,
  total: 1836.79,
  paid: 374.37,
  balanceDue: 1462.42,
  paymentDate: '05 Mar 2026',
  
  // Vehicle Specs
  specs: {
    category: 'Campervan',
    make: 'Mercedes / Iveco',
    year: '2017-2022',
    fitOut: 'Custom interior 2017 & 2018',
    transmission: 'Automatic',
    fuel: 'Diesel',
    fuelTank: '70 Litres',
    engineSize: '3 Litres',
    sleeps: 6,
    seats: 6,
    length: '7.9m',
    width: '2.3m',
    height: '3.6m',
    interiorHeight: '2.0m',
  },
  
  // Beds
  beds: [
    { name: 'Double bed #1', size: '2.1 x 1.4m' },
    { name: 'Double bed #2', size: '2.1 x 1.4m' },
    { name: 'Double bed #3', size: '1.9 x 1.2m' },
  ],
  
  // Features
  features: [
    { en: 'Fully self-contained', zh: '完全自给自足' },
    { en: 'Bathroom with shower', zh: '带淋浴的卫生间' },
    { en: 'Kitchen facilities', zh: '厨房设施' },
    { en: '3 double beds', zh: '3张双人床' },
    { en: 'Automatic transmission', zh: '自动变速箱' },
    { en: 'Diesel engine', zh: '柴油发动机' },
  ],
  
  // Links
  manualUrl: 'https://helphub.jucy.com/en/articles/9656119-the-chill-d-6-by-jucy-overview',
  helpHubUrl: 'https://helphub.jucy.com',
};

export default function CampervanPage() {
  const { language } = useLanguage();
  const data = CAMPERVAN_DATA;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          {language === 'en' ? 'Campervan Details' : '房车详情'}
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          {language === 'en' ? 'JUCY Big Kahuna 6-Berth Motorhome' : 'JUCY Big Kahuna 6铺位房车'}
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
        <Image
          src={IMAGES.campervan}
          alt="JUCY Big Kahuna Campervan"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-2xl font-bold">{data.vehicleType}</h2>
          <p className="text-emerald-300 mt-1">{data.vehicleName}</p>
        </div>
      </div>

      {/* Booking Summary Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-sm text-gray-500 mb-1">
              {language === 'en' ? 'Booking Number' : '预订编号'}
            </h3>
            <CopyButton text={data.bookingRef} label={`#${data.bookingRef}`} />
          </div>
          <a
            href={data.manualUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            📖 {language === 'en' ? 'Vehicle Manual' : '车辆手册'}
          </a>
        </div>

        {/* Trip Info */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pickup */}
          <div className="bg-emerald-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold mb-3">
              <span className="text-xl">🚗</span>
              {language === 'en' ? 'Pick Up' : '取车'}
            </div>
            <div className="space-y-1 text-sm">
              <p className="font-bold text-gray-800">{data.pickup.date}</p>
              <p className="text-gray-600">{data.pickup.time}</p>
              <p className="text-gray-600">{data.pickup.location}</p>
            </div>
          </div>
          
          {/* Dropoff */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-blue-700 font-semibold mb-3">
              <span className="text-xl">🏁</span>
              {language === 'en' ? 'Drop Off' : '还车'}
            </div>
            <div className="space-y-1 text-sm">
              <p className="font-bold text-gray-800">{data.dropoff.date}</p>
              <p className="text-gray-600">{data.dropoff.time}</p>
              <p className="text-gray-600">{data.dropoff.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {language === 'en' ? 'Pricing Breakdown' : '费用明细'}
        </h3>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              {data.vehicleName} (${data.dailyRate}/day × {data.days} days)
            </span>
            <span className="text-gray-800 font-medium">${data.vehicleCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              {language === 'en' ? 'Risk Taker - $5000 Excess/$5000 Bond' : '风险承担者 - $5000超额/$5000押金'}
            </span>
            <span className="text-gray-800 font-medium">$0.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              {language === 'en' ? 'Christchurch Airport Premium Location Fee' : '基督城机场优质位置费'}
            </span>
            <span className="text-gray-800 font-medium">${data.airportFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              {language === 'en' ? 'Credit Card Fee' : '信用卡手续费'}
            </span>
            <span className="text-gray-800 font-medium">${data.creditCardFee.toFixed(2)}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-between font-semibold">
              <span className="text-gray-800">{language === 'en' ? 'Total' : '总计'}</span>
              <span className="text-gray-800">${data.total.toFixed(2)} NZD</span>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-3 mt-4">
            <div className="flex justify-between text-sm text-green-700">
              <span>✅ {language === 'en' ? 'Paid' : '已付'} ({data.paymentDate})</span>
              <span className="font-medium">${data.paid.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="bg-amber-50 rounded-lg p-3">
            <div className="flex justify-between text-sm text-amber-700 font-semibold">
              <span>⚠️ {language === 'en' ? 'Balance Due at Pickup' : '取车时应付余额'}</span>
              <span>${data.balanceDue.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Specs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {language === 'en' ? 'Vehicle Specifications' : '车辆规格'}
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-3">
            {[
              [language === 'en' ? 'Category' : '类别', data.specs.category],
              [language === 'en' ? 'Make' : '品牌', data.specs.make],
              [language === 'en' ? 'Year' : '年份', data.specs.year],
              [language === 'en' ? 'Transmission' : '变速箱', data.specs.transmission],
              [language === 'en' ? 'Fuel' : '燃料', data.specs.fuel],
              [language === 'en' ? 'Fuel Tank' : '油箱容量', data.specs.fuelTank],
              [language === 'en' ? 'Engine Size' : '排量', data.specs.engineSize],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-gray-500">{label}</span>
                <span className="text-gray-800 font-medium">{value}</span>
              </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="space-y-3">
            {[
              [language === 'en' ? 'Sleeps' : '睡眠人数', data.specs.sleeps],
              [language === 'en' ? 'Seats' : '座位数', data.specs.seats],
              [language === 'en' ? 'Length' : '长度', data.specs.length],
              [language === 'en' ? 'Width' : '宽度', data.specs.width],
              [language === 'en' ? 'Height' : '高度', data.specs.height],
              [language === 'en' ? 'Interior Height' : '内部高度', data.specs.interiorHeight],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-gray-500">{label}</span>
                <span className="text-gray-800 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beds */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          🛏️ {language === 'en' ? 'Sleeping Arrangements' : '睡眠安排'}
        </h3>
        
        <div className="grid sm:grid-cols-3 gap-4">
          {data.beds.map((bed, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🛏️</div>
              <div className="font-medium text-gray-800">{bed.name}</div>
              <div className="text-sm text-gray-500">{bed.size}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          ✨ {language === 'en' ? 'Features' : '特色'}
        </h3>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {data.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className="text-emerald-500">✓</span>
              <span className="text-gray-700">{language === 'en' ? feature.en : feature.zh}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-4">
          ⚠️ {language === 'en' ? 'Important Notes' : '重要提示'}
        </h3>
        
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>{language === 'en' ? 'Height 3.6m — check for overhead obstacles at parks and drive-throughs' : '高度3.6米 — 注意营地和自驾通道的上方障碍物'}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>{language === 'en' ? 'Length 7.9m — call holiday parks in advance to confirm site suitability' : '长度7.9米 — 提前致电假日公园确认营位是否合适'}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>{language === 'en' ? 'Fully self-contained — can freedom camp in designated areas' : '完全自给自足 — 可以在指定区域自由露营'}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>{language === 'en' ? 'Use dump stations when leaving each holiday park' : '离开每个假日公园时使用污水排放站'}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>{language === 'en' ? 'Balance of $1,462.42 NZD due at pickup' : '取车时需支付余额 $1,462.42 NZD'}</span>
          </li>
        </ul>
        
        <div className="mt-4 pt-4 border-t border-amber-200">
          <a
            href={data.helpHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 hover:text-amber-900 text-sm font-medium underline"
          >
            📚 {language === 'en' ? 'JUCY Help Hub — FAQs & Support' : 'JUCY帮助中心 — 常见问题与支持'}
          </a>
        </div>
      </div>
    </div>
  );
}
