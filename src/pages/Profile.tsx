import React from 'react';
import { BadgeCheck, BookOpen, Briefcase, Mail, Phone, Shield, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import StudentPortalLayout from '@/components/StudentPortalLayout';

const profileStats = [
  { label: 'Focus score', value: '88%' },
  { label: 'Career readiness', value: '75%' },
  { label: 'Current streak', value: '12 days' },
];

export default function Profile() {
  return (
    <StudentPortalLayout
      title="My Profile"
      subtitle="Manage your account, learning progress, and personal details"
      actions={<Button className="bg-[#1d7d54] hover:bg-[#145d3f]">Edit Profile</Button>}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5 lg:col-span-1">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1d7d54] to-[#145d3f] text-lg font-semibold text-white">
              JD
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-[#18271d]">John Doe</p>
              <p className="text-sm text-[#76877e]">Computer Science Student</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-[#425248]">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#1d7d54]" /> john.doe@ayaara.edu</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#1d7d54]" /> +1 (555) 102-3344</p>
            <p className="flex items-center gap-2"><UserRound className="h-4 w-4 text-[#1d7d54]" /> Student ID: AY-2026-114</p>
          </div>
          <button className="mt-4 w-full rounded-lg border border-[#1d7d54] px-3 py-2 text-sm font-semibold text-[#1d7d54] hover:bg-[#f0f4f1]">
            Download Resume Snapshot
          </button>
        </article>

        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5 lg:col-span-2">
          <p className="font-display text-xl font-semibold text-[#18271d]">Progress Overview</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {profileStats.map((item) => (
              <div key={item.label} className="rounded-xl border border-[#e3e9e5] bg-white p-3">
                <p className="text-xs uppercase tracking-wide text-[#8ea096]">{item.label}</p>
                <p className="mt-1 font-display text-2xl font-semibold text-[#1d7d54]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-[#e3e9e5] bg-white p-4">
              <p className="text-sm font-semibold text-[#24362c]">Skill Roadmap</p>
              <div className="mt-3 space-y-3 text-sm text-[#425248]">
                <div>
                  <div className="mb-1 flex items-center justify-between"><span>Frontend Engineering</span><span>82%</span></div>
                  <Progress value={82} className="h-2 bg-[#e7ece8]" />
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between"><span>Backend Foundations</span><span>69%</span></div>
                  <Progress value={69} className="h-2 bg-[#e7ece8]" />
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between"><span>System Design</span><span>55%</span></div>
                  <Progress value={55} className="h-2 bg-[#e7ece8]" />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#e3e9e5] bg-white p-4">
              <p className="text-sm font-semibold text-[#24362c]">Quick Actions</p>
              <div className="mt-3 space-y-2 text-sm">
                <button className="flex w-full items-center justify-between rounded-lg border border-[#dde3df] px-3 py-2 text-[#425248] hover:bg-[#f8faf8]">
                  <span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#1d7d54]" /> Update Learning Plan</span>
                  <BadgeCheck className="h-4 w-4 text-[#1d7d54]" />
                </button>
                <button className="flex w-full items-center justify-between rounded-lg border border-[#dde3df] px-3 py-2 text-[#425248] hover:bg-[#f8faf8]">
                  <span className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-[#1d7d54]" /> Track Internship Pipeline</span>
                  <BadgeCheck className="h-4 w-4 text-[#1d7d54]" />
                </button>
                <button className="flex w-full items-center justify-between rounded-lg border border-[#dde3df] px-3 py-2 text-[#425248] hover:bg-[#f8faf8]">
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#1d7d54]" /> Privacy & Security</span>
                  <BadgeCheck className="h-4 w-4 text-[#1d7d54]" />
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </StudentPortalLayout>
  );
}
