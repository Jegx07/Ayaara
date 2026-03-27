import { AiPatternInsightsSection } from "./AiPatternInsightsSection";
import { CampusEventsHighlightsSection } from "./CampusEventsHighlightsSection.tsx";
import { DailyWellnessPlanSection } from "./DailyWellnessPlanSection.tsx";
import { MoodPerformanceDashboardSection } from "./MoodPerformanceDashboardSection.tsx";
import { NavigationMenuSection } from "./NavigationMenuSection.tsx";
import { QuickCheckInSection } from "./QuickCheckInSection";
import { WeeklyMoodTrendSection } from "./WeeklyMoodTrendSection";
import { WellnessSummarySection } from "./WellnessSummarySection.tsx";

const summaryCards = [
  {
    bg: "bg-[#ddf7b7]",
    value: "7.8",
    label: "Mood Score",
    sub: "↑ 0.4 from yesterday",
    left: "left-[252px]",
  },
  {
    bg: "bg-[#fff2d1]",
    value: "42%",
    label: "Stress Level",
    sub: "↓ 8% this week",
    left: "left-[540px]",
  },
  {
    bg: "bg-[#e0dbff]",
    value: "14",
    label: "Day Streak 🔥",
    sub: "Personal best!",
    left: "left-[828px]",
  },
  {
    bg: "bg-[#d8f2ff]",
    value: "6.8h",
    label: "Avg Sleep",
    sub: "Goal: 8h · Good progress",
    left: "left-[1116px]",
  },
];

export const Dashboard = (): JSX.Element => {
  return (
    <div className="bg-[#f4f9ef] overflow-hidden w-full min-w-[1440px] min-h-[1080px] relative">
      <NavigationMenuSection />
      <WellnessSummarySection />

      {summaryCards.map((card, index) => (
        <div
          key={index}
          className={`absolute top-[92px] ${card.left} w-[268px] h-[110px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_16px_#0000000d]`}
        >
          <div
            className={`${card.bg} absolute top-5 left-5 w-11 h-11 rounded-xl`}
          />

          <div className="top-[22px] left-[72px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#141911] text-[28px] absolute tracking-[0] leading-[normal]">
            {card.value}
          </div>

          <div className="top-[54px] left-[72px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#596654] text-xs absolute tracking-[0] leading-[normal]">
            {card.label}
          </div>

          <p className="absolute top-[76px] left-5 w-[220px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[11px] tracking-[0] leading-[normal]">
            {card.sub}
          </p>
        </div>
      ))}

      <WeeklyMoodTrendSection />
      <MoodPerformanceDashboardSection />
      <DailyWellnessPlanSection />
      <AiPatternInsightsSection />
      <QuickCheckInSection />
      <CampusEventsHighlightsSection />
    </div>
  );
};

export default Dashboard;
