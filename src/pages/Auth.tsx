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
    <div className="relative min-h-screen bg-[#f6f8f6]">
      {/* Premium Header */}
      <div className="absolute top-0 left-0 right-0 z-10 border-b border-[#e1e8e3] bg-[#fbfcfb]/80 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#1d7d54] flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-display font-bold text-[#18271d] text-lg">Ayaara</span>
          </div>
          
          {/* Role Selector */}
          <div className="flex items-center gap-3 bg-white rounded-full p-1.5 border border-[#e1e8e3]">
            <button
              onClick={() => setRole('student')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                role === 'student'
                  ? 'bg-[#1d7d54] text-white'
                  : 'text-[#76877e] hover:text-[#18271d]'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setRole('professor')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                role === 'professor'
                  ? 'bg-[#1d7d54] text-white'
                  : 'text-[#76877e] hover:text-[#18271d]'
              }`}
            >
              Professor
            </button>
          </div>

          {/* Continue Button */}
          <button
            onClick={() => navigate(role === 'student' ? '/student' : '/professor')}
            className="px-6 py-2 rounded-full bg-[#1d7d54] text-white text-sm font-semibold hover:bg-[#145d3f] transition-colors ml-4"
          >
            Continue →
          </button>
        </div>
      </div>

      {/* Auth Content */}
      <div className="pt-16">
        <AuthUI 
          signInContent={{
            image: { src: studentsImage, alt: 'Students using motivation tracking dashboard' },
            quote: { text: 'Continue your learning journey with intelligent motivation tracking.', author: 'Ayaara - Student Portal' }
          }}
          signUpContent={{
            image: { src: professorImage, alt: 'Professor reviewing student analytics' },
            quote: { text: 'Shape the future of education with advanced student analytics.', author: 'Ayaara - Teaching Platform' }
          }}
        />
      </div>

      {/* Decorative footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#e8ede9]/20 to-transparent pointer-events-none" />
    </div>
  );
}
