import { JSX } from "react";

const activities = [
  {
    id: 1,
    icon: "🧘",
    title: "5-min Breathing",
    subtitle: "Before 10 AM",
    completed: true,
    iconBg: "bg-[#8cd644]",
    cardBg: "bg-[#2d3828]",
    titleColor: "text-[#8cd644]",
  },
  {
    id: 2,
    icon: "📝",
    title: "Journal Entry",
    subtitle: "After lunch",
    completed: false,
    iconBg: "bg-[#384733]",
    cardBg: "bg-[#2d3828]",
    titleColor: "text-white",
  },
  {
    id: 3,
    icon: "🚶",
    title: "10-min Walk",
    subtitle: "Evening",
    completed: false,
    iconBg: "bg-[#384733]",
    cardBg: "bg-[#2d3828]",
    titleColor: "text-white",
  },
];

export const DailyWellnessPlanSection = (): JSX.Element => {
  return (
    <div className="absolute top-52 left-[831px] w-[569px] h-[324px] bg-[#191e16] rounded-[20px] overflow-hidden">
      <div className="top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-base whitespace-nowrap absolute tracking-[0] leading-[normal]">
        Today&#39;s Wellness Plan
      </div>

      <p className="top-12 left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-xs absolute tracking-[0] leading-[normal]">
        3 activities to keep you balanced
      </p>

      {activities.map((activity, index) => {
        const topBase = 86 + index * 68;
        const iconTop = topBase + 12;
        const titleTop = topBase + 10;
        const subtitleTop = topBase + 28;
        const checkTop = topBase + 14;

        return (
          <div key={activity.id}>
            <div
              className={`absolute left-6 w-[532px] h-14 ${activity.cardBg} rounded-[14px]`}
              style={{ top: `${topBase}px` }}
            />

            <div
              className={`absolute left-10 w-8 h-8 ${activity.iconBg} rounded-2xl`}
              style={{ top: `${iconTop}px` }}
            />

            <div
              className={`[font-family:'Inter-SemiBold',Helvetica] font-semibold ${activity.titleColor} text-[13px] absolute left-[82px] tracking-[0] leading-[normal]`}
              style={{ top: `${titleTop}px` }}
            >
              {activity.icon} {activity.title}
            </div>

            <div
              className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[11px] whitespace-nowrap absolute left-[82px] tracking-[0] leading-[normal]"
              style={{ top: `${subtitleTop}px` }}
            >
              {activity.subtitle}
            </div>

            {activity.completed && (
              <>
                <div
                  className="absolute left-[510px] w-7 h-7 bg-[#38721e] rounded-[14px]"
                  style={{ top: `${checkTop}px` }}
                />
                <div
                  className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd644] text-xs absolute left-[518px] tracking-[0] leading-[normal]"
                  style={{ top: `${checkTop + 6}px` }}
                >
                  ✓
                </div>
              </>
            )}
          </div>
        );
      })}

      <div className="absolute top-[283px] left-[13px] w-[180px] h-7 bg-[#38721e] rounded-[14px]" />

      <div className="top-[289px] left-[50px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#8cd644] text-xs absolute tracking-[0] leading-[normal]">
        View Full Plan →
      </div>
    </div>
  );
};
