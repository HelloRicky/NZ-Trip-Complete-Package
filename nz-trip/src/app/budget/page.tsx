'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { BUDGET_ITEMS, TOTAL_BUDGET, ACTIVITY_COSTS, FOOD_BUDGET } from '@/data/budget';
import PriorityBadge from '@/components/shared/PriorityBadge';

export default function BudgetPage() {
  const { t, language } = useLanguage();

  const totalRose = BUDGET_ITEMS.reduce((s, i) => s + i.roseFamilyNZD, 0);
  const totalChris = BUDGET_ITEMS.reduce((s, i) => s + i.chrisFamilyNZD, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{t.budget.title}</h1>
        <p className="text-gray-500 text-sm mt-1">{t.budget.subtitle}</p>
      </div>

      {/* Summary cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          {
            title: t.budget.rose_family,
            totalNZD: TOTAL_BUDGET.roseFamilyNZD,
            totalAUD: TOTAL_BUDGET.roseFamilyAUD,
            color: 'from-emerald-500 to-teal-600',
          },
          {
            title: t.budget.chris_family,
            totalNZD: TOTAL_BUDGET.chrisFamilyNZD,
            totalAUD: TOTAL_BUDGET.chrisFamilyAUD,
            color: 'from-blue-500 to-indigo-600',
          },
        ].map(({ title, totalNZD, totalAUD, color }) => (
          <div key={title} className={`bg-gradient-to-br ${color} rounded-xl p-5 text-white shadow-md`}>
            <h3 className="font-semibold text-sm opacity-90">{title}</h3>
            <div className="text-3xl font-bold mt-2">NZD ${totalNZD.toLocaleString()}</div>
            <div className="text-sm opacity-75 mt-1">≈ AUD ${totalAUD.toLocaleString()}</div>
            <div className="text-xs opacity-60 mt-1">{t.budget.excluding_flights}</div>
          </div>
        ))}
      </div>

      {/* Category breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
          <h2 className="font-semibold text-gray-700">{language === 'en' ? 'Cost Breakdown by Category' : '按类别费用分解'}</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {BUDGET_ITEMS.map((item) => {
            const rosePercent = (item.roseFamilyNZD / totalRose) * 100;
            return (
              <div key={item.category.en} className="px-5 py-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="font-medium text-gray-700 text-sm">
                      {language === 'en' ? item.category.en : item.category.zh}
                    </div>
                    {item.notes && (
                      <div className="text-xs text-gray-400 mt-0.5">
                        {language === 'en' ? item.notes.en : item.notes.zh}
                      </div>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-semibold text-emerald-700">
                      NZD ${item.roseFamilyNZD.toLocaleString()}
                    </div>
                    <div className="text-xs text-blue-600">
                      NZD ${item.chrisFamilyNZD.toLocaleString()}
                    </div>
                  </div>
                </div>
                {/* Bar chart */}
                <div className="flex gap-1 h-1.5 rounded-full overflow-hidden bg-gray-100">
                  <div
                    className="bg-emerald-500 rounded-full"
                    style={{ width: `${rosePercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-300 mt-0.5">
                  <span className="text-emerald-400">{language === 'en' ? "Rose's" : 'Rose一家'}</span>
                  <span className="text-blue-400">{language === 'en' ? "Chris's" : 'Chris一家'}</span>
                </div>
              </div>
            );
          })}
          {/* Totals row */}
          <div className="px-5 py-4 bg-gray-50">
            <div className="flex justify-between">
              <span className="font-bold text-gray-700">{t.budget.total_estimate}</span>
              <div className="text-right">
                <div className="font-bold text-emerald-700">NZD ${totalRose.toLocaleString()}</div>
                <div className="font-bold text-blue-600">NZD ${totalChris.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity costs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
          <h2 className="font-semibold text-gray-700">{t.budget.activity_costs}</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {ACTIVITY_COSTS.map((act) => (
            <div key={act.name.en} className="px-5 py-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <PriorityBadge priority={act.priority} lang={language} small />
                <span className="text-sm text-gray-700">
                  {language === 'en' ? act.name.en : act.name.zh}
                </span>
                <span className="text-xs text-gray-400">
                  ({language === 'en' ? `Day ${act.day}` : `第${act.day}天`})
                </span>
              </div>
              <span className="text-sm font-semibold text-emerald-700 shrink-0">
                NZD ~${act.costNZD.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Food saving tips */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="font-semibold text-amber-800 mb-3">💡 {t.budget.food_tips}</h3>
        <ul className="space-y-1.5">
          {FOOD_BUDGET.tips.map((tip, i) => (
            <li key={i} className="text-sm text-amber-700 flex items-start gap-2">
              <span className="shrink-0">•</span>
              {language === 'en' ? tip.en : tip.zh}
            </li>
          ))}
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          {[
            {
              label: language === 'en' ? "Rose's family / day" : 'Rose一家 / 天',
              value: `NZD $${FOOD_BUDGET.roseFamilyPerDay.min}–${FOOD_BUDGET.roseFamilyPerDay.max}`,
            },
            {
              label: language === 'en' ? "Chris's family / day" : 'Chris一家 / 天',
              value: `NZD $${FOOD_BUDGET.chrisFamilyPerDay.min}–${FOOD_BUDGET.chrisFamilyPerDay.max}`,
            },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-lg p-3">
              <div className="text-xs text-gray-400">{label}</div>
              <div className="font-semibold text-gray-700">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
