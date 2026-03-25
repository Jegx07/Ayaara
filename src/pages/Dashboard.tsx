import React from 'react';
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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, badge: '' },
  { label: 'Tasks', href: '/skills', icon: FolderKanban, badge: '12' },
  { label: 'Calendar', href: '/career', icon: CalendarDays, badge: '' },
  { label: 'Analytics', href: '/career-path', icon: TrendingUp, badge: '' },
  { label: 'Team', href: '/mental-support', icon: Users, badge: '' },
];

const generalItems = [
  { label: 'Settings', href: '/settings', icon: Settings },
  { label: 'Help', href: '/profile', icon: CircleHelp },
  { label: 'Logout', href: '/auth', icon: LogOut },
];

const kpis = [
  { label: 'Total projects', value: '24', note: 'Increased from last month', highlighted: true },
  { label: 'Ended projects', value: '10', note: 'Increased from last month', highlighted: false },
  { label: 'Running projects', value: '12', note: 'Increased from last month', highlighted: false },
  { label: 'Pending project', value: '2', note: 'In discuss', highlighted: false },
];

const analytics = [
  { day: 'S', score: 42 },
  { day: 'M', score: 76 },
  { day: 'T', score: 68 },
  { day: 'W', score: 84 },
  { day: 'T', score: 54 },
  { day: 'F', score: 48 },
  { day: 'S', score: 62 },
];

const skillProgress = [
  { label: 'React architecture', value: 87, status: 'Completed' },
  { label: 'Data structures', value: 63, status: 'In progress' },
  { label: 'Cloud fundamentals', value: 48, status: 'Pending' },
  { label: 'Career prep', value: 72, status: 'In progress' },
];

const motivationStatuses = [
  { name: 'Completed', value: 41, color: 'bg-emerald-700' },
  { name: 'In progress', value: 37, color: 'bg-emerald-500' },
  { name: 'Pending', value: 22, color: 'bg-slate-300' },
];

const completion = 41;

