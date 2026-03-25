import React from 'react';
import { Activity, Brain, Lock, Sparkles, Target, Users, Waypoints, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analytics',
    description: 'Machine learning models analyze motivation and focus patterns to personalize guidance.',
  },
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    description: 'Continuous wellness signals help identify stress, fatigue, and high-performance windows.',
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Structured milestones keep your academic, wellness, and career targets visible every day.',
  },
  {
    icon: Users,
    title: 'Collaborative Support',
    description: 'Mentors and peer communities provide fast feedback and accountability loops.',
  },
  {
    icon: Waypoints,
    title: 'Career Alignment',
    description: 'Skill insights map directly to role readiness and internship planning.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Encrypted personal data with user-controlled visibility and secure access layers.',
  },
];

const testimonials = [
  {
    quote: 'MotiTrack helped me increase my study efficiency by 40%. The recommendations are incredibly practical.',
    name: 'Sarah Johnson',
    role: 'Computer Science Student',
  },
  {
    quote: 'I can now spot disengagement early and support students before they fall behind.',
    name: 'Dr. Michael Chen',
    role: 'Professor of Psychology',
  },
  {
    quote: 'My prep routine finally became consistent because I can see exactly when I perform best.',
    name: 'Emily Rodriguez',
    role: 'Pre-Med Student',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f6f8f6]">
      <header className="border-b border-[#e1e8e3] bg-[#fbfcfb]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#1d7d54] to-[#145d3f]" />
            <span className="font-display text-lg font-semibold text-[#18271d]">Ayaara</span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/dashboard">
              <Button variant="outline" className="border-[#d7dfda] text-[#234033] hover:bg-[#f0f4f1]">Dashboard</Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-[#1d7d54] hover:bg-[#145d3f]">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle at top right, #d8ede1 0%, transparent 55%)' }} />
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div className="relative z-10">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d8e3dc] bg-[#fbfcfb] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1d7d54]">
                <Sparkles className="h-3.5 w-3.5" /> Trusted by Students and Educators
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#18271d] sm:text-5xl">
                Unlock Your Potential with AI Motivation Tracking
              </h1>
              <p className="mt-4 max-w-xl text-base text-[#5f7267] sm:text-lg">
                Ayaara combines wellness intelligence, learning analytics, and career guidance in one student portal designed to drive measurable growth.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/auth">
                  <Button className="bg-[#1d7d54] hover:bg-[#145d3f]">Start Free Trial</Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" className="border-[#d7dfda] text-[#234033] hover:bg-[#f0f4f1]">View Demo</Button>
                </Link>
              </div>
            </div>
            <div className="relative z-10 rounded-3xl border border-[#dde3df] bg-[#fbfcfb] p-5 shadow-[0_12px_40px_rgba(31,60,44,0.08)]">
              <p className="font-display text-xl font-semibold text-[#18271d]">Platform Snapshot</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-[#e3e9e5] bg-white p-4">
                  <p className="text-xs uppercase tracking-wide text-[#8ea096]">Motivation score</p>
                  <p className="mt-1 font-display text-3xl font-semibold text-[#1d7d54]">85%</p>
                </div>
                <div className="rounded-xl border border-[#e3e9e5] bg-white p-4">
                  <p className="text-xs uppercase tracking-wide text-[#8ea096]">Focus readiness</p>
                  <p className="mt-1 font-display text-3xl font-semibold text-[#1d7d54]">88%</p>
                </div>
                <div className="rounded-xl border border-[#e3e9e5] bg-white p-4">
                  <p className="text-xs uppercase tracking-wide text-[#8ea096]">Career alignment</p>
                  <p className="mt-1 font-display text-3xl font-semibold text-[#1d7d54]">75%</p>
                </div>
                <div className="rounded-xl border border-[#e3e9e5] bg-white p-4">
                  <p className="text-xs uppercase tracking-wide text-[#8ea096]">Connected devices</p>
                  <p className="mt-1 flex items-center gap-2 font-display text-3xl font-semibold text-[#1d7d54]"><Wifi className="h-6 w-6" /> 3</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#18271d]">Powerful Features for Peak Performance</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
                    <div className="mb-3 inline-flex rounded-lg bg-[#f0f4f1] p-2 text-[#1d7d54]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-base font-semibold text-[#24362c]">{feature.title}</p>
                    <p className="mt-2 text-sm text-[#76877e]">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#18271d]">Trusted by Students and Educators</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
                  <p className="text-sm text-[#425248]">"{item.quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-[#24362c]">{item.name}</p>
                  <p className="text-xs text-[#76877e]">{item.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-3xl border border-[#d3dfd8] bg-gradient-to-br from-[#eef5f0] to-[#fbfcfb] p-8 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#18271d]">Ready to Transform Your Learning Journey?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-[#5f7267]">Start with one dashboard that unifies motivation tracking, wellness support, and career growth.</p>
            <div className="mt-5 flex justify-center gap-3">
              <Link to="/auth"><Button className="bg-[#1d7d54] hover:bg-[#145d3f]">Start Your Free Trial</Button></Link>
              <Link to="/dashboard"><Button variant="outline" className="border-[#d7dfda] text-[#234033] hover:bg-[#f0f4f1]">View Demo Dashboard</Button></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
