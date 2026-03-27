import { useState } from "react";

const filterTabs = ["All", "Great", "Good", "Anxious", "Low"];

const moodEntries = [
  {
    date: "Mar 26",
    emoji: "😊",
    mood: "Good",
    stress: "Stress: 51%",
    sleep: "Sleep: 7h",
    note: "Anxious about exam but managing",
    editBg: "bg-[#ddf7b7]",
    rowBg: "bg-[#f4f9ef]",
  },
  {
    date: "Mar 25",
    emoji: "😄",
    mood: "Great",
    stress: "Stress: 30%",
    sleep: "Sleep: 8h",
    note: "Had a great study session today!",
    editBg: "bg-[#ddf7b7]",
    rowBg: "bg-white",
  },
  {
    date: "Mar 24",
    emoji: "😐",
    mood: "Okay",
    stress: "Stress: 65%",
    sleep: "Sleep: 6h",
    note: "Deadline pressure felt heavy",
    editBg: "bg-[#fff2d1]",
    rowBg: "bg-[#f4f9ef]",
  },
  {
    date: "Mar 23",
    emoji: "😔",
    mood: "Low",
    stress: "Stress: 78%",
    sleep: "Sleep: 5h",
    note: "Missed sleep, felt drained all day",
    editBg: "bg-[#ffd1d1]",
    rowBg: "bg-white",
  },
  {
    date: "Mar 22",
    emoji: "😊",
    mood: "Good",
    stress: "Stress: 44%",
    sleep: "Sleep: 7h",
    note: "Counseling session really helped",
    editBg: "bg-[#ddf7b7]",
    rowBg: "bg-[#f4f9ef]",
  },
];

export const RecentMoodHistorySection = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="absolute top-[622px] left-[228px] w-[1200px] h-[340px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_16px_#0000000d]">
      <div className="top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-lg absolute tracking-[0] leading-[normal]">
        Recent Entries
      </div>

      <div className="top-[50px] left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-xs absolute tracking-[0] leading-[normal]">
        Your last 5 check-ins
      </div>

      <div className="absolute top-[76px] left-6 flex flex-row gap-[10px]">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`w-[88px] h-[30px] rounded-[15px] flex items-center justify-center cursor-pointer border-none outline-none ${
              activeFilter === tab ? "bg-[#8cd644]" : "bg-[#f4f9ef]"
            }`}
          >
            <span
              className={`tracking-[0] leading-[normal] text-xs ${
                activeFilter === tab
                  ? "[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141911]"
                  : "[font-family:'Inter-Regular',Helvetica] font-normal text-[#596654]"
              }`}
            >
              {tab}
            </span>
          </button>
        ))}
      </div>

      {moodEntries.map((entry, index) => {
        const topBase = 120 + index * 40;
        const textTop = topBase + 10;
        return (
          <div key={entry.date}>
            <div
              className={`absolute left-6 w-[1152px] h-9 rounded-lg ${entry.rowBg}`}
              style={{ top: `${topBase}px` }}
            />
            <div
              className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#596654] text-xs absolute tracking-[0] leading-[normal]"
              style={{ top: `${textTop}px`, left: "36px" }}
            >
              {entry.date}
            </div>
            <div
              className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-base whitespace-nowrap absolute tracking-[0] leading-[normal]"
              style={{ top: `${textTop}px`, left: "120px" }}
            >
              {entry.emoji}
            </div>
            <div
              className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141911] text-xs absolute tracking-[0] leading-[normal]"
              style={{ top: `${textTop}px`, left: "148px" }}
            >
              {entry.mood}
            </div>
            <div
              className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-xs absolute tracking-[0] leading-[normal]"
              style={{ top: `${textTop}px`, left: "280px" }}
            >
              {entry.stress}
            </div>
            <div
              className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-xs absolute tracking-[0] leading-[normal]"
              style={{ top: `${textTop}px`, left: "420px" }}
            >
              {entry.sleep}
            </div>
            <div
              className="absolute w-[400px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-xs tracking-[0] leading-[normal]"
              style={{ top: `${textTop}px`, left: "560px" }}
            >
              {entry.note}
            </div>
            <div
              className={`absolute left-[1110px] w-[50px] h-7 rounded-[14px] ${entry.editBg}`}
              style={{ top: `${topBase + 6}px` }}
            />
            <div
              className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f8c0c] text-[11px] whitespace-nowrap absolute tracking-[0] leading-[normal]"
              style={{ top: `${topBase + 10}px`, left: "1122px" }}
            >
              Edit
            </div>
          </div>
        );
      })}
    </div>
  );
};