export default function Dashboard() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#eaeeeb] p-3 sm:p-5">
      <div className="mx-auto grid min-h-[100dvh] max-w-[1480px] grid-cols-1 gap-3 rounded-[30px] border border-[#d8ded9] bg-[#f6f8f6] p-3 shadow-[0_22px_60px_-36px_rgba(19,39,26,0.28)] lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="rounded-[24px] border border-[#dde3df] bg-white p-5">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-600/40 bg-emerald-600/10">
              <Target className="h-5 w-5 text-emerald-700" />
            </div>
            <div>
              <p className="font-display text-xl font-semibold leading-none tracking-[-0.02em] text-[#16211a]">MotiTrack</p>
              <p className="mt-1 text-xs font-medium text-[#6f7f75]">Student hub</p>
            </div>
          </div>

          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8d9992]">Menu</div>
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const active = location.pathname === item.href || (item.href === '/dashboard' && location.pathname === '/student');
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
                    active
                      ? 'bg-emerald-600 text-white shadow-[0_14px_30px_-16px_rgba(24,116,78,0.85)]'
                      : 'text-[#4f6056] hover:bg-[#eef3ef] hover:text-[#1d2a22]',
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <item.icon className="h-4.5 w-4.5" />
                    {item.label}
                  </span>
                  {item.badge ? (
                    <span className={cn('rounded-md px-1.5 py-0.5 text-[10px] font-semibold', active ? 'bg-white/20' : 'bg-emerald-600 text-white')}>
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="mb-4 mt-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8d9992]">General</div>
          <div className="space-y-1.5">
            {generalItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-[#6a7970] transition-colors hover:bg-[#eef3ef] hover:text-[#1d2a22]"
              >
                <item.icon className="h-4.5 w-4.5" />
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-900/20 bg-[radial-gradient(80%_120%_at_0%_0%,#145f3f_0%,#0f3224_55%,#0c2519_100%)] p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
            <p className="font-display text-lg font-semibold tracking-[-0.02em]">Focus mode</p>
            <p className="mt-1 text-xs text-emerald-100/90">Take your next 25-minute sprint.</p>
            <Button className="mt-4 h-9 w-full rounded-full bg-white text-xs font-semibold text-emerald-900 hover:bg-white/90">
              Start sprint
            </Button>
          </div>
        </aside>

        <main className="rounded-[24px] border border-[#dde3df] bg-white p-4 sm:p-6">
          <header className="mb-5 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div className="relative w-full max-w-xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7f8e86]" />
              <Input
                placeholder="Search task"
                className="h-12 rounded-2xl border-[#dbe2de] bg-[#f8faf8] pl-11 text-sm text-[#203228] placeholder:text-[#8a9890] focus-visible:ring-emerald-600"
              />
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9e0dc] bg-[#f7f9f7] text-[#617067] transition-colors hover:bg-[#edf3ef]">
                <Bell className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3 rounded-2xl border border-[#d9e0dc] bg-[#f8faf8] px-3 py-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-800">TM</div>
                <div>
                  <p className="text-sm font-semibold text-[#1f2d24]">Totok Michael</p>
                  <p className="text-xs text-[#7a8a81]">tmichael20@mail.com</p>
                </div>
              </div>
            </div>
          </header>

          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-display text-[42px] font-semibold leading-[0.95] tracking-[-0.035em] text-[#152319]">Dashboard</h1>
              <p className="mt-2 max-w-2xl text-sm text-[#7d8b84]">Plan, prioritize, and accomplish your study targets with clarity.</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Button className="h-11 rounded-full bg-emerald-700 px-6 text-sm font-semibold text-white shadow-[0_14px_30px_-16px_rgba(24,116,78,0.9)] hover:bg-emerald-800">
                + Add project
              </Button>
              <Button variant="outline" className="h-11 rounded-full border-emerald-700/45 bg-white px-6 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">
                Import data
              </Button>
            </div>
          </div>

          <section className="grid grid-cols-1 gap-3 md:grid-cols-2 2xl:grid-cols-4">
            {kpis.map((card) => (
              <article
                key={card.label}
                className={cn(
                  'rounded-2xl border p-4 transition-all duration-300',
                  card.highlighted
                    ? 'border-emerald-800/20 bg-[radial-gradient(120%_120%_at_0%_0%,#2e9e68_0%,#18744e_58%,#145d3f_100%)] text-white shadow-[0_18px_40px_-20px_rgba(17,84,56,0.9)]'
                    : 'border-[#dde3df] bg-[#fbfcfb] text-[#1f2d24] hover:border-emerald-700/30',
                )}
              >
                <div className="mb-3 flex items-center justify-between">
                  <p className={cn('text-sm font-medium', card.highlighted ? 'text-emerald-50' : 'text-[#32443a]')}>{card.label}</p>
                  <span className={cn('flex h-7 w-7 items-center justify-center rounded-full border', card.highlighted ? 'border-white/45' : 'border-[#c4cec8]')}>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
                <p className="font-display text-5xl font-semibold leading-none tracking-[-0.04em]">{card.value}</p>
                <p className={cn('mt-3 text-xs font-medium', card.highlighted ? 'text-emerald-100' : 'text-[#7c8b82]')}>{card.note}</p>
              </article>
            ))}
          </section>

          <section className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-[1.55fr_0.95fr]">
            <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-display text-[24px] font-semibold tracking-[-0.03em] text-[#18271d]">Project analytics</p>
              </div>
              <div className="h-[252px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analytics} barCategoryGap={28}>
                    <CartesianGrid vertical={false} stroke="#e6ece8" strokeDasharray="3 4" />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: '#809087', fontSize: 12 }} />
                    <YAxis hide domain={[0, 100]} />
                    <Tooltip
                      cursor={{ fill: '#eff5f1' }}
                      contentStyle={{ borderRadius: '14px', border: '1px solid #d6dfd8', backgroundColor: '#ffffff' }}
                    />
                    <Bar dataKey="score" radius={[20, 20, 20, 20]} fill="#1f7a52" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </article>

            <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-4">
              <p className="font-display text-[24px] font-semibold tracking-[-0.03em] text-[#18271d]">Motivation status</p>
              <p className="mt-1 text-sm text-[#7d8c84]">Weekly completion and readiness distribution</p>

              <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                <div
                  className="relative h-40 w-40 rounded-full"
                  style={{ background: `conic-gradient(#1d7d54 ${completion * 3.6}deg, #cfdbd4 ${completion * 3.6}deg 360deg)` }}
                >
                  <div className="absolute inset-[16px] flex items-center justify-center rounded-full bg-white text-center shadow-[inset_0_0_0_1px_#deE5E0]">
                    <div>
                      <p className="font-display text-4xl font-semibold leading-none tracking-[-0.03em] text-[#122218]">{completion}%</p>
                      <p className="mt-1 text-xs font-medium text-[#7c8b82]">Project ended</p>
                    </div>
                  </div>
                </div>

                <div className="w-full space-y-3">
                  {motivationStatuses.map((status) => (
                    <div key={status.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-medium text-[#283930]">{status.name}</span>
                        <span className="text-[#708077]">{status.value}%</span>
                      </div>
                      <Progress value={status.value} className="h-2 bg-[#e7ece8]" />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </section>

          <section className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-[1.55fr_0.95fr]">
            <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-display text-[24px] font-semibold tracking-[-0.03em] text-[#18271d]">Skill progress</p>
                <Button variant="outline" className="h-8 rounded-full border-[#d6dfd8] px-3 text-xs font-semibold text-[#33453b] hover:bg-[#eff4f1]">
                  + Add skill
                </Button>
              </div>

              <div className="space-y-4">
                {skillProgress.map((skill) => (
                  <div key={skill.label}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-[#25362d]">{skill.label}</p>
                      <span className="rounded-md bg-[#ecf3ef] px-2 py-1 text-xs font-medium text-[#5f7268]">{skill.status}</span>
                    </div>
                    <Progress value={skill.value} className="h-2.5 bg-[#e6ece8]" />
                  </div>
                ))}
              </div>

              <div className="mt-6 h-[178px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={analytics.map((point, index) => ({
                      ...point,
                      consistency: [52, 64, 61, 78, 70, 68, 72][index],
                    }))}
                  >
                    <defs>
                      <linearGradient id="consistencyFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2A8A5E" stopOpacity={0.34} />
                        <stop offset="95%" stopColor="#2A8A5E" stopOpacity={0.04} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} stroke="#edf2ef" />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: '#819189', fontSize: 12 }} />
                    <YAxis hide domain={[0, 100]} />
                    <Tooltip contentStyle={{ borderRadius: '14px', border: '1px solid #d6dfd8', backgroundColor: '#ffffff' }} />
                    <Area type="monotone" dataKey="consistency" stroke="#1E7D54" strokeWidth={2.4} fill="url(#consistencyFill)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </article>

            <article className="rounded-2xl border border-[#dde3df] bg-[radial-gradient(130%_140%_at_80%_-10%,#1f7f56_0%,#134931_48%,#102d20_100%)] p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <p className="font-display text-[24px] font-semibold tracking-[-0.03em]">Focus timer</p>
              <p className="mt-1 text-sm text-emerald-100/85">Current deep-work session</p>

              <div className="mt-7 text-center">
                <Clock3 className="mx-auto mb-3 h-8 w-8 text-emerald-100" />
                <p className="font-display text-[50px] font-semibold leading-none tracking-[-0.04em]">01:24:08</p>
                <p className="mt-2 text-sm text-emerald-100/80">Session quality: stable</p>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-emerald-900 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]">
                  <Play className="h-5 w-5" />
                </button>
                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30">
                  <Pause className="h-5 w-5" />
                </button>
                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30">
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
