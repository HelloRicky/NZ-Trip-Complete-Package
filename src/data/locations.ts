import type { Location, RouteSegment } from '@/types';
import {
  ROAD_DAY1,
  ROAD_DAY2,
  ROAD_DAY3,
  ROAD_DAY4,
  ROAD_DAY5,
  ROAD_DAY6,
  ROAD_DAY7,
  ROAD_DAY10,
  ROAD_DAY8_ROSE,
  ROAD_DAY9_ROSE_NEW,
} from './road-routes';

export const LOCATIONS: Location[] = [
  // === ARRIVAL/DEPARTURE ===
  {
    id: 'christchurch-airport',
    name: { en: 'Christchurch Airport', zh: '基督城机场' },
    coords: [-43.4864, 172.5369],
    type: 'transport',
    icon: '✈️',
    description: {
      en: 'Day 1: Arrive 12:55 PM\nDay 9: Rose departs 5:45 PM\nDay 10: Chris departs 7:00 PM\nJUCY campervan pickup/dropoff',
      zh: '第1天：12:55抵达\n第9天：Rose 17:45起飞\n第10天：Chris 19:00起飞\nJUCY房车取还',
    },
    days: [1, 9, 10],
  },

  // === BASE 1: KAIKOURA (2 nights) ===
  {
    id: 'kaikoura',
    name: { en: 'Kaikoura', zh: '凯库拉' },
    coords: [-42.4008, 173.6817],
    type: 'base',
    icon: '🏕️',
    description: {
      en: 'Base 1: Kaikoura\n2 nights (Apr 11-12)\nSeal Kayaking, fishing, seal colony\nRecommended: Kaikoura TOP 10',
      zh: '基地1：凯库拉\n2晚（4月11-12日）\n海豹皮划艇、钓鱼、海豹群落\n推荐：Kaikoura TOP 10',
    },
    days: [1, 2],
  },
  {
    id: 'goose-bay',
    name: { en: 'Goose Bay', zh: 'Goose Bay' },
    coords: [-42.5833, 173.4167],
    type: 'scenic',
    icon: '🏖️',
    description: {
      en: 'Day 1: Optional beach stop\nStretch legs on drive to Kaikoura\n20 min break',
      zh: '第1天：可选海滩停留\n前往凯库拉途中舒展身体\n20分钟休息',
    },
    days: [1],
  },
  {
    id: 'fishing-charter',
    name: { en: 'Kaikoura Fishing Charter', zh: '凯库拉钓鱼游船' },
    coords: [-42.4050, 173.6960],
    type: 'activity',
    icon: '🎣',
    description: {
      en: 'Day 2: Fishing Charter\nDeep sea fishing off Kaikoura coast\nBlue cod, groper & more!\n~3-4 hours, ~$700-1,400 for group\nBook in advance!',
      zh: '第2天：钓鱼游船\n凯库拉海岸深海钓鱼\n蓝鳕鱼、笛鲷等！\n约3-4小时，团体约$700-1,400\n提前预订！',
    },
    days: [2],
  },

  {
    id: 'seal-kayak',
    name: { en: 'Seal Kayak Kaikoura', zh: '凯库拉海豹皮划艇' },
    coords: [-42.4100, 173.6900],
    type: 'activity',
    icon: '🛶',
    description: {
      en: 'Day 3: Seal Kayaking (morning)\n⭐ Main Kaikoura activity!\nPaddle with wild seals!\n2-2.5 hours, will get wet\nThen drive to Christchurch',
      zh: '第3天：海豹皮划艇（上午）\n⭐ 凯库拉主要活动！\n与野生海豹同游！\n2-2.5小时，会弄湿\n然后驾车前往基督城',
    },
    days: [3],
  },
  {
    id: 'point-kean',
    name: { en: 'Point Kean Seal Colony', zh: 'Point Kean海豹群落' },
    coords: [-42.4233, 173.7017],
    type: 'scenic',
    icon: '🦭',
    description: {
      en: 'Days 2-3: Seal Colony\nFREE viewing platform\nKaikoura Peninsula Walkway\nBest at sunset!',
      zh: '第2-3天：海豹群落\n免费观景台\n凯库拉半岛步道\n日落最佳！',
    },
    days: [2, 3],
  },

  // === BASE 1b: CHRISTCHURCH TRANSIT (1 night) ===
  {
    id: 'christchurch-transit',
    name: { en: 'Christchurch (Transit)', zh: '基督城（中转）' },
    coords: [-43.5321, 172.6362],
    type: 'base',
    icon: '🏕️',
    description: {
      en: 'Base 1b: Christchurch Transit\n1 night (Apr 13)\nRelax after Kaikoura\nRecommended: Christchurch TOP 10',
      zh: '基地1b：基督城中转\n1晚（4月13日）\n凯库拉后休息\n推荐：Christchurch TOP 10',
    },
    days: [3],
  },

  // === BASE 2: LAKE TEKAPO (1 night) ===
  {
    id: 'tekapo',
    name: { en: 'Lake Tekapo', zh: '蒂卡波湖' },
    coords: [-44.0048, 170.4772],
    type: 'base',
    icon: '🏕️',
    description: {
      en: 'Base 2: Lake Tekapo\n1 night (Apr 14)\nStunning turquoise lake\nDark Sky Reserve – incredible stargazing!\nMt Cook day trip next day',
      zh: '基地2：蒂卡波湖\n1晚（4月14日）\n令人叹为观止的碧蓝湖\n暗夜保护区 – 绝佳观星！\n第二天库克山一日游',
    },
    days: [4],
  },

  // === BASE 2b: TWIZEL (1 night) ===
  {
    id: 'twizel',
    name: { en: 'Twizel', zh: '特威泽尔' },
    coords: [-44.2573, 170.0981],
    type: 'base',
    icon: '🏕️',
    description: {
      en: 'Base 2b: Twizel\n1 night (Apr 15)\nSaves driving time to Queenstown!\n45 min from Mt Cook\nRecommended: Twizel Holiday Park',
      zh: '基地2b：特威泽尔\n1晚（4月15日）\n节省去皇后镇的驾驶时间！\n距库克山45分钟\n推荐：Twizel Holiday Park',
    },
    days: [5],
  },
  {
    id: 'church-good-shepherd',
    name: { en: 'Church of the Good Shepherd', zh: '善牧教堂' },
    coords: [-44.0037, 170.4810],
    type: 'scenic',
    icon: '⛪',
    description: {
      en: 'Day 4: Iconic church\nNZ\'s most photographed church\nStunning turquoise lake backdrop\nFREE entry – walk from campground',
      zh: '第4天：标志性教堂\n新西兰最上镜的教堂\n壮观碧蓝湖景背景\n免费参观 – 从营地步行可达',
    },
    days: [4],
  },
  {
    id: 'lake-pukaki',
    name: { en: 'Lake Pukaki Viewpoint', zh: '普卡基湖观景台' },
    coords: [-44.1667, 170.1500],
    type: 'scenic',
    icon: '📷',
    description: {
      en: 'Day 5: Lake Pukaki\nIntense turquoise colour\nMt Cook backdrop\nAmazing photo spot!\nOn the way to Mt Cook day trip',
      zh: '第5天：普卡基湖\n深邃碧绿色\n库克山背景\n绝佳拍照点！\n库克山一日游途中',
    },
    days: [5],
  },

  // === DAY 5: MT COOK DAY TRIP (from Lake Tekapo) ===
  {
    id: 'mtcook-village',
    name: { en: 'Mt Cook Village', zh: '库克山村' },
    coords: [-43.7350, 170.0960],
    type: 'scenic',
    icon: '🏔️',
    description: {
      en: 'Day 5: Mt Cook Village (day trip)\nSir Edmund Hillary Alpine Centre\nCafé & visitor centre\n~1.5 hrs from Lake Tekapo',
      zh: '第5天：库克山村（一日游）\n埃德蒙·希拉里爵士高山中心\n咖啡厅和游客中心\n距蒂卡波湖约1.5小时',
    },
    days: [5],
  },
  {
    id: 'hooker-valley',
    name: { en: 'Hooker Valley Track', zh: 'Hooker Valley步道' },
    coords: [-43.7167, 170.0833],
    type: 'activity',
    icon: '🥾',
    description: {
      en: 'Day 5: Hooker Valley Track\n⭐ HIGHLIGHT! 10km return\n3 swing bridges, glacier lake\n3-4 hours, FREE\nDay trip from Lake Tekapo',
      zh: '第5天：Hooker Valley步道\n⭐ 亮点！往返10公里\n3座吊桥，冰川湖\n3-4小时，免费\n从蒂卡波湖出发一日游',
    },
    days: [5],
  },

  // === DAY 6: DRIVE TO QUEENSTOWN ===
  {
    id: 'lindis-pass',
    name: { en: 'Lindis Pass', zh: 'Lindis Pass' },
    coords: [-44.6000, 169.6333],
    type: 'scenic',
    icon: '🏜️',
    description: {
      en: 'Day 6: Lindis Pass\nGolden tussock landscapes\nPhoto opportunity\nHighest point 971m',
      zh: '第6天：Lindis Pass\n金色草地景观\n拍照机会\n最高点971米',
    },
    days: [6],
  },
  {
    id: 'cromwell',
    name: { en: 'Cromwell', zh: '克伦威尔' },
    coords: [-45.0383, 169.1983],
    type: 'scenic',
    icon: '🍎',
    description: {
      en: 'Day 6: Cromwell Fruit Town\nHeritage Precinct\nFamous fruit stalls\nGreat lunch stop',
      zh: '第6天：克伦威尔水果小镇\n历史区\n著名水果摊\n午餐好去处',
    },
    days: [6],
  },

  // === BASE 3: QUEENSTOWN (3-4 nights) ===
  {
    id: 'queenstown',
    name: { en: 'Queenstown', zh: '皇后镇' },
    coords: [-45.0312, 168.6626],
    type: 'base',
    icon: '🏕️',
    description: {
      en: 'Base 3: Queenstown\n2 nights both families (Apr 16-17)\nBoth depart Apr 18 ~10 AM for Omarama\nRecommended: Lakeview Holiday Park',
      zh: '基地3：皇后镇\n两家人各2晚（4月16-17日）\n两家人4月18日约10点一起出发奥马拉马\n推荐：Lakeview Holiday Park',
    },
    days: [6, 7, 8, 9],
  },
  {
    id: 'queenstown-gardens',
    name: { en: 'Queenstown Gardens', zh: '皇后镇花园' },
    coords: [-45.0333, 168.6583],
    type: 'scenic',
    icon: '🌳',
    description: {
      en: 'Day 6: Queenstown Gardens\nFrisbee golf, playground\nBeautiful lake views\nFREE',
      zh: '第6天：皇后镇花园\n飞盘高尔夫，游乐场\n美丽湖景\n免费',
    },
    days: [6],
  },
  {
    id: 'skyline-gondola',
    name: { en: 'Skyline Gondola & Luge', zh: '天际缆车和滑道' },
    coords: [-45.0167, 168.6583],
    type: 'activity',
    icon: '🚡',
    description: {
      en: 'Day 7: Skyline Gondola + Luge\n⭐⭐⭐ MUST-DO!\nBob\'s Peak views\n5 luge rides each, ~$463',
      zh: '第7天：天际缆车 + 滑道\n⭐⭐⭐ 必做！\n鲍勃峰观景\n每人5次滑道，约$463',
    },
    days: [7],
  },
  {
    id: 'fergburger',
    name: { en: 'Fergburger', zh: 'Fergburger' },
    coords: [-45.0314, 168.6610],
    type: 'food',
    icon: '🍔',
    description: {
      en: 'Days 6-8: Fergburger\nIconic Queenstown burgers\nExpect a queue!\nWorth the wait',
      zh: '第6-8天：Fergburger\n皇后镇标志性汉堡\n可能要排队！\n值得等待',
    },
    days: [6, 7, 8],
  },

  // === DAY 8: GLENORCHY/PARADISE ===
  {
    id: 'bennetts-bluff',
    name: { en: "Bennett's Bluff Lookout", zh: "Bennett's Bluff观景台" },
    coords: [-44.9500, 168.5167],
    type: 'scenic',
    icon: '📷',
    description: {
      en: 'Day 7: Bennett\'s Bluff\nFamous viewpoint on QT-Glenorchy road\nAmazing photo spot!\nBoth families together',
      zh: '第7天：Bennett\'s Bluff\n皇后镇-格林诺奇路上著名观景台\n绝佳拍照点！\n两家人一起',
    },
    days: [7],
  },
  {
    id: 'glenorchy',
    name: { en: 'Glenorchy', zh: '格林诺奇' },
    coords: [-44.8503, 168.3772],
    type: 'scenic',
    icon: '🏘️',
    description: {
      en: 'Day 7: Glenorchy\nCharming lakeside village\nGlenorchy Walkway (lagoon)\nScenic stop – both families together',
      zh: '第7天：格林诺奇\n迷人湖畔小镇\n格林诺奇步道（泻湖）\n风景停留 – 两家人一起',
    },
    days: [7],
  },
  {
    id: 'paradise',
    name: { en: 'Paradise', zh: '天堂谷' },
    coords: [-44.7833, 168.2833],
    type: 'scenic',
    icon: '🌲',
    description: {
      en: 'Paradise – Lord of the Rings filming location!\nStunning beech forest\n25 min gravel road from Glenorchy, FREE\n(Not on this itinerary – future visit!)',
      zh: '天堂谷 – 《指环王》拍摄地！\n壮观山毛榉森林\n距格林诺奇25分钟砾石路，免费\n（本次行程未安排 – 下次再来！）',
    },
    days: [],
  },

  // === DAY 8: ARROWTOWN AUTUMN FESTIVAL ===
  {
    id: 'arrowtown',
    name: { en: 'Arrowtown', zh: '箭镇' },
    coords: [-44.9369, 168.8256],
    type: 'activity',
    icon: '🍂',
    description: {
      en: 'Day 8: Arrowtown Autumn Festival\n⭐ Historic gold mining town\nStunning autumn colours!\nMarket stalls, food & wine\n~20 min from Queenstown',
      zh: '第8天：箭镇秋季节\n⭐ 历史淘金小镇\n绝美秋色！\n集市摊位、美食美酒\n距皇后镇约20分钟',
    },
    days: [8],
  },

  // === DAY 8: OMARAMA & LAKE OHAU ===
  {
    id: 'omarama-hot-tubs',
    name: { en: 'Omarama Hot Tubs', zh: '奥马拉马温泉浴桶' },
    coords: [-44.5333, 170.0833],
    type: 'activity',
    icon: '♨️',
    description: {
      en: 'Day 8: Omarama Hot Tubs (Both Families!)\n⭐ Outdoor cedar hot tubs\nStunning MacKenzie Country views\n~$50/person, book in advance!\nVery relaxing!',
      zh: '第8天：奥马拉马温泉浴桶（两家人！）\n⭐ 露天雪松温泉浴桶\n壮观的麦肯齐地区风景\n约$50/人，提前预订！\n非常放松！',
    },
    days: [8],
  },
  {
    id: 'lake-ohau',
    name: { en: 'Lake Ohau', zh: '奥豪湖' },
    coords: [-44.2667, 169.8333],
    type: 'scenic',
    icon: '🏞️',
    description: {
      en: 'Day 8: Lake Ohau (Both Families)\nBeautiful remote alpine lake\nShort drive from Omarama\nOptional short walk on the shore\nFREE',
      zh: '第8天：奥豪湖（两家人）\n美丽偏远的高山湖\n距奥马拉马短途驾车\n可在湖边短途步行\n免费',
    },
    days: [8],
  },

  // === DAY 10: CHRISTCHURCH (CHRIS ONLY) ===
  {
    id: 'bottle-lake-forest',
    name: { en: 'Bottle Lake Forest Park', zh: '瓶湖森林公园' },
    coords: [-43.4667, 172.6833],
    type: 'activity',
    icon: '🍄',
    description: {
      en: 'Day 10: Bottle Lake Forest Park (Chris family)\n⭐ Mushroom foraging!\nPine mushrooms & saffron milk caps\n2-3 hours, FREE entry\nJust 20 min from airport\nKids love hunting for mushrooms!',
      zh: '第10天：瓶湖森林公园（Chris一家）\n⭐ 采蘑菇！\n松茸和藏红花乳菇\n2-3小时，免费入园\n距机场仅20分钟\n孩子们超喜欢寻找蘑菇！',
    },
    days: [10],
  },
];

