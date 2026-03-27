import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { icon: "🏠", label: "Dashboard", route: "/dashboard" },
  { icon: "📊", label: "Mood Log", route: "/mood-log" },
  { icon: "🏫", label: "Campus Resources", route: "/resources" },
  { icon: "🤝", label: "Peer Support", route: "/community" },
  { icon: "🎯", label: "Goals", route: "/dashboard" },
  { icon: "⚙", label: "Settings", route: "/settings" },
  { icon: "🤖", label: "AI Chatbot", route: "/chatbot" },
  { icon: "👤", label: "Skill Assessment", route: "/skills", active: true },
  { icon: "📈", label: "Career Assistant", route: "/career" },
];

export const NavigationSidebarSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState("Skill Assessment");
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 w-[220px] h-[1080px] bg-[#1a1f17]">
      <div className="absolute top-6 left-5 w-4 h-4 bg-[#8cd645] rounded-lg" />

      <div className="absolute top-[22px] left-11 [font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd645] text-base tracking-[0] leading-[normal] whitespace-nowrap">
        MotiTrack
      </div>

      {navItems.map((item, index) => {
        const topPositions = [76, 128, 180, 232, 284, 336, 388, 440, 492];
        const isActive = activeItem === item.label;

        return (
          <div key={item.label}>
            {isActive && (
              <div
                className="absolute left-3 w-[196px] h-10 bg-[#2e3829] rounded-xl"
                style={{ top: `${topPositions[index] - 8}px` }}
              />
            )}
            <button
              className={`absolute left-5 text-[13px] tracking-[0] leading-[normal] cursor-pointer bg-transparent border-none ${
                isActive
                  ? "[font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd645]"
                  : "[font-family:'Inter-Regular',Helvetica] font-normal text-[#738c6b]"
              }`}
              style={{ top: `${topPositions[index]}px` }}
              onClick={() => {
                setActiveItem(item.label);
                navigate(item.route);
              }}
            >
              {item.icon} {item.label}
            </button>
          </div>
        );
      })}

      <div className="absolute top-[980px] left-5 w-10 h-10 bg-[#8cd645] rounded-[20px]" />

      <div className="absolute top-[993px] left-9 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-base tracking-[0] leading-[normal] whitespace-nowrap">
        A
      </div>

      <div className="absolute top-[982px] left-[70px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-[normal]">
        Arjun K.
      </div>

      <div className="absolute top-[998px] left-[70px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#738c6b] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
        CSE · 3rd Year
      </div>
    </div>
  );
};
