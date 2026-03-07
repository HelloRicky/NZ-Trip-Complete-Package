'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { ACCOMMODATION_BASES } from '@/data/accommodation';
import { CAMPERVAN } from '@/data/trip';

function StarRating({ stars }: { stars: number }) {
  if (stars === 0) return <span className="text-xs text-gray-400">Holiday Home / Airbnb</span>;
  return <span className="text-amber-400">{'⭐'.repeat(stars)}</span>;
}

export default function AccommodationPage() {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">{t.accommodation.title}</h1>
        <p className="text-gray-500 text-sm mt-1">{t.accommodation.subtitle}</p>
      </div>

      {/* Strategy overview */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {ACCOMMODATION_BASES.map((base) => (
          <div key={base.id} className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
            <div className="font-bold text-emerald-700 text-sm">{language === 'en' ? base.name.en : base.name.zh}</div>
            <div className="text-xs text-emerald-600 mt-1">{language === 'en' ? base.dates.en : base.dates.zh}</div>
            <div className="text-lg font-bold text-emerald-800 mt-2">{base.nights} {language === 'en' ? 'nights' : '晚'}</div>
          </div>
        ))}
      </div>

      {/* Each base */}
      <div className="space-y-8">
        {ACCOMMODATION_BASES.map((base) => (
          <div key={base.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-emerald-600 px-6 py-4 text-white">
              <h2 className="text-lg font-bold">{language === 'en' ? base.name.en : base.name.zh}</h2>
              <div className="text-emerald-100 text-sm mt-1">
                {language === 'en' ? base.dates.en : base.dates.zh} · {base.nights} {language === 'en' ? 'nights' : '晚'}
              </div>
              <div className="text-emerald-200 text-xs mt-1">{language === 'en' ? base.purpose.en : base.purpose.zh}</div>
            </div>

            <div className="p-6 space-y-5">
              {/* Check-in/out */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs">{t.common.check_in}</span>
                  <p className="text-gray-700 font-medium text-xs mt-0.5">{base.checkIn}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-xs">{t.common.check_out}</span>
                  <p className="text-gray-700 font-medium text-xs mt-0.5">{base.checkOut}</p>
                </div>
              </div>

              {/* Options */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">{t.accommodation.recommended_options}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {base.options.map((opt) => (
                    <div key={opt.name} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <span className="font-medium text-sm text-gray-800">{opt.name}</span>
                      </div>
                      <StarRating stars={opt.stars} />
                      <p className="text-xs text-gray-500 mt-1">{language === 'en' ? opt.address.en : opt.address.zh}</p>
                      <p className="text-xs text-emerald-700 mt-1">{language === 'en' ? opt.whyChoose.en : opt.whyChoose.zh}</p>
                      <p className="text-xs text-gray-400 mt-1">{language === 'en' ? opt.roomType.en : opt.roomType.zh}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {opt.amenities.slice(0, 3).map((a, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                            {language === 'en' ? a.en : a.zh}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking notes */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">{t.accommodation.booking_notes}</h3>
                <ul className="space-y-1">
                  {base.notes.map((note, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="text-gray-300 shrink-0 mt-0.5">•</span>
                      {language === 'en' ? note.en : note.zh}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Campervan section */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-blue-600 px-6 py-4 text-white">
          <h2 className="text-lg font-bold">{t.accommodation.vehicle_rental}</h2>
          <div className="text-blue-100 text-sm mt-1">{t.accommodation.vehicle_booked}</div>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Rose's campervan */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-3">
                {language === 'en' ? "Rose's Family – JUCY Big Kahuna" : "Rose一家 – JUCY Big Kahuna"}
              </h3>
              <div className="space-y-1 text-sm">
                {[
                  [language === 'en' ? 'Booking Ref' : '预订号', CAMPERVAN.bookingRef],
                  [language === 'en' ? 'Pickup' : '取车', CAMPERVAN.pickup],
                  [language === 'en' ? 'Dropoff' : '还车', CAMPERVAN.dropoff],
                  [language === 'en' ? 'Total Cost' : '总费用', `NZD $${CAMPERVAN.totalCostNZD.toLocaleString()}`],
                  [t.accommodation.deposit_paid, `NZD $${CAMPERVAN.depositPaidNZD}`],
                  [t.accommodation.balance_due, `NZD $${CAMPERVAN.balanceDueNZD.toLocaleString()}`],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-2">
                    <span className="text-gray-400">{label}</span>
                    <span className="text-gray-700 font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="text-xs text-gray-500">{CAMPERVAN.specs.length} · {CAMPERVAN.specs.beds} · {CAMPERVAN.fuel}</div>
              </div>
            </div>
            {/* Chris's campervan */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-3">
                {language === 'en' ? "Chris's Family – JUCY Condo" : "Chris一家 – JUCY Condo"}
              </h3>
              <div className="space-y-1 text-sm">
                {[
                  [language === 'en' ? 'Pickup' : '取车', language === 'en' ? 'Christchurch Airport, April 11' : '基督城机场，4月11日'],
                  [language === 'en' ? 'Dropoff' : '还车', language === 'en' ? 'Christchurch Airport, April 20' : '基督城机场，4月20日'],
                  [language === 'en' ? 'Est. Cost' : '估计费用', 'NZD ~$1,199'],
                  [language === 'en' ? 'Daily Rate' : '日费率', 'AUD ~$120/day'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-2">
                    <span className="text-gray-400">{label}</span>
                    <span className="text-gray-700 font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="text-xs text-amber-600">
                  {language === 'en' ? '⚠️ Not yet booked' : '⚠️ 尚未预订'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
