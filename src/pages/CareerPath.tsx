import React, { useState, useEffect } from 'react';

const careerGoal = "Full Stack Developer";

const milestones = [
  { id: 1, label: "Coding Bootcamp", icon: "💻", completed: true, time: "3 months", checklist: [{ text: "Complete HTML basics", done: true }, { text: "Build a simple website", done: true }, { text: "Learn JavaScript fundamentals", done: true }], resources: [{ label: "freeCodeCamp", link: "https://freecodecamp.org" }, { label: "Codecademy", link: "https://codecademy.com" }] },
  { id: 2, label: "Portfolio Review", icon: "📁", completed: false, time: "1 week", checklist: [{ text: "Create portfolio website", done: false }, { text: "Upload projects to GitHub", done: false }, { text: "Share on LinkedIn", done: false }], resources: [{ label: "GitHub", link: "https://github.com" }, { label: "LinkedIn", link: "https://linkedin.com" }] },
  { id: 3, label: "Industry Certification", icon: "🏅", completed: false, time: "2 months", checklist: [{ text: "Choose certification", done: false }, { text: "Complete course", done: false }, { text: "Pass exam", done: false }], resources: [{ label: "Coursera", link: "https://coursera.org" }, { label: "Udemy", link: "https://udemy.com" }] },
  { id: 4, label: "Internship Search", icon: "🔍", completed: false, time: "1 month", checklist: [{ text: "Update resume", done: false }, { text: "Apply to 10 positions", done: false }, { text: "Prepare cover letters", done: false }], resources: [{ label: "Indeed", link: "https://indeed.com" }, { label: "LinkedIn Jobs", link: "https://linkedin.com/jobs" }] },
  { id: 5, label: "Mock Interview", icon: "🎤", completed: false, time: "2 weeks", checklist: [{ text: "Practice coding problems", done: false }, { text: "Do mock interviews", done: false }, { text: "Get feedback", done: false }], resources: [{ label: "Pramp", link: "https://pramp.com" }, { label: "LeetCode", link: "https://leetcode.com" }] },
];

const motivationalQuotes = [
  "Every step brings you closer to your dream career!",
  "Progress is progress, no matter how small.",
  "You're building the future, one skill at a time.",
  "Keep going, you're closer than you think.",
  "Success is the sum of small efforts repeated day in and day out."
];

const topStudents = [
  { name: "John Doe", initials: "JD", steps: 5 },
  { name: "Jane Smith", initials: "JS", steps: 4 },
  { name: "Alex Johnson", initials: "AJ", steps: 3 },
];

const CareerPath = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [currentQuote, setCurrentQuote] = useState(0);

  const handleCheck = (milestoneId, itemIndex) => {
    setCheckedItems(prev => ({
      ...prev,
      [milestoneId]: {
        ...prev[milestoneId],
        [itemIndex]: !prev[milestoneId]?.[itemIndex]
      }
    }));
  };

  const completedCount = milestones.filter(m => m.completed).length;
  const progress = Math.round((completedCount / milestones.length) * 100);
  const currentIndex = milestones.findIndex(m => !m.completed);
  const nextStep = milestones[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % motivationalQuotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar with Motivational Quote */}
      <div className="w-full px-6 py-4">
        <div className="text-center text-xl font-semibold mb-2 text-primary">{progress}% Complete</div>
        <div className="w-full h-3 rounded-full bg-muted">
          <div className="h-3 rounded-full bg-primary" style={{ width: `${progress}%` }} />
        </div>
        <div className="text-center mt-2 text-muted-foreground italic">
          {motivationalQuotes[currentQuote]}
        </div>
      </div>

      {/* Milestone Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8">
        {milestones.map(ms => (
          <div className={`rounded-2xl shadow-xl p-6 border-2 ${ms.completed ? 'border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10' : 'border-muted bg-card'}`} key={ms.id}>
            <div className="flex items-center mb-4">
              <span className={`text-3xl mr-3 ${ms.completed ? 'text-primary' : 'text-muted-foreground'}`}>{ms.icon}</span>
              <span className="text-lg font-bold">{ms.label}</span>
              {ms.completed && <span className="ml-auto bg-primary/10 text-primary text-xs px-2 py-1 rounded">Achieved</span>}
            </div>
            <div className="mb-2 text-muted-foreground text-sm">Estimated Time: {ms.time}</div>
            <ul className="mb-2">
              {ms.checklist.map((task, i) => (
                <li key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={checkedItems[ms.id]?.[i] || task.done}
                    onChange={() => handleCheck(ms.id, i)}
                  />
                  <span>{task.text}</span>
                </li>
              ))}
            </ul>
            <div className="mb-2 flex gap-3">
              {ms.resources.map(res => (
                <a href={res.link} key={res.label} target="_blank" rel="noopener noreferrer" className="bg-secondary px-2 py-1 rounded text-secondary-foreground text-xs">{res.label}</a>
              ))}
            </div>
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground mt-3 rounded-lg" onClick={() => alert(`Chat with mentor for ${ms.label}`)}>Chat Mentor</button>
          </div>
        ))}
      </section>

      {/* Next Step Preview */}
      {nextStep && (
        <div className="mt-6 mx-6 p-4 bg-primary/5 text-primary rounded-xl text-center font-medium">
          Next Up: <span className="font-semibold">{nextStep.label}</span> — {nextStep.label} is your next milestone to unlock.
        </div>
      )}

      {/* Leaderboard Panel */}
      {/* Removed Top Achievers panel as per request */}

      {/* Call-to-Action */}
      <section className="my-10 px-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-3 text-primary">Ready for Your Next Milestone?</h2>
        <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl shadow-lg text-lg">Start Now</button>
      </section>

      {/* Footer */}
      <footer className="w-full bg-muted py-6 mt-12 flex flex-col items-center">
        <div className="mb-2 text-muted-foreground">Need Help? <a href="/contact" className="text-primary">Contact Us</a></div>
        <div className="text-muted-foreground text-xs">© 2025 CareerPath • Accessibility • Privacy Policy</div>
      </footer>
    </div>
  );
};

export default CareerPath;
