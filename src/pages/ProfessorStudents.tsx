import React, { useMemo, useState } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface Student { id: string; name: string; roll: string; dept: string; mli: number; status: 'Normal' | 'Critical' | 'Warning' }

const initial: Student[] = [
  { id: 's1', name: 'Alice Kim', roll: 'CS-101', dept: 'CS', mli: 42, status: 'Critical' },
  { id: 's2', name: 'Mark Lee', roll: 'CS-102', dept: 'CS', mli: 65, status: 'Warning' },
  { id: 's3', name: 'Priya N', roll: 'EE-201', dept: 'EE', mli: 82, status: 'Normal' },
  { id: 's4', name: 'David O', roll: 'ME-301', dept: 'ME', mli: 76, status: 'Normal' },
];

export default function ProfessorStudents() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [q, setQ] = useState('');
  const [dept, setDept] = useState<string>('All');
  const [sort, setSort] = useState<'asc'|'desc'>('desc');
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    let list = initial.filter(s => s.name.toLowerCase().includes(q.toLowerCase()) || s.roll.toLowerCase().includes(q.toLowerCase()));
    if (dept !== 'All') list = list.filter(s => s.dept === dept);
    list = list.sort((a,b) => sort === 'asc' ? a.mli - b.mli : b.mli - a.mli);
    return list;
  }, [q, dept, sort]);

  const statusBadge = (s: Student['status']) => {
    const variants: Record<Student['status'], string> = { Normal: 'secondary', Warning: 'accent', Critical: 'destructive' };
    return <Badge variant={variants[s] as any}>{s}</Badge>;
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar userRole="professor" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`flex-1 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300 p-6 space-y-6`}>
        <Card>
          <CardHeader>
            <CardTitle>Student Management</CardTitle>
            <CardDescription>Search, filter, sort, and open student profile</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Search by name or roll" value={q} onChange={(e) => setQ(e.target.value)} />
              <Select value={dept} onValueChange={(v) => setDept(v)}>
                <SelectTrigger><SelectValue placeholder="Department" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="CS">CS</SelectItem>
                  <SelectItem value="EE">EE</SelectItem>
                  <SelectItem value="ME">ME</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sort} onValueChange={(v: 'asc'|'desc') => setSort(v)}>
                <SelectTrigger><SelectValue placeholder="Sort by MLI" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">MLI High → Low</SelectItem>
                  <SelectItem value="asc">MLI Low → High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Roll No</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Motivation Score</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((s) => (
                    <TableRow key={s.id} className="cursor-pointer" onClick={() => navigate(`/professor/students/${s.id}`)}>
                      <TableCell className="font-medium">{s.name}</TableCell>
                      <TableCell>{s.roll}</TableCell>
                      <TableCell>{s.dept}</TableCell>
                      <TableCell>{s.mli}%</TableCell>
                      <TableCell>{statusBadge(s.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
