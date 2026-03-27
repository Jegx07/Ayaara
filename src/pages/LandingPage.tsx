import React from 'react';
import { Activity, Brain, Lock, Sparkles, Target, Users, Waypoints } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Brain, title: 'AI-Powered Analytics', description: 'Adaptive insights that help you stay focused and motivated.' },
  { icon: Activity, title: 'Real-time Monitoring', description: 'Track your momentum, routines, and performance every day.' },
  { icon: Target, title: 'Goal Tracking', description: 'Turn goals into measurable milestones with progress clarity.' },
  { icon: Users, title: 'Collaborative Support', description: 'Mentors and peers help you stay accountable and consistent.' },
  { icon: Waypoints, title: 'Career Alignment', description: 'Connect skill growth directly with career outcomes.' },
  { icon: Lock, title: 'Privacy First', description: 'Your personal data stays protected with secure platform controls.' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#edf1fb] text-[#222741]">
      <div className="pointer-events-none fixed left-0 top-0 h-96 w-96 rounded-full bg-[#d9ddff] blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 right-0 h-96 w-96 rounded-full bg-[#f1dcff] blur-3xl" />

      <header className="sticky top-0 z-20 border-b border-white/70 bg-white/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#6f63ff] to-[#4a50cf]" />
            <span className="font-display text-lg font-semibold">Ayaara</span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/dashboard">
              <Button variant="outline" className="border-white/80 bg-white/70 text-[#303a69] hover:bg-white">Dashboard</Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-[#5c5fdc] text-white hover:bg-[#4a50cf]">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#59629c]">
                <Sparkles className="h-3.5 w-3.5" /> Smart Growth Platform
              </p>
              <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#222741] sm:text-6xl">
                Build Better Habits.
                <br />
                Reach Bigger Goals.
              </h1>
              <p className="mt-4 max-w-xl text-base text-[#66719f] sm:text-lg">
                Ayaara brings together motivation tracking, wellness support, and career progress in a single focused workspace.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/auth">
                  <Button className="bg-[#5c5fdc] hover:bg-[#4a50cf]">Start Free Trial</Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" className="border-white/80 bg-white/75 text-[#303a69] hover:bg-white">View Demo</Button>
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/65 p-5 shadow-[0_20px_50px_rgba(84,95,170,0.2)] backdrop-blur-xl">
              <p className="font-display text-xl font-semibold text-[#2a3157]">Platform Snapshot</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ['Motivation score', '85%'],
                  ['Focus readiness', '88%'],
                  ['Career alignment', '75%'],
                  ['Study streak', '12 days'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/80 bg-white/80 p-4">
                    <p className="text-xs uppercase tracking-wide text-[#8f97bc]">{label}</p>
                    <p className="mt-1 font-display text-3xl font-semibold tracking-[-0.03em] text-[#4851bf]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#222741]">Powerful Features</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="rounded-2xl border border-white/70 bg-white/65 p-5 backdrop-blur-xl">
                    <div className="mb-3 inline-flex rounded-lg bg-[#ecefff] p-2 text-[#525ad2]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-base font-semibold text-[#2b325d]">{feature.title}</p>
                    <p className="mt-2 text-sm text-[#6b75a1]">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
