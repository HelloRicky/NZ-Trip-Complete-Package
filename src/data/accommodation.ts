import type { AccommodationBase } from '@/types';

export const ACCOMMODATION_BASES: AccommodationBase[] = [
  {
    id: 'base1',
    name: { en: 'Base 1: Christchurch', zh: '基地1：基督城' },
    location: { en: 'Christchurch', zh: '基督城' },
    nights: 3,
    dates: { en: 'April 11–13', zh: '4月11-13日' },
    checkIn: 'Friday April 11, ~12:00 PM (early arrival requested)',
    checkOut: 'Monday April 14, morning',
    purpose: {
      en: 'Arrival base. Day trip to Kaikoura (Day 2). Day trip to Lake Tekapo/Mt Cook (Day 3).',
      zh: '到达基地。凯库拉一日游（第2天）。蒂卡波湖/库克山一日游（第3天）。',
    },
    options: [
      {
        name: 'Christchurch TOP 10 Holiday Park',
        powered: true,
        address: { en: '39 Meadow Street, Papanui, Christchurch', zh: '基督城Papanui区Meadow Street 39号' },
        whyChoose: { en: 'TOP 10 network quality, modern amenities, close to airport and city', zh: 'TOP 10网络品质，设施现代，靠近机场及市区' },
        siteType: { en: 'Powered campervan site', zh: '通电房车营位' },
        amenities: [
          { en: 'Kitchen block', zh: '公共厨房' },
          { en: 'Hot showers', zh: '热水淋浴' },
          { en: 'Laundry', zh: '洗衣房' },
        ],
        distanceToTown: { en: '15 min drive to city center', zh: '驾车15分钟至市中心' },
      },
      {
        name: 'NZMCA Christchurch Park',
        powered: false,
        address: { en: 'Christchurch, Canterbury', zh: '坎特伯雷，基督城' },
        whyChoose: { en: 'NZMCA members-only park, quiet and secure overnight stop', zh: 'NZMCA会员专属营地，安静安全的过夜停靠点' },
        siteType: { en: 'Unpowered campervan site', zh: '无电房车营位' },
        amenities: [
          { en: 'Basic facilities', zh: '基本设施' },
          { en: 'Secure site', zh: '安全营地' },
          { en: 'Self-contained OK', zh: '自给自足车辆适用' },
        ],
        distanceToTown: { en: 'Varies – check NZMCA app', zh: '距离不一，请查NZMCA应用' },
      },
    ],
    notes: [
      { en: 'Book powered sites in advance – Christchurch parks fill quickly in autumn', zh: '提前预订通电营位 – 秋季基督城营地易满' },
      { en: 'Check kitchen and shower block hours before arrival', zh: '出发前确认公共厨房及淋浴开放时间' },
      { en: 'Both campervans need separate sites', zh: '两辆房车需预订各自营位' },
      { en: 'Kitchen block useful for early morning departures to Kaikoura', zh: '公共厨房方便前往凯库拉的早起出发' },
    ],
  },
  {
    id: 'base2',
    name: { en: 'Base 2: Queenstown', zh: '基地2：皇后镇' },
    location: { en: 'Queenstown', zh: '皇后镇' },
    nights: 3,
    dates: { en: 'April 14–16', zh: '4月14-16日' },
    checkIn: 'Monday April 14, afternoon',
    checkOut: 'Thursday April 17, morning',
    purpose: {
      en: 'Adventure activities (Skyline Gondola, luge, skydiving). Day trip to Glenorchy & Paradise.',
      zh: '冒险活动（天际缆车、滑道、跳伞）。格林诺奇 & 天堂谷一日游。',
    },
    options: [
      {
        name: 'Queenstown Lakeview Holiday Park',
        powered: true,
        address: { en: 'Brecon Street, Queenstown', zh: '皇后镇Brecon Street' },
        whyChoose: { en: 'Stunning lake and mountain views, central location, walk to town', zh: '绝美湖光山色，位置中心，步行可达市区' },
        siteType: { en: 'Powered campervan site', zh: '通电房车营位' },
        amenities: [
          { en: 'Lake views', zh: '湖景' },
          { en: 'Kitchen block', zh: '公共厨房' },
          { en: 'Hot showers', zh: '热水淋浴' },
        ],
        distanceToTown: { en: '10 min walk to town center', zh: '步行10分钟至市中心' },
      },
      {
        name: 'Queenstown TOP 10 Holiday Park',
        powered: true,
        address: { en: '54 Robins Road, Frankton, Queenstown', zh: '皇后镇Frankton区Robins Road 54号' },
        whyChoose: { en: 'Excellent facilities, family-friendly, close to Remarkables ski area', zh: '设施优良，适合家庭，靠近非凡雪山' },
        siteType: { en: 'Powered campervan site', zh: '通电房车营位' },
        amenities: [
          { en: 'Kitchen block', zh: '公共厨房' },
          { en: 'Playground', zh: '游乐场' },
          { en: 'Hot showers', zh: '热水淋浴' },
        ],
        distanceToTown: { en: '10 min drive to town center', zh: '驾车10分钟至市中心' },
      },
    ],
    notes: [
      { en: 'Book powered sites well in advance – Queenstown parks are very popular', zh: '提早预订通电营位 – 皇后镇营地非常抢手' },
      { en: 'Book Skyline Gondola + Luge for April 15', zh: '预订4月15日天际缆车 + 滑道' },
      { en: 'Book skydiving for April 15 (adults who want to)', zh: '预订4月15日跳伞（想要跳的成人）' },
      { en: 'Check camp kitchen facilities for cooking meals', zh: '确认营地厨房设施以便自行做饭' },
    ],
  },
  {
    id: 'base3',
    name: { en: 'Base 3: Christchurch', zh: '基地3：基督城' },
    location: { en: 'Christchurch (near airport)', zh: '基督城（靠近机场）' },
    nights: 2,
    dates: {
      en: 'April 17–18 (Rose\'s family, 2 nights) / April 17–19 (Chris\'s family, 3 nights)',
      zh: '4月17-18日（Rose一家，2晚）/ 4月17-19日（Chris一家，3晚）',
    },
    checkIn: 'Thursday April 17, ~7:30 PM (late arrival)',
    checkOut: 'Saturday April 19 (Rose) / Sunday April 20 (Chris)',
    purpose: {
      en: 'Final base before departures. Christchurch exploration (museums, markets). Easy airport access.',
      zh: '出发前的最后基地。基督城探索（博物馆、市集）。轻松前往机场。',
    },
    options: [
      {
        name: 'Christchurch TOP 10 Holiday Park',
        powered: true,
        address: { en: '39 Meadow Street, Papanui, Christchurch', zh: '基督城Papanui区Meadow Street 39号' },
        whyChoose: { en: 'Same park as Base 1 – familiar site, close to airport for departure', zh: '与基地1相同营地，熟悉环境，靠近机场便于出发' },
        siteType: { en: 'Powered campervan site', zh: '通电房车营位' },
        amenities: [
          { en: 'Kitchen block', zh: '公共厨房' },
          { en: 'Hot showers', zh: '热水淋浴' },
          { en: 'Laundry', zh: '洗衣房' },
        ],
        distanceToTown: { en: '15 min drive to city center', zh: '驾车15分钟至市中心' },
      },
      {
        name: 'NZMCA Christchurch Park',
        powered: false,
        address: { en: 'Christchurch, Canterbury', zh: '坎特伯雷，基督城' },
        whyChoose: { en: 'Quiet final night stop, economical option for NZMCA members', zh: '安静的最后一晚，NZMCA会员经济选择' },
        siteType: { en: 'Unpowered campervan site', zh: '无电房车营位' },
        amenities: [
          { en: 'Basic facilities', zh: '基本设施' },
          { en: 'Secure site', zh: '安全营地' },
          { en: 'Self-contained OK', zh: '自给自足车辆适用' },
        ],
        distanceToTown: { en: 'Varies – check NZMCA app', zh: '距离不一，请查NZMCA应用' },
      },
    ],
    notes: [
      { en: 'Confirm late arrival – call ahead to ensure gate access after 7:30 PM', zh: '确认晚到事宜 – 提前致电确保7:30 PM后可进入营地' },
      { en: 'Rose\'s family: 2 nights. Chris\'s family: 3 nights.', zh: 'Rose一家：2晚。Chris一家：3晚。' },
      { en: 'Return campervans at Christchurch Airport – check JUCY dropoff procedure', zh: '在基督城机场归还房车 – 确认JUCY还车流程' },
      { en: 'Luggage can be stored in campervan until dropoff if checking out early', zh: '若提早离营，行李可暂存房车内直至还车' },
    ],
  },
];
