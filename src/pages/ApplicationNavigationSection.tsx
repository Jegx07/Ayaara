import { useNavigate } from "react-router-dom";

export const ApplicationNavigationSection = (): JSX.Element => {
  const navigate = useNavigate();

  const navItems = [
    { icon: "🏠", label: "Dashboard", active: false, top: "top-[76px]", route: "/dashboard" },
    { icon: "📊", label: "Mood Log", active: false, top: "top-32", route: "/mood-log" },
    { icon: "🏫", label: "Campus Resources", active: true, top: "top-[180px]", route: "/resources" },
    { icon: "🤝", label: "Peer Support", active: false, top: "top-[232px]", route: "/community" },
    { icon: "🎯", label: "Goals", active: false, top: "top-[284px]", route: "/dashboard" },
    { icon: "⚙", label: "Settings", active: false, top: "top-[336px]", route: "/settings" },
  ];

  return (
    <div className="absolute top-0 left-0 w-[220px] h-[1080px] bg-[#191e16]">
      <div className="absolute top-6 left-5 w-4 h-4 bg-[#8cd644] rounded-lg" />

      <div className="absolute top-[22px] left-11 [font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd644] text-base tracking-[0] leading-[normal] whitespace-nowrap">
        MotiTrack
      </div>

      {navItems.map((item) => (
        <div key={item.label}>
          {item.active && (
            <div className="top-[172px] left-3 w-[196px] bg-[#2d3828] rounded-xl absolute h-10" />
          )}
          <button
            onClick={() => navigate(item.route)}
            className={`${item.top} left-5 absolute tracking-[0] leading-[normal] ${
              item.active
                ? "[font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd644] text-[13px]"
                : "[font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[13px]"
            }`}
          >
            {item.icon} {item.label}
          </button>
        </div>
      ))}

      <div className="top-[980px] left-5 w-10 bg-[#8cd644] rounded-[20px] absolute h-10" />

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
