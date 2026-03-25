import React, { useState, useEffect } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, PieChart, Pie, Cell } from 'recharts';
import { Brain, Award, CheckCircle, Target, Clock, BookOpen, Heart, Smile, Trophy, MessageSquare, Users, Briefcase, Bell, Zap, TrendingUp, Calendar, Star } from 'lucide-react';
import FallingLeavesGame from '@/components/FallingLeavesGame';

const skills = [
  { name: 'React', progress: 75 },
  { name: 'Node.js', progress: 60 },
  { name: 'SQL', progress: 68 },
  { name: 'AWS', progress: 40 },
];

const activities = [
  { title: 'Completed Assignment: Data Structures', time: '2 hours ago' },
  { title: 'Study Session: Algorithms (2h)', time: 'Yesterday' },
  { title: 'Joined Workshop: Cloud Basics', time: '2 days ago' },
];

const achievements = [
  { title: 'Top Performer of the Week', icon: Award, color: 'text-primary', progress: 80 },
  { title: '100% Attendance', icon: CheckCircle, color: 'text-success', progress: 65 },
  { title: 'Completed 5 Assignments', icon: BookOpen, color: 'text-accent', progress: 90 },
  { title: 'Skill Level Up', icon: Target, color: 'text-destructive', progress: 50 },
];

// New data for enhanced dashboard
const motivationData = [
  { day: 'Mon', mli: 75 },
  { day: 'Tue', mli: 82 },
  { day: 'Wed', mli: 68 },
  { day: 'Thu', mli: 90 },
  { day: 'Fri', mli: 85 },
  { day: 'Sat', mli: 78 },
  { day: 'Sun', mli: 88 },
];

const vitalSignsData = [
  { time: '8:00', heartRate: 72, focusScore: 85 },
  { time: '12:00', heartRate: 78, focusScore: 90 },
  { time: '16:00', heartRate: 75, focusScore: 80 },
  { time: '20:00', heartRate: 70, focusScore: 88 },
];

const studyFocusData = [
  { day: 'Mon', study: 3, focus: 4 },
  { day: 'Tue', study: 2.5, focus: 3.5 },
  { day: 'Wed', study: 4, focus: 4.5 },
  { day: 'Thu', study: 3.5, focus: 4 },
  { day: 'Fri', study: 2, focus: 3 },
  { day: 'Sat', study: 1.5, focus: 2.5 },
  { day: 'Sun', study: 2, focus: 3 },
];

const moodHistory = [
  { date: '2023-10-01', mood: 'Happy', emoji: '😊' },
  { date: '2023-10-02', mood: 'Focused', emoji: '🎯' },
  { date: '2023-10-03', mood: 'Tired', emoji: '😴' },
  { date: '2023-10-04', mood: 'Motivated', emoji: '💪' },
  { date: '2023-10-05', mood: 'Calm', emoji: '🧘' },
];



const aiQuotes = [
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Your limitation—it's only your imagination.",
];

const notifications = [
  { message: 'Time for a 5-min break!', type: 'reminder' },
  { message: 'Mentor session in 30 mins', type: 'session' },
  { message: 'New wellness tip available', type: 'tip' },
];

