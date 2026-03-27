export const RecommendedCareerMatchesSection = (): JSX.Element => {
  const careerMatches = [
    {
      id: 1,
      bgColor: "bg-[#def7b8]",
      emoji: "💼",
      title: "Software Engineer",
      match: "92% match",
      demand: "High demand · ₹12–25 LPA",
      topOffset: "top-[78px]",
      iconTopOffset: "top-[88px]",
      emojiTopOffset: "top-[100px]",
      titleTopOffset: "top-[88px]",
      matchTopOffset: "top-[108px]",
      demandTopOffset: "top-[122px]",
      btnTopOffset: "top-24",
      btnLabelTopOffset: "top-[102px]",
    },
    {
      id: 2,
      bgColor: "bg-[#e0dbff]",
      emoji: "🤖",
      title: "AI/ML Researcher",
      match: "87% match",
      demand: "Emerging field · ₹15–40 LPA",
      topOffset: "top-[166px]",
      iconTopOffset: "top-44",
      emojiTopOffset: "top-[188px]",
      titleTopOffset: "top-44",
      matchTopOffset: "top-[196px]",
      demandTopOffset: "top-[210px]",
      btnTopOffset: "top-[184px]",
      btnLabelTopOffset: "top-[190px]",
    },
    {
      id: 3,
      bgColor: "bg-[#d9f2ff]",
      emoji: "📊",
      title: "Data Analyst",
      match: "81% match",
      demand: "Stable demand · ₹8–18 LPA",
      topOffset: "top-[254px]",
      iconTopOffset: "top-[264px]",
      emojiTopOffset: "top-[276px]",
      titleTopOffset: "top-[264px]",
      matchTopOffset: "top-[284px]",
      demandTopOffset: "top-[298px]",
      btnTopOffset: "top-[272px]",
      btnLabelTopOffset: "top-[278px]",
    },
  ];

  return (
    <div className="top-[222px] left-[252px] w-[560px] h-[350px] absolute bg-white rounded-[20px] shadow-[0px_4px_20px_#0000000f]">
      <div className="absolute top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-base tracking-[0] leading-[normal] whitespace-nowrap">
        🎯 Your Career Matches
      </div>

      <p className="absolute top-12 left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-xs tracking-[0] leading-[normal]">
        Based on skills, interests &amp; mood patterns
      </p>

      {careerMatches.map((career) => (
        <div key={career.id}>
          <div
            className={`absolute ${career.topOffset} left-4 w-[528px] h-[72px] bg-[#f4f9ef] rounded-[14px]`}
          />

          <div
            className={`absolute ${career.iconTopOffset} left-7 w-11 h-11 ${career.bgColor} rounded-xl`}
          />

          <div
            className={`${career.emojiTopOffset} left-[38px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#141a12] text-lg whitespace-nowrap absolute tracking-[0] leading-[normal]`}
          >
            {career.emoji}
          </div>

          <div
            className={`absolute ${career.titleTopOffset} left-[82px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-sm tracking-[0] leading-[normal]`}
          >
            {career.title}
          </div>

          <div
            className={`absolute ${career.matchTopOffset} left-[82px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#38721e] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap`}
          >
            {career.match}
          </div>

          <p
            className={`absolute ${career.demandTopOffset} left-[82px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap`}
          >
            {career.demand}
          </p>

          <div
            className={`absolute ${career.btnTopOffset} left-[468px] w-[60px] h-6 bg-[#8cd645] rounded-xl`}
          />

          <div
            className={`${career.btnLabelTopOffset} left-[476px] absolute [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141a12] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap`}
          >
            Apply →
          </div>
        </div>
      ))}

      <div className="absolute top-[342px] left-5 w-[520px] h-7 bg-[#141a12] rounded-[14px]" />

      <p className="absolute top-[350px] left-[168px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xs tracking-[0] leading-[normal]">
        🔍 Explore All Career Matches
      </p>
    </div>
  );
};
