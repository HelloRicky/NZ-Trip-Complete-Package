import type { ItineraryDay } from '@/types';

export const ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    date: 'April 11, 2026',
    dateLabel: { en: 'Friday, April 11', zh: '4月11日 周五' },
    title: { en: 'Arrival & Drive to Kaikoura', zh: '抵达并驱车前往凯库拉' },
    base: { en: 'Base 1: Kaikoura (Night 1 of 2)', zh: '基地1：凯库拉（第1晚，共2晚）' },
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
    title: { en: 'Kaikoura Exploration Day', zh: '凯库拉探索日' },
    base: { en: 'Base 1: Kaikoura (Night 2 of 2)', zh: '基地1：凯库拉（第2晚，共2晚）' },
    sections: [
      {
        title: { en: 'Morning – Fishing or Seal Colony', zh: '上午 – 钓鱼或海豹群落' },
        activities: [
          { time: '7:00 AM', emoji: '🍳', name: { en: 'Breakfast at camp', zh: '营地早餐' }, type: 'normal' },
          { time: '8:00 AM', emoji: '🎣', name: { en: 'Fishing Charter (optional)', zh: '钓鱼游船（可选）' }, type: 'optional', cost: { en: '~$700–1,400 for group', zh: '团体约$700-1,400' }, notes: { en: 'Deep sea fishing off Kaikoura coast. ~3-4 hrs. Book in advance!', zh: '凯库拉海岸深海钓鱼。约3-4小时。提前预订！' } },
          { time: '9:00 AM', emoji: '🦭', name: { en: 'Point Kean Seal Colony', zh: 'Point Kean海豹群落' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Free viewing platform – walk the Kaikoura Peninsula Walkway', zh: '免费观景台 – 步行凯库拉半岛步道' } },
          { time: '12:00 PM', emoji: '🍽️', name: { en: 'Lunch in Kaikoura', zh: '在凯库拉午餐' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Afternoon – Beach & Relax', zh: '下午 – 海滩休闲' },
        activities: [
          { time: '2:00 PM', emoji: '🏖️', name: { en: 'Beach time & rock pool exploring', zh: '海滩时光 & 潮池探索' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Kids love the rock pools!', zh: '孩子们喜欢潮池！' } },
          { time: '4:30 PM', emoji: '🏊', name: { en: 'Heated pool session', zh: '加热泳池时间' }, type: 'free', cost: { en: 'Included', zh: '含在营地费用内' } },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Dinner at camp or restaurant', zh: '营地或餐厅晚餐' }, type: 'normal' },
          { time: '9:00 PM', emoji: '🧳', name: { en: 'Pack up – Seal Kayaking & drive tomorrow!', zh: '收拾行李 – 明天海豹皮划艇后出发！' }, type: 'normal' },
        ],
      },
    ],
    notes: { en: 'Last full day in Kaikoura. Enjoy the seals and beach!', zh: '在凯库拉的最后完整一天。享受海豹和海滩！' },
  },
  {
    day: 3,
    date: 'April 13, 2026',
    dateLabel: { en: 'Sunday, April 13', zh: '4月13日 周日' },
    title: { en: 'Seal Kayaking → Drive to Christchurch', zh: '海豹皮划艇 → 驱车前往基督城' },
    base: { en: 'Base 1b: Christchurch (Transit Night)', zh: '基地1b：基督城（中转夜）' },
    sections: [
      {
        title: { en: 'Morning – Seal Kayaking Adventure!', zh: '上午 – 海豹皮划艇探险！' },
        activities: [
          { time: '7:00 AM', emoji: '🍳', name: { en: 'Early breakfast & check out', zh: '早餐 & 退房' }, type: 'normal', notes: { en: 'Pack up campervan before kayaking', zh: '皮划艇前打包好房车' } },
          { time: '8:30 AM', emoji: '🛶', name: { en: 'SEAL KAYAK KAIKOURA', zh: '凯库拉海豹皮划艇' }, type: 'must-book', cost: { en: '~$670 total (Adults: ~$115×4, tandem options for kids)', zh: '总计约$670（成人：~$115×4，儿童可用双人艇）' }, notes: { en: '⭐ HIGHLIGHT! 2-2.5 hrs. Paddle with wild seals. Will get wet! Bring change of clothes.', zh: '⭐ 重点项目！2-2.5小时。与野生海豹同游。会弄湿！带换洗衣服。' } },
          { time: '11:00 AM', emoji: '🚿', name: { en: 'Quick change & grab lunch', zh: '快速换衣 & 午餐' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Afternoon – Drive to Christchurch', zh: '下午 – 驱车前往基督城' },
        activities: [
          { time: '12:00 PM', emoji: '🚗', name: { en: 'Depart Kaikoura for Christchurch', zh: '出发凯库拉前往基督城' }, type: 'normal', notes: { en: '~2.5 hour scenic coastal drive', zh: '约2.5小时风景海岸线驾车' } },
          { time: '2:30 PM', emoji: '📍', name: { en: 'Arrive Christchurch', zh: '抵达基督城' }, type: 'normal' },
          { time: '3:00 PM', emoji: '🏕️', name: { en: 'Check into Christchurch TOP 10', zh: '入住基督城TOP 10' }, type: 'normal' },
          { time: '4:00 PM', emoji: '🌿', name: { en: 'Explore Christchurch (optional)', zh: '探索基督城（可选）' }, type: 'optional', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Botanic Gardens or Riverside Market', zh: '植物园或Riverside Market' } },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '6:00 PM', emoji: '🍽️', name: { en: 'Dinner in Christchurch', zh: '在基督城晚餐' }, type: 'normal' },
          { time: '8:30 PM', emoji: '😴', name: { en: 'Early night – Lake Tekapo tomorrow!', zh: '早点休息 – 明天去蒂卡波湖！' }, type: 'normal' },
        ],
      },
    ],
    notes: { en: 'Seal Kayaking is the highlight! Then a relaxed transit night in Christchurch before heading to Lake Tekapo.', zh: '海豹皮划艇是重点！然后在基督城放松休息一晚，明天前往蒂卡波湖。' },
  },
  {
    day: 4,
    date: 'April 14, 2026',
    dateLabel: { en: 'Monday, April 14', zh: '4月14日 周一' },
    title: { en: 'Drive to Lake Tekapo', zh: '驱车前往蒂卡波湖' },
    subtitle: { en: 'Church of Good Shepherd & stargazing', zh: '善牧教堂 & 观星' },
    base: { en: 'Base 2: Lake Tekapo (1 night)', zh: '基地2：蒂卡波湖（1晚）' },
    sections: [
      {
        title: { en: 'Morning – Depart Christchurch', zh: '上午 – 离开基督城' },
        activities: [
          { time: '8:00 AM', emoji: '🍳', name: { en: 'Breakfast & check out', zh: '早餐 & 退房' }, type: 'normal' },
          { time: '9:00 AM', emoji: '🚗', name: { en: 'Depart for Lake Tekapo', zh: '出发前往蒂卡波湖' }, type: 'normal', notes: { en: '~3 hour drive through MacKenzie Country', zh: '途经麦肯齐地区约3小时' } },
        ],
      },
      {
        title: { en: 'Afternoon – Arrive Lake Tekapo', zh: '下午 – 抵达蒂卡波湖' },
        activities: [
          { time: '12:00 PM', emoji: '📍', name: { en: 'Arrive Lake Tekapo', zh: '抵达蒂卡波湖' }, type: 'normal' },
          { time: '12:30 PM', emoji: '🍽️', name: { en: 'Lunch at Lake Tekapo village', zh: '蒂卡波湖村庄午餐' }, type: 'normal' },
          { time: '1:30 PM', emoji: '⛪', name: { en: 'Church of the Good Shepherd', zh: '善牧教堂' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ Iconic! NZ\'s most photographed church', zh: '⭐ 标志性景点！新西兰最上镜教堂' } },
          { time: '2:30 PM', emoji: '🏕️', name: { en: 'Check into Lake Tekapo Holiday Park', zh: '入住蒂卡波湖假日公园' }, type: 'normal' },
          { time: '3:30 PM', emoji: '♨️', name: { en: 'Tekapo Springs Hot Pools', zh: '蒂卡波温泉' }, type: 'optional', cost: { en: '~$170 total', zh: '总计约$170' }, notes: { en: 'Hot pools with mountain views!', zh: '拥有山景的温泉！' } },
        ],
      },
      {
        title: { en: 'Evening – Stargazing!', zh: '晚上 – 观星！' },
        activities: [
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Dinner in village or camp cook', zh: '村庄晚餐或营地做饭' }, type: 'normal' },
          { time: '9:00 PM', emoji: '⭐', name: { en: 'STARGAZING!', zh: '观星！' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐⭐ Dark Sky Reserve – incredible stars! Bring warm layers.', zh: '⭐⭐ 暗夜星空保护区 – 星空绝美！带保暖衣物。' } },
        ],
      },
    ],
  },
  {
    day: 5,
    date: 'April 15, 2026',
    dateLabel: { en: 'Tuesday, April 15', zh: '4月15日 周二' },
    title: { en: 'Mt Cook Day Trip + SKYDIVE! → Twizel', zh: '库克山一日游 + 跳伞！ → 特威泽尔' },
    subtitle: { en: 'Hooker Valley Track, Skydive Mount Cook (Rose & Chris), Lake Pukaki', zh: 'Hooker Valley步道、库克山跳伞（Rose & Chris）、普卡基湖' },
    base: { en: 'Base 2b: Twizel (1 night)', zh: '基地2b：特威泽尔（1晚）' },
    sections: [
      {
        title: { en: 'Morning – Drive to Mt Cook', zh: '上午 – 驾车前往库克山' },
        activities: [
          { time: '7:30 AM', emoji: '🍳', name: { en: 'Early breakfast & check out', zh: '早餐 & 退房' }, type: 'normal', notes: { en: 'Pack lunch, snacks, plenty of water!', zh: '准备午餐、零食、充足的水！' } },
          { time: '8:30 AM', emoji: '🚗', name: { en: 'Depart for Mt Cook via Lake Pukaki', zh: '途经普卡基湖驾车前往库克山' }, type: 'normal', notes: { en: '~1.5 hour drive', zh: '约1.5小时车程' } },
          { time: '9:00 AM', emoji: '📷', name: { en: 'Lake Pukaki Viewpoint', zh: '普卡基湖观景台' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ Intense turquoise lake with Mt Cook backdrop!', zh: '⭐ 深邃碧绿湖水，库克山背景！' } },
          { time: '10:00 AM', emoji: '🚗', name: { en: 'Continue to Hooker Valley carpark', zh: '继续前往Hooker Valley停车场' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Morning/Early Afternoon – Hooker Valley Track', zh: '上午/下午早间 – Hooker Valley步道' },
        activities: [
          { time: '10:30 AM', emoji: '🥾', name: { en: 'HOOKER VALLEY TRACK', zh: 'HOOKER VALLEY步道' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐⭐⭐ MUST-DO! 10km return, 3-4 hrs. 3 swing bridges!', zh: '⭐⭐⭐ 必做！往返10公里，3-4小时。3座吊桥！' } },
          { time: '1:00 PM', emoji: '🍽️', name: { en: 'Quick picnic lunch at trailhead', zh: '步道起点快速野餐' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Afternoon – SKYDIVE MOUNT COOK! 🪂', zh: '下午 – 库克山跳伞！ 🪂' },
        activities: [
          { time: '1:30 PM', emoji: '🚗', name: { en: 'Drive to Skydive Mount Cook (Glentanner)', zh: '驾车前往库克山跳伞（Glentanner）' }, type: 'normal', notes: { en: '~15 min drive from Hooker Valley', zh: '距Hooker Valley约15分钟车程' } },
          { time: '2:00 PM', emoji: '🪂', name: { en: 'SKYDIVE MOUNT COOK – Rose & Chris!', zh: '库克山跳伞 – Rose & Chris！' }, type: 'must-book', cost: { en: '~$299 per person (10,000ft)', zh: '约$299/人（10,000英尺）' }, notes: { en: '⭐⭐⭐ ADRENALINE RUSH! 10,000ft tandem jump over Mt Cook! ~30 min experience. Ricky, Yuyu & kids watch from ground – great viewing area!', zh: '⭐⭐⭐ 肾上腺素飙升！在库克山上空10,000英尺双人跳伞！约30分钟体验。Ricky、Yuyu和孩子们在地面观看 – 观景区很棒！' } },
          { time: '3:00 PM', emoji: '📸', name: { en: 'Post-jump photos & celebration', zh: '跳伞后拍照 & 庆祝' }, type: 'normal', notes: { en: 'Photo/video packages available', zh: '有照片/视频套餐可选' } },
        ],
      },
      {
        title: { en: 'Late Afternoon – Drive to Twizel', zh: '傍晚 – 驱车前往特威泽尔' },
        activities: [
          { time: '3:30 PM', emoji: '🚗', name: { en: 'Drive to Twizel', zh: '驱车前往特威泽尔' }, type: 'normal', notes: { en: '~45 min drive. Saves driving time for Queenstown tomorrow!', zh: '约45分钟车程。为明天去皇后镇节省时间！' } },
          { time: '4:15 PM', emoji: '🏕️', name: { en: 'Check into Twizel Holiday Park', zh: '入住特威泽尔假日公园' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '6:00 PM', emoji: '🍽️', name: { en: 'Dinner in Twizel – celebrate the jump!', zh: '在特威泽尔晚餐 – 庆祝跳伞！' }, type: 'normal' },
          { time: '9:00 PM', emoji: '🧳', name: { en: 'Pack for Queenstown', zh: '为皇后镇打包' }, type: 'normal' },
        ],
      },
    ],
    notes: { en: 'Epic day! Hooker Valley hike in the morning, then Rose & Chris SKYDIVE over Mt Cook while others watch. Quick experience (~30 min) then off to Twizel.', zh: '史诗般的一天！上午Hooker Valley徒步，然后Rose和Chris在库克山上空跳伞，其他人在地面观看。快速体验（约30分钟）然后前往特威泽尔。' },
  },
  {
    day: 6,
    date: 'April 16, 2026',
    dateLabel: { en: 'Wednesday, April 16', zh: '4月16日 周三' },
    title: { en: 'Drive to Queenstown via Cromwell', zh: '途经克伦威尔驱车前往皇后镇' },
    base: { en: 'Base 3: Queenstown (Night 1 of 2)', zh: '基地3：皇后镇（第1晚，共2晚）' },
    sections: [
      {
        title: { en: 'Morning – Scenic Drive', zh: '上午 – 风景驾车' },
        activities: [
          { time: '8:30 AM', emoji: '🍳', name: { en: 'Breakfast & check out', zh: '早餐 & 退房' }, type: 'normal' },
          { time: '9:30 AM', emoji: '🚗', name: { en: 'Depart for Queenstown', zh: '出发前往皇后镇' }, type: 'normal', notes: { en: '~2.5 hour scenic drive via Lindis Pass and Cromwell', zh: '途经Lindis Pass和克伦威尔约2.5小时风景驾车' } },
          { time: '10:30 AM', emoji: '📷', name: { en: 'Lindis Pass summit stop', zh: 'Lindis Pass峰顶停留' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
        ],
      },
      {
        title: { en: 'Midday – Cromwell Fruit Town', zh: '中午 – 克伦威尔水果小镇' },
        activities: [
          { time: '11:30 AM', emoji: '🍎', name: { en: 'Cromwell Heritage Precinct', zh: '克伦威尔历史区' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Famous fruit stalls', zh: '著名水果摊' } },
          { time: '12:00 PM', emoji: '🍽️', name: { en: 'Lunch at Cromwell', zh: '在克伦威尔午餐' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Afternoon – Arrive Queenstown', zh: '下午 – 抵达皇后镇' },
        activities: [
          { time: '1:00 PM', emoji: '🏕️', name: { en: 'Arrive Queenstown, check in', zh: '抵达皇后镇，办理入住' }, type: 'normal' },
          { time: '2:00 PM', emoji: '🚶', name: { en: 'Queenstown waterfront walk', zh: '皇后镇湖畔漫步' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
          { time: '3:00 PM', emoji: '🌳', name: { en: 'Queenstown Gardens', zh: '皇后镇花园' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
        ],
      },
      {
        title: { en: 'Evening', zh: '晚上' },
        activities: [
          { time: '6:30 PM', emoji: '🍔', name: { en: 'Dinner – Fergburger (famous!)', zh: '晚餐 – Fergburger（超有名！）' }, type: 'normal' },
        ],
      },
    ],
  },
  {
    day: 7,
    date: 'April 17, 2026',
    dateLabel: { en: 'Thursday, April 17', zh: '4月17日 周四' },
    title: { en: 'Skyline + Glenorchy Adventure Day', zh: '天际缆车 + 格林诺奇冒险日' },
    subtitle: { en: 'Both families together!', zh: '两家人一起！' },
    base: { en: 'Base 3: Queenstown (Night 2 of 2)', zh: '基地3：皇后镇（第2晚，共2晚）' },
    sections: [
      {
        title: { en: 'Morning – Skyline Gondola & Luge', zh: '上午 – 天际缆车 & 滑道' },
        activities: [
          { time: '9:00 AM', emoji: '🍳', name: { en: 'Breakfast', zh: '早餐' }, type: 'normal' },
          { time: '10:00 AM', emoji: '🚡', name: { en: 'SKYLINE GONDOLA + LUGE', zh: '天际缆车 + 滑道' }, type: 'book-ahead', cost: { en: '~$463 total', zh: '总计约$463' }, notes: { en: '⭐⭐⭐ MUST-DO! Gondola up Bob\'s Peak + 5 luge rides each.', zh: '⭐⭐⭐ 必做！缆车上鲍勃峰 + 每人5次滑道。' } },
          { time: '1:00 PM', emoji: '🍽️', name: { en: 'Lunch', zh: '午餐' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Afternoon – Glenorchy', zh: '下午 – 格林诺奇' },
        activities: [
          { time: '2:30 PM', emoji: '🚗', name: { en: 'Scenic drive to Glenorchy', zh: '风景驾车前往格林诺奇' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ One of world\'s most beautiful drives!', zh: '⭐ 世界最美公路之一！' } },
          { time: '3:30 PM', emoji: '🏘️', name: { en: 'Glenorchy Village', zh: '格林诺奇小镇' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
          { time: '5:00 PM', emoji: '🚗', name: { en: 'Return to Queenstown', zh: '返回皇后镇' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Evening – Last Night in Queenstown', zh: '晚上 – 皇后镇最后一晚' },
        activities: [
          { time: '7:00 PM', emoji: '🍽️', name: { en: 'Dinner together in Queenstown', zh: '在皇后镇一起晚餐' }, type: 'normal' },
          { time: '9:00 PM', emoji: '🧳', name: { en: 'Pack for Omarama', zh: '为奥马拉马打包' }, type: 'normal' },
        ],
      },
    ],
  },
  {
    day: 8,
    date: 'April 18, 2026',
    dateLabel: { en: 'Friday, April 18', zh: '4月18日 周五' },
    title: { en: 'Arrowtown Autumn Festival → Omarama', zh: '箭镇秋季节 → 奥马拉马' },
    subtitle: { en: 'Festival fun, then hot tubs & dark skies overnight', zh: '节日乐趣，然后温泉浴桶 & 暗夜星空过夜' },
    base: { en: 'Both Families: Omarama (1 night)', zh: '两家人：奥马拉马（1晚）' },
    sections: [
      {
        title: { en: 'Morning/Afternoon – Arrowtown Autumn Festival!', zh: '上午/下午 – 箭镇秋季节！' },
        activities: [
          { time: '8:30 AM', emoji: '🍳', name: { en: 'Breakfast at camp', zh: '营地早餐' }, type: 'normal' },
          { time: '9:30 AM', emoji: '🚗', name: { en: 'Drive to Arrowtown', zh: '驾车前往箭镇' }, type: 'normal', notes: { en: '~20 min from Queenstown', zh: '距皇后镇约20分钟' } },
          { time: '10:00 AM', emoji: '🍂', name: { en: 'ARROWTOWN AUTUMN FESTIVAL', zh: '箭镇秋季节' }, type: 'must-book', cost: { en: 'FREE entry', zh: '免费入场' }, notes: { en: '⭐ Historic gold mining town, stunning autumn colours! Market stalls, street performers, local food & wine. Kids love it!', zh: '⭐ 历史淘金小镇，绝美秋色！集市摊位、街头表演、当地美食美酒。孩子们喜欢！' } },
          { time: '12:30 PM', emoji: '🍽️', name: { en: 'Lunch at the festival', zh: '在节日午餐' }, type: 'normal', notes: { en: 'Lots of food stalls & cafés', zh: '很多美食摊位和咖啡馆' } },
          { time: '1:30 PM', emoji: '🚶', name: { en: 'Explore Arrowtown village', zh: '探索箭镇小镇' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: 'Historic Buckingham Street, Chinese Settlement, autumn trees', zh: '历史悠久的Buckingham Street，华人定居点，秋叶' } },
        ],
      },
      {
        title: { en: 'Afternoon – Drive to Omarama', zh: '下午 – 驾车前往奥马拉马' },
        activities: [
          { time: '3:00 PM', emoji: '🚗', name: { en: 'Depart Arrowtown for Omarama', zh: '从箭镇出发前往奥马拉马' }, type: 'normal', notes: { en: '~2.5 hour drive via Cromwell & Lindis Pass', zh: '途经克伦威尔和Lindis Pass约2.5小时' } },
          { time: '5:30 PM', emoji: '📍', name: { en: 'Arrive Omarama', zh: '抵达奥马拉马' }, type: 'normal' },
          { time: '6:00 PM', emoji: '🏕️', name: { en: 'Check into Omarama TOP 10', zh: '入住奥马拉马TOP 10' }, type: 'normal' },
        ],
      },
      {
        title: { en: 'Evening – Hot Tubs & Last Night Together!', zh: '晚上 – 温泉浴桶 & 最后一起过夜！' },
        activities: [
          { time: '6:30 PM', emoji: '♨️', name: { en: 'OMARAMA HOT TUBS', zh: '奥马拉马温泉浴桶' }, type: 'book-ahead', cost: { en: '~$50/person', zh: '约$50/人' }, notes: { en: '⭐ Outdoor cedar hot tubs with mountain views! Book sunset session!', zh: '⭐ 露天雪松温泉浴桶，有山景！预订日落时段！' } },
          { time: '8:00 PM', emoji: '🍽️', name: { en: 'Dinner together', zh: '一起晚餐' }, type: 'normal' },
          { time: '9:30 PM', emoji: '⭐', name: { en: 'Stargazing – dark skies!', zh: '观星 – 暗夜星空！' }, type: 'free', cost: { en: 'FREE', zh: '免费' } },
        ],
      },
    ],
    notes: { en: 'Arrowtown Autumn Festival is a highlight! Stunning golden trees, markets, and festivities. Hot tubs at sunset will be magical after a full day.', zh: '箭镇秋季节是亮点！绝美金黄树木、集市和庆典。日落温泉浴桶在充实的一天后会很神奇。' },
  },
  {
    day: 9,
    date: 'April 19, 2026',
    dateLabel: { en: 'Saturday, April 19', zh: '4月19日 周六' },
    title: { en: 'Both Families → Christchurch – Rose Departs NZ 🥹', zh: '两家人 → 基督城 – Rose离开新西兰 🥹' },
    base: { en: 'Rose: Departs NZ ✈️ | Chris: Christchurch (1 night)', zh: 'Rose：离开新西兰 ✈️ | Chris：基督城（1晚）' },
    sections: [
      {
        title: { en: 'Morning – Drive to Christchurch', zh: '上午 – 驾车前往基督城' },
        activities: [
          { time: '9:00 AM', emoji: '🍳', name: { en: 'Relaxed breakfast & check out', zh: '轻松早餐 & 退房' }, type: 'normal' },
          { time: '9:30 AM', emoji: '🚗', name: { en: 'BOTH FAMILIES → Christchurch', zh: '两家人一起 → 基督城' }, type: 'normal', notes: { en: '~2.5 hour drive', zh: '约2.5小时车程' } },
          { time: '12:00 PM', emoji: '🍽️', name: { en: 'Lunch together – last meal!', zh: '一起午餐 – 最后一顿！' }, type: 'normal' },
        ],
      },
      {
        title: { en: "Rose's Family – Departure", zh: 'Rose一家 – 出发' },
        activities: [
          { time: '2:00 PM', emoji: '🚐', name: { en: 'Return campervan', zh: '归还房车' }, type: 'normal' },
          { time: '5:45 PM', emoji: '✈️', name: { en: 'DEPART Christchurch (EK413)', zh: '基督城起飞（EK413）' }, type: 'normal' },
        ],
      },
      {
        title: { en: "Chris's Family – Christchurch", zh: 'Chris一家 – 基督城' },
        activities: [
          { time: '2:00 PM', emoji: '🏕️', name: { en: 'Check into Christchurch TOP 10', zh: '入住基督城TOP 10' }, type: 'normal' },
          { time: '6:00 PM', emoji: '🍽️', name: { en: 'Dinner', zh: '晚餐' }, type: 'normal' },
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
        title: { en: 'Morning – Mushroom Foraging', zh: '上午 – 采蘑菇' },
        activities: [
          { emoji: '😴', name: { en: 'Sleep in!', zh: '睡个懒觉！' }, type: 'free' },
          { time: '10:00 AM', emoji: '🍄', name: { en: 'BOTTLE LAKE FOREST PARK', zh: '瓶湖森林公园' }, type: 'free', cost: { en: 'FREE', zh: '免费' }, notes: { en: '⭐ Pine mushrooms! Kids LOVE it!', zh: '⭐ 松茸！孩子们超喜欢！' } },
        ],
      },
      {
        title: { en: 'Afternoon – Departure', zh: '下午 – 出发' },
        activities: [
          { time: '1:30 PM', emoji: '🚐', name: { en: 'Return campervan', zh: '归还房车' }, type: 'normal' },
          { time: '7:00 PM', emoji: '✈️', name: { en: 'DEPART Christchurch', zh: '基督城起飞' }, type: 'normal' },
        ],
      },
    ],
  },
];
