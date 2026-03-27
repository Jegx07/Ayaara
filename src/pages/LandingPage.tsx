import React from 'react';
import { Activity, Brain, Lock, Sparkles, Target, Users, Waypoints } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

<<<<<<< HEAD
const navLinks = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Mood Log", path: "/mood-log" },
  { label: "Resources", path: "/resources" },
  { label: "Community", path: "/community" },
];

const featureBannerItems = [
  { emoji: "🧠", label: "AI Mood Analysis" },
  { emoji: "📊", label: "Stress Tracking" },
  { emoji: "🎯", label: "Wellness Goals" },
  { emoji: "🏫", label: "Campus Hub" },
  { emoji: "🤝", label: "Peer Support" },
  { emoji: "📱", label: "Daily Check-ins" },
];

const statsData = [
  { value: "87%", label: "Stress Reduction" },
  { value: "12K+", label: "Active Students" },
  { value: "4.9★", label: "User Rating" },
];

const featureCardsRow1 = [
  {
    bgColor: "bg-[#ddf7b7]",
    emoji: "🧘",
    title: "Daily Mood Tracker",
    description:
      "Log feelings with emoji check-ins. See trend insights and patterns over time.",
  },
  {
    bgColor: "bg-[#e0dbff]",
    emoji: "📈",
    title: "Stress Analytics",
    description:
      "Visualize stress patterns with beautiful charts. Spot triggers before they hit.",
  },
  {
    bgColor: "bg-[#fff2d1]",
    emoji: "✨",
    title: "AI-Powered Suggestions",
    description:
      "Get personalized coping strategies based on your real emotional state.",
  },
];

const featureCardsRow2 = [
  {
    bgColor: "bg-[#d8f2ff]",
    emoji: "🏫",
    title: "Campus Resources",
    description:
      "Direct links to counseling, yoga, peer groups, and mental health helplines.",
  },
  {
    bgColor: "bg-[#ffe5e0]",
    emoji: "🤝",
    title: "Peer Support Groups",
    description:
      "Connect anonymously with students sharing similar challenges. Never alone.",
  },
  {
    bgColor: "bg-[#ddf7b7]",
    emoji: "🎯",
    title: "Wellness Goals",
    description:
      "Set daily wellbeing targets. Track streaks. Celebrate mental health wins.",
  },
];

const dashboardSidebarLinks = [
  "📊 Mood Log",
  "🎯 Goals",
  "🏫 Resources",
  "⚙ Settings",
];

const moodBarData = [
  { height: "h-12", day: "M", active: false },
  { height: "h-[60px]", day: "T", active: false },
  { height: "h-11", day: "W", active: false },
  { height: "h-16", day: "T", active: false },
  { height: "h-[52px]", day: "F", active: false },
  { height: "h-[72px]", day: "S", active: true },
  { height: "h-[62px]", day: "S", active: false },
];

const insightItems = [
  {
    emoji: "📉",
    text: "Stress peaks on Tuesdays — exam days. We send early mindfulness reminders.",
  },
  {
    emoji: "😴",
    text: "Sleep quality improved 23% when using the bedtime wind-down routine.",
  },
  {
    emoji: "🏃",
    text: "On exercise days, your mood scores were 1.8x higher on average.",
  },
];

