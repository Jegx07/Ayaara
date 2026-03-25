import React from 'react';
import { ArrowRight, Briefcase, Clock3, GraduationCap, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import StudentPortalLayout from '@/components/StudentPortalLayout';

const roleMatches = [
  { role: 'Frontend Engineer', match: 85, focus: 'TypeScript, Design Systems' },
  { role: 'Full-Stack Developer', match: 78, focus: 'APIs, Cloud Deployment' },
  { role: 'Product Engineer', match: 73, focus: 'UX strategy, metrics' },
];

const roadmap = [
  { title: 'Resume polish sprint', weeks: 1, state: 'Ready' },
  { title: 'Mock interview set', weeks: 2, state: 'In progress' },
  { title: 'Internship pipeline', weeks: 4, state: 'Queued' },
];

export default function CareerAssistant() {
  return (
    <StudentPortalLayout
      title="Career Assistant"
      subtitle="AI-backed guidance for decisions, applications, and role readiness"
      actions={<Button className="bg-[#1d7d54] hover:bg-[#145d3f]">Generate Career Plan</Button>}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5 lg:col-span-2">
          <p className="font-display text-xl font-semibold text-[#18271d]">Role Compatibility</p>
          <div className="mt-4 space-y-3">
            {roleMatches.map((item) => (
              <div key={item.role} className="rounded-xl border border-[#e3e9e5] bg-white p-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#24362c]">{item.role}</p>
                  <p className="text-sm font-semibold text-[#1d7d54]">{item.match}% match</p>
                </div>
                <Progress value={item.match} className="h-2 bg-[#e7ece8]" />
                <p className="mt-2 text-xs text-[#76877e]">Priority focus: {item.focus}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
          <p className="font-display text-xl font-semibold text-[#18271d]">Today from AI Coach</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl bg-gradient-to-br from-[#1d7d54] to-[#145d3f] p-4 text-white">
              <p className="text-xs uppercase tracking-wide text-white/80">Best action now</p>
              <p className="mt-1 text-sm font-semibold">Apply to 3 internship roles before 6 PM</p>
              <p className="mt-2 text-xs text-white/80">Based on your 88% focus window this week.</p>
            </div>
            <button className="w-full rounded-lg border border-[#1d7d54] px-3 py-2 text-sm font-semibold text-[#1d7d54] hover:bg-[#f0f4f1]">
              Open Application Kit
            </button>
          </div>
        </article>
      </div>

      <section className="mt-4 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
          <p className="font-display text-xl font-semibold text-[#18271d]">Career Roadmap Queue</p>
          <div className="mt-3 space-y-2">
            {roadmap.map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-lg border border-[#e3e9e5] bg-white p-3">
                <div>
                  <p className="text-sm font-semibold text-[#24362c]">{item.title}</p>
                  <p className="text-xs text-[#76877e]">{item.weeks} week target window</p>
                </div>
                <span className="rounded-md bg-[#f0f4f1] px-2 py-1 text-xs font-semibold text-[#1d7d54]">{item.state}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
          <p className="font-display text-xl font-semibold text-[#18271d]">Support Tools</p>
          <div className="mt-3 space-y-2 text-sm">
            <button className="flex w-full items-center justify-between rounded-lg border border-[#dde3df] bg-white px-3 py-2 text-[#425248] hover:bg-[#f8faf8]">
              <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-[#1d7d54]" /> Interview prep simulator</span>
              <ArrowRight className="h-4 w-4 text-[#1d7d54]" />
            </button>
            <button className="flex w-full items-center justify-between rounded-lg border border-[#dde3df] bg-white px-3 py-2 text-[#425248] hover:bg-[#f8faf8]">
              <span className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-[#1d7d54]" /> Resume optimization lab</span>
              <ArrowRight className="h-4 w-4 text-[#1d7d54]" />
            </button>
            <button className="flex w-full items-center justify-between rounded-lg border border-[#dde3df] bg-white px-3 py-2 text-[#425248] hover:bg-[#f8faf8]">
              <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#1d7d54]" /> Weekly sprint planner</span>
              <ArrowRight className="h-4 w-4 text-[#1d7d54]" />
            </button>
            <button className="flex w-full items-center justify-between rounded-lg border border-[#dde3df] bg-white px-3 py-2 text-[#425248] hover:bg-[#f8faf8]">
              <span className="flex items-center gap-2"><Target className="h-4 w-4 text-[#1d7d54]" /> Goal checkpoint review</span>
              <ArrowRight className="h-4 w-4 text-[#1d7d54]" />
            </button>
            <button className="flex w-full items-center justify-between rounded-lg border border-[#dde3df] bg-white px-3 py-2 text-[#425248] hover:bg-[#f8faf8]">
              <span className="flex items-center gap-2"><Lightbulb className="h-4 w-4 text-[#1d7d54]" /> AI idea prompts</span>
              <ArrowRight className="h-4 w-4 text-[#1d7d54]" />
            </button>
          </div>
        </article>
      </section>
    </StudentPortalLayout>
  );
}
