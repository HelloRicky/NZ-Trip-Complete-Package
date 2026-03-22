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
  type: '6 Berth Campervan',
  berths: 6,
  bookingRef: 'CHC-1409599',
  customerName: 'Fu Zheng',
  pickup: 'Christchurch Airport, April 11 1:00 PM',
  dropoff: 'Christchurch Airport, April 19 4:00 PM',
  dailyRate: 201.78,
  days: 9,
  vehicleCost: 1816.02,
  airportFee: 12.00,
  creditCardFee: 8.77,
  totalCostNZD: 1836.79,
  depositPaidNZD: 374.37,
  balanceDueNZD: 1462.42,
  paymentDate: '05 Mar 2026',
  fuel: 'Diesel',
  fuelTank: '70 Litres',
  specs: {
    make: 'Mercedes / Iveco',
    year: '2017-2022',
    length: '7.9m',
    width: '2.3m',
    height: '3.6m',
    interiorHeight: '2.0m',
    beds: '3 double beds',
    transmission: 'Automatic',
    engineSize: '3 Litres',
    seats: 6,
    sleeps: 6,
  },
  beds: [
    { name: 'Double bed #1', size: '2.1 x 1.4m' },
    { name: 'Double bed #2', size: '2.1 x 1.4m' },
    { name: 'Double bed #3', size: '1.9 x 1.2m' },
  ],
  manualUrl: 'https://helphub.jucy.com/en/articles/9656119-the-chill-d-6-by-jucy-overview',
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
  roseFamilyNZD: 5626,
  chrisFamilyNZD: 5379,
  roseFamilyAUD: 5063,
  chrisFamilyAUD: 4841,
  note: {
    en: 'Excluding flights',
    zh: '不含机票',
  },
  // Actual booked costs
  accommodationBooked: 629.13,
  campervanTotal: 1836.79,
  campervanPaid: 374.37,
  campervanBalanceDue: 1462.42,
};
