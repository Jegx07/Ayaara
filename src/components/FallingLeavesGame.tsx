import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award } from 'lucide-react';

interface Leaf {
  id: number;
  color: 'green' | 'yellow' | 'red';
  x: number;
  y: number;
  speed: number;
}

interface LeaderboardEntry {
  name: string;
  points: number;
  rank: number;
}

const colors = ['green', 'yellow', 'red'] as const;
const requiredOrder: ('green' | 'yellow' | 'red')[] = ['green', 'yellow'];

const initialLeaves: Leaf[] = [
  { id: 1, color: 'green', x: 20, y: 0, speed: 3 },
  { id: 2, color: 'yellow', x: 60, y: 0, speed: 4 },
  { id: 3, color: 'red', x: 80, y: 0, speed: 2.5 },
  { id: 4, color: 'green', x: 40, y: 0, speed: 3.5 },
];

const initialLeaderboard: LeaderboardEntry[] = [
  { name: 'You', points: 1250, rank: 1 },
  { name: 'Alice', points: 1180, rank: 2 },
  { name: 'Bob', points: 1120, rank: 3 },
  { name: 'Charlie', points: 1050, rank: 4 },
];

export default function FallingLeavesGame() {
  const [leaves, setLeaves] = useState<Leaf[]>(initialLeaves);
  const [orderIndex, setOrderIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(initialLeaderboard);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [motivationalMessage, setMotivationalMessage] = useState('Stay focused and tap the leaves in order!');

  const messages = [
    'Stay focused and tap the leaves in order!',
    'Great job! Keep the streak going!',
    'You\'re a focus master!',
    'One wrong tap and you reset - stay sharp!',
    'Mindfulness in action!',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLeaves(prev => prev.map(leaf => ({
        ...leaf,
        y: leaf.y + leaf.speed,
      })).filter(leaf => leaf.y < 400)); // Remove leaves that fall off screen
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleLeafTap = (tappedColor: 'green' | 'yellow' | 'red') => {
    if (tappedColor === requiredOrder[orderIndex]) {
      // Correct tap
      setOrderIndex(prev => prev + 1);
      setStreak(prev => prev + 1);
      setFeedback('correct');
      setMotivationalMessage(messages[Math.floor(Math.random() * messages.length)]);

      // If completed the order
      if (orderIndex + 1 === requiredOrder.length) {
        setScore(prev => prev + 100);
        setOrderIndex(0);
        setStreak(0);
        // Update leaderboard
        setLeaderboard(prev => prev.map(entry =>
          entry.name === 'You' ? { ...entry, points: entry.points + 100 } : entry
        ).sort((a, b) => b.points - a.points).map((entry, idx) => ({ ...entry, rank: idx + 1 })));
      }
    } else {
      // Wrong tap - reset
      setOrderIndex(0);
      setStreak(0);
      setFeedback('wrong');
      setLeaves(initialLeaves); // Reset leaves
      setMotivationalMessage('Oops! Wrong order. Try again!');
    }

    // Clear feedback after animation
    setTimeout(() => setFeedback(null), 500);
  };

  const getMedalIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-4 h-4 text-yellow-500" />;
      case 2: return <Medal className="w-4 h-4 text-gray-400" />;
      case 3: return <Award className="w-4 h-4 text-amber-600" />;
      default: return null;
    }
  };

  return (
    <Card className="bg-gradient-to-br from-sky-50 to-green-50 border-sky-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-orange-500" />
          Falling Leaves Challenge
        </CardTitle>
        <p className="text-sm text-muted-foreground">{motivationalMessage}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Order Display */}
        <div className="text-center">
          <p className="font-medium mb-2">Tap in order:</p>
          <div className="flex justify-center gap-2">
            {requiredOrder.map((color, idx) => (
              <Badge
                key={idx}
                variant={idx === orderIndex ? 'default' : 'secondary'}
                className={`capitalize ${idx === orderIndex ? 'bg-green-500' : ''}`}
              >
                {color}
              </Badge>
            ))}
          </div>
        </div>

        {/* Game Area */}
        <div className="relative h-80 bg-gradient-to-b from-sky-200 to-green-200 rounded-lg overflow-hidden border-2 border-sky-300">
          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`absolute inset-0 flex items-center justify-center text-2xl font-bold ${
                  feedback === 'correct' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {feedback === 'correct' ? '✓ Correct!' : '✗ Reset!'}
              </motion.div>
            )}
          </AnimatePresence>

          {leaves.map(leaf => (
            <motion.div
              key={leaf.id}
              className={`absolute w-8 h-8 rounded-full cursor-pointer border-2 border-white shadow-lg ${
                leaf.color === 'green' ? 'bg-green-500' :
                leaf.color === 'yellow' ? 'bg-yellow-400' : 'bg-red-500'
              }`}
              style={{
                left: `${leaf.x}%`,
                top: `${leaf.y}px`,
                transform: 'translateX(-50%)',
              }}
              animate={{
                y: leaf.y,
              }}
              transition={{
                duration: leaf.speed / 10,
                ease: 'linear',
              }}
              whileTap={{ scale: 1.2 }}
              onClick={() => handleLeafTap(leaf.color)}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-between text-sm">
          <span>Score: {score}</span>
          <span>Streak: {streak}</span>
        </div>

        {/* Leaderboard */}
        <div>
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Leaderboard
          </h4>
          <div className="space-y-1">
            {leaderboard.slice(0, 3).map((entry, idx) => (
              <div
                key={entry.name}
                className={`flex items-center justify-between p-2 rounded ${
                  entry.name === 'You' ? 'bg-blue-100 border border-blue-300' : 'bg-muted'
                }`}
              >
                <div className="flex items-center gap-2">
                  {getMedalIcon(entry.rank)}
                  <span className="font-medium">{entry.rank}. {entry.name}</span>
                </div>
                <span>{entry.points} pts</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
