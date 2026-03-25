import React, { useState } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Users, Brain, Clock, TrendingUp, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProfessorDashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const alerts = [
    { student: 'Alice Kim', message: 'Motivation dropped to 42% (critical)', severity: 'high' },
    { student: 'Mark Lee', message: 'Focus decreased 25% this week', severity: 'medium' },
  ];

  const quickStats = [
    { title: 'Total Students Supervised', value: 24, icon: Users },
    { title: 'Average Motivation Index (MLI)', value: '78%', icon: Brain },
    { title: 'Avg Study Hours / Week', value: '6.3h', icon: Clock },
    { title: 'Skill Progress Rate', value: '18%', icon: TrendingUp },
  ];

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar userRole="professor" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`flex-1 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300 p-6 space-y-6`}>
        <div>
          <h1 className="text-3xl font-bold">Professor Overview</h1>
          <p className="text-muted-foreground">Supervise students, monitor progress, and act on alerts</p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((s, i) => (
            <Card key={i} className="bg-gradient-card hover:shadow-glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{s.title}</CardTitle>
                <s.icon className="w-4 h-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{s.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notification panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-destructive"/>Alerts</CardTitle>
            <CardDescription>Critical motivation drops and focus anomalies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {alerts.map((a, i) => (
              <Alert key={i}>
                <AlertTitle>{a.student}</AlertTitle>
                <AlertDescription>{a.message}</AlertDescription>
              </Alert>
            ))}
          </CardContent>
        </Card>

        {/* Quick links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/professor/students"><Button className="w-full">Student Management</Button></Link>
          <Link to="/professor/skills"><Button variant="outline" className="w-full">Skills Management</Button></Link>
          <Link to="/professor/activities"><Button variant="outline" className="w-full">Activities Supervision</Button></Link>
          <Link to="/professor/reports"><Button variant="outline" className="w-full">Reports & Insights</Button></Link>
        </div>
      </main>
    </div>
  );
}
