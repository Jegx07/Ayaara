import { useNavigate } from "react-router-dom";

export const PrimaryNavigationSection = (): JSX.Element => {
  const navigate = useNavigate();

  const navItems = [
    { label: "🏠 Dashboard", top: "top-[76px]", active: false, route: "/dashboard" },
    { label: "📊 Mood Log", top: "top-32", active: true, route: "/mood-log" },
    { label: "🏫 Campus Resources", top: "top-[180px]", active: false, route: "/resources" },
    { label: "🤝 Peer Support", top: "top-[232px]", active: false, route: "/community" },
    { label: "🎯 Goals", top: "top-[284px]", active: false, route: "/dashboard" },
    { label: "⚙ Settings", top: "top-[336px]", active: false, route: "/settings" },
  ];

  return (
    <div className="absolute top-0 left-0 w-[220px] h-[1080px] bg-[#191e16]">
      <div className="absolute top-6 left-5 w-4 h-4 bg-[#8cd644] rounded-lg" />

      <div className="absolute top-[22px] left-11 [font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd644] text-base tracking-[0] leading-[normal] whitespace-nowrap">
        MotiTrack
      </div>

      {navItems.map((item, index) => (
        <div key={index}>
          {item.active && (
            <div className="top-[120px] left-3 w-[196px] bg-[#2d3828] rounded-xl absolute h-10" />
          )}
          <button
            onClick={() => navigate(item.route)}
            className={`${item.top} left-5 absolute tracking-[0] leading-[normal] text-[13px] ${
              item.active
                ? "[font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd644]"
                : "[font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b]"
            }`}
          >
            {item.label}
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
