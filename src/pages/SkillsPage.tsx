import React, { useState } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import SkillAssessment from '@/components/SkillAssessment';

export default function SkillsPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar userRole="student" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`flex-1 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300 p-6`}>
        <SkillAssessment />
      </main>
    </div>
  );
}
