import React from 'react';
import { BookOpen, Brain, CheckCircle2, Sparkles, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import StudentPortalLayout from '@/components/StudentPortalLayout';

const categories = [
  { label: 'Frontend Engineering', score: 82, advice: 'Strong. Build one advanced animation-heavy project.' },
  { label: 'Backend Foundations', score: 69, advice: 'Good base. Focus on API design and auth flows.' },
  { label: 'Data Literacy', score: 58, advice: 'Improve SQL and dashboard storytelling.' },
  { label: 'System Design', score: 55, advice: 'Practice tradeoffs, scaling and architecture docs.' },
];

const recommendations = [
  'Complete TypeScript deep-dive module',
  'Ship one full-stack capstone with deployment',
  'Run two mock technical interviews this month',
  'Publish a portfolio case study for your best project',
];

export default function SkillsPage() {
  return (
    <StudentPortalLayout
      title="Skill Assessment"
      subtitle="Measure your current strengths and close the gaps faster"
      actions={<Button className="bg-[#1d7d54] hover:bg-[#145d3f]">Run New Assessment</Button>}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5 lg:col-span-2">
          <p className="font-display text-xl font-semibold text-[#18271d]">Competency Breakdown</p>
          <div className="mt-4 space-y-4">
            {categories.map((item) => (
              <div key={item.label} className="rounded-xl border border-[#e3e9e5] bg-white p-4">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-[#24362c]">{item.label}</p>
                  <p className="text-sm font-semibold text-[#1d7d54]">{item.score}%</p>
                </div>
                <Progress value={item.score} className="h-2 bg-[#e7ece8]" />
                <p className="mt-2 text-xs text-[#76877e]">{item.advice}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
          <p className="font-display text-xl font-semibold text-[#18271d]">Readiness Snapshot</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl bg-gradient-to-br from-[#1d7d54] to-[#145d3f] p-4 text-white">
              <p className="text-xs uppercase tracking-wide text-white/80">Career match</p>
              <p className="font-display text-4xl font-semibold">78%</p>
              <p className="mt-1 text-xs text-white/80">Target role: Full Stack Developer</p>
            </div>
            <div className="rounded-xl border border-[#e3e9e5] bg-white p-4 text-sm text-[#425248]">
              <p className="mb-2 font-semibold text-[#24362c]">Top strengths</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#1d7d54]" /> UI implementation quality</p>
              <p className="mt-1 flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#1d7d54]" /> Product thinking</p>
              <p className="mt-1 flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#1d7d54]" /> Consistency under deadlines</p>
            </div>
          </div>
        </article>
      </div>

      <section className="mt-4 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
          <p className="font-display text-xl font-semibold text-[#18271d]">Recommended Next Moves</p>
          <div className="mt-3 space-y-2">
            {recommendations.map((task) => (
              <div key={task} className="flex items-start gap-2 rounded-lg border border-[#e3e9e5] bg-white p-3 text-sm text-[#425248]">
                <Sparkles className="mt-0.5 h-4 w-4 text-[#1d7d54]" />
                <span>{task}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
          <p className="font-display text-xl font-semibold text-[#18271d]">Action Center</p>
          <div className="mt-3 grid gap-2">
            <button className="flex items-center justify-between rounded-lg border border-[#dde3df] bg-white px-3 py-2 text-sm text-[#425248] hover:bg-[#f8faf8]">
              <span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#1d7d54]" /> Start learning plan</span>
              <Target className="h-4 w-4 text-[#1d7d54]" />
            </button>
            <button className="flex items-center justify-between rounded-lg border border-[#dde3df] bg-white px-3 py-2 text-sm text-[#425248] hover:bg-[#f8faf8]">
              <span className="flex items-center gap-2"><Brain className="h-4 w-4 text-[#1d7d54]" /> Skill gap simulation</span>
              <Target className="h-4 w-4 text-[#1d7d54]" />
            </button>
          </div>
        </article>
      </section>
    </StudentPortalLayout>
  );
}
