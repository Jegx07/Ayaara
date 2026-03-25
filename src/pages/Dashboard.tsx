import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowUpRight,
  Bell,
  CalendarDays,
  CircleHelp,
  Clock3,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Pause,
  Play,
  Search,
  Settings,
  Target,
  TrendingUp,
  Users,
  Heart,
  Zap,
  Flame,
  MessageSquare,
  BookOpen,
  Lightbulb,
  Briefcase,
  Send,
  Plus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  // Health Metrics
  const healthMetrics = [
    { label: 'Motivation', value: '85%', trend: '+5%', icon: Flame, highlighted: true },
    { label: 'Focus Score', value: '88%', trend: '+2%', icon: Zap, highlighted: false },
    { label: 'Study Streak', value: '12', trend: 'days', icon: Target, highlighted: false },
    { label: 'Heart Rate', value: '72', trend: 'bpm', icon: Heart, highlighted: false },
  ];

  // Analytics Data
  const motivationIndex = [
    { day: 'Mon', score: 78 },
    { day: 'Tue', score: 82 },
    { day: 'Wed', score: 73 },
    { day: 'Thu', score: 88 },
    { day: 'Fri', score: 92 },
    { day: 'Sat', score: 85 },
    { day: 'Sun', score: 79 },
  ];

  const vitalSigns = [
    { time: '08:00', heartRate: 68, focusScore: 75 },
    { time: '12:00', heartRate: 72, focusScore: 88 },
    { time: '16:00', heartRate: 70, focusScore: 82 },
    { time: '20:00', heartRate: 66, focusScore: 79 },
  ];

  const studyHours = [
    { day: 'Mon', study: 6.5, focus: 5.2 },
    { day: 'Tue', study: 7.0, focus: 5.8 },
    { day: 'Wed', study: 5.5, focus: 4.2 },
    { day: 'Thu', study: 8.0, focus: 6.5 },
    { day: 'Fri', study: 7.5, focus: 6.0 },
    { day: 'Sat', study: 4.0, focus: 3.0 },
    { day: 'Sun', study: 3.5, focus: 2.8 },
  ];

  // Mood Options
  const moodOptions = [
    { emoji: '😰', label: 'Anxious' },
    { emoji: '😠', label: 'Stressed' },
    { emoji: '💪', label: 'Motivated' },
    { emoji: '🧘', label: 'Calm' },
    { emoji: '😊', label: 'Happy' },
    { emoji: '😢', label: 'Tired' },
  ];

  // Gamification
  const leaderboard = [
    { rank: 1, name: 'You', points: 2750, tone: 'Gold' },
    { rank: 2, name: 'Alice', points: 2480, tone: 'Silver' },
    { rank: 3, name: 'Bob', points: 2120, tone: 'Bronze' },
  ];

  // Resources
  const resources = [
    { icon: '🧘', label: 'Guided Meditation', description: '10-15 min sessions' },
    { icon: '📊', label: 'Productivity Templates', description: 'Planning tools' },
    { icon: '💡', label: 'Stress Management', description: 'Techniques & tips' },
    { icon: '⏰', label: 'Time Management', description: 'Study schedules' },
  ];

  // Community Forum
  const forumDiscussions = [
    { title: 'How stay motivated during exams?', replies: 24 },
    { title: 'Tips for improving sleep schedule', replies: 18 },
  ];

  // Notifications
  const notifications = [
    { type: 'reminder', title: 'Time for a break', emoji: '⏱️' },
    { type: 'session', title: 'Mentor session available', emoji: '👨‍🏫' },
    { type: 'tip', title: 'Daily wellness tip ready', emoji: '💡' },
  ];

  return (
    <div className="flex min-h-screen bg-[#f6f8f6]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#e1e8e3] bg-[#fbfcfb] p-6">
        <div className="mb-8 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#1d7d54] to-[#145d3f]" />
          <span className="font-display text-lg font-semibold text-[#18271d]">Ayaara</span>
        </div>

        <nav className="mb-8 space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 rounded-lg bg-[#f0f4f1] px-3 py-2 text-sm font-medium text-[#1d7d54]"
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
            <span className="ml-auto rounded bg-[#1d7d54] px-2 py-1 text-xs font-semibold text-white">
              12
            </span>
          </Link>
          <Link
            to="/tasks"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#76877e] hover:bg-[#f0f4f1]"
          >
            <FolderKanban className="h-4 w-4" />
            Tasks
          </Link>
          <Link
            to="/calendar"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#76877e] hover:bg-[#f0f4f1]"
          >
            <CalendarDays className="h-4 w-4" />
            Calendar
          </Link>
          <Link
            to="/analytics"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#76877e] hover:bg-[#f0f4f1]"
          >
            <TrendingUp className="h-4 w-4" />
            Analytics
          </Link>
          <Link
            to="/team"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#76877e] hover:bg-[#f0f4f1]"
          >
            <Users className="h-4 w-4" />
            Team
          </Link>
        </nav>

        <div className="border-t border-[#dde3df] pt-4">
          <div className="mb-3 space-y-1 text-xs font-medium uppercase text-[#a7b6ae]">General</div>
          <Link
            to="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#76877e] hover:bg-[#f0f4f1]"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <Link
            to="/help"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#76877e] hover:bg-[#f0f4f1]"
          >
            <CircleHelp className="h-4 w-4" />
            Help
          </Link>
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#76877e] hover:bg-[#f0f4f1]">
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

        {/* Focus Sprint Card */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d7d54] to-[#145d3f] p-4 text-white">
          <p className="font-display text-sm font-semibold">Enter Focus Mode</p>
          <p className="mt-1 text-xs opacity-90">Start your study sprint</p>
          <button className="mt-3 w-full rounded-lg bg-white/20 py-2 text-xs font-semibold hover:bg-white/30">
            Start Sprint
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="sticky top-0 border-b border-[#e1e8e3] bg-[#fbfcfb] px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#e1e8e3] bg-white px-3 py-2">
              <Search className="h-4 w-4 text-[#a7b6ae]" />
              <Input
                placeholder="Search tasks, projects..."
                className="border-0 bg-transparent text-sm placeholder-[#a7b6ae] focus:outline-none focus:ring-0"
              />
            </div>
            <button className="relative rounded-lg p-2 hover:bg-[#f0f4f1]">
              <Bell className="h-5 w-5 text-[#76877e]" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-rose-500" />
            </button>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#1d7d54] to-[#145d3f] text-xs font-semibold text-white">
              JD
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="overflow-y-auto p-8">
          {/* Health Metrics */}
          <section className="mb-8">
            <div className="grid gap-4 2xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              {healthMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className={cn(
                      'rounded-2xl border p-4',
                      metric.highlighted
                        ? 'border-[#1d7d54] bg-gradient-to-br from-[#f6f8f6] to-[#fbfcfb]'
                        : 'border-[#dde3df] bg-[#fbfcfb]',
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#76877e]">{metric.label}</p>
                        <p className="font-display text-[32px] font-semibold leading-none text-[#18271d]">
                          {metric.value}
                        </p>
                        <p className="mt-2 text-xs text-[#1d7d54]">{metric.trend}</p>
                      </div>
                      <div
                        className={cn(
                          'flex h-10 w-10 items-center justify-center rounded-lg',
                          metric.highlighted ? 'bg-[#1d7d54] text-white' : 'bg-[#f0f4f1] text-[#1d7d54]',
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Analytics Charts */}
          <section className="mb-8">
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {/* Motivation Index */}
              <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-4">
                <p className="font-display text-lg font-semibold text-[#18271d]">Motivation Index</p>
                <p className="mt-1 text-xs text-[#7d8c84]">7-day trend</p>
                <div className="mt-4 flex items-end justify-between gap-1 h-24">
                  {motivationIndex.map((item) => (
                    <div key={item.day} className="flex flex-col items-center gap-1 flex-1">
                      <div
                        className="w-full rounded-t-sm bg-gradient-to-t from-[#1d7d54] to-[#2e9e68]"
                        style={{ height: `${(item.score / 100) * 80}px` }}
                      />
                      <span className="text-[10px] font-medium text-[#76877e]">{item.day}</span>
                    </div>
                  ))}
                </div>
              </article>

              {/* Vital Signs */}
              <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-4">
                <p className="font-display text-lg font-semibold text-[#18271d]">Vital Signs</p>
                <p className="mt-1 text-xs text-[#7d8c84]">Heart rate vs Focus</p>
                <div className="mt-4 space-y-3">
                  {vitalSigns.map((item) => (
                    <div key={item.time} className="flex items-center justify-between">
                      <span className="text-xs text-[#76877e]">{item.time}</span>
                      <div className="flex gap-2">
                        <div className="flex items-center gap-1">
                          <div
                            className="rounded-sm bg-rose-500"
                            style={{ width: `${item.heartRate / 2}px`, height: '6px' }}
                          />
                        </div>
                        <div className="flex items-center gap-1">
                          <div
                            className="rounded-sm bg-[#1d7d54]"
                            style={{ width: `${item.focusScore / 2}px`, height: '6px' }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Study Hours */}
              <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-4">
                <p className="font-display text-lg font-semibold text-[#18271d]">Study vs Focus</p>
                <p className="mt-1 text-xs text-[#7d8c84]">Weekly comparison</p>
                <div className="mt-4 flex items-end justify-between gap-1 h-24">
                  {studyHours.map((item) => (
                    <div key={item.day} className="flex flex-col items-center gap-1 flex-1">
                      <div className="flex w-full gap-0.5">
                        <div
                          className="flex-1 rounded-t-sm bg-amber-400"
                          style={{ height: `${(item.study / 8) * 80}px` }}
                        />
                        <div
                          className="flex-1 rounded-t-sm bg-[#1d7d54]"
                          style={{ height: `${(item.focus / 8) * 80}px` }}
                        />
                      </div>
                      <span className="text-[10px] font-medium text-[#76877e]">{item.day}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>

          {/* Mood Detection */}
          <section className="mb-8">
            <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-4">
              <p className="font-display text-lg font-semibold text-[#18271d]">How are you feeling?</p>
              <p className="mt-1 text-xs text-[#7d8c84]">Select your current mood</p>
              <div className="mt-4 flex gap-3">
                {moodOptions.map((mood) => (
                  <button
                    key={mood.label}
                    onClick={() => setSelectedMood(mood.label)}
                    className={cn(
                      'flex flex-col items-center gap-1 rounded-lg p-3 text-2xl transition-all',
                      selectedMood === mood.label
                        ? 'border-2 border-[#1d7d54] bg-[#f0f4f1]'
                        : 'border border-[#dde3df] hover:bg-[#f8faf8]',
                    )}
                  >
                    {mood.emoji}
                    <span className="text-[10px] font-medium text-[#76877e]">{mood.label}</span>
                  </button>
                ))}
              </div>
            </article>
          </section>

          {/* Gamification & Coaching */}
          <section className="mb-8 grid gap-4 lg:grid-cols-2 md:grid-cols-1">
            {/* Gamification */}
            <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-4">
              <p className="font-display text-lg font-semibold text-[#18271d]">Falling Leaves Challenge</p>
              <p className="mt-1 text-xs text-[#7d8c84]">Earn points and streaks</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gradient-to-br from-[#1d7d54]/10 to-[#2e9e68]/10 p-3">
                  <p className="text-xs text-[#76877e]">Score</p>
                  <p className="font-display text-2xl font-semibold text-[#1d7d54]">1,240</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-amber-500/10 to-amber-600/10 p-3">
                  <p className="text-xs text-[#76877e]">Streak</p>
                  <p className="font-display text-2xl font-semibold text-amber-600">8 days</p>
                </div>
              </div>
              <button className="mt-4 w-full rounded-lg bg-[#1d7d54] py-2 text-sm font-semibold text-white hover:bg-[#145d3f] flex items-center justify-center gap-2">
                <Play className="h-4 w-4" /> Play Now
              </button>

              {/* Leaderboard */}
              <div className="mt-5 space-y-2 border-t border-[#dde3df] pt-4">
                <p className="text-xs font-semibold uppercase text-[#a7b6ae]">Leaderboard</p>
                {leaderboard.map((entry) => (
                  <div key={entry.rank} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-6 w-6 rounded-full bg-[#f0f4f1] text-center text-xs font-semibold text-[#1d7d54]">
                        {entry.rank}
                      </span>
                      <span className="text-sm font-medium text-[#18271d]">{entry.name}</span>
                    </div>
                    <span className="font-semibold text-[#1d7d54]">{entry.points}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Coaching */}
            <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-4">
              <div className="grid gap-3">
                {/* Mentor Feedback */}
                <div className="rounded-lg border border-[#dde3df] bg-white p-3">
                  <p className="text-xs font-semibold text-[#76877e]">Mentor Feedback</p>
                  <textarea
                    placeholder="Share your thoughts..."
                    className="mt-2 w-full rounded-lg border border-[#dde3df] bg-[#f8faf8] px-3 py-2 text-sm placeholder-[#a7b6ae] focus:border-[#1d7d54] focus:outline-none"
                    rows={4}
                  />
                  <button className="mt-2 rounded-lg bg-[#1d7d54] px-3 py-2 text-sm font-semibold text-white hover:bg-[#145d3f] flex items-center gap-2">
                    <Send className="h-4 w-4" /> Send Response
                  </button>
                </div>

                {/* AI Coach */}
                <div className="rounded-lg bg-gradient-to-br from-[#1d7d54]/10 to-[#2e9e68]/10 p-3">
                  <p className="text-xs font-semibold text-[#1d7d54]">AI Coach Daily Habit</p>
                  <p className="mt-2 italic text-sm text-[#18271d]">"Progress is not perfection. Focus on consistency."</p>
                  <p className="mt-2 text-xs text-[#76877e]">💡 Today's habit: Take 5-minute breaks every hour</p>
                </div>
              </div>
            </article>
          </section>

          {/* Resources & Community */}
          <section className="mb-8 grid gap-4 lg:grid-cols-2 md:grid-cols-1">
            {/* Resources */}
            <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-4">
              <p className="font-display text-lg font-semibold text-[#18271d]">Resources Hub</p>
              <p className="mt-1 text-xs text-[#7d8c84]">Tools to boost productivity</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {resources.map((resource) => (
                  <button
                    key={resource.label}
                    className="rounded-lg border border-[#dde3df] bg-white p-3 text-left hover:border-[#1d7d54] hover:bg-[#f8faf8] transition-colors"
                  >
                    <p className="text-xl">{resource.icon}</p>
                    <p className="mt-1 text-sm font-semibold text-[#18271d]">{resource.label}</p>
                    <p className="text-xs text-[#76877e]">{resource.description}</p>
                  </button>
                ))}
              </div>
            </article>

            {/* Community Forum */}
            <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-4">
              <p className="font-display text-lg font-semibold text-[#18271d]">Community Forum</p>
              <p className="mt-1 text-xs text-[#7d8c84]">Connect with peers</p>
              <div className="mt-4 space-y-3">
                {forumDiscussions.map((discussion, idx) => (
                  <div key={idx} className="rounded-lg border border-[#dde3df] bg-white p-3">
                    <p className="text-sm font-semibold text-[#18271d]">{discussion.title}</p>
                    <p className="mt-1 text-xs text-[#76877e]">{discussion.replies} replies</p>
                  </div>
                ))}
                <button className="w-full rounded-lg bg-[#1d7d54] py-2 text-sm font-semibold text-white hover:bg-[#145d3f]">
                  Join Discussion
                </button>
              </div>
            </article>
          </section>

          {/* Career & Notifications */}
          <section className="mb-8 grid gap-4 lg:grid-cols-2 md:grid-cols-1">
            {/* Career Tracker */}
            <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-4">
              <p className="font-display text-lg font-semibold text-[#18271d]">Career Tracker</p>
              <p className="mt-1 text-xs text-[#7d8c84]">Current goal progress</p>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#18271d]">Software Engineer</p>
                    <span className="text-xs font-semibold text-[#1d7d54]">75%</span>
                  </div>
                  <Progress value={75} className="mt-2 h-2 bg-[#e7ece8]" />
                </div>
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 rounded-lg border border-[#1d7d54] px-3 py-2 text-xs font-semibold text-[#1d7d54] hover:bg-[#f0f4f1]">
                    <Plus className="h-4 w-4 inline mr-1" /> Add Internship
                  </button>
                  <button className="flex-1 rounded-lg bg-[#1d7d54] px-3 py-2 text-xs font-semibold text-white hover:bg-[#145d3f]">
                    View Path
                  </button>
                </div>
              </div>
            </article>

            {/* Notifications Feed */}
            <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-4">
              <p className="font-display text-lg font-semibold text-[#18271d]">Notifications</p>
              <p className="mt-1 text-xs text-[#7d8c84]">Recent updates</p>
              <div className="mt-4 space-y-3">
                {notifications.map((notif, idx) => (
                  <div key={idx} className="flex items-start justify-between rounded-lg border border-[#dde3df] bg-white p-3">
                    <div className="flex gap-2">
                      <span className="text-lg">{notif.emoji}</span>
                      <div>
                        <p className="text-sm font-semibold text-[#18271d]">{notif.title}</p>
                        <p className="text-xs text-[#76877e]">Just now</p>
                      </div>
                    </div>
                    <button className="text-xs font-semibold text-[#1d7d54] hover:underline">View</button>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
