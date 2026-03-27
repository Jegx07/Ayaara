import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Auth from "./pages/Auth";
import SkillsPage from "./pages/SkillsPage";
import Dashboard from "./pages/Dashboard";
import ProfessorDashboard from "./pages/ProfessorDashboard";
import ProfessorStudents from "./pages/ProfessorStudents";
import StudentProfile from "./pages/StudentProfile";
import ProfessorSkills from "./pages/ProfessorSkills";
import ProfessorActivities from "./pages/ProfessorActivities";
import ProfessorReports from "./pages/ProfessorReports";
import Settings from "./pages/Settings";
import IoTDeviceHub from "./pages/IoTDeviceHub";
import NotFound from "./pages/NotFound";
import CareerAssistant from "./pages/CareerAssistant";
import CareerPath from "./pages/CareerPath";
import MentalSupport from "./pages/MentalSupport";
import Profile from "./pages/Profile";
import MoodLog from "./pages/MoodLog";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import AiChatbot from "./pages/AiChatbot";
import Chatbot from "./components/Chatbot";
import AppErrorBoundary from "./components/AppErrorBoundary";

const queryClient = new QueryClient();

const ChatbotWrapper = () => {
  const location = useLocation();
  return location.pathname !== "/" && location.pathname !== "/chatbot" ? <Chatbot /> : null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppErrorBoundary>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ChatbotWrapper />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mood-log" element={<MoodLog />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/community" element={<Community />} />
              <Route path="/chatbot" element={<AiChatbot />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/career" element={<CareerAssistant />} />
              <Route path="/career-path" element={<CareerPath />} />
              <Route path="/student" element={<Dashboard />} />
              <Route path="/professor" element={<ProfessorDashboard />} />
              <Route path="/professor/students" element={<ProfessorStudents />} />
              <Route path="/professor/students/:id" element={<StudentProfile />} />
              <Route path="/professor/skills" element={<ProfessorSkills />} />
              <Route path="/professor/activities" element={<ProfessorActivities />} />
              <Route path="/professor/reports" element={<ProfessorReports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/iot" element={<IoTDeviceHub />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/mental-support" element={<MentalSupport />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AppErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
