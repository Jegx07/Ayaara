export const ActiveSupportGroupsSection = (): JSX.Element => {
  const groups = [
    {
      id: 1,
      emoji: "📚",
      emojiBg: "#ddf7b7",
      name: "Exam Stress Warriors",
      meta: "234 members · Meeting: Tonight 8 PM",
    },
    {
      id: 2,
      emoji: "😴",
      emojiBg: "#e0dbff",
      name: "Better Sleep Club",
      meta: "156 members · Meeting: Thu 9 PM",
    },
    {
      id: 3,
      emoji: "🌱",
      emojiBg: "#fff2d1",
      name: "Mindful Mondays",
      meta: "89 members · Meeting: Mon 7 AM",
    },
  ];

  return (
    <div className="absolute top-[92px] left-[972px] w-[440px] h-[300px] bg-[#191e16] rounded-[20px] overflow-hidden">
      <div className="top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-base whitespace-nowrap absolute tracking-[0] leading-[normal]">
        Active Support Groups
      </div>

      <p className="top-[50px] left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-xs absolute tracking-[0] leading-[normal]">
        Join a group that fits you
      </p>

      {groups.map((group, index) => {
        const topBase = 80 + index * 70;
        return (
          <div key={group.id}>
            <div
              className="absolute left-6 w-[392px] h-[58px] bg-[#2d3828] rounded-[14px]"
              style={{ top: `${topBase}px` }}
            />

            <div
              className="absolute left-9 w-[34px] h-[34px] rounded-[17px]"
              style={{
                top: `${topBase + 12}px`,
                backgroundColor: group.emojiBg,
              }}
            />

            <div
              className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-base whitespace-nowrap absolute tracking-[0] leading-[normal]"
              style={{ top: `${topBase + 17}px`, left: "52px" }}
            >
              {group.emoji}
            </div>

            <div
              className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[13px] absolute tracking-[0] leading-[normal]"
              style={{ top: `${topBase + 12}px`, left: "80px" }}
            >
              {group.name}
            </div>

            <p
              className="absolute left-20 w-[270px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[10px] tracking-[0] leading-[normal]"
              style={{ top: `${topBase + 30}px` }}
            >
              {group.meta}
            </p>

            <div
              className="absolute left-[368px] w-9 h-[34px] bg-[#38721e] rounded-[17px]"
              style={{ top: `${topBase + 12}px` }}
            />

            <div
              className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#8cd644] text-[13px] absolute tracking-[0] leading-[normal]"
              style={{ top: `${topBase + 19}px`, left: "380px" }}
            >
              →
            </div>
          </div>
        );
      })}
    </div>
  );
};
