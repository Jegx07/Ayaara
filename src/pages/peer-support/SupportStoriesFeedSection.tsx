import { useState } from "react";
import pTg2 from "./p-tg-2.svg";

const categories = [
  "All",
  "Exams",
  "Anxiety",
  "Sleep",
  "Motivation",
  "Relationships",
];

const posts = [
  {
    id: 1,
    initial: "S",
    avatarBg: "bg-[#fff2d1]",
    username: "Student_241",
    time: "2h ago",
    tagLabel: "Exams",
    tagBg: "bg-[#fff2d1]",
    tagTextColor: "text-[#3f8c0c]",
    content:
      "Has anyone else been feeling completely paralyzed before exams? I freeze and can't even start studying. Any tips?",
    reactions: [
      { emoji: "💛", count: 12 },
      { emoji: "🤗", count: 8 },
      { emoji: "💬", count: 5 },
    ],
    helpedBg: "bg-white",
    helpedText: "Helpful",
    helpedTextColor: "text-[#596654]",
    helped: false,
  },
  {
    id: 2,
    initial: "M",
    avatarBg: "bg-[#e0dbff]",
    username: "MindfulMaven",
    time: "4h ago",
    tagLabel: "Anxiety",
    tagBg: "bg-[#e0dbff]",
    tagTextColor: "text-[#3f8c0c]",
    content:
      "The 4-7-8 breathing technique from yesterday's workshop actually helped me through my presentation anxiety. Highly recommend!",
    reactions: [
      { emoji: "❤", count: 24 },
      { emoji: "👏", count: 16 },
      { emoji: "💬", count: 9 },
    ],
    helpedBg: "bg-[#ddf7b7]",
    helpedText: "✓ Helped",
    helpedTextColor: "text-[#3f8c0c]",
    helped: true,
  },
  {
    id: 3,
    initial: "R",
    avatarBg: "bg-[#d8f2ff]",
    username: "NightOwl_07",
    time: "Yesterday",
    tagLabel: "Sleep",
    tagBg: null,
    tagTextColor: "text-[#3f8c0c]",
    useImgTag: true,
    content:
      "I've been averaging 4h sleep for 3 weeks now. Counselor said it's affecting my mood scores badly. Anyone managed to fix sleep schedule?",
    reactions: [
      { emoji: "💙", count: 18 },
      { emoji: "🤗", count: 12 },
      { emoji: "💬", count: 7 },
    ],
    helpedBg: "bg-white",
    helpedText: "Helpful",
    helpedTextColor: "text-[#596654]",
    helped: false,
  },
  {
    id: 4,
    initial: "P",
    avatarBg: "bg-[#ddf7b7]",
    username: "FinalYearFears",
    time: "2 days ago",
    tagLabel: "Motivation",
    tagBg: "bg-[#ddf7b7]",
    tagTextColor: "text-[#3f8c0c]",
    content:
      "Finally completed my 14-day streak on MotiTrack! The daily check-ins really helped me notice my pattern. Keep going everyone 🌱",
    reactions: [
      { emoji: "🌟", count: 42 },
      { emoji: "🎉", count: 31 },
      { emoji: "💬", count: 15 },
    ],
    helpedBg: "bg-[#ddf7b7]",
    helpedText: "✓ Helped",
    helpedTextColor: "text-[#3f8c0c]",
    helped: true,
  },
];

