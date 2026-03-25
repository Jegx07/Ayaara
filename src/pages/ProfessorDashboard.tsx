import React, { useState } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { Link } from 'react-router-dom';
import { Search, Bell, Settings, Users, Brain, Clock, TrendingUp, AlertTriangle, BarChart3, Target, Award } from 'lucide-react';

export default function ProfessorDashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const kpis = [
    { label: 'Total Students', value: '24', note: '+3 this semester', highlighted: true },
    { label: 'Avg Motivation', value: '78%', note: 'Strong engagement' },
    { label: 'Study Hours/Week', value: '6.3h', note: 'On target' },
    { label: 'Skill Progress', value: '18%', note: 'Improving' },
  ];

  const alerts = [
    { student: 'Alice Kim', message: 'Motivation dropped to 42% (critical)', tone: 'rose' },
    { student: 'Mark Lee', message: 'Focus decreased 25% this week', tone: 'amber' },
  ];

  const studentPerformance = [
    { index: 1, name: 'Alice Kim', motivation: 42, status: 'Alert' },
    { index: 2, name: 'Mark Lee', motivation: 65, status: 'Warning' },
    { index: 3, name: 'Sofia Chen', motivation: 88, status: 'Excellent' },
    { index: 4, name: 'James Brown', motivation: 72, status: 'Good' },
    { index: 5, name: 'Emma Wilson', motivation: 95, status: 'Excellent' },
  ];

  const departmentStats = [
    { day: 'Mon', avgMotivation: 76, studentCount: 22 },
    { day: 'Tue', avgMotivation: 78, studentCount: 23 },
    { day: 'Wed', avgMotivation: 74, studentCount: 24 },
    { day: 'Thu', avgMotivation: 80, studentCount: 24 },
    { day: 'Fri', avgMotivation: 82, studentCount: 23 },
    { day: 'Sat', avgMotivation: 65, studentCount: 18 },
    { day: 'Sun', avgMotivation: 70, studentCount: 12 },
  ];

  const motivationDistribution = [
    { range: 'Excellent (80-100%)', count: 8, percentage: 33 },
    { range: 'Good (60-79%)', count: 12, percentage: 50 },
    { range: 'Fair (40-59%)', count: 3, percentage: 13 },
    { range: 'Alert (<40%)', count: 1, percentage: 4 },
  ];

  return (
    <div className="flex min-h-screen w-full bg-[#f6f8f6]">
      {/* Sidebar */}
      <AppSidebar userRole="professor" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content */}
      <main className={`flex-1 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300`}>
        {/* Header */}
        <div className="sticky top-0 z-10 border-b border-[#e1e8e3] bg-[#fbfcfb]/95 backdrop-blur-md">
          <div className="flex h-16 items-center justify-between px-6">
            {/* Search Bar */}
            <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-4 py-2 border border-[#e1e8e3] max-w-sm">
              <Search className="w-4 h-4 text-[#809087]" />
              <input
                type="text"
                placeholder="Search students..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#a7b6ae]"
              />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 ml-auto">
              <button className="p-2 hover:bg-[#e8ede9] rounded-lg text-[#76877e]">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[#e8ede9] rounded-lg text-[#76877e]">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center w-10 h-10 bg-[#dce9e2] rounded-full ml-2">
                <span className="text-sm font-semibold text-[#1d7d54]">PR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6 space-y-6">
          {/* Header Section */}
          <div>
            <h1 className="text-3xl font-bold font-display text-[#18271d]">Professor Overview</h1>
            <p className="text-sm text-[#76877e] mt-1">Supervise students, monitor progress, and act on alerts</p>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-4 border transition-all ${
                  kpi.highlighted
                    ? 'bg-[#1d7d54] border-[#145d3f] text-white'
                    : 'bg-white border-[#e1e8e3] text-[#18271d]'
                }`}
              >
                <div className={`text-xs font-medium mb-2 ${kpi.highlighted ? 'text-[#b8e0ce]' : 'text-[#809087]'}`}>
                  {kpi.label}
                </div>
                <div className={`text-2xl font-bold mb-1 ${kpi.highlighted ? 'text-white' : 'text-[#18271d]'}`}>
                  {kpi.value}
                </div>
                <div className={`text-xs ${kpi.highlighted ? 'text-[#b8e0ce]' : 'text-[#76877e]'}`}>
                  {kpi.note}
                </div>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Alerts Section */}
              <div className="rounded-2xl border border-[#e1e8e3] bg-white p-4">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  <h2 className="text-sm font-semibold text-[#18271d]">Critical Alerts</h2>
                  <span className="ml-auto text-xs bg-rose-50 text-rose-700 px-2 py-1 rounded-full">
                    {alerts.length} Active
                  </span>
                </div>
                <div className="space-y-2">
                  {alerts.map((alert, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#f8faf8] border border-[#e1e8e3] hover:bg-[#f0f4f1] transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-[#18271d]">{alert.student}</p>
                          <p className="text-xs text-[#76877e] mt-1">{alert.message}</p>
                        </div>
                        <button className="text-xs font-medium text-[#1d7d54] hover:text-[#145d3f] whitespace-nowrap">
                          View →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Department Trends */}
              <div className="rounded-2xl border border-[#e1e8e3] bg-white p-4">
                <h2 className="text-sm font-semibold text-[#18271d] mb-4">Weekly Trends</h2>
                <div className="h-[200px] flex items-end justify-between gap-2">
                  {departmentStats.map((entry, idx) => (
                    <div key={idx} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full bg-[#2e9e68] rounded-full opacity-80 hover:opacity-100 transition-opacity"
                        style={{ height: `${Math.max(entry.avgMotivation * 1.5, 24)}px` }}
                        title={`${entry.avgMotivation}% - ${entry.studentCount} students`}
                      />
                      <span className="text-xs font-medium text-[#809087]">{entry.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* At-Risk Students */}
              <div className="rounded-2xl border border-[#e1e8e3] bg-white p-4">
                <h2 className="text-sm font-semibold text-[#18271d] mb-4">Top Students</h2>
                <div className="space-y-2">
                  {studentPerformance.slice(0, 5).map((student, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#f8faf8]">
                      <div className="flex-1">
                        <p className="text-xs font-medium text-[#18271d]">{student.name}</p>
                        <div className="w-full bg-[#e1e8e3] rounded-full h-1.5 mt-1 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              student.motivation >= 80
                                ? 'bg-emerald-600'
                                : student.motivation >= 60
                                  ? 'bg-amber-500'
                                  : 'bg-rose-600'
                            }`}
                            style={{ width: `${student.motivation}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#76877e]">{student.motivation}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Motivation Distribution - Donut */}
              <div className="rounded-2xl border border-[#e1e8e3] bg-white p-4">
                <h2 className="text-sm font-semibold text-[#18271d] mb-4">Motivation Distribution</h2>
                <div className="flex flex-col items-center justify-center">
                  <svg width="140" height="140" viewBox="0 0 140 140" className="mb-4">
                    {/* Donut Chart */}
                    <circle
                      cx="70"
                      cy="70"
                      r="55"
                      fill="none"
                      stroke="#2e9e68"
                      strokeWidth="12"
                      strokeDasharray={`${3.14 * 110 * 0.33} ${3.14 * 110}`}
                      transform="rotate(-90 70 70)"
                    />
                    <circle
                      cx="70"
                      cy="70"
                      r="55"
                      fill="none"
                      stroke="#7dd3a3"
                      strokeWidth="12"
                      strokeDasharray={`${3.14 * 110 * 0.5} ${3.14 * 110}`}
                      strokeDashoffset={`${-3.14 * 110 * 0.33}`}
                      transform="rotate(-90 70 70)"
                    />
                    <circle
                      cx="70"
                      cy="70"
                      r="55"
                      fill="none"
                      stroke="#cbd5d0"
                      strokeWidth="12"
                      strokeDasharray={`${3.14 * 110 * 0.17} ${3.14 * 110}`}
                      strokeDashoffset={`${-3.14 * 110 * 0.83}`}
                      transform="rotate(-90 70 70)"
                    />
                  </svg>
                </div>
                <div className="space-y-2 text-xs">
                  {motivationDistribution.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor:
                              idx === 0
                                ? '#2e9e68'
                                : idx === 1
                                  ? '#7dd3a3'
                                  : idx === 2
                                    ? '#cbd5d0'
                                    : '#f87171',
                          }}
                        />
                        <span className="text-[#76877e]">{item.range}</span>
                      </div>
                      <span className="font-semibold text-[#18271d]">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <Link to="/professor/students">
              <button className="w-full px-4 py-3 rounded-xl bg-[#1d7d54] text-white text-sm font-semibold hover:bg-[#145d3f] transition-colors flex items-center justify-center gap-2">
                <Users className="w-4 h-4" />
                Student Management
              </button>
            </Link>
            <Link to="/professor/skills">
              <button className="w-full px-4 py-3 rounded-xl border border-[#e1e8e3] bg-white text-[#18271d] text-sm font-semibold hover:bg-[#f8faf8] transition-colors flex items-center justify-center gap-2">
                <Award className="w-4 h-4" />
                Skills Management
              </button>
            </Link>
            <Link to="/professor/activities">
              <button className="w-full px-4 py-3 rounded-xl border border-[#e1e8e3] bg-white text-[#18271d] text-sm font-semibold hover:bg-[#f8faf8] transition-colors flex items-center justify-center gap-2">
                <Target className="w-4 h-4" />
                Activities
              </button>
            </Link>
            <Link to="/professor/reports">
              <button className="w-full px-4 py-3 rounded-xl border border-[#e1e8e3] bg-white text-[#18271d] text-sm font-semibold hover:bg-[#f8faf8] transition-colors flex items-center justify-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Reports
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
