import type { Location, RouteSegment } from '@/types';
import {
  ROAD_DAY1,
  ROAD_DAY4,
  ROAD_DAY5,
  ROAD_DAY6,
  ROAD_DAY8,
  ROAD_DAY9_ROSE,
  ROAD_DAY9_CHRIS,
  ROAD_DAY10,
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

  // === BASE 1: KAIKOURA (3 nights) ===
  {
    id: 'kaikoura',
    name: { en: 'Kaikoura', zh: '凯库拉' },
    coords: [-42.4008, 173.6817],
    type: 'base',
    icon: '🏕️',
    description: {
      en: 'Base 1: Kaikoura\n3 nights (Apr 11-13)\nEcoZip, Seal Kayaking, whale watching\nRecommended: Kaikoura TOP 10',
      zh: '基地1：凯库拉\n3晚（4月11-13日）\nEcoZip滑索、海豹皮划艇、观鲸\n推荐：Kaikoura TOP 10',
    },
    days: [1, 2, 3],
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
    id: 'ecozip-kaikoura',
    name: { en: 'EcoZip Adventures', zh: 'EcoZip探险' },
    coords: [-42.4167, 173.6500],
    type: 'activity',
    icon: '🌲',
    description: {
      en: 'Day 2: EcoZip Adventures\n8 ziplines through native forest\n~3 hours, min age 7\n~$1,100 for 7 people',
      zh: '第2天：EcoZip探险\n8条滑索穿越原生森林\n约3小时，最低年龄7岁\n7人约$1,100',
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
      en: 'Day 2: Seal Kayaking\nPaddle with wild seals!\n2-2.5 hours, will get wet\n~$670 for group',
      zh: '第2天：海豹皮划艇\n与野生海豹同游！\n2-2.5小时，会弄湿\n团体约$670',
    },
    days: [2],
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
  {
    id: 'whale-watch',
    name: { en: 'Whale Watch Kaikoura', zh: '凯库拉观鲸' },
    coords: [-42.4167, 173.6833],
    type: 'activity',
    icon: '🐋',
    description: {
      en: 'Day 3: Optional whale watching\nSperm whales, dolphins, albatross\n2.5 hr tour, ~$1,020 for 7\nBook in advance!',
      zh: '第3天：可选观鲸\n抹香鲸、海豚、信天翁\n2.5小时，7人约$1,020\n提前预订！',
    },
    days: [3],
  },

  // === DAY 4: DRIVE TO MT COOK ===
  {
    id: 'tekapo',
    name: { en: 'Lake Tekapo', zh: '蒂卡波湖' },
    coords: [-44.0048, 170.4772],
    type: 'scenic',
    icon: '💙',
    description: {
      en: 'Day 4: Lake Tekapo stop\nTurquoise glacier-fed lake\nLakefront walk\nCoffee at village café',
      zh: '第4天：蒂卡波湖停留\n碧绿冰川湖\n湖畔漫步\n村庄咖啡馆喝咖啡',
    },
    days: [4],
  },
  {
    id: 'church-good-shepherd',
    name: { en: 'Church of the Good Shepherd', zh: '善牧教堂' },
    coords: [-44.0037, 170.4810],
    type: 'scenic',
    icon: '⛪',
    description: {
      en: 'Day 4: Iconic church\nNZ\'s most photographed church\nStunning lake backdrop\nFREE entry',
      zh: '第4天：标志性教堂\n新西兰最上镜的教堂\n壮观湖景背景\n免费参观',
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
      en: 'Day 4: Lake Pukaki\nIntense turquoise colour\nMt Cook backdrop\nAmazing photo spot!',
      zh: '第4天：普卡基湖\n深邃碧绿色\n库克山背景\n绝佳拍照点！',
    },
    days: [4],
  },

  // === BASE 2: MT COOK (2 nights) ===
  {
    id: 'glentanner',
    name: { en: 'Glentanner Park', zh: 'Glentanner营地' },
    coords: [-43.7333, 170.0833],
    type: 'base',
    icon: '🏕️',
    description: {
      en: 'Base 2: Glentanner\n2 nights (Apr 14-15)\nOnly powered camping near Mt Cook!\nRestaurant, stargazing, glacier tours',
      zh: '基地2：Glentanner\n2晚（4月14-15日）\n库克山附近唯一通电营地！\n餐厅、观星、冰川游',
    },
    days: [4, 5],
  },
  {
    id: 'mtcook-village',
    name: { en: 'Mt Cook Village', zh: '库克山村' },
    coords: [-43.7350, 170.0960],
    type: 'scenic',
    icon: '🏔️',
    description: {
      en: 'Day 5: Mt Cook Village\nSir Edmund Hillary Centre\nCafé & visitor centre\n25 min from Glentanner',
      zh: '第5天：库克山村\n埃德蒙·希拉里爵士中心\n咖啡厅和游客中心\n距Glentanner 25分钟',
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
      en: 'Day 5: Hooker Valley Track\n⭐ HIGHLIGHT! 10km return\n3 swing bridges, glacier lake\n3-4 hours, FREE',
      zh: '第5天：Hooker Valley步道\n⭐ 亮点！往返10公里\n3座吊桥，冰川湖\n3-4小时，免费',
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
      en: 'Base 3: Queenstown\n3 nights Rose (Apr 16-18)\n4 nights Chris (Apr 16-19)\nRecommended: Lakeview Holiday Park',
      zh: '基地3：皇后镇\n3晚Rose（4月16-18日）\n4晚Chris（4月16-19日）\n推荐：Lakeview Holiday Park',
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
      en: 'Day 8: Bennett\'s Bluff\nFamous viewpoint\nQT-Glenorchy road\nAmazing photo spot!',
      zh: '第8天：Bennett\'s Bluff\n著名观景台\n皇后镇-格林诺奇路上\n绝佳拍照点！',
    },
    days: [8],
  },
  {
    id: 'glenorchy',
    name: { en: 'Glenorchy', zh: '格林诺奇' },
    coords: [-44.8503, 168.3772],
    type: 'scenic',
    icon: '🏘️',
    description: {
      en: 'Day 8: Glenorchy\nCharming lakeside village\nGlenorchy Walkway (lagoon)\nTrading Post lunch',
      zh: '第8天：格林诺奇\n迷人湖畔小镇\n格林诺奇步道（泻湖）\n贸易所午餐',
    },
    days: [8],
  },
  {
    id: 'paradise',
    name: { en: 'Paradise', zh: '天堂谷' },
    coords: [-44.7833, 168.2833],
    type: 'scenic',
    icon: '🌲',
    description: {
      en: 'Day 8: Paradise\nLord of the Rings filming!\nStunning beech forest\n25 min gravel road, FREE',
      zh: '第8天：天堂谷\n《指环王》拍摄地！\n壮观山毛榉森林\n25分钟砾石路，免费',
    },
    days: [8],
  },

  // === DAY 9: WANAKA (Chris only) ===
  {
    id: 'crown-range',
    name: { en: 'Crown Range Road', zh: '皇冠山脉公路' },
    coords: [-44.9333, 168.9500],
    type: 'scenic',
    icon: '🛣️',
    description: {
      en: 'Day 9: Crown Range\nNZ\'s highest main road\nSpectacular views\nQT to Wanaka scenic route',
      zh: '第9天：皇冠山脉\n新西兰最高主干道\n壮观景色\n皇后镇至瓦纳卡风景路线',
    },
    days: [9],
  },
  {
    id: 'puzzling-world',
    name: { en: 'Puzzling World', zh: '迷惑世界' },
    coords: [-44.6833, 169.1500],
    type: 'activity',
    icon: '🧩',
    description: {
      en: 'Day 9: Puzzling World (Chris)\n⭐ Kids LOVE this!\nGreat Maze + Illusion Rooms\n1.5-2 hours, ~$68 for 3',
      zh: '第9天：迷惑世界（Chris一家）\n⭐ 孩子们超爱！\n大迷宫 + 幻觉房间\n1.5-2小时，3人约$68',
    },
    days: [9],
  },
  {
    id: 'wanaka',
    name: { en: 'Wanaka', zh: '瓦纳卡' },
    coords: [-44.7020, 169.1320],
    type: 'scenic',
    icon: '🏞️',
    description: {
      en: 'Day 9: Wanaka (Chris family)\nThat Wanaka Tree 📷\nScenic lakefront\nRelaxed vibe',
      zh: '第9天：瓦纳卡（Chris一家）\n瓦纳卡之树 📷\n美丽湖畔\n轻松氛围',
    },
    days: [9],
  },
  {
    id: 'wanaka-tree',
    name: { en: 'That Wanaka Tree', zh: '瓦纳卡之树' },
    coords: [-44.6983, 169.1200],
    type: 'scenic',
    icon: '🌳',
    description: {
      en: 'Day 9: That Wanaka Tree\nNZ\'s most photographed tree\nQuick photo stop\nFREE',
      zh: '第9天：瓦纳卡之树\n新西兰最上镜的树\n快速拍照\n免费',
    },
    days: [9],
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
  // Day 4: Kaikoura → Lake Tekapo → Mt Cook (SH1 → SH8 → SH80)
  {
    coords: ROAD_DAY4,
    color: '#9b59b6',
    day: { en: 'Day 4 – Kaikoura → Mt Cook', zh: '第4天 – 凯库拉 → 库克山' },
    dayNum: 4,
    distance: '380 km',
    driveTime: '5 hrs',
  },
  // Day 5: Glentanner → Hooker Valley (return)
  {
    coords: ROAD_DAY5,
    color: '#1abc9c',
    day: { en: 'Day 5 – Hooker Valley Track', zh: '第5天 – Hooker Valley步道' },
    dayNum: 5,
    distance: '25 km',
    driveTime: '25 min',
  },
  // Day 6: Mt Cook → Queenstown (SH80 → SH8 via Lindis Pass)
  {
    coords: ROAD_DAY6,
    color: '#e67e22',
    day: { en: 'Day 6 – Mt Cook → Queenstown', zh: '第6天 – 库克山 → 皇后镇' },
    dayNum: 6,
    distance: '280 km',
    driveTime: '3.5 hrs',
  },
  // Day 8: Queenstown ↔ Glenorchy/Paradise
  {
    coords: ROAD_DAY8,
    color: '#3498db',
    day: { en: 'Day 8 – Glenorchy & Paradise', zh: '第8天 – 格林诺奇和天堂谷' },
    dayNum: 8,
    distance: '95 km',
    driveTime: '1.5 hrs',
  },
  // Day 9 (Rose): Queenstown → Christchurch
  {
    coords: ROAD_DAY9_ROSE,
    color: '#e74c3c',
    day: { en: 'Day 9 – Rose: QT → Christchurch', zh: '第9天 – Rose：皇后镇 → 基督城' },
    dayNum: 9,
    distance: '480 km',
    driveTime: '6 hrs',
  },
  // Day 9 (Chris): Queenstown → Wanaka (Crown Range)
  {
    coords: ROAD_DAY9_CHRIS,
    color: '#f39c12',
    day: { en: 'Day 9 – Chris: Wanaka Day Trip', zh: '第9天 – Chris：瓦纳卡一日游' },
    dayNum: 9,
    distance: '130 km',
    driveTime: '2 hrs',
  },
  // Day 10 (Chris): Queenstown → Christchurch
  {
    coords: ROAD_DAY10,
    color: '#c0392b',
    day: { en: 'Day 10 – Chris: QT → Christchurch', zh: '第10天 – Chris：皇后镇 → 基督城' },
    dayNum: 10,
    distance: '480 km',
    driveTime: '6 hrs',
  },
];
