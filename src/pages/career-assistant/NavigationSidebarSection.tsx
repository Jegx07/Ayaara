import { useNavigate } from "react-router-dom";

export const NavigationSidebarSection = (): JSX.Element => {
  const navigate = useNavigate();

  const navItems = [
    { icon: "🏠", label: "Dashboard", active: false, top: 76, route: "/dashboard" },
    { icon: "📊", label: "Mood Log", active: false, top: 128, route: "/mood-log" },
    { icon: "🏫", label: "Campus Resources", active: false, top: 180, route: "/resources" },
    { icon: "🤝", label: "Peer Support", active: false, top: 232, route: "/community" },
    { icon: "🎯", label: "Goals", active: false, top: 284, route: "/dashboard" },
    { icon: "⚙", label: "Settings", active: false, top: 336, route: "/settings" },
    { icon: "🤖", label: "AI Chatbot", active: false, top: 388, route: "/chatbot" },
    { icon: "👤", label: "Skill Assessment", active: false, top: 440, route: "/skills" },
    { icon: "📈", label: "Career Assistant", active: true, top: 492, route: "/career" },
  ];

  return (
    <div className="absolute top-0 left-0 w-[220px] h-[1080px] bg-[#1a1f17]">
      <div className="absolute top-6 left-5 w-4 h-4 bg-[#8cd645] rounded-lg" />

      <div className="absolute top-[22px] left-11 [font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd645] text-base tracking-[0] leading-[normal] whitespace-nowrap">
        MotiTrack
      </div>

      {navItems.map((item) => (
        <div key={item.label}>
          {item.active && (
            <div
              className="absolute left-3 w-[196px] h-10 bg-[#2e3829] rounded-xl"
              style={{ top: `${item.top - 8}px` }}
            />
          )}
          <button
            className={`absolute left-5 [font-family:'${item.active ? "Inter-Bold" : "Inter-Regular"}',Helvetica] ${item.active ? "font-bold text-[#8cd645]" : "font-normal text-[#738c6b]"} text-[13px] tracking-[0] leading-[normal] bg-transparent border-none cursor-pointer`}
            style={{ top: `${item.top}px` }}
            onClick={() => navigate(item.route)}
          >
            {item.icon} {item.label}
          </button>
        </div>
      ))}

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
