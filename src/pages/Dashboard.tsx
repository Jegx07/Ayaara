import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bell,
  ChartNoAxesCombined,
  CircleDollarSign,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  Wallet,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const financeStats = [
  { title: 'Total balance', value: '$67,290', note: '+2.3% for last week', highlighted: true },
  { title: 'Income', value: '+456$', note: 'The week income', trend: '+1.2%' },
  { title: 'Outcome', value: '-1,256$', note: 'The week outcome', trend: '-3.2%' },
];

const breakdown = [
  { label: 'Cost', value: 78 },
  { label: 'Net profit', value: 88 },
  { label: 'Shipping', value: 46 },
  { label: 'Tax', value: 61 },
  { label: 'PayPal fees', value: 35 },
];

const revenueFlow = [120, 210, 145, 188, 132, 97, 165];

const transactions = [
  { name: 'Starbucks', detail: 'Drinks & Food', amount: '-$5.90', positive: false },
  { name: 'Alias Bonny', detail: 'Transfer', amount: '+$56.00', positive: true },
  { name: 'Chris Alin', detail: 'Transfer', amount: '+$19,956.00', positive: true },
  { name: 'Starbucks', detail: 'Drinks & Food', amount: '-$5.90', positive: false },
  { name: 'Chris Alin', detail: 'Transfer', amount: '+$64.90', positive: true },
];

const donutSegments = [40, 20, 17, 23];

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'My wallet', path: '/skills', icon: Wallet },
  { label: 'Transactions', path: '/career', icon: CircleDollarSign },
  { label: 'Statistics', path: '/career-path', icon: ChartNoAxesCombined },
  { label: 'Setting', path: '/settings', icon: Settings },
];

