import React from 'react';
import { CheckCircle2, Circle, Compass, Milestone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import StudentPortalLayout from '@/components/StudentPortalLayout';

const pathSteps = [
  { phase: 'Foundation', item: 'Complete advanced React patterns', progress: 100, done: true },
  { phase: 'Build', item: 'Ship one full-stack production project', progress: 72, done: false },
  { phase: 'Validate', item: 'Pass 2 mock interviews', progress: 45, done: false },
  { phase: 'Launch', item: 'Apply to top 20 internship roles', progress: 30, done: false },
];

export default function CareerPath() {
  return (
    <StudentPortalLayout
      title="Career Path"
      subtitle="Track milestones from current skills to your target role"
      actions={<Button className="bg-[#1d7d54] hover:bg-[#145d3f]">Update Milestones</Button>}
    >
      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5 lg:col-span-2">
          <p className="font-display text-xl font-semibold text-[#18271d]">Journey Timeline</p>
          <div className="mt-4 space-y-3">
            {pathSteps.map((step) => (
              <div key={step.item} className="rounded-xl border border-[#e3e9e5] bg-white p-4">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="flex items-center gap-2 text-sm font-semibold text-[#24362c]">
                    {step.done ? <CheckCircle2 className="h-4 w-4 text-[#1d7d54]" /> : <Circle className="h-4 w-4 text-[#9fb0a7]" />}
                    {step.item}
                  </p>
                  <span className="rounded-md bg-[#f0f4f1] px-2 py-1 text-xs font-semibold text-[#1d7d54]">{step.phase}</span>
                </div>
                <Progress value={step.progress} className="h-2 bg-[#e7ece8]" />
                <p className="mt-2 text-xs text-[#76877e]">Completion: {step.progress}%</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
          <p className="font-display text-xl font-semibold text-[#18271d]">Target Role</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl bg-gradient-to-br from-[#1d7d54] to-[#145d3f] p-4 text-white">
              <p className="text-xs uppercase tracking-wide text-white/80">Career destination</p>
              <p className="mt-1 font-display text-3xl font-semibold">Software Engineer</p>
              <p className="mt-1 text-xs text-white/80">Estimated readiness date: Sep 2026</p>
            </div>
            <div className="rounded-xl border border-[#e3e9e5] bg-white p-4 text-sm text-[#425248]">
              <p className="mb-2 font-semibold text-[#24362c]">Next milestone</p>
              <p className="flex items-center gap-2"><Milestone className="h-4 w-4 text-[#1d7d54]" /> Ship one capstone app with tests</p>
              <p className="mt-1 flex items-center gap-2"><Compass className="h-4 w-4 text-[#1d7d54]" /> Complete API security checklist</p>
              <p className="mt-1 flex items-center gap-2"><Star className="h-4 w-4 text-[#1d7d54]" /> Present project in mentor review</p>
            </div>
          </div>
        </article>
      </section>
    </StudentPortalLayout>
  );
}
