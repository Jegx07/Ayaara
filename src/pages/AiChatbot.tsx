import { ChatInteractionSection } from "./ai-chatbot/ChatInteractionSection";
import { DashboardHeaderSection } from "./ai-chatbot/DashboardHeaderSection";
import { NavigationMenuSection } from "./ai-chatbot/NavigationMenuSection";

const suggestedTopics = [
  {
    emoji: "🧘",
    title: "Breathing exercise",
    subtitle: "Stress relief · 5 min",
    topOffset: "top-[50px]",
    emojiTop: "top-[60px]",
    titleTop: "top-[58px]",
    subtitleTop: "top-[74px]",
  },
  {
    emoji: "🎯",
    title: "Career matching",
    subtitle: "Based on your profile",
    topOffset: "top-[100px]",
    emojiTop: "top-[110px]",
    titleTop: "top-[108px]",
    subtitleTop: "top-[124px]",
  },
  {
    emoji: "📅",
    title: "Study planner",
    subtitle: "Build weekly plan",
    topOffset: "top-[150px]",
    emojiTop: "top-40",
    titleTop: "top-[158px]",
    subtitleTop: "top-[174px]",
  },
  {
    emoji: "😴",
    title: "Sleep hygiene tips",
    subtitle: "Better rest tonight",
    topOffset: "top-[200px]",
    emojiTop: "top-[210px]",
    titleTop: "top-52",
    subtitleTop: "top-56",
  },
];

const chatHistory = [
  {
    title: "Exam stress session",
    date: "Yesterday",
    topOffset: "top-[50px]",
    titleTop: "top-[58px]",
    dateTop: "top-[72px]",
  },
  {
    title: "Career path discussion",
    date: "2 days ago",
    topOffset: "top-[95px]",
    titleTop: "top-[103px]",
    dateTop: "top-[117px]",
  },
  {
    title: "Goal-setting session",
    date: "Last week",
    topOffset: "top-[140px]",
    titleTop: "top-[148px]",
    dateTop: "top-[162px]",
  },
  {
    title: "Sleep improvement plan",
    date: "Last week",
    topOffset: "top-[185px]",
    titleTop: "top-[193px]",
    dateTop: "top-[207px]",
  },
];

export const AiChatbotCanvas = (): JSX.Element => {
  return (
    <div className="bg-[#f4f9ef] w-full min-w-[1440px] min-h-[1080px] relative">
      <NavigationMenuSection />
      <DashboardHeaderSection />
      <div className="absolute top-[18px] left-[1100px] w-9 h-9 bg-[#def7b8] rounded-[18px]" />

      <div className="top-7 left-[1112px] text-sm absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[#141a12] tracking-[0] leading-[normal] whitespace-nowrap">
        🔔
      </div>

      <ChatInteractionSection />

      <div className="absolute top-[84px] left-[1086px] w-[340px] h-[140px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_16px_#0000000d]">
        <div className="absolute top-0 left-0 w-[340px] h-[5px] bg-[#8cd645]" />

        <div className="absolute top-[18px] left-5 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-[13px] tracking-[0] leading-[normal]">
          Current Mood
        </div>

        <p className="absolute top-[38px] left-5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
          Detected from your recent logs
        </p>

        <div className="top-14 left-[155px] text-[28px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[#141a12] tracking-[0] leading-[normal] whitespace-nowrap">
          😊
        </div>

        <p className="absolute top-[94px] left-[70px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f8c0c] text-xs tracking-[0] leading-[normal]">
          Feeling Good — 7.4 / 10
        </p>

        <div className="absolute top-28 left-5 w-[300px] h-1.5 bg-[#e5f5d6] rounded-[3px]" />

        <div className="absolute top-28 left-5 w-[222px] h-1.5 bg-[#8cd645] rounded-[3px]" />
      </div>

      <div className="absolute top-[238px] left-[1086px] w-[340px] h-60 bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_16px_#0000000d]">
        <div className="absolute top-5 left-5 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-[13px] tracking-[0] leading-[normal]">
          💡 Suggested Topics
        </div>

        {suggestedTopics.map((topic, index) => (
          <div key={index}>
            <div
              className={`absolute ${topic.topOffset} left-3 w-[316px] h-10 bg-[#f4f9ef] rounded-[10px]`}
            />
            <div
              className={`${topic.emojiTop} left-6 text-base absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[#141a12] tracking-[0] leading-[normal] whitespace-nowrap`}
            >
              {topic.emoji}
            </div>
            <div
              className={`absolute ${topic.titleTop} left-[52px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141a12] text-xs tracking-[0] leading-[normal]`}
            >
              {topic.title}
            </div>
            <div
              className={`absolute ${topic.subtitleTop} left-[52px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap`}
            >
              {topic.subtitle}
            </div>
          </div>
        ))}
      </div>

      <div className="top-[494px] left-[1086px] w-[340px] h-[210px] shadow-[0px_4px_16px_#0000000d] absolute bg-white rounded-[20px] overflow-hidden">
        <div className="absolute top-5 left-5 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-[13px] tracking-[0] leading-[normal]">
          📋 Chat History
        </div>

        {chatHistory.map((item, index) => (
          <div key={index}>
            <div
              className={`absolute ${item.topOffset} left-3 w-[316px] h-9 bg-[#f4f9ef] rounded-[10px]`}
            />
            <div
              className={`absolute ${item.titleTop} left-6 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#596654] text-xs tracking-[0] leading-[normal]`}
            >
              {item.title}
            </div>
            <div
              className={`absolute ${item.dateTop} left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap`}
            >
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiChatbotCanvas;