const moods = [
  { label: 'Stressed', emoji: '😰' },
  { label: 'Angry', emoji: '😠' },
  { label: 'Motivated', emoji: '💪' },
  { label: 'Calm', emoji: '🧘' },
  { label: 'Happy', emoji: '😊' },
  { label: 'Sad', emoji: '😢' },
];

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentMood, setCurrentMood] = useState('Calm');
  const [selectedQuote, setSelectedQuote] = useState(aiQuotes[Math.floor(Math.random() * aiQuotes.length)]);
  const [mentorFeedback, setMentorFeedback] = useState('');
  const [careerGoal, setCareerGoal] = useState('Software Engineer');
  const [showNotifications, setShowNotifications] = useState(true);

  // Simulate automatic mood detection from wrist band
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMood = moods[Math.floor(Math.random() * moods.length)].label;
      setCurrentMood(randomMood);
    }, 10000); // Change mood every 10 seconds for demo
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar userRole="student" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`flex-1 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300 p-6 space-y-6`}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
            <p className="text-muted-foreground">Track your motivation, wellness, and career readiness</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => setShowNotifications(!showNotifications)} className="relative">
              <Bell className="w-5 h-5" />
              {showNotifications && (
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
              )}
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Motivation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">85%</div>
              <p className="text-sm text-blue-500">+5% from last week</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                Focus Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">88%</div>
              <p className="text-sm text-green-500">Peak performance</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                Study Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">12 days</div>
              <p className="text-sm text-purple-500">Keep it up!</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-600" />
                Heart Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">72 bpm</div>
              <p className="text-sm text-red-500">Resting rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Motivation Index (MLI)
              </CardTitle>
              <CardDescription>Weekly motivation trends</CardDescription>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={motivationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
                  <Line type="monotone" dataKey="mli" stroke="hsl(var(--primary))" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Vital Signs Monitoring
              </CardTitle>
              <CardDescription>Heart rate and focus score</CardDescription>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={vitalSignsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
                  <Line type="monotone" dataKey="heartRate" stroke="hsl(var(--destructive))" strokeWidth={2} />
                  <Line type="monotone" dataKey="focusScore" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-green-500" />
                Study vs Focus Hours
              </CardTitle>
              <CardDescription>Weekly comparison</CardDescription>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={studyFocusData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="study" fill="hsl(var(--primary))" />
                  <Bar dataKey="focus" fill="hsl(var(--success))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Daily Mood Tracker */}
        <Card className="rounded-2xl shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-primary">We detected you’re feeling currently:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-8 mb-6">
              {moods.map((mood) => {
                const isActive = currentMood === mood.label;
                return (
                  <div
                    key={mood.label}
                    className={`mood-face bg-white rounded-xl p-6 text-center transition-all duration-200 ${
                      isActive ? 'border-4 border-green-500 shadow-lg' : 'border-2 border-transparent'
                    }`}
                    aria-label={mood.label}
                  >
                    <div className="text-6xl mb-3">{mood.emoji}</div>
                    <span className="font-medium text-lg text-gray-700">{mood.label}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Falling Leaves Game */}
        <FallingLeavesGame />

        {/* Mentor Feedback Loop */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-500" />
              Mentor Feedback Loop
            </CardTitle>
            <CardDescription>Receive real-time comments and suggestions</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Latest feedback from your mentor..."
              value={mentorFeedback}
              onChange={(e) => setMentorFeedback(e.target.value)}
              rows={3}
            />
            <Button className="mt-2">Send Response</Button>
          </CardContent>
        </Card>

        {/* Personalized AI Coach */}
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600" />
              Personalized AI Coach
            </CardTitle>
            <CardDescription>Motivational quotes and daily suggestions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-lg italic mb-4">"{selectedQuote}"</p>
              <Button variant="outline" onClick={() => setSelectedQuote(aiQuotes[Math.floor(Math.random() * aiQuotes.length)])}>
                New Quote
              </Button>
            </div>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Daily Habit Suggestion</h4>
              <p>Take a 10-minute walk to boost your focus and reduce stress.</p>
            </div>
          </CardContent>
        </Card>

        {/* Resource Hub */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-500" />
              Resource Hub
            </CardTitle>
            <CardDescription>Access stress-management activities and productivity templates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">Guided Meditation</Button>
              <Button variant="outline">Productivity Templates</Button>
              <Button variant="outline">Stress Management Tips</Button>
              <Button variant="outline">Time Management Tools</Button>
            </div>
          </CardContent>
        </Card>

        {/* Community Support Forum */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-500" />
              Community Support Forum
            </CardTitle>
            <CardDescription>Share experiences and seek advice</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="p-3 border rounded">How do you stay motivated during exams? - 5 replies</div>
              <div className="p-3 border rounded">Tips for better sleep schedule - 3 replies</div>
              <Button className="w-full mt-4">Join Discussion</Button>
            </div>
          </CardContent>
        </Card>

        {/* Career Tracker */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-teal-500" />
              Career Tracker
            </CardTitle>
            <CardDescription>Track progress towards career goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Current Goal</label>
                <Input value={careerGoal} onChange={(e) => setCareerGoal(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Progress</label>
                <Progress value={75} />
                <p className="text-sm text-muted-foreground mt-1">75% towards Software Engineer role</p>
              </div>
              <Button>Add Internship Application</Button>
            </div>
          </CardContent>
        </Card>

        {/* Push Notifications */}
        {showNotifications && (
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-red-500" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {notifications.map((n, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-muted rounded">
                    <span>{n.message}</span>
                    <Badge variant={n.type === 'reminder' ? 'default' : 'secondary'}>{n.type}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
