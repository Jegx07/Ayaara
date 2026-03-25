import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Heart, Sparkles, Trophy, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type QuestType = 'breathing' | 'task';

interface Quest {
  id: string;
  type: QuestType;
  title: string;
  description: string;
  duration?: number; // for breathing
}

const quests: Quest[] = [
  {
    id: 'breathing',
    type: 'breathing',
    title: 'Breathing Quest',
    description: 'Follow the pulsating orb to breathe deeply and calm your mind.',
    duration: 60 // seconds
  },
  {
    id: 'task',
    type: 'task',
    title: 'Find a Spark',
    description: 'Write down one tiny, achievable task you can complete in the next five minutes.'
  }
];

export default function MentalSupport() {
  const navigate = useNavigate();
  const [currentQuest, setCurrentQuest] = useState<Quest | null>(null);
  const [questCompleted, setQuestCompleted] = useState(false);
  const [gems, setGems] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [breathingTime, setBreathingTime] = useState(0);
  const [taskInput, setTaskInput] = useState('');

  // Simulate AI detection - for demo, randomly select quest
  useEffect(() => {
    const randomQuest = quests[Math.floor(Math.random() * quests.length)];
    setCurrentQuest(randomQuest);
  }, []);

  // Breathing timer
  useEffect(() => {
    if (currentQuest?.type === 'breathing' && !questCompleted) {
      const interval = setInterval(() => {
        setBreathingTime(prev => {
          const newTime = prev + 1;
          // Cycle through breathing phases
          if (newTime % 4 === 0) setBreathingPhase('inhale');
          else if (newTime % 4 === 2) setBreathingPhase('hold');
          else if (newTime % 4 === 1) setBreathingPhase('exhale');

          if (newTime >= (currentQuest.duration || 60)) {
            completeQuest();
          }
          return newTime;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentQuest, questCompleted]);

  const completeQuest = () => {
    setQuestCompleted(true);
    setGems(prev => prev + 15);
    // Add badge if first completion
    if (badges.length === 0) {
      setBadges(['Focus Champion']);
    }
  };

  const handleTaskSubmit = () => {
    if (taskInput.trim()) {
      completeQuest();
    }
  };

  const startNewQuest = () => {
    const newQuest = quests[Math.floor(Math.random() * quests.length)];
    setCurrentQuest(newQuest);
    setQuestCompleted(false);
    setBreathingTime(0);
    setTaskInput('');
  };

  if (!currentQuest) return <div>Loading quest...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-gray-800 mb-2"
          >
            Your Inner Hero Quest
          </motion.h1>
          <p className="text-gray-600">Take a moment to recharge and build your well-being</p>
        </div>

        {/* Gems and Badges */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-center gap-4 mb-6"
        >
          <Badge variant="secondary" className="bg-teal-100 text-teal-800">
            <Sparkles className="w-4 h-4 mr-1" />
            {gems} Mindful Gems
          </Badge>
          {badges.map(badge => (
            <Badge key={badge} variant="outline" className="border-teal-300 text-teal-700">
              <Trophy className="w-4 h-4 mr-1" />
              {badge}
            </Badge>
          ))}
        </motion.div>

        {/* Quest Card */}
        <AnimatePresence mode="wait">
          {!questCompleted ? (
            <motion.div
              key="quest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-teal-200 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-800">{currentQuest.title}</CardTitle>
                  <p className="text-gray-600">{currentQuest.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {currentQuest.type === 'breathing' && (
                    <div className="text-center">
                      <motion.div
                        animate={{
                          scale: breathingPhase === 'inhale' ? 1.2 : breathingPhase === 'exhale' ? 0.8 : 1,
                        }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg flex items-center justify-center"
                      >
                        <Heart className="w-16 h-16 text-white" />
                      </motion.div>
                      <p className="mt-4 text-lg font-medium text-gray-700">
                        {breathingPhase === 'inhale' ? 'Breathe In' :
                         breathingPhase === 'hold' ? 'Hold' : 'Breathe Out'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {breathingTime}s / {currentQuest.duration}s
                      </p>
                    </div>
                  )}

                  {currentQuest.type === 'task' && (
                    <div className="space-y-4">
                      <Textarea
                        placeholder="Write your tiny achievable task here..."
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        className="min-h-24 border-teal-300 focus:border-teal-500"
                      />
                      <Button
                        onClick={handleTaskSubmit}
                        disabled={!taskInput.trim()}
                        className="w-full bg-teal-600 hover:bg-teal-700"
                      >
                        Complete Quest
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="completed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-teal-200 shadow-lg">
                <CardContent className="text-center py-12">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center"
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Quest Complete!</h2>
                  <p className="text-gray-600 mb-4">
                    The orb is now glowing brightly. You earned 15 Mindful Gems!
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Button
                      onClick={() => navigate('/dashboard')}
                      variant="outline"
                      className="border-teal-300 text-teal-700 hover:bg-teal-50"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Return to Dashboard
                    </Button>
                    <Button
                      onClick={startNewQuest}
                      className="bg-teal-600 hover:bg-teal-700"
                    >
                      Start Another Quest
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
