// Centralized image path mappings for the NZ Trip app

export const IMAGES = {
  hero: '/images/hero-nz-south-island.jpg',
  destinations: {
    christchurch: '/images/christchurch-city.jpg',
    kaikoura: '/images/kaikoura-coast.jpg',
    tekapo: '/images/lake-tekapo.jpg',
    mtCook: '/images/mt-cook.jpg',
    queenstown: '/images/queenstown-lake.jpg',
    glenorchy: '/images/glenorchy-paradise.jpg',
    wanaka: '/images/wanaka-tree.jpg',
    akaroa: '/images/akaroa-harbour.jpg',
  },
  activities: {
    ecozip: '/images/activity-zipline.jpg',
    'seal-kayak': '/images/activity-kayak-seals.jpg',
    'skyline-gondola': '/images/activity-gondola-luge.jpg',
    'nzone-skydiving': '/images/activity-skydiving.jpg',
    'shotover-jet': '/images/activity-jet-boat.jpg',
    'puzzling-world': '/images/activity-puzzling-world.jpg',
    'hooker-valley': '/images/activity-hooker-valley.jpg',
    'akaroa-cruise': '/images/activity-dolphin-cruise.jpg',
  },
  campervan: '/images/Rose-Family-Campervan-JUCY-BigKahuna-Apr11-19.jpg',
  misc: {
    autumnRoad: '/images/nz-autumn-road.jpg',
  },
};

// Maps itinerary day number to a destination image
export const DAY_IMAGES: Record<number, string> = {
  1: IMAGES.destinations.christchurch,
  2: IMAGES.destinations.kaikoura,
  3: IMAGES.destinations.tekapo,
  4: IMAGES.destinations.queenstown,
  5: IMAGES.destinations.queenstown,
  6: IMAGES.destinations.glenorchy,
  7: IMAGES.destinations.wanaka,
  8: IMAGES.destinations.christchurch,
  9: IMAGES.destinations.akaroa,
  10: IMAGES.destinations.christchurch,
};

// Maps activity ID to an activity image
export const ACTIVITY_IMAGES: Record<string, string> = IMAGES.activities;
