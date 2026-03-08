import type { ItineraryDay } from '@/types';

export const ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    date: 'April 11, 2026',
    dateLabel: { en: 'Friday, April 11', zh: '4月11日 周五' },
    title: { en: 'Arrival & Drive to Kaikoura', zh: '抵达并驱车前往凯库拉' },
    base: { en: 'Base 1: Kaikoura (Night 1 of 3)', zh: '基地1：凯库拉（第1晚，共3晚）' },
    sections: [
      {
        title: { en: 'Morning/Afternoon – Arrival', zh: '上午/下午 – 抵达' },
        activities: [
          { time: '7:50 AM', emoji: '✈️', name: { en: 'Depart Sydney (EK412)', zh: '悉尼出发（EK412）' }, type: 'normal', notes: { en: 'Sydney time – Emirates flight', zh: '悉尼时间 – 阿联酋航空' } },
          { time: '12:55 PM', emoji: '✈️', name: { en: 'Arrive Christchurch', zh: '抵达基督城' }, type: 'normal', notes: { en: 'NZ time (2 hrs ahead of Sydney), 3h 5m flight', zh: '新西兰时间（比悉尼快2小时），3小时5分钟' } },
          { time: '1:30 PM', emoji: '🚗', name: { en: 'Pick up JUCY Campervan', zh: '取JUCY房车' }, type: 'normal', notes: { en: 'Booking #CHC-140959, Big Kahuna 6-berth (allow 30 min for baggage/customs)', zh: '预订号#CHC-140959，Big Kahuna 6铺位（留30分钟取行李/过海关）' } },
          { time: '2:00 PM', emoji: '🍽️', name: { en: 'Quick lunch near airport', zh: '机场附近简餐' }, type: 'normal', notes: { en: 'Grab something quick before the drive', zh: '出发前快速吃点东西' } },
        ],
      },
      {
        title: { en: 'Afternoon – Drive to Kaikoura', zh: '下午 – 驱车前往凯库拉' },
        activities: [
          { time: '2:30 PM', emoji: '🚗', name: { en: 'Depart for Kaikoura', zh: '出发前往凯库拉' }, type: 'normal', notes: { en: '2.5 hour scenic coastal drive', zh: '2.5小时风景海岸线驾车' } },
          { time: '3:30 PM', emoji: '🏖️', name: { en: 'Optional: Goose Bay stop', zh: '可选：Goose Bay停留' }, type: 'optional', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Quick beach break, stretch legs (20 min)', zh: '快速海滩休息，舒展身体（20分钟）' } },
          { time: '5:00 PM', emoji: '📍', name: { en: 'Arrive Kaikoura', zh: '抵达凯库拉' }, type: 'normal' },
          { time: '5:15 PM', emoji: '🏕️', name: { en: 'Check into campground', zh: '入住营地' }, type: 'normal', notes: { en: 'Set up campervans, settle in', zh: '停好房车，安顿下来' } },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '6:00 PM', emoji: '🚶', name: { en: 'Kaikoura waterfront walk', zh: '凯库拉海滨漫步' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Beautiful sunset views, spot seals on rocks', zh: '美丽的日落，岩石上可见海豹' } },
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Dinner in Kaikoura', zh: '在凯库拉晚餐' }, type: 'normal', notes: { en: 'Try local crayfish! Or cook at camp kitchen', zh: '尝试当地龙虾！或在营地厨房做饭' } },
          { time: '9:00 PM', emoji: '😴', name: { en: 'Early night – recover from travel', zh: '早点休息 – 恢复旅途疲劳' }, type: 'normal' },
        ],
      },
    ],
  },
  {
    day: 2,
    date: 'April 12, 2026',
    dateLabel: { en: 'Saturday, April 12', zh: '4月12日 周六' },
    title: { en: 'Kaikoura Adventure Day', zh: '凯库拉冒险日' },
    base: { en: 'Base 1: Kaikoura (Night 2 of 3)', zh: '基地1：凯库拉（第2晚，共3晚）' },
    sections: [
      {
        title: { en: 'Morning – EcoZip Adventures', zh: '上午 – EcoZip探险' },
        activities: [
          { time: '8:00 AM', emoji: '🍳', name: { en: 'Breakfast at camp', zh: '营地早餐' }, type: 'normal', notes: { en: 'Pack day bags, wear comfortable clothes!', zh: '准备日间背包，穿舒适衣物！' } },
          { time: '9:30 AM', emoji: '🌲', name: { en: 'ECOZIP ADVENTURES KAIKOURA', zh: 'ECOZIP探险凯库拉' }, type: 'must-book', cost: { en: '~$1,100 total (Adults: ~$169×4, Kids 7+: ~$109×3)', zh: '总计约$1,100（成人：~$169×4，儿童7岁+：~$109×3）' }, notes: { en: '⭐ HIGHLIGHT! 8 ziplines through native forest, ~3 hours. Min age 7.', zh: '⭐ 重点项目！8条滑索穿越原生森林，约3小时。最低年龄7岁。' } },
          { time: '12:30 PM', emoji: '🍽️', name: { en: 'Lunch in Kaikoura', zh: '在凯库拉午餐' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Afternoon – Seal Kayaking', zh: '下午 – 海豹皮划艇' },
        activities: [
          { time: '2:00 PM', emoji: '🛶', name: { en: 'SEAL KAYAK KAIKOURA', zh: '凯库拉海豹皮划艇' }, type: 'must-book', cost: { en: '~$670 total (Adults: ~$115×4, tandem options for kids)', zh: '总计约$670（成人：~$115×4，儿童可用双人艇）' }, notes: { en: '⭐ Amazing wildlife! 2-2.5 hrs. Paddle with wild seals. Will get wet!', zh: '⭐ 精彩野生动物！2-2.5小时。与野生海豹同游。会弄湿！' } },
          { time: '4:30 PM', emoji: '🚿', name: { en: 'Return to camp, shower & change', zh: '返回营地，淋浴更衣' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '5:30 PM', emoji: '🦭', name: { en: 'Kaikoura Peninsula Walkway (seals!)', zh: '凯库拉半岛步道（海豹！）' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Easy 1 hr walk, seal colony viewing', zh: '轻松1小时步行，观赏海豹群' } },
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Dinner', zh: '晚餐' }, type: 'normal', notes: { en: 'Celebrate an awesome day!', zh: '庆祝精彩的一天！' } },
        ],
      },
    ],
    notes: { en: 'Very active day – kids will love it! Bring change of clothes for kayaking.', zh: '非常活跃的一天 – 孩子们会爱上它！带换洗衣服用于皮划艇。' },
  },
  {
    day: 3,
    date: 'April 13, 2026',
    dateLabel: { en: 'Sunday, April 13', zh: '4月13日 周日' },
    title: { en: 'Relaxed Kaikoura Day', zh: '凯库拉休闲日' },
    base: { en: 'Base 1: Kaikoura (Night 3 of 3)', zh: '基地1：凯库拉（第3晚，共3晚）' },
    sections: [
      {
        title: { en: 'Morning – Whale Watching or Beach Time', zh: '上午 – 观鲸或海滩时光' },
        activities: [
          { time: '9:00 AM', emoji: '😴', name: { en: 'Sleep in! Leisurely breakfast', zh: '睡懒觉！悠闲早餐' }, type: 'normal' },
          { time: '10:30 AM', emoji: '🐋', name: { en: 'OPTION: Whale Watch Kaikoura', zh: '选项：凯库拉观鲸' }, type: 'optional', cost: { en: '~$195/adult, ~$80/child (3-15). Total: ~$1,020', zh: '~$195/成人, ~$80/儿童(3-15岁)。总计：~$1,020' }, notes: { en: 'World-famous! 2.5 hr tour. See sperm whales, dolphins, albatross.', zh: '世界闻名！2.5小时游览。观赏抹香鲸、海豚、信天翁。' } },
          { emoji: '🏖️', name: { en: 'OR: Beach & rock pool exploring', zh: '或：海滩和潮池探索' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Kids love the rock pools!', zh: '孩子们喜欢潮池！' } },
        ],
      },
      {
        title: { en: 'Afternoon – Local Exploration', zh: '下午 – 当地探索' },
        activities: [
          { time: '1:00 PM', emoji: '🍽️', name: { en: 'Lunch', zh: '午餐' }, type: 'normal' },
          { time: '2:30 PM', emoji: '🚶', name: { en: 'Kaikoura Lavender Farm (optional)', zh: '凯库拉薰衣草农场（可选）' }, type: 'optional', cost: { en: '~$10/adult', zh: '~$10/成人' }, notes: { en: 'Beautiful gardens, café, lavender products', zh: '美丽花园，咖啡厅，薰衣草产品' } },
          { emoji: '🦞', name: { en: 'OR: Kaikoura Seafood BBQ', zh: '或：凯库拉海鲜BBQ' }, type: 'optional', notes: { en: 'Famous roadside crayfish stall!', zh: '著名路边龙虾摊！' } },
        ],
      },
      {
        title: { en: 'Evening – Last Night in Kaikoura', zh: '晚上 – 凯库拉最后一晚' },
        activities: [
          { time: '5:00 PM', emoji: '🌅', name: { en: 'Sunset at Point Kean', zh: 'Point Kean看日落' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Seal colony + golden hour photos', zh: '海豹群 + 黄金时段拍照' } },
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Farewell dinner in Kaikoura', zh: '凯库拉告别晚餐' }, type: 'normal' },
          { time: '9:00 PM', emoji: '🧳', name: { en: 'Pack up – early start tomorrow', zh: '收拾行李 – 明天早起' }, type: 'normal' },
        ],
      },
    ],
    notes: { en: 'Relaxed recovery day after big adventure. Whale watching optional but incredible if weather is good!', zh: '大冒险后的轻松恢复日。天气好的话观鲸很棒！' },
  },
  {
    day: 4,
    date: 'April 14, 2026',
    dateLabel: { en: 'Monday, April 14', zh: '4月14日 周一' },
    title: { en: 'Scenic Drive to Mt Cook', zh: '风景驾车至库克山' },
    subtitle: { en: 'Check out of Base 1, via Lake Tekapo', zh: '退出基地1，途经蒂卡波湖' },
    base: { en: 'Base 2: Mt Cook Area (Night 1 of 2)', zh: '基地2：库克山地区（第1晚，共2晚）' },
    sections: [
      {
        title: { en: 'Morning – Depart Kaikoura', zh: '上午 – 离开凯库拉' },
        activities: [
          { time: '7:30 AM', emoji: '🍳', name: { en: 'Early breakfast & check out', zh: '早餐 & 退房' }, type: 'normal' },
          { time: '8:30 AM', emoji: '🚗', name: { en: 'Depart for Mt Cook', zh: '出发前往库克山' }, type: 'normal', notes: { en: '~5 hour drive via Tekapo (with stops)', zh: '途经蒂卡波约5小时（含停留）' } },
        ],
      },
      {
        title: { en: 'Midday – Lake Tekapo', zh: '中午 – 蒂卡波湖' },
        activities: [
          { time: '11:30 AM', emoji: '⛪', name: { en: 'Church of the Good Shepherd', zh: '善牧教堂' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ Iconic! Small church, stunning lake backdrop', zh: '⭐ 标志性景点！小教堂，壮观湖景' } },
          { emoji: '🏞️', name: { en: 'Lake Tekapo lakefront walk', zh: '蒂卡波湖湖畔漫步' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '20-30 minutes', zh: '20-30分钟' } },
          { time: '12:30 PM', emoji: '🍽️', name: { en: 'Lunch at Lake Tekapo', zh: '蒂卡波湖午餐' }, type: 'normal', notes: { en: 'Kohan Japanese Restaurant or local café', zh: 'Kohan日本餐厅或当地咖啡馆' } },
        ],
      },
      {
        title: { en: 'Afternoon – Arrive Mt Cook', zh: '下午 – 抵达库克山' },
        activities: [
          { time: '1:30 PM', emoji: '🚗', name: { en: 'Continue to Mt Cook', zh: '继续前往库克山' }, type: 'normal', notes: { en: '1.5 hour drive', zh: '1.5小时车程' } },
          { time: '2:00 PM', emoji: '📷', name: { en: 'Lake Pukaki Viewpoint', zh: '普卡基湖观景台' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ Turquoise lake, Mt Cook backdrop – amazing photos!', zh: '⭐ 碧绿湖水，库克山背景 – 绝美照片！' } },
          { time: '3:30 PM', emoji: '🏕️', name: { en: 'Arrive Glentanner, check in', zh: '抵达Glentanner，办理入住' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '4:30 PM', emoji: '🚶', name: { en: 'Short walk around Glentanner', zh: 'Glentanner周边短途步行' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
          { time: '6:30 PM', emoji: '🍽️', name: { en: 'Dinner at Glentanner restaurant or camp cook', zh: 'Glentanner餐厅或营地做饭' }, type: 'normal' },
          { time: '9:00 PM', emoji: '⭐', name: { en: 'STARGAZING!', zh: '观星！' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐⭐ Dark Sky Reserve – incredible stars! Bring warm layers.', zh: '⭐⭐ 暗夜星空保护区 – 星空绝美！带保暖衣物。' } },
        ],
      },
    ],
    notes: { en: 'Long but scenic driving day. Lake Tekapo and Pukaki are stunning! Stargazing is a must if clear.', zh: '驾车时间长但风景优美。蒂卡波湖和普卡基湖壮观！晴天一定要观星。' },
  },
  {
    day: 5,
    date: 'April 15, 2026',
    dateLabel: { en: 'Tuesday, April 15', zh: '4月15日 周二' },
    title: { en: 'Mt Cook Exploration', zh: '库克山探索' },
    base: { en: 'Base 2: Mt Cook Area (Night 2 of 2)', zh: '基地2：库克山地区（第2晚，共2晚）' },
    sections: [
      {
        title: { en: 'Morning – Hooker Valley Track', zh: '上午 – Hooker Valley步道' },
        activities: [
          { time: '8:00 AM', emoji: '🍳', name: { en: 'Early breakfast', zh: '早餐' }, type: 'normal', notes: { en: 'Pack lunch, snacks, plenty of water!', zh: '准备午餐、零食、充足的水！' } },
          { time: '9:00 AM', emoji: '🚗', name: { en: 'Drive to Hooker Valley carpark', zh: '驱车至Hooker Valley停车场' }, type: 'normal', notes: { en: '25 min from Glentanner', zh: '从Glentanner出发25分钟' } },
          { time: '9:30 AM', emoji: '🥾', name: { en: 'HOOKER VALLEY TRACK', zh: 'HOOKER VALLEY步道' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐⭐⭐ MUST-DO! 10km return, 3-4 hrs. 3 swing bridges, glacier lake at end. Kids LOVE the swing bridges!', zh: '⭐⭐⭐ 必做！往返10公里，3-4小时。3座吊桥，终点冰川湖。孩子们超爱吊桥！' } },
          { time: '1:30 PM', emoji: '🍽️', name: { en: 'Picnic lunch at glacier lake', zh: '冰川湖边野餐' }, type: 'normal', notes: { en: 'Amazing views of Mt Cook and icebergs!', zh: '库克山和冰山的绝美景色！' } },
        ],
      },
      {
        title: { en: 'Afternoon – Mt Cook Village', zh: '下午 – 库克山村' },
        activities: [
          { time: '3:00 PM', emoji: '🏨', name: { en: 'Mt Cook Village exploration', zh: '库克山村探索' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Sir Edmund Hillary Alpine Centre (museum), café', zh: '埃德蒙·希拉里爵士高山中心（博物馆）、咖啡厅' } },
          { emoji: '🚁', name: { en: 'OPTION: Glacier helicopter tour', zh: '选项：冰川直升机游览' }, type: 'optional', cost: { en: '~$350-500/person', zh: '~$350-500/人' }, notes: { en: 'Snow landing on glacier! Once in a lifetime. Book via Glentanner.', zh: '冰川雪地着陆！一生一次的体验。通过Glentanner预订。' } },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '5:00 PM', emoji: '🚗', name: { en: 'Return to Glentanner', zh: '返回Glentanner' }, type: 'normal' },
          { time: '6:00 PM', emoji: '🍽️', name: { en: 'Dinner', zh: '晚餐' }, type: 'normal' },
          { time: '8:30 PM', emoji: '⭐', name: { en: 'More stargazing (last night here!)', zh: '继续观星（在这里的最后一晚！）' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
          { time: '9:30 PM', emoji: '🧳', name: { en: 'Pack up – heading to Queenstown tomorrow', zh: '收拾行李 – 明天前往皇后镇' }, type: 'normal' },
        ],
      },
    ],
    notes: { en: 'Hooker Valley is THE highlight of the trip for many! Weather-dependent – have a backup plan.', zh: 'Hooker Valley是许多人的旅行亮点！取决于天气 – 准备备选方案。' },
  },
  {
    day: 6,
    date: 'April 16, 2026',
    dateLabel: { en: 'Wednesday, April 16', zh: '4月16日 周三' },
    title: { en: 'Drive to Queenstown', zh: '驱车前往皇后镇' },
    subtitle: { en: 'Check out of Base 2', zh: '退出基地2' },
    base: { en: 'Base 3: Queenstown (Night 1 of 3/4)', zh: '基地3：皇后镇（第1晚，共3/4晚）' },
    sections: [
      {
        title: { en: 'Morning – Scenic Drive', zh: '上午 – 风景驾车' },
        activities: [
          { time: '8:30 AM', emoji: '🍳', name: { en: 'Breakfast & check out', zh: '早餐 & 退房' }, type: 'normal' },
          { time: '9:30 AM', emoji: '🚗', name: { en: 'Depart for Queenstown', zh: '出发前往皇后镇' }, type: 'normal', notes: { en: '~3.5 hour scenic drive via Lindis Pass', zh: '途经Lindis Pass约3.5小时风景驾车' } },
          { time: '11:00 AM', emoji: '📷', name: { en: 'Lindis Pass summit stop', zh: 'Lindis Pass峰顶停留' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Tussock landscapes, photo opportunity', zh: '金色草地景观，拍照机会' } },
        ],
      },
      {
        title: { en: 'Midday – Cromwell Fruit Town', zh: '中午 – 克伦威尔水果小镇' },
        activities: [
          { time: '12:30 PM', emoji: '🍎', name: { en: 'Cromwell Heritage Precinct', zh: '克伦威尔历史区' }, type: 'free', cost: { en: 'FREE (shopping extra)', zh: '免费（购物另计）' }, notes: { en: 'Historic gold mining town, famous fruit stalls', zh: '历史淘金小镇，著名水果摊' } },
          { time: '1:00 PM', emoji: '🍽️', name: { en: 'Lunch at Cromwell', zh: '在克伦威尔午餐' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Afternoon – Arrive Queenstown', zh: '下午 – 抵达皇后镇' },
        activities: [
          { time: '2:30 PM', emoji: '🏕️', name: { en: 'Arrive Queenstown, check in', zh: '抵达皇后镇，办理入住' }, type: 'normal' },
          { time: '3:30 PM', emoji: '🚶', name: { en: 'Queenstown waterfront walk', zh: '皇后镇湖畔漫步' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
          { time: '4:30 PM', emoji: '🌳', name: { en: 'Queenstown Gardens', zh: '皇后镇花园' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Frisbee golf, playground, beautiful views', zh: '飞盘高尔夫，游乐场，美景' } },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '6:30 PM', emoji: '🍔', name: { en: 'Dinner – Fergburger (famous!)', zh: '晚餐 – Fergburger（超有名！）' }, type: 'normal', notes: { en: 'Iconic Queenstown burger joint – expect a queue!', zh: '皇后镇标志性汉堡店 – 可能要排队！' } },
          { time: '8:00 PM', emoji: '🌊', name: { en: 'Lakefront stroll', zh: '湖畔漫步' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
        ],
      },
    ],
  },
  {
    day: 7,
    date: 'April 17, 2026',
    dateLabel: { en: 'Thursday, April 17', zh: '4月17日 周四' },
    title: { en: 'Queenstown Adventure Day', zh: '皇后镇冒险日' },
    base: { en: 'Base 3: Queenstown (Night 2 of 3/4)', zh: '基地3：皇后镇（第2晚，共3/4晚）' },
    sections: [
      {
        title: { en: 'Morning – Skyline Gondola & Luge', zh: '上午 – 天际缆车 & 滑道' },
        activities: [
          { time: '9:00 AM', emoji: '🍳', name: { en: 'Breakfast', zh: '早餐' }, type: 'normal' },
          { time: '10:00 AM', emoji: '🚡', name: { en: 'SKYLINE GONDOLA + LUGE', zh: '天际缆车 + 滑道' }, type: 'book-ahead', cost: { en: '~$463 total (Adults: $79×4, Kids 6-14: $49×2, Jasmine: $49)', zh: '总计约$463（成人：$79×4，6-14岁：$49×2，Jasmine：$49）' }, notes: { en: '⭐⭐⭐ MUST-DO! Gondola up Bob\'s Peak + 5 luge rides each. Allow 2-3 hours.', zh: '⭐⭐⭐ 必做！缆车上鲍勃峰 + 每人5次滑道。留2-3小时。' } },
          { time: '1:00 PM', emoji: '🍽️', name: { en: 'Lunch at Skyline or town', zh: '在Skyline或镇上午餐' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Afternoon – Adventure Options', zh: '下午 – 冒险选项' },
        activities: [
          { time: '2:30 PM', emoji: '🪂', name: { en: 'OPTION A: NZONE SKYDIVING (adults only)', zh: '方案A：NZONE跳伞（仅成人）' }, type: 'book-ahead', cost: { en: '~$439-539/person, Video: +$249', zh: '~$439-539/人，视频：+$249' }, notes: { en: '15,000ft tandem jump – 60 sec freefall! Min age 16.', zh: '15,000英尺双人跳伞 – 60秒自由落体！最低年龄16岁。' } },
          { emoji: '🚤', name: { en: 'OPTION B: Shotover Jet Boat (whole family)', zh: '方案B：肖特弗喷射艇（全家）' }, type: 'book-ahead', cost: { en: '~$155 adult, ~$90 child', zh: '~$155成人, ~$90儿童' }, notes: { en: 'Thrilling canyon ride. Age 3+.', zh: '刺激的峡谷之旅。3岁以上。' } },
          { emoji: '🥝', name: { en: 'OPTION C: Kiwi Birdlife Park', zh: '方案C：奇异鸟生态公园' }, type: 'optional', cost: { en: '~$52 adult, ~$22 child', zh: '~$52成人, ~$22儿童' }, notes: { en: 'See native kiwi birds! Great for kids.', zh: '看原生奇异鸟！适合孩子。' } },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '6:00 PM', emoji: '🍽️', name: { en: 'Dinner in town', zh: '镇上晚餐' }, type: 'normal' },
          { time: '8:00 PM', emoji: '🌃', name: { en: 'Night walk along the lake', zh: '湖边夜游' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
        ],
      },
    ],
  },
  {
    day: 8,
    date: 'April 18, 2026',
    dateLabel: { en: 'Friday, April 18', zh: '4月18日 周五' },
    title: { en: 'Glenorchy & Paradise Day Trip', zh: '格林诺奇 & 天堂谷一日游' },
    subtitle: { en: 'Day trip – 45 min each way', zh: '一日游 – 单程45分钟' },
    base: { en: 'Base 3: Queenstown (Night 3 of 3/4)', zh: '基地3：皇后镇（第3晚，共3/4晚）' },
    sections: [
      {
        title: { en: 'Morning – Glenorchy Scenic Drive', zh: '上午 – 格林诺奇风景驾车' },
        activities: [
          { time: '9:00 AM', emoji: '🍳', name: { en: 'Breakfast', zh: '早餐' }, type: 'normal' },
          { time: '10:00 AM', emoji: '🚗', name: { en: 'Scenic drive to Glenorchy', zh: '风景驾车前往格林诺奇' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ One of world\'s most beautiful drives! Photo stops: Bennett\'s Bluff, Bob\'s Cove', zh: '⭐ 世界最美公路之一！拍照点：Bennett\'s Bluff, Bob\'s Cove' } },
        ],
      },
      {
        title: { en: 'Midday – Glenorchy & Paradise', zh: '中午 – 格林诺奇 & 天堂谷' },
        activities: [
          { time: '11:00 AM', emoji: '🚶', name: { en: 'Glenorchy Walkway', zh: '格林诺奇步道' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Easy lagoon walk, kid-friendly', zh: '轻松的泻湖步道，适合儿童' } },
          { time: '12:00 PM', emoji: '🍽️', name: { en: 'Lunch at Glenorchy Trading Post', zh: '在格林诺奇贸易所午餐' }, type: 'normal' },
          { time: '1:00 PM', emoji: '🌲', name: { en: 'Drive to Paradise (Lord of the Rings!)', zh: '驾车前往天堂谷（《指环王》拍摄地！）' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '25 min gravel road. Stunning beech forest. LOTR filming locations!', zh: '25分钟砾石路。壮观的山毛榉森林。指环王拍摄地！' } },
        ],
      },
      {
        title: { en: 'Afternoon – Return to Queenstown', zh: '下午 – 返回皇后镇' },
        activities: [
          { time: '3:30 PM', emoji: '🚗', name: { en: 'Return to Queenstown', zh: '返回皇后镇' }, type: 'normal' },
          { time: '5:00 PM', emoji: '🛍️', name: { en: 'Shopping / free time', zh: '购物 / 自由活动' }, type: 'free' },
        ],
      },
      {
        title: { en: 'Evening – Farewell Dinner (All 7)', zh: '晚上 – 告别晚餐（全体7人）' },
        activities: [
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Farewell dinner (all 7 people)', zh: '告别晚餐（全体7人）' }, type: 'normal', notes: { en: 'Book a nice restaurant in advance – last night together!', zh: '提前预订好餐厅 – 最后一晚一起！' } },
          { time: '9:00 PM', emoji: '🧳', name: { en: 'Pack for departures', zh: '为出发打包行李' }, type: 'normal', notes: { en: 'Rose\'s family has a long drive tomorrow', zh: 'Rose一家明天要长途驾车' } },
        ],
      },
    ],
  },
  {
    day: 9,
    date: 'April 19, 2026',
    dateLabel: { en: 'Saturday, April 19', zh: '4月19日 周六' },
    title: { en: "Rose's Family Departure Day", zh: 'Rose一家出发日' },
    base: { en: 'Rose: Depart | Chris: Base 3 (Night 4 of 4)', zh: 'Rose：出发 | Chris：基地3（第4晚，共4晚）' },
    sections: [
      {
        title: { en: "Rose's Family – Early Departure", zh: 'Rose一家 – 早起出发' },
        activities: [
          { time: '7:00 AM', emoji: '🍳', name: { en: 'Early breakfast together', zh: '一起早餐' }, type: 'normal' },
          { time: '8:00 AM', emoji: '👋', name: { en: 'Say goodbye!', zh: '告别！' }, type: 'normal' },
          { time: '8:30 AM', emoji: '🚗', name: { en: 'Rose\'s family departs for Christchurch', zh: 'Rose一家出发前往基督城' }, type: 'normal', notes: { en: '~6 hour drive via SH8 (faster) or SH1 (scenic)', zh: '约6小时驾车，走SH8（更快）或SH1（风景）' } },
          { time: '2:30 PM', emoji: '🚗', name: { en: 'Arrive Christchurch, return campervan', zh: '抵达基督城，归还房车' }, type: 'normal', notes: { en: 'Return at JUCY depot by 4:00 PM', zh: '下午4点前在JUCY站点归还' } },
          { time: '5:45 PM', emoji: '✈️', name: { en: 'DEPART Christchurch (EK413)', zh: '基督城起飞（EK413）' }, type: 'normal', notes: { en: 'Rose, Ricky, Johnny, Jasmine → Sydney 7:05 PM', zh: 'Rose, Ricky, Johnny, Jasmine → 悉尼 7:05 PM' } },
        ],
      },
      {
        title: { en: "Chris's Family – Wanaka Day Trip", zh: 'Chris一家 – 瓦纳卡一日游' },
        activities: [
          { time: '10:00 AM', emoji: '🚗', name: { en: 'Drive to Wanaka', zh: '驱车前往瓦纳卡' }, type: 'normal', notes: { en: '1 hour scenic drive over Crown Range', zh: '1小时风景驾车，翻越皇冠山脉' } },
          { time: '11:30 AM', emoji: '🧩', name: { en: 'PUZZLING WORLD', zh: '迷惑世界' }, type: 'book-ahead', cost: { en: '~$68 total (Adults: $25×2, Kids: $18×1)', zh: '总计约$68（成人：$25×2，儿童：$18×1）' }, notes: { en: '⭐ Kids LOVE this! Great Maze + Illusion Rooms. Allow 1.5-2 hours.', zh: '⭐ 孩子们超爱！大迷宫 + 幻觉房间。留1.5-2小时。' } },
          { time: '1:30 PM', emoji: '🍽️', name: { en: 'Lunch in Wanaka', zh: '在瓦纳卡午餐' }, type: 'normal' },
          { time: '2:30 PM', emoji: '📷', name: { en: 'That Wanaka Tree', zh: '瓦纳卡之树' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'NZ\'s most photographed tree!', zh: '新西兰最上镜的树！' } },
          { time: '3:30 PM', emoji: '🚗', name: { en: 'Return to Queenstown', zh: '返回皇后镇' }, type: 'normal' },
          { time: '6:00 PM', emoji: '🍽️', name: { en: 'Relaxed dinner – last night in Queenstown', zh: '轻松晚餐 – 皇后镇最后一晚' }, type: 'normal' },
        ],
      },
    ],
  },
  {
    day: 10,
    date: 'April 20, 2026',
    dateLabel: { en: 'Sunday, April 20', zh: '4月20日 周日' },
    title: { en: "Chris's Family Departure Day", zh: 'Chris一家出发日' },
    base: { en: 'Chris: Depart', zh: 'Chris：出发' },
    sections: [
      {
        title: { en: 'Morning – Leisurely Start', zh: '上午 – 悠闲起步' },
        activities: [
          { time: '8:30 AM', emoji: '🍳', name: { en: 'Leisurely breakfast', zh: '悠闲早餐' }, type: 'normal' },
          { time: '9:30 AM', emoji: '🏕️', name: { en: 'Check out of campground', zh: '营地退房' }, type: 'normal' },
          { time: '10:00 AM', emoji: '🚗', name: { en: 'Depart for Christchurch', zh: '出发前往基督城' }, type: 'normal', notes: { en: '~6 hour drive', zh: '约6小时驾车' } },
        ],
      },
      {
        title: { en: 'En Route Options', zh: '途中选项' },
        activities: [
          { emoji: '☕', name: { en: 'Coffee stop at Cromwell or Omarama', zh: '克伦威尔或Omarama喝咖啡' }, type: 'normal' },
          { time: '1:00 PM', emoji: '🍽️', name: { en: 'Lunch en route', zh: '途中午餐' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Afternoon – Christchurch & Departure', zh: '下午 – 基督城 & 出发' },
        activities: [
          { time: '4:00 PM', emoji: '🚗', name: { en: 'Arrive Christchurch, return campervan', zh: '抵达基督城，归还房车' }, type: 'normal', notes: { en: 'Return at JUCY depot', zh: '在JUCY站点归还' } },
          { time: '5:00 PM', emoji: '✈️', name: { en: 'Airport check-in', zh: '机场值机' }, type: 'normal' },
          { time: '7:00 PM', emoji: '✈️', name: { en: 'DEPART Christchurch', zh: '基督城起飞' }, type: 'normal', notes: { en: 'Chris, Yuyu, Jerry → Sydney ~8:00 PM', zh: 'Chris, Yuyu, Jerry → 悉尼 约8:00 PM' } },
        ],
      },
    ],
    notes: { en: 'Safe travels home! What an amazing trip! 🇳🇿', zh: '一路平安！旅途精彩！🇳🇿' },
  },
];