export const ROUTE_SEGMENTS: RouteSegment[] = [
  // Day 1: Christchurch → Kaikoura (SH1 coastal)
  {
    coords: ROAD_DAY1,
    color: '#2ecc71',
    day: { en: 'Day 1 – Arrive → Kaikoura', zh: '第1天 – 抵达 → 凯库拉' },
    dayNum: 1,
    distance: '180 km',
    driveTime: '2.5 hrs',
  },
  // Day 2: Kaikoura local loop – Fishing Charter & Seal Colony
  {
    coords: ROAD_DAY2,
    color: '#16a085',
    day: { en: 'Day 2 – Kaikoura: Fishing & Seals', zh: '第2天 – 凯库拉：钓鱼 & 海豹' },
    dayNum: 2,
    distance: '12 km',
    driveTime: '20 min',
  },
  // Day 3: Kaikoura → Christchurch (Seal Kayaking morning, then drive to CHC)
  {
    coords: ROAD_DAY3,
    color: '#27ae60',
    day: { en: 'Day 3 – Seal Kayaking → Christchurch', zh: '第3天 – 海豹皮划艇 → 基督城' },
    dayNum: 3,
    distance: '180 km',
    driveTime: '2.5 hrs',
  },
  // Day 4: Christchurch → Lake Tekapo (inland through MacKenzie Country)
  {
    coords: ROAD_DAY4,
    color: '#9b59b6',
    day: { en: 'Day 4 – Christchurch → Lake Tekapo', zh: '第4天 – 基督城 → 蒂卡波湖' },
    dayNum: 4,
    distance: '225 km',
    driveTime: '3 hrs',
  },
  // Day 5: Lake Tekapo → Mt Cook → Twizel (Mt Cook day trip, then overnight Twizel)
  {
    coords: ROAD_DAY5,
    color: '#1abc9c',
    day: { en: 'Day 5 – Mt Cook Day Trip → Twizel', zh: '第5天 – 库克山一日游 → 特威泽尔' },
    dayNum: 5,
    distance: '150 km',
    driveTime: '2.5 hrs',
  },
  // Day 6: Twizel → Queenstown (via Lindis Pass & Cromwell)
  {
    coords: ROAD_DAY6,
    color: '#e67e22',
    day: { en: 'Day 6 – Twizel → Queenstown', zh: '第6天 – 特威泽尔 → 皇后镇' },
    dayNum: 6,
    distance: '210 km',
    driveTime: '2.5 hrs',
  },
  // Day 7: Queenstown → Skyline Gondola → Bennett's Bluff → Glenorchy → Queenstown
  {
    coords: ROAD_DAY7,
    color: '#3498db',
    day: { en: 'Day 7 – QT → Skyline → Glenorchy (Both Families)', zh: '第7天 – 皇后镇 → 天际缆车 → 格林诺奇（两家人）' },
    dayNum: 7,
    distance: '95 km',
    driveTime: '1.5 hrs',
  },
  // Day 8 (Both Families): Arrowtown Festival → Omarama via Cromwell, Lindis Pass
  {
    coords: ROAD_DAY8_ROSE,
    color: '#e74c3c',
    day: { en: 'Day 8 – Arrowtown Festival → Omarama', zh: '第8天 – 箭镇秋季节 → 奥马拉马' },
    dayNum: 8,
    distance: '210 km',
    driveTime: '2.5 hrs',
  },
  // Day 9 (Both Families): Omarama → Christchurch via Burke Pass
  {
    coords: ROAD_DAY9_ROSE_NEW,
    color: '#e74c3c',
    day: { en: 'Day 9 – Both Families: Omarama → Christchurch (via Burke Pass)', zh: '第9天 – 两家人：奥马拉马 → 基督城（经Burke Pass）' },
    dayNum: 9,
    distance: '200 km',
    driveTime: '2.5 hrs',
  },
  // Day 10 (Chris): Local Christchurch – Bottle Lake Forest Park
  {
    coords: ROAD_DAY10,
    color: '#27ae60',
    day: { en: 'Day 10 – Chris: Christchurch local (Bottle Lake)', zh: '第10天 – Chris：基督城本地（瓶湖森林）' },
    dayNum: 10,
    distance: '20 km',
    driveTime: '20 min',
  },
];

// Explicit route order per day (location IDs in travel sequence)
export const DAY_ORDER: Record<number, string[]> = {
  1: ['christchurch-airport', 'goose-bay', 'kaikoura'],
  2: ['kaikoura', 'fishing-charter', 'point-kean', 'kaikoura'],
  3: ['kaikoura', 'seal-kayak', 'christchurch-transit'],
  4: ['christchurch-transit', 'church-good-shepherd', 'tekapo'],
  5: ['tekapo', 'lake-pukaki', 'mtcook-village', 'hooker-valley', 'twizel'],
  6: ['twizel', 'lindis-pass', 'cromwell', 'queenstown-gardens', 'queenstown'],
  7: ['queenstown', 'skyline-gondola', 'bennetts-bluff', 'glenorchy', 'queenstown'],
  8: ['queenstown', 'arrowtown', 'cromwell', 'lindis-pass', 'omarama-hot-tubs'],
  9: ['omarama-hot-tubs', 'christchurch-airport'],
  10: ['christchurch-airport', 'bottle-lake-forest', 'christchurch-airport'],
};
