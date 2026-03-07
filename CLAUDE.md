# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

This is an Obsidian vault containing travel planning documents for a New Zealand South Island family trip (April 11-20, 2026). It is **not a software project** — there are no build systems, tests, or code to run.

## Repository Structure

```
/
├── README.md                    # Main entry point with bilingual overview
├── English/                     # English docs for Rose's family (4 people)
│   ├── Trip-Itinerary.md        # THE primary document — day-by-day schedule
│   ├── Accommodation.md         # 3-base strategy: CHC → QTN → CHC
│   ├── Activities-Bookings.md   # Booking tracker with contact info
│   ├── Budget-Tracker.md        # Cost breakdown by family
│   ├── Packing-List.md
│   └── Travelers.md             # Passport/traveler details
├── Chinese/                     # Chinese translations for Chris's family (3 people)
│   └── [mirrors English structure in Chinese]
├── Maps/
│   ├── trip-map-offline.html    # Self-contained offline map (English)
│   ├── trip-map-offline-chinese.html  # Self-contained offline map (Chinese)
│   ├── trip-map.html            # Online version (requires internet)
│   └── trip-map-chinese.html
└── Picture/                     # Flight and campervan booking confirmation images
```

## Key Trip Facts

- **Travelers:** 7 people — Rose's family (Rose, Ricky, Johnny age 7, Jasmine age 5) + Chris's family (Chris, Yuyu, Jerry age 7)
- **Campervan:** JUCY Big Kahuna 6-berth, booking #CHC-140959, pickup/dropoff at Christchurch Airport
- **Flights:** Emirates #750492842 — EK412 in (Apr 11), EK413 out Rose's family (Apr 19), Chris's family departs Apr 20
- **3 accommodation bases:** Christchurch (Apr 11-13), Queenstown (Apr 14-16), Christchurch (Apr 17-19/20)
- **Currency:** NZD; Rose's family budget ~NZD $5,860, Chris's family ~NZD $6,480 (excluding flights)

## Document Conventions

- English docs use Obsidian wiki-links (`[[Travelers]]`, `[[Itinerary]]`) that resolve within the vault
- Booking urgency is color-coded: 🔴 must book now, 🟡 book soon, 🟢 flexible/walk-in
- All map HTML files are fully self-contained and work offline — do not add external dependencies
- Chinese folder mirrors the English folder structure; keep both in sync when editing content

## Editing Guidelines

- The primary source of truth for the itinerary is `English/Trip-Itinerary.md`; `Chinese/行程安排.md` should mirror it
- When updating activities or costs, also update `English/Budget-Tracker.md` and its Chinese counterpart
- The offline HTML maps (`Maps/trip-map-offline.html` and `trip-map-offline-chinese.html`) embed all map data inline — edits to destinations or dates require updating both HTML files manually
