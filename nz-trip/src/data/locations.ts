import type { Location, RouteSegment } from '@/types';

export const LOCATIONS: Location[] = [
  {
    id: 'christchurch',
    name: { en: 'Christchurch', zh: '基督城' },
    coords: [-43.5320, 172.6306],
    type: 'base',
    icon: '🏨',
    description: {
      en: 'Base 1 & 3: Christchurch\n3 nights (Apr 11-13)\n2 nights (Apr 17-18)\nAirport, city exploration, museums',
      zh: '基地1 & 3：基督城\n3晚（4月11-13日）\n2晚（4月17-18日）\n机场、城市探索、博物馆',
    },
    days: [1, 2, 3, 8, 9],
  },
  {
    id: 'queenstown',
    name: { en: 'Queenstown', zh: '皇后镇' },
    coords: [-45.0312, 168.6626],
    type: 'base',
    icon: '🏨',
    description: {
      en: 'Base 2: Queenstown\n3 nights (Apr 14-16)\nAdventure capital, gondola, luge, skydiving',
      zh: '基地2：皇后镇\n3晚（4月14-16日）\n冒险之都，缆车，滑道，跳伞',
    },
    days: [4, 5, 6],
  },
  {
    id: 'kaikoura',
    name: { en: 'Kaikoura', zh: '凯库拉' },
    coords: [-42.4008, 173.6817],
    type: 'daytrip',
    icon: '🌲',
    description: {
      en: 'Day 2: Kaikoura\nEcoZip Adventures (ziplines)\nSeal Kayaking\nPoint Kean Seal Colony',
      zh: '第2天：凯库拉\nEcoZip探险（滑索）\n海豹皮划艇\nPoint Kean海豹群落',
    },
    days: [2],
  },
  {
    id: 'tekapo',
    name: { en: 'Lake Tekapo', zh: '蒂卡波湖' },
    coords: [-44.0048, 170.4772],
    type: 'daytrip',
    icon: '⛪',
    description: {
      en: 'Day 3: Lake Tekapo\nChurch of Good Shepherd\nTurquoise lake views\nDark sky stargazing (optional)',
      zh: '第3天：蒂卡波湖\n善牧教堂\n碧绿湖景\n黑暗天空观星（可选）',
    },
    days: [3],
  },
  {
    id: 'mtcook',
    name: { en: 'Mt Cook', zh: '库克山' },
    coords: [-43.5950, 170.1418],
    type: 'daytrip',
    icon: '🏔️',
    description: {
      en: 'Day 3: Mt Cook\nHooker Valley Track\nStunning mountain scenery\nGlacial views',
      zh: '第3天：库克山\nHooker Valley步道\n壮观山景\n冰川景色',
    },
    days: [3],
  },
  {
    id: 'glenorchy',
    name: { en: 'Glenorchy', zh: '格林诺奇' },
    coords: [-44.8503, 168.3772],
    type: 'daytrip',
    icon: '🌲',
    description: {
      en: 'Day 6: Glenorchy & Paradise\nOne of world\'s most scenic drives\nLord of the Rings locations\nBeech forest walks',
      zh: '第6天：格林诺奇和天堂谷\n世界最美景色之一的公路\n《指环王》拍摄地\n山毛榉森林步道',
    },
    days: [6],
  },
  {
    id: 'wanaka',
    name: { en: 'Wanaka', zh: '瓦纳卡' },
    coords: [-44.7020, 169.1320],
    type: 'daytrip',
    icon: '🧩',
    description: {
      en: 'Day 7: Wanaka\nPuzzling World\nThat Wanaka Tree\nScenic lakefront',
      zh: '第7天：瓦纳卡\n迷惑世界\n瓦纳卡之树\n美丽湖畔',
    },
    days: [7],
  },
  {
    id: 'akaroa',
    name: { en: 'Akaroa', zh: '阿卡罗阿' },
    coords: [-43.8044, 172.9667],
    type: 'daytrip',
    icon: '🐬',
    description: {
      en: 'Day 10: Akaroa (Chris\'s family only)\nHarbour cruise\nHector\'s dolphins\nFrench village charm',
      zh: '第10天：阿卡罗阿（仅Chris一家）\n港湾游览\n赫克托海豚\n法国小镇风情',
    },
    days: [10],
  },
];

export const ROUTE_SEGMENTS: RouteSegment[] = [
  {
    coords: [
      [-43.5320, 172.6306],
      [-42.4008, 173.6817],
      [-43.5320, 172.6306],
    ],
    color: '#3498db',
    day: { en: 'Day 2 – Kaikoura', zh: '第2天 – 凯库拉' },
  },
  {
    coords: [
      [-43.5320, 172.6306],
      [-44.0048, 170.4772],
      [-43.5950, 170.1418],
      [-43.5320, 172.6306],
    ],
    color: '#9b59b6',
    day: { en: 'Day 3 – Lake Tekapo & Mt Cook', zh: '第3天 – 蒂卡波湖 & 库克山' },
  },
  {
    coords: [
      [-43.5320, 172.6306],
      [-45.0312, 168.6626],
    ],
    color: '#e67e22',
    day: { en: 'Day 4 – Drive to Queenstown', zh: '第4天 – 驱车至皇后镇' },
  },
  {
    coords: [
      [-45.0312, 168.6626],
      [-44.8503, 168.3772],
      [-45.0312, 168.6626],
    ],
    color: '#1abc9c',
    day: { en: 'Day 6 – Glenorchy', zh: '第6天 – 格林诺奇' },
  },
  {
    coords: [
      [-45.0312, 168.6626],
      [-44.7020, 169.1320],
      [-43.5320, 172.6306],
    ],
    color: '#e74c3c',
    day: { en: 'Day 7 – Wanaka → Christchurch', zh: '第7天 – 瓦纳卡 → 基督城' },
  },
];
