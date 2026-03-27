import line from "./line.svg";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Dashboard", left: "left-[520px]", path: "/dashboard" },
  { label: "Mood Log", left: "left-[660px]", path: "/mood-log" },
  { label: "Resources", left: "left-[800px]", path: "/resources" },
  { label: "Community", left: "left-[940px]", path: "/community" },
];

const featureBannerItems = [
  { emoji: "🧠", label: "AI Mood Analysis", left: "left-[60px]" },
  { emoji: "📊", label: "Stress Tracking", left: "left-[292px]" },
  { emoji: "🎯", label: "Wellness Goals", left: "left-[524px]" },
  { emoji: "🏫", label: "Campus Hub", left: "left-[756px]" },
  { emoji: "🤝", label: "Peer Support", left: "left-[988px]" },
  { emoji: "📱", label: "Daily Check-ins", left: "left-[1220px]" },
];

const statsData = [
  { value: "87%", label: "Stress Reduction", left: "left-[60px]" },
  { value: "12K+", label: "Active Students", left: "left-60" },
  { value: "4.9★", label: "User Rating", left: "left-[420px]" },
];

const featureCardsRow1 = [
  {
    left: "left-[60px]",
    bgColor: "bg-[#ddf7b7]",
    emoji: "🧘",
    title: "Daily Mood Tracker",
    description:
      "Log feelings with emoji check-ins. See trend insights and patterns over time.",
  },
  {
    left: "left-[510px]",
    bgColor: "bg-[#e0dbff]",
    emoji: "📈",
    title: "Stress Analytics",
    description:
      "Visualize stress patterns with beautiful charts. Spot triggers before they hit.",
  },
  {
    left: "left-[960px]",
    bgColor: "bg-[#fff2d1]",
    emoji: "✨",
    title: "AI-Powered Suggestions",
    description:
      "Get personalized coping strategies based on your real emotional state.",
  },
];

const featureCardsRow2 = [
  {
    left: "left-[60px]",
    bgColor: "bg-[#d8f2ff]",
    emoji: "🏫",
    title: "Campus Resources",
    description:
      "Direct links to counseling, yoga, peer groups, and mental health helplines.",
  },
  {
    left: "left-[510px]",
    bgColor: "bg-[#ffe5e0]",
    emoji: "🤝",
    title: "Peer Support Groups",
    description:
      "Connect anonymously with students sharing similar challenges. Never alone.",
  },
  {
    left: "left-[960px]",
    bgColor: "bg-[#ddf7b7]",
    emoji: "🎯",
    title: "Wellness Goals",
    description:
      "Set daily wellbeing targets. Track streaks. Celebrate mental health wins.",
  },
];

const dashboardSidebarLinks = [
  { label: "📊 Mood Log", top: "top-[118px]" },
  { label: "🎯 Goals", top: "top-[162px]" },
  { label: "🏫 Resources", top: "top-[206px]" },
  { label: "⚙ Settings", top: "top-[250px]" },
];

const moodBarData = [
  {
    top: "top-52",
    height: "h-12",
    left: "left-[200px]",
    labelLeft: "left-52",
    day: "M",
    active: false,
  },
  {
    top: "top-[196px]",
    height: "h-[60px]",
    left: "left-[280px]",
    labelLeft: "left-72",
    day: "T",
    active: false,
  },
  {
    top: "top-[212px]",
    height: "h-11",
    left: "left-[360px]",
    labelLeft: "left-[368px]",
    day: "W",
    active: false,
  },
  {
    top: "top-48",
    height: "h-16",
    left: "left-[440px]",
    labelLeft: "left-[448px]",
    day: "T",
    active: false,
  },
  {
    top: "top-[204px]",
    height: "h-[52px]",
    left: "left-[520px]",
    labelLeft: "left-[528px]",
    day: "F",
    active: false,
  },
  {
    top: "top-[184px]",
    height: "h-[72px]",
    left: "left-[600px]",
    labelLeft: "left-[608px]",
    day: "S",
    active: true,
  },
  {
    top: "top-[194px]",
    height: "h-[62px]",
    left: "left-[680px]",
    labelLeft: "left-[688px]",
    day: "S",
    active: false,
  },
];

