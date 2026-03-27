import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bell,
  Brain,
  Briefcase,
  HeartPulse,
  Home,
  MessageCircle,
  LogOut,
  Search,
  Settings,
  UserCircle2,
  Waypoints,
  Wifi,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface StudentPortalLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: Home },
  { label: 'AI Chatbot', path: '/chatbot', icon: MessageCircle },
  { label: 'Skill Assessment', path: '/skills', icon: Brain },
  { label: 'Career Assistant', path: '/career', icon: Briefcase },
  { label: 'Career Path', path: '/career-path', icon: Waypoints },
  { label: 'IoT Devices', path: '/iot', icon: Wifi },
  { label: 'Mental Support', path: '/mental-support', icon: HeartPulse },
  { label: 'Profile', path: '/profile', icon: UserCircle2 },
];

export default function StudentPortalLayout({ title, subtitle, children, actions }: StudentPortalLayoutProps) {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen bg-[#edf1fb]">
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-[#d8dcff] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#f1dbff] blur-3xl" />
      <aside className="hidden w-64 border-r border-white/60 bg-white/55 p-6 backdrop-blur-xl lg:block">
        <div className="mb-8 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#6f63ff] to-[#4a50cf]" />
          <span className="font-display text-lg font-semibold text-[#202646]">Ayaara</span>
        </div>

        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const ItemIcon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  active
                    ? 'bg-[#eef0ff] text-[#4d56cc]'
                    : 'text-[#67719b] hover:bg-[#eef0ff] hover:text-[#4d56cc]',
                )}
              >
                <ItemIcon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 border-t border-white/70 pt-4">
          <Link
            to="/settings"
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
              location.pathname === '/settings'
                ? 'bg-[#eef0ff] text-[#4d56cc]'
                : 'text-[#67719b] hover:bg-[#eef0ff] hover:text-[#4d56cc]',
            )}
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <Link
            to="/auth"
            className="mt-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#67719b] transition-colors hover:bg-[#eef0ff] hover:text-[#4d56cc]"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      <div className="relative z-10 flex-1">
        <header className="sticky top-0 z-10 border-b border-white/60 bg-white/45 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-[0_10px_24px_rgba(80,88,160,0.08)]">
              <Search className="h-4 w-4 text-[#a6afcc]" />
              <Input
                placeholder="Search in portal..."
                className="h-auto border-0 bg-transparent p-0 text-sm text-[#28305a] placeholder-[#a6afcc] focus-visible:ring-0"
              />
            </div>
            <button className="relative rounded-full border border-white/70 bg-white/60 p-2 transition-colors hover:bg-white">
              <Bell className="h-5 w-5 text-[#67719b]" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-rose-500" />
            </button>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#6f63ff] to-[#4a50cf] text-xs font-semibold text-white shadow-[0_10px_20px_rgba(74,80,207,0.35)]">
              JD
            </div>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <section className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#202646]">{title}</h1>
              <p className="mt-1 text-sm text-[#6f78a0]">{subtitle}</p>
            </div>
            {actions ? <div>{actions}</div> : null}
          </section>
          {children}
        </main>
      </div>
    </div>
  );
}
