export const CampusEventsHighlightsSection = (): JSX.Element => {
  const events = [
    {
      id: 1,
      emoji: "🧘",
      title: "Mindfulness Workshop",
      time: "3:00 PM · Room B204",
      bg: "bg-[#ddf7b7]",
      top: "top-[74px]",
      emojiTop: "top-[84px]",
      titleTop: "top-[82px]",
      timeTop: "top-[100px]",
      arrowBgTop: "top-[84px]",
      arrowTop: "top-[92px]",
    },
    {
      id: 2,
      emoji: "🗣",
      title: "Peer Support Circle",
      time: "5:00 PM · Online",
      bg: "bg-[#e0dbff]",
      top: "top-[140px]",
      emojiTop: "top-[150px]",
      titleTop: "top-[148px]",
      timeTop: "top-[166px]",
      arrowBgTop: "top-[150px]",
      arrowTop: "top-[158px]",
    },
    {
      id: 3,
      emoji: "📚",
      title: "Study Break Yoga",
      time: "7:00 PM · Gym Hall",
      bg: "bg-[#fff2d1]",
      top: "top-[206px]",
      emojiTop: "top-[216px]",
      titleTop: "top-[214px]",
      timeTop: "top-[232px]",
      arrowBgTop: "top-[216px]",
      arrowTop: "top-56",
    },
  ];

  return (
    <div className="absolute top-[558px] left-[1009px] w-[400px] h-[280px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_16px_#0000000d]">
      <div className="top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-[15px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
        Campus Events Today
      </div>

      <div className="top-12 left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[11px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
        Don&#39;t miss these
      </div>

      {events.map((event) => (
        <div key={event.id}>
          <div
            className={`absolute ${event.top} left-6 w-[352px] h-[54px] ${event.bg} rounded-[14px]`}
          />

          <div
            className={`${event.emojiTop} left-[52px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl whitespace-nowrap absolute tracking-[0] leading-[normal]`}
          >
            {event.emoji}
          </div>

          <div
            className={`${event.titleTop} left-[82px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141911] text-[13px] absolute tracking-[0] leading-[normal]`}
          >
            {event.title}
          </div>

          <div
            className={`${event.timeTop} left-[82px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[11px] whitespace-nowrap absolute tracking-[0] leading-[normal]`}
          >
            {event.time}
          </div>

          <div
            className={`absolute ${event.arrowBgTop} left-[328px] w-7 h-7 bg-white rounded-[14px]`}
          />

          <div
            className={`${event.arrowTop} left-[337px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#596654] text-[11px] whitespace-nowrap absolute tracking-[0] leading-[normal]`}
          >
            →
          </div>
        </div>
      ))}
    </div>
  );
};
