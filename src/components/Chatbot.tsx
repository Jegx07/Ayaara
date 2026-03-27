import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Chatbot: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/chatbot')}
      className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 p-0 bg-blue-600 hover:bg-blue-700"
      aria-label="Open AI chatbot page"
    >
      <MessageCircle size={24} />
    </Button>
  );
};

export default Chatbot;
