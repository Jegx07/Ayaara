import { DailyCheckInSection } from "./DailyCheckInSection";
import { MoodAnalyticsSection } from "./MoodAnalyticsSection";
import { MoodLogHeaderSection } from "./MoodLogHeaderSection";
import { PrimaryNavigationSection } from "./PrimaryNavigationSection";
import { RecentMoodHistorySection } from "./RecentMoodHistorySection";

export const MoodLogCanvas = (): JSX.Element => {
  return (
    <div className="bg-[#f4f9ef] w-full min-w-[1440px] min-h-[1080px] relative">
      <PrimaryNavigationSection />
      <MoodLogHeaderSection />
      <DailyCheckInSection />
      <MoodAnalyticsSection />
      <RecentMoodHistorySection />
    </div>
  );
};

export default MoodLogCanvas;