const insightItems = [
  {
    emoji: "📉",
    text: "Stress peaks on Tuesdays — exam days. We send early mindfulness reminders.",
    top: "top-[100px]",
    emojiTop: "top-[114px]",
    textTop: "top-[114px]",
  },
  {
    emoji: "😴",
    text: "Sleep quality improved 23% when using the bedtime wind-down routine.",
    top: "top-[186px]",
    emojiTop: "top-[200px]",
    textTop: "top-[200px]",
  },
  {
    emoji: "🏃",
    text: "On exercise days, your mood scores were 1.8x higher on average.",
    top: "top-[272px]",
    emojiTop: "top-[286px]",
    textTop: "top-[286px]",
  },
];

const stepsData = [
  {
    left: "left-[60px]",
    bg: "bg-white",
    shadow: "shadow-[0px_8px_18px_#0000000d]",
    numColor: "text-[#ddf7b7]",
    num: "01",
    emoji: "📲",
    titleColor: "text-[#141911]",
    title: "Daily Check-In",
    descColor: "text-[#596654]",
    desc: "Spend 30 seconds rating mood, stress, and sleep. Our emoji-based system makes it effortless.",
    barBg: "bg-[#ddf7b7]",
  },
  {
    left: "left-[520px]",
    bg: "bg-[#191e16]",
    shadow: "",
    numColor: "text-[#2d3828]",
    num: "02",
    emoji: "🧠",
    titleColor: "text-white",
    title: "AI Analyzes Patterns",
    descColor: "text-[#728c6b]",
    desc: "Our AI spots trends in your emotional data and identifies stressors, triggers, and peak performance windows.",
    barBg: "bg-[#8cd644]",
  },
  {
    left: "left-[980px]",
    bg: "bg-white",
    shadow: "shadow-[0px_8px_18px_#0000000d]",
    numColor: "text-[#ddf7b7]",
    num: "03",
    emoji: "🤲",
    titleColor: "text-[#141911]",
    title: "Get Personalized Help",
    descColor: "text-[#596654]",
    desc: "Receive tailored coping exercises, campus resource suggestions, and peer connections based on what you need.",
    barBg: "bg-[#ddf7b7]",
  },
];

const testimonialsData = [
  {
    left: "left-[60px]",
    quote:
      '"Finally an app that understands student stress. My counselor even recommended it!"',
    initial: "P",
    name: "Priya S.",
    year: "2nd Year, CSE",
  },
  {
    left: "left-[520px]",
    quote:
      '"The AI suggestions are shockingly accurate. It knew I was burning out before I did."',
    initial: "R",
    name: "Rahul M.",
    year: "3rd Year, MBA",
  },
  {
    left: "left-[980px]",
    quote:
      '"Connected me to the campus counseling center — something I never found on my own."',
    initial: "A",
    name: "Aisha K.",
    year: "1st Year, Med",
  },
];

const footerProductLinks = [
  "Dashboard",
  "Mood Log",
  "AI Insights",
  "Wellness Goals",
  "Streaks",
];
const footerResourceLinks = [
  "Campus Connect",
  "Crisis Help",
  "Peer Groups",
  "Articles",
  "FAQ",
];
const footerAboutLinks = [
  "Our Mission",
  "Team",
  "Blog",
  "Press Kit",
  "Contact",
];

