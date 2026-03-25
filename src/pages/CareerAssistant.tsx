import React, { useState, useEffect } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, TrendingUp, BookOpen, Award, ChevronRight, Users, Star, MessageCircle, Mail, Phone, Lightbulb, Zap, CheckCircle } from 'lucide-react';

const dreamJobs = [
  { title: 'Full Stack Developer', match: 78, requiredSkills: ['React', 'Node.js', 'MongoDB', 'AWS'] },
  { title: 'Frontend Developer', match: 85, requiredSkills: ['React', 'TypeScript', 'CSS', 'Redux'] },
  { title: 'Data Analyst', match: 45, requiredSkills: ['Python', 'SQL', 'Tableau', 'Statistics'] },
];

const recommendations = [
  { title: 'Complete React Advanced Course', priority: 'High', estimatedTime: '40 hours' },
  { title: 'Build 3 Full-Stack Projects', priority: 'High', estimatedTime: '60 hours' },
  { title: 'Learn TypeScript Fundamentals', priority: 'Medium', estimatedTime: '20 hours' },
  { title: 'AWS Certification Prep', priority: 'Low', estimatedTime: '80 hours' },
];

const chartData = [
  { name: 'Full Stack Dev', match: 78 },
  { name: 'Frontend Dev', match: 85 },
  { name: 'Data Analyst', match: 45 },
];

const mentors = [
  { name: 'Jane Doe', expertise: 'Frontend/Mobile Specialist', img: '/placeholder.svg' },
  { name: 'John Smith', expertise: 'Backend & Cloud Expert', img: '/placeholder.svg' },
  { name: 'Alice Johnson', expertise: 'Data Science Mentor', img: '/placeholder.svg' },
];

const testimonials = [
  { quote: 'This platform transformed my career path!', name: 'Student A', outcome: 'Landed a job at Tech Corp' },
  { quote: 'Incredible mentors and resources.', name: 'Student B', outcome: 'Completed 5 certifications' },
  { quote: 'Skill gap analysis was spot on.', name: 'Student C', outcome: 'Increased readiness by 30%' },
];

const goals = [
  { title: 'Complete AWS Certification', progress: 40 },
  { title: 'Build Portfolio Project', progress: 70 },
];

