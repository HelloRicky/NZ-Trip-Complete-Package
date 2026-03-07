# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

A **Next.js 15 web application** for planning a New Zealand South Island family trip (April 11-20, 2026).

## Project Location

All app code is in `nz-trip/`:

```
nz-trip/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Home/overview
│   │   ├── itinerary/page.tsx  # Day-by-day schedule (collapsible)
│   │   ├── map/page.tsx        # Interactive Leaflet map
│   │   ├── accommodation/page.tsx
│   │   ├── activities/page.tsx # Bookings tracker with filters
│   │   ├── budget/page.tsx     # Cost breakdown
│   │   └── packing/page.tsx    # Interactive checklist (localStorage)
│   ├── components/
│   │   ├── layout/Navbar.tsx   # Responsive navbar with language toggle
│   │   ├── map/TripMap.tsx     # Leaflet map (dynamic import, ssr:false)
│   │   └── shared/             # PriorityBadge, StatusBadge, InfoCard
│   ├── data/                   # All structured trip data (TypeScript)
│   │   ├── trip.ts             # Constants: flights, campervan, travelers
│   │   ├── locations.ts        # Map coords & route segments
│   │   ├── itinerary.ts        # 10-day schedule with bilingual text
│   │   ├── activities.ts       # Booking details
│   │   ├── accommodation.ts    # 3-base strategy
│   │   ├── budget.ts           # Cost breakdown
│   │   └── packing.ts          # Packing items
│   ├── i18n/
│   │   ├── LanguageContext.tsx # React context + localStorage persistence
│   │   └── translations/       # en.ts, zh.ts (UI strings)
│   └── types/index.ts          # All TypeScript interfaces
└── public/images/              # Booking confirmation images (JPG)
```

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- **react-leaflet** for the interactive map (loaded via `next/dynamic` with `ssr: false`)
- **clsx** for conditional classes

## Key Patterns

### Bilingual Text
All trip data uses `{ en: string; zh: string }` objects. Access with `language === 'en' ? item.name.en : item.name.zh`.

### Language Toggle
`useLanguage()` from `@/i18n/LanguageContext` provides `{ language, t, toggleLanguage }`. Language persists to `localStorage`.

### Map
The Leaflet map is imported dynamically with `ssr: false`. Never render `TripMap.tsx` on the server.

### Packing Checkboxes
Stored in `localStorage` under key `nz-trip-packing` as a JSON array of checked item IDs.

## Key Trip Facts

- **Travelers:** 7 people — Rose's family (Rose, Ricky, Johnny age 7, Jasmine age 5) + Chris's family (Chris, Yuyu, Jerry age 7)
- **Campervan:** JUCY Big Kahuna 6-berth, booking #CHC-140959, Christchurch Airport
- **Flights:** Emirates #750492842 — EK412 in (Apr 11), EK413 out Rose's family (Apr 19), Chris's family Apr 20
- **3 accommodation bases:** Christchurch (Apr 11-13), Queenstown (Apr 14-16), Christchurch (Apr 17-19/20)
- **Currency:** NZD; Rose's family budget ~NZD $5,860, Chris's family ~NZD $6,480 (excluding flights)

## Development Commands

```bash
cd nz-trip
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build + TypeScript check
```

## Editing Guidelines

- All trip data lives in `src/data/`. Update there to change content.
- UI strings (nav labels, page titles) are in `src/i18n/translations/en.ts` and `zh.ts`.
- Never add external dependencies to the Leaflet map component (offline-friendliness matters).

# currentDate
Today's date is 2026-03-07.