export default function Dashboard() {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-[#edf1fb] text-[#23243a]">
      <div className="pointer-events-none absolute left-[-120px] top-[60%] h-72 w-72 rounded-full bg-[#d8dcff] blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] top-10 h-72 w-72 rounded-full bg-[#edd8ff] blur-3xl" />

      <aside className="relative z-10 hidden w-64 border-r border-white/60 bg-white/55 p-6 backdrop-blur-xl lg:block">
        <div className="mb-10 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#6f63ff] to-[#4a50cf]" />
          <span className="font-display text-[34px] font-semibold tracking-[-0.04em] text-[#1f2550]">MoneyLot</span>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                  active
                    ? 'bg-[#edf0ff] text-[#4f56cb]'
                    : 'text-[#7b84a7] hover:bg-[#edf0ff] hover:text-[#4f56cb]',
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/auth"
          className="mt-24 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#7b84a7] transition-colors hover:bg-[#edf0ff] hover:text-[#4f56cb]"
        >
          <LogOut className="h-4 w-4" />
          Log Out
        </Link>
      </aside>

      <div className="relative z-10 flex-1 p-4 sm:p-6">
        <div className="mx-auto max-w-[1220px] rounded-[28px] border border-white/70 bg-white/45 p-4 shadow-[0_20px_60px_rgba(62,79,150,0.15)] backdrop-blur-xl sm:p-6">
          <header className="mb-5 flex items-center gap-3">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2">
              <Search className="h-4 w-4 text-[#a4abcb]" />
              <Input
                placeholder="Search"
                className="h-auto border-0 bg-transparent p-0 text-sm text-[#2a3160] placeholder-[#a4abcb] focus-visible:ring-0"
              />
            </div>
            <button className="rounded-full border border-white/70 bg-white/65 p-2 hover:bg-white">
              <Bell className="h-5 w-5 text-[#66709f]" />
            </button>
            <button className="rounded-full border border-white/70 bg-white/65 p-2 hover:bg-white">
              <Settings className="h-5 w-5 text-[#66709f]" />
            </button>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#6f63ff] to-[#4a50cf] text-xs font-semibold text-white">
              JD
            </div>
          </header>

          <h1 className="mb-4 font-display text-5xl font-semibold tracking-[-0.04em] text-[#242743]">Dashboard</h1>

          <div className="grid gap-4 lg:grid-cols-12">
            <section className="space-y-4 lg:col-span-8">
              <article className="rounded-3xl border border-white/70 bg-gradient-to-br from-[#f2f4ff] to-[#f9f7e7] p-5">
                <p className="text-sm text-[#6f78a0]">{financeStats[0].title}</p>
                <p className="mt-1 font-display text-[58px] font-semibold leading-none tracking-[-0.05em] text-[#2a2f4e]">{financeStats[0].value}</p>
                <p className="mt-1 text-sm text-[#7480ab]">{financeStats[0].note}</p>
                <div className="mt-4 flex gap-2">
                  <button className="rounded-full border border-white/80 bg-white/85 px-6 py-2 text-sm font-semibold text-[#4f56cb]">Transfer</button>
                  <button className="rounded-full border border-white/80 bg-white/85 px-6 py-2 text-sm font-semibold text-[#6a709c]">Swap</button>
                </div>
              </article>

              <div className="grid gap-4 sm:grid-cols-2">
                {financeStats.slice(1).map((item) => (
                  <article key={item.title} className="rounded-3xl border border-white/70 bg-white/75 p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm text-[#6f78a0]">{item.title}</p>
                      <span className={cn('rounded-full px-2 py-1 text-xs font-semibold', item.trend?.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-600')}>
                        {item.trend}
                      </span>
                    </div>
                    <p className="font-display text-[42px] font-semibold leading-none tracking-[-0.04em] text-[#2a2f4e]">{item.value}</p>
                    <p className="mt-2 text-sm text-[#7480ab]">{item.note}</p>
                  </article>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-3xl border border-white/70 bg-white/75 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#2b3156]">Expense split</p>
                    <button className="text-xs font-semibold text-[#4f56cb]">Show more</button>
                  </div>
                  <p className="text-xs text-[#7d86ad]">The amount of money that was spent from the card for last 4 weeks</p>
                  <div className="mt-4 flex items-center gap-4">
                    <div
                      className="h-36 w-36 rounded-full"
                      style={{
                        background: `conic-gradient(#a99aff 0deg ${donutSegments[0] * 3.6}deg, #7ccdf7 ${donutSegments[0] * 3.6}deg ${(donutSegments[0] + donutSegments[1]) * 3.6}deg, #ffd369 ${(donutSegments[0] + donutSegments[1]) * 3.6}deg ${(donutSegments[0] + donutSegments[1] + donutSegments[2]) * 3.6}deg, #d7deff ${(donutSegments[0] + donutSegments[1] + donutSegments[2]) * 3.6}deg 360deg)`,
                      }}
                    >
                      <div className="m-[22px] flex h-[92px] w-[92px] items-center justify-center rounded-full bg-white text-center">
                        <div>
                          <p className="text-xs text-[#7b84a7]">Total</p>
                          <p className="font-display text-2xl font-semibold text-[#2a2f4e]">2,456$</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1 text-xs text-[#66709f]">
                      <p>Bills 40%</p>
                      <p>Food 20%</p>
                      <p>Healthcare 17%</p>
                      <p>Other 23%</p>
                    </div>
                  </div>
                </article>

                <article className="rounded-3xl border border-white/70 bg-white/75 p-5">
                  <p className="text-sm font-semibold text-[#2b3156]">Revenue flow</p>
                  <p className="mt-1 text-xs text-[#7d86ad]">The amount of money that was involved in financial assets</p>
                  <div className="mt-6 flex h-40 items-end justify-between gap-2">
                    {revenueFlow.map((val, idx) => (
                      <div key={idx} className="flex flex-1 flex-col items-center gap-1">
                        <div className="w-full rounded-full bg-[#e5e8f8]" style={{ height: `${val}px`, maxHeight: '130px' }}>
                          <div className="w-full rounded-full bg-gradient-to-t from-[#787cff] to-[#a9adff]" style={{ height: `${Math.max(val - 56, 24)}px` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </section>

            <section className="space-y-4 lg:col-span-4">
              <article className="rounded-3xl border border-white/70 bg-white/75 p-5">
                <p className="mb-3 text-sm font-semibold text-[#2b3156]">Abandonment rate</p>
                <p className="text-xs text-rose-500">-1.3% compare to the last week</p>
                <div className="mt-4 space-y-2">
                  {breakdown.map((item) => (
                    <div key={item.label}>
                      <div className="mb-1 flex items-center justify-between text-xs text-[#727ba2]">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <Progress value={item.value} className="h-2 bg-[#ebeef9]" />
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-white/70 bg-gradient-to-br from-[#f1f3ff] to-[#d6f5f1] p-5">
                <p className="text-sm font-semibold text-[#2b3156]">My cards (3)</p>
                <div className="mt-3 space-y-[-16px]">
                  <div className="rounded-2xl bg-gradient-to-r from-[#4540bb] to-[#7f79f0] p-4 text-white">
                    <p className="text-xs opacity-80">VISA</p>
                    <p className="mt-2 font-display text-xl">4567 7778 9907 8362</p>
                  </div>
                  <div className="ml-2 rounded-2xl bg-gradient-to-r from-[#46b9d7] to-[#79d4d1] p-4 text-white">
                    <p className="text-xs opacity-80">VISA</p>
                    <p className="mt-2 font-display text-xl">•••• •••• •••• 4221</p>
                  </div>
                  <div className="ml-4 rounded-2xl bg-gradient-to-r from-[#dff9f4] to-[#d6eef1] p-4">
                    <p className="text-sm text-[#2b3156]">Anny Gomez</p>
                    <p className="font-display text-lg text-[#25304f]">4567 7778 9907 8362</p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-white/70 bg-white/75 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#2b3156]">Last transactions</p>
                  <button className="text-xs font-semibold text-[#4f56cb]">All</button>
                </div>
                <div className="space-y-3">
                  {transactions.map((t, idx) => (
                    <div key={`${t.name}-${idx}`} className="flex items-center justify-between rounded-xl bg-white/70 px-3 py-2">
                      <div>
                        <p className="text-sm font-medium text-[#2b3156]">{t.name}</p>
                        <p className="text-xs text-[#7a84aa]">{t.detail}</p>
                      </div>
                      <p className={cn('text-sm font-semibold', t.positive ? 'text-emerald-600' : 'text-rose-500')}>
                        {t.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
