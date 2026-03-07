import type { BudgetItem } from '@/types';

export const BUDGET_ITEMS: BudgetItem[] = [
  {
    category: { en: '🏨 Accommodation', zh: '🏨 住宿' },
    roseFamilyNZD: 1560,
    chrisFamilyNZD: 1740,
    notes: { en: 'Base 1 (3n) + Base 2 (3n) + Base 3 (2n/3n)', zh: '基地1（3晚）+ 基地2（3晚）+ 基地3（2晚/3晚）' },
  },
  {
    category: { en: '🚐 Campervan + Fuel', zh: '🚐 房车 + 燃油' },
    roseFamilyNZD: 2076,
    chrisFamilyNZD: 1519,
    notes: { en: 'Rose: Big Kahuna NZD $1,837 + fuel ~$300. Chris: Condo ~$1,199 + fuel ~$320.', zh: 'Rose：Big Kahuna $1,837纽元 + 燃油约$300。Chris：Condo约$1,199 + 燃油约$320。' },
  },
  {
    category: { en: '🎢 Activities', zh: '🎢 活动' },
    roseFamilyNZD: 800,
    chrisFamilyNZD: 900,
    notes: { en: 'EcoZip, Seal Kayak, Skyline Gondola+Luge, Puzzling World, etc.', zh: 'EcoZip、海豹皮划艇、天际缆车+滑道、迷惑世界等。' },
  },
  {
    category: { en: '🍽️ Food & Dining', zh: '🍽️ 餐饮' },
    roseFamilyNZD: 2300,
    chrisFamilyNZD: 2590,
    notes: { en: '~$250-290/day per family. Cook some meals in campervan to save.', zh: '每家庭每天约$250-290。在房车中自炊节省费用。' },
  },
  {
    category: { en: '🛍️ Shopping & Misc', zh: '🛍️ 购物及杂费' },
    roseFamilyNZD: 500,
    chrisFamilyNZD: 500,
    notes: { en: 'Souvenirs, gifts, kids treats, SIM cards, parking', zh: '纪念品、礼物、孩子零食、SIM卡、停车费' },
  },
];

export const TOTAL_BUDGET = {
  roseFamilyNZD: 5860,
  chrisFamilyNZD: 6480,
  roseFamilyAUD: 5270,
  chrisFamilyAUD: 5832,
};

export const ACTIVITY_COSTS = [
  {
    name: { en: 'EcoZip Adventures Kaikoura', zh: 'EcoZip探险凯库拉' },
    costNZD: 894,
    priority: 'high' as const,
    day: 2,
  },
  {
    name: { en: 'Seal Kayak Kaikoura', zh: '凯库拉海豹皮划艇' },
    costNZD: 460,
    priority: 'high' as const,
    day: 2,
  },
  {
    name: { en: 'Skyline Gondola + Luge', zh: '天际缆车 + 滑道' },
    costNZD: 463,
    priority: 'medium' as const,
    day: 5,
  },
  {
    name: { en: 'Skydiving NZONE (per adult)', zh: 'NZONE跳伞（每位成人）' },
    costNZD: 489,
    priority: 'medium' as const,
    day: 5,
  },
  {
    name: { en: 'Puzzling World Wanaka', zh: '迷惑世界瓦纳卡' },
    costNZD: 154,
    priority: 'low' as const,
    day: 7,
  },
  {
    name: { en: 'Akaroa Harbour Cruise (Chris only)', zh: '阿卡罗阿港湾游览（仅Chris一家）' },
    costNZD: 205,
    priority: 'medium' as const,
    day: 10,
  },
];

export const FOOD_BUDGET = {
  roseFamilyPerDay: { min: 200, max: 300 },
  chrisFamilyPerDay: { min: 150, max: 225 },
  tips: [
    { en: 'Shop at Pak\'nSave (cheapest supermarket)', zh: '在Pak\'nSave购物（最便宜的超市）' },
    { en: 'Self-cater breakfasts in campervan', zh: '在房车里自炊早餐' },
    { en: 'Pack lunches for day trips', zh: '一日游自带午餐' },
    { en: 'Tap water is safe to drink – bring reusable bottles', zh: '自来水可直接饮用 – 带可重复使用的水瓶' },
  ],
};