export default function CareerAssistant() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [skillsCount, setSkillsCount] = useState(0);
  const [readinessCount, setReadinessCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkillsCount(12);
      setReadinessCount(78);
      setHoursCount(47);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar userRole="student" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`flex-1 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300 p-6 space-y-8`}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Empower Your Career Journey</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">Discover personalized paths, expert mentors, and resources to unlock your professional potential and achieve your dream career.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
              Find Your Path <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        {/* Insights Block */}
        <Card className="rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="w-6 h-6 text-primary"/>
              Career Insights
            </CardTitle>
            <CardDescription>Dynamic visualizations and personalized recommendations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Replaced Bar Chart with Local Images from public folder root */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border bg-card shadow-lg text-center">
                <img
                  src="/orange.png"
                  alt="Full Stack Dev Orange 3D Bar Chart"
                  className="mx-auto rounded-lg mb-2"
                />
                <p className="text-sm text-muted-foreground">
                  A 3D isometric bar chart visualizing tech skill demand. The bar for Full Stack Dev is highlighted in vibrant orange.
                </p>
              </div>
              <div className="p-4 rounded-lg border bg-card shadow-lg text-center">
                <img
                  src="/blue.png"
                  alt="Frontend Dev Cyan 3D Bar Chart"
                  className="mx-auto rounded-lg mb-2"
                />
                <p className="text-sm text-muted-foreground">
                  A 3D isometric bar chart with Frontend Dev highlighted in cyan blue, showing value 85.
                </p>
              </div>
              <div className="p-4 rounded-lg border bg-card shadow-lg text-center">
                <img
                  src="/rose.png"
                  alt="Data Analyst 3D Bar Chart"
                  className="mx-auto rounded-lg mb-2"
                />
                <p className="text-sm text-muted-foreground">
                  A 3D isometric bar chart showing Data Analyst with value 45, in a futuristic UI style.
                </p>
              </div>
            </div>

            {/* Dream Job Matches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dreamJobs.map((job, i) => (
                <div key={i} className="p-4 rounded-xl border bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all hover:scale-105">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.match}% match</p>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full">
                      View Details <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                  <Progress value={job.match} className="h-3 mb-3 rounded-full" />
                  <div className="flex flex-wrap gap-2 mb-3">
                    {job.requiredSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs rounded-full">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {/* Skill Gap Alert */}
                  {job.title === 'Data Analyst' && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 mt-3">
                      <div className="flex items-center gap-2 text-red-700 dark:text-red-300">
                        <Zap className="w-4 h-4" />
                        <span className="font-medium">Missing Skill: Python</span>
                      </div>
                      <Button size="sm" variant="outline" className="mt-2 border-red-300 text-red-700 hover:bg-red-100 dark:border-red-700 dark:text-red-300">
                        Start Learning
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Recommended Paths */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Recommended Career Paths
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 rounded-xl">
                  <h5 className="font-medium mb-2">Frontend Specialist</h5>
                  <p className="text-sm text-muted-foreground mb-3">Focus on React, TypeScript, and modern UI frameworks.</p>
                  <Button size="sm">Explore Path</Button>
                </Card>
                <Card className="p-4 rounded-xl">
                  <h5 className="font-medium mb-2">Full-Stack Developer</h5>
                  <p className="text-sm text-muted-foreground mb-3">Master both frontend and backend technologies.</p>
                  <Button size="sm">Explore Path</Button>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services/Features Section */}
        <Card className="rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CheckCircle className="w-6 h-6 text-primary"/>
              Career Services
            </CardTitle>
            <CardDescription>Comprehensive tools to accelerate your professional growth</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="resume" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-xl">
                <TabsTrigger value="resume" className="rounded-lg">Resume Review</TabsTrigger>
                <TabsTrigger value="mock" className="rounded-lg">Mock Interviews</TabsTrigger>
                <TabsTrigger value="gap" className="rounded-lg">Skill Gap Analysis</TabsTrigger>
              </TabsList>
              <TabsContent value="resume" className="mt-6">
                <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                  <h3 className="text-xl font-semibold mb-3">Professional Resume Review</h3>
                  <p className="text-muted-foreground mb-4">Get expert feedback on your resume to stand out to employers. Our AI analyzes content, formatting, and keywords.</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">ATS-optimized suggestions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Industry-specific tips</span>
                    </div>
                  </div>
                  <Button>Upload Resume</Button>
                </div>
              </TabsContent>
              <TabsContent value="mock" className="mt-6">
                <div className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                  <h3 className="text-xl font-semibold mb-3">Mock Interview Practice</h3>
                  <p className="text-muted-foreground mb-4">Simulate real interviews with AI-powered questions tailored to your target role. Receive detailed feedback and improvement tips.</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Role-specific scenarios</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Instant feedback</span>
                    </div>
                  </div>
                  <Button>Start Mock Interview</Button>
                </div>
              </TabsContent>
              <TabsContent value="gap" className="mt-6">
                <div className="p-6 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                  <h3 className="text-xl font-semibold mb-3">Skill Gap Analysis</h3>
                  <p className="text-muted-foreground mb-4">Identify missing skills for your dream job and get personalized learning recommendations to bridge the gaps.</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Detailed skill mapping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Curated learning paths</span>
                    </div>
                  </div>
                  <Button>Analyze My Skills</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Expert/Mentor Spotlight */}
        <Card className="rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="w-6 h-6 text-primary" />
              Mentor Spotlight
            </CardTitle>
            <CardDescription>Connect with industry experts and book mentorship sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {mentors.map((mentor, i) => (
                <div key={i} className="p-4 rounded-xl border bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all hover:scale-105 flex flex-col items-center text-center">
                  <img src={mentor.img} alt={mentor.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
                  <h3 className="font-semibold text-lg">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{mentor.expertise}</p>
                  <Button size="sm" className="w-full">Book Mentorship</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Testimonials/Success Stories */}
        <Card className="rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Star className="w-6 h-6 text-primary" />
              Success Stories
            </CardTitle>
            <CardDescription>Hear from students who achieved their career goals</CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="space-y-4">
              <CarouselContent>
                {testimonials.map((testi, i) => (
                  <CarouselItem key={i} className="p-6 rounded-xl border bg-gradient-to-br from-card to-card/50 shadow-md">
                    <p className="italic text-lg mb-4">"{testi.quote}"</p>
                    <p className="font-semibold">{testi.name}</p>
                    <p className="text-sm text-muted-foreground">{testi.outcome}</p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-4">
                <CarouselPrevious className="cursor-pointer" />
                <CarouselNext className="cursor-pointer" />
              </div>
            </Carousel>
          </CardContent>
        </Card>

        {/* Goal Setting & Milestone Tracker */}
        <Card className="rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="w-6 h-6 text-primary" />
              Goal Tracker
            </CardTitle>
            <CardDescription>Track your career goals and celebrate milestones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {goals.map((goal, i) => (
              <div key={i} className="p-4 rounded-xl border bg-gradient-to-br from-card to-card/50">
                <h4 className="font-semibold mb-2">{goal.title}</h4>
                <Progress value={goal.progress} className="h-4 rounded-full" />
                <p className="text-sm text-muted-foreground mt-1">{goal.progress}% completed</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl text-center text-sm text-muted-foreground">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h5 className="font-semibold mb-1">Contact Us</h5>
                <div className="flex items-center justify-center gap-4 text-primary">
                  <Mail className="w-5 h-5" />
                  <Phone className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Support Resources</h5>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:underline">Help Center</a></li>
                  <li><a href="#" className="hover:underline">Career Tips Blog</a></li>
                  <li><a href="#" className="hover:underline">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Quick Tips</h5>
                <p className="text-xs">Build your network, stay updated with industry trends, and never stop learning.</p>
              </div>
            </div>
            <p>&copy; 2024 LearnLift Career Assistant. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
