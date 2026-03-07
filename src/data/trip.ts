import type { Traveler } from '@/types';

export const TRIP_DATES = {
  start: 'April 11, 2026',
  end: 'April 20, 2026',
  roseEnd: 'April 19, 2026',
  chrisEnd: 'April 20, 2026',
};

export const FLIGHTS = {
  outbound: {
    number: 'EK412',
    airline: 'Emirates',
    departure: 'Sydney 7:50 AM',
    arrival: 'Christchurch 12:55 PM (NZ time)',
    duration: '3h 5m',
    bookingRef: '750492842',
  },
  returnRose: {
    number: 'EK413',
    airline: 'Emirates',
    departure: 'Christchurch 5:45 PM',
    arrival: 'Sydney 7:05 PM',
    duration: '3h 20m',
    bookingRef: '750492842',
    date: 'April 19',
  },
  returnChris: {
    departure: 'Christchurch 7:00 PM',
    arrival: 'Sydney ~8:00 PM',
    date: 'April 20',
  },
};

export const CAMPERVAN = {
  company: 'JUCY Rentals',
  model: 'Big Kahuna',
  berths: 6,
  bookingRef: '#CHC-140959',
  customerName: 'Fu Zheng',
  pickup: 'Christchurch Airport, April 11 1:00 PM',
  dropoff: 'Christchurch Airport, April 19 4:00 PM',
  totalCostNZD: 1836.79,
  depositPaidNZD: 374.37,
  balanceDueNZD: 1462.42,
  fuel: 'Diesel',
  specs: {
    length: '7.9m',
    width: '2.3m',
    height: '3.4m',
    beds: '3 double beds',
    transmission: 'Automatic',
  },
};

export const TRAVELERS: Traveler[] = [
  { name: 'Rose', age: 34, role: { en: 'Adult', zh: '成人' }, family: 'rose' },
  { name: 'Ricky', age: 34, role: { en: 'Adult', zh: '成人' }, family: 'rose' },
  { name: 'Johnny', age: 7, role: { en: 'Child', zh: '儿童' }, family: 'rose' },
  { name: 'Jasmine', age: 5, role: { en: 'Child', zh: '儿童' }, family: 'rose' },
  { name: 'Chris', age: 42, role: { en: 'Adult', zh: '成人' }, family: 'chris' },
  { name: 'Yuyu', age: 40, role: { en: 'Adult', zh: '成人' }, family: 'chris' },
  { name: 'Jerry', age: 7, role: { en: 'Child', zh: '儿童' }, family: 'chris' },
];

export const WEATHER_NOTES = {
  season: { en: 'Autumn (April)', zh: '秋季（4月）' },
  temp: { en: '10–18°C (50–64°F)', zh: '10–18°C（50–64°F）' },
  conditions: {
    en: 'Mild days, cool evenings, possible rain. Layering essential!',
    zh: '白天温和，夜晚凉爽，可能下雨。分层穿衣必不可少！',
  },
  sunscreen: {
    en: 'Strong UV — bring SPF50+ sunscreen!',
    zh: '紫外线强烈——请携带SPF50+防晒霜！',
  },
};

export const EMERGENCY_CONTACTS = {
  emergency: '111',
  healthline: '0800 611 116',
  police: '105',
};

export const BUDGET_SUMMARY = {
  roseFamilyNZD: 5860,
  chrisFamilyNZD: 6480,
  roseFamilyAUD: 5270,
  chrisFamilyAUD: 5832,
  note: {
    en: 'Excluding flights',
    zh: '不含机票',
  },
};