export default function LandingPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f4f9ef] overflow-hidden w-full min-w-[1440px] min-h-[4200px] relative">
      <div className="absolute top-0 left-0 w-[1440px] h-[72px] bg-white">
        <div className="absolute top-[18px] left-[1262px] w-[140px] h-9 bg-[#141911] rounded-[20px]" />
        <div className="absolute top-[26px] left-10 w-5 h-5 bg-[#8cd644] rounded-[10px]" />
        <div className="absolute top-6 left-[68px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
          MotiTrack
        </div>
        {navLinks.map((link) => (
          <button
            key={link.label}
            type="button"
            onClick={() => navigate(link.path)}
            className={`${link.left} absolute top-[26px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#596654] text-sm tracking-[0] leading-[normal]`}
          >
            {link.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => navigate("/auth")}
          className="absolute top-7 left-[1282px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-[normal]"
        >
          Get Started Free
        </button>
      </div>

      <div className="absolute top-[30px] left-[940px] w-[520px] h-[520px] bg-[#ddf7b773] rounded-[260px]" />
      <div className="absolute top-[520px] -left-20 w-[260px] h-[260px] bg-[#ddf7b74c] rounded-[130px]" />

      <div className="absolute top-[162px] left-[60px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#141911] text-7xl tracking-[0] leading-[normal]">
        Track Your Mind,
      </div>
      <div className="absolute top-[248px] left-[60px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#8cd644] text-7xl tracking-[0] leading-[normal]">
        Conquer Your Day
      </div>
      <p className="absolute top-[344px] left-[60px] w-[540px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-lg tracking-[0] leading-[30px]">
        An AI-powered student wellbeing platform — track stress,
        <br />
        monitor daily mood, connect to campus mental health resources.
      </p>

      <div className="absolute top-[439px] left-14 w-[218px] h-[52px] bg-[#141911] rounded-[28px]" />
      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        className="absolute top-[456px] left-[82px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]"
      >
        Start Tracking Free →
      </button>
      <div className="absolute top-[439px] left-[292px] w-[170px] h-[52px] bg-white rounded-[28px]" />
      <button
        type="button"
        onClick={() => navigate("/mood-log")}
        className="absolute top-[456px] left-[322px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#141911] text-sm tracking-[0] leading-[normal]"
      >
        Watch Demo ▶
      </button>

      {statsData.map((stat) => (
        <div key={stat.label}>
          <div
            className={`absolute top-[532px] ${stat.left} [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-[28px] tracking-[0] leading-[normal]`}
          >
            {stat.value}
          </div>
          <div
            className={`absolute top-[568px] ${stat.left} [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[13px] tracking-[0] leading-[normal]`}
          >
            {stat.label}
          </div>
        </div>
      ))}

      <div className="absolute top-[800px] left-0 w-[1440px] h-20 bg-[#191e16]" />
      {featureBannerItems.map((item) => (
        <div
          key={item.label}
          className={`absolute top-[828px] ${item.left} [font-family:'Inter-Medium',Helvetica] font-medium text-[#728c6b] text-[13px] tracking-[0] leading-[normal]`}
        >
          {item.emoji}&nbsp;&nbsp;{item.label}
        </div>
      ))}

      <div className="absolute top-[940px] left-[60px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#141911] text-[46px] tracking-[0] leading-[normal]">
        Everything You Need to
      </div>
      <div className="absolute top-[996px] left-[60px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#8cd644] text-[46px] tracking-[0] leading-[normal]">
        Thrive Mentally &amp; Academically
      </div>
      <p className="absolute top-[1072px] left-[60px] w-[600px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-base tracking-[0] leading-[26px]">
        Built for students facing the real pressures of academic life.
      </p>

      {featureCardsRow1.map((card) => (
        <div
          key={card.title}
          className={`absolute top-[1136px] ${card.left} w-[420px] h-[220px] bg-white rounded-[20px] overflow-hidden shadow-[0px_8px_18px_#0000000d]`}
        >
          <div
            className={`absolute top-6 left-6 w-[52px] h-[52px] ${card.bgColor} rounded-2xl`}
          />
          <div className="absolute top-9 left-9 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            {card.emoji}
          </div>
          <div className="absolute top-[90px] left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-lg tracking-[0] leading-[normal]">
            {card.title}
          </div>
          <p className="absolute top-[118px] left-6 w-[372px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[13px] tracking-[0] leading-5">
            {card.description}
          </p>
          <div className="absolute top-[182px] left-[376px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd644] text-lg tracking-[0] leading-[normal]">
            →
          </div>
        </div>
      ))}

      {featureCardsRow2.map((card) => (
        <div
          key={card.title}
          className={`absolute top-[1376px] ${card.left} w-[420px] h-[220px] bg-white rounded-[20px] overflow-hidden shadow-[0px_8px_18px_#0000000d]`}
        >
          <div
            className={`${card.bgColor} absolute top-6 left-6 w-[52px] h-[52px] rounded-2xl`}
          />
          <div className="absolute top-9 left-9 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            {card.emoji}
          </div>
          <div className="absolute top-[90px] left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-lg tracking-[0] leading-[normal]">
            {card.title}
          </div>
          <p className="absolute top-[118px] left-6 w-[372px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[13px] tracking-[0] leading-5">
            {card.description}
          </p>
          <div className="absolute top-[182px] left-[376px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd644] text-lg tracking-[0] leading-[normal]">
            →
          </div>
        </div>
      ))}

      <div className="absolute top-[1680px] left-0 w-[1440px] h-[620px] bg-[#191e16]" />

      <p className="absolute top-[1740px] left-[60px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-[44px] tracking-[0] leading-[normal]">
        Your Wellbeing, At a Glance
      </p>
      <p className="absolute top-[1806px] left-[60px] w-[520px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-base tracking-[0] leading-[26px]">
        Real-time personal dashboard to keep you informed and motivated.
      </p>

      <div className="absolute top-[1870px] left-[60px] w-[780px] h-[380px] bg-[#232b21] rounded-3xl overflow-hidden shadow-[0px_8px_50px_#00000059]">
        <div className="absolute top-0 left-0 w-[180px] h-[380px] bg-[#191e16] rounded-3xl" />
        <div className="absolute top-[22px] left-5 [font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd644] text-sm tracking-[0] leading-[normal]">
          MotiTrack
        </div>
        <div className="absolute top-[66px] left-2 w-[164px] h-9 bg-[#2d3828] rounded-[10px]" />
        <div className="absolute top-[74px] left-5 [font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd644] text-xs tracking-[0] leading-[normal]">
          🏠 Dashboard
        </div>
        {dashboardSidebarLinks.map((link) => (
          <div
            key={link.label}
            className={`absolute ${link.top} left-5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-xs tracking-[0] leading-[normal]`}
          >
            {link.label}
          </div>
        ))}
        <div className="absolute top-[328px] left-4 w-8 h-8 bg-[#8cd644] rounded-2xl" />
        <div className="absolute top-[332px] left-14 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
          Arjun K.
        </div>
        <div className="absolute top-[348px] left-14 [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
          Student
        </div>
        <div className="absolute top-6 left-[200px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Good morning, Arjun 👋
        </div>
        <p className="absolute top-[46px] left-[200px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
          Thursday · March 26, 2025
        </p>
        <div className="absolute top-[72px] left-[200px] w-[174px] h-20 bg-[#2d3828] rounded-[14px]" />
        <div className="absolute top-[88px] left-[216px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#8cd644] text-2xl tracking-[0] leading-[normal]">
          7.8
        </div>
        <div className="absolute top-[118px] left-[216px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
          Mood Score
        </div>
        <div className="absolute top-[72px] left-[388px] w-[174px] h-20 bg-[#2d3828] rounded-[14px]" />
        <div className="absolute top-[88px] left-[404px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#ffe844] text-2xl tracking-[0] leading-[normal]">
          42%
        </div>
        <div className="absolute top-[118px] left-[404px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
          Stress Level
        </div>
        <div className="absolute top-[72px] left-[576px] w-[174px] h-20 bg-[#2d3828] rounded-[14px]" />
        <div className="absolute top-[88px] left-[592px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#b28cff] text-2xl tracking-[0] leading-[normal]">
          14
        </div>
        <div className="absolute top-[118px] left-[592px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
          Day Streak
        </div>
        <div className="absolute top-[172px] left-[200px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[13px] tracking-[0] leading-[normal]">
          7-Day Mood History
        </div>
        {moodBarData.map((bar, idx) => (
          <div key={idx}>
            <div
              className={`absolute ${bar.top} ${bar.left} w-[50px] ${bar.height} ${bar.active ? "bg-[#8cd644]" : "bg-[#2d3828]"} rounded-lg`}
            />
            <div
              className={`absolute top-[266px] ${bar.labelLeft} [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[9px] tracking-[0] leading-[normal]`}
            >
              {bar.day}
            </div>
          </div>
        ))}
        <p className="absolute top-[296px] left-[200px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
          Today: 3 micro-activities scheduled ✓
        </p>
        <div className="absolute top-[318px] left-[200px] w-[118px] h-7 bg-[#38721e] rounded-[14px]" />
        <div className="absolute top-[326px] left-[216px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#8cd644] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
          View Plan →
        </div>
      </div>

      <div className="absolute top-[1870px] left-[880px] w-[500px] h-[380px] bg-[#232b21] rounded-3xl overflow-hidden">
        <div className="absolute top-[30px] left-[30px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
          Mental Wellness Insights
        </div>
        <p className="absolute top-[60px] left-[30px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-xs tracking-[0] leading-[normal]">
          Based on your last 30 days of tracking
        </p>
        {insightItems.map((item, idx) => (
          <div key={idx}>
            <div
              className={`absolute ${item.top} left-5 w-[460px] h-[72px] bg-[#2d3828] rounded-[14px]`}
            />
            <div
              className={`absolute ${item.emojiTop} left-9 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal] whitespace-nowrap`}
            >
              {item.emoji}
            </div>
            <p
              className={`absolute ${item.textTop} left-[68px] w-[370px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bfd1b7] text-xs tracking-[0] leading-[18px]`}
            >
              {item.text}
            </p>
          </div>
        ))}
        <div className="absolute top-[348px] left-[30px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#8cd644] text-[13px] tracking-[0] leading-[normal]">
          View Full Report →
        </div>
      </div>

      <div className="absolute top-[2360px] left-[60px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#141911] text-[46px] tracking-[0] leading-[normal]">
        Simple. Smart. Supportive.
      </div>
      <p className="absolute top-[2420px] left-[60px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-lg tracking-[0] leading-7 whitespace-nowrap">
        Three steps to a healthier student life
      </p>

      {stepsData.map((step) => (
        <div
          key={step.num}
          className={`absolute top-[2478px] ${step.left} w-[420px] h-[290px] flex flex-col ${step.bg} rounded-3xl overflow-hidden ${step.shadow}`}
        >
          <div
            className={`ml-7 w-11 h-11 mt-7 [font-family:'Inter-ExtraBold',Helvetica] font-extrabold ${step.numColor} text-4xl tracking-[0] leading-[normal]`}
          >
            {step.num}
          </div>
          <div className="ml-7 w-[38px] h-[38px] mt-3 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[38px] tracking-[0] leading-[normal] whitespace-nowrap">
            {step.emoji}
          </div>
          <div
            className={`ml-7 mt-[18px] [font-family:'Inter-Bold',Helvetica] font-bold ${step.titleColor} text-[22px] tracking-[0] leading-[normal]`}
          >
            {step.title}
          </div>
          <p
            className={`ml-7 w-[364px] h-10 mt-[7px] [font-family:'Inter-Regular',Helvetica] font-normal ${step.descColor} text-sm tracking-[0] leading-[22px]`}
          >
            {step.desc}
          </p>
          <div className={`ml-7 w-14 h-1 mt-[38px] ${step.barBg} rounded-sm`} />
        </div>
      ))}

      <div className="absolute top-[2840px] left-0 w-[1440px] h-[420px] bg-[#ddf7b7]" />

      <div className="absolute top-[2890px] left-[60px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#141911] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
        Students Love MotiTrack
      </div>
      <p className="absolute top-[2944px] left-[60px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f8c0c] text-base tracking-[0] leading-[normal] whitespace-nowrap">
        Real stories from real students.
      </p>

      {testimonialsData.map((t) => (
        <div
          key={t.name}
          className={`absolute top-[2980px] ${t.left} w-[420px] h-[220px] bg-white rounded-[20px] overflow-hidden shadow-[0px_8px_16px_#0000000f]`}
        >
          <p className="absolute top-6 left-6 w-[372px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#141911] text-sm tracking-[0] leading-[22px]">
            {t.quote}
          </p>
          <div className="absolute top-[152px] left-6 w-10 h-10 bg-[#8cd644] rounded-[20px]" />
          <div className="absolute top-[165px] left-9 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal]">
            {t.initial}
          </div>
          <div className="absolute top-[152px] left-[74px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-sm tracking-[0] leading-[normal]">
            {t.name}
          </div>
          <div className="absolute top-[172px] left-[74px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-xs tracking-[0] leading-[normal]">
            {t.year}
          </div>
        </div>
      ))}

      <div className="absolute top-[3340px] left-[60px] w-[1320px] h-[280px] bg-[#191e16] rounded-[32px]" />
      <div className="absolute top-[3400px] left-[120px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-[44px] tracking-[0] leading-[normal]">
        Your mental health matters.
      </div>
      <p className="absolute top-[3468px] left-[120px] w-[600px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-lg tracking-[0] leading-7">
        Start your wellbeing journey today — free for all students.
      </p>
      <div className="absolute top-[3508px] left-[120px] w-[220px] h-[52px] bg-[#8cd644] rounded-[30px]" />
      <p className="absolute top-[3524px] left-[148px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141911] text-sm tracking-[0] leading-[normal]">
        Get Started — It&#39;s Free
      </p>
      <div className="absolute top-[3508px] left-[354px] w-[190px] h-[52px] bg-[#2d3828] rounded-[30px]" />
      <div className="absolute top-[3524px] left-96 [font-family:'Inter-Medium',Helvetica] font-medium text-[#728c6b] text-sm tracking-[0] leading-[normal]">
        Schedule a Demo
      </div>

      <div className="absolute top-[3720px] left-[-5px] w-[1448px] h-[480px] bg-[#191e16]" />

      <div className="top-[3758px] w-5 h-5 bg-[#8cd644] rounded-[10px] absolute left-[60px]" />
      <div className="absolute top-[3756px] left-[88px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
        MotiTrack
      </div>
      <p className="top-[3792px] w-[280px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-sm tracking-[0] leading-[22px] absolute left-[60px]">
        Empowering students to take control
        <br />
        of their mental wellbeing.
      </p>

      <div className="absolute top-[3756px] left-[500px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-[normal]">
        Product
      </div>
      {footerProductLinks.map((link, idx) => (
        <div
          key={link}
          className="absolute left-[500px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[13px] tracking-[0] leading-[normal]"
          style={{ top: `${3782 + idx * 28}px` }}
        >
          {link}
        </div>
      ))}

      <div className="absolute top-[3756px] left-[760px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-[normal]">
        Resources
      </div>
      {footerResourceLinks.map((link, idx) => (
        <div
          key={link}
          className="absolute left-[760px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[13px] tracking-[0] leading-[normal]"
          style={{ top: `${3782 + idx * 28}px` }}
        >
          {link}
        </div>
      ))}

      <div className="absolute top-[3756px] left-[1020px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-[normal]">
        About
      </div>
      {footerAboutLinks.map((link, idx) => (
        <div
          key={link}
          className="absolute left-[1020px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[13px] tracking-[0] leading-[normal]"
          style={{ top: `${3782 + idx * 28}px` }}
        >
          {link}
        </div>
      ))}

      <img
        className="absolute top-[4099px] left-[60px] w-[1320px] h-px object-cover"
        alt="Line"
        src={line}
      />
      <p className="absolute top-[4116px] left-[60px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596b51] text-xs tracking-[0] leading-[normal]">
        © 2025 MotiTrack. Built for SIH 2025 — Problem Statement PS6.
      </p>
      <p className="absolute top-[4116px] left-[1140px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596b51] text-xs tracking-[0] leading-[normal]">
        Privacy · Terms · Contact
      </p>
    </div>
  );
}
