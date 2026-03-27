import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, X } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm here to help with any questions about LearnLift. How can I assist you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const getResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    if (lowerQuestion.includes('login') || lowerQuestion.includes('sign in')) {
      return "To log in, please visit the Auth page and enter your credentials. If you need help resetting your password, contact support.";
    }
    if (lowerQuestion.includes('dashboard')) {
      return "Your dashboard provides an overview of your activities. Students can view their progress, and professors can manage classes.";
    }
    if (lowerQuestion.includes('skills') || lowerQuestion.includes('assessment')) {
      return "Skill assessments help track your learning progress. You can take them from the Skills page.";
    }
    if (lowerQuestion.includes('professor') || lowerQuestion.includes('teacher')) {
      return "Professors can access student reports, manage activities, and view analytics from their dashboard.";
    }
    if (lowerQuestion.includes('student')) {
      return "Students can view their profile, take skill assessments, and access career assistance.";
    }
    if (lowerQuestion.includes('iot') || lowerQuestion.includes('device')) {
      return "The IoT Device Hub allows monitoring and managing connected devices for enhanced learning experiences.";
    }
    if (lowerQuestion.includes('career')) {
      return "Career assistance provides guidance on job opportunities and skill development. Visit the Career page for more.";
    }
    if (lowerQuestion.includes('mental') || lowerQuestion.includes('support')) {
      return "Mental support is available to help with well-being. Please reach out if you need assistance.";
    }
    if (lowerQuestion.includes('settings') || lowerQuestion.includes('profile')) {
      return "You can update your profile and settings from the Settings page.";
    }
    return "I'm sorry, I didn't understand that. Could you please rephrase your question? I'm here to help with LearnLift-related inquiries.";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage: Message = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    const response = getResponse(input);
    const botMessage: Message = { text: response, isUser: false };
    setMessages(prev => [...prev, botMessage]);
    setInput('');
  };

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 p-0 bg-blue-600 hover:bg-blue-700"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-16 right-4 z-50 w-80 h-96 flex flex-col bg-white border shadow-lg">
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-lg ${msg.isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me a question..."
                className="flex-1"
              />
              <Button type="submit" size="sm">Send</Button>
            </div>
          </form>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
