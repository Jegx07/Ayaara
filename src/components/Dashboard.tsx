import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Heart, Clock, Target, AlertCircle, CheckCircle } from 'lucide-react';
import { MotivationChart, VitalSignsChart, StudyFocusChart } from './MotivationChart';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const stats = [
  {
    title: "Current Motivation",
    value: "85%",
    change: "+5% from yesterday",
    icon: Brain,
    color: "text-primary"
  },
  {
    title: "Focus Score", 
    value: "92%",
    change: "+12% this week",
    icon: Target,
    color: "text-success"
  },
  {
    title: "Study Streak",
    value: "7 days",
    change: "Personal best!",
    icon: Clock,
    color: "text-accent"
  },
  {
    title: "Heart Rate Avg",
    value: "72 BPM",
    change: "Optimal range",
    icon: Heart,
    color: "text-destructive"
  }
];

const recommendations = [
  {
    type: "break",
    icon: AlertCircle,
    title: "Take a 10-minute break",
    description: "Your focus score has been high for 2 hours. A short break will help maintain performance.",
    action: "Start Break Timer"
  },
  {
    type: "technique",
    icon: Brain,
    title: "Try Pomodoro Technique",
    description: "Based on your study patterns, 25-minute focused sessions might boost your productivity.",
    action: "Start Pomodoro"
  },
  {
    type: "achievement",
    icon: CheckCircle,
    title: "Congratulations!",
    description: "You've maintained 85%+ motivation for 3 consecutive days. Keep up the great work!",
    action: "View Details"
  },
  {
    type: "mental",
    icon: Heart,
    title: "Mental Support Quest",
    description: "Take a moment for yourself with our gamified mental wellness activities.",
    action: "Start Quest"
  }
];

export default function Dashboard() {
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check motivation and trigger mental support notification
  useEffect(() => {
    const motivationValue = parseInt(stats[0].value); // "85%" -> 85
    if (motivationValue < 70) {
      toast({
        title: "Need a mental boost?",
        description: "Your motivation is a bit low. Try our gamified mental support quests!",
        action: (
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/mental-support')}
          >
            Start Quest
          </Button>
        ),
      });
    }
  }, [toast, navigate]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 p-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold">Motivation Dashboard</h1>
        <p className="text-muted-foreground">Track your motivation and performance in real-time</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card border-primary/20 hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Charts Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MotivationChart />
        <VitalSignsChart />
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StudyFocusChart />
        </div>
        
        {/* Recommendations Card */}
        <Card className="bg-gradient-card border-primary/20 shadow-elegant">
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
            <CardDescription>Personalized suggestions to boost your performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors">
                <div className="flex items-start gap-3">
                  <rec.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="space-y-2 flex-1">
                    <h4 className="font-medium text-sm">{rec.title}</h4>
                    <p className="text-xs text-muted-foreground">{rec.description}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs"
                      onClick={rec.type === 'mental' ? () => navigate('/mental-support') : undefined}
                    >
                      {rec.action}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
