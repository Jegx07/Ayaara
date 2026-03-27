export const InterviewPrepSection = (): JSX.Element => {
  const practiceTopics = [
    { label: "System Design" },
    { label: "DSA Patterns" },
    { label: "Behavioral Questions" },
    { label: "HR Round Tips" },
  ];

  return (
    <div className="top-[592px] left-[832px] w-[560px] h-[280px] absolute bg-white rounded-[20px] shadow-[0px_4px_20px_#0000000f]">
      <div className="absolute top-0 left-0 w-[560px] h-[5px] bg-[#e0dbff]" />

      <div className="absolute top-5 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
        🎤 Interview Prep
      </div>

      <p className="absolute top-11 left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
        AI-powered mock interviews &amp; coaching
      </p>

      <div className="absolute top-[70px] left-4 w-[528px] h-[60px] bg-[#f4f9ef] rounded-xl" />

      <p className="absolute top-[82px] left-7 w-[490px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-xs tracking-[0] leading-[normal]">
        Last Mock Score: 68% · Improve system design focus
      </p>

      <p className="absolute top-[100px] left-7 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
        📅 Next session recommended: Apr 3
      </p>

      <div className="absolute top-[148px] left-5 w-[252px] h-10 bg-[#141a12] rounded-[20px]" />

      <div className="absolute top-[162px] left-[52px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xs tracking-[0] leading-[normal]">
        🎙 Start Mock Interview
      </div>

      <div className="absolute top-[148px] left-[284px] w-[252px] h-10 bg-[#f4f9ef] rounded-[20px]" />

      <div className="absolute top-[162px] left-[324px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#596654] text-xs tracking-[0] leading-[normal]">
        📚 Study Guide
      </div>

      <div className="absolute top-[206px] left-5 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-xs tracking-[0] leading-[normal]">
        Practice Topics:
      </div>

      {practiceTopics.map((topic, index) => (
        <div key={index}>
          <div
            className="absolute top-56 h-6 bg-[#def7b8] rounded-xl"
            style={{ left: `${20 + index * 130}px`, width: "118px" }}
          />
          <div
            className="absolute top-[230px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#141a12] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap"
            style={{ left: `${28 + index * 130}px` }}
          >
            {topic.label}
          </div>
        </div>
      ))}
    </div>
  );
};
