import React, { useState } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Activity, Clock, Brain, Moon, Sun, ThumbsUp } from 'lucide-react';

const timeline = [
  { time: '08:00', title: 'Study Session', icon: Sun, detail: 'Math practice (1h)' },
  { time: '10:00', title: 'Break', icon: Clock, detail: '10-minute break' },
  { time: '11:00', title: 'Focused Study', icon: Brain, detail: 'Algorithms (2h)' },
  { time: '14:00', title: 'Study Session', icon: Activity, detail: 'Systems (1.5h)' },
  { time: '22:30', title: 'Late-night session', icon: Moon, detail: 'Reading (1h)' },
];

const recommendations = [
  { msg: 'Student X needs focus training (frequent context switches).'},
  { msg: 'Student Y should reduce late-night study (impacts MLI).'},
  { msg: 'Encourage 10-minute breaks every 50 minutes.'},
];

export default function ProfessorActivities() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar userRole="professor" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`flex-1 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300 p-6 space-y-6`}>
        <Card>
          <CardHeader>
            <CardTitle>Activities Supervision</CardTitle>
            <CardDescription>Timeline of key actions and AI recommendations</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {timeline.map((t, i) => (
                <div key={i} className="p-4 rounded-lg border bg-card flex items-start gap-3">
                  <div className="w-12 text-sm text-muted-foreground">{t.time}</div>
                  <div className="mt-1"><t.icon className="w-5 h-5"/></div>
                  <div>
                    <div className="font-medium text-sm">{t.title}</div>
                    <div className="text-xs text-muted-foreground">{t.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><ThumbsUp className="w-5 h-5 text-primary"/>AI Recommendations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {recommendations.map((r, i) => (
                    <div key={i} className="p-3 rounded-md border bg-muted/30 text-sm">{r.msg}</div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
