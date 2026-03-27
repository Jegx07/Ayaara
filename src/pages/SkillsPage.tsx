import { NavigationSidebarSection } from "./skill-assessment/NavigationSidebarSection";
import { SkillRadarSection } from "./skill-assessment/SkillRadarSection";
import { SkillRecommendationsSection } from "./skill-assessment/SkillRecommendationsSection";
import { SummaryMetricsSection } from "./skill-assessment/SummaryMetricsSection";
import { UpcomingAssessmentsSection } from "./skill-assessment/UpcomingAssessmentsSection";

const summaryMetrics = [
  {
    left: "252px",
    bgColor: "bg-[#def7b8]",
    emoji: "💻",
    percentage: "78%",
    label: "Programming",
  },
  {
    left: "540px",
    bgColor: "bg-[#e0dbff]",
    emoji: "🗣",
    percentage: "82%",
    label: "Communication",
  },
  {
    left: "828px",
    bgColor: "bg-[#fff2d1]",
    emoji: "🤝",
    percentage: "88%",
    label: "Teamwork",
  },
  {
    left: "1116px",
    bgColor: "bg-[#d9f2ff]",
    emoji: "⏱",
    percentage: "60%",
    label: "Time Mgmt",
  },
];

const skillCards = [
  {
    top: "222px",
    left: "832px",
    emoji: "💻",
    title: "Programming",
    subtitle: "Python, Java, C++",
    barWidth: "w-[187px]",
    percentage: "78%",
    percentageColor: "text-[#3f8c0c]",
  },
  {
    top: "222px",
    left: "1126px",
    emoji: "🧮",
    title: "Mathematics",
    subtitle: "Calculus, Linear Algebra",
    barWidth: "w-[156px]",
    percentage: "65%",
    percentageColor: "text-[#7c6b00]",
  },
  {
    top: "342px",
    left: "832px",
    emoji: "🗣",
    title: "Communication",
    subtitle: "Written & verbal skills",
    barWidth: "w-[197px]",
    percentage: "82%",
    percentageColor: "text-[#3f8c0c]",
  },
  {
    top: "342px",
    left: "1126px",
    emoji: "🧠",
    title: "Critical Thinking",
    subtitle: "Problem solving & logic",
    barWidth: "w-[170px]",
    percentage: "71%",
    percentageColor: "text-[#3f8c0c]",
  },
  {
    top: "462px",
    left: "832px",
    emoji: "🤝",
    title: "Teamwork",
    subtitle: "Collaboration & leadership",
    barWidth: "w-[211px]",
    percentage: "88%",
    percentageColor: "text-[#3f8c0c]",
  },
  {
    top: "462px",
    left: "1126px",
    emoji: "⏱",
    title: "Time Management",
    subtitle: "Planning & prioritisation",
    barWidth: "w-36",
    percentage: "60%",
    percentageColor: "text-[#c05000]",
  },
];

export const SkillAssessment = (): JSX.Element => {
  return (
    <div className="bg-[#f4f9ef] w-full min-w-[1440px] min-h-[1080px] relative">
      <NavigationSidebarSection />
      <SummaryMetricsSection />

      {summaryMetrics.map((metric, index) => (
        <div
          key={index}
          className="absolute top-[92px] w-[268px] h-[110px] bg-white rounded-[20px] shadow-[0px_4px_20px_#0000000f]"
          style={{ left: metric.left }}
        >
          <div
            className={`absolute top-5 left-5 w-11 h-11 ${metric.bgColor} rounded-xl`}
          />
          <div className="absolute top-[30px] left-8 [font-family:'Inter-Regular',Helvetica] font-normal text-[#141a12] text-lg tracking-[0] leading-[normal] whitespace-nowrap">
            {metric.emoji}
          </div>
          <div className="absolute top-[22px] left-[72px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#141a12] text-[28px] tracking-[0] leading-[normal]">
            {metric.percentage}
          </div>
          <div className="absolute top-[54px] left-[72px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#596654] text-xs tracking-[0] leading-[normal]">
            {metric.label}
          </div>
        </div>
      ))}

      <SkillRadarSection />

      {skillCards.map((card, index) => (
        <div
          key={index}
          className="absolute w-[280px] h-[106px] bg-white rounded-[20px] shadow-[0px_4px_20px_#0000000f]"
          style={{ top: card.top, left: card.left }}
        >
          <div className="absolute top-5 left-5 w-9 h-9 bg-[#def7b8] rounded-[10px]" />
          <div className="top-7 left-7 [font-family:'Inter-Regular',Helvetica] font-normal text-[#141a12] text-base whitespace-nowrap absolute tracking-[0] leading-[normal]">
            {card.emoji}
          </div>
          <div className="absolute top-[22px] left-[66px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-sm tracking-[0] leading-[normal]">
            {card.title}
          </div>
          <div className="absolute top-10 left-[66px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            {card.subtitle}
          </div>
          <div className="absolute top-[62px] left-5 w-60 h-2 bg-[#e5f5d6] rounded" />
          <div
            className={`absolute top-[62px] left-5 ${card.barWidth} h-2 bg-[#8cd645] rounded`}
          />
          <div
            className={`top-[76px] left-5 [font-family:'Inter-SemiBold',Helvetica] font-semibold ${card.percentageColor} text-[11px] absolute tracking-[0] leading-[normal] whitespace-nowrap`}
          >
            {card.percentage}
          </div>
        </div>
      ))}

      <SkillRecommendationsSection />
      <UpcomingAssessmentsSection />
    </div>
  );
};

export default SkillAssessment;
