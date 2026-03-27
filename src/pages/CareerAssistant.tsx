import { CareerOverviewHeaderSection } from "./career-assistant/CareerOverviewHeaderSection";
import { InterviewPrepSection } from "./career-assistant/InterviewPrepSection";
import { JobOpportunitiesSection } from "./career-assistant/JobOpportunitiesSection";
import { NavigationSidebarSection } from "./career-assistant/NavigationSidebarSection";
import { RecommendedCareerMatchesSection } from "./career-assistant/RecommendedCareerMatchesSection";
import { ResumeBuilderInsightsSection } from "./career-assistant/ResumeBuilderInsightsSection";

const statCards = [
  {
    bg: "#def7b8",
    value: "92%",
    label: "SWE Match",
    left: "252px",
  },
  {
    bg: "#e0dbff",
    value: "87%",
    label: "AI/ML Match",
    left: "540px",
  },
  {
    bg: "#fff2d1",
    value: "74",
    label: "Resume Score",
    left: "828px",
  },
  {
    bg: "#d9f2ff",
    value: "3",
    label: "Job Alerts",
    left: "1116px",
  },
];

export const CareerAssistant = (): JSX.Element => {
  return (
    <div className="bg-[#f4f9ef] w-full min-w-[1440px] min-h-[1080px] relative">
      <NavigationSidebarSection />
      <CareerOverviewHeaderSection />

      {statCards.map((card) => (
        <div
          key={card.label}
          className="absolute top-[92px] w-[268px] h-[110px] bg-white rounded-[20px] shadow-[0px_4px_20px_#0000000f]"
          style={{ left: card.left }}
        >
          <div
            className="absolute top-5 left-5 w-11 h-11 rounded-xl"
            style={{ backgroundColor: card.bg }}
          />
          <div className="absolute top-[22px] left-[72px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#141a12] text-[28px] tracking-[0] leading-[normal]">
            {card.value}
          </div>
          <div className="absolute top-[54px] left-[72px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#596654] text-xs tracking-[0] leading-[normal]">
            {card.label}
          </div>
        </div>
      ))}

      <RecommendedCareerMatchesSection />
      <ResumeBuilderInsightsSection />
      <JobOpportunitiesSection />
      <InterviewPrepSection />
    </div>
  );
};

export default CareerAssistant;
