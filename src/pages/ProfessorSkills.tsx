import React, { useState } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface Skill { id: string; name: string; level: number; student: string }

export default function ProfessorSkills() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [skills, setSkills] = useState<Skill[]>([
    { id: '1', name: 'React', level: 70, student: 'Alice Kim' },
    { id: '2', name: 'Node.js', level: 55, student: 'Mark Lee' },
  ]);
  const [newSkill, setNewSkill] = useState({ name: '', level: 50, student: '' });

  const addSkill = () => {
    if (!newSkill.name || !newSkill.student) return;
    setSkills([...skills, { id: crypto.randomUUID(), ...newSkill }]);
    setNewSkill({ name: '', level: 50, student: '' });
  };

  const removeSkill = (id: string) => setSkills(skills.filter(s => s.id !== id));

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar userRole="professor" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`flex-1 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300 p-6 space-y-6`}>
        <Card>
          <CardHeader>
            <CardTitle>Skills Management</CardTitle>
            <CardDescription>Assign, update, and track student skills</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <Input placeholder="Skill name" value={newSkill.name} onChange={(e) => setNewSkill(s => ({ ...s, name: e.target.value }))} />
              <Input placeholder="Student name" value={newSkill.student} onChange={(e) => setNewSkill(s => ({ ...s, student: e.target.value }))} />
              <input type="range" min={0} max={100} value={newSkill.level} onChange={(e) => setNewSkill(s => ({ ...s, level: parseInt(e.target.value) }))} />
              <Button onClick={addSkill}>Add Skill</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((s) => (
                <div key={s.id} className="p-4 rounded-lg border bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">{s.name}</div>
                    <Badge variant="secondary">{s.student}</Badge>
                  </div>
                  <Progress value={s.level} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">{s.level}% proficiency</div>
                  <div className="pt-3 flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => removeSkill(s.id)}>Delete</Button>
                    <Button size="sm">Assign Course</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
