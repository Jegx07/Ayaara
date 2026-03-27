import { useState } from "react";
import { ApplicationNavigationSection } from "./ApplicationNavigationSection.tsx";
import { CampusResourcesHeaderSection } from "./CampusResourcesHeaderSection.tsx";
import { HotlineSupportCardSection } from "./HotlineSupportCardSection.tsx";
import { ImmediateSupportBannerSection } from "./ImmediateSupportBannerSection.tsx";
import { MindfulnessYogaCardSection } from "./MindfulnessYogaCardSection.tsx";
import { NatureTherapyWalksCardSection } from "./NatureTherapyWalksCardSection.tsx";
import { PeerSupportCircleCardSection } from "./PeerSupportCircleCardSection.tsx";
import { QuickContactsSidebarSection } from "./QuickContactsSidebarSection.tsx";
import { StressManagementWorkshopCardSection } from "./StressManagementWorkshopCardSection.tsx";
import { StudentCounselingCardSection } from "./StudentCounselingCardSection.tsx";

const filterTabs = [
  { label: "All", value: "all" },
  { label: "Counseling", value: "counseling" },
  { label: "Yoga & Mindfulness", value: "yoga" },
  { label: "Peer Groups", value: "peer" },
  { label: "Hotlines", value: "hotlines" },
  { label: "Workshops", value: "workshops" },
];

export const CampusResources = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="bg-[#f4f9ef] overflow-hidden w-full min-w-[1440px] min-h-[1080px] relative">
      <ApplicationNavigationSection />
      <CampusResourcesHeaderSection />
      <ImmediateSupportBannerSection />

      <div className="absolute top-[250px] left-[252px] flex flex-row gap-0">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`w-[168px] h-[34px] rounded-[17px] flex items-center justify-center cursor-pointer mr-[12px] ${
                isActive
                  ? "bg-[#8cd644] border-0"
                  : "bg-white border border-solid border-[#e0edd3]"
              }`}
            >
              <span
                className={`tracking-[0] leading-[normal] text-xs ${
                  isActive
                    ? "[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141911]"
                    : "[font-family:'Inter-Regular',Helvetica] font-normal text-[#596654]"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      <StudentCounselingCardSection />
      <MindfulnessYogaCardSection />
      <PeerSupportCircleCardSection />
      <HotlineSupportCardSection />
      <StressManagementWorkshopCardSection />
      <NatureTherapyWalksCardSection />
      <div className="top-[306px] left-[1428px] w-[164px] bg-white absolute h-[540px] rounded-[20px]" />

      <QuickContactsSidebarSection />
    </div>
  );
};

export default CampusResources;
