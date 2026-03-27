import { ActiveSupportGroupsSection } from "./peer-support/ActiveSupportGroupsSection.tsx";
import { CommunityMetricsSection } from "./peer-support/CommunityMetricsSection.tsx";
import { GratitudeMomentsSection } from "./peer-support/GratitudeMomentsSection.tsx";
import { PeerSupportHeaderSection } from "./peer-support/PeerSupportHeaderSection.tsx";
import { PrimaryNavigationSection } from "./peer-support/PrimaryNavigationSection.tsx";
import { SupportStoriesFeedSection } from "./peer-support/SupportStoriesFeedSection.tsx";
import { WellnessBuddySection } from "./peer-support/WellnessBuddySection.tsx";

export const PeerSupportCanvas = (): JSX.Element => {
  return (
    <div className="bg-[#f4f9ef] w-full min-w-[1440px] min-h-[1080px] relative">
      <PrimaryNavigationSection />
      <PeerSupportHeaderSection />
      <SupportStoriesFeedSection />
      <ActiveSupportGroupsSection />
      <WellnessBuddySection />
      <GratitudeMomentsSection />
      <CommunityMetricsSection />
    </div>
  );
};

export default PeerSupportCanvas;