export const SupportStoriesFeedSection = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="top-[92px] left-[252px] w-[700px] h-[960px] bg-white shadow-[0px_4px_20px_#0000000d] absolute rounded-[20px] overflow-hidden">
      <div className="top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-lg absolute tracking-[0] leading-[normal]">
        Community Feed
      </div>

      <p className="top-[50px] left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-xs absolute tracking-[0] leading-[normal]">
        Anonymous stories from fellow students
      </p>

      <div className="absolute top-[76px] left-6 flex flex-row gap-[12px]">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-[88px] h-7 rounded-[14px] flex items-center justify-center cursor-pointer border-none outline-none ${isActive ? "bg-[#8cd644]" : "bg-[#f4f9ef]"}`}
            >
              <span
                className={`text-[11px] tracking-[0] leading-[normal] whitespace-nowrap ${
                  isActive
                    ? "[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141911]"
                    : "[font-family:'Inter-Regular',Helvetica] font-normal text-[#596654]"
                }`}
              >
                {cat}
              </span>
            </button>
          );
        })}
      </div>

      {posts.map((post, index) => {
        const cardTop = 120 + index * 196;
        const avatarTop = cardTop + 16;
        const usernameTop = cardTop + 18;
        const timeTop = cardTop + 36;
        const tagTop = cardTop + 16;
        const contentTop = cardTop + 68;
        const reactionTop = cardTop + 144;

        return (
          <div key={post.id}>
            <div
              className="absolute left-6 w-[652px] h-[180px] bg-[#f4f9ef] rounded-2xl"
              style={{ top: `${cardTop}px` }}
            />

            <div
              className={`absolute left-10 w-9 h-9 ${post.avatarBg} rounded-[18px] flex items-center justify-center`}
              style={{ top: `${avatarTop}px` }}
            >
              <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-sm tracking-[0] leading-[normal]">
                {post.initial}
              </span>
            </div>

            <div
              className="absolute left-[84px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141911] text-[13px] tracking-[0] leading-[normal]"
              style={{ top: `${usernameTop}px` }}
            >
              {post.username}
            </div>

            <div
              className="absolute left-[84px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[11px] whitespace-nowrap tracking-[0] leading-[normal]"
              style={{ top: `${timeTop}px` }}
            >
              {post.time}
            </div>

            {post.useImgTag ? (
              <>
                <img
                  className="absolute left-[575px] w-[68px] h-6"
                  style={{ top: `${tagTop}px` }}
                  alt="P tg"
                  src={pTg2}
                />
                <div
                  className="absolute left-[590px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f8c0c] text-[10px] whitespace-nowrap tracking-[0] leading-[normal]"
                  style={{ top: `${tagTop + 6}px` }}
                >
                  {post.tagLabel}
                </div>
              </>
            ) : (
              <>
                <div
                  className={`absolute left-[580px] w-[68px] h-6 ${post.tagBg} rounded-xl`}
                  style={{ top: `${tagTop}px` }}
                />
                <div
                  className={`absolute left-[590px] [font-family:'Inter-SemiBold',Helvetica] font-semibold ${post.tagTextColor} text-[10px] whitespace-nowrap tracking-[0] leading-[normal]`}
                  style={{ top: `${tagTop + 6}px` }}
                >
                  {post.tagLabel}
                </div>
              </>
            )}

            <p
              className="absolute left-10 w-[580px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[13px] tracking-[0] leading-5"
              style={{ top: `${contentTop}px` }}
            >
              {post.content}
            </p>

            {post.reactions.map((reaction, rIdx) => {
              const reactionLeftPositions = [40, 140, 240];
              const reactionTextLeftPositions = [56, 156, 256];
              return (
                <div key={rIdx}>
                  <div
                    className="absolute w-[88px] h-6 bg-white rounded-xl"
                    style={{
                      top: `${reactionTop}px`,
                      left: `${reactionLeftPositions[rIdx]}px`,
                    }}
                  />
                  <div
                    className="absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[11px] whitespace-nowrap tracking-[0] leading-[normal]"
                    style={{
                      top: `${reactionTop + 6}px`,
                      left: `${reactionTextLeftPositions[rIdx]}px`,
                    }}
                  >
                    {reaction.emoji} {reaction.count}
                  </div>
                </div>
              );
            })}

            <div
              className={`absolute left-[572px] w-20 h-6 ${post.helpedBg} rounded-xl`}
              style={{ top: `${reactionTop}px` }}
            />
            <div
              className={`absolute left-[580px] [font-family:'Inter-SemiBold',Helvetica] font-semibold ${post.helpedTextColor} text-[11px] whitespace-nowrap tracking-[0] leading-[normal]`}
              style={{ top: `${reactionTop + 6}px` }}
            >
              {post.helpedText}
            </div>
          </div>
        );
      })}
    </div>
  );
};
