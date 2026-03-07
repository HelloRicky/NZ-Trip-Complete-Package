import type { ItineraryDay } from '@/types';

export const ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    date: 'April 11, 2026',
    dateLabel: { en: 'Friday, April 11', zh: '4月11日 周五' },
    title: { en: 'Arrival in Christchurch', zh: '抵达基督城' },
    base: { en: 'Base 1: Christchurch (Night 1 of 3)', zh: '基地1：基督城（第1晚，共3晚）' },
    sections: [
      {
        title: { en: 'Morning/Afternoon – Arrival', zh: '上午/下午 – 抵达' },
        activities: [
          { time: '7:50 AM', emoji: '✈️', name: { en: 'Depart Sydney (EK412)', zh: '悉尼出发（EK412）' }, type: 'normal', notes: { en: 'Sydney time – Emirates flight', zh: '悉尼时间 – 阿联酋航空' } },
          { time: '12:55 PM', emoji: '✈️', name: { en: 'Arrive Christchurch', zh: '抵达基督城' }, type: 'normal', notes: { en: 'NZ time (2 hrs ahead of Sydney), 3h 5m flight', zh: '新西兰时间（比悉尼快2小时），3小时5分钟' } },
          { time: '1:30 PM', emoji: '🚗', name: { en: 'Pick up JUCY Campervan', zh: '取JUCY房车' }, type: 'normal', notes: { en: 'Booking #CHC-140959, Big Kahuna 6-berth (allow 30 min for baggage/customs)', zh: '预订号#CHC-140959，Big Kahuna 6铺位（留30分钟取行李/过海关）' } },
          { time: '2:00 PM', emoji: '🏨', name: { en: 'Check into accommodation', zh: '入住酒店' }, type: 'normal' },
          { time: '2:30 PM', emoji: '🍽️', name: { en: 'Late lunch', zh: '午餐' }, type: 'normal', notes: { en: 'Riverside Market or city center', zh: '河畔市场或市中心' } },
        ],
      },
      {
        title: { en: 'Afternoon – City Exploration', zh: '下午 – 城市探索' },
        activities: [
          { time: '4:00 PM', emoji: '🌳', name: { en: 'Christchurch Botanic Gardens', zh: '基督城植物园' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Beautiful gardens, kids can run around', zh: '美丽的花园，孩子们可以奔跑' } },
          { emoji: '🛶', name: { en: 'Punting on Avon River (optional)', zh: '雅芳河撑船（可选）' }, type: 'optional', cost: { en: '~$30 adult, ~$15 child', zh: '~$30/成人, ~$15/儿童' }, notes: { en: 'Relaxing, family-friendly', zh: '放松，适合全家' } },
          { time: '4:00 PM', emoji: '🎪', name: { en: 'Margaret Mahy Playground', zh: '玛格丽特·马希游乐场' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ MUST-DO! One of NZ\'s best playgrounds', zh: '⭐ 必去！新西兰最好的游乐场之一' } },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '6:00 PM', emoji: '🍽️', name: { en: 'Dinner', zh: '晚餐' }, type: 'normal', notes: { en: 'Riverside Market or nearby restaurant', zh: '河畔市场或附近餐厅' } },
          { time: '8:00 PM', emoji: '😴', name: { en: 'Early night – recover from travel', zh: '早点休息 – 恢复旅途疲劳' }, type: 'normal' },
        ],
      },
    ],
  },
  {
    day: 2,
    date: 'April 12, 2026',
    dateLabel: { en: 'Saturday, April 12', zh: '4月12日 周六' },
    title: { en: 'Kaikoura Adventure Day', zh: '凯库拉冒险日' },
    subtitle: { en: 'Day trip – 2.5 hrs each way', zh: '一日游 – 单程2.5小时' },
    base: { en: 'Base 1: Christchurch (Night 2 of 3)', zh: '基地1：基督城（第2晚，共3晚）' },
    sections: [
      {
        title: { en: 'Morning – Drive to Kaikoura', zh: '上午 – 驱车前往凯库拉' },
        activities: [
          { time: '7:00 AM', emoji: '🍳', name: { en: 'Early breakfast', zh: '早餐' }, type: 'normal', notes: { en: 'Pack day bags, swimwear!', zh: '准备日间背包，泳衣！' } },
          { time: '7:45 AM', emoji: '🚗', name: { en: 'Depart for Kaikoura', zh: '出发前往凯库拉' }, type: 'normal' },
          { time: '9:00 AM', emoji: '🏖️', name: { en: 'Goose Bay stop', zh: 'Goose Bay停留' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Beach walk, morning tea (30 min)', zh: '海滩散步，早茶（30分钟）' } },
          { time: '10:15 AM', emoji: '📍', name: { en: 'Arrive Kaikoura', zh: '抵达凯库拉' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Late Morning – EcoZip Adventures', zh: '上午晚些 – EcoZip探险' },
        activities: [
          { time: '11:00 AM', emoji: '🌲', name: { en: 'ECOZIP ADVENTURES KAIKOURA', zh: 'ECOZIP探险凯库拉' }, type: 'must-book', cost: { en: '~$1,100 total (Adults: ~$169×4, Kids 7+: ~$109×3)', zh: '总计约$1,100（成人：~$169×4，儿童7岁+：~$109×3）' }, notes: { en: '⭐ HIGHLIGHT! 8 ziplines through native forest, ~3 hours. Min age 7.', zh: '⭐ 重点项目！8条滑索穿越原生森林，约3小时。最低年龄7岁。' } },
        ],
      },
      {
        title: { en: 'Afternoon – Seal Kayaking', zh: '下午 – 海豹皮划艇' },
        activities: [
          { time: '2:30 PM', emoji: '🍽️', name: { en: 'Late lunch in Kaikoura', zh: '在凯库拉用午餐' }, type: 'normal' },
          { time: '3:30 PM', emoji: '🛶', name: { en: 'SEAL KAYAK KAIKOURA', zh: '凯库拉海豹皮划艇' }, type: 'must-book', cost: { en: '~$670 total (Adults: ~$115×4, tandem options for kids)', zh: '总计约$670（成人：~$115×4，儿童可用双人艇）' }, notes: { en: '⭐ Amazing wildlife! 2-2.5 hrs. Paddle with wild seals. Will get wet!', zh: '⭐ 精彩野生动物！2-2.5小时。与野生海豹同游。会弄湿！' } },
        ],
      },
      {
        title: { en: 'Evening – Return', zh: '晚上 – 返回' },
        activities: [
          { time: '6:30 PM', emoji: '🚗', name: { en: 'Depart for Christchurch', zh: '出发返回基督城' }, type: 'normal' },
          { time: '9:00 PM', emoji: '📍', name: { en: 'Arrive Christchurch', zh: '抵达基督城' }, type: 'normal' },
          { time: '9:15 PM', emoji: '🍽️', name: { en: 'Late dinner or takeaway', zh: '晚餐或外卖' }, type: 'normal', notes: { en: 'Long but awesome day!', zh: '漫长但精彩的一天！' } },
        ],
      },
    ],
    notes: { en: 'Very active day – kids will love it! Bring change of clothes for kayaking.', zh: '非常活跃的一天 – 孩子们会爱上它！带换洗衣服用于皮划艇。' },
  },
  {
    day: 3,
    date: 'April 13, 2026',
    dateLabel: { en: 'Sunday, April 13', zh: '4月13日 周日' },
    title: { en: 'Lake Tekapo & Mt Cook Day Trip', zh: '蒂卡波湖 & 库克山一日游' },
    subtitle: { en: 'Full day scenic loop (~7 hrs driving)', zh: '全天风景环线（约7小时驾车）' },
    base: { en: 'Base 1: Christchurch (Night 3 of 3)', zh: '基地1：基督城（第3晚，共3晚）' },
    sections: [
      {
        title: { en: 'Morning – Lake Tekapo', zh: '上午 – 蒂卡波湖' },
        activities: [
          { time: '6:30 AM', emoji: '🍳', name: { en: 'Very early breakfast', zh: '很早的早餐' }, type: 'normal', notes: { en: 'Pack lunch for the day', zh: '准备午餐' } },
          { time: '7:00 AM', emoji: '🚗', name: { en: 'Depart for Lake Tekapo', zh: '出发前往蒂卡波湖' }, type: 'normal', notes: { en: '3 hour drive', zh: '3小时车程' } },
          { time: '10:15 AM', emoji: '⛪', name: { en: 'Church of the Good Shepherd', zh: '善牧教堂' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Iconic small church, photo stop', zh: '标志性小教堂，拍照留念' } },
          { emoji: '🏞️', name: { en: 'Lake Tekapo lakefront walk', zh: '蒂卡波湖湖畔漫步' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '30 minutes', zh: '30分钟' } },
          { time: '11:00 AM', emoji: '☕', name: { en: 'Morning tea at village café', zh: '村庄咖啡馆早茶' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Midday – Mt Cook', zh: '中午 – 库克山' },
        activities: [
          { time: '11:45 AM', emoji: '🚗', name: { en: 'Drive to Mt Cook', zh: '驱车前往库克山' }, type: 'normal', notes: { en: '1 hour drive', zh: '1小时车程' } },
          { time: '1:00 PM', emoji: '🍽️', name: { en: 'Lunch at Mt Cook Village', zh: '在库克山村用午餐' }, type: 'normal' },
          { time: '2:00 PM', emoji: '🥾', name: { en: 'Hooker Valley Track (shortened)', zh: 'Hooker Valley步道（缩短版）' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ Stunning! Walk to 1st swing bridge (~1.5-2 hrs). 3 swing bridges – kids love!', zh: '⭐ 壮观！走到第1座吊桥（约1.5-2小时）。3座吊桥 – 孩子们喜爱！' } },
        ],
      },
      {
        title: { en: 'Afternoon/Evening – Return', zh: '下午/晚上 – 返回' },
        activities: [
          { time: '5:00 PM', emoji: '📷', name: { en: 'Lake Pukaki Viewpoint', zh: '普卡基湖观景台' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ Turquoise lake, amazing photos!', zh: '⭐ 碧绿湖水，绝美照片！' } },
          { time: '6:00 PM', emoji: '🚗', name: { en: 'Drive to Christchurch', zh: '驱车返回基督城' }, type: 'normal' },
          { time: '8:30 PM', emoji: '📍', name: { en: 'Arrive Christchurch', zh: '抵达基督城' }, type: 'normal' },
        ],
      },
    ],
    notes: { en: 'Very long day (~14 hours). Kids can sleep in car. Pack lots of snacks!', zh: '非常漫长的一天（约14小时）。孩子们可以在车上睡觉。多带零食！' },
  },
  {
    day: 4,
    date: 'April 14, 2026',
    dateLabel: { en: 'Monday, April 14', zh: '4月14日 周一' },
    title: { en: 'Travel to Queenstown', zh: '前往皇后镇' },
    subtitle: { en: 'Check out of Base 1', zh: '退出基地1' },
    base: { en: 'Base 2: Queenstown (Night 1 of 3)', zh: '基地2：皇后镇（第1晚，共3晚）' },
    sections: [
      {
        title: { en: 'Option A: Scenic Drive (Recommended)', zh: '方案A：风景驾车（推荐）' },
        activities: [
          { time: '8:00 AM', emoji: '🍳', name: { en: 'Breakfast & check out', zh: '早餐 & 退房' }, type: 'normal' },
          { time: '9:00 AM', emoji: '🚗', name: { en: 'Depart Christchurch', zh: '离开基督城' }, type: 'normal', notes: { en: '6 hour scenic drive', zh: '6小时风景驾车' } },
          { time: '11:30 AM', emoji: '☕', name: { en: 'Geraldine stop – morning tea', zh: '格拉尔丁停留 – 早茶' }, type: 'normal' },
          { time: '1:30 PM', emoji: '🍽️', name: { en: 'Lunch at Cromwell (fruit town)', zh: '在克伦威尔午餐（水果小镇）' }, type: 'normal' },
          { time: '3:00 PM', emoji: '🏨', name: { en: 'Arrive Queenstown, check in', zh: '抵达皇后镇，办理入住' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '5:30 PM', emoji: '🚶', name: { en: 'Queenstown waterfront walk', zh: '皇后镇湖畔漫步' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
          { time: '6:30 PM', emoji: '🌳', name: { en: 'Queenstown Gardens stroll', zh: '皇后镇花园漫步' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
          { time: '7:30 PM', emoji: '🍽️', name: { en: 'Dinner in town', zh: '市内晚餐' }, type: 'normal' },
        ],
      },
    ],
  },
  {
    day: 5,
    date: 'April 15, 2026',
    dateLabel: { en: 'Tuesday, April 15', zh: '4月15日 周二' },
    title: { en: 'Queenstown Adventure Day', zh: '皇后镇冒险日' },
    base: { en: 'Base 2: Queenstown (Night 2 of 3)', zh: '基地2：皇后镇（第2晚，共3晚）' },
    sections: [
      {
        title: { en: 'Morning – Skyline Gondola & Luge', zh: '上午 – 天际缆车 & 滑道' },
        activities: [
          { time: '9:00 AM', emoji: '🚡', name: { en: 'SKYLINE GONDOLA + LUGE', zh: '天际缆车 + 滑道' }, type: 'book-ahead', cost: { en: '~$463 total (Adults: $79×4, Kids 6-14: $49×2, Jasmine: $49)', zh: '总计约$463（成人：$79×4，6-14岁：$49×2，Jasmine：$49）' }, notes: { en: '⭐⭐⭐ MUST-DO! Gondola up Bob\'s Peak + 5 luge rides each. Allow 2-3 hours.', zh: '⭐⭐⭐ 必做！缆车上鲍勃峰 + 每人5次滑道。留2-3小时。' } },
        ],
      },
      {
        title: { en: 'Afternoon – Skydiving or Jet Boat', zh: '下午 – 跳伞或喷射快艇' },
        activities: [
          { time: '12:30 PM', emoji: '🍽️', name: { en: 'Lunch', zh: '午餐' }, type: 'normal', notes: { en: 'Skyline restaurant or town', zh: '天际餐厅或市区' } },
          { time: '2:00 PM', emoji: '🪂', name: { en: 'OPTION A: NZONE SKYDIVING (adults only)', zh: '方案A：NZONE跳伞（仅成人）' }, type: 'book-ahead', cost: { en: '~$439-539/person, Video: +$249', zh: '~$439-539/人，视频：+$249' }, notes: { en: '15,000ft tandem jump – 60 sec freefall! Min age 16.', zh: '15,000英尺双人跳伞 – 60秒自由落体！最低年龄16岁。' } },
          { emoji: '🚤', name: { en: 'OPTION B: Shotover Jet Boat (whole family)', zh: '方案B：肖特弗喷射艇（全家）' }, type: 'book-ahead', cost: { en: '~$155 adult, ~$90 child', zh: '~$155成人, ~$90儿童' }, notes: { en: 'Thrilling canyon ride. Age 3+.', zh: '刺激的峡谷之旅。3岁以上。' } },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '7:00 PM', emoji: '🍔', name: { en: 'Dinner – Fergburger (famous!)', zh: '晚餐 – Fergburger（超有名！）' }, type: 'normal' },
          { time: '8:30 PM', emoji: '🌊', name: { en: 'Lakefront walk', zh: '湖畔漫步' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
        ],
      },
    ],
  },
  {
    day: 6,
    date: 'April 16, 2026',
    dateLabel: { en: 'Wednesday, April 16', zh: '4月16日 周三' },
    title: { en: 'Glenorchy & Paradise Day Trip', zh: '格林诺奇 & 天堂谷一日游' },
    subtitle: { en: 'Day trip – 45 min each way', zh: '一日游 – 单程45分钟' },
    base: { en: 'Base 2: Queenstown (Night 3 of 3)', zh: '基地2：皇后镇（第3晚，共3晚）' },
    sections: [
      {
        title: { en: 'Morning – Glenorchy Scenic Drive', zh: '上午 – 格林诺奇风景驾车' },
        activities: [
          { time: '9:30 AM', emoji: '🚗', name: { en: 'Scenic drive to Glenorchy', zh: '风景驾车前往格林诺奇' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ One of world\'s most beautiful drives! Photo stops: Bennett\'s Bluff, Bob\'s Cove', zh: '⭐ 世界最美公路之一！拍照点：Bennett\'s Bluff, Bob\'s Cove' } },
        ],
      },
      {
        title: { en: 'Midday – Glenorchy & Paradise', zh: '中午 – 格林诺奇 & 天堂谷' },
        activities: [
          { time: '11:00 AM', emoji: '🚶', name: { en: 'Glenorchy Walkway', zh: '格林诺奇步道' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Easy lagoon walk, kid-friendly', zh: '轻松的泻湖步道，适合儿童' } },
          { time: '12:00 PM', emoji: '🍽️', name: { en: 'Lunch at Glenorchy Trading Post', zh: '在格林诺奇贸易所午餐' }, type: 'normal' },
          { time: '1:00 PM', emoji: '🌲', name: { en: 'Drive to Paradise (Lord of the Rings!)', zh: '驾车前往天堂谷（《指环王》拍摄地！）' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '25 min gravel road. Stunning beech forest. LOTR locations!', zh: '25分钟砾石路。壮观的山毛榉森林。指环王拍摄地！' } },
        ],
      },
      {
        title: { en: 'Afternoon – Return to Queenstown', zh: '下午 – 返回皇后镇' },
        activities: [
          { time: '3:00 PM', emoji: '🚗', name: { en: 'Return to Queenstown', zh: '返回皇后镇' }, type: 'normal' },
          { time: '5:00 PM', emoji: '🥝', name: { en: 'Kiwi Birdlife Park (optional)', zh: '奇异鸟生态公园（可选）' }, type: 'optional', cost: { en: '~$52 adult, ~$22 child. Total: ~$274', zh: '~$52成人, ~$22儿童。总计：~$274' }, notes: { en: 'See native kiwi birds! Kids love this.', zh: '看原生奇异鸟！孩子们喜爱。' } },
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Dinner', zh: '晚餐' }, type: 'normal' },
        ],
      },
    ],
  },
  {
    day: 7,
    date: 'April 17, 2026',
    dateLabel: { en: 'Thursday, April 17', zh: '4月17日 周四' },
    title: { en: 'Wanaka & Travel to Christchurch', zh: '瓦纳卡 & 返回基督城' },
    subtitle: { en: 'Check out of Base 2', zh: '退出基地2' },
    base: { en: 'Base 3: Christchurch (Night 1 of 2)', zh: '基地3：基督城（第1晚，共2晚）' },
    sections: [
      {
        title: { en: 'Morning – Wanaka', zh: '上午 – 瓦纳卡' },
        activities: [
          { time: '7:30 AM', emoji: '🍳', name: { en: 'Early breakfast & check out', zh: '早餐 & 退房' }, type: 'normal' },
          { time: '9:30 AM', emoji: '📷', name: { en: 'Cardrona Hotel photo stop', zh: 'Cardrona酒店拍照' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Historic pub', zh: '历史悠久的酒吧' } },
          { time: '10:15 AM', emoji: '🧩', name: { en: 'PUZZLING WORLD', zh: '迷惑世界' }, type: 'book-ahead', cost: { en: '~$154 total (Adults: $25×4, Kids: $18×3)', zh: '总计约$154（成人：$25×4，儿童：$18×3）' }, notes: { en: '⭐ Kids LOVE this! Great Maze + Illusion Rooms. Allow 1.5-2 hours.', zh: '⭐ 孩子们超爱！大迷宫 + 幻觉房间。留1.5-2小时。' } },
          { time: '1:00 PM', emoji: '📷', name: { en: 'That Wanaka Tree', zh: '瓦纳卡之树' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'NZ\'s most photographed tree! Quick photo stop.', zh: '新西兰最上镜的树！快速拍照。' } },
        ],
      },
      {
        title: { en: 'Afternoon/Evening – Drive to Christchurch', zh: '下午/晚上 – 驱车至基督城' },
        activities: [
          { time: '2:00 PM', emoji: '🚗', name: { en: 'Depart for Christchurch', zh: '出发前往基督城' }, type: 'normal', notes: { en: '5.5 hour drive', zh: '5.5小时车程' } },
          { time: '7:30 PM', emoji: '🏨', name: { en: 'Arrive Christchurch, check in', zh: '抵达基督城，办理入住' }, type: 'normal', notes: { en: 'Late arrival', zh: '晚到' } },
          { time: '8:00 PM', emoji: '🍽️', name: { en: 'Dinner – casual/takeaway', zh: '晚餐 – 随意/外卖' }, type: 'normal' },
        ],
      },
    ],
  },
  {
    day: 8,
    date: 'April 18, 2026',
    dateLabel: { en: 'Friday, April 18', zh: '4月18日 周五' },
    title: { en: 'Christchurch Exploration', zh: '基督城探索' },
    base: { en: 'Base 3: Christchurch (Night 2 of 2)', zh: '基地3：基督城（第2晚，共2晚）' },
    sections: [
      {
        title: { en: 'Morning – Museums', zh: '上午 – 博物馆' },
        activities: [
          { time: '9:00 AM', emoji: '😴', name: { en: 'Sleep in! Leisurely breakfast', zh: '睡懒觉！悠闲早餐' }, type: 'normal' },
          { time: '10:30 AM', emoji: '🏛️', name: { en: 'Canterbury Museum', zh: '坎特伯雷博物馆' }, type: 'free', cost: { en: 'FREE (donation)', zh: '免费（捐款）' }, notes: { en: 'Antarctic gallery, Maori exhibits, Discovery Centre for kids', zh: '南极展览馆，毛利展览，儿童发现中心' } },
        ],
      },
      {
        title: { en: 'Afternoon – Optional Activities (Pick One)', zh: '下午 – 可选活动（任选一个）' },
        activities: [
          { time: '12:30 PM', emoji: '🍽️', name: { en: 'Lunch at Riverside Market', zh: '在河畔市场午餐' }, type: 'normal' },
          { emoji: '🚋', name: { en: 'Christchurch Tram (optional)', zh: '基督城电车（可选）' }, type: 'optional', cost: { en: '~$30 adult, ~$15 child', zh: '~$30成人, ~$15儿童' }, notes: { en: 'Historic city tour ~50 min', zh: '历史城市游览约50分钟' } },
          { emoji: '🧊', name: { en: 'Antarctic Centre (optional)', zh: '南极中心（可选）' }, type: 'optional', cost: { en: '~$65 adult, ~$25 child', zh: '~$65成人, ~$25儿童' }, notes: { en: 'Storm chamber (-18°C!), penguin encounter, very interactive', zh: '暴风雪体验（-18°C！），企鹅体验，非常互动' } },
          { emoji: '🦘', name: { en: 'Willowbank Wildlife (optional)', zh: '柳堤野生动物园（可选）' }, type: 'optional', cost: { en: '~$35 adult, ~$15 child', zh: '~$35成人, ~$15儿童' }, notes: { en: 'Native NZ animals (kiwi, tuatara, kea)', zh: '新西兰原生动物（奇异鸟、楔齿蜥、啄羊鹦鹉）' } },
        ],
      },
      {
        title: { en: 'Evening – Farewell Dinner', zh: '晚上 – 告别晚餐' },
        activities: [
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Farewell dinner (all 7 people)', zh: '告别晚餐（全体7人）' }, type: 'normal', notes: { en: 'Book a nice restaurant in advance', zh: '提前预订好餐厅' } },
          { time: '9:00 PM', emoji: '🧳', name: { en: 'Pack for departures', zh: '为出发打包行李' }, type: 'normal', notes: { en: 'Rose\'s family leaves tomorrow', zh: 'Rose一家明天出发' } },
        ],
      },
    ],
  },
  {
    day: 9,
    date: 'April 19, 2026',
    dateLabel: { en: 'Saturday, April 19', zh: '4月19日 周六' },
    title: { en: "Rose's Family Departure", zh: 'Rose一家出发' },
    base: { en: 'Base 3: Christchurch', zh: '基地3：基督城' },
    sections: [
      {
        title: { en: 'Morning – Final Activities (All 7)', zh: '上午 – 最后活动（全体7人）' },
        activities: [
          { time: '9:00 AM', emoji: '🍳', name: { en: 'Breakfast together – last meal as group', zh: '一起早餐 – 最后一次团体用餐' }, type: 'normal' },
          { time: '10:00 AM', emoji: '🎨', name: { en: 'Arts Centre Markets', zh: '艺术中心市集' }, type: 'free', cost: { en: 'FREE entry', zh: '免费入场' }, notes: { en: 'Saturdays only! Local crafts, souvenirs.', zh: '仅限周六！本地工艺品，纪念品。' } },
          { time: '12:00 PM', emoji: '🍽️', name: { en: 'Final lunch together', zh: '最后的午餐' }, type: 'normal' },
        ],
      },
      {
        title: { en: "Rose's Family Departure", zh: 'Rose一家出发' },
        activities: [
          { time: '2:30 PM', emoji: '🚗', name: { en: 'Head to airport – return JUCY campervan', zh: '前往机场 – 归还JUCY房车' }, type: 'normal', notes: { en: 'Return campervan by 4:00 PM', zh: '4:00 PM前归还房车' } },
          { time: '5:45 PM', emoji: '✈️', name: { en: 'DEPART Christchurch (EK413)', zh: '基督城起飞（EK413）' }, type: 'normal', notes: { en: 'Rose, Ricky, Johnny, Jasmine → Sydney 7:05 PM', zh: 'Rose, Ricky, Johnny, Jasmine → 悉尼 7:05 PM' } },
        ],
      },
      {
        title: { en: "Chris's Family Evening", zh: 'Chris一家晚上' },
        activities: [
          { time: '6:00 PM', emoji: '🍽️', name: { en: 'Relaxed dinner – Chris, Yuyu, Jerry', zh: '轻松晚餐 – Chris, Yuyu, Jerry' }, type: 'normal' },
        ],
      },
    ],
  },
  {
    day: 10,
    date: 'April 20, 2026',
    dateLabel: { en: 'Sunday, April 20', zh: '4月20日 周日' },
    title: { en: "Chris's Family Extra Day & Departure", zh: 'Chris一家额外一天 & 出发' },
    base: { en: 'Base 3: Christchurch (Night 3)', zh: '基地3：基督城（第3晚）' },
    sections: [
      {
        title: { en: 'Option 1: Akaroa Day Trip (Recommended)', zh: '方案1：阿卡罗阿一日游（推荐）' },
        activities: [
          { time: '9:00 AM', emoji: '🚗', name: { en: 'Drive to Akaroa', zh: '驾车前往阿卡罗阿' }, type: 'normal', notes: { en: '1.5 hour drive', zh: '1.5小时车程' } },
          { time: '11:00 AM', emoji: '🐬', name: { en: 'Akaroa Harbour Cruise', zh: '阿卡罗阿港湾游览' }, type: 'book-ahead', cost: { en: '~$205 total (Adults: $85×2, Child: $35×1)', zh: '总计约$205（成人：$85×2，儿童：$35×1）' }, notes: { en: 'See Hector\'s dolphins! World\'s smallest dolphins. 2 hour cruise.', zh: '看赫克托海豚！世界最小的海豚。2小时游览。' } },
          { time: '1:00 PM', emoji: '🍽️', name: { en: 'Lunch at French bakery/café', zh: '在法式面包店/咖啡馆午餐' }, type: 'normal' },
          { time: '2:00 PM', emoji: '🚗', name: { en: 'Return to Christchurch', zh: '返回基督城' }, type: 'normal' },
        ],
      },
      {
        title: { en: "Chris's Family Departure", zh: 'Chris一家出发' },
        activities: [
          { time: '3:00 PM', emoji: '🚗', name: { en: 'Head to airport', zh: '前往机场' }, type: 'normal' },
          { time: '7:00 PM', emoji: '✈️', name: { en: 'DEPART Christchurch', zh: '基督城起飞' }, type: 'normal', notes: { en: 'Chris, Yuyu, Jerry → Sydney ~8:00 PM', zh: 'Chris, Yuyu, Jerry → 悉尼 约8:00 PM' } },
        ],
      },
    ],
  },
];
