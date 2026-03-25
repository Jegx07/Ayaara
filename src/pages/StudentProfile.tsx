import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppSidebar } from '@/components/AppSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar } from 'recharts';

const motivation = [
  { d: 'Mon', v: 65 }, { d: 'Tue', v: 72 }, { d: 'Wed', v: 58 }, { d: 'Thu', v: 80 }, { d: 'Fri', v: 76 }, { d: 'Sat', v: 69 }, { d: 'Sun', v: 82 }
];
const study = [
  { d: 'Mon', s: 2 }, { d: 'Tue', s: 3 }, { d: 'Wed', s: 1.5 }, { d: 'Thu', s: 4 }, { d: 'Fri', s: 3 }, { d: 'Sat', s: 2 }, { d: 'Sun', s: 2.5 }
];
const health = [
  { t: '8:00', bp: 120, spo2: 98, temp: 98.2 },
  { t: '12:00', bp: 125, spo2: 99, temp: 98.5 },
  { t: '16:00', bp: 130, spo2: 97, temp: 98.9 },
  { t: '20:00', bp: 122, spo2: 98, temp: 98.4 },
];

const requirements = {
  React: 85, 'Node.js': 80, SQL: 75, AWS: 70
};
const currentSkills = {
  React: 70, 'Node.js': 60, SQL: 68, AWS: 45
};

export default function StudentProfile() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { id } = useParams();

  const radarData = Object.keys(requirements).map((k) => ({
    skill: k, current: currentSkills[k as keyof typeof currentSkills] || 0, required: requirements[k as keyof typeof requirements]
  }));

  const barData = Object.keys(requirements).map((k) => ({ skill: k, current: currentSkills[k as keyof typeof currentSkills] || 0, required: requirements[k as keyof typeof requirements] }));

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar userRole="professor" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`flex-1 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300 p-6 space-y-6`}>
        <h1 className="text-2xl font-bold">Student Profile • {id}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Motivation Score Trend</CardTitle>
              <CardDescription>Weekly motivation changes</CardDescription>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={motivation}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="d" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
                  <Line type="monotone" dataKey="v" stroke="hsl(var(--primary))" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study Hours Trend</CardTitle>
              <CardDescription>Daily study duration</CardDescription>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={study}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="d" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
                  <Line type="monotone" dataKey="s" stroke="hsl(var(--success))" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Health Metrics</CardTitle>
              <CardDescription>BP, SpO₂, Temperature</CardDescription>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={health}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="t" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
                  <Line type="monotone" dataKey="bp" stroke="hsl(var(--destructive))" strokeWidth={2} />
                  <Line type="monotone" dataKey="spo2" stroke="hsl(var(--accent))" strokeWidth={2} />
                  <Line type="monotone" dataKey="temp" stroke="hsl(var(--success))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills vs Requirements</CardTitle>
              <CardDescription>Radar and bar comparison</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="skill" tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }} />
                    <Radar name="Required" dataKey="required" stroke="hsl(var(--destructive))" fill="hsl(var(--destructive))" fillOpacity={0.1} />
                    <Radar name="Current" dataKey="current" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="skill" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
                    <Bar dataKey="required" fill="hsl(var(--destructive))" />
                    <Bar dataKey="current" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feedback & Task Assignment */}
        <Card>
          <CardHeader>
            <CardTitle>Professor Feedback</CardTitle>
            <CardDescription>Add comments and assign tasks</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-2">
              <Textarea placeholder="Write your feedback..." rows={4} />
              <Button className="w-full md:w-auto">Submit Feedback</Button>
            </div>
            <div className="space-y-2">
              <Input placeholder="Assign a skill development task" />
              <Button variant="outline" className="w-full md:w-auto">Assign Task</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
