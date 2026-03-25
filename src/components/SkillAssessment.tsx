import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import { 
  Plus, 
  X, 
  Upload, 
  Brain, 
  Target, 
  BookOpen, 
  Code, 
  Briefcase,
  TrendingUp
} from 'lucide-react';

const skillCategories = [
  "Programming Languages",
  "Web Development", 
  "Data Science",
  "Machine Learning",
  "Mobile Development",
  "Cloud Computing",
  "DevOps",
  "UI/UX Design"
];

const dreamJobRequirements = {
  "Full Stack Developer": {
    "JavaScript": 90,
    "React": 85,
    "Node.js": 80,
    "Python": 75,
    "SQL": 70,
    "AWS": 65
  },
  "Data Scientist": {
    "Python": 95,
    "Machine Learning": 90,
    "Statistics": 85,
    "SQL": 80,
    "R": 75,
    "TensorFlow": 70
  },
  "Product Manager": {
    "Product Strategy": 90,
    "Analytics": 85,
    "Communication": 95,
    "Leadership": 80,
    "Market Research": 75,
    "Agile": 70
  }
};

interface Skill {
  name: string;
  level: number;
  category: string;
}

export default function SkillAssessment() {
  const [skills, setSkills] = useState<Skill[]>([
    { name: "JavaScript", level: 75, category: "Programming Languages" },
    { name: "React", level: 70, category: "Web Development" },
    { name: "Python", level: 60, category: "Programming Languages" },
    { name: "Node.js", level: 55, category: "Web Development" },
    { name: "SQL", level: 65, category: "Data Science" },
    { name: "AWS", level: 40, category: "Cloud Computing" },
  ]);

  const [newSkill, setNewSkill] = useState({ name: "", level: 50, category: skillCategories[0] });
  const [selectedJob, setSelectedJob] = useState<keyof typeof dreamJobRequirements>("Full Stack Developer");

  const addSkill = () => {
    if (newSkill.name.trim()) {
      setSkills([...skills, newSkill]);
      setNewSkill({ name: "", level: 50, category: skillCategories[0] });
    }
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const updateSkillLevel = (index: number, level: number) => {
    const updatedSkills = [...skills];
    updatedSkills[index].level = level;
    setSkills(updatedSkills);
  };

  // Prepare radar chart data
  const radarData = skills.map(skill => ({
    skill: skill.name,
    current: skill.level,
    required: dreamJobRequirements[selectedJob][skill.name] || 0
  }));

  // Calculate skill gap
  const skillGapData = Object.entries(dreamJobRequirements[selectedJob]).map(([skillName, required]) => {
    const currentSkill = skills.find(s => s.name === skillName);
    const current = currentSkill?.level || 0;
    const gap = Math.max(0, required - current);
    return {
      skill: skillName,
      current,
      required,
      gap
    };
  });

  const averageMatch = skillGapData.reduce((sum, skill) => 
    sum + (skill.current / skill.required), 0) / skillGapData.length * 100;

  const courseRecommendations = [
    { title: "Advanced React Patterns", provider: "React Academy", duration: "8 weeks", level: "Advanced" },
    { title: "AWS Solutions Architect", provider: "AWS Training", duration: "12 weeks", level: "Intermediate" },
    { title: "Node.js Backend Development", provider: "Backend Masters", duration: "6 weeks", level: "Intermediate" },
    { title: "Python for Data Science", provider: "DataCamp", duration: "10 weeks", level: "Beginner" }
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Brain className="w-8 h-8 text-primary" />
          Skill Assessment & Career Assistant
        </h1>
        <p className="text-muted-foreground">Upload your skills and compare against your dream job requirements</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Skill Input Panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <Card className="bg-gradient-card border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Skills
              </CardTitle>
              <CardDescription>
                Upload or manually enter your current skills
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="skill-name">Skill Name</Label>
                <Input
                  id="skill-name"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  placeholder="e.g., JavaScript, React..."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="skill-level">Proficiency Level: {newSkill.level}%</Label>
                <input
                  type="range"
                  id="skill-level"
                  min="0"
                  max="100"
                  value={newSkill.level}
                  onChange={(e) => setNewSkill({ ...newSkill, level: parseInt(e.target.value) })}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skill-category">Category</Label>
                <select
                  id="skill-category"
                  value={newSkill.category}
                  onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md bg-background"
                >
                  {skillCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <Button onClick={addSkill} className="w-full">
                Add Skill
              </Button>

              <div className="border-t pt-4">
                <Button variant="outline" className="w-full" disabled>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Resume (Coming Soon)
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Current Skills List */}
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle>Your Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeSkill(index)}
                          className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <div className="flex justify-between mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {skill.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skill Gap Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <Card className="bg-gradient-card border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                Skill Gap Analysis
              </CardTitle>
              <CardDescription>
                Compare your skills with dream job requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="job-role">Dream Job Role</Label>
                  <select
                    id="job-role"
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value as keyof typeof dreamJobRequirements)}
                    className="w-full px-3 py-2 border rounded-md bg-background mt-1"
                  >
                    {Object.keys(dreamJobRequirements).map(job => (
                      <option key={job} value={job}>{job}</option>
                    ))}
                  </select>
                </div>

                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{Math.round(averageMatch)}%</div>
                  <div className="text-sm text-muted-foreground">Match Score</div>
                </div>

                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="hsl(var(--border))" />
                      <PolarAngleAxis 
                        dataKey="skill" 
                        tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
                      />
                      <PolarRadiusAxis 
                        angle={90} 
                        domain={[0, 100]}
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                      />
                      <Radar
                        name="Required"
                        dataKey="required"
                        stroke="hsl(var(--destructive))"
                        fill="hsl(var(--destructive))"
                        fillOpacity={0.1}
                        strokeWidth={2}
                      />
                      <Radar
                        name="Current"
                        dataKey="current"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.2}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Course Recommendations */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <Card className="bg-gradient-card border-success/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-success" />
                Recommended Courses
              </CardTitle>
              <CardDescription>
                Suggested training to bridge your skill gaps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {courseRecommendations.map((course, index) => (
                  <div key={index} className="p-4 rounded-lg border hover:bg-accent/5 transition-colors">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">{course.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{course.provider}</span>
                        <span>•</span>
                        <span>{course.duration}</span>
                        <Badge variant="secondary" className="text-xs">
                          {course.level}
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline" className="w-full h-8 text-xs">
                        View Course
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Career Progress */}
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Career Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Readiness</span>
                    <span className="font-medium">{Math.round(averageMatch)}%</span>
                  </div>
                  <Progress value={averageMatch} className="h-3" />
                </div>
                
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <TrendingUp className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Keep Learning!</div>
                  <div className="text-xs text-muted-foreground">
                    Focus on AWS and Node.js to reach your goal
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}