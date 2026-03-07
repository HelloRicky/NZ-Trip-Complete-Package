export interface BilingualText {
  en: string;
  zh: string;
}

export interface Location {
  id: string;
  name: BilingualText;
  coords: [number, number];
  type: 'base' | 'daytrip' | 'activity';
  icon: string;
  description: BilingualText;
  days?: number[];
}

export interface RouteSegment {
  coords: [number, number][];
  color: string;
  day: BilingualText;
}

export type Priority = 'high' | 'medium' | 'low' | 'optional' | 'free';
export type BookingStatus = 'booked' | 'pending' | 'completed' | 'not-needed';

export interface Activity {
  id: string;
  name: BilingualText;
  day: number;
  time?: string;
  duration?: BilingualText;
  priority: Priority;
  status: BookingStatus;
  costAdult?: number;
  costChild?: number;
  costTotal?: number;
  currency: string;
  description: BilingualText;
  notes?: BilingualText;
  website?: string;
  phone?: string;
  address?: BilingualText;
  bookingRef?: string;
  participants?: BilingualText;
  includes?: BilingualText[];
}

export interface ItineraryActivity {
  time?: string;
  emoji?: string;
  name: BilingualText;
  type?: 'free' | 'optional' | 'must-book' | 'book-ahead' | 'normal';
  cost?: BilingualText;
  notes?: BilingualText;
}

export interface ItineraryDay {
  day: number;
  date: string;
  dateLabel: BilingualText;
  title: BilingualText;
  subtitle?: BilingualText;
  base: BilingualText;
  sections: {
    title: BilingualText;
    activities: ItineraryActivity[];
  }[];
  notes?: BilingualText;
}

export interface AccommodationOption {
  name: string;
  stars: number;
  address: BilingualText;
  whyChoose: BilingualText;
  roomType: BilingualText;
  amenities: BilingualText[];
  distanceToCenter: BilingualText;
}

export interface AccommodationBase {
  id: string;
  name: BilingualText;
  location: BilingualText;
  nights: number;
  dates: BilingualText;
  checkIn: string;
  checkOut: string;
  purpose: BilingualText;
  options: AccommodationOption[];
  notes: BilingualText[];
}

export interface BudgetItem {
  category: BilingualText;
  roseFamilyNZD: number;
  chrisFamilyNZD: number;
  notes?: BilingualText;
}

export interface PackingItem {
  id: string;
  name: BilingualText;
  essential?: boolean;
  notes?: BilingualText;
}

export interface PackingCategory {
  id: string;
  name: BilingualText;
  emoji: string;
  items: PackingItem[];
}

export interface Traveler {
  name: string;
  age: number;
  role: BilingualText;
  family: 'rose' | 'chris';
}
