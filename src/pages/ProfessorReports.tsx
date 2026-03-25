import React, { useState } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const data = [
  { name: 'Alice Kim', mli: 82, hours: 7.2, completed: 5 },
  { name: 'Mark Lee', mli: 65, hours: 5.1, completed: 3 },
  { name: 'Priya N', mli: 88, hours: 8.0, completed: 6 },
];

function downloadCSV() {
  const headers = ['Name', 'MLI', 'Study Hours', 'Assignments Completed'];
  const rows = data.map(d => [d.name, d.mli, d.hours, d.completed]);
  const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'student_report.csv'; a.click(); URL.revokeObjectURL(url);
}

export default function ProfessorReports() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar userRole="professor" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`flex-1 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300 p-6 space-y-6`}>
        <Card>
          <CardHeader>
            <CardTitle>Reports & Insights</CardTitle>
            <CardDescription>Generate exports and compare students</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3 flex-wrap">
              <Button onClick={downloadCSV}>Export CSV</Button>
              <Button variant="outline" disabled>Generate PDF (connect Supabase)</Button>
              <Button variant="outline" disabled>Export to Excel (connect Supabase)</Button>
            </div>
            <div className="text-sm text-muted-foreground">Connect Supabase for production-ready exports and secure storage.</div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
