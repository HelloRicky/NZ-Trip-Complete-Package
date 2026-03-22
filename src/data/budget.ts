import type { BudgetItem } from '@/types';

// Actual booked accommodation costs (Rose's family)
export const ACCOMMODATION_COSTS = {
  kaikoura: { ref: 'E343T408457', cost: 198.19, nights: 2, status: 'booked' as const },
  spencerBeach: { ref: 'P59H408458', cost: 71.57, nights: 1, status: 'booked' as const },
  lakesEdge: { ref: '520899', cost: 105.00, nights: 1, status: 'booked' as const },
  twizel: { ref: '70012', cost: 78.51, nights: 1, status: 'booked' as const },
  queenstown: { ref: 'W197N408459', cost: 175.86, nights: 2, status: 'booked' as const },
  omarama: { ref: null, cost: 60, nights: 1, status: 'pending' as const }, // Estimate
  christchurchFinal: { ref: null, cost: 70, nights: 1, status: 'pending' as const }, // Chris only, estimate
};

export const ACCOMMODATION_TOTAL_BOOKED = 198.19 + 71.57 + 105.00 + 78.51 + 175.86; // $629.13
export const ACCOMMODATION_TOTAL_ESTIMATED = ACCOMMODATION_TOTAL_BOOKED + 60; // ~$689.13 (Rose's share)

// Actual campervan cost
export const CAMPERVAN_COSTS = {
  dailyRate: 201.78,
  days: 9,
  vehicleCost: 1816.02,
  airportFee: 12.00,
  creditCardFee: 8.77,
  total: 1836.79,
  paid: 374.37,
  balanceDue: 1462.42,
  fuelEstimate: 300, // ~$300 for the trip
};

export const BUDGET_ITEMS: BudgetItem[] = [
  {
    category: { en: '🏨 Accommodation', zh: '🏨 住宿' },
    roseFamilyNZD: 689, // $629.13 booked + ~$60 Omarama estimate
    chrisFamilyNZD: 759, // Same parks + extra Christchurch night (~$70)
    notes: { en: '7 nights booked ($629.13) + Omarama (~$60). Chris: +1 night CHC (~$70)', zh: '7晚已预订（$629.13）+ 奥马拉马（约$60）。Chris: +1晚基督城（约$70）' },
  },
  {
    category: { en: '🚐 Campervan', zh: '🚐 房车' },
    roseFamilyNZD: 1837, // Actual booking: $1,836.79
    chrisFamilyNZD: 1200, // Chris: JUCY Condo estimate
    notes: { en: 'Rose: Big Kahuna $1,836.79 (booked). Chris: Condo ~$1,200 (estimate)', zh: 'Rose：Big Kahuna $1,836.79（已预订）。Chris：Condo约$1,200（估计）' },
  },
  {
    category: { en: '⛽ Fuel', zh: '⛽ 燃油' },
    roseFamilyNZD: 300,
    chrisFamilyNZD: 320,
    notes: { en: 'Diesel ~$2.20/L. Big Kahuna 70L tank. ~1,500km total driving.', zh: '柴油约$2.20/升。Big Kahuna 70升油箱。总行程约1,500公里。' },
  },
  {
    category: { en: '🎢 Activities', zh: '🎢 活动' },
    roseFamilyNZD: 900,
    chrisFamilyNZD: 1000,
    notes: { en: 'Skydive Mt Cook (~$300/person), Seal Kayak (~$300), Skyline Luge (~$200), Hot Tubs (~$100)', zh: '库克山跳伞（约$300/人）、海豹皮划艇（约$300）、天际滑道（约$200）、温泉浴桶（约$100）' },
  },
  {
    category: { en: '🍽️ Food & Dining', zh: '🍽️ 餐饮' },
    roseFamilyNZD: 1800,
    chrisFamilyNZD: 2000,
    notes: { en: '~$200/day. Self-cater breakfasts, pack lunches, dine out for dinner.', zh: '每天约$200。自炊早餐、自带午餐、外出晚餐。' },
  },
  {
    category: { en: '🛍️ Shopping & Misc', zh: '🛍️ 购物及杂费' },
    roseFamilyNZD: 400,
    chrisFamilyNZD: 400,
    notes: { en: 'Souvenirs, treats, SIM cards, parking, tips', zh: '纪念品、零食、SIM卡、停车费、小费' },
  },
];

// Calculate totals from items
const roseTotal = BUDGET_ITEMS.reduce((sum, item) => sum + item.roseFamilyNZD, 0);
const chrisTotal = BUDGET_ITEMS.reduce((sum, item) => sum + item.chrisFamilyNZD, 0);

export const TOTAL_BUDGET = {
  roseFamilyNZD: roseTotal, // ~$5,626
  chrisFamilyNZD: chrisTotal, // ~$5,379
  roseFamilyAUD: Math.round(roseTotal * 0.9), // ~0.9 NZD/AUD
  chrisFamilyAUD: Math.round(chrisTotal * 0.9),
};

export const ACTIVITY_COSTS = [
  {
    name: { en: 'Seal Kayak Kaikoura', zh: '凯库拉海豹皮划艇' },
    costNZD: 300,
    priority: 'high' as const,
    day: 3,
    status: 'pending' as const,
  },
  {
    name: { en: 'Hooker Valley Track', zh: 'Hooker Valley步道' },
    costNZD: 0,
    priority: 'high' as const,
    day: 5,
    status: 'free' as const,
  },
  {
    name: { en: 'Skydive Mt Cook (Rose & Chris)', zh: '库克山跳伞（Rose & Chris）' },
    costNZD: 598,
    priority: 'high' as const,
    day: 5,
    status: 'pending' as const,
    notes: { en: '$299 × 2 people (10,000ft)', zh: '$299 × 2人（10,000英尺）' },
  },
  {
    name: { en: 'Skyline Gondola + Luge', zh: '天际缆车 + 滑道' },
    costNZD: 200,
    priority: 'high' as const,
    day: 7,
    status: 'pending' as const,
  },
  {
    name: { en: 'Arrowtown Autumn Festival', zh: '箭镇秋季节' },
    costNZD: 0,
    priority: 'medium' as const,
    day: 8,
    status: 'free' as const,
  },
  {
    name: { en: 'Omarama Hot Tubs', zh: '奥马拉马温泉浴桶' },
    costNZD: 350,
    priority: 'high' as const,
    day: 8,
    status: 'pending' as const,
  },
];

export const FOOD_BUDGET = {
  roseFamilyPerDay: { min: 150, max: 250 },
  chrisFamilyPerDay: { min: 150, max: 250 },
  tips: [
    { en: 'Shop at Pak\'nSave (cheapest supermarket)', zh: '在Pak\'nSave购物（最便宜的超市）' },
    { en: 'Self-cater breakfasts in campervan', zh: '在房车里自炊早餐' },
    { en: 'Pack lunches for day trips', zh: '一日游自带午餐' },
    { en: 'Tap water is safe to drink – bring reusable bottles', zh: '自来水可直接饮用 – 带可重复使用的水瓶' },
  ],
};

// Booking status summary
export const BOOKING_STATUS = {
  accommodation: {
    booked: 5, // Nights 1-7 (Kaikoura 2, Spencer 1, Tekapo 1, Twizel 1, Queenstown 2)
    pending: 2, // Omarama, Christchurch final
    totalBooked: 629.13,
  },
  campervan: {
    status: 'booked' as const,
    total: 1836.79,
    paid: 374.37,
    balanceDue: 1462.42,
  },
  flights: {
    status: 'booked' as const,
    ref: '750492842',
  },
};
