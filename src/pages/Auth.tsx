import React, { useState } from 'react';
import { AuthUI } from '@/components/ui/auth-fuse';
import studentsImage from '@/assets/students-dashboard.jpg';
import professorImage from '@/assets/professor-dashboard.jpg';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate();
  const [role, setRole] = useState<'student'|'professor'>('student');
  return (
    <div className="relative">
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-background/80 backdrop-blur-md border rounded-full p-1">
        <Button variant={role === 'student' ? 'default' : 'outline'} size="sm" onClick={() => setRole('student')}>Student</Button>
        <Button variant={role === 'professor' ? 'default' : 'outline'} size="sm" onClick={() => setRole('professor')}>Professor</Button>
        <Button className="ml-2" onClick={() => navigate(role === 'student' ? '/student' : '/professor')}>Continue</Button>
      </div>
      <AuthUI 
        signInContent={{
          image: { src: studentsImage, alt: 'Students using motivation tracking dashboard' },
          quote: { text: 'Welcome back! Continue your motivation tracking journey.', author: 'MotiTrack - Student Portal' }
        }}
        signUpContent={{
          image: { src: professorImage, alt: 'Professor reviewing student analytics' },
          quote: { text: 'Join the future of educational technology and motivation tracking.', author: 'MotiTrack - Smart Learning Platform' }
        }}
      />
    </div>
  );
}
