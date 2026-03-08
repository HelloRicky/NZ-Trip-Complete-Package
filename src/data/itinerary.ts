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
          { time: '5:15 PM', emoji: '🏕️', name: { en: 'Check into Kaikoura TOP 10', zh: '入住Kaikoura TOP 10' }, type: 'normal', notes: { en: 'Set up campervans, settle in – heated pool!', zh: '停好房车，安顿下来 – 有加热泳池！' } },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '6:00 PM', emoji: '🚶', name: { en: 'Kaikoura waterfront walk', zh: '凯库拉海滨漫步' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Beautiful sunset views, spot seals on rocks', zh: '美丽的日落，岩石上可见海豹' } },
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Dinner in Kaikoura', zh: '在凯库拉晚餐' }, type: 'normal', notes: { en: 'Try local crayfish! Or cook at camp kitchen', zh: '尝试当地龙虾！或在营地厨房做饭' } },
          { time: '8:30 PM', emoji: '🏊', name: { en: 'Heated pool time!', zh: '加热泳池时间！' }, type: 'free', cost: { en: 'Included', zh: '含在营地费用内' }, notes: { en: 'Kids will love it! Great way to relax after travel', zh: '孩子们会喜欢的！旅行后放松的好方式' } },
          { time: '9:30 PM', emoji: '😴', name: { en: 'Early night – recover from travel', zh: '早点休息 – 恢复旅途疲劳' }, type: 'normal' },
        ],
      },
    ],
  },
  {
    day: 2,
    date: 'April 12, 2026',
    dateLabel: { en: 'Saturday, April 12', zh: '4月12日 周六' },
    title: { en: 'Fishing Charter Day!', zh: '钓鱼游船日！' },
    base: { en: 'Base 1: Kaikoura (Night 2 of 3)', zh: '基地1：凯库拉（第2晚，共3晚）' },
    sections: [
      {
        title: { en: 'Morning – Deep Sea Fishing Charter', zh: '上午 – 深海钓鱼游船' },
        activities: [
          { time: '6:30 AM', emoji: '🍳', name: { en: 'Early breakfast at camp', zh: '营地早餐' }, type: 'normal', notes: { en: 'Light breakfast – you\'re going fishing!', zh: '清淡早餐 – 你要去钓鱼了！' } },
          { time: '7:30 AM', emoji: '🎣', name: { en: 'KAIKOURA FISHING CHARTER', zh: '凯库拉钓鱼游船' }, type: 'must-book', cost: { en: '~$700–1,400 for group (depending on charter size)', zh: '团体约$700-1,400（取决于游船规模）' }, notes: { en: '⭐ HIGHLIGHT! Deep sea fishing off Kaikoura coast. Catch blue cod, groper, and more! ~3-4 hrs. Book in advance!', zh: '⭐ 重点项目！凯库拉海岸深海钓鱼。钓蓝鳕鱼、笛鲷等！约3-4小时。提前预订！' } },
          { time: '11:30 AM', emoji: '🐟', name: { en: 'Return to shore with the catch!', zh: '满载而归！' }, type: 'normal', notes: { en: 'Charter may help fillet your fish', zh: '游船可能会帮忙处理鱼' } },
          { time: '12:30 PM', emoji: '🍽️', name: { en: 'Lunch – maybe cook your own catch?', zh: '午餐 – 也许可以烹饪自己的渔获？' }, type: 'normal', notes: { en: 'Or grab lunch in town', zh: '或在镇上用餐' } },
        ],
      },
      {
        title: { en: 'Afternoon – Relaxed Beach & Seals', zh: '下午 – 海滩休闲 & 海豹' },
        activities: [
          { time: '2:00 PM', emoji: '🦭', name: { en: 'Point Kean Seal Colony', zh: 'Point Kean海豹群落' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Free viewing platform – walk the Kaikoura Peninsula Walkway', zh: '免费观景台 – 步行凯库拉半岛步道' } },
          { time: '3:00 PM', emoji: '🏖️', name: { en: 'Beach time & rock pool exploring', zh: '海滩时光 & 潮池探索' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Kids love the rock pools!', zh: '孩子们喜欢潮池！' } },
          { time: '4:30 PM', emoji: '🏊', name: { en: 'Heated pool session', zh: '加热泳池时间' }, type: 'free', cost: { en: 'Included', zh: '含在营地费用内' } },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Dinner & celebrate the catch!', zh: '晚餐 & 庆祝渔获！' }, type: 'normal', notes: { en: 'BBQ your catch or dine at a local restaurant', zh: '烧烤你的渔获或在当地餐厅用餐' } },
        ],
      },
    ],
    notes: { en: 'Big fishing day! Bring sunscreen, sea sickness tablets if needed, and warm layers for the boat.', zh: '精彩的钓鱼日！带防晒霜，如需要带晕船药，以及船上保暖衣物。' },
  },
  {
    day: 3,
    date: 'April 13, 2026',
    dateLabel: { en: 'Sunday, April 13', zh: '4月13日 周日' },
    title: { en: 'EcoZip + Seal Kayaking Adventure!', zh: 'EcoZip + 海豹皮划艇大冒险！' },
    base: { en: 'Base 1: Kaikoura (Night 3 of 3)', zh: '基地1：凯库拉（第3晚，共3晚）' },
    sections: [
      {
        title: { en: 'Morning – EcoZip Adventures (9 AM)', zh: '上午 – EcoZip探险（9点）' },
        activities: [
          { time: '8:00 AM', emoji: '🍳', name: { en: 'Breakfast at camp', zh: '营地早餐' }, type: 'normal', notes: { en: 'Pack day bags, wear comfortable clothes!', zh: '准备日间背包，穿舒适衣物！' } },
          { time: '9:00 AM', emoji: '🌲', name: { en: 'ECOZIP ADVENTURES KAIKOURA', zh: 'ECOZIP探险凯库拉' }, type: 'must-book', cost: { en: '~$1,100 total (Adults: ~$169×4, Kids 7+: ~$109×3)', zh: '总计约$1,100（成人：~$169×4，儿童7岁+：~$109×3）' }, notes: { en: '⭐ HIGHLIGHT! 8 ziplines through native forest, ~3 hours. Min age 7.', zh: '⭐ 重点项目！8条滑索穿越原生森林，约3小时。最低年龄7岁。' } },
          { time: '12:00 PM', emoji: '🍽️', name: { en: 'Lunch in Kaikoura', zh: '在凯库拉午餐' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Afternoon – Seal Kayaking (2 PM)', zh: '下午 – 海豹皮划艇（2点）' },
        activities: [
          { time: '2:00 PM', emoji: '🛶', name: { en: 'SEAL KAYAK KAIKOURA', zh: '凯库拉海豹皮划艇' }, type: 'must-book', cost: { en: '~$670 total (Adults: ~$115×4, tandem options for kids)', zh: '总计约$670（成人：~$115×4，儿童可用双人艇）' }, notes: { en: '⭐ Amazing wildlife! 2-2.5 hrs. Paddle with wild seals. Will get wet!', zh: '⭐ 精彩野生动物！2-2.5小时。与野生海豹同游。会弄湿！' } },
          { time: '4:30 PM', emoji: '🚿', name: { en: 'Return to camp, shower & change', zh: '返回营地，淋浴更衣' }, type: 'normal' },
          { time: '5:00 PM', emoji: '🏊', name: { en: 'Heated pool – well deserved!', zh: '加热泳池 – 当之无愧！' }, type: 'free', cost: { en: 'Included', zh: '含在营地费用内' } },
        ],
      },
      {
        title: { en: 'Evening – Last Night in Kaikoura', zh: '晚上 – 凯库拉最后一晚' },
        activities: [
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Celebratory dinner in Kaikoura', zh: '凯库拉庆祝晚餐' }, type: 'normal', notes: { en: 'Celebrate an amazing 3 days!', zh: '庆祝精彩的3天！' } },
          { time: '9:00 PM', emoji: '🧳', name: { en: 'Pack up – early start tomorrow', zh: '收拾行李 – 明天早起' }, type: 'normal' },
        ],
      },
    ],
    notes: { en: 'Very active day – kids will love both activities! Bring change of clothes for kayaking.', zh: '非常活跃的一天 – 孩子们会爱上两个活动！带换洗衣服用于皮划艇。' },
  },
  {
    day: 4,
    date: 'April 14, 2026',
    dateLabel: { en: 'Monday, April 14', zh: '4月14日 周一' },
    title: { en: 'Drive to Lake Tekapo', zh: '驱车前往蒂卡波湖' },
    subtitle: { en: 'Check out of Base 1, Church of Good Shepherd & stargazing', zh: '退出基地1，善牧教堂 & 观星' },
    base: { en: 'Base 2: Lake Tekapo (Night 1 of 2)', zh: '基地2：蒂卡波湖（第1晚，共2晚）' },
    sections: [
      {
        title: { en: 'Morning – Depart Kaikoura', zh: '上午 – 离开凯库拉' },
        activities: [
          { time: '7:30 AM', emoji: '🍳', name: { en: 'Early breakfast & check out', zh: '早餐 & 退房' }, type: 'normal' },
          { time: '8:30 AM', emoji: '🚗', name: { en: 'Depart for Lake Tekapo', zh: '出发前往蒂卡波湖' }, type: 'normal', notes: { en: '~4.5 hour drive via SH1 then inland through MacKenzie Country', zh: '途经SH1再穿越麦肯齐地区约4.5小时' } },
        ],
      },
      {
        title: { en: 'Afternoon – Arrive Lake Tekapo', zh: '下午 – 抵达蒂卡波湖' },
        activities: [
          { time: '1:00 PM', emoji: '⛪', name: { en: 'Church of the Good Shepherd', zh: '善牧教堂' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ Iconic! NZ\'s most photographed church, stunning turquoise lake backdrop', zh: '⭐ 标志性景点！新西兰最上镜教堂，壮观碧蓝湖景背景' } },
          { emoji: '🏞️', name: { en: 'Lake Tekapo lakefront walk', zh: '蒂卡波湖湖畔漫步' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '30 minutes – stunning turquoise water!', zh: '30分钟 – 令人惊叹的碧蓝湖水！' } },
          { time: '2:00 PM', emoji: '🍽️', name: { en: 'Lunch at Lake Tekapo village', zh: '蒂卡波湖村庄午餐' }, type: 'normal', notes: { en: 'Kohan Japanese Restaurant or local café', zh: 'Kohan日本餐厅或当地咖啡馆' } },
          { time: '3:30 PM', emoji: '🏕️', name: { en: 'Check into Lake Tekapo Holiday Park', zh: '入住蒂卡波湖假日公园' }, type: 'normal', notes: { en: 'Set up campervans, enjoy the lake views!', zh: '停好房车，享受湖景！' } },
        ],
      },
      {
        title: { en: 'Evening – Stargazing!', zh: '晚上 – 观星！' },
        activities: [
          { time: '5:00 PM', emoji: '🚶', name: { en: 'Lake walk & explore village', zh: '湖边漫步 & 探索村庄' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Dinner in village or camp cook', zh: '村庄晚餐或营地做饭' }, type: 'normal' },
          { time: '9:00 PM', emoji: '⭐', name: { en: 'STARGAZING!', zh: '观星！' }, type: 'free', cost: { en: 'FREE (guided tours available)', zh: '免费（可付费参加导览）' }, notes: { en: '⭐⭐ Dark Sky Reserve – incredible stars! Bring warm layers. Mt John Observatory nearby.', zh: '⭐⭐ 暗夜星空保护区 – 星空绝美！带保暖衣物。附近有约翰山天文台。' } },
        ],
      },
    ],
    notes: { en: 'Long but beautiful drive. Lake Tekapo is stunning – the turquoise colour is unreal! Stargazing is a must if clear.', zh: '路程长但风景美。蒂卡波湖令人叹为观止 – 碧蓝的颜色太不真实了！晴天一定要观星。' },
  },
  {
    day: 5,
    date: 'April 15, 2026',
    dateLabel: { en: 'Tuesday, April 15', zh: '4月15日 周二' },
    title: { en: 'Mt Cook Day Trip', zh: '库克山一日游' },
    subtitle: { en: 'Day trip from Lake Tekapo – Hooker Valley Track + Lake Pukaki', zh: '从蒂卡波湖出发一日游 – Hooker Valley步道 + 普卡基湖' },
    base: { en: 'Base 2: Lake Tekapo (Night 2 of 2)', zh: '基地2：蒂卡波湖（第2晚，共2晚）' },
    sections: [
      {
        title: { en: 'Morning – Drive to Mt Cook', zh: '上午 – 驾车前往库克山' },
        activities: [
          { time: '7:30 AM', emoji: '🍳', name: { en: 'Early breakfast', zh: '早餐' }, type: 'normal', notes: { en: 'Pack lunch, snacks, plenty of water! It\'s a day trip.', zh: '准备午餐、零食、充足的水！这是一日游。' } },
          { time: '8:30 AM', emoji: '🚗', name: { en: 'Depart for Mt Cook via Lake Pukaki', zh: '途经普卡基湖驾车前往库克山' }, type: 'normal', notes: { en: '~1.5 hour drive. Stop at Lake Pukaki viewpoint on the way!', zh: '约1.5小时车程。途中在普卡基湖观景台停留！' } },
          { time: '9:00 AM', emoji: '📷', name: { en: 'Lake Pukaki Viewpoint', zh: '普卡基湖观景台' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ Intense turquoise lake with Mt Cook backdrop – amazing photos!', zh: '⭐ 深邃碧绿湖水，库克山背景 – 绝美照片！' } },
          { time: '10:00 AM', emoji: '🚗', name: { en: 'Continue to Hooker Valley carpark', zh: '继续前往Hooker Valley停车场' }, type: 'normal', notes: { en: '45 min from Lake Pukaki viewpoint', zh: '距普卡基湖观景台45分钟' } },
        ],
      },
      {
        title: { en: 'Morning/Afternoon – Hooker Valley Track', zh: '上午/下午 – Hooker Valley步道' },
        activities: [
          { time: '10:30 AM', emoji: '🥾', name: { en: 'HOOKER VALLEY TRACK', zh: 'HOOKER VALLEY步道' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐⭐⭐ MUST-DO! 10km return, 3-4 hrs. 3 swing bridges, glacier lake at end. Kids LOVE the swing bridges!', zh: '⭐⭐⭐ 必做！往返10公里，3-4小时。3座吊桥，终点冰川湖。孩子们超爱吊桥！' } },
          { time: '1:30 PM', emoji: '🍽️', name: { en: 'Picnic lunch at glacier lake or Mt Cook Village', zh: '冰川湖边野餐或库克山村就餐' }, type: 'normal', notes: { en: 'Amazing views of Mt Cook and icebergs!', zh: '库克山和冰山的绝美景色！' } },
        ],
      },
      {
        title: { en: 'Afternoon – Mt Cook Village & Return', zh: '下午 – 库克山村 & 返回' },
        activities: [
          { time: '3:00 PM', emoji: '🏨', name: { en: 'Mt Cook Village exploration', zh: '库克山村探索' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Sir Edmund Hillary Alpine Centre (museum), café', zh: '埃德蒙·希拉里爵士高山中心（博物馆）、咖啡厅' } },
          { emoji: '🚁', name: { en: 'OPTION: Glacier helicopter tour', zh: '选项：冰川直升机游览' }, type: 'optional', cost: { en: '~$350-500/person', zh: '~$350-500/人' }, notes: { en: 'Snow landing on glacier! Once in a lifetime.', zh: '冰川雪地着陆！一生一次的体验。' } },
          { time: '4:30 PM', emoji: '🚗', name: { en: 'Return drive to Lake Tekapo', zh: '返回蒂卡波湖' }, type: 'normal', notes: { en: '~1.5 hour drive back via Lake Pukaki', zh: '途经普卡基湖约1.5小时返程' } },
        ],
      },
      {
        title: { en: 'Evening – Last Night at Tekapo', zh: '晚上 – 蒂卡波湖最后一晚' },
        activities: [
          { time: '6:00 PM', emoji: '🍽️', name: { en: 'Dinner at village or camp', zh: '村庄或营地晚餐' }, type: 'normal' },
          { time: '8:30 PM', emoji: '⭐', name: { en: 'More stargazing (last night here!)', zh: '继续观星（在这里的最后一晚！）' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
          { time: '9:30 PM', emoji: '🧳', name: { en: 'Pack up – heading to Queenstown tomorrow', zh: '收拾行李 – 明天前往皇后镇' }, type: 'normal' },
        ],
      },
    ],
    notes: { en: 'Hooker Valley is THE highlight of the trip for many! Long day but so worth it. Weather-dependent – have a backup plan.', zh: 'Hooker Valley是许多人的旅行亮点！一天很长但非常值得。取决于天气 – 准备备选方案。' },
  },
  {
    day: 6,
    date: 'April 16, 2026',
    dateLabel: { en: 'Wednesday, April 16', zh: '4月16日 周三' },
    title: { en: 'Drive to Queenstown via Cromwell', zh: '途经克伦威尔驱车前往皇后镇' },
    subtitle: { en: 'Check out of Base 2', zh: '退出基地2' },
    base: { en: 'Base 3: Queenstown (Night 1 of 3/4)', zh: '基地3：皇后镇（第1晚，共3/4晚）' },
    sections: [
      {
        title: { en: 'Morning – Scenic Drive', zh: '上午 – 风景驾车' },
        activities: [
          { time: '8:30 AM', emoji: '🍳', name: { en: 'Breakfast & check out', zh: '早餐 & 退房' }, type: 'normal' },
          { time: '9:30 AM', emoji: '🚗', name: { en: 'Depart for Queenstown', zh: '出发前往皇后镇' }, type: 'normal', notes: { en: '~3.5 hour scenic drive via Lindis Pass and Cromwell', zh: '途经Lindis Pass和克伦威尔约3.5小时风景驾车' } },
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
    title: { en: 'Skyline + Glenorchy Adventure Day', zh: '天际缆车 + 格林诺奇冒险日' },
    subtitle: { en: 'Both families together – one more day tomorrow too!', zh: '两家人一起 – 明天还有一天一起！' },
    base: { en: 'Base 3: Queenstown (Night 2 of 3/4)', zh: '基地3：皇后镇（第2晚，共3/4晚）' },
    sections: [
      {
        title: { en: 'Morning – Skyline Gondola & Luge (Both Families!)', zh: '上午 – 天际缆车 & 滑道（两家人！）' },
        activities: [
          { time: '9:00 AM', emoji: '🍳', name: { en: 'Breakfast', zh: '早餐' }, type: 'normal' },
          { time: '10:00 AM', emoji: '🚡', name: { en: 'SKYLINE GONDOLA + LUGE', zh: '天际缆车 + 滑道' }, type: 'book-ahead', cost: { en: '~$463 total (Adults: $79×4, Kids 6-14: $49×2, Jasmine: $49)', zh: '总计约$463（成人：$79×4，6-14岁：$49×2，Jasmine：$49）' }, notes: { en: '⭐⭐⭐ MUST-DO! Gondola up Bob\'s Peak + 5 luge rides each. Allow 2-3 hours. Both families together!', zh: '⭐⭐⭐ 必做！缆车上鲍勃峰 + 每人5次滑道。留2-3小时。两家人一起！' } },
          { time: '1:00 PM', emoji: '🍽️', name: { en: 'Lunch at Skyline or in town', zh: '在Skyline或镇上午餐' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Afternoon – Glenorchy Scenic Drive (Shortened)', zh: '下午 – 格林诺奇风景驾车（缩短版）' },
        activities: [
          { time: '2:30 PM', emoji: '🚗', name: { en: 'Scenic drive to Glenorchy', zh: '风景驾车前往格林诺奇' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ One of world\'s most beautiful drives! Stop at Bennett\'s Bluff for photos.', zh: '⭐ 世界最美公路之一！在Bennett\'s Bluff停留拍照。' } },
          { time: '3:30 PM', emoji: '🏘️', name: { en: 'Glenorchy Village (quick stop)', zh: '格林诺奇小镇（短暂停留）' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Quick stop at the charming village – save time for the drive back to Queenstown', zh: '迷人小镇短暂停留 – 为返回皇后镇的路途留出时间' } },
          { time: '5:00 PM', emoji: '🚗', name: { en: 'Return to Queenstown', zh: '返回皇后镇' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Evening – 🥂 Farewell Dinner Together (Last Night!)', zh: '晚上 – 🥂 一起告别晚餐（最后一晚！）' },
        activities: [
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Dinner together in Queenstown', zh: '在皇后镇一起晚餐' }, type: 'normal', notes: { en: '⭐ Last night in Queenstown – but NOT the last night together! Tomorrow both families drive to Omarama together 🚗', zh: '⭐ 在皇后镇的最后一晚 – 但不是两家人最后一起！明天两家人一起驾车前往奥马拉马 🚗' } },
          { time: '9:00 PM', emoji: '🧳', name: { en: 'Pack for Omarama – both families departing together tomorrow!', zh: '为奥马拉马打包 – 两家人明天一起出发！' }, type: 'normal', notes: { en: 'Both families: pack for Omarama tonight – departing together ~10 AM tomorrow!', zh: '两家人：今晚为奥马拉马打包 – 明天约10点一起出发！' } },
        ],
      },
    ],
  },
  {
    day: 8,
    date: 'April 18, 2026',
    dateLabel: { en: 'Friday, April 18', zh: '4月18日 周五' },
    title: { en: 'Both Families → Omarama via Cromwell & Lindis Pass', zh: '两家人一起 → 奥马拉马（经克伦威尔 & Lindis Pass）' },
    subtitle: { en: 'Together until the end – hot tubs & dark skies overnight', zh: '一起到最后 – 温泉浴桶 & 暗夜星空过夜' },
    base: { en: 'Both Families: Omarama (Night 1 of 1)', zh: '两家人：奥马拉马（第1晚，共1晚）' },
    sections: [
      {
        title: { en: 'Morning – Pack Up & Depart Queenstown (Both Families)', zh: '上午 – 打包 & 两家人一起离开皇后镇' },
        activities: [
          { time: '8:30 AM', emoji: '🍳', name: { en: 'Breakfast at camp – last morning in Queenstown', zh: '营地早餐 – 在皇后镇的最后早晨' }, type: 'normal' },
          { time: '10:00 AM', emoji: '🚗', name: { en: 'BOTH FAMILIES depart Queenstown → Omarama', zh: '两家人一起出发皇后镇 → 奥马拉马' }, type: 'normal', notes: { en: 'Relaxed start – no early alarm! ~3 hour drive via Cromwell & Lindis Pass. Convoy together!', zh: '轻松出发 – 不用早起！途经克伦威尔和Lindis Pass约3小时。两辆车一起开！' } },
          { time: '11:30 AM', emoji: '🍎', name: { en: 'Cromwell stop – fruit & heritage town (both families)', zh: '克伦威尔停留 – 水果与历史小镇（两家人）' }, type: 'optional', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Pick up local stone fruit. Heritage precinct stroll. Grab lunch here.', zh: '购买当地石果。漫步历史区。在这里吃午餐。' } },
          { time: '12:30 PM', emoji: '🏜️', name: { en: 'Lindis Pass scenic drive', zh: 'Lindis Pass风景驾车' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Stunning golden tussock landscapes – great photo stop at the summit!', zh: '壮观的金色草地景观 – 在峰顶绝佳拍照！' } },
          { time: '1:00 PM', emoji: '📍', name: { en: 'Arrive Omarama (~3 hours from Queenstown)', zh: '抵达奥马拉马（距皇后镇约3小时）' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Afternoon – Omarama Hot Tubs (Both Families!)', zh: '下午 – 奥马拉马温泉浴桶（两家人！）' },
        activities: [
          { time: '2:00 PM', emoji: '♨️', name: { en: 'OMARAMA HOT TUBS – Both Families', zh: '奥马拉马温泉浴桶 – 两家人' }, type: 'book-ahead', cost: { en: '~$50/person (private tubs with mountain views)', zh: '约$50/人（私人浴桶，有山景）' }, notes: { en: '⭐ Outdoor cedar hot tubs with stunning MacKenzie Country mountain & sky views! Very relaxing. Book in advance!', zh: '⭐ 露天雪松温泉浴桶，享有壮观的麦肯齐地区山景和天空美景！非常放松。提前预订！' } },
          { time: '4:30 PM', emoji: '🏞️', name: { en: 'Lake Ohau scenic area (optional drive – both families)', zh: '奥豪湖风景区（可选驾车游览 – 两家人）' }, type: 'optional', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Beautiful remote alpine lake, short drive from Omarama. Optional short walk on the shore.', zh: '美丽偏远的高山湖，距奥马拉马短途驾车可达。可在湖边短途步行。' } },
        ],
      },
      {
        title: { en: 'Evening – Last Night Together! 🥹', zh: '晚上 – 最后一起过夜！🥹' },
        activities: [
          { time: '6:00 PM', emoji: '🏕️', name: { en: 'Check into Omarama TOP 10 – both families', zh: '入住奥马拉马TOP 10 – 两家人' }, type: 'normal', notes: { en: 'Both families at Omarama TOP 10 Holiday Park (campervans)', zh: '两家人同住奥马拉马TOP 10假日公园（房车营位）' } },
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Dinner together – last night as one group!', zh: '一起晚餐 – 最后一晚一起！' }, type: 'normal', notes: { en: 'Omarama is small – cook at camp or local café. Cherish the last evening together under MacKenzie dark skies!', zh: '奥马拉马很小 – 在营地做饭或去当地咖啡馆。在麦肯齐暗夜星空下珍惜最后一晚！' } },
          { time: '9:00 PM', emoji: '⭐', name: { en: 'Stargazing – dark skies here are excellent!', zh: '观星 – 这里星空极佳！' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Bring kids out for stargazing after dinner. MacKenzie Country dark skies!', zh: '晚餐后带孩子们出来观星。麦肯齐地区暗夜星空！' } },
          { time: '9:30 PM', emoji: '🧳', name: { en: 'Pack for tomorrow – both families drive to Christchurch', zh: '为明天打包 – 两家人一起驾车前往基督城' }, type: 'normal', notes: { en: 'Short drive tomorrow (~2.5 hrs). Rose departs NZ in the afternoon. Big day!', zh: '明天短途驾车（约2.5小时）。Rose下午离开新西兰。重要的一天！' } },
        ],
      },
    ],
  },
  {
    day: 9,
    date: 'April 19, 2026',
    dateLabel: { en: 'Saturday, April 19', zh: '4月19日 周六' },
    title: { en: 'Both Families → Christchurch – Rose Departs NZ 🥹', zh: '两家人 → 基督城 – Rose离开新西兰 🥹' },
    subtitle: { en: 'Drive together from Omarama, then farewell at Christchurch', zh: '从奥马拉马一起驾车，然后在基督城告别' },
    base: { en: 'Rose: Departs NZ ✈️ | Chris: Christchurch (Night 1 of 1)', zh: 'Rose：离开新西兰 ✈️ | Chris：基督城（第1晚，共1晚）' },
    sections: [
      {
        title: { en: 'Morning – Both Families Drive to Christchurch Together', zh: '上午 – 两家人一起驾车前往基督城' },
        activities: [
          { time: '9:00 AM', emoji: '🍳', name: { en: 'Relaxed breakfast & check out of Omarama', zh: '轻松早餐 & 退出奥马拉马住宿' }, type: 'normal', notes: { en: 'No early alarm! Short drive today (~2.5 hrs to Christchurch).', zh: '不用早起！今天短途驾车（约2.5小时到基督城）。' } },
          { time: '9:30 AM', emoji: '🚗', name: { en: 'BOTH FAMILIES depart Omarama → Christchurch', zh: '两家人一起出发奥马拉马 → 基督城' }, type: 'normal', notes: { en: '~2.5 hour drive via Burke Pass through beautiful MacKenzie Country. Last convoy together! 🚗🚗', zh: '途经Burke Pass穿越美丽的麦肯齐地区约2.5小时。最后一次两辆车一起开！🚗🚗' } },
          { time: '11:30 AM', emoji: '📍', name: { en: 'Arrive Christchurch (~11:30 AM)', zh: '抵达基督城（约上午11:30）' }, type: 'normal' },
          { time: '12:00 PM', emoji: '🍽️', name: { en: 'Lunch together – last meal as a group! 🥹', zh: '一起午餐 – 最后一顿团体餐！🥹' }, type: 'normal', notes: { en: 'Christchurch Botanic Gardens café or nearby restaurant. Savour the last moments together!', zh: '基督城植物园咖啡馆或附近餐厅。珍惜最后的时光！' } },
        ],
      },
      {
        title: { en: "🌸 Rose's Family – Campervan Return & Departure", zh: '🌸 Rose一家 – 归还房车 & 出发' },
        activities: [
          { time: '2:00 PM', emoji: '🚐', name: { en: 'Return campervan to JUCY depot', zh: '在JUCY站点归还房车' }, type: 'normal', notes: { en: 'Allow time for final inspection and paperwork. Christchurch Airport.', zh: '留时间进行最终检查和文件。基督城机场。' } },
          { time: '4:30 PM', emoji: '✈️', name: { en: 'Airport check-in', zh: '机场值机' }, type: 'normal', notes: { en: 'Christchurch Airport – arrive with plenty of time', zh: '基督城机场 – 提前到达留足时间' } },
          { time: '5:45 PM', emoji: '✈️', name: { en: 'DEPART Christchurch (EK413) ✈️', zh: '基督城起飞（EK413）✈️' }, type: 'normal', notes: { en: 'Rose, Ricky, Johnny, Jasmine → Sydney 7:05 PM. Safe travels! 🎉', zh: 'Rose, Ricky, Johnny, Jasmine → 悉尼 7:05 PM。一路平安！🎉' } },
        ],
      },
      {
        title: { en: "🏔️ Chris's Family – Check In & Relaxed Afternoon", zh: '🏔️ Chris一家 – 入住 & 轻松下午' },
        activities: [
          { time: '2:00 PM', emoji: '🏕️', name: { en: 'Check into Christchurch TOP 10 Holiday Park', zh: '入住基督城TOP 10假日公园' }, type: 'normal', notes: { en: 'Near the airport – perfect for tomorrow\'s departure', zh: '靠近机场 – 非常方便明天出发' } },
          { time: '3:00 PM', emoji: '🌿', name: { en: 'Explore Christchurch or relax', zh: '探索基督城或休息' }, type: 'optional', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Christchurch Botanic Gardens, Riverside Market, or just chill at camp', zh: '基督城植物园、Riverside Market，或在营地休息' } },
          { time: '6:00 PM', emoji: '🍽️', name: { en: 'Early dinner near the holiday park', zh: '假日公园附近早晚餐' }, type: 'normal' },
          { time: '8:30 PM', emoji: '🧳', name: { en: 'Prep campervan for return tomorrow', zh: '为明天归还房车做准备' }, type: 'normal', notes: { en: 'Clean up campervan tonight – mushroom foraging in the morning!', zh: '今晚清洁房车 – 明天早上去采蘑菇！' } },
        ],
      },
    ],
  },
  {
    day: 10,
    date: 'April 20, 2026',
    dateLabel: { en: 'Sunday, April 20', zh: '4月20日 周日' },
    title: { en: "Chris's Family – Bottle Lake Mushrooms & Departure", zh: 'Chris一家 – 瓶湖森林采蘑菇 & 出发' },
    base: { en: 'Chris: Departs NZ ✈️', zh: 'Chris：离开新西兰 ✈️' },
    sections: [
      {
        title: { en: '🍄 Morning – Sleep In & Bottle Lake Forest Park', zh: '🍄 上午 – 睡个懒觉 & 瓶湖森林公园' },
        activities: [
          { emoji: '😴', name: { en: 'Sleep in! Super chill final morning', zh: '睡个懒觉！超轻松的最后早晨' }, type: 'free', notes: { en: 'No early alarm – you\'ve earned it! 10 days of adventure 🎉', zh: '不用早起 – 你们赢得了这个！10天的探险 🎉' } },
          { time: '10:00 AM', emoji: '🍄', name: { en: 'BOTTLE LAKE FOREST PARK – Mushroom Foraging', zh: '瓶湖森林公园 – 采蘑菇' }, type: 'free', cost: { en: 'FREE entry', zh: '免费入园' }, notes: { en: '⭐ Pine mushrooms & saffron milk caps! 2-3 hours foraging in pine plantation. Just 20 min from airport. Kids absolutely LOVE hunting for mushrooms!', zh: '⭐ 松茸和藏红花乳菇！在松树林中采摘2-3小时。距机场仅20分钟。孩子们超喜欢寻找蘑菇！' } },
          { time: '1:00 PM', emoji: '🚗', name: { en: 'Return to holiday park – pack up & say goodbye to the campervan!', zh: '返回假日公园 – 打包 & 告别房车！' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Afternoon – Campervan Return & Departure', zh: '下午 – 归还房车 & 出发' },
        activities: [
          { time: '1:30 PM', emoji: '🚐', name: { en: 'Return campervan to JUCY depot', zh: '在JUCY站点归还房车' }, type: 'normal', notes: { en: 'Final inspection. 10-day NZ campervan adventure complete! 🎉', zh: '最终检查。10天新西兰房车探险圆满结束！🎉' } },
          { time: '3:00 PM', emoji: '✈️', name: { en: 'Head to airport – relax & explore', zh: '前往机场 – 放松 & 探索' }, type: 'normal', notes: { en: 'Grab food, browse duty free, enjoy reliving the amazing memories! 4 hours to kill – very relaxed.', zh: '吃点东西，逛免税店，回味精彩的旅行记忆！有4小时空余 – 非常轻松。' } },
          { time: '7:00 PM', emoji: '✈️', name: { en: 'DEPART Christchurch ✈️', zh: '基督城起飞 ✈️' }, type: 'normal', notes: { en: 'Chris, Yuyu, Jerry → Sydney. What an AMAZING trip! 🇳🇿🎉', zh: 'Chris, Yuyu, Jerry → 悉尼。太棒了！🇳🇿🎉' } },
        ],
      },
    ],
    notes: { en: 'Super chill final day – sleep in, mushrooms at 10 AM, return van at 1:30 PM, airport by 3 PM for the 7 PM flight. Perfect end to an incredible trip! 🇳🇿 Bottle Lake Forest Park mushrooms make a great souvenir!', zh: '超轻松的最后一天 – 睡懒觉，10点采蘑菇，1:30归还房车，3点到机场赶7点航班。完美结束这段精彩旅程！🇳🇿 瓶湖森林公园的松茸是极好的纪念品！' },
  },
];
