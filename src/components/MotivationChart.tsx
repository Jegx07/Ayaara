import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Brain, Activity } from 'lucide-react';

const motivationData = [
  { time: '6:00', motivation: 65, focus: 70, energy: 60 },
  { time: '8:00', motivation: 75, focus: 80, energy: 75 },
  { time: '10:00', motivation: 85, focus: 90, energy: 80 },
  { time: '12:00', motivation: 80, focus: 85, energy: 85 },
  { time: '14:00', motivation: 70, focus: 75, energy: 70 },
  { time: '16:00', motivation: 90, focus: 95, energy: 85 },
  { time: '18:00', motivation: 85, focus: 85, energy: 80 },
  { time: '20:00', motivation: 75, focus: 70, energy: 75 },
];

const vitalData = [
  { time: '6:00', bloodPressure: 120, spo2: 98, temperature: 98.2 },
  { time: '8:00', bloodPressure: 125, spo2: 99, temperature: 98.4 },
  { time: '10:00', bloodPressure: 130, spo2: 97, temperature: 98.6 },
  { time: '12:00', bloodPressure: 128, spo2: 98, temperature: 98.8 },
  { time: '14:00', bloodPressure: 135, spo2: 96, temperature: 99.0 },
  { time: '16:00', bloodPressure: 140, spo2: 97, temperature: 98.9 },
  { time: '18:00', bloodPressure: 132, spo2: 98, temperature: 98.7 },
  { time: '20:00', bloodPressure: 125, spo2: 99, temperature: 98.5 },
];

const studyData = [
  { day: 'Mon', studyHours: 6, focusHours: 4.5 },
  { day: 'Tue', studyHours: 7, focusHours: 5.5 },
  { day: 'Wed', studyHours: 5, focusHours: 4 },
  { day: 'Thu', studyHours: 8, focusHours: 6 },
  { day: 'Fri', studyHours: 6, focusHours: 5 },
  { day: 'Sat', studyHours: 4, focusHours: 3.5 },
  { day: 'Sun', studyHours: 3, focusHours: 2.5 },
];

export function MotivationChart() {
  return (
    <Card className="bg-gradient-card border-primary/20 shadow-elegant">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          Motivation Index (MLI)
        </CardTitle>
        <CardDescription>
          AI-powered motivation tracking with real-time analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={motivationData}>
              <defs>
                <linearGradient id="motivationGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="motivation" 
                stroke="hsl(var(--primary))" 
                fillOpacity={1}
                fill="url(#motivationGradient)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function VitalSignsChart() {
  return (
    <Card className="bg-gradient-card border-accent/20 shadow-elegant">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-accent" />
          Vital Signs Monitoring
        </CardTitle>
        <CardDescription>
          Blood pressure, SpO₂, and body temperature tracking
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={vitalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="bloodPressure" 
                stroke="hsl(var(--destructive))" 
                strokeWidth={2}
                name="Blood Pressure"
              />
              <Line 
                type="monotone" 
                dataKey="spo2" 
                stroke="hsl(var(--accent))" 
                strokeWidth={2}
                name="SpO₂ %"
              />
              <Line 
                type="monotone" 
                dataKey="temperature" 
                stroke="hsl(var(--success))" 
                strokeWidth={2}
                name="Temperature °F"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function StudyFocusChart() {
  return (
    <Card className="bg-gradient-card border-success/20 shadow-elegant">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-success" />
          Study vs Focus Hours
        </CardTitle>
        <CardDescription>
          Weekly comparison of total study time and focused study sessions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={studyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="studyHours" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                name="Total Study Hours"
              />
              <Line 
                type="monotone" 
                dataKey="focusHours" 
                stroke="hsl(var(--success))" 
                strokeWidth={3}
                name="Focused Hours"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}