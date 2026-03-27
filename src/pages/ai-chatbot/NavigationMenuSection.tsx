import { JSX } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { icon: "🏠", label: "Dashboard", top: "top-[76px]", active: false, route: "/dashboard" },
  { icon: "📊", label: "Mood Log", top: "top-32", active: false, route: "/mood-log" },
  { icon: "🏫", label: "Campus Resources", top: "top-[180px]", active: false, route: "/resources" },
  { icon: "🤝", label: "Peer Support", top: "top-[232px]", active: false, route: "/community" },
  { icon: "🎯", label: "Goals", top: "top-[284px]", active: false, route: "/dashboard" },
  { icon: "⚙", label: "Settings", top: "top-[336px]", active: false, route: "/settings" },
  { icon: "🤖", label: "AI Chatbot", top: "top-[380px]", active: true, route: "/chatbot" },
  { icon: "👤", label: "Skill Assessment", top: "top-[440px]", active: false, route: "/skills" },
  { icon: "📈", label: "Career Assistant", top: "top-[492px]", active: false, route: "/career" },
];

export const NavigationMenuSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 w-[220px] h-[1080px] bg-[#1a1f17]">
      <div className="absolute top-6 left-5 w-4 h-4 bg-[#8cd645] rounded-lg" />

      <div className="top-[22px] left-11 text-[#8cd645] text-base absolute [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] leading-[normal] whitespace-nowrap">
        MotiTrack
      </div>

      {navItems.map((item) =>
        item.active ? (
          <div key={item.label}>
            <div className="absolute top-[380px] left-3 w-[196px] h-10 bg-[#2e3829] rounded-xl" />
            <button
              onClick={() => navigate(item.route)}
              className="top-[388px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd645] text-[13px] tracking-[0] leading-[normal] absolute left-5 bg-transparent border-none cursor-pointer"
            >
              {item.icon} {item.label}
            </button>
          </div>
        ) : (
          <button
            key={item.label}
            onClick={() => navigate(item.route)}
            className={`absolute ${item.top} left-5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#738c6b] text-[13px] tracking-[0] leading-[normal] bg-transparent border-none cursor-pointer`}
          >
            {item.icon} {item.label}
          </button>
        ),
      )}

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
