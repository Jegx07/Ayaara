import React from 'react';
import { Brain, Flame, HeartPulse, MessageCircle, Moon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StudentPortalLayout from '@/components/StudentPortalLayout';

const supportTools = [
  { label: 'Guided Meditation', detail: '10 min calm-focus session', icon: Moon },
  { label: 'Stress Reset Routine', detail: '3-step breathing + reflection', icon: Sparkles },
  { label: 'Check-in with Mentor', detail: 'Share your current stress triggers', icon: MessageCircle },
  { label: 'Cognitive Reframe', detail: 'Turn negative loops into action', icon: Brain },
];

export default function MentalSupport() {
  return (
    <StudentPortalLayout
      title="Mental Support"
      subtitle="Daily wellness actions, guided resets, and support channels"
      actions={<Button className="bg-[#1d7d54] hover:bg-[#145d3f]">Start Calm Session</Button>}
    >
      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5 lg:col-span-2">
          <p className="font-display text-xl font-semibold text-[#18271d]">Wellness Status</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#e3e9e5] bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-[#8ea096]">Stress level</p>
              <p className="mt-1 font-display text-3xl font-semibold text-[#1d7d54]">Low</p>
            </div>
            <div className="rounded-xl border border-[#e3e9e5] bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-[#8ea096]">Recovery score</p>
              <p className="mt-1 font-display text-3xl font-semibold text-[#1d7d54]">81%</p>
            </div>
            <div className="rounded-xl border border-[#e3e9e5] bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-[#8ea096]">Focus stamina</p>
              <p className="mt-1 font-display text-3xl font-semibold text-[#1d7d54]">74%</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-gradient-to-br from-[#1d7d54] to-[#145d3f] p-4 text-white">
            <p className="text-xs uppercase tracking-wide text-white/80">AI Coach prompt</p>
            <p className="mt-1 text-sm font-semibold">"You are not behind. You are building resilience. One focused hour now beats five distracted hours later."</p>
          </div>
        </article>

        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
          <p className="font-display text-xl font-semibold text-[#18271d]">Quick Reset</p>
          <div className="mt-4 space-y-2">
            <button className="w-full rounded-lg border border-[#1d7d54] px-3 py-2 text-sm font-semibold text-[#1d7d54] hover:bg-[#f0f4f1]">2-min Breathing Loop</button>
            <button className="w-full rounded-lg border border-[#1d7d54] px-3 py-2 text-sm font-semibold text-[#1d7d54] hover:bg-[#f0f4f1]">5-min Walk Reminder</button>
            <button className="w-full rounded-lg border border-[#1d7d54] px-3 py-2 text-sm font-semibold text-[#1d7d54] hover:bg-[#f0f4f1]">Journal Prompt</button>
          </div>
        </article>
      </section>

      <section className="mt-4 rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
        <p className="font-display text-xl font-semibold text-[#18271d]">Support Resources</p>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {supportTools.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="rounded-xl border border-[#e3e9e5] bg-white p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-[#24362c]"><Icon className="h-4 w-4 text-[#1d7d54]" /> {item.label}</p>
                <p className="mt-1 text-xs text-[#76877e]">{item.detail}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="rounded-lg bg-[#1d7d54] px-4 py-2 text-sm font-semibold text-white hover:bg-[#145d3f]">Connect to Counselor</button>
          <button className="rounded-lg border border-[#1d7d54] px-4 py-2 text-sm font-semibold text-[#1d7d54] hover:bg-[#f0f4f1]">Open Wellness Journal</button>
        </div>
      </section>

      <section className="mt-4 rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
        <p className="flex items-center gap-2 font-display text-xl font-semibold text-[#18271d]"><HeartPulse className="h-5 w-5 text-[#1d7d54]" /> Daily Habit Suggestion</p>
        <p className="mt-2 text-sm text-[#425248]">Take a 10-minute low-stimulation break after every 90-minute work block to stabilize attention and reduce stress buildup.</p>
        <div className="mt-3 flex items-center gap-2 text-sm text-[#76877e]"><Flame className="h-4 w-4 text-[#1d7d54]" /> Consistency streak: 6 days</div>
      </section>
    </StudentPortalLayout>
  );
}
