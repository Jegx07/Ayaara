export const SkillRecommendationsSection = (): JSX.Element => {
  const recommendations = [
    {
      id: 1,
      bg: "bg-[#f4f9ef]",
      text: "Focus on Time Management — complete 2 short planning exercises daily to build consistency.",
    },
    {
      id: 2,
      bg: "bg-[#fff2d1]",
      text: "Your Mathematics score dropped 5pts — review calculus concepts before your next exam.",
    },
    {
      id: 3,
      bg: "bg-[#def7b8]",
      text: "Excellent Teamwork score! Consider applying for a leadership role in your college clubs.",
    },
  ];

  return (
    <div className="top-[602px] left-[252px] w-[840px] h-[280px] absolute bg-white rounded-[20px] shadow-[0px_4px_20px_#0000000f]">
      <div className="absolute top-0 left-0 w-[840px] h-[5px] bg-[#8cd645]" />

      <div className="absolute top-5 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
        ✨ AI Skill Recommendations
      </div>

      <p className="absolute top-11 left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
        Based on your assessment data
      </p>

      {recommendations.map((item, index) => {
        const topBg = 72 + index * 66;
        const topText = 80 + index * 66;
        return (
          <div key={item.id}>
            <div
              className={`absolute left-4 w-[808px] h-[52px] ${item.bg} rounded-xl`}
              style={{ top: `${topBg}px` }}
            />
            <p
              className="absolute left-7 w-[780px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-xs tracking-[0] leading-[normal]"
              style={{ top: `${topText}px` }}
            >
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};