const stepsData = [
  {
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
    quote:
      '"Finally an app that understands student stress. My counselor even recommended it!"',
    initial: "P",
    name: "Priya S.",
    year: "2nd Year, CSE",
  },
  {
    quote:
      '"The AI suggestions are shockingly accurate. It knew I was burning out before I did."',
    initial: "R",
    name: "Rahul M.",
    year: "3rd Year, MBA",
  },
  {
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
    <div className="bg-[#f4f9ef] min-h-screen w-full overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadows-sm h-16 md:h-18">
        <div className="px-4 md:px-8 lg:px-12 h-full flex items-center justify-between max-w-7xl mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/ayaara logo.jpeg"
              alt="Ayaara logo"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-bold text-[#141911] text-lg md:text-xl whitespace-nowrap">
              MotiTrack
            </span>
          </div>

          {/* Nav Links - Hidden on mobile, visible on md+ */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => navigate(link.path)}
                className="text-[#596654] text-sm hover:text-[#141911] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            type="button"
            onClick={() => navigate("/auth")}
            className="px-4 md:px-6 py-2 bg-[#141911] text-white text-xs md:text-sm font-semibold rounded-full hover:bg-[#2d3828] transition-colors whitespace-nowrap"
          >
            Get Started Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-8 lg:px-12">
        {/* Background decorative blobs */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 w-44 h-44 md:w-56 md:h-56 bg-[#ddf7b7] rounded-full flex items-center justify-center -z-20" />
        <img
          src="/ayaara logo.jpeg"
          alt="Ayaara logo"
          className="absolute top-6 right-6 md:top-10 md:right-10 w-36 h-36 md:w-52 md:h-52 rounded-full object-cover border-2 border-white shadow-lg -z-10"
        />
        <div className="absolute -left-20 top-96 w-40 h-40 md:w-64 md:h-64 bg-[#ddf7b74c] rounded-full blur-3xl -z-30" />

        <div className="max-w-7xl mx-auto">
          {/* Hero Heading */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#141911] mb-2 leading-tight">
              Track Your Mind,
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#8cd644] leading-tight">
              Conquer Your Day
            </h2>
          </div>

          {/* Hero Description */}
          <p className="text-sm md:text-base lg:text-lg text-[#596654] mb-8 max-w-2xl leading-relaxed">
            An AI-powered student wellbeing platform — track stress, monitor daily mood, connect to campus mental health resources.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="px-6 md:px-8 py-3 bg-[#141911] text-white text-sm md:text-base font-semibold rounded-full hover:bg-[#2d3828] transition-colors whitespace-nowrap"
            >
              Start Tracking Free →
            </button>
            <button
              type="button"
              onClick={() => navigate("/mood-log")}
              className="px-6 md:px-8 py-3 bg-white text-[#141911] text-sm md:text-base font-medium rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap border border-gray-200"
            >
              Watch Demo ▶
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {statsData.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#141911] mb-1">
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm text-[#596654]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-[#191e16] py-6 md:py-8 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 text-center">
            {featureBannerItems.map((item) => (
              <div
                key={item.label}
                className="text-[#728c6b] text-xs md:text-sm font-medium whitespace-nowrap"
              >
                {item.emoji}&nbsp;&nbsp;{item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#141911] mb-2">
              Everything You Need to
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#8cd644] mb-6">
              Thrive Mentally &amp; Academically
            </h3>
            <p className="text-sm md:text-base text-[#596654] max-w-2xl leading-relaxed">
              Built for students facing the real pressures of academic life.
            </p>
          </div>

          {/* Feature Cards Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {featureCardsRow1.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 ${card.bgColor} rounded-xl mb-4 flex items-center justify-center text-2xl`}>
                  {card.emoji}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#141911] mb-3">
                  {card.title}
                </h4>
                <p className="text-sm text-[#596654] leading-relaxed mb-4">
                  {card.description}
                </p>
                <div className="text-[#8cd644] font-bold text-lg">→</div>
              </div>
            ))}
          </div>

          {/* Feature Cards Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCardsRow2.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 ${card.bgColor} rounded-xl mb-4 flex items-center justify-center text-2xl`}>
                  {card.emoji}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#141911] mb-3">
                  {card.title}
                </h4>
                <p className="text-sm text-[#596654] leading-relaxed mb-4">
                  {card.description}
                </p>
                <div className="text-[#8cd644] font-bold text-lg">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="bg-[#191e16] py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            Your Wellbeing, At a Glance
          </h2>
          <p className="text-[#728c6b] text-sm md:text-base mb-12 max-w-2xl">
            Real-time personal dashboard to keep you informed and motivated.
          </p>

          {/* Dashboard Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Dashboard Card Left */}
            <div className="bg-[#232b21] rounded-3xl p-6 md:p-8 shadow-lg overflow-hidden">
              <div className="mb-6">
                <h3 className="text-[#8cd644] font-bold text-sm mb-4">MotiTrack</h3>
                <div className="bg-[#2d3828] rounded-xl p-3 mb-4">
                  <p className="text-[#8cd644] text-xs font-bold">🏠 Dashboard</p>
                </div>
                <div className="space-y-3">
                  {dashboardSidebarLinks.map((link) => (
                    <p key={link} className="text-[#728c6b] text-xs">
                      {link}
                    </p>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <p className="text-white text-base md:text-lg font-bold mb-2">
                Good morning, Arjun 👋
              </p>
              <p className="text-[#728c6b] text-xs mb-4">Thursday · March 26, 2025</p>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-[#2d3828] rounded-lg p-3">
                  <p className="text-[#8cd644] font-extrabold text-xl">7.8</p>
                  <p className="text-[#728c6b] text-[11px] mt-1">Mood Score</p>
                </div>
                <div className="bg-[#2d3828] rounded-lg p-3">
                  <p className="text-[#ffe844] font-extrabold text-xl">42%</p>
                  <p className="text-[#728c6b] text-[11px] mt-1">Stress Level</p>
                </div>
                <div className="bg-[#2d3828] rounded-lg p-3">
                  <p className="text-[#b28cff] font-extrabold text-xl">14</p>
                  <p className="text-[#728c6b] text-[11px] mt-1">Day Streak</p>
                </div>
              </div>

              {/* Mood History */}
              <p className="text-white text-xs md:text-sm font-bold mb-3">7-Day Mood History</p>
              <div className="flex items-end justify-between gap-2 mb-3 h-20">
                {moodBarData.map((bar, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className={`w-full ${bar.height} ${bar.active ? "bg-[#8cd644]" : "bg-[#2d3828]"} rounded-lg`}
                    />
                    <p className="text-[#728c6b] text-[9px]">{bar.day}</p>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <p className="text-[#728c6b] text-xs mb-3">
                Today: 3 micro-activities scheduled ✓
              </p>
              <button className="bg-[#38721e] text-[#8cd644] px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#47893d] transition-colors">
                View Plan →
              </button>
            </div>

            {/* Insights Card Right */}
            <div className="bg-[#232b21] rounded-3xl p-6 md:p-8 shadow-lg">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                Mental Wellness Insights
              </h3>
              <p className="text-[#728c6b] text-xs mb-6">
                Based on your last 30 days of tracking
              </p>

              <div className="space-y-4">
                {insightItems.map((item, idx) => (
                  <div key={idx} className="bg-[#2d3828] rounded-lg p-4">
                    <div className="flex gap-3">
                      <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                      <p className="text-[#bfd1b7] text-xs leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="text-[#8cd644] font-semibold text-xs md:text-sm mt-6 hover:text-[#a8e864] transition-colors">
                View Full Report →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#141911] mb-3">
            Simple. Smart. Supportive.
          </h2>
          <p className="text-[#596654] text-sm md:text-base mb-12">
            Three steps to a healthier student life
          </p>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stepsData.map((step) => (
              <div
                key={step.num}
                className={`${step.bg} rounded-3xl p-6 md:p-8 ${step.shadow || ""}`}
              >
                <div className={`text-3xl md:text-4xl font-extrabold ${step.numColor} mb-4`}>
                  {step.num}
                </div>
                <div className="text-4xl mb-4">{step.emoji}</div>
                <h3 className={`text-xl md:text-2xl font-bold ${step.titleColor} mb-3`}>
                  {step.title}
                </h3>
                <p className={`text-sm ${step.descColor} leading-relaxed mb-6`}>
                  {step.desc}
                </p>
                <div className={`h-1 w-12 ${step.barBg} rounded-sm`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#ddf7b7] py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#141911] mb-2">
            Students Love MotiTrack
          </h2>
          <p className="text-[#3f8c0c] text-sm md:text-base mb-12">
            Real stories from real students.
          </p>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-[#141911] text-sm leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8cd644] rounded-full flex items-center justify-center">
                    <span className="font-bold text-white text-sm">{t.initial}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#141911] text-sm">{t.name}</p>
                    <p className="text-[#596654] text-xs">{t.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#191e16] py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-[#191e16] p-8 md:p-12 lg:p-16 border border-[#2d3828]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Your mental health matters.
            </h2>
            <p className="text-[#728c6b] text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
              Start your wellbeing journey today — free for all students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="px-6 md:px-8 py-3 bg-[#8cd644] text-[#141911] text-sm md:text-base font-semibold rounded-full hover:bg-[#9dde5a] transition-colors whitespace-nowrap"
              >
                Get Started — It&#39;s Free
              </button>
              <button
                type="button"
                onClick={() => navigate("/auth")}
                className="px-6 md:px-8 py-3 bg-[#2d3828] text-[#728c6b] text-sm md:text-base font-medium rounded-full hover:bg-[#3f5330] transition-colors whitespace-nowrap"
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#191e16] px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-[#2d3828]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-[#8cd644] rounded-[10px]" />
                <span className="font-bold text-white text-lg">MotiTrack</span>
              </div>
              <p className="text-[#728c6b] text-xs md:text-sm leading-relaxed max-w-xs">
                Empowering students to take control of their mental wellbeing.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
              <div className="space-y-3">
                {footerProductLinks.map((link) => (
                  <p key={link} className="text-[#728c6b] text-xs md:text-sm hover:text-[#8cd644] transition-colors cursor-pointer">
                    {link}
                  </p>
                ))}
              </div>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
              <div className="space-y-3">
                {footerResourceLinks.map((link) => (
                  <p key={link} className="text-[#728c6b] text-xs md:text-sm hover:text-[#8cd644] transition-colors cursor-pointer">
                    {link}
                  </p>
                ))}
              </div>
            </div>

            {/* About Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">About</h4>
              <div className="space-y-3">
                {footerAboutLinks.map((link) => (
                  <p key={link} className="text-[#728c6b] text-xs md:text-sm hover:text-[#8cd644] transition-colors cursor-pointer">
                    {link}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#596b51] text-xs">
            <p>© 2025 MotiTrack. Built for SIH 2025 — Problem Statement PS6.</p>
            <div className="flex gap-4">
              <button className="hover:text-[#728c6b] transition-colors">Privacy</button>
              <span>·</span>
              <button className="hover:text-[#728c6b] transition-colors">Terms</button>
              <span>·</span>
              <button className="hover:text-[#728c6b] transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </footer>
=======
const features = [
  { icon: Brain, title: 'AI-Powered Analytics', description: 'Adaptive insights that help you stay focused and motivated.' },
  { icon: Activity, title: 'Real-time Monitoring', description: 'Track your momentum, routines, and performance every day.' },
  { icon: Target, title: 'Goal Tracking', description: 'Turn goals into measurable milestones with progress clarity.' },
  { icon: Users, title: 'Collaborative Support', description: 'Mentors and peers help you stay accountable and consistent.' },
  { icon: Waypoints, title: 'Career Alignment', description: 'Connect skill growth directly with career outcomes.' },
  { icon: Lock, title: 'Privacy First', description: 'Your personal data stays protected with secure platform controls.' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#edf1fb] text-[#222741]">
      <div className="pointer-events-none fixed left-0 top-0 h-96 w-96 rounded-full bg-[#d9ddff] blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 right-0 h-96 w-96 rounded-full bg-[#f1dcff] blur-3xl" />

      <header className="sticky top-0 z-20 border-b border-white/70 bg-white/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#6f63ff] to-[#4a50cf]" />
            <span className="font-display text-lg font-semibold">Ayaara</span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/dashboard">
              <Button variant="outline" className="border-white/80 bg-white/70 text-[#303a69] hover:bg-white">Dashboard</Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-[#5c5fdc] text-white hover:bg-[#4a50cf]">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#59629c]">
                <Sparkles className="h-3.5 w-3.5" /> Smart Growth Platform
              </p>
              <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#222741] sm:text-6xl">
                Build Better Habits.
                <br />
                Reach Bigger Goals.
              </h1>
              <p className="mt-4 max-w-xl text-base text-[#66719f] sm:text-lg">
                Ayaara brings together motivation tracking, wellness support, and career progress in a single focused workspace.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/auth">
                  <Button className="bg-[#5c5fdc] hover:bg-[#4a50cf]">Start Free Trial</Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" className="border-white/80 bg-white/75 text-[#303a69] hover:bg-white">View Demo</Button>
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/65 p-5 shadow-[0_20px_50px_rgba(84,95,170,0.2)] backdrop-blur-xl">
              <p className="font-display text-xl font-semibold text-[#2a3157]">Platform Snapshot</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ['Motivation score', '85%'],
                  ['Focus readiness', '88%'],
                  ['Career alignment', '75%'],
                  ['Study streak', '12 days'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/80 bg-white/80 p-4">
                    <p className="text-xs uppercase tracking-wide text-[#8f97bc]">{label}</p>
                    <p className="mt-1 font-display text-3xl font-semibold tracking-[-0.03em] text-[#4851bf]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#222741]">Powerful Features</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="rounded-2xl border border-white/70 bg-white/65 p-5 backdrop-blur-xl">
                    <div className="mb-3 inline-flex rounded-lg bg-[#ecefff] p-2 text-[#525ad2]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-base font-semibold text-[#2b325d]">{feature.title}</p>
                    <p className="mt-2 text-sm text-[#6b75a1]">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
>>>>>>> b1cbcdd1d4628c085fcd1a7f2030732363344a8f
    </div>
  );
}
