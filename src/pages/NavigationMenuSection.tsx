import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "🏠 Dashboard", id: "dashboard" },
  { label: "🤖 AI Chatbot", id: "chatbot" },
  { label: "🧠 Skill Assessment", id: "skills" },
  { label: "📈 Career Assistant", id: "career" },
  { label: "📊 Mood Log", id: "mood-log" },
  { label: "🏫 Campus Resources", id: "campus-resources" },
  { label: "🤝 Peer Support", id: "peer-support" },
  { label: "🎯 Goals", id: "goals" },
  { label: "⚙ Settings", id: "settings" },
];

export const NavigationMenuSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
    setActiveItem(id);
    if (id === "dashboard") {
      navigate("/dashboard");
      return;
    }
    if (id === "chatbot") {
      navigate("/chatbot");
      return;
    }
    if (id === "skills") {
      navigate("/skills");
      return;
    }
    if (id === "career") {
      navigate("/career");
      return;
    }
    if (id === "mood-log") {
      navigate("/mood-log");
      return;
    }
    if (id === "campus-resources") {
      navigate("/resources");
      return;
    }
    if (id === "peer-support") {
      navigate("/community");
    }
  };

  return (
    <div className="absolute top-0 left-0 w-[218px] h-[1080px] bg-[#191e16]">
      <div className="absolute top-6 left-5 w-4 h-4 bg-[#8cd644] rounded-lg" />

      <div className="top-[22px] left-11 [font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd644] text-base whitespace-nowrap absolute tracking-[0] leading-[normal]">
        MotiTrack
      </div>

      <nav className="absolute top-[60px] left-3 w-[196px] flex flex-col gap-[4px]">
        {navItems.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-[196px] h-10 rounded-xl flex items-center px-3 text-left transition-colors ${
                isActive
                  ? "bg-[#2d3828]"
                  : "bg-transparent hover:bg-[#2d3828]/50"
              }`}
            >
              <span
                className={`[font-family:'Inter-Bold',Helvetica] font-bold text-[13px] tracking-[0] leading-[normal] ${
                  isActive
                    ? "text-[#8cd644] [font-family:'Inter-Bold',Helvetica] font-bold"
                    : "text-[#728c6b] [font-family:'Inter-Regular',Helvetica] font-normal"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="top-[980px] left-5 w-10 h-10 rounded-[20px] absolute bg-[#8cd644] flex items-center justify-center">
        <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-base tracking-[0] leading-[normal]">
          A
        </span>
      </div>

      <div className="top-[982px] left-[70px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[13px] absolute tracking-[0] leading-[normal]">
        Arjun K.
      </div>

      <div className="top-[998px] left-[70px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[11px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
        CSE · 3rd Year
      </div>
    </div>
  );
};
