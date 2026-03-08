// Centralized image path mappings for the NZ Trip app

export const IMAGES = {
  hero: '/images/hero-nz-south-island.jpg',
  destinations: {
    christchurch: '/images/christchurch-city.jpg',
    kaikoura: '/images/kaikoura-coast.jpg',
    tekapo: '/images/lake-tekapo.jpg',
    churchGoodShepherd: '/images/church-good-shepherd.jpg',
    mtCook: '/images/mt-cook.jpg',
    lakePukaki: '/images/lake-pukaki.jpg',
    queenstown: '/images/queenstown-lake.jpg',
    glenorchy: '/images/glenorchy-road.jpg',
    paradise: '/images/paradise-beech-forest.jpg',
    wanaka: '/images/wanaka-tree.jpg',
    akaroa: '/images/akaroa-harbour.jpg',
  },
  activities: {
    fishing: '/images/activity-fishing-kaikoura.jpg',
    ecozip: '/images/activity-zipline.jpg',
    'seal-kayak': '/images/activity-kayak-seals.jpg',
    seals: '/images/activity-kaikoura-seals.jpg',
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
// Day 1: Arrive → Kaikoura
// Day 2: Kaikoura fishing charter
// Day 3: Kaikoura EcoZip + kayaking
// Day 4: Drive to Lake Tekapo, church, stargazing
// Day 5: Mt Cook day trip from Tekapo
// Day 6: Drive Lake Tekapo → Queenstown
// Day 7: Queenstown adventure (gondola/luge)
// Day 8: Glenorchy & Paradise day trip
// Day 9: Rose departs / Chris extra QT day
// Day 10: Chris departs
export const DAY_IMAGES: Record<number, string> = {
  1: IMAGES.destinations.kaikoura,
  2: IMAGES.activities.fishing,
  3: IMAGES.activities.ecozip,
  4: IMAGES.destinations.tekapo,
  5: IMAGES.destinations.mtCook,
  6: IMAGES.destinations.queenstown,
  7: IMAGES.activities['skyline-gondola'],
  8: IMAGES.destinations.glenorchy,
  9: IMAGES.destinations.queenstown,
  10: IMAGES.destinations.christchurch,
};

// Maps activity ID to an activity image
export const ACTIVITY_IMAGES: Record<string, string> = IMAGES.activities;
