export const AiPatternInsightsSection = (): JSX.Element => {
  const insights = [
    {
      id: 1,
      text: "Stress spikes Tuesday mornings — schedule lighter tasks then.",
      bgTop: "top-[98px]",
      bgLeft: "left-4",
      textTop: "top-[103px]",
      textLeft: "left-6",
    },
    {
      id: 2,
      text: "Mood improves 34% on days you log before 9 AM.",
      bgTop: "top-[154px]",
      bgLeft: "left-3",
      textTop: "top-[171px]",
      textLeft: "left-[31px]",
    },
    {
      id: 3,
      text: "Sleep goal: 5 of 7 nights this week achieved 7h+.",
      bgTop: "top-[218px]",
      bgLeft: "left-4",
      textTop: "top-[232px]",
      textLeft: "left-[31px]",
    },
  ];

  return (
    <div className="absolute top-[544px] left-[252px] w-[360px] h-[295px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_16px_#0000000d]">
      <div className="absolute top-0 left-0 w-[360px] h-1.5 bg-[#8cd644]" />

      <div className="top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-[15px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
        ✨ AI Insights
      </div>

      <div className="top-12 left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[11px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
        Based on your patterns
      </div>

      {insights.map((insight) => (
        <div key={insight.id}>
          <div
            className={`absolute ${insight.bgTop} ${insight.bgLeft} w-[312px] h-[50px] bg-[#f4f9ef] rounded-xl`}
          />
          <p
            className={`absolute ${insight.textTop} ${insight.textLeft} w-[264px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[11px] tracking-[0] leading-[17px]`}
          >
            {insight.text}
          </p>
        </div>
      ))}
    </div>
  );
};
