import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { icon: "🏠", label: "Dashboard", path: "dashboard" },
  { icon: "📊", label: "Mood Log", path: "mood-log" },
  { icon: "🏫", label: "Campus Resources", path: "campus-resources" },
  { icon: "🤝", label: "Peer Support", path: "peer-support", active: true },
  { icon: "🎯", label: "Goals", path: "goals" },
  { icon: "⚙", label: "Settings", path: "settings" },
];

const routeByPath: Record<string, string> = {
  dashboard: "/dashboard",
  "mood-log": "/mood-log",
  "campus-resources": "/resources",
  "peer-support": "/community",
  goals: "/dashboard",
  settings: "/settings",
};

export const PrimaryNavigationSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState("peer-support");
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 w-[220px] h-[1080px] bg-[#191e16]">
      <div className="absolute top-6 left-5 w-4 h-4 bg-[#8cd644] rounded-lg" />

      <div className="absolute top-[22px] left-11 [font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd644] text-base tracking-[0] leading-[normal] whitespace-nowrap">
        MotiTrack
      </div>

      <nav className="absolute top-[76px] left-0 w-full flex flex-col gap-0">
        {navItems.map((item, index) => {
          const isActive = activeItem === item.path;
          const topOffsets = [76, 128, 180, 224, 284, 336];
          return (
            <div key={item.path} className="relative">
              {isActive && (
                <div
                  className="absolute left-3 w-[196px] h-10 bg-[#2d3828] rounded-xl"
                  style={{ top: `${topOffsets[index] - topOffsets[0]}px` }}
                />
              )}
              <button
                onClick={() => {
                  setActiveItem(item.path);
                  const target = routeByPath[item.path];
                  if (target) {
                    navigate(target);
                  }
                }}
                className={`absolute left-5 bg-transparent border-none cursor-pointer p-0 tracking-[0] leading-[normal] text-[13px] ${
                  isActive
                    ? "[font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd644]"
                    : "[font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b]"
                }`}
                style={{ top: `${topOffsets[index] - topOffsets[0]}px` }}
              >
                {item.icon} {item.label}
              </button>
            </div>
          );
        })}
      </nav>

      <div className="absolute top-[980px] left-5 w-10 h-10 bg-[#8cd644] rounded-[20px]" />

      <div className="top-[993px] left-9 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-base whitespace-nowrap absolute tracking-[0] leading-[normal]">
        A
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
