import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bell,
  Brain,
  Briefcase,
  HeartPulse,
  Home,
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
    <div className="flex min-h-screen bg-[#f6f8f6]">
      <aside className="hidden w-64 border-r border-[#e1e8e3] bg-[#fbfcfb] p-6 lg:block">
        <div className="mb-8 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#1d7d54] to-[#145d3f]" />
          <span className="font-display text-lg font-semibold text-[#18271d]">Ayaara</span>
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
                    ? 'bg-[#f0f4f1] text-[#1d7d54]'
                    : 'text-[#76877e] hover:bg-[#f0f4f1] hover:text-[#1d7d54]',
                )}
              >
                <ItemIcon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 border-t border-[#dde3df] pt-4">
          <Link
            to="/settings"
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
              location.pathname === '/settings'
                ? 'bg-[#f0f4f1] text-[#1d7d54]'
                : 'text-[#76877e] hover:bg-[#f0f4f1] hover:text-[#1d7d54]',
            )}
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <Link
            to="/auth"
            className="mt-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#76877e] transition-colors hover:bg-[#f0f4f1] hover:text-[#1d7d54]"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      <div className="flex-1">
        <header className="sticky top-0 z-10 border-b border-[#e1e8e3] bg-[#fbfcfb]/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#e1e8e3] bg-white px-3 py-2">
              <Search className="h-4 w-4 text-[#a7b6ae]" />
              <Input
                placeholder="Search in portal..."
                className="h-auto border-0 bg-transparent p-0 text-sm placeholder-[#a7b6ae] focus-visible:ring-0"
              />
            </div>
            <button className="relative rounded-lg p-2 transition-colors hover:bg-[#f0f4f1]">
              <Bell className="h-5 w-5 text-[#76877e]" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-rose-500" />
            </button>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#1d7d54] to-[#145d3f] text-xs font-semibold text-white">
              JD
            </div>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <section className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#18271d]">{title}</h1>
              <p className="mt-1 text-sm text-[#76877e]">{subtitle}</p>
            </div>
            {actions ? <div>{actions}</div> : null}
          </section>
          {children}
        </main>
      </div>
    </div>
  );
}
